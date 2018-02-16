/**
 * Minimum Edit Distance
 * @exports minimum-edit-distance
 */
module.exports = {
  diff,
  reconstruct
}
/**
 * @typedef {Object} diffObj
 * @property {number} distance - the minimum edit distance
 * @property {string[]} backtrace - array of operators necessary to transform p2 into p1
 */

/**
 * Returns diffObj with 'distance' and 'backtrace'
 * @param {(string|string[])} str1 - first string or array of strings
 * @param {(string|string[])} str2 - second string or array of strings
 * @param {number} [subCost=1] - weighted cost of subsitution
 * @param {number} [insertCost=1] - weighted cost of insertion
 * @param {number} [delCost=1] - weighted cost of insertion
 * @returns {diffObj}
 */
function diff(str1 = '', str2 = '', subCost = 1, insertCost = 1, delCost = 1) {
  const str1Length = str1.length
  const str2Length = str2.length
  const min = Math.min,
    max = Math.max
  const matrix = []
  const backtrace = []

  let i = str2Length + 1
  while (i--) {
    matrix[i] = [i]
    backtrace[i] = [2]
  }

  let j = str1Length + 1
  while (j--) {
    matrix[0][j] = j
    backtrace[0][j] = 3
  }

  // fills in distance matrix
  for (let i = 1; i <= str2Length; i++) {
    for (let j = 1; j <= str1Length; j++) {
      let pointer = 0
      if (str2[i - 1] === str1[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1]
        backtrace[i][j] = pointer
      } else {
        const substDist = matrix[i - 1][j - 1] + subCost
        const insertDist = matrix[i][j - 1] + insertCost
        const deleteDist = matrix[i - 1][j] + delCost
        let minDist
        if (substDist <= insertDist && substDist <= deleteDist) {
          minDist = substDist
          pointer = 1
        } else if (deleteDist <= insertDist) {
          minDist = deleteDist
          pointer = 2
        } else {
          minDist = insertDist
          pointer = 3
        }
        matrix[i][j] = minDist
        backtrace[i][j] = pointer
      }
    }
  }

  // performs backtrace
  let di = str2Length,
    dj = str1Length,
    incrementer = 0,
    index = str1.length - 1,
    last
  const trace = []
  while (di || dj) {
    let bt = backtrace[di][dj]
    const aChar = () => str1[index--]
    if (bt <= 1) {
      dj = max(0, dj - 1)
      di = max(0, di - 1)
      if (bt === 0) {
        if (bt === last) {
          trace[incrementer - 1] = '' + (parseInt(trace[incrementer - 1]) + 1)
        } else {
          trace[incrementer++] = '1'
        }
        index--
      } else if (bt === 1) {
        trace[incrementer++] = 's' + aChar()
      }
    } else if (bt === 2) {
      di = max(0, di - 1)
      if (bt === last) {
        trace[incrementer - 1] = 'd' + ((parseInt(trace[incrementer - 1].slice(1)) || 1) + 1)
      } else {
        trace[incrementer++] = 'd'
      }
    } else if (bt === 3) {
      dj = max(0, dj - 1)
      trace[incrementer++] = 'i' + aChar()
    }
    last = bt
  }

  return {
    'distance': matrix[str2Length][str1Length],
    'backtrace': trace
  }
}

/**
 * Returns the (string or array) str1 from diff
 * @param {(string|string[])} str2 - str2 from diff
 * @param {string[]} trace - backtrace output from diffObj
 * @returns {(string|string[])}
 */
function reconstruct(str2, trace) {
  const isStr = typeof str2 === 'string'

  const prepend = (isString => {
    if (isString) {
      return (preString, postString) => preString + postString
    } else {
      return (_, postArray, preArray = _) => {
        Array.prototype.push.apply(preArray, postArray)
        return preArray
      }
    }
  })(isStr)

  let pointer = str2.length,
    c = isStr ? '' : []
  for (let i = 0, n = trace.length; i < n; i++) {
    const op = trace[i],
      op0 = op[0],
      op1 = op.slice(1),
      skipBlock = parseInt(op)
    if (skipBlock) {
      const skipChars = str2.slice(pointer - skipBlock, pointer)
      c = prepend(skipChars, c)
      pointer -= skipBlock
    } else if (op0 === 's') {
      c = prepend(op1, c, [op1])
      pointer--
    } else if (op0 === 'i') {
      c = prepend(op1, c, [op1])
    } else {
      pointer -= parseInt(op1) || 1
    }
  }
  return c
}
