# voxel-to-mesh

There are a number of techniques for transforming [voxel](https://en.wikipedia.org/wiki/Voxel) data
```javascript
  [
    [0, 0, 0],
    [0, 0, 1]
  ]
```
into polygonal meshes
```javascript
{
  vertices: [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 0],
    [0, 1, 2],
    [0, 0, 2],
    [1, 0, 2],
    [1, 1, 2]
  ],
  indices: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [3, 4, 7, 0],
    [2, 5, 4, 3],
    [0, 7, 6, 1],
    [1, 8, 9, 2],
    [5, 10, 11, 6],
    [8, 11, 10, 9],
    [9, 10, 5, 2],
    [1, 6, 11, 8]
  ]
}
```
Voxel-to-mesh utilizes a basic culling technique where any shared faces between voxels are pruned from the mesh. Furthermore, the vertices of these now unconnected lips are consolidated to remove T-junctions. Removing T-junctions is important for at least 2 reasons.
1. There are instances when T-junctions can cause visible discontinuities in your mesh.
1. Having a closed mesh is necessary for many mesh transformation algorithms such as [catmull-clark](https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface) smoothing.

In the above example, we have two adjacent voxel cubes: `[0,0,0]` and `[0,0,1]`. They share a face so those rects can be culled. We can see the result has 10 indices (ie rects) instead of 12 (2 * 6 faces) and only 12 vertices instead of 16 (2 * 8 vertices). Culling means our meshes are smaller and will render faster.

### install

```shell
  $ npm install voxel-to-mesh
```

## Usage

```javascript
  const voxelToMesh = require('voxel-to-mesh');

  let voxels = [
    [0, 0, 0],
    [0, 0, 1]
  ];

  const options = {
  	color: [0, 255, 0, 0.5], //rgba
  	flatten: false
  }

  let mesh = voxelToMesh(voxels, options)
```
## API

```
voxelToMesh(voxels [,options])

int[][] voxels
JSON {} options:
	int[] color: default null
	boolean convertToTriangles: default true,
	boolean flatten: default true


```

## license

MIT

