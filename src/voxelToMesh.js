/**
 * exports voxel-to-mesh
 */

import catmull from 'gl-catmull-clark'
import quadsToTris from 'gl-quads-to-tris'

const opts = {
  convertToTriangles: true,
  flatten: true
}

export default voxelToMesh

function voxelToMesh(voxelData, options) {

  Object.assign(opts, options)

  let voxObj = parseData(voxelData)

  voxObj = removeDuplicateFaces(voxObj)
  voxObj = removeUnusedVertices(voxObj)

  if (opts.convertToTriangles) {
    voxObj.indices = quadsToTris(voxObj.indices)
    voxObj.colors = voxObj.colors.reduce((arr, color) => arr.concat([color, color]),[])
  }

  if (opts.flatten) {
    const flatten = (a,b) => a.concat(b)
    voxObj.indices = voxObj.indices.reduce(flatten, [])
    voxObj.vertices = voxObj.vertices.reduce(flatten, [])
    voxObj.colors = voxObj.colors.reduce(flatten, [])
  }
  return voxObj
}

function makeCopyCat(index) {
  let table = new Set()
  const makeCat = i => {
    return {
      value: i,
      get table() {
        return table
      },
      set table(t) {
        table = t
      },
      update(copyCat) {
        table = copyCat.table = new Set([...table, ...copyCat.table])
        table.forEach(cat => {
          cat.value = copyCat.value
          cat.table = table
        })
      },
      clone() {
        const anotherCat = makeCat(this.value)
        table.add(anotherCat)
        return anotherCat
      }
    }
  }
  const newCat = makeCat(index)
  table.add(newCat)
  return newCat
}

function newBox(xyz, cellOffset) {
  const sumVec = (v1, v2) => v1.map((val, index) => val + v2[index])
  const pOffset = sumVec.bind(null, xyz)

  const [a, b, c, d, e, f, g, h] = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1]
  ].map(pOffset)

  const vertices = [a, b, c, d, e, f, g, h]

  const [c0, c1, c2, c3, c4, c5, c6, c7] = [
    0, 1, 2, 3, 4, 5, 6, 7
  ].map(c => makeCopyCat(c + cellOffset))

  const copy = cat => cat.clone()

  const indices = [
    [c2, c3, c1, c0], //originals
    [c4, c5, c7, c6], //originals

    [c3, c7, c5, c1].map(copy), [c0, c4, c6, c2].map(copy),
    [c1, c5, c4, c0].map(copy), [c2, c6, c7, c3].map(copy)
  ]

  return {
    vertices,
    indices
  }
}

function parseData(voxelData) {

  let vertices = [],
    indices = [],
    colors = []
  let cellOffset = 0
  const DEFAULT_COLOR = [0,0,0,1]
  const VERTS_PER_CUBE = 8
  const FACES_PER_RECT = 6

  voxelData.forEach(voxel => {
    const cube = newBox(voxel.slice(0, 3), cellOffset)
    cellOffset += VERTS_PER_CUBE
    const color = voxel[3] || DEFAULT_COLOR

    vertices = vertices.concat(cube.vertices)
    indices = indices.concat(cube.indices)
    colors = colors.concat(Array(FACES_PER_RECT).fill(color))
  })

  return {
    vertices,
    indices,
    colors
  }
}

function removeDuplicateFaces({
  vertices,
  indices,
  colors
}) {

  const indiceMap = new Map()
  const indexWhackList = new Set()
  const keyify = arr => arr.map(v => vertices[v]).sort().join('-')

  indices = indices
    .map((rect, index) => {
      const key = keyify(rect.map(ri => ri.value))
      if (indiceMap.has(key)) {
        const face = indiceMap.get(key)
        const faceIndex = face.index
        indexWhackList.add(index).add(faceIndex)

        rect.forEach((ri, i) => {
          const reverseIndex = 3 - i
          ri.update(face.rect[reverseIndex])
        })

      } else {
        indiceMap.set(key, {
          index,
          rect
        })
      }
      return rect
    })
    .filter((_, i) => !indexWhackList.has(i))
    .map(rect => rect.map(ri => ri.value))

  colors = colors.filter((color, i) => !indexWhackList.has(i))

  return {
    vertices,
    indices,
    colors
  }
}

function removeUnusedVertices({
  vertices,
  indices,
  colors
}) {
  const newVertices = []
  const indexMap = new Map()
  let indexCounter = 0
  indices = indices.map(indexArray => indexArray.map(index => {
    if (!indexMap.has(index)) {
      indexMap.set(index, indexCounter++)
    }
    const i = indexMap.get(index)
    newVertices[i] = vertices[index]
    return i
  }))

  return {
    'vertices': newVertices,
    indices,
    colors
  }
}

