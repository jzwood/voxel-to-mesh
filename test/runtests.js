const assert = require('./assert.js').assert
const minimumEditDistance = require('../src/med.js')
const colors = require('colors')
const fs = require('fs')
const leven = require('leven')

/*
 * TESTS
 */

console.log('trivial cases:'.yellow)
let a = '', b = 'hello world'
let d1 = minimumEditDistance.diff(a, b), b1 = leven(a, b)

assert.equals(d1.distance, b1, 'dist1 === dist2\t\t'.cyan)
assert.equals(a, minimumEditDistance.reconstruct(b, d1.backtrace), 'str1 === backtrace(str2)'.magenta)

let d2 = minimumEditDistance.diff(b, a), b2 = leven(b, a)
assert.equals(d2.distance, b2, 'dist1 === dist2\t\t'.cyan)
assert.equals(b, minimumEditDistance.reconstruct(a, d2.backtrace), 'str1 === backtrace(str2)'.magenta)

console.log('diff tests:'.yellow)

const testFiles = ['a', 'b', 'c']
for (let i in testFiles) {
	const path = `test/randomTextFiles/${testFiles[i]}`
	let f1 = fs.readFileSync(`${path}1.txt`, 'utf8')
	let f2 = fs.readFileSync(`${path}2.txt`, 'utf8')

	const strDiff = minimumEditDistance.diff(f1, f2)
	const benchmarkDistance = leven(f1, f2)

	// is distance correct
	assert.equals(strDiff.distance, benchmarkDistance, 'dist1 === dist2\t\t'.cyan)
	// is backtrace correct
	assert.equals(f1, minimumEditDistance.reconstruct(f2, strDiff.backtrace), 'str1 === backtrace(str2)'.magenta)

	let f1_Array = f1.split('\n')
	let f2_Array = f2.split('\n')

	let arrDiff = minimumEditDistance.diff(f1_Array, f2_Array)
	//is array backtrace correct
	assert.equals(f1_Array, minimumEditDistance.reconstruct(f2_Array, arrDiff.backtrace), 'arr1 === backtrace(arr2)'.white)
}

console.log('random ascii tests:'.yellow)
const randomAscii = (asciiLow, asciiHi, numOfChars) => String.fromCharCode.apply(undefined,Array(numOfChars).fill(0).map(i => asciiLow + ~~(Math.random() * (asciiHi - asciiLow))))

for(let i=0, testCases=100; i<testCases; i++){
	let str1 = randomAscii(0, 256, ~~(Math.random() * 100))
	let str2 = randomAscii(0, 256, ~~(Math.random() * 100))

	let difference = minimumEditDistance.diff(str1, str2), benchmark = leven(str1, str2)

	assert.equals(difference.distance, benchmark, `test ${i}a \t`.cyan)
	assert.equals(str1, minimumEditDistance.reconstruct(str2, difference.backtrace), `test ${i}b \t`.cyan)
}

const moreAsciiTests = require('./misctests.js')
