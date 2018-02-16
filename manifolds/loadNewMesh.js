const utils = require('../utils/utils')
const initRay = require('../ship/ray')

module.exports = (gl, newMesh, visualType) => {
  const newMapMesh = new BABYLON.Mesh("custom", gl.scene)

  newMapMesh.freezeNormals()
  newMapMesh.visibility = !!visualType

  const vertexData = new BABYLON.VertexData()

  const positions = utils.flatten(newMesh.positions)
  const indices = utils.flatten(newMesh.cells)

  const color = [0,0,0, 1]
  const colors = utils.flatten(Array(indices.length).fill(color))

  let normals = []

  BABYLON.VertexData.ComputeNormals(positions, indices, normals)

  Object.assign(vertexData, {
    positions,
    indices,
    //colors,
    normals
  })

  vertexData.applyToMesh(newMapMesh)

  const material = new BABYLON.StandardMaterial('material01', gl.scene)
  newMapMesh.material = material

  //material.diffuseColor = new BABYLON.Color3(0, 1, 0)
  //material.specularColor = new BABYLON.Color3(1, 0, 0)
  //material.emissiveColor = new BABYLON.Color3(0, 0, 1)

  //material.specularColor = new BABYLON.Color3(0, 0, 0)
  //material.diffuseColor = new BABYLON.Color3(1, 1, 1)

  //material.ambientColor = new BABYLON.Color3(1, 0, 0)
  material.backFaceCulling = true//false
  material.wireframe = (visualType === 'wireframe')
  gl.meshes = gl.meshes || {}
  const map = gl.meshes.mapMesh
  if(map) map.dispose()
  gl.meshes.mapMesh = newMapMesh

  gl.ray = initRay(gl)
}
