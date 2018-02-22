(function () {
'use strict';

function quadsToTris(cells) {

    var newCells = [];

    for (var iCell = 0; iCell < cells.length; ++iCell) {

        var cell = cells[iCell];

        newCells.push([cell[0], cell[1], cell[2]]);
        newCells.push([cell[0], cell[2], cell[3]]);
    }

    return newCells;
}

var glQuadsToTris= quadsToTris;

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * @license MIT
 * Copyright (c) 2018 Jake Wood
 */

function voxelToMesh$1(voxelData, options) {
  var opts = {
    color: null,
    convertToTriangles: true,
    flatten: true
  };

  Object.assign(opts, options);

  var voxObj = parseData(voxelData);

  voxObj = removeDuplicateFaces(voxObj);
  voxObj = removeUnusedVertices(voxObj);

  if (opts.convertToTriangles) {
    voxObj.indices = glQuadsToTris(voxObj.indices);
  }

  if (opts.color) {
    voxObj.colors = Array(voxObj.indices.length).fill(opts.color);
  }

  if (opts.flatten) {
    var flatten = function flatten(a, b) {
      return a.concat(b);
    };
    voxObj.indices = voxObj.indices.reduce(flatten, []);
    voxObj.vertices = voxObj.vertices.reduce(flatten, []);
    if (opts.color) {
      voxObj.colors = voxObj.colors.reduce(flatten, []);
    }
  }
  return voxObj;
}

function makeCopyCat(index) {
  var table = new Set();
  var makeCat = function makeCat(i) {
    return {
      value: i,
      get table() {
        return table;
      },
      set table(t) {
        table = t;
      },
      update: function update(copyCat) {
        table = copyCat.table = new Set([].concat(toConsumableArray(table), toConsumableArray(copyCat.table)));
        table.forEach(function (cat) {
          cat.value = copyCat.value;
          cat.table = table;
        });
      },
      clone: function clone() {
        var anotherCat = makeCat(this.value);
        table.add(anotherCat);
        return anotherCat;
      }
    };
  };
  var newCat = makeCat(index);
  table.add(newCat);
  return newCat;
}

function newBox(xyz, cellOffset) {
  var sumVec = function sumVec(v1, v2) {
    return v1.map(function (val, index) {
      return val + v2[index];
    });
  };
  var pOffset = sumVec.bind(null, xyz);

  var _map = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]].map(pOffset),
      _map2 = slicedToArray(_map, 8),
      a = _map2[0],
      b = _map2[1],
      c = _map2[2],
      d = _map2[3],
      e = _map2[4],
      f = _map2[5],
      g = _map2[6],
      h = _map2[7];

  var vertices = [a, b, c, d, e, f, g, h];

  var _map3 = [0, 1, 2, 3, 4, 5, 6, 7].map(function (c) {
    return makeCopyCat(c + cellOffset);
  }),
      _map4 = slicedToArray(_map3, 8),
      c0 = _map4[0],
      c1 = _map4[1],
      c2 = _map4[2],
      c3 = _map4[3],
      c4 = _map4[4],
      c5 = _map4[5],
      c6 = _map4[6],
      c7 = _map4[7];

  var copy = function copy(cat) {
    return cat.clone();
  };

  var indices = [[c2, c3, c1, c0], //originals
  [c4, c5, c7, c6], //originals

  [c3, c7, c5, c1].map(copy), [c0, c4, c6, c2].map(copy), [c1, c5, c4, c0].map(copy), [c2, c6, c7, c3].map(copy)];

  return {
    vertices: vertices,
    indices: indices
  };
}

function parseData(voxelData) {

  var vertices = [],
      indices = [];
  var cellOffset = 0;
  var VERTS_PER_CUBE = 8;

  var tally = {};

  voxelData.forEach(function (voxel) {
    var key = voxel.toString();
    if (tally[key]) {
      console.warn('voxel [' + key + '] already exists');
    } else {
      tally[key] = true;
      var cube = newBox(voxel, cellOffset);
      cellOffset += VERTS_PER_CUBE;

      vertices = vertices.concat(cube.vertices);
      indices = indices.concat(cube.indices);
    }
  });

  return {
    vertices: vertices,
    indices: indices
  };
}

function removeDuplicateFaces(_ref) {
  var vertices = _ref.vertices,
      indices = _ref.indices;


  var indiceMap = new Map();
  var indexWhackList = new Set();
  var keyify = function keyify(arr) {
    return arr.map(function (v) {
      return vertices[v];
    }).sort().join('-');
  };

  indices = indices.map(function (rect, index) {
    var key = keyify(rect.map(function (ri) {
      return ri.value;
    }));
    if (indiceMap.has(key)) {
      var face = indiceMap.get(key);
      var faceIndex = face.index;
      indexWhackList.add(index).add(faceIndex);

      rect.forEach(function (ri, i) {
        var reverseIndex = 3 - i;
        ri.update(face.rect[reverseIndex]);
      });
    } else {
      indiceMap.set(key, {
        index: index,
        rect: rect
      });
    }
    return rect;
  }).filter(function (_, i) {
    return !indexWhackList.has(i);
  }).map(function (rect) {
    return rect.map(function (ri) {
      return ri.value;
    });
  });

  return {
    vertices: vertices,
    indices: indices
  };
}

function removeUnusedVertices(_ref2) {
  var vertices = _ref2.vertices,
      indices = _ref2.indices;

  var newVertices = [];
  var indexMap = new Map();
  var indexCounter = 0;
  indices = indices.map(function (indexArray) {
    return indexArray.map(function (index) {
      if (!indexMap.has(index)) {
        indexMap.set(index, indexCounter++);
      }
      var i = indexMap.get(index);
      newVertices[i] = vertices[index];
      return i;
    });
  });

  return {
    'vertices': newVertices,
    indices: indices
  };
}

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

function addVoxels(voxels, options, isWireframe) {
  //Create a custom mesh
  var customMesh = new BABYLON.Mesh("custom", scene);

  var mesh = voxelToMesh$1(voxels, options);

  var positions = mesh.vertices;
  var indices = mesh.indices;
  var colors = mesh.colors;

  //Empty array to contain calculated values
  var normals = [];

  var vertexData = new BABYLON.VertexData();
  BABYLON.VertexData.ComputeNormals(positions, indices, normals);

  //Assign positions, indices and normals to vertexData
  vertexData.positions = positions;
  vertexData.indices = indices;
  vertexData.normals = normals;
  vertexData.colors = colors;

  //Apply vertexData to custom mesh
  vertexData.applyToMesh(customMesh);

  var material = new BABYLON.StandardMaterial('material01', scene);
  customMesh.material = material;
  material.backFaceCulling = true;
  material.wireframe = isWireframe;
}

var createScene = function createScene() {

  var scene = new BABYLON.Scene(engine);
  var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 5, -30));
  camera.attachControl(canvas, true);

  var urlParams = new URLSearchParams(window.location.search);
  var v = urlParams.get('v') === '1';

  if (v) {
    //x,y,z,color
    var voxels = [[-1, -1, -1], [0, -1, -1], [0, 0, -1]];

    addVoxels(voxels, {
      color: [0, 0, 255, 1]
    });

    var voxels2 = [[-1, 0, -1], [-1, -1, 0], [-1, 0, 0]];

    addVoxels(voxels2, {
      color: [255, 0, 0, 1]
    });

    var voxels3 = [[0, -1, 0], [0, 0, 0]];

    addVoxels(voxels3, {
      color: [255, 255, 255, 1]
    });
  } else {
    var _voxels = [[0, 0, 0], [0, 0, -1], [0, -1, 0], [0, -1, -1], [-1, 0, 0], [-1, 0, -1], [-1, -1, 0], [-1, -1, -1]];

    addVoxels(_voxels, {}, true);
  }

  return scene;
};

var scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});

}());
