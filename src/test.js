import voxelToMesh from './voxelToMesh'

var canvas = document.getElementById("renderCanvas")
var engine = new BABYLON.Engine(canvas, true)

function addVoxels(voxels, options, isWireframe) {
  //Create a custom mesh
  var customMesh = new BABYLON.Mesh("custom", scene)

  const mesh = voxelToMesh(voxels, options)

  var positions = mesh.vertices
  var indices = mesh.indices
  var colors = mesh.colors

  //Empty array to contain calculated values
  var normals = []

  var vertexData = new BABYLON.VertexData()
  BABYLON.VertexData.ComputeNormals(positions, indices, normals)

  //Assign positions, indices and normals to vertexData
  vertexData.positions = positions
  vertexData.indices = indices
  vertexData.normals = normals
  vertexData.colors = colors

  //Apply vertexData to custom mesh
  vertexData.applyToMesh(customMesh)

  var material = new BABYLON.StandardMaterial('material01', scene)
  customMesh.material = material
  material.backFaceCulling = true
  material.wireframe = isWireframe
}

var createScene = function() {

  var scene = new BABYLON.Scene(engine)
  var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene)

  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene)
  camera.setPosition(new BABYLON.Vector3(0, 5, -30))
  camera.attachControl(canvas, true)

  var urlParams = new URLSearchParams(window.location.search)
  var v = urlParams.get('v') === '1'

  if (v) {
    //x,y,z,color
    const voxels = [
      [-1, -1, -1],
      [0, -1, -1],
      [0, 0, -1]
    ]

    addVoxels(voxels, {
      color: [0, 0, 255, 1]
    })

    const voxels2 = [
      [-1, 0, -1],
      [-1, -1, 0],
      [-1, 0, 0]
    ]

    addVoxels(voxels2, {
      color: [255, 0, 0, 1]
    })

    const voxels3 = [
      [0, -1, 0],
      [0, 0, 0]
    ]

    addVoxels(voxels3, {
      color: [255, 255, 255, 1]
    })
  } else {
    const voxels = [
      [0, 0, 0],
      [0, 0, -1],
      [0, -1, 0],
      [0, -1, -1],
      [-1, 0, 0],
      [-1, 0, -1],
      [-1, -1, 0],
      [-1, -1, -1]
    ]

    addVoxels(voxels, {}, true)
  }

  return scene
}

var scene = createScene()

engine.runRenderLoop(function() {
  scene.render()
})

// Resize
window.addEventListener("resize", function() {
  engine.resize()
})

