/**
 * exports voxel-to-mesh
 */

import quadsToTris from 'gl-quads-to-tris'

const opts = {
  color: null,
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
  }

  if (opts.color) {
    voxObj.colors = Array(voxObj.indices.length).fill(opts.color)
  }

  if (opts.flatten) {
    const flatten = (a, b) => a.concat(b)
    voxObj.indices = voxObj.indices.reduce(flatten, [])
    voxObj.vertices = voxObj.vertices.reduce(flatten, [])
    if(opts.color){
      voxObj.colors = voxObj.colors.reduce(flatten, [])
    }
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

    [c3, c7, c5, c1].map(copy), [c0, c4, c6, c2].map(copy), [c1, c5, c4, c0].map(copy), [c2, c6, c7, c3].map(copy)
  ]

  return {
    vertices,
    indices
  }
}

function parseData(voxelData) {

  let vertices = [],
    indices = []
  let cellOffset = 0
  const DEFAULT_COLOR = [0, 0, 0, 1]
  const VERTS_PER_CUBE = 8
  const FACES_PER_RECT = 6

  const tally = {}

  voxelData.forEach(voxel => {
    const key = voxel.toString()
    if (tally[key]) {
      console.warn(`voxel [${key}] already exists`)
    } else {
      tally[key] = true
      const cube = newBox(voxel, cellOffset)
      cellOffset += VERTS_PER_CUBE

      vertices = vertices.concat(cube.vertices)
      indices = indices.concat(cube.indices)
    }

  })

  return {
    vertices,
    indices
  }
}

function removeDuplicateFaces({
  vertices,
  indices
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

  return {
    vertices,
    indices
  }
}

function removeUnusedVertices({
  vertices,
  indices
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
    indices
  }
}

