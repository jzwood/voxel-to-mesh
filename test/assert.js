const colors = require('colors')

module.exports = {
	"assert": {
		"equals": (a, b, msg='') => {
			const test = "a === b"
			if (typeof a !== typeof b) {
				console.log('type inconsistant'.red, a, b)
				return false
			}
			if (typeof a === 'string' || typeof a === 'number') {
				if (a === b) {
					console.log(msg + ' passed!'.green)
					return true
				} else {
					console.log(msg + ' failed.'.red, a, b)
					return false
				}
			}else if(Object.prototype.toString.call(a) === '[object Array]') {
				for(let i=0, n=a.length; i<n; i++){
					if(a[i] !== b[i]){
						console.log(msg + ' failed.'.red, a, b)
						return false
					}
				}
				console.log(msg + ' passed!'.green)
				return true
			}
		}
	}
}
