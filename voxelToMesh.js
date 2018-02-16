const catmull = require('gl-catmull-clark')
const quadsToTris = require('gl-quads-to-tris')

const opts = {
  smoothing: 0,
  triangles: true,
  flattened: true
}

module.exports = voxelToMesh

function sumVec(v1, v2) {
  return (v1.length === v2.length) ? v1.map((val, index) => val + v2[index]) : console.warn('ERROR: Vectors different length'), null
}

function voxelToMesh(voxelData, options) {

  Object.assign(opts, options)

  let newMesh = data2VertsAndFaces(voxelData)

  newMesh = removeDuplicateFaces(newMesh)
  newMesh = removeUnusedVertices(newMesh)

  if (opts.smoothing) {
    newMesh = catmull(newMesh.vertices, newMesh.indices, 2)
  } else {
    newMesh.indices = quadsToTris(newMesh.indices)
  }

  //newMesh.colors = getColors(newMesh)
  loadNewMesh(gl, newMesh, visualType)
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

function data2VertsAndFaces(voxelData) {

  let vertices = [],
    indices = []
  let cellOffset = 0
  const VERTS_PER_CUBE = 8

  //this 3 loop adds the vertex/face data of cubes in 3d space from map file
  voxelData.forEach((rows, x) => rows
    .forEach((cols, y) => cols
      .forEach((isCube, z) => {
        if (isCube) {
          const cube = newBox([x, y, z], cellOffset)
          cellOffset += VERTS_PER_CUBE

          vertices = vertices.concat(cube.vertices)
          indices = indices.concat(cube.indices)
        }
      })
    )
  )
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
  const edgeMap = new Map()
  const indexWhackList = new Set()
  const keyify = arr => arr.map(v => vertices[v]).sort().join('-')

  indices = indices
    .map((rect, index) => {
      const key = keyify(rect.map(ri => ri.value))
      if (indiceMap.has(key)) {
        const face = indiceMap.get(key)
        const faceIndex = face.index
        indexWhackList.add(index).add(faceIndex)

        const a = rect.map(ri => vertices[ri.value])
        const b = face.rect.map(ri => vertices[ri.value])

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
    .filter((rect, i) => !indexWhackList.has(i))
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

function getColors({
  vertices,
  indices
}) {
  const color = [255, 255, 255, 1]
  return Array(indices.length).fill(color)
}

