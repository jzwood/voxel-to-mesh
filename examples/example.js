const minimumEditDistance = require('../src/med.js');

let str1 = 'dhyfldnsgagfhc';
let str2 = 'dososjhbabadhfhshdsjds';

let difference = minimumEditDistance.diff(str1, str2);

console.log(difference.distance); // 18

console.log(difference.backtrace); // [ 'sc', 'sh', 'sf', 'sg', 'sa', 'sg', '1', 'sn', 'd2', '1', 'sl', 'sf', 'sy', 'd', '1', 'd5', '1' ]

/*
 *  prefix key:
 *    s = substitute
 *    i = insertion
 *    d = deletion #
 *    # = skip num
 */

let stringOne = minimumEditDistance.reconstruct(str2, difference.backtrace);

console.log(str1 === stringOne); // true
