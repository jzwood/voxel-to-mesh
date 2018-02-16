const initManifold = require('./initManifold')
const rmaps = require('./maps.json')
const utils = require('../utils/utils')

function getMaps() {
  return maps.map(utils.parseMap)
}

module.exports = gl => {
  const maps = rmaps.map(utils.parseMap)
  //console.info(maps)

  initManifold(gl, maps[0], 'wireframe')
}
