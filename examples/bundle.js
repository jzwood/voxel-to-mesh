(function () {
'use strict';

var create_1 = create;

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out
}

var clone_1 = clone;

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new Float32Array(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out
}

var fromValues_1 = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out
}

var normalize_1 = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];;;
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out
}

var dot_1 = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

var angle_1 = angle;





/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues_1(a[0], a[1], a[2]);
    var tempB = fromValues_1(b[0], b[1], b[2]);
 
    normalize_1(tempA, tempA);
    normalize_1(tempB, tempB);
 
    var cosine = dot_1(tempA, tempB);

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}

var copy_1 = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out
}

var set_1 = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out
}

var add_1 = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out
}

var subtract_1 = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out
}

var multiply_1 = multiply;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out
}

var divide_1 = divide;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out
}

var min_1 = min;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out
}

var max_1 = max;

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out
}

var scale_1 = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out
}

var scaleAndAdd_1 = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out
}

var distance_1 = distance;

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];;;
    return Math.sqrt(x*x + y*y + z*z)
}

var squaredDistance_1 = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];;;
    return x*x + y*y + z*z
}

var length_1 = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2];;;
    return Math.sqrt(x*x + y*y + z*z)
}

var squaredLength_1 = squaredLength;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2];;;
    return x*x + y*y + z*z
}

var negate_1 = negate;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out
}

var inverse_1 = inverse;

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out
}

var cross_1 = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];;;;;;

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out
}

var lerp_1 = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];;;
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out
}

var random_1 = random;

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0;

    var r = Math.random() * 2.0 * Math.PI;
    var z = (Math.random() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out
}

var transformMat4_1 = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];;;;
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out
}

var transformMat3_1 = transformMat3;

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];;;
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out
}

var transformQuat_1 = transformQuat;

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;;;;;;;;;;;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out
}

var rotateX_1 = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var p = [], r=[];;
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];

    //perform rotation
    r[0] = p[0];
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];

    return out
}

var rotateY_1 = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var p = [], r=[];;
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
    r[1] = p[1];
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
  
    return out
}

var rotateZ_1 = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var p = [], r=[];;
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
    r[2] = p[2];
  
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
  
    return out
}

var forEach_1 = forEach;

var vec = create_1();

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
        var i, l;;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; 
            vec[1] = a[i+1]; 
            vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; 
            a[i+1] = vec[1]; 
            a[i+2] = vec[2];
        }
        
        return a
}

var glVec3 = {
  create: create_1
  , clone: clone_1
  , angle: angle_1
  , fromValues: fromValues_1
  , copy: copy_1
  , set: set_1
  , add: add_1
  , subtract: subtract_1
  , multiply: multiply_1
  , divide: divide_1
  , min: min_1
  , max: max_1
  , scale: scale_1
  , scaleAndAdd: scaleAndAdd_1
  , distance: distance_1
  , squaredDistance: squaredDistance_1
  , length: length_1
  , squaredLength: squaredLength_1
  , negate: negate_1
  , inverse: inverse_1
  , normalize: normalize_1
  , dot: dot_1
  , cross: cross_1
  , lerp: lerp_1
  , random: random_1
  , transformMat4: transformMat4_1
  , transformMat3: transformMat3_1
  , transformQuat: transformQuat_1
  , rotateX: rotateX_1
  , rotateY: rotateY_1
  , rotateZ: rotateZ_1
  , forEach: forEach_1
};

var isImplemented = function () {
	var set, iterator, result;
	if (typeof Set !== 'function') return false;
	set = new Set(['raz', 'dwa', 'trzy']);
	if (String(set) !== '[object Set]') return false;
	if (set.size !== 3) return false;
	if (typeof set.add !== 'function') return false;
	if (typeof set.clear !== 'function') return false;
	if (typeof set.delete !== 'function') return false;
	if (typeof set.entries !== 'function') return false;
	if (typeof set.forEach !== 'function') return false;
	if (typeof set.has !== 'function') return false;
	if (typeof set.keys !== 'function') return false;
	if (typeof set.values !== 'function') return false;

	iterator = set.values();
	result = iterator.next();
	if (result.done !== false) return false;
	if (result.value !== 'raz') return false;

	return true;
};

// eslint-disable-next-line no-empty-function
var noop = function () {};

var _undefined = noop(); // Support ES3 engines

var isValue = function (val) {
 return (val !== _undefined) && (val !== null);
};

var validValue = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

var clear = function () {
	validValue(this).length = 0;
	return this;
};

var isImplemented$2 = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") return false;
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};

var shim = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};

var isNan = isImplemented$2()
	? Number.isNaN
	: shim;

var isImplemented$4 = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return (sign(10) === 1) && (sign(-20) === -1);
};

var shim$2 = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return value > 0 ? 1 : -1;
};

var sign = isImplemented$4()
	? Math.sign
	: shim$2;

var abs = Math.abs, floor = Math.floor;

var toInteger = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};

var max$1 = Math.max;

var toPosInteger = function (value) {
 return max$1(0, toInteger(value));
};

var indexOf           = Array.prototype.indexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs$1               = Math.abs
  , floor$1             = Math.floor;

var eIndexOf = function (searchElement /*, fromIndex*/) {
	var i, length, fromIndex, val;
	if (!isNan(searchElement)) return indexOf.apply(this, arguments);

	length = toPosInteger(validValue(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor$1(fromIndex);
	else fromIndex = toPosInteger(this.length) - floor$1(abs$1(fromIndex));

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (isNan(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};

var create$1 = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};

var isImplemented$6 = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create$1;
	if (typeof setPrototypeOf !== "function") return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};

var map = { function: true, object: true };

var isObject = function (value) {
	return (isValue(value) && map[typeof value]) || false;
};

var create$2 = Object.create, shim$4;

if (!isImplemented$6()) {
	shim$4 = shim$5;
}

var create_1$2 = (function () {
	var nullObject, polyProps, desc;
	if (!shim$4) return create$2;
	if (shim$4.level !== 1) return create$2;

	nullObject = {};
	polyProps = {};
	desc = {
		configurable: false,
		enumerable: false,
		writable: true,
		value: undefined
	};
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim$4, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create$2(prototype === null ? nullObject : prototype, props);
	};
}());

var objIsPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty  = Object.defineProperty
  , nullDesc        = {
	configurable: true,
	enumerable: false,
	writable: true,
	value: undefined
}
  , validate;

validate = function (obj, prototype) {
	validValue(obj);
	if (prototype === null || isObject(prototype)) return obj;
	throw new TypeError("Prototype must be null or an object");
};

var shim$5 = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
}(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };

		return false;
	})()
));

var setPrototypeOf = isImplemented$6()
	? Object.setPrototypeOf
	: shim$5;

var validCallable = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isImplemented$8 = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};

var isImplemented$10 = function () {
	try {
		return true;
	} catch (e) {
 return false;
}
};

var keys = Object.keys;

var shim$7 = function (object) {
	return keys(isValue(object) ? Object(object) : object);
};

var keys$1 = isImplemented$10()
	? Object.keys
	: shim$7;

var max$2   = Math.max;

var shim$9 = function (dest, src /*, …srcn*/) {
	var error, i, length = max$2(arguments.length, 2), assign;
	dest = Object(validValue(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys$1(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

var assign = isImplemented$8()
	? Object.assign
	: shim$9;

var forEach$1 = Array.prototype.forEach, create$3 = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
var normalizeOptions = function (opts1 /*, …options*/) {
	var result = create$3(null);
	forEach$1.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

// Deprecated

var isCallable = function (obj) {
 return typeof obj === "function";
};

var str = "razdwatrzy";

var isImplemented$12 = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};

var indexOf$1 = String.prototype.indexOf;

var shim$11 = function (searchString/*, position*/) {
	return indexOf$1.call(this, searchString, arguments[1]) > -1;
};

var contains = isImplemented$12()
	? String.prototype.contains
	: shim$11;

var d_1 = createCommonjsModule(function (module) {

var d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOptions(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOptions(options), desc);
};
});

var eventEmitter = createCommonjsModule(function (module, exports) {

var apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	validCallable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	validCallable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	validCallable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d_1(on),
	once: d_1(once),
	off: d_1(off),
	emit: d_1(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;
});
var eventEmitter_1 = eventEmitter.methods;

var validTypes = { object: true, symbol: true };

var isImplemented$14 = function () {
	if (typeof Symbol !== 'function') return false;
	try { } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};

var isSymbol = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};

var validateSymbol = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};

var create$4 = Object.create, defineProperties = Object.defineProperties
  , defineProperty$1 = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create$4(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create$4(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty$1(objPrototype, name, d_1.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty$1(this, name, d_1(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
var polyfill = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create$4(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d_1('', description),
		__name__: d_1('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d_1(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d_1(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d_1('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d_1('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d_1('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d_1('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d_1('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d_1('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d_1('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d_1('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d_1('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d_1('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d_1('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d_1(SymbolPolyfill),
	toString: d_1('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d_1(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d_1(function () { return validateSymbol(this); })
});
defineProperty$1(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d_1('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty$1(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d_1('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty$1(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d_1('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty$1(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d_1('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

var es6Symbol = isImplemented$14() ? Symbol : polyfill;

var objToString = Object.prototype.toString
  , id = objToString.call(
	(function () {
		return arguments;
	})()
);

var isArguments = function (value) {
	return objToString.call(value) === id;
};

var objToString$1 = Object.prototype.toString, id$1 = objToString$1.call("");

var isString = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString$1.call(value) === id$1)) ||
		false
	);
};

var iteratorSymbol = es6Symbol.iterator
  , isArray        = Array.isArray;

var isIterable = function (value) {
	if (!isValue(value)) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return typeof value[iteratorSymbol] === "function";
};

var validIterable = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};

var isImplemented$16 = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === "dwa"));
};

var objToString$2 = Object.prototype.toString, id$2 = objToString$2.call(noop);

var isFunction = function (value) {
	return typeof value === "function" && objToString$2.call(value) === id$2;
};

var iteratorSymbol$1 = es6Symbol.iterator
  , isArray$1        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty$2 = Object.defineProperty;

// eslint-disable-next-line complexity
var shim$13 = function (arrayLike /*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) validCallable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray$1(arrayLike)) {
				// Source: Array
				arr = new Array(length = arrayLike.length);
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray$1(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol$1]) !== undefined) {
			// Source: Iterator
			iterator = validCallable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty$2(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty$2(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInteger(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty$2(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};

var from = isImplemented$16()
	? Array.from
	: shim$13;

var copy$1 = function (obj/*, propertyNames, options*/) {
	var copy = Object(validValue(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		from(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};

var bind                    = Function.prototype.bind
  , call$1                    = Function.prototype.call
  , keys$4                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

var _iterate = function (method, defVal) {
	return function (obj, cb /*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(validValue(obj));
		validCallable(cb);

		list = keys$4(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call$1.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call$1.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};

var forEach$2 = _iterate("forEach");

var call$2     = Function.prototype.call;

var map$1 = function (obj, cb /*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	validCallable(cb);
	forEach$2(obj, function (value, key, targetObj, index) {
		result[key] = call$2.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};

var callable$1         = validCallable

  , bind$1 = Function.prototype.bind, defineProperty$3 = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, options) {
	var value = validValue(desc) && callable$1(desc.value), dgs;
	dgs = copy$1(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
		desc.value = bind$1.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty$3(this, name, desc);
		return this[name];
	};
	return dgs;
};

var autoBind = function (props/*, options*/) {
	var options = normalizeOptions(arguments[1]);
	if (options.resolveContext != null) validCallable(options.resolveContext);
	return map$1(props, function (desc, name) { return define(name, desc, options); });
};

var defineProperty$4 = Object.defineProperty, defineProperties$1 = Object.defineProperties, Iterator;

var es6Iterator = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
	defineProperties$1(this, {
		__list__: d_1("w", validValue(list)),
		__context__: d_1("w", context),
		__nextIndex__: d_1("w", 0)
	});
	if (!context) return;
	validCallable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties$1(
	Iterator.prototype,
	assign(
		{
			_next: d_1(function () {
				var i;
				if (!this.__list__) return undefined;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
				return undefined;
			}),
			next: d_1(function () {
				return this._createResult(this._next());
			}),
			_createResult: d_1(function (i) {
				if (i === undefined) return { done: true, value: undefined };
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d_1(function (i) {
				return this.__list__[i];
			}),
			_unBind: d_1(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d_1(function () {
				return "[object " + (this[es6Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d_1(function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty$4(this, "__redo__", d_1("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d_1(function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) this.__redo__[j] = --redo;
				}, this);
			}),
			_onClear: d_1(function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty$4(
	Iterator.prototype,
	es6Symbol.iterator,
	d_1(function () {
		return this;
	})
);

var array = createCommonjsModule(function (module) {



var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
	es6Iterator.call(this, arr);
	if (!kind) kind = "value";
	else if (contains.call(kind, "key+value")) kind = "key+value";
	else if (contains.call(kind, "key")) kind = "key";
	else kind = "value";
	defineProperty(this, "__kind__", d_1("", kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, es6Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(es6Iterator.prototype, {
	_resolve: d_1(function (i) {
		if (this.__kind__ === "value") return this.__list__[i];
		if (this.__kind__ === "key+value") return [i, this.__list__[i]];
		return i;
	})
});
defineProperty(ArrayIterator.prototype, es6Symbol.toStringTag, d_1("c", "Array Iterator"));
});

var string = createCommonjsModule(function (module) {



var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
	str = String(str);
	es6Iterator.call(this, str);
	defineProperty(this, "__length__", d_1("", str.length));
};
if (setPrototypeOf) setPrototypeOf(StringIterator, es6Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(es6Iterator.prototype, {
	_next: d_1(function () {
		if (!this.__list__) return undefined;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
		return undefined;
	}),
	_resolve: d_1(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
		return char;
	})
});
defineProperty(StringIterator.prototype, es6Symbol.toStringTag, d_1("c", "String Iterator"));
});

var iteratorSymbol$2 = es6Symbol.iterator;

var get = function (obj) {
	if (typeof validIterable(obj)[iteratorSymbol$2] === "function") return obj[iteratorSymbol$2]();
	if (isArguments(obj)) return new array(obj);
	if (isString(obj)) return new string(obj);
	return new array(obj);
};

var isArray$2 = Array.isArray, call$3 = Function.prototype.call, some = Array.prototype.some;

var forOf = function (iterable, cb /*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray$2(iterable) || isArguments(iterable)) mode = "array";
	else if (isString(iterable)) mode = "string";
	else iterable = get(iterable);

	validCallable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call$3.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
			}
			call$3.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call$3.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};

var iterator = createCommonjsModule(function (module) {

var toStringTagSymbol = es6Symbol.toStringTag

  , defineProperty = Object.defineProperty
  , SetIterator;

SetIterator = module.exports = function (set, kind) {
	if (!(this instanceof SetIterator)) return new SetIterator(set, kind);
	es6Iterator.call(this, set.__setData__, set);
	if (!kind) kind = 'value';
	else if (contains.call(kind, 'key+value')) kind = 'key+value';
	else kind = 'value';
	defineProperty(this, '__kind__', d_1('', kind));
};
if (setPrototypeOf) setPrototypeOf(SetIterator, es6Iterator);

SetIterator.prototype = Object.create(es6Iterator.prototype, {
	constructor: d_1(SetIterator),
	_resolve: d_1(function (i) {
		if (this.__kind__ === 'value') return this.__list__[i];
		return [this.__list__[i], this.__list__[i]];
	}),
	toString: d_1(function () { return '[object Set Iterator]'; })
});
defineProperty(SetIterator.prototype, toStringTagSymbol, d_1('c', 'Set Iterator'));
});

// Exports true if environment provides native `Set` implementation,

var isNativeImplemented = (function () {
	if (typeof Set === 'undefined') return false;
	return (Object.prototype.toString.call(Set.prototype) === '[object Set]');
}());

var iterator$2       = validIterable

  , call$4 = Function.prototype.call
  , defineProperty$5 = Object.defineProperty, getPrototypeOf$1 = Object.getPrototypeOf
  , SetPoly, getValues, NativeSet;

if (isNativeImplemented) NativeSet = Set;

var polyfill$2 = SetPoly = function Set(/*iterable*/) {
	var iterable = arguments[0], self;
	if (!(this instanceof SetPoly)) throw new TypeError('Constructor requires \'new\'');
	if (isNativeImplemented && setPrototypeOf) self = setPrototypeOf(new NativeSet(), getPrototypeOf$1(this));
	else self = this;
	if (iterable != null) iterator$2(iterable);
	defineProperty$5(self, '__setData__', d_1('c', []));
	if (!iterable) return self;
	forOf(iterable, function (value) {
		if (eIndexOf.call(this, value) !== -1) return;
		this.push(value);
	}, self.__setData__);
	return self;
};

if (isNativeImplemented) {
	if (setPrototypeOf) setPrototypeOf(SetPoly, NativeSet);
	SetPoly.prototype = Object.create(NativeSet.prototype, { constructor: d_1(SetPoly) });
}

eventEmitter(Object.defineProperties(SetPoly.prototype, {
	add: d_1(function (value) {
		if (this.has(value)) return this;
		this.emit('_add', this.__setData__.push(value) - 1, value);
		return this;
	}),
	clear: d_1(function () {
		if (!this.__setData__.length) return;
		clear.call(this.__setData__);
		this.emit('_clear');
	}),
	delete: d_1(function (value) {
		var index = eIndexOf.call(this.__setData__, value);
		if (index === -1) return false;
		this.__setData__.splice(index, 1);
		this.emit('_delete', index, value);
		return true;
	}),
	entries: d_1(function () { return new iterator(this, 'key+value'); }),
	forEach: d_1(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator$$1, result, value;
		validCallable(cb);
		iterator$$1 = this.values();
		result = iterator$$1._next();
		while (result !== undefined) {
			value = iterator$$1._resolve(result);
			call$4.call(cb, thisArg, value, value, this);
			result = iterator$$1._next();
		}
	}),
	has: d_1(function (value) {
		return (eIndexOf.call(this.__setData__, value) !== -1);
	}),
	keys: d_1(getValues = function () { return this.values(); }),
	size: d_1.gs(function () { return this.__setData__.length; }),
	values: d_1(function () { return new iterator(this); }),
	toString: d_1(function () { return '[object Set]'; })
}));
defineProperty$5(SetPoly.prototype, es6Symbol.iterator, d_1(getValues));
defineProperty$5(SetPoly.prototype, es6Symbol.toStringTag, d_1('c', 'Set'));

var es6Set = isImplemented() ? Set : polyfill$2;

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

/*
 Example:
 Given [0,4] return [0,4]
 Givem [2,1] return [1,2
 */
function _sort(edge) {
    return edge[0] < edge[1] ? edge : [edge[1], edge[0]];
}

// out = a + b*s
function _mad(out, a, b, s) {
    out[0] = a[0] + s * b[0];
    out[1] = a[1] + s * b[1];
    out[2] = a[2] + s * b[2];
    return out;
}

/*
Implement Catmull-Clark subvision, as it is described on Wikipedia
 */
function _catmullClark(positions, cells) {

    // original points, indexed by their indices.
    // For every point, we store adjacent faces and adjacent edges.
    originalPoints = [];

    // original faces, in their original order.
    // For every face, we store the edges, the points, and the face point.
    faces = [];

    // original edges. Indexed by the sorted indices of their vertices
    // So the edge whose edge vertices has index `6` and `2`, will be 
    // indexed by the array [2,6]
    edges = [];


    /*
    First we collect all the information that we need to run the algorithm.
    Each point must know its adjacent edges and faces.
    Each face must know its edges and points.
    Each edge must know its adjacent faces and points.

    We collect all this information in this loop.
     */
    for (var iCell = 0; iCell < cells.length; ++iCell) {

        var cellPositions = cells[iCell];
        var facePoints = [];

        // initialize:
        faces[iCell] = {};


        // go through all the points of the face.
        for (var j = 0; j < cellPositions.length; ++j) {

            var positionIndex = cellPositions[j];

            var pointObject;

            /*
           On the fly, Create an object for every point.
             */
            if (typeof originalPoints[positionIndex] === 'undefined') {
                // create the object on the fly.
                var v = positions[positionIndex];

                var vec = glVec3.fromValues(v[0], v[1], v[2]);
                pointObject = {
                    point: vec,
                    faces: [],
                    edges: new es6Set(),

                };

                originalPoints[positionIndex] = pointObject;
            } else {
                pointObject = originalPoints[positionIndex];
            }

            // every point should have a reference to its face.
            pointObject.faces.push(faces[iCell]);

            facePoints.push(pointObject);
        }

        // every face should now its points.
        faces[iCell].points = facePoints;

        var avg = glVec3.fromValues(0, 0, 0);

        // now compute the facepoint(see Wikipedia).
        for (var i = 0; i < faces[iCell].points.length; ++i) {
            var v = faces[iCell].points[i].point;
            glVec3.add(avg, v, avg);
        }
        glVec3.scale(avg, avg, 1.0 / faces[iCell].points.length);
        faces[iCell].facePoint = avg;

        var faceEdges = [];

        // go through all the edges of the face.
        for (var iEdge = 0; iEdge < cellPositions.length; ++iEdge) {

            var edge;

            if (cellPositions.length == 3) { // for triangles
                if (iEdge == 0) {
                    edge = [cellPositions[0], cellPositions[1]];
                } else if (iEdge == 1) {
                    edge = [cellPositions[1], cellPositions[2]];
                } else if (iEdge == 2) {
                    edge = [cellPositions[2], cellPositions[0]];
                }
            } else { // for quads.
                if (iEdge == 0) {
                    edge = [cellPositions[0], cellPositions[1]];
                } else if (iEdge == 1) {
                    edge = [cellPositions[1], cellPositions[2]];
                } else if (iEdge == 2) {
                    edge = [cellPositions[2], cellPositions[3]];
                } else if (iEdge == 3) {
                    edge = [cellPositions[3], cellPositions[0]];
                }
            }

            // every edge is represented by the sorted indices of its vertices.
            // (the sorting ensures that [1,2] and [2,1] are considered the same edge, which they are )
            edge = _sort(edge);

            var edgeObject;
            // on the fly, create an edge object.
            if (typeof edges[edge] === 'undefined') {

                edgeObject = {
                    points: [originalPoints[edge[0]], originalPoints[edge[1]]],
                    faces: []

                };

                edges[edge] = edgeObject;
            } else {
                edgeObject = edges[edge];
            }

            // every edge should know its adjacent faces.
            edgeObject.faces.push(faces[iCell]);

            // every point should know its adjacent edges.
            edgeObject.points[0].edges.add(edgeObject);
            edgeObject.points[1].edges.add(edgeObject);


            faceEdges.push(edgeObject);
        }

        // every face should know its edges.
        faces[iCell].edges = faceEdges;
    }


    // Compute the edge points and the midpoints of every edge.
    for (key in edges) {

        var edge = edges[key];

        var avg = glVec3.fromValues(0, 0, 0);
        var count = 0;

        // add face points of edge.
        for (var i = 0; i < edge.faces.length; ++i) {
            var facePoint = edge.faces[i].facePoint;
            glVec3.add(avg, facePoint, avg);
            ++count;
        }

        // sum together the two endpoints.
        for (var i = 0; i < edge.points.length; ++i) {
            var endPoint = edge.points[i].point;
            glVec3.add(avg, endPoint, avg);
            ++count;
        }

        // finally, compute edge point.
        glVec3.scale(avg, avg, 1.0 / count);
        edge.edgePoint = avg;

        /*
         Next we compute the midpoint.
         */
        count = 0;
        var avg2 = glVec3.fromValues(0, 0, 0);

        for (var i = 0; i < edge.points.length; ++i) {
            var endPoint = edge.points[i].point;
            glVec3.add(avg2, endPoint, avg2);
            ++count;
        }
        glVec3.scale(avg2, avg2, 1.0 / count);


        edge.midPoint = avg2;
    }


    /*
     Each original point is moved to the position
     (F + 2R + (n-3)P) / n. See the wikipedia article for more details.
     */
    for (var i = 0; i < positions.length; ++i) {

        var point = originalPoints[i];
        var n = point.faces.length;
        var newPoint = glVec3.fromValues(0, 0, 0);

        for (var j = 0; j < point.faces.length; ++j) {
            var facePoint = point.faces[j].facePoint;
            glVec3.add(newPoint, newPoint, facePoint);
        }

        for (var edge of point.edges) {
            _mad(newPoint, newPoint, edge.midPoint, 2);
        }
        glVec3.scale(newPoint, newPoint, 1.0 / n);

        _mad(newPoint, newPoint, point.point, n - 3);

        glVec3.scale(newPoint, newPoint, 1.0 / n);

        point.newPoint = newPoint;

    }

    newPositions = [];
    newCells = [];

    var index = 0;

    /*
     We create indices on the fly by using this method.
     The index of every vertex is stored in the vertex, in a property named `index`.
     */
    function getIndex(p) {
        if (!("index" in p)) {
            p.index = index++;
            newPositions.push([p[0], p[1], p[2]]);

        }
        return p.index;

    }

    /*
     We go through all faces.
     Triangle face we subdivide into 3 new quads.
     Quad faces we subdivide into 4 new quads.

     */
    for (var iFace = 0; iFace < faces.length; ++iFace) {

        var face = faces[iFace];

        for (var iPoint = 0; iPoint < face.points.length; ++iPoint) {
            var point = face.points[iPoint];

            var a = point.newPoint;
            var b = face.edges[(iPoint + 0) % face.edges.length].edgePoint;
            var c = face.facePoint;
            var d = face.edges[(iPoint + face.edges.length - 1) % face.edges.length].edgePoint;

            var ia = getIndex(a);
            var ib = getIndex(b);
            var ic = getIndex(c);
            var id = getIndex(d);

            newCells.push([id, ia, ib, ic]);
        }
    }


    return {positions: newPositions, cells: newCells};

}

function catmullClark(positions, cells, numSubdivisions, convertToTriangles) {

    if (numSubdivisions < 1) {
        throw new Error("`numSubdivisions` must be a positive number!");
    }

    if (typeof convertToTriangles === "undefined") {
        convertToTriangles = true;
    }

    var obj = {positions: positions, cells: cells};
    for (var i = 0; i < numSubdivisions; ++i) {

        obj = _catmullClark(obj.positions, obj.cells);

    }

    if (convertToTriangles) {
        obj.cells = glQuadsToTris(obj.cells);
    }

    return obj;
}


var glCatmullClark = catmullClark;

/**
 * exports voxel-to-mesh
 */

const opts = {
  smoothing: 0,
  convertToTriangles: true,
  flatten: true
};

function voxelToMesh$1(voxelData, options) {

  Object.assign(opts, options);

  let voxObj = parseData(voxelData);

  voxObj = removeDuplicateFaces(voxObj);
  voxObj = removeUnusedVertices(voxObj);

  const s = opts.smoothing;
  if (parseInt(s) === s && s > 0) {
    voxObj = glCatmullClark(voxObj.vertices, voxObj.indices, opts.smoothing, opts.convertToTriangles);
  } else if (opts.convertToTriangles) {
    voxObj.indices = glQuadsToTris(voxObj.indices);
  }

  if (opts.flatten) {
    const flatten = (a,b) => a.concat(b);
    voxObj.indices = voxObj.indices.reduce(flatten, []);
    voxObj.vertices = voxObj.vertices.reduce(flatten, []);
  }
  return voxObj
  //newMesh.colors = getColors(newMesh)
}

function makeCopyCat(index) {
  let table = new Set();
  const makeCat = i => {
    return {
      value: i,
      get table() {
        return table
      },
      set table(t) {
        table = t;
      },
      update(copyCat) {
        table = copyCat.table = new Set([...table, ...copyCat.table]);
        table.forEach(cat => {
          cat.value = copyCat.value;
          cat.table = table;
        });
      },
      clone() {
        const anotherCat = makeCat(this.value);
        table.add(anotherCat);
        return anotherCat
      }
    }
  };
  const newCat = makeCat(index);
  table.add(newCat);
  return newCat
}

function newBox(xyz, cellOffset) {
  const sumVec = (v1, v2) => v1.map((val, index) => val + v2[index]);
  const pOffset = sumVec.bind(null, xyz);

  const [a, b, c, d, e, f, g, h] = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1]
  ].map(pOffset);

  const vertices = [a, b, c, d, e, f, g, h];

  const [c0, c1, c2, c3, c4, c5, c6, c7] = [
    0, 1, 2, 3, 4, 5, 6, 7
  ].map(c => makeCopyCat(c + cellOffset));

  const copy = cat => cat.clone();

  const indices = [
    [c2, c3, c1, c0], //originals
    [c4, c5, c7, c6], //originals

    [c3, c7, c5, c1].map(copy), [c0, c4, c6, c2].map(copy),

    [c1, c5, c4, c0].map(copy), [c2, c6, c7, c3].map(copy)
  ];

  return {
    vertices,
    indices
  }
}

function parseData(voxelData) {

  let vertices = [],
    indices = [];;
  let cellOffset = 0;
  const VERTS_PER_CUBE = 8;

  voxelData.forEach(voxel => {
    const cube = newBox(voxel.slice(0, 3), cellOffset);
    cellOffset += VERTS_PER_CUBE;

    vertices = vertices.concat(cube.vertices);
    indices = indices.concat(cube.indices);
  });

  return {
    vertices,
    indices
  }
}

function removeDuplicateFaces({
  vertices,
  indices
}) {

  const indiceMap = new Map();
  const indexWhackList = new Set();
  const keyify = arr => arr.map(v => vertices[v]).sort().join('-');

  indices = indices
    .map((rect, index) => {
      const key = keyify(rect.map(ri => ri.value));
      if (indiceMap.has(key)) {
        const face = indiceMap.get(key);
        const faceIndex = face.index;
        indexWhackList.add(index).add(faceIndex);

        rect.forEach((ri, i) => {
          const reverseIndex = 3 - i;
          ri.update(face.rect[reverseIndex]);
        });

      } else {
        indiceMap.set(key, {
          index,
          rect
        });
      }
      return rect
    })
    .filter((_, i) => !indexWhackList.has(i))
    .map(rect => rect.map(ri => ri.value));

  return {
    vertices,
    indices
  }
}

function removeUnusedVertices({
  vertices,
  indices
}) {
  const newVertices = [];
  const indexMap = new Map();
  let indexCounter = 0;
  indices = indices.map(indexArray => indexArray.map(index => {
    if (!indexMap.has(index)) {
      indexMap.set(index, indexCounter++);
    }
    const i = indexMap.get(index);
    newVertices[i] = vertices[index];
    return i
  }));

  return {
    'vertices': newVertices,
    indices
  }
}

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function() {
  var scene = new BABYLON.Scene(engine);

  var light = new BABYLON.DirectionalLight("direct", new BABYLON.Vector3(0, 0, 1), scene);

  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 5, -30));
  camera.attachControl(canvas, true);

  //Create a custom mesh
  var customMesh = new BABYLON.Mesh("custom", scene);

  //x,y,z,color
  var voxels = [
    [0, 3, 2, [0, 0, 0, 1]],
    [0, 1, 0, [255, 0, 0, 1]],
    [1, 1, 2, [0, 255, 0, 1]],
    [2, 0, 2, [0, 0, 255, 1]],
    [1, 1, 1, [255, 0, 255, 1]],
    [1, 3, 2, [0, 255, 0, 1]]
  ];

  const mesh = voxelToMesh$1(voxels, {smoothing: 0});
  var positions = mesh.vertices;
  var indices = mesh.indices;

  //Empty array to contain calculated values
  var normals = [];

  var vertexData = new BABYLON.VertexData();
  BABYLON.VertexData.ComputeNormals(positions, indices, normals);

  //Assign positions, indices and normals to vertexData
  vertexData.positions = positions;
  vertexData.indices = indices;
  vertexData.normals = normals;
  //vertexData.colors = colors

  //Apply vertexData to custom mesh
  vertexData.applyToMesh(customMesh);

  var material = new BABYLON.StandardMaterial('material01', scene);
  customMesh.material = material;
  material.backFaceCulling = true;
  material.wireframe = false;

  return scene
};

var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

// Resize
window.addEventListener("resize", function() {
  engine.resize();
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9jbG9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2Zyb21WYWx1ZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9ub3JtYWxpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9kb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hbmdsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2NvcHkuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zdWJ0cmFjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL211bHRpcGx5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvZGl2aWRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbWF4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZUFuZEFkZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2Rpc3RhbmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZExlbmd0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL25lZ2F0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2ludmVyc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9jcm9zcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2xlcnAuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9yYW5kb20uanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtTWF0My5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybVF1YXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVYLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVouanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtdmVjMy9mb3JFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXZlYzMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtdmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS8jL2NsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvbnVtYmVyL2lzLW5hbi9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci9pcy1uYW4vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci9pcy1uYW4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L21hdGgvc2lnbi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvbnVtYmVyL3RvLXBvcy1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvYXJyYXkvIy9lLWluZGV4LW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YvaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9zZXQtcHJvdG90eXBlLW9mL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2V2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL2lzLXN5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL3ZhbGlkYXRlLXN5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL3BvbHlmaWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9mdW5jdGlvbi9pcy1hcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9pcy1pdGVyYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvdmFsaWQtaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2lzLWltcGxlbWVudGVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vaXMtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2NvcHkuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvX2l0ZXJhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvZm9yLWVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QvYXV0by1iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvYXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LWl0ZXJhdG9yL3N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvZ2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9mb3Itb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9saWIvaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9pcy1uYXRpdmUtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc2V0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXF1YWRzLXRvLXRyaXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZ2wtY2F0bXVsbC1jbGFyay9pbmRleC5qcyIsIi4uL3NyYy92b3hlbFRvTWVzaC5qcyIsInRlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xuICpcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICBvdXRbMl0gPSAwXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeSArIHoqelxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICAgICAgb3V0WzJdID0gYVsyXSAqIGxlblxuICAgIH1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkb3Q7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ2xlXG5cbnZhciBmcm9tVmFsdWVzID0gcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgZG90ID0gcmVxdWlyZSgnLi9kb3QnKVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5mdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgdmFyIHRlbXBBID0gZnJvbVZhbHVlcyhhWzBdLCBhWzFdLCBhWzJdKVxuICAgIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSlcbiBcbiAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKVxuICAgIG5vcm1hbGl6ZSh0ZW1wQiwgdGVtcEIpXG4gXG4gICAgdmFyIGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpXG5cbiAgICBpZihjb3NpbmUgPiAxLjApe1xuICAgICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKVxuICAgIH0gICAgIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2V0O1xuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZGl2aWRlO1xuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAvIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC8gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1pbjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pXG4gICAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICBvdXRbMl0gPSBhWzJdICogYlxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBsZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlO1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXVxuICAgIG91dFsxXSA9IC1hWzFdXG4gICAgb3V0WzJdID0gLWFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnNlO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF1cbiAgb3V0WzFdID0gMS4wIC8gYVsxXVxuICBvdXRbMl0gPSAxLjAgLyBhWzJdXG4gIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdXG5cbiAgICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieVxuICAgIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYnhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXSxcbiAgICAgICAgYXogPSBhWzJdXG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KVxuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gICAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICB2YXIgeiA9IChNYXRoLnJhbmRvbSgpICogMi4wKSAtIDEuMFxuICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuXG4gICAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGVcbiAgICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZVxuICAgIG91dFsyXSA9IHogKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdXG4gICAgdyA9IHcgfHwgMS4wXG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHdcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gd1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gd1xuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDM7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXVxuICAgIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XVxuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XVxuICAgIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybVF1YXQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6XG5cbiAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICAgIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXpcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG5cbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXVxuICAgIHJbMV0gPSBwWzFdKk1hdGguY29zKGMpIC0gcFsyXSpNYXRoLnNpbihjKVxuICAgIHJbMl0gPSBwWzFdKk1hdGguc2luKGMpICsgcFsyXSpNYXRoLmNvcyhjKVxuXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWTtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG4gIFxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzJdKk1hdGguc2luKGMpICsgcFswXSpNYXRoLmNvcyhjKVxuICAgIHJbMV0gPSBwWzFdXG4gICAgclsyXSA9IHBbMl0qTWF0aC5jb3MoYykgLSBwWzBdKk1hdGguc2luKGMpXG4gIFxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cbiAgXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG4gIFxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdKk1hdGguY29zKGMpIC0gcFsxXSpNYXRoLnNpbihjKVxuICAgIHJbMV0gPSBwWzBdKk1hdGguc2luKGMpICsgcFsxXSpNYXRoLmNvcyhjKVxuICAgIHJbMl0gPSBwWzJdXG4gIFxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cbiAgXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcblxudmFyIHZlYyA9IHJlcXVpcmUoJy4vY3JlYXRlJykoKVxuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgICAgIHZhciBpLCBsXG4gICAgICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgICAgICAgIHN0cmlkZSA9IDNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY291bnQpIHtcbiAgICAgICAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGwgPSBhLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgICAgICAgdmVjWzBdID0gYVtpXSBcbiAgICAgICAgICAgIHZlY1sxXSA9IGFbaSsxXSBcbiAgICAgICAgICAgIHZlY1syXSA9IGFbaSsyXVxuICAgICAgICAgICAgZm4odmVjLCB2ZWMsIGFyZylcbiAgICAgICAgICAgIGFbaV0gPSB2ZWNbMF0gXG4gICAgICAgICAgICBhW2krMV0gPSB2ZWNbMV0gXG4gICAgICAgICAgICBhW2krMl0gPSB2ZWNbMl1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGFuZ2xlOiByZXF1aXJlKCcuL2FuZ2xlJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIGludmVyc2U6IHJlcXVpcmUoJy4vaW52ZXJzZScpXG4gICwgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG4gICwgZG90OiByZXF1aXJlKCcuL2RvdCcpXG4gICwgY3Jvc3M6IHJlcXVpcmUoJy4vY3Jvc3MnKVxuICAsIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpXG4gICwgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybVF1YXQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtUXVhdCcpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc2V0LCBpdGVyYXRvciwgcmVzdWx0O1xuXHRpZiAodHlwZW9mIFNldCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRzZXQgPSBuZXcgU2V0KFsncmF6JywgJ2R3YScsICd0cnp5J10pO1xuXHRpZiAoU3RyaW5nKHNldCkgIT09ICdbb2JqZWN0IFNldF0nKSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZXQuc2l6ZSAhPT0gMykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHNldC5hZGQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQuY2xlYXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQuZGVsZXRlICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2Ygc2V0LmVudHJpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQuZm9yRWFjaCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHNldC5oYXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQua2V5cyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHNldC52YWx1ZXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHRpdGVyYXRvciA9IHNldC52YWx1ZXMoKTtcblx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRpZiAocmVzdWx0LmRvbmUgIT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cdGlmIChyZXN1bHQudmFsdWUgIT09ICdyYXonKSByZXR1cm4gZmFsc2U7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eS1mdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3VuZGVmaW5lZCA9IHJlcXVpcmUoXCIuLi9mdW5jdGlvbi9ub29wXCIpKCk7IC8vIFN1cHBvcnQgRVMzIGVuZ2luZXNcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsKSB7XG4gcmV0dXJuICh2YWwgIT09IF91bmRlZmluZWQpICYmICh2YWwgIT09IG51bGwpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIi8vIEluc3BpcmVkIGJ5IEdvb2dsZSBDbG9zdXJlOlxuLy8gaHR0cDovL2Nsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9zdm4vZG9jcy9cbi8vIGNsb3N1cmVfZ29vZ19hcnJheV9hcnJheS5qcy5odG1sI2dvb2cuYXJyYXkuY2xlYXJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWx1ZSA9IHJlcXVpcmUoXCIuLi8uLi9vYmplY3QvdmFsaWQtdmFsdWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YWx1ZSh0aGlzKS5sZW5ndGggPSAwO1xuXHRyZXR1cm4gdGhpcztcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBudW1iZXJJc05hTiA9IE51bWJlci5pc05hTjtcblx0aWYgKHR5cGVvZiBudW1iZXJJc05hTiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAhbnVtYmVySXNOYU4oe30pICYmIG51bWJlcklzTmFOKE5hTikgJiYgIW51bWJlcklzTmFOKDM0KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBOdW1iZXIuaXNOYU5cblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc2lnbiA9IE1hdGguc2lnbjtcblx0aWYgKHR5cGVvZiBzaWduICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIChzaWduKDEwKSA9PT0gMSkgJiYgKHNpZ24oLTIwKSA9PT0gLTEpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdGlmIChpc05hTih2YWx1ZSkgfHwgKHZhbHVlID09PSAwKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4gdmFsdWUgPiAwID8gMSA6IC0xO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBNYXRoLnNpZ25cblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzaWduID0gcmVxdWlyZShcIi4uL21hdGgvc2lnblwiKVxuXG4gICwgYWJzID0gTWF0aC5hYnMsIGZsb29yID0gTWF0aC5mbG9vcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKGlzTmFOKHZhbHVlKSkgcmV0dXJuIDA7XG5cdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0aWYgKCh2YWx1ZSA9PT0gMCkgfHwgIWlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXHRyZXR1cm4gc2lnbih2YWx1ZSkgKiBmbG9vcihhYnModmFsdWUpKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoXCIuL3RvLWludGVnZXJcIilcblxuICAsIG1heCA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuIHJldHVybiBtYXgoMCwgdG9JbnRlZ2VyKHZhbHVlKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBudW1iZXJJc05hTiAgICAgICA9IHJlcXVpcmUoXCIuLi8uLi9udW1iZXIvaXMtbmFuXCIpXG4gICwgdG9Qb3NJbnQgICAgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vbnVtYmVyL3RvLXBvcy1pbnRlZ2VyXCIpXG4gICwgdmFsdWUgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vb2JqZWN0L3ZhbGlkLXZhbHVlXCIpXG4gICwgaW5kZXhPZiAgICAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZlxuICAsIG9iakhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGFicyAgICAgICAgICAgICAgID0gTWF0aC5hYnNcbiAgLCBmbG9vciAgICAgICAgICAgICA9IE1hdGguZmxvb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCovKSB7XG5cdHZhciBpLCBsZW5ndGgsIGZyb21JbmRleCwgdmFsO1xuXHRpZiAoIW51bWJlcklzTmFOKHNlYXJjaEVsZW1lbnQpKSByZXR1cm4gaW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG5cdGxlbmd0aCA9IHRvUG9zSW50KHZhbHVlKHRoaXMpLmxlbmd0aCk7XG5cdGZyb21JbmRleCA9IGFyZ3VtZW50c1sxXTtcblx0aWYgKGlzTmFOKGZyb21JbmRleCkpIGZyb21JbmRleCA9IDA7XG5cdGVsc2UgaWYgKGZyb21JbmRleCA+PSAwKSBmcm9tSW5kZXggPSBmbG9vcihmcm9tSW5kZXgpO1xuXHRlbHNlIGZyb21JbmRleCA9IHRvUG9zSW50KHRoaXMubGVuZ3RoKSAtIGZsb29yKGFicyhmcm9tSW5kZXgpKTtcblxuXHRmb3IgKGkgPSBmcm9tSW5kZXg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdGlmIChvYmpIYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGkpKSB7XG5cdFx0XHR2YWwgPSB0aGlzW2ldO1xuXHRcdFx0aWYgKG51bWJlcklzTmFOKHZhbCkpIHJldHVybiBpOyAvLyBKc2xpbnQ6IGlnbm9yZVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgcGxhaW5PYmplY3QgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLyogQ3VzdG9tQ3JlYXRlKi8pIHtcblx0dmFyIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLCBjdXN0b21DcmVhdGUgPSBhcmd1bWVudHNbMF0gfHwgY3JlYXRlO1xuXHRpZiAodHlwZW9mIHNldFByb3RvdHlwZU9mICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGdldFByb3RvdHlwZU9mKHNldFByb3RvdHlwZU9mKGN1c3RvbUNyZWF0ZShudWxsKSwgcGxhaW5PYmplY3QpKSA9PT0gcGxhaW5PYmplY3Q7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBtYXAgPSB7IGZ1bmN0aW9uOiB0cnVlLCBvYmplY3Q6IHRydWUgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIChpc1ZhbHVlKHZhbHVlKSAmJiBtYXBbdHlwZW9mIHZhbHVlXSkgfHwgZmFsc2U7XG59O1xuIiwiLy8gV29ya2Fyb3VuZCBmb3IgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjgwNFxuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIHNoaW07XG5cbmlmICghcmVxdWlyZShcIi4vc2V0LXByb3RvdHlwZS1vZi9pcy1pbXBsZW1lbnRlZFwiKSgpKSB7XG5cdHNoaW0gPSByZXF1aXJlKFwiLi9zZXQtcHJvdG90eXBlLW9mL3NoaW1cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIG51bGxPYmplY3QsIHBvbHlQcm9wcywgZGVzYztcblx0aWYgKCFzaGltKSByZXR1cm4gY3JlYXRlO1xuXHRpZiAoc2hpbS5sZXZlbCAhPT0gMSkgcmV0dXJuIGNyZWF0ZTtcblxuXHRudWxsT2JqZWN0ID0ge307XG5cdHBvbHlQcm9wcyA9IHt9O1xuXHRkZXNjID0ge1xuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0dmFsdWU6IHVuZGVmaW5lZFxuXHR9O1xuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QucHJvdG90eXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0aWYgKG5hbWUgPT09IFwiX19wcm90b19fXCIpIHtcblx0XHRcdHBvbHlQcm9wc1tuYW1lXSA9IHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdHZhbHVlOiB1bmRlZmluZWRcblx0XHRcdH07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBvbHlQcm9wc1tuYW1lXSA9IGRlc2M7XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhudWxsT2JqZWN0LCBwb2x5UHJvcHMpO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaGltLCBcIm51bGxQb2x5ZmlsbFwiLCB7XG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0dmFsdWU6IG51bGxPYmplY3Rcblx0fSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChwcm90b3R5cGUsIHByb3BzKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZShwcm90b3R5cGUgPT09IG51bGwgPyBudWxsT2JqZWN0IDogcHJvdG90eXBlLCBwcm9wcyk7XG5cdH07XG59KCkpO1xuIiwiLyogZXNsaW50IG5vLXByb3RvOiBcIm9mZlwiICovXG5cbi8vIEJpZyB0aGFua3MgdG8gQFdlYlJlZmxlY3Rpb24gZm9yIHNvcnRpbmcgdGhpcyBvdXRcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vNTU5MzU1NFxuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoXCIuLi9pcy1vYmplY3RcIilcbiAgLCB2YWx1ZSAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vdmFsaWQtdmFsdWVcIilcbiAgLCBvYmpJc1Byb3RvdHlwZU9mID0gT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mXG4gICwgZGVmaW5lUHJvcGVydHkgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgbnVsbERlc2MgICAgICAgID0ge1xuXHRjb25maWd1cmFibGU6IHRydWUsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHR3cml0YWJsZTogdHJ1ZSxcblx0dmFsdWU6IHVuZGVmaW5lZFxufVxuICAsIHZhbGlkYXRlO1xuXG52YWxpZGF0ZSA9IGZ1bmN0aW9uIChvYmosIHByb3RvdHlwZSkge1xuXHR2YWx1ZShvYmopO1xuXHRpZiAocHJvdG90eXBlID09PSBudWxsIHx8IGlzT2JqZWN0KHByb3RvdHlwZSkpIHJldHVybiBvYmo7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm90b3R5cGUgbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIChzdGF0dXMpIHtcblx0dmFyIGZuLCBzZXQ7XG5cdGlmICghc3RhdHVzKSByZXR1cm4gbnVsbDtcblx0aWYgKHN0YXR1cy5sZXZlbCA9PT0gMikge1xuXHRcdGlmIChzdGF0dXMuc2V0KSB7XG5cdFx0XHRzZXQgPSBzdGF0dXMuc2V0O1xuXHRcdFx0Zm4gPSBmdW5jdGlvbiAob2JqLCBwcm90b3R5cGUpIHtcblx0XHRcdFx0c2V0LmNhbGwodmFsaWRhdGUob2JqLCBwcm90b3R5cGUpLCBwcm90b3R5cGUpO1xuXHRcdFx0XHRyZXR1cm4gb2JqO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm4gPSBmdW5jdGlvbiAob2JqLCBwcm90b3R5cGUpIHtcblx0XHRcdFx0dmFsaWRhdGUob2JqLCBwcm90b3R5cGUpLl9fcHJvdG9fXyA9IHByb3RvdHlwZTtcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZuID0gZnVuY3Rpb24gc2VsZihvYmosIHByb3RvdHlwZSkge1xuXHRcdFx0dmFyIGlzTnVsbEJhc2U7XG5cdFx0XHR2YWxpZGF0ZShvYmosIHByb3RvdHlwZSk7XG5cdFx0XHRpc051bGxCYXNlID0gb2JqSXNQcm90b3R5cGVPZi5jYWxsKHNlbGYubnVsbFBvbHlmaWxsLCBvYmopO1xuXHRcdFx0aWYgKGlzTnVsbEJhc2UpIGRlbGV0ZSBzZWxmLm51bGxQb2x5ZmlsbC5fX3Byb3RvX187XG5cdFx0XHRpZiAocHJvdG90eXBlID09PSBudWxsKSBwcm90b3R5cGUgPSBzZWxmLm51bGxQb2x5ZmlsbDtcblx0XHRcdG9iai5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG5cdFx0XHRpZiAoaXNOdWxsQmFzZSkgZGVmaW5lUHJvcGVydHkoc2VsZi5udWxsUG9seWZpbGwsIFwiX19wcm90b19fXCIsIG51bGxEZXNjKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBcImxldmVsXCIsIHtcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHR2YWx1ZTogc3RhdHVzLmxldmVsXG5cdH0pO1xufShcblx0KGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdG1wT2JqMSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHQgICwgdG1wT2JqMiA9IHt9XG5cdFx0ICAsIHNldFxuXHRcdCAgLCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBcIl9fcHJvdG9fX1wiKTtcblxuXHRcdGlmIChkZXNjKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzZXQgPSBkZXNjLnNldDsgLy8gT3BlcmEgY3Jhc2hlcyBhdCB0aGlzIHBvaW50XG5cdFx0XHRcdHNldC5jYWxsKHRtcE9iajEsIHRtcE9iajIpO1xuXHRcdFx0fSBjYXRjaCAoaWdub3JlKSB7fVxuXHRcdFx0aWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0bXBPYmoxKSA9PT0gdG1wT2JqMikgcmV0dXJuIHsgc2V0OiBzZXQsIGxldmVsOiAyIH07XG5cdFx0fVxuXG5cdFx0dG1wT2JqMS5fX3Byb3RvX18gPSB0bXBPYmoyO1xuXHRcdGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodG1wT2JqMSkgPT09IHRtcE9iajIpIHJldHVybiB7IGxldmVsOiAyIH07XG5cblx0XHR0bXBPYmoxID0ge307XG5cdFx0dG1wT2JqMS5fX3Byb3RvX18gPSB0bXBPYmoyO1xuXHRcdGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodG1wT2JqMSkgPT09IHRtcE9iajIpIHJldHVybiB7IGxldmVsOiAxIH07XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKClcbikpO1xuXG5yZXF1aXJlKFwiLi4vY3JlYXRlXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKVxuXHQ/IE9iamVjdC5zZXRQcm90b3R5cGVPZlxuXHQ6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcblx0aWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKGZuICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG5cdHJldHVybiBmbjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBvYmo7XG5cdGlmICh0eXBlb2YgYXNzaWduICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0b2JqID0geyBmb286IFwicmF6XCIgfTtcblx0YXNzaWduKG9iaiwgeyBiYXI6IFwiZHdhXCIgfSwgeyB0cnp5OiBcInRyenlcIiB9KTtcblx0cmV0dXJuIChvYmouZm9vICsgb2JqLmJhciArIG9iai50cnp5KSA9PT0gXCJyYXpkd2F0cnp5XCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG4gcmV0dXJuIGZhbHNlO1xufVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuLi9pcy12YWx1ZVwiKTtcblxudmFyIGtleXMgPSBPYmplY3Qua2V5cztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG5cdHJldHVybiBrZXlzKGlzVmFsdWUob2JqZWN0KSA/IE9iamVjdChvYmplY3QpIDogb2JqZWN0KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gT2JqZWN0LmtleXNcblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlzICA9IHJlcXVpcmUoXCIuLi9rZXlzXCIpXG4gICwgdmFsdWUgPSByZXF1aXJlKFwiLi4vdmFsaWQtdmFsdWVcIilcbiAgLCBtYXggICA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkZXN0LCBzcmMgLyosIOKApnNyY24qLykge1xuXHR2YXIgZXJyb3IsIGksIGxlbmd0aCA9IG1heChhcmd1bWVudHMubGVuZ3RoLCAyKSwgYXNzaWduO1xuXHRkZXN0ID0gT2JqZWN0KHZhbHVlKGRlc3QpKTtcblx0YXNzaWduID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdHRyeSB7XG5cdFx0XHRkZXN0W2tleV0gPSBzcmNba2V5XTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGU7XG5cdFx0fVxuXHR9O1xuXHRmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRzcmMgPSBhcmd1bWVudHNbaV07XG5cdFx0a2V5cyhzcmMpLmZvckVhY2goYXNzaWduKTtcblx0fVxuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgZXJyb3I7XG5cdHJldHVybiBkZXN0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBPYmplY3QuYXNzaWduXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG52YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIChzcmMsIG9iaikge1xuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBzcmMpIG9ialtrZXldID0gc3JjW2tleV07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMxIC8qLCDigKZvcHRpb25zKi8pIHtcblx0dmFyIHJlc3VsdCA9IGNyZWF0ZShudWxsKTtcblx0Zm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRpZiAoIWlzVmFsdWUob3B0aW9ucykpIHJldHVybjtcblx0XHRwcm9jZXNzKE9iamVjdChvcHRpb25zKSwgcmVzdWx0KTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gRGVwcmVjYXRlZFxuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0ciA9IFwicmF6ZHdhdHJ6eVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBzdHIuY29udGFpbnMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gKHN0ci5jb250YWlucyhcImR3YVwiKSA9PT0gdHJ1ZSkgJiYgKHN0ci5jb250YWlucyhcImZvb1wiKSA9PT0gZmFsc2UpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLyosIHBvc2l0aW9uKi8pIHtcblx0cmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLCBzZWFyY2hTdHJpbmcsIGFyZ3VtZW50c1sxXSkgPiAtMTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gU3RyaW5nLnByb3RvdHlwZS5jb250YWluc1xuXHQ6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvYXNzaWduJylcbiAgLCBub3JtYWxpemVPcHRzID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMnKVxuICAsIGlzQ2FsbGFibGUgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9pcy1jYWxsYWJsZScpXG4gICwgY29udGFpbnMgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMnKVxuXG4gICwgZDtcblxuZCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRzY3IsIHZhbHVlLyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgdywgb3B0aW9ucywgZGVzYztcblx0aWYgKChhcmd1bWVudHMubGVuZ3RoIDwgMikgfHwgKHR5cGVvZiBkc2NyICE9PSAnc3RyaW5nJykpIHtcblx0XHRvcHRpb25zID0gdmFsdWU7XG5cdFx0dmFsdWUgPSBkc2NyO1xuXHRcdGRzY3IgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG5cdH1cblx0aWYgKGRzY3IgPT0gbnVsbCkge1xuXHRcdGMgPSB3ID0gdHJ1ZTtcblx0XHRlID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2MnKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCAnZScpO1xuXHRcdHcgPSBjb250YWlucy5jYWxsKGRzY3IsICd3Jyk7XG5cdH1cblxuXHRkZXNjID0geyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogYywgZW51bWVyYWJsZTogZSwgd3JpdGFibGU6IHcgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn07XG5cbmQuZ3MgPSBmdW5jdGlvbiAoZHNjciwgZ2V0LCBzZXQvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBjLCBlLCBvcHRpb25zLCBkZXNjO1xuXHRpZiAodHlwZW9mIGRzY3IgIT09ICdzdHJpbmcnKSB7XG5cdFx0b3B0aW9ucyA9IHNldDtcblx0XHRzZXQgPSBnZXQ7XG5cdFx0Z2V0ID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzNdO1xuXHR9XG5cdGlmIChnZXQgPT0gbnVsbCkge1xuXHRcdGdldCA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICghaXNDYWxsYWJsZShnZXQpKSB7XG5cdFx0b3B0aW9ucyA9IGdldDtcblx0XHRnZXQgPSBzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoc2V0ID09IG51bGwpIHtcblx0XHRzZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoc2V0KSkge1xuXHRcdG9wdGlvbnMgPSBzZXQ7XG5cdFx0c2V0ID0gdW5kZWZpbmVkO1xuXHR9XG5cdGlmIChkc2NyID09IG51bGwpIHtcblx0XHRjID0gdHJ1ZTtcblx0XHRlID0gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2MnKTtcblx0XHRlID0gY29udGFpbnMuY2FsbChkc2NyLCAnZScpO1xuXHR9XG5cblx0ZGVzYyA9IHsgZ2V0OiBnZXQsIHNldDogc2V0LCBjb25maWd1cmFibGU6IGMsIGVudW1lcmFibGU6IGUgfTtcblx0cmV0dXJuICFvcHRpb25zID8gZGVzYyA6IGFzc2lnbihub3JtYWxpemVPcHRzKG9wdGlvbnMpLCBkZXNjKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIGNhbGxhYmxlID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuXG4gICwgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHksIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbFxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXG4gICwgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgZGVzY3JpcHRvciA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfVxuXG4gICwgb24sIG9uY2UsIG9mZiwgZW1pdCwgbWV0aG9kcywgZGVzY3JpcHRvcnMsIGJhc2U7XG5cbm9uID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSB7XG5cdFx0ZGF0YSA9IGRlc2NyaXB0b3IudmFsdWUgPSBjcmVhdGUobnVsbCk7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGhpcywgJ19fZWVfXycsIGRlc2NyaXB0b3IpO1xuXHRcdGRlc2NyaXB0b3IudmFsdWUgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0fVxuXHRpZiAoIWRhdGFbdHlwZV0pIGRhdGFbdHlwZV0gPSBsaXN0ZW5lcjtcblx0ZWxzZSBpZiAodHlwZW9mIGRhdGFbdHlwZV0gPT09ICdvYmplY3QnKSBkYXRhW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHRlbHNlIGRhdGFbdHlwZV0gPSBbZGF0YVt0eXBlXSwgbGlzdGVuZXJdO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgb25jZSwgc2VsZjtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cdHNlbGYgPSB0aGlzO1xuXHRvbi5jYWxsKHRoaXMsIHR5cGUsIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0b2ZmLmNhbGwoc2VsZiwgdHlwZSwgb25jZSk7XG5cdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJndW1lbnRzKTtcblx0fSk7XG5cblx0b25jZS5fX2VlT25jZUxpc3RlbmVyX18gPSBsaXN0ZW5lcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5vZmYgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIGRhdGEsIGxpc3RlbmVycywgY2FuZGlkYXRlLCBpO1xuXG5cdGNhbGxhYmxlKGxpc3RlbmVyKTtcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSByZXR1cm4gdGhpcztcblx0ZGF0YSA9IHRoaXMuX19lZV9fO1xuXHRpZiAoIWRhdGFbdHlwZV0pIHJldHVybiB0aGlzO1xuXHRsaXN0ZW5lcnMgPSBkYXRhW3R5cGVdO1xuXG5cdGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvciAoaSA9IDA7IChjYW5kaWRhdGUgPSBsaXN0ZW5lcnNbaV0pOyArK2kpIHtcblx0XHRcdGlmICgoY2FuZGlkYXRlID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0XHQoY2FuZGlkYXRlLl9fZWVPbmNlTGlzdGVuZXJfXyA9PT0gbGlzdGVuZXIpKSB7XG5cdFx0XHRcdGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAyKSBkYXRhW3R5cGVdID0gbGlzdGVuZXJzW2kgPyAwIDogMV07XG5cdFx0XHRcdGVsc2UgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKChsaXN0ZW5lcnMgPT09IGxpc3RlbmVyKSB8fFxuXHRcdFx0XHQobGlzdGVuZXJzLl9fZWVPbmNlTGlzdGVuZXJfXyA9PT0gbGlzdGVuZXIpKSB7XG5cdFx0XHRkZWxldGUgZGF0YVt0eXBlXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuXHR2YXIgaSwgbCwgbGlzdGVuZXIsIGxpc3RlbmVycywgYXJncztcblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ19fZWVfXycpKSByZXR1cm47XG5cdGxpc3RlbmVycyA9IHRoaXMuX19lZV9fW3R5cGVdO1xuXHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXG5cdGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnb2JqZWN0Jykge1xuXHRcdGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdGZvciAoaSA9IDE7IGkgPCBsOyArK2kpIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG5cdFx0bGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCk7XG5cdFx0Zm9yIChpID0gMDsgKGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRhcHBseS5jYWxsKGxpc3RlbmVyLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcyk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRjYWxsLmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmd1bWVudHNbMV0pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0YXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSB7XG5cdFx0XHRcdGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3MpO1xuXHRcdH1cblx0fVxufTtcblxubWV0aG9kcyA9IHtcblx0b246IG9uLFxuXHRvbmNlOiBvbmNlLFxuXHRvZmY6IG9mZixcblx0ZW1pdDogZW1pdFxufTtcblxuZGVzY3JpcHRvcnMgPSB7XG5cdG9uOiBkKG9uKSxcblx0b25jZTogZChvbmNlKSxcblx0b2ZmOiBkKG9mZiksXG5cdGVtaXQ6IGQoZW1pdClcbn07XG5cbmJhc2UgPSBkZWZpbmVQcm9wZXJ0aWVzKHt9LCBkZXNjcmlwdG9ycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uIChvKSB7XG5cdHJldHVybiAobyA9PSBudWxsKSA/IGNyZWF0ZShiYXNlKSA6IGRlZmluZVByb3BlcnRpZXMoT2JqZWN0KG8pLCBkZXNjcmlwdG9ycyk7XG59O1xuZXhwb3J0cy5tZXRob2RzID0gbWV0aG9kcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhbGlkVHlwZXMgPSB7IG9iamVjdDogdHJ1ZSwgc3ltYm9sOiB0cnVlIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgc3ltYm9sO1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRzeW1ib2wgPSBTeW1ib2woJ3Rlc3Qgc3ltYm9sJyk7XG5cdHRyeSB7IFN0cmluZyhzeW1ib2wpOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIFJldHVybiAndHJ1ZScgYWxzbyBmb3IgcG9seWZpbGxzXG5cdGlmICghdmFsaWRUeXBlc1t0eXBlb2YgU3ltYm9sLml0ZXJhdG9yXSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoIXZhbGlkVHlwZXNbdHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZV0pIHJldHVybiBmYWxzZTtcblx0aWYgKCF2YWxpZFR5cGVzW3R5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWddKSByZXR1cm4gZmFsc2U7XG5cblx0cmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7XG5cdGlmICgheCkgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHggPT09ICdzeW1ib2wnKSByZXR1cm4gdHJ1ZTtcblx0aWYgKCF4LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cdGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdTeW1ib2wnKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoeFt4LmNvbnN0cnVjdG9yLnRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCcpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pcy1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHRocm93IG5ldyBUeXBlRXJyb3IodmFsdWUgKyBcIiBpcyBub3QgYSBzeW1ib2xcIik7XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIvLyBFUzIwMTUgU3ltYm9sIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgKG9yIHBhcnRpYWxseSkgc3VwcG9ydCBpdFxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIHZhbGlkYXRlU3ltYm9sID0gcmVxdWlyZSgnLi92YWxpZGF0ZS1zeW1ib2wnKVxuXG4gICwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksIG9ialByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGVcbiAgLCBOYXRpdmVTeW1ib2wsIFN5bWJvbFBvbHlmaWxsLCBIaWRkZW5TeW1ib2wsIGdsb2JhbFN5bWJvbHMgPSBjcmVhdGUobnVsbClcbiAgLCBpc05hdGl2ZVNhZmU7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdE5hdGl2ZVN5bWJvbCA9IFN5bWJvbDtcblx0dHJ5IHtcblx0XHRTdHJpbmcoTmF0aXZlU3ltYm9sKCkpO1xuXHRcdGlzTmF0aXZlU2FmZSA9IHRydWU7XG5cdH0gY2F0Y2ggKGlnbm9yZSkge31cbn1cblxudmFyIGdlbmVyYXRlTmFtZSA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBjcmVhdGVkID0gY3JlYXRlKG51bGwpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRlc2MpIHtcblx0XHR2YXIgcG9zdGZpeCA9IDAsIG5hbWUsIGllMTFCdWdXb3JrYXJvdW5kO1xuXHRcdHdoaWxlIChjcmVhdGVkW2Rlc2MgKyAocG9zdGZpeCB8fCAnJyldKSArK3Bvc3RmaXg7XG5cdFx0ZGVzYyArPSAocG9zdGZpeCB8fCAnJyk7XG5cdFx0Y3JlYXRlZFtkZXNjXSA9IHRydWU7XG5cdFx0bmFtZSA9ICdAQCcgKyBkZXNjO1xuXHRcdGRlZmluZVByb3BlcnR5KG9ialByb3RvdHlwZSwgbmFtZSwgZC5ncyhudWxsLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdC8vIEZvciBJRTExIGlzc3VlIHNlZTpcblx0XHRcdC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrZGV0YWlsL3ZpZXcvMTkyODUwOC9cblx0XHRcdC8vICAgIGllMTEtYnJva2VuLWdldHRlcnMtb24tZG9tLW9iamVjdHNcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWRpa29vL2VzNi1zeW1ib2wvaXNzdWVzLzEyXG5cdFx0XHRpZiAoaWUxMUJ1Z1dvcmthcm91bmQpIHJldHVybjtcblx0XHRcdGllMTFCdWdXb3JrYXJvdW5kID0gdHJ1ZTtcblx0XHRcdGRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIGQodmFsdWUpKTtcblx0XHRcdGllMTFCdWdXb3JrYXJvdW5kID0gZmFsc2U7XG5cdFx0fSkpO1xuXHRcdHJldHVybiBuYW1lO1xuXHR9O1xufSgpKTtcblxuLy8gSW50ZXJuYWwgY29uc3RydWN0b3IgKG5vdCBvbmUgZXhwb3NlZCkgZm9yIGNyZWF0aW5nIFN5bWJvbCBpbnN0YW5jZXMuXG4vLyBUaGlzIG9uZSBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IGBzb21lU3ltYm9sIGluc3RhbmNlb2YgU3ltYm9sYCBhbHdheXMgcmV0dXJuIGZhbHNlXG5IaWRkZW5TeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pIHtcblx0aWYgKHRoaXMgaW5zdGFuY2VvZiBIaWRkZW5TeW1ib2wpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXHRyZXR1cm4gU3ltYm9sUG9seWZpbGwoZGVzY3JpcHRpb24pO1xufTtcblxuLy8gRXhwb3NlZCBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gKHJldHVybnMgaW5zdGFuY2VzIG9mIEhpZGRlblN5bWJvbClcbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sUG9seWZpbGwgPSBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pIHtcblx0dmFyIHN5bWJvbDtcblx0aWYgKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXHRpZiAoaXNOYXRpdmVTYWZlKSByZXR1cm4gTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcblx0c3ltYm9sID0gY3JlYXRlKEhpZGRlblN5bWJvbC5wcm90b3R5cGUpO1xuXHRkZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcoZGVzY3JpcHRpb24pKTtcblx0cmV0dXJuIGRlZmluZVByb3BlcnRpZXMoc3ltYm9sLCB7XG5cdFx0X19kZXNjcmlwdGlvbl9fOiBkKCcnLCBkZXNjcmlwdGlvbiksXG5cdFx0X19uYW1lX186IGQoJycsIGdlbmVyYXRlTmFtZShkZXNjcmlwdGlvbikpXG5cdH0pO1xufTtcbmRlZmluZVByb3BlcnRpZXMoU3ltYm9sUG9seWZpbGwsIHtcblx0Zm9yOiBkKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRpZiAoZ2xvYmFsU3ltYm9sc1trZXldKSByZXR1cm4gZ2xvYmFsU3ltYm9sc1trZXldO1xuXHRcdHJldHVybiAoZ2xvYmFsU3ltYm9sc1trZXldID0gU3ltYm9sUG9seWZpbGwoU3RyaW5nKGtleSkpKTtcblx0fSksXG5cdGtleUZvcjogZChmdW5jdGlvbiAocykge1xuXHRcdHZhciBrZXk7XG5cdFx0dmFsaWRhdGVTeW1ib2wocyk7XG5cdFx0Zm9yIChrZXkgaW4gZ2xvYmFsU3ltYm9scykgaWYgKGdsb2JhbFN5bWJvbHNba2V5XSA9PT0gcykgcmV0dXJuIGtleTtcblx0fSksXG5cblx0Ly8gVG8gZW5zdXJlIHByb3BlciBpbnRlcm9wZXJhYmlsaXR5IHdpdGggb3RoZXIgbmF0aXZlIGZ1bmN0aW9ucyAoZS5nLiBBcnJheS5mcm9tKVxuXHQvLyBmYWxsYmFjayB0byBldmVudHVhbCBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgZ2l2ZW4gc3ltYm9sXG5cdGhhc0luc3RhbmNlOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5oYXNJbnN0YW5jZSkgfHwgU3ltYm9sUG9seWZpbGwoJ2hhc0luc3RhbmNlJykpLFxuXHRpc0NvbmNhdFNwcmVhZGFibGU6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSkgfHxcblx0XHRTeW1ib2xQb2x5ZmlsbCgnaXNDb25jYXRTcHJlYWRhYmxlJykpLFxuXHRpdGVyYXRvcjogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuaXRlcmF0b3IpIHx8IFN5bWJvbFBvbHlmaWxsKCdpdGVyYXRvcicpKSxcblx0bWF0Y2g6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLm1hdGNoKSB8fCBTeW1ib2xQb2x5ZmlsbCgnbWF0Y2gnKSksXG5cdHJlcGxhY2U6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnJlcGxhY2UpIHx8IFN5bWJvbFBvbHlmaWxsKCdyZXBsYWNlJykpLFxuXHRzZWFyY2g6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnNlYXJjaCkgfHwgU3ltYm9sUG9seWZpbGwoJ3NlYXJjaCcpKSxcblx0c3BlY2llczogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuc3BlY2llcykgfHwgU3ltYm9sUG9seWZpbGwoJ3NwZWNpZXMnKSksXG5cdHNwbGl0OiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5zcGxpdCkgfHwgU3ltYm9sUG9seWZpbGwoJ3NwbGl0JykpLFxuXHR0b1ByaW1pdGl2ZTogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wudG9QcmltaXRpdmUpIHx8IFN5bWJvbFBvbHlmaWxsKCd0b1ByaW1pdGl2ZScpKSxcblx0dG9TdHJpbmdUYWc6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnRvU3RyaW5nVGFnKSB8fCBTeW1ib2xQb2x5ZmlsbCgndG9TdHJpbmdUYWcnKSksXG5cdHVuc2NvcGFibGVzOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC51bnNjb3BhYmxlcykgfHwgU3ltYm9sUG9seWZpbGwoJ3Vuc2NvcGFibGVzJykpXG59KTtcblxuLy8gSW50ZXJuYWwgdHdlYWtzIGZvciByZWFsIHN5bWJvbCBwcm9kdWNlclxuZGVmaW5lUHJvcGVydGllcyhIaWRkZW5TeW1ib2wucHJvdG90eXBlLCB7XG5cdGNvbnN0cnVjdG9yOiBkKFN5bWJvbFBvbHlmaWxsKSxcblx0dG9TdHJpbmc6IGQoJycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX19uYW1lX187IH0pXG59KTtcblxuLy8gUHJvcGVyIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgZXhwb3NlZCBvbiBTeW1ib2wucHJvdG90eXBlXG4vLyBUaGV5IHdvbid0IGJlIGFjY2Vzc2libGUgb24gcHJvZHVjZWQgc3ltYm9sIGluc3RhbmNlcyBhcyB0aGV5IGRlcml2ZSBmcm9tIEhpZGRlblN5bWJvbC5wcm90b3R5cGVcbmRlZmluZVByb3BlcnRpZXMoU3ltYm9sUG9seWZpbGwucHJvdG90eXBlLCB7XG5cdHRvU3RyaW5nOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuICdTeW1ib2wgKCcgKyB2YWxpZGF0ZVN5bWJvbCh0aGlzKS5fX2Rlc2NyaXB0aW9uX18gKyAnKSc7IH0pLFxuXHR2YWx1ZU9mOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbGlkYXRlU3ltYm9sKHRoaXMpOyB9KVxufSk7XG5kZWZpbmVQcm9wZXJ0eShTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvUHJpbWl0aXZlLCBkKCcnLCBmdW5jdGlvbiAoKSB7XG5cdHZhciBzeW1ib2wgPSB2YWxpZGF0ZVN5bWJvbCh0aGlzKTtcblx0aWYgKHR5cGVvZiBzeW1ib2wgPT09ICdzeW1ib2wnKSByZXR1cm4gc3ltYm9sO1xuXHRyZXR1cm4gc3ltYm9sLnRvU3RyaW5nKCk7XG59KSk7XG5kZWZpbmVQcm9wZXJ0eShTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCBkKCdjJywgJ1N5bWJvbCcpKTtcblxuLy8gUHJvcGVyIGltcGxlbWVudGF0b24gb2YgdG9QcmltaXRpdmUgYW5kIHRvU3RyaW5nVGFnIGZvciByZXR1cm5lZCBzeW1ib2wgaW5zdGFuY2VzXG5kZWZpbmVQcm9wZXJ0eShIaWRkZW5TeW1ib2wucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyxcblx0ZCgnYycsIFN5bWJvbFBvbHlmaWxsLnByb3RvdHlwZVtTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZ10pKTtcblxuLy8gTm90ZTogSXQncyBpbXBvcnRhbnQgdG8gZGVmaW5lIGB0b1ByaW1pdGl2ZWAgYXMgbGFzdCBvbmUsIGFzIHNvbWUgaW1wbGVtZW50YXRpb25zXG4vLyBpbXBsZW1lbnQgYHRvUHJpbWl0aXZlYCBuYXRpdmVseSB3aXRob3V0IGltcGxlbWVudGluZyBgdG9TdHJpbmdUYWdgIChvciBvdGhlciBzcGVjaWZpZWQgc3ltYm9scylcbi8vIEFuZCB0aGF0IG1heSBpbnZva2UgZXJyb3IgaW4gZGVmaW5pdGlvbiBmbG93OlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbWVkaWtvby9lczYtc3ltYm9sL2lzc3Vlcy8xMyNpc3N1ZWNvbW1lbnQtMTY0MTQ2MTQ5XG5kZWZpbmVQcm9wZXJ0eShIaWRkZW5TeW1ib2wucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1ByaW1pdGl2ZSxcblx0ZCgnYycsIFN5bWJvbFBvbHlmaWxsLnByb3RvdHlwZVtTeW1ib2xQb2x5ZmlsbC50b1ByaW1pdGl2ZV0pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2lzLWltcGxlbWVudGVkJykoKSA/IFN5bWJvbCA6IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICwgaWQgPSBvYmpUb1N0cmluZy5jYWxsKFxuXHQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBhcmd1bWVudHM7XG5cdH0pKClcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gaWQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmpUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsIGlkID0gb2JqVG9TdHJpbmcuY2FsbChcIlwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHxcblx0XHQodmFsdWUgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0KHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nIHx8IG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBpZCkpIHx8XG5cdFx0ZmFsc2Vcblx0KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZShcImVzNS1leHQvZnVuY3Rpb24vaXMtYXJndW1lbnRzXCIpXG4gICwgaXNWYWx1ZSAgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3QvaXMtdmFsdWVcIilcbiAgLCBpc1N0cmluZyAgICA9IHJlcXVpcmUoXCJlczUtZXh0L3N0cmluZy9pcy1zdHJpbmdcIik7XG5cbnZhciBpdGVyYXRvclN5bWJvbCA9IHJlcXVpcmUoXCJlczYtc3ltYm9sXCIpLml0ZXJhdG9yXG4gICwgaXNBcnJheSAgICAgICAgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAoIWlzVmFsdWUodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChpc0FycmF5KHZhbHVlKSkgcmV0dXJuIHRydWU7XG5cdGlmIChpc1N0cmluZyh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXHRpZiAoaXNBcmd1bWVudHModmFsdWUpKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZVtpdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzSXRlcmFibGUgPSByZXF1aXJlKFwiLi9pcy1pdGVyYWJsZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc0l0ZXJhYmxlKHZhbHVlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcih2YWx1ZSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGZyb20gPSBBcnJheS5mcm9tLCBhcnIsIHJlc3VsdDtcblx0aWYgKHR5cGVvZiBmcm9tICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0YXJyID0gW1wicmF6XCIsIFwiZHdhXCJdO1xuXHRyZXN1bHQgPSBmcm9tKGFycik7XG5cdHJldHVybiBCb29sZWFuKHJlc3VsdCAmJiAocmVzdWx0ICE9PSBhcnIpICYmIChyZXN1bHRbMV0gPT09IFwiZHdhXCIpKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9ialRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZywgaWQgPSBvYmpUb1N0cmluZy5jYWxsKHJlcXVpcmUoXCIuL25vb3BcIikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IGlkO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXRlcmF0b3JTeW1ib2wgPSByZXF1aXJlKFwiZXM2LXN5bWJvbFwiKS5pdGVyYXRvclxuICAsIGlzQXJndW1lbnRzICAgID0gcmVxdWlyZShcIi4uLy4uL2Z1bmN0aW9uL2lzLWFyZ3VtZW50c1wiKVxuICAsIGlzRnVuY3Rpb24gICAgID0gcmVxdWlyZShcIi4uLy4uL2Z1bmN0aW9uL2lzLWZ1bmN0aW9uXCIpXG4gICwgdG9Qb3NJbnQgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vbnVtYmVyL3RvLXBvcy1pbnRlZ2VyXCIpXG4gICwgY2FsbGFibGUgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vb2JqZWN0L3ZhbGlkLWNhbGxhYmxlXCIpXG4gICwgdmFsaWRWYWx1ZSAgICAgPSByZXF1aXJlKFwiLi4vLi4vb2JqZWN0L3ZhbGlkLXZhbHVlXCIpXG4gICwgaXNWYWx1ZSAgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vb2JqZWN0L2lzLXZhbHVlXCIpXG4gICwgaXNTdHJpbmcgICAgICAgPSByZXF1aXJlKFwiLi4vLi4vc3RyaW5nL2lzLXN0cmluZ1wiKVxuICAsIGlzQXJyYXkgICAgICAgID0gQXJyYXkuaXNBcnJheVxuICAsIGNhbGwgICAgICAgICAgID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBkZXNjICAgICAgICAgICA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IG51bGwgfVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJyYXlMaWtlIC8qLCBtYXBGbiwgdGhpc0FyZyovKSB7XG5cdHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXVxuXHQgICwgdGhpc0FyZyA9IGFyZ3VtZW50c1syXVxuXHQgICwgQ29udGV4dFxuXHQgICwgaVxuXHQgICwgalxuXHQgICwgYXJyXG5cdCAgLCBsZW5ndGhcblx0ICAsIGNvZGVcblx0ICAsIGl0ZXJhdG9yXG5cdCAgLCByZXN1bHRcblx0ICAsIGdldEl0ZXJhdG9yXG5cdCAgLCB2YWx1ZTtcblxuXHRhcnJheUxpa2UgPSBPYmplY3QodmFsaWRWYWx1ZShhcnJheUxpa2UpKTtcblxuXHRpZiAoaXNWYWx1ZShtYXBGbikpIGNhbGxhYmxlKG1hcEZuKTtcblx0aWYgKCF0aGlzIHx8IHRoaXMgPT09IEFycmF5IHx8ICFpc0Z1bmN0aW9uKHRoaXMpKSB7XG5cdFx0Ly8gUmVzdWx0OiBQbGFpbiBhcnJheVxuXHRcdGlmICghbWFwRm4pIHtcblx0XHRcdGlmIChpc0FyZ3VtZW50cyhhcnJheUxpa2UpKSB7XG5cdFx0XHRcdC8vIFNvdXJjZTogQXJndW1lbnRzXG5cdFx0XHRcdGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG5cdFx0XHRcdGlmIChsZW5ndGggIT09IDEpIHJldHVybiBBcnJheS5hcHBseShudWxsLCBhcnJheUxpa2UpO1xuXHRcdFx0XHRhcnIgPSBuZXcgQXJyYXkoMSk7XG5cdFx0XHRcdGFyclswXSA9IGFycmF5TGlrZVswXTtcblx0XHRcdFx0cmV0dXJuIGFycjtcblx0XHRcdH1cblx0XHRcdGlmIChpc0FycmF5KGFycmF5TGlrZSkpIHtcblx0XHRcdFx0Ly8gU291cmNlOiBBcnJheVxuXHRcdFx0XHRhcnIgPSBuZXcgQXJyYXkobGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aCk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkgYXJyW2ldID0gYXJyYXlMaWtlW2ldO1xuXHRcdFx0XHRyZXR1cm4gYXJyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRhcnIgPSBbXTtcblx0fSBlbHNlIHtcblx0XHQvLyBSZXN1bHQ6IE5vbiBwbGFpbiBhcnJheVxuXHRcdENvbnRleHQgPSB0aGlzO1xuXHR9XG5cblx0aWYgKCFpc0FycmF5KGFycmF5TGlrZSkpIHtcblx0XHRpZiAoKGdldEl0ZXJhdG9yID0gYXJyYXlMaWtlW2l0ZXJhdG9yU3ltYm9sXSkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gU291cmNlOiBJdGVyYXRvclxuXHRcdFx0aXRlcmF0b3IgPSBjYWxsYWJsZShnZXRJdGVyYXRvcikuY2FsbChhcnJheUxpa2UpO1xuXHRcdFx0aWYgKENvbnRleHQpIGFyciA9IG5ldyBDb250ZXh0KCk7XG5cdFx0XHRyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRpID0gMDtcblx0XHRcdHdoaWxlICghcmVzdWx0LmRvbmUpIHtcblx0XHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgcmVzdWx0LnZhbHVlLCBpKSA6IHJlc3VsdC52YWx1ZTtcblx0XHRcdFx0aWYgKENvbnRleHQpIHtcblx0XHRcdFx0XHRkZXNjLnZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdFx0ZGVmaW5lUHJvcGVydHkoYXJyLCBpLCBkZXNjKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhcnJbaV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdCsraTtcblx0XHRcdH1cblx0XHRcdGxlbmd0aCA9IGk7XG5cdFx0fSBlbHNlIGlmIChpc1N0cmluZyhhcnJheUxpa2UpKSB7XG5cdFx0XHQvLyBTb3VyY2U6IFN0cmluZ1xuXHRcdFx0bGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcblx0XHRcdGlmIChDb250ZXh0KSBhcnIgPSBuZXcgQ29udGV4dCgpO1xuXHRcdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0XHR2YWx1ZSA9IGFycmF5TGlrZVtpXTtcblx0XHRcdFx0aWYgKGkgKyAxIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRcdGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGJmZikgdmFsdWUgKz0gYXJyYXlMaWtlWysraV07XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgdmFsdWUsIGopIDogdmFsdWU7XG5cdFx0XHRcdGlmIChDb250ZXh0KSB7XG5cdFx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGRlZmluZVByb3BlcnR5KGFyciwgaiwgZGVzYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXJyW2pdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0KytqO1xuXHRcdFx0fVxuXHRcdFx0bGVuZ3RoID0gajtcblx0XHR9XG5cdH1cblx0aWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gU291cmNlOiBhcnJheSBvciBhcnJheS1saWtlXG5cdFx0bGVuZ3RoID0gdG9Qb3NJbnQoYXJyYXlMaWtlLmxlbmd0aCk7XG5cdFx0aWYgKENvbnRleHQpIGFyciA9IG5ldyBDb250ZXh0KGxlbmd0aCk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHR2YWx1ZSA9IG1hcEZuID8gY2FsbC5jYWxsKG1hcEZuLCB0aGlzQXJnLCBhcnJheUxpa2VbaV0sIGkpIDogYXJyYXlMaWtlW2ldO1xuXHRcdFx0aWYgKENvbnRleHQpIHtcblx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGksIGRlc2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXJyW2ldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmIChDb250ZXh0KSB7XG5cdFx0ZGVzYy52YWx1ZSA9IG51bGw7XG5cdFx0YXJyLmxlbmd0aCA9IGxlbmd0aDtcblx0fVxuXHRyZXR1cm4gYXJyO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBBcnJheS5mcm9tXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYUZyb20gID0gcmVxdWlyZShcIi4uL2FycmF5L2Zyb21cIilcbiAgLCBhc3NpZ24gPSByZXF1aXJlKFwiLi9hc3NpZ25cIilcbiAgLCB2YWx1ZSAgPSByZXF1aXJlKFwiLi92YWxpZC12YWx1ZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLyosIHByb3BlcnR5TmFtZXMsIG9wdGlvbnMqLykge1xuXHR2YXIgY29weSA9IE9iamVjdCh2YWx1ZShvYmopKSwgcHJvcGVydHlOYW1lcyA9IGFyZ3VtZW50c1sxXSwgb3B0aW9ucyA9IE9iamVjdChhcmd1bWVudHNbMl0pO1xuXHRpZiAoY29weSAhPT0gb2JqICYmICFwcm9wZXJ0eU5hbWVzKSByZXR1cm4gY29weTtcblx0dmFyIHJlc3VsdCA9IHt9O1xuXHRpZiAocHJvcGVydHlOYW1lcykge1xuXHRcdGFGcm9tKHByb3BlcnR5TmFtZXMsIGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcblx0XHRcdGlmIChvcHRpb25zLmVuc3VyZSB8fCBwcm9wZXJ0eU5hbWUgaW4gb2JqKSByZXN1bHRbcHJvcGVydHlOYW1lXSA9IG9ialtwcm9wZXJ0eU5hbWVdO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGFzc2lnbihyZXN1bHQsIG9iaik7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBJbnRlcm5hbCBtZXRob2QsIHVzZWQgYnkgaXRlcmF0aW9uIGZ1bmN0aW9ucy5cbi8vIENhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2gga2V5LXZhbHVlIHBhaXIgZm91bmQgaW4gb2JqZWN0XG4vLyBPcHRpb25hbGx5IHRha2VzIGNvbXBhcmVGbiB0byBpdGVyYXRlIG9iamVjdCBpbiBzcGVjaWZpYyBvcmRlclxuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGxhYmxlICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vdmFsaWQtY2FsbGFibGVcIilcbiAgLCB2YWx1ZSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3ZhbGlkLXZhbHVlXCIpXG4gICwgYmluZCAgICAgICAgICAgICAgICAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICAsIGNhbGwgICAgICAgICAgICAgICAgICAgID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBrZXlzICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5rZXlzXG4gICwgb2JqUHJvcGVydHlJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QsIGRlZlZhbCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG9iaiwgY2IgLyosIHRoaXNBcmcsIGNvbXBhcmVGbiovKSB7XG5cdFx0dmFyIGxpc3QsIHRoaXNBcmcgPSBhcmd1bWVudHNbMl0sIGNvbXBhcmVGbiA9IGFyZ3VtZW50c1szXTtcblx0XHRvYmogPSBPYmplY3QodmFsdWUob2JqKSk7XG5cdFx0Y2FsbGFibGUoY2IpO1xuXG5cdFx0bGlzdCA9IGtleXMob2JqKTtcblx0XHRpZiAoY29tcGFyZUZuKSB7XG5cdFx0XHRsaXN0LnNvcnQodHlwZW9mIGNvbXBhcmVGbiA9PT0gXCJmdW5jdGlvblwiID8gYmluZC5jYWxsKGNvbXBhcmVGbiwgb2JqKSA6IHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgbWV0aG9kICE9PSBcImZ1bmN0aW9uXCIpIG1ldGhvZCA9IGxpc3RbbWV0aG9kXTtcblx0XHRyZXR1cm4gY2FsbC5jYWxsKG1ldGhvZCwgbGlzdCwgZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcblx0XHRcdGlmICghb2JqUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIGtleSkpIHJldHVybiBkZWZWYWw7XG5cdFx0XHRyZXR1cm4gY2FsbC5jYWxsKGNiLCB0aGlzQXJnLCBvYmpba2V5XSwga2V5LCBvYmosIGluZGV4KTtcblx0XHR9KTtcblx0fTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9faXRlcmF0ZVwiKShcImZvckVhY2hcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGxhYmxlID0gcmVxdWlyZShcIi4vdmFsaWQtY2FsbGFibGVcIilcbiAgLCBmb3JFYWNoICA9IHJlcXVpcmUoXCIuL2Zvci1lYWNoXCIpXG4gICwgY2FsbCAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBjYiAvKiwgdGhpc0FyZyovKSB7XG5cdHZhciByZXN1bHQgPSB7fSwgdGhpc0FyZyA9IGFyZ3VtZW50c1syXTtcblx0Y2FsbGFibGUoY2IpO1xuXHRmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXksIHRhcmdldE9iaiwgaW5kZXgpIHtcblx0XHRyZXN1bHRba2V5XSA9IGNhbGwuY2FsbChjYiwgdGhpc0FyZywgdmFsdWUsIGtleSwgdGFyZ2V0T2JqLCBpbmRleCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvcHkgICAgICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9jb3B5JylcbiAgLCBub3JtYWxpemVPcHRpb25zID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMnKVxuICAsIGVuc3VyZUNhbGxhYmxlICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG4gICwgbWFwICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L21hcCcpXG4gICwgY2FsbGFibGUgICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcbiAgLCB2YWxpZFZhbHVlICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtdmFsdWUnKVxuXG4gICwgYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlZmluZTtcblxuZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlc2MsIG9wdGlvbnMpIHtcblx0dmFyIHZhbHVlID0gdmFsaWRWYWx1ZShkZXNjKSAmJiBjYWxsYWJsZShkZXNjLnZhbHVlKSwgZGdzO1xuXHRkZ3MgPSBjb3B5KGRlc2MpO1xuXHRkZWxldGUgZGdzLndyaXRhYmxlO1xuXHRkZWxldGUgZGdzLnZhbHVlO1xuXHRkZ3MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghb3B0aW9ucy5vdmVyd3JpdGVEZWZpbml0aW9uICYmIGhhc093blByb3BlcnR5LmNhbGwodGhpcywgbmFtZSkpIHJldHVybiB2YWx1ZTtcblx0XHRkZXNjLnZhbHVlID0gYmluZC5jYWxsKHZhbHVlLCBvcHRpb25zLnJlc29sdmVDb250ZXh0ID8gb3B0aW9ucy5yZXNvbHZlQ29udGV4dCh0aGlzKSA6IHRoaXMpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIGRlc2MpO1xuXHRcdHJldHVybiB0aGlzW25hbWVdO1xuXHR9O1xuXHRyZXR1cm4gZGdzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcHMvKiwgb3B0aW9ucyovKSB7XG5cdHZhciBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhhcmd1bWVudHNbMV0pO1xuXHRpZiAob3B0aW9ucy5yZXNvbHZlQ29udGV4dCAhPSBudWxsKSBlbnN1cmVDYWxsYWJsZShvcHRpb25zLnJlc29sdmVDb250ZXh0KTtcblx0cmV0dXJuIG1hcChwcm9wcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHsgcmV0dXJuIGRlZmluZShuYW1lLCBkZXNjLCBvcHRpb25zKTsgfSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjbGVhciAgICA9IHJlcXVpcmUoXCJlczUtZXh0L2FycmF5LyMvY2xlYXJcIilcbiAgLCBhc3NpZ24gICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC9hc3NpZ25cIilcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZVwiKVxuICAsIHZhbHVlICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlXCIpXG4gICwgZCAgICAgICAgPSByZXF1aXJlKFwiZFwiKVxuICAsIGF1dG9CaW5kID0gcmVxdWlyZShcImQvYXV0by1iaW5kXCIpXG4gICwgU3ltYm9sICAgPSByZXF1aXJlKFwiZXM2LXN5bWJvbFwiKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsIEl0ZXJhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yID0gZnVuY3Rpb24gKGxpc3QsIGNvbnRleHQpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIEl0ZXJhdG9yKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnN0cnVjdG9yIHJlcXVpcmVzICduZXcnXCIpO1xuXHRkZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblx0XHRfX2xpc3RfXzogZChcIndcIiwgdmFsdWUobGlzdCkpLFxuXHRcdF9fY29udGV4dF9fOiBkKFwid1wiLCBjb250ZXh0KSxcblx0XHRfX25leHRJbmRleF9fOiBkKFwid1wiLCAwKVxuXHR9KTtcblx0aWYgKCFjb250ZXh0KSByZXR1cm47XG5cdGNhbGxhYmxlKGNvbnRleHQub24pO1xuXHRjb250ZXh0Lm9uKFwiX2FkZFwiLCB0aGlzLl9vbkFkZCk7XG5cdGNvbnRleHQub24oXCJfZGVsZXRlXCIsIHRoaXMuX29uRGVsZXRlKTtcblx0Y29udGV4dC5vbihcIl9jbGVhclwiLCB0aGlzLl9vbkNsZWFyKTtcbn07XG5cbi8vIEludGVybmFsICVJdGVyYXRvclByb3RvdHlwZSUgZG9lc24ndCBleHBvc2UgaXRzIGNvbnN0cnVjdG9yXG5kZWxldGUgSXRlcmF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5kZWZpbmVQcm9wZXJ0aWVzKFxuXHRJdGVyYXRvci5wcm90b3R5cGUsXG5cdGFzc2lnbihcblx0XHR7XG5cdFx0XHRfbmV4dDogZChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBpO1xuXHRcdFx0XHRpZiAoIXRoaXMuX19saXN0X18pIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdGlmICh0aGlzLl9fcmVkb19fKSB7XG5cdFx0XHRcdFx0aSA9IHRoaXMuX19yZWRvX18uc2hpZnQoKTtcblx0XHRcdFx0XHRpZiAoaSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fX25leHRJbmRleF9fIDwgdGhpcy5fX2xpc3RfXy5sZW5ndGgpIHJldHVybiB0aGlzLl9fbmV4dEluZGV4X18rKztcblx0XHRcdFx0dGhpcy5fdW5CaW5kKCk7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9KSxcblx0XHRcdG5leHQ6IGQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fY3JlYXRlUmVzdWx0KHRoaXMuX25leHQoKSk7XG5cdFx0XHR9KSxcblx0XHRcdF9jcmVhdGVSZXN1bHQ6IGQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuXHRcdFx0XHRyZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRoaXMuX3Jlc29sdmUoaSkgfTtcblx0XHRcdH0pLFxuXHRcdFx0X3Jlc29sdmU6IGQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19saXN0X19baV07XG5cdFx0XHR9KSxcblx0XHRcdF91bkJpbmQ6IGQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLl9fbGlzdF9fID0gbnVsbDtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX19yZWRvX187XG5cdFx0XHRcdGlmICghdGhpcy5fX2NvbnRleHRfXykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLl9fY29udGV4dF9fLm9mZihcIl9hZGRcIiwgdGhpcy5fb25BZGQpO1xuXHRcdFx0XHR0aGlzLl9fY29udGV4dF9fLm9mZihcIl9kZWxldGVcIiwgdGhpcy5fb25EZWxldGUpO1xuXHRcdFx0XHR0aGlzLl9fY29udGV4dF9fLm9mZihcIl9jbGVhclwiLCB0aGlzLl9vbkNsZWFyKTtcblx0XHRcdFx0dGhpcy5fX2NvbnRleHRfXyA9IG51bGw7XG5cdFx0XHR9KSxcblx0XHRcdHRvU3RyaW5nOiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIFwiW29iamVjdCBcIiArICh0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgXCJPYmplY3RcIikgKyBcIl1cIjtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRhdXRvQmluZCh7XG5cdFx0XHRfb25BZGQ6IGQoZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0XHRcdGlmIChpbmRleCA+PSB0aGlzLl9fbmV4dEluZGV4X18pIHJldHVybjtcblx0XHRcdFx0Kyt0aGlzLl9fbmV4dEluZGV4X187XG5cdFx0XHRcdGlmICghdGhpcy5fX3JlZG9fXykge1xuXHRcdFx0XHRcdGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX19yZWRvX19cIiwgZChcImNcIiwgW2luZGV4XSkpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9fcmVkb19fLmZvckVhY2goZnVuY3Rpb24gKHJlZG8sIGkpIHtcblx0XHRcdFx0XHRpZiAocmVkbyA+PSBpbmRleCkgdGhpcy5fX3JlZG9fX1tpXSA9ICsrcmVkbztcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdHRoaXMuX19yZWRvX18ucHVzaChpbmRleCk7XG5cdFx0XHR9KSxcblx0XHRcdF9vbkRlbGV0ZTogZChmdW5jdGlvbiAoaW5kZXgpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdGlmIChpbmRleCA+PSB0aGlzLl9fbmV4dEluZGV4X18pIHJldHVybjtcblx0XHRcdFx0LS10aGlzLl9fbmV4dEluZGV4X187XG5cdFx0XHRcdGlmICghdGhpcy5fX3JlZG9fXykgcmV0dXJuO1xuXHRcdFx0XHRpID0gdGhpcy5fX3JlZG9fXy5pbmRleE9mKGluZGV4KTtcblx0XHRcdFx0aWYgKGkgIT09IC0xKSB0aGlzLl9fcmVkb19fLnNwbGljZShpLCAxKTtcblx0XHRcdFx0dGhpcy5fX3JlZG9fXy5mb3JFYWNoKGZ1bmN0aW9uIChyZWRvLCBqKSB7XG5cdFx0XHRcdFx0aWYgKHJlZG8gPiBpbmRleCkgdGhpcy5fX3JlZG9fX1tqXSA9IC0tcmVkbztcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR9KSxcblx0XHRcdF9vbkNsZWFyOiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX19yZWRvX18pIGNsZWFyLmNhbGwodGhpcy5fX3JlZG9fXyk7XG5cdFx0XHRcdHRoaXMuX19uZXh0SW5kZXhfXyA9IDA7XG5cdFx0XHR9KVxuXHRcdH0pXG5cdClcbik7XG5cbmRlZmluZVByb3BlcnR5KFxuXHRJdGVyYXRvci5wcm90b3R5cGUsXG5cdFN5bWJvbC5pdGVyYXRvcixcblx0ZChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0pXG4pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpXG4gICwgY29udGFpbnMgICAgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9zdHJpbmcvIy9jb250YWluc1wiKVxuICAsIGQgICAgICAgICAgICAgID0gcmVxdWlyZShcImRcIilcbiAgLCBTeW1ib2wgICAgICAgICA9IHJlcXVpcmUoXCJlczYtc3ltYm9sXCIpXG4gICwgSXRlcmF0b3IgICAgICAgPSByZXF1aXJlKFwiLi9cIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgQXJyYXlJdGVyYXRvcjtcblxuQXJyYXlJdGVyYXRvciA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyciwga2luZCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQXJyYXlJdGVyYXRvcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb25zdHJ1Y3RvciByZXF1aXJlcyAnbmV3J1wiKTtcblx0SXRlcmF0b3IuY2FsbCh0aGlzLCBhcnIpO1xuXHRpZiAoIWtpbmQpIGtpbmQgPSBcInZhbHVlXCI7XG5cdGVsc2UgaWYgKGNvbnRhaW5zLmNhbGwoa2luZCwgXCJrZXkrdmFsdWVcIikpIGtpbmQgPSBcImtleSt2YWx1ZVwiO1xuXHRlbHNlIGlmIChjb250YWlucy5jYWxsKGtpbmQsIFwia2V5XCIpKSBraW5kID0gXCJrZXlcIjtcblx0ZWxzZSBraW5kID0gXCJ2YWx1ZVwiO1xuXHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9fa2luZF9fXCIsIGQoXCJcIiwga2luZCkpO1xufTtcbmlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoQXJyYXlJdGVyYXRvciwgSXRlcmF0b3IpO1xuXG4vLyBJbnRlcm5hbCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUgZG9lc24ndCBleHBvc2UgaXRzIGNvbnN0cnVjdG9yXG5kZWxldGUgQXJyYXlJdGVyYXRvci5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbkFycmF5SXRlcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvci5wcm90b3R5cGUsIHtcblx0X3Jlc29sdmU6IGQoZnVuY3Rpb24gKGkpIHtcblx0XHRpZiAodGhpcy5fX2tpbmRfXyA9PT0gXCJ2YWx1ZVwiKSByZXR1cm4gdGhpcy5fX2xpc3RfX1tpXTtcblx0XHRpZiAodGhpcy5fX2tpbmRfXyA9PT0gXCJrZXkrdmFsdWVcIikgcmV0dXJuIFtpLCB0aGlzLl9fbGlzdF9fW2ldXTtcblx0XHRyZXR1cm4gaTtcblx0fSlcbn0pO1xuZGVmaW5lUHJvcGVydHkoQXJyYXlJdGVyYXRvci5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywgZChcImNcIiwgXCJBcnJheSBJdGVyYXRvclwiKSk7XG4iLCIvLyBUaGFua3MgQG1hdGhpYXNieW5lbnNcbi8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSNpdGVyYXRpbmctb3Zlci1zeW1ib2xzXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKVxuICAsIGQgICAgICAgICAgICAgID0gcmVxdWlyZShcImRcIilcbiAgLCBTeW1ib2wgICAgICAgICA9IHJlcXVpcmUoXCJlczYtc3ltYm9sXCIpXG4gICwgSXRlcmF0b3IgICAgICAgPSByZXF1aXJlKFwiLi9cIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgU3RyaW5nSXRlcmF0b3I7XG5cblN0cmluZ0l0ZXJhdG9yID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdHJpbmdJdGVyYXRvcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb25zdHJ1Y3RvciByZXF1aXJlcyAnbmV3J1wiKTtcblx0c3RyID0gU3RyaW5nKHN0cik7XG5cdEl0ZXJhdG9yLmNhbGwodGhpcywgc3RyKTtcblx0ZGVmaW5lUHJvcGVydHkodGhpcywgXCJfX2xlbmd0aF9fXCIsIGQoXCJcIiwgc3RyLmxlbmd0aCkpO1xufTtcbmlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoU3RyaW5nSXRlcmF0b3IsIEl0ZXJhdG9yKTtcblxuLy8gSW50ZXJuYWwgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlIGRvZXNuJ3QgZXhwb3NlIGl0cyBjb25zdHJ1Y3RvclxuZGVsZXRlIFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuU3RyaW5nSXRlcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvci5wcm90b3R5cGUsIHtcblx0X25leHQ6IGQoZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdGhpcy5fX2xpc3RfXykgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5fX25leHRJbmRleF9fIDwgdGhpcy5fX2xlbmd0aF9fKSByZXR1cm4gdGhpcy5fX25leHRJbmRleF9fKys7XG5cdFx0dGhpcy5fdW5CaW5kKCk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fSksXG5cdF9yZXNvbHZlOiBkKGZ1bmN0aW9uIChpKSB7XG5cdFx0dmFyIGNoYXIgPSB0aGlzLl9fbGlzdF9fW2ldLCBjb2RlO1xuXHRcdGlmICh0aGlzLl9fbmV4dEluZGV4X18gPT09IHRoaXMuX19sZW5ndGhfXykgcmV0dXJuIGNoYXI7XG5cdFx0Y29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcblx0XHRpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRiZmYpIHJldHVybiBjaGFyICsgdGhpcy5fX2xpc3RfX1t0aGlzLl9fbmV4dEluZGV4X18rK107XG5cdFx0cmV0dXJuIGNoYXI7XG5cdH0pXG59KTtcbmRlZmluZVByb3BlcnR5KFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCBkKFwiY1wiLCBcIlN0cmluZyBJdGVyYXRvclwiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzQXJndW1lbnRzICAgID0gcmVxdWlyZShcImVzNS1leHQvZnVuY3Rpb24vaXMtYXJndW1lbnRzXCIpXG4gICwgaXNTdHJpbmcgICAgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nXCIpXG4gICwgQXJyYXlJdGVyYXRvciAgPSByZXF1aXJlKFwiLi9hcnJheVwiKVxuICAsIFN0cmluZ0l0ZXJhdG9yID0gcmVxdWlyZShcIi4vc3RyaW5nXCIpXG4gICwgaXRlcmFibGUgICAgICAgPSByZXF1aXJlKFwiLi92YWxpZC1pdGVyYWJsZVwiKVxuICAsIGl0ZXJhdG9yU3ltYm9sID0gcmVxdWlyZShcImVzNi1zeW1ib2xcIikuaXRlcmF0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuXHRpZiAodHlwZW9mIGl0ZXJhYmxlKG9iailbaXRlcmF0b3JTeW1ib2xdID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBvYmpbaXRlcmF0b3JTeW1ib2xdKCk7XG5cdGlmIChpc0FyZ3VtZW50cyhvYmopKSByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3Iob2JqKTtcblx0aWYgKGlzU3RyaW5nKG9iaikpIHJldHVybiBuZXcgU3RyaW5nSXRlcmF0b3Iob2JqKTtcblx0cmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKG9iaik7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoXCJlczUtZXh0L2Z1bmN0aW9uL2lzLWFyZ3VtZW50c1wiKVxuICAsIGNhbGxhYmxlICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlXCIpXG4gICwgaXNTdHJpbmcgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nXCIpXG4gICwgZ2V0ICAgICAgICAgPSByZXF1aXJlKFwiLi9nZXRcIik7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSwgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBzb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBjYiAvKiwgdGhpc0FyZyovKSB7XG5cdHZhciBtb2RlLCB0aGlzQXJnID0gYXJndW1lbnRzWzJdLCByZXN1bHQsIGRvQnJlYWssIGJyb2tlbiwgaSwgbGVuZ3RoLCBjaGFyLCBjb2RlO1xuXHRpZiAoaXNBcnJheShpdGVyYWJsZSkgfHwgaXNBcmd1bWVudHMoaXRlcmFibGUpKSBtb2RlID0gXCJhcnJheVwiO1xuXHRlbHNlIGlmIChpc1N0cmluZyhpdGVyYWJsZSkpIG1vZGUgPSBcInN0cmluZ1wiO1xuXHRlbHNlIGl0ZXJhYmxlID0gZ2V0KGl0ZXJhYmxlKTtcblxuXHRjYWxsYWJsZShjYik7XG5cdGRvQnJlYWsgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YnJva2VuID0gdHJ1ZTtcblx0fTtcblx0aWYgKG1vZGUgPT09IFwiYXJyYXlcIikge1xuXHRcdHNvbWUuY2FsbChpdGVyYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRjYWxsLmNhbGwoY2IsIHRoaXNBcmcsIHZhbHVlLCBkb0JyZWFrKTtcblx0XHRcdHJldHVybiBicm9rZW47XG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChtb2RlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0bGVuZ3RoID0gaXRlcmFibGUubGVuZ3RoO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0Y2hhciA9IGl0ZXJhYmxlW2ldO1xuXHRcdFx0aWYgKGkgKyAxIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGJmZikgY2hhciArPSBpdGVyYWJsZVsrK2ldO1xuXHRcdFx0fVxuXHRcdFx0Y2FsbC5jYWxsKGNiLCB0aGlzQXJnLCBjaGFyLCBkb0JyZWFrKTtcblx0XHRcdGlmIChicm9rZW4pIGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblx0cmVzdWx0ID0gaXRlcmFibGUubmV4dCgpO1xuXG5cdHdoaWxlICghcmVzdWx0LmRvbmUpIHtcblx0XHRjYWxsLmNhbGwoY2IsIHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgZG9CcmVhayk7XG5cdFx0aWYgKGJyb2tlbikgcmV0dXJuO1xuXHRcdHJlc3VsdCA9IGl0ZXJhYmxlLm5leHQoKTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNldFByb3RvdHlwZU9mICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZicpXG4gICwgY29udGFpbnMgICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zJylcbiAgLCBkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIEl0ZXJhdG9yICAgICAgICAgID0gcmVxdWlyZSgnZXM2LWl0ZXJhdG9yJylcbiAgLCB0b1N0cmluZ1RhZ1N5bWJvbCA9IHJlcXVpcmUoJ2VzNi1zeW1ib2wnKS50b1N0cmluZ1RhZ1xuXG4gICwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBTZXRJdGVyYXRvcjtcblxuU2V0SXRlcmF0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXQsIGtpbmQpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFNldEl0ZXJhdG9yKSkgcmV0dXJuIG5ldyBTZXRJdGVyYXRvcihzZXQsIGtpbmQpO1xuXHRJdGVyYXRvci5jYWxsKHRoaXMsIHNldC5fX3NldERhdGFfXywgc2V0KTtcblx0aWYgKCFraW5kKSBraW5kID0gJ3ZhbHVlJztcblx0ZWxzZSBpZiAoY29udGFpbnMuY2FsbChraW5kLCAna2V5K3ZhbHVlJykpIGtpbmQgPSAna2V5K3ZhbHVlJztcblx0ZWxzZSBraW5kID0gJ3ZhbHVlJztcblx0ZGVmaW5lUHJvcGVydHkodGhpcywgJ19fa2luZF9fJywgZCgnJywga2luZCkpO1xufTtcbmlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoU2V0SXRlcmF0b3IsIEl0ZXJhdG9yKTtcblxuU2V0SXRlcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvci5wcm90b3R5cGUsIHtcblx0Y29uc3RydWN0b3I6IGQoU2V0SXRlcmF0b3IpLFxuXHRfcmVzb2x2ZTogZChmdW5jdGlvbiAoaSkge1xuXHRcdGlmICh0aGlzLl9fa2luZF9fID09PSAndmFsdWUnKSByZXR1cm4gdGhpcy5fX2xpc3RfX1tpXTtcblx0XHRyZXR1cm4gW3RoaXMuX19saXN0X19baV0sIHRoaXMuX19saXN0X19baV1dO1xuXHR9KSxcblx0dG9TdHJpbmc6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc7IH0pXG59KTtcbmRlZmluZVByb3BlcnR5KFNldEl0ZXJhdG9yLnByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIGQoJ2MnLCAnU2V0IEl0ZXJhdG9yJykpO1xuIiwiLy8gRXhwb3J0cyB0cnVlIGlmIGVudmlyb25tZW50IHByb3ZpZGVzIG5hdGl2ZSBgU2V0YCBpbXBsZW1lbnRhdGlvbixcbi8vIHdoYXRldmVyIHRoYXQgaXMuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoU2V0LnByb3RvdHlwZSkgPT09ICdbb2JqZWN0IFNldF0nKTtcbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGVhciAgICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvYXJyYXkvIy9jbGVhcicpXG4gICwgZUluZGV4T2YgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5LyMvZS1pbmRleC1vZicpXG4gICwgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9zZXQtcHJvdG90eXBlLW9mJylcbiAgLCBjYWxsYWJsZSAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcbiAgLCBkICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2QnKVxuICAsIGVlICAgICAgICAgICAgID0gcmVxdWlyZSgnZXZlbnQtZW1pdHRlcicpXG4gICwgU3ltYm9sICAgICAgICAgPSByZXF1aXJlKCdlczYtc3ltYm9sJylcbiAgLCBpdGVyYXRvciAgICAgICA9IHJlcXVpcmUoJ2VzNi1pdGVyYXRvci92YWxpZC1pdGVyYWJsZScpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCdlczYtaXRlcmF0b3IvZm9yLW9mJylcbiAgLCBJdGVyYXRvciAgICAgICA9IHJlcXVpcmUoJy4vbGliL2l0ZXJhdG9yJylcbiAgLCBpc05hdGl2ZSAgICAgICA9IHJlcXVpcmUoJy4vaXMtbmF0aXZlLWltcGxlbWVudGVkJylcblxuICAsIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbFxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LCBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxuICAsIFNldFBvbHksIGdldFZhbHVlcywgTmF0aXZlU2V0O1xuXG5pZiAoaXNOYXRpdmUpIE5hdGl2ZVNldCA9IFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRQb2x5ID0gZnVuY3Rpb24gU2V0KC8qaXRlcmFibGUqLykge1xuXHR2YXIgaXRlcmFibGUgPSBhcmd1bWVudHNbMF0sIHNlbGY7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZXRQb2x5KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uc3RydWN0b3IgcmVxdWlyZXMgXFwnbmV3XFwnJyk7XG5cdGlmIChpc05hdGl2ZSAmJiBzZXRQcm90b3R5cGVPZikgc2VsZiA9IHNldFByb3RvdHlwZU9mKG5ldyBOYXRpdmVTZXQoKSwgZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuXHRlbHNlIHNlbGYgPSB0aGlzO1xuXHRpZiAoaXRlcmFibGUgIT0gbnVsbCkgaXRlcmF0b3IoaXRlcmFibGUpO1xuXHRkZWZpbmVQcm9wZXJ0eShzZWxmLCAnX19zZXREYXRhX18nLCBkKCdjJywgW10pKTtcblx0aWYgKCFpdGVyYWJsZSkgcmV0dXJuIHNlbGY7XG5cdGZvck9mKGl0ZXJhYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRpZiAoZUluZGV4T2YuY2FsbCh0aGlzLCB2YWx1ZSkgIT09IC0xKSByZXR1cm47XG5cdFx0dGhpcy5wdXNoKHZhbHVlKTtcblx0fSwgc2VsZi5fX3NldERhdGFfXyk7XG5cdHJldHVybiBzZWxmO1xufTtcblxuaWYgKGlzTmF0aXZlKSB7XG5cdGlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoU2V0UG9seSwgTmF0aXZlU2V0KTtcblx0U2V0UG9seS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE5hdGl2ZVNldC5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IGQoU2V0UG9seSkgfSk7XG59XG5cbmVlKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNldFBvbHkucHJvdG90eXBlLCB7XG5cdGFkZDogZChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRpZiAodGhpcy5oYXModmFsdWUpKSByZXR1cm4gdGhpcztcblx0XHR0aGlzLmVtaXQoJ19hZGQnLCB0aGlzLl9fc2V0RGF0YV9fLnB1c2godmFsdWUpIC0gMSwgdmFsdWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9KSxcblx0Y2xlYXI6IGQoZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdGhpcy5fX3NldERhdGFfXy5sZW5ndGgpIHJldHVybjtcblx0XHRjbGVhci5jYWxsKHRoaXMuX19zZXREYXRhX18pO1xuXHRcdHRoaXMuZW1pdCgnX2NsZWFyJyk7XG5cdH0pLFxuXHRkZWxldGU6IGQoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dmFyIGluZGV4ID0gZUluZGV4T2YuY2FsbCh0aGlzLl9fc2V0RGF0YV9fLCB2YWx1ZSk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXHRcdHRoaXMuX19zZXREYXRhX18uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLmVtaXQoJ19kZWxldGUnLCBpbmRleCwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSxcblx0ZW50cmllczogZChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3IodGhpcywgJ2tleSt2YWx1ZScpOyB9KSxcblx0Zm9yRWFjaDogZChmdW5jdGlvbiAoY2IvKiwgdGhpc0FyZyovKSB7XG5cdFx0dmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV0sIGl0ZXJhdG9yLCByZXN1bHQsIHZhbHVlO1xuXHRcdGNhbGxhYmxlKGNiKTtcblx0XHRpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG5cdFx0cmVzdWx0ID0gaXRlcmF0b3IuX25leHQoKTtcblx0XHR3aGlsZSAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhbHVlID0gaXRlcmF0b3IuX3Jlc29sdmUocmVzdWx0KTtcblx0XHRcdGNhbGwuY2FsbChjYiwgdGhpc0FyZywgdmFsdWUsIHZhbHVlLCB0aGlzKTtcblx0XHRcdHJlc3VsdCA9IGl0ZXJhdG9yLl9uZXh0KCk7XG5cdFx0fVxuXHR9KSxcblx0aGFzOiBkKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiAoZUluZGV4T2YuY2FsbCh0aGlzLl9fc2V0RGF0YV9fLCB2YWx1ZSkgIT09IC0xKTtcblx0fSksXG5cdGtleXM6IGQoZ2V0VmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52YWx1ZXMoKTsgfSksXG5cdHNpemU6IGQuZ3MoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fX3NldERhdGFfXy5sZW5ndGg7IH0pLFxuXHR2YWx1ZXM6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yKHRoaXMpOyB9KSxcblx0dG9TdHJpbmc6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1tvYmplY3QgU2V0XSc7IH0pXG59KSk7XG5kZWZpbmVQcm9wZXJ0eShTZXRQb2x5LnByb3RvdHlwZSwgU3ltYm9sLml0ZXJhdG9yLCBkKGdldFZhbHVlcykpO1xuZGVmaW5lUHJvcGVydHkoU2V0UG9seS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywgZCgnYycsICdTZXQnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKCkgPyBTZXQgOiByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG4iLCJcblxuZnVuY3Rpb24gcXVhZHNUb1RyaXMoY2VsbHMpIHtcblxuICAgIHZhciBuZXdDZWxscyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaUNlbGwgPSAwOyBpQ2VsbCA8IGNlbGxzLmxlbmd0aDsgKytpQ2VsbCkge1xuXG4gICAgICAgIHZhciBjZWxsID0gY2VsbHNbaUNlbGxdO1xuXG4gICAgICAgIG5ld0NlbGxzLnB1c2goW2NlbGxbMF0sIGNlbGxbMV0sIGNlbGxbMl1dKTtcbiAgICAgICAgbmV3Q2VsbHMucHVzaChbY2VsbFswXSwgY2VsbFsyXSwgY2VsbFszXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdDZWxscztcbn1cblxubW9kdWxlLmV4cG9ydHM9IHF1YWRzVG9UcmlzO1xuXG5cbiIsInZhciB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpO1xudmFyIFNldCA9IHJlcXVpcmUoJ2VzNi1zZXQnKTtcbnZhciBxdWFkc1RvVHJpcyA9IHJlcXVpcmUoJ2dsLXF1YWRzLXRvLXRyaXMnKTtcblxuXG4vKlxuIEV4YW1wbGU6XG4gR2l2ZW4gWzAsNF0gcmV0dXJuIFswLDRdXG4gR2l2ZW0gWzIsMV0gcmV0dXJuIFsxLDJcbiAqL1xuZnVuY3Rpb24gX3NvcnQoZWRnZSkge1xuICAgIHJldHVybiBlZGdlWzBdIDwgZWRnZVsxXSA/IGVkZ2UgOiBbZWRnZVsxXSwgZWRnZVswXV07XG59XG5cbi8vIG91dCA9IGEgKyBiKnNcbmZ1bmN0aW9uIF9tYWQob3V0LCBhLCBiLCBzKSB7XG4gICAgb3V0WzBdID0gYVswXSArIHMgKiBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSArIHMgKiBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSArIHMgKiBiWzJdXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLypcbkltcGxlbWVudCBDYXRtdWxsLUNsYXJrIHN1YnZpc2lvbiwgYXMgaXQgaXMgZGVzY3JpYmVkIG9uIFdpa2lwZWRpYVxuICovXG5mdW5jdGlvbiBfY2F0bXVsbENsYXJrKHBvc2l0aW9ucywgY2VsbHMpIHtcblxuICAgIC8vIG9yaWdpbmFsIHBvaW50cywgaW5kZXhlZCBieSB0aGVpciBpbmRpY2VzLlxuICAgIC8vIEZvciBldmVyeSBwb2ludCwgd2Ugc3RvcmUgYWRqYWNlbnQgZmFjZXMgYW5kIGFkamFjZW50IGVkZ2VzLlxuICAgIG9yaWdpbmFsUG9pbnRzID0gW107XG5cbiAgICAvLyBvcmlnaW5hbCBmYWNlcywgaW4gdGhlaXIgb3JpZ2luYWwgb3JkZXIuXG4gICAgLy8gRm9yIGV2ZXJ5IGZhY2UsIHdlIHN0b3JlIHRoZSBlZGdlcywgdGhlIHBvaW50cywgYW5kIHRoZSBmYWNlIHBvaW50LlxuICAgIGZhY2VzID0gW107XG5cbiAgICAvLyBvcmlnaW5hbCBlZGdlcy4gSW5kZXhlZCBieSB0aGUgc29ydGVkIGluZGljZXMgb2YgdGhlaXIgdmVydGljZXNcbiAgICAvLyBTbyB0aGUgZWRnZSB3aG9zZSBlZGdlIHZlcnRpY2VzIGhhcyBpbmRleCBgNmAgYW5kIGAyYCwgd2lsbCBiZSBcbiAgICAvLyBpbmRleGVkIGJ5IHRoZSBhcnJheSBbMiw2XVxuICAgIGVkZ2VzID0gW107XG5cblxuICAgIC8qXG4gICAgRmlyc3Qgd2UgY29sbGVjdCBhbGwgdGhlIGluZm9ybWF0aW9uIHRoYXQgd2UgbmVlZCB0byBydW4gdGhlIGFsZ29yaXRobS5cbiAgICBFYWNoIHBvaW50IG11c3Qga25vdyBpdHMgYWRqYWNlbnQgZWRnZXMgYW5kIGZhY2VzLlxuICAgIEVhY2ggZmFjZSBtdXN0IGtub3cgaXRzIGVkZ2VzIGFuZCBwb2ludHMuXG4gICAgRWFjaCBlZGdlIG11c3Qga25vdyBpdHMgYWRqYWNlbnQgZmFjZXMgYW5kIHBvaW50cy5cblxuICAgIFdlIGNvbGxlY3QgYWxsIHRoaXMgaW5mb3JtYXRpb24gaW4gdGhpcyBsb29wLlxuICAgICAqL1xuICAgIGZvciAodmFyIGlDZWxsID0gMDsgaUNlbGwgPCBjZWxscy5sZW5ndGg7ICsraUNlbGwpIHtcblxuICAgICAgICB2YXIgY2VsbFBvc2l0aW9ucyA9IGNlbGxzW2lDZWxsXTtcbiAgICAgICAgdmFyIGZhY2VQb2ludHMgPSBbXTtcblxuICAgICAgICAvLyBpbml0aWFsaXplOlxuICAgICAgICBmYWNlc1tpQ2VsbF0gPSB7fTtcblxuXG4gICAgICAgIC8vIGdvIHRocm91Z2ggYWxsIHRoZSBwb2ludHMgb2YgdGhlIGZhY2UuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2VsbFBvc2l0aW9ucy5sZW5ndGg7ICsraikge1xuXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25JbmRleCA9IGNlbGxQb3NpdGlvbnNbal07XG5cbiAgICAgICAgICAgIHZhciBwb2ludE9iamVjdDtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgT24gdGhlIGZseSwgQ3JlYXRlIGFuIG9iamVjdCBmb3IgZXZlcnkgcG9pbnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxQb2ludHNbcG9zaXRpb25JbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBvYmplY3Qgb24gdGhlIGZseS5cbiAgICAgICAgICAgICAgICB2YXIgdiA9IHBvc2l0aW9uc1twb3NpdGlvbkluZGV4XTtcblxuICAgICAgICAgICAgICAgIHZhciB2ZWMgPSB2ZWMzLmZyb21WYWx1ZXModlswXSwgdlsxXSwgdlsyXSk7XG4gICAgICAgICAgICAgICAgcG9pbnRPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB2ZWMsXG4gICAgICAgICAgICAgICAgICAgIGZhY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZWRnZXM6IG5ldyBTZXQoKSxcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBvcmlnaW5hbFBvaW50c1twb3NpdGlvbkluZGV4XSA9IHBvaW50T2JqZWN0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb2ludE9iamVjdCA9IG9yaWdpbmFsUG9pbnRzW3Bvc2l0aW9uSW5kZXhdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBldmVyeSBwb2ludCBzaG91bGQgaGF2ZSBhIHJlZmVyZW5jZSB0byBpdHMgZmFjZS5cbiAgICAgICAgICAgIHBvaW50T2JqZWN0LmZhY2VzLnB1c2goZmFjZXNbaUNlbGxdKTtcblxuICAgICAgICAgICAgZmFjZVBvaW50cy5wdXNoKHBvaW50T2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV2ZXJ5IGZhY2Ugc2hvdWxkIG5vdyBpdHMgcG9pbnRzLlxuICAgICAgICBmYWNlc1tpQ2VsbF0ucG9pbnRzID0gZmFjZVBvaW50cztcblxuICAgICAgICB2YXIgYXZnID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApO1xuXG4gICAgICAgIC8vIG5vdyBjb21wdXRlIHRoZSBmYWNlcG9pbnQoc2VlIFdpa2lwZWRpYSkuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmFjZXNbaUNlbGxdLnBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHYgPSBmYWNlc1tpQ2VsbF0ucG9pbnRzW2ldLnBvaW50O1xuICAgICAgICAgICAgdmVjMy5hZGQoYXZnLCB2LCBhdmcpO1xuICAgICAgICB9XG4gICAgICAgIHZlYzMuc2NhbGUoYXZnLCBhdmcsIDEuMCAvIGZhY2VzW2lDZWxsXS5wb2ludHMubGVuZ3RoKTtcbiAgICAgICAgZmFjZXNbaUNlbGxdLmZhY2VQb2ludCA9IGF2ZztcblxuICAgICAgICB2YXIgZmFjZUVkZ2VzID0gW107XG5cbiAgICAgICAgLy8gZ28gdGhyb3VnaCBhbGwgdGhlIGVkZ2VzIG9mIHRoZSBmYWNlLlxuICAgICAgICBmb3IgKHZhciBpRWRnZSA9IDA7IGlFZGdlIDwgY2VsbFBvc2l0aW9ucy5sZW5ndGg7ICsraUVkZ2UpIHtcblxuICAgICAgICAgICAgdmFyIGVkZ2U7XG5cbiAgICAgICAgICAgIGlmIChjZWxsUG9zaXRpb25zLmxlbmd0aCA9PSAzKSB7IC8vIGZvciB0cmlhbmdsZXNcbiAgICAgICAgICAgICAgICBpZiAoaUVkZ2UgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMF0sIGNlbGxQb3NpdGlvbnNbMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaUVkZ2UgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMV0sIGNlbGxQb3NpdGlvbnNbMl1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaUVkZ2UgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMl0sIGNlbGxQb3NpdGlvbnNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGZvciBxdWFkcy5cbiAgICAgICAgICAgICAgICBpZiAoaUVkZ2UgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMF0sIGNlbGxQb3NpdGlvbnNbMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaUVkZ2UgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMV0sIGNlbGxQb3NpdGlvbnNbMl1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaUVkZ2UgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbMl0sIGNlbGxQb3NpdGlvbnNbM11dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaUVkZ2UgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBlZGdlID0gW2NlbGxQb3NpdGlvbnNbM10sIGNlbGxQb3NpdGlvbnNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZXZlcnkgZWRnZSBpcyByZXByZXNlbnRlZCBieSB0aGUgc29ydGVkIGluZGljZXMgb2YgaXRzIHZlcnRpY2VzLlxuICAgICAgICAgICAgLy8gKHRoZSBzb3J0aW5nIGVuc3VyZXMgdGhhdCBbMSwyXSBhbmQgWzIsMV0gYXJlIGNvbnNpZGVyZWQgdGhlIHNhbWUgZWRnZSwgd2hpY2ggdGhleSBhcmUgKVxuICAgICAgICAgICAgZWRnZSA9IF9zb3J0KGVkZ2UpO1xuXG4gICAgICAgICAgICB2YXIgZWRnZU9iamVjdDtcbiAgICAgICAgICAgIC8vIG9uIHRoZSBmbHksIGNyZWF0ZSBhbiBlZGdlIG9iamVjdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWRnZXNbZWRnZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBlZGdlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IFtvcmlnaW5hbFBvaW50c1tlZGdlWzBdXSwgb3JpZ2luYWxQb2ludHNbZWRnZVsxXV1dLFxuICAgICAgICAgICAgICAgICAgICBmYWNlczogW11cblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBlZGdlc1tlZGdlXSA9IGVkZ2VPYmplY3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkZ2VPYmplY3QgPSBlZGdlc1tlZGdlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZXZlcnkgZWRnZSBzaG91bGQga25vdyBpdHMgYWRqYWNlbnQgZmFjZXMuXG4gICAgICAgICAgICBlZGdlT2JqZWN0LmZhY2VzLnB1c2goZmFjZXNbaUNlbGxdKTtcblxuICAgICAgICAgICAgLy8gZXZlcnkgcG9pbnQgc2hvdWxkIGtub3cgaXRzIGFkamFjZW50IGVkZ2VzLlxuICAgICAgICAgICAgZWRnZU9iamVjdC5wb2ludHNbMF0uZWRnZXMuYWRkKGVkZ2VPYmplY3QpO1xuICAgICAgICAgICAgZWRnZU9iamVjdC5wb2ludHNbMV0uZWRnZXMuYWRkKGVkZ2VPYmplY3QpO1xuXG5cbiAgICAgICAgICAgIGZhY2VFZGdlcy5wdXNoKGVkZ2VPYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlcnkgZmFjZSBzaG91bGQga25vdyBpdHMgZWRnZXMuXG4gICAgICAgIGZhY2VzW2lDZWxsXS5lZGdlcyA9IGZhY2VFZGdlcztcbiAgICB9XG5cblxuICAgIC8vIENvbXB1dGUgdGhlIGVkZ2UgcG9pbnRzIGFuZCB0aGUgbWlkcG9pbnRzIG9mIGV2ZXJ5IGVkZ2UuXG4gICAgZm9yIChrZXkgaW4gZWRnZXMpIHtcblxuICAgICAgICB2YXIgZWRnZSA9IGVkZ2VzW2tleV07XG5cbiAgICAgICAgdmFyIGF2ZyA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyBhZGQgZmFjZSBwb2ludHMgb2YgZWRnZS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlLmZhY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgZmFjZVBvaW50ID0gZWRnZS5mYWNlc1tpXS5mYWNlUG9pbnQ7XG4gICAgICAgICAgICB2ZWMzLmFkZChhdmcsIGZhY2VQb2ludCwgYXZnKTtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdW0gdG9nZXRoZXIgdGhlIHR3byBlbmRwb2ludHMuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBlbmRQb2ludCA9IGVkZ2UucG9pbnRzW2ldLnBvaW50O1xuICAgICAgICAgICAgdmVjMy5hZGQoYXZnLCBlbmRQb2ludCwgYXZnKTtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5hbGx5LCBjb21wdXRlIGVkZ2UgcG9pbnQuXG4gICAgICAgIHZlYzMuc2NhbGUoYXZnLCBhdmcsIDEuMCAvIGNvdW50KTtcbiAgICAgICAgZWRnZS5lZGdlUG9pbnQgPSBhdmc7XG5cbiAgICAgICAgLypcbiAgICAgICAgIE5leHQgd2UgY29tcHV0ZSB0aGUgbWlkcG9pbnQuXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIHZhciBhdmcyID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5wb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBlbmRQb2ludCA9IGVkZ2UucG9pbnRzW2ldLnBvaW50O1xuICAgICAgICAgICAgdmVjMy5hZGQoYXZnMiwgZW5kUG9pbnQsIGF2ZzIpO1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgfVxuICAgICAgICB2ZWMzLnNjYWxlKGF2ZzIsIGF2ZzIsIDEuMCAvIGNvdW50KTtcblxuXG4gICAgICAgIGVkZ2UubWlkUG9pbnQgPSBhdmcyO1xuICAgIH1cblxuXG4gICAgLypcbiAgICAgRWFjaCBvcmlnaW5hbCBwb2ludCBpcyBtb3ZlZCB0byB0aGUgcG9zaXRpb25cbiAgICAgKEYgKyAyUiArIChuLTMpUCkgLyBuLiBTZWUgdGhlIHdpa2lwZWRpYSBhcnRpY2xlIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICB2YXIgcG9pbnQgPSBvcmlnaW5hbFBvaW50c1tpXTtcbiAgICAgICAgdmFyIG4gPSBwb2ludC5mYWNlcy5sZW5ndGg7XG4gICAgICAgIHZhciBuZXdQb2ludCA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50LmZhY2VzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIgZmFjZVBvaW50ID0gcG9pbnQuZmFjZXNbal0uZmFjZVBvaW50O1xuICAgICAgICAgICAgdmVjMy5hZGQobmV3UG9pbnQsIG5ld1BvaW50LCBmYWNlUG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgZWRnZSBvZiBwb2ludC5lZGdlcykge1xuICAgICAgICAgICAgX21hZChuZXdQb2ludCwgbmV3UG9pbnQsIGVkZ2UubWlkUG9pbnQsIDIpO1xuICAgICAgICB9XG4gICAgICAgIHZlYzMuc2NhbGUobmV3UG9pbnQsIG5ld1BvaW50LCAxLjAgLyBuKTtcblxuICAgICAgICBfbWFkKG5ld1BvaW50LCBuZXdQb2ludCwgcG9pbnQucG9pbnQsIG4gLSAzKTtcblxuICAgICAgICB2ZWMzLnNjYWxlKG5ld1BvaW50LCBuZXdQb2ludCwgMS4wIC8gbik7XG5cbiAgICAgICAgcG9pbnQubmV3UG9pbnQgPSBuZXdQb2ludFxuXG4gICAgfVxuXG4gICAgbmV3UG9zaXRpb25zID0gW107XG4gICAgbmV3Q2VsbHMgPSBbXTtcblxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAvKlxuICAgICBXZSBjcmVhdGUgaW5kaWNlcyBvbiB0aGUgZmx5IGJ5IHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgICBUaGUgaW5kZXggb2YgZXZlcnkgdmVydGV4IGlzIHN0b3JlZCBpbiB0aGUgdmVydGV4LCBpbiBhIHByb3BlcnR5IG5hbWVkIGBpbmRleGAuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgocCkge1xuICAgICAgICBpZiAoIShcImluZGV4XCIgaW4gcCkpIHtcbiAgICAgICAgICAgIHAuaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgbmV3UG9zaXRpb25zLnB1c2goW3BbMF0sIHBbMV0sIHBbMl1dKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwLmluZGV4O1xuXG4gICAgfVxuXG4gICAgLypcbiAgICAgV2UgZ28gdGhyb3VnaCBhbGwgZmFjZXMuXG4gICAgIFRyaWFuZ2xlIGZhY2Ugd2Ugc3ViZGl2aWRlIGludG8gMyBuZXcgcXVhZHMuXG4gICAgIFF1YWQgZmFjZXMgd2Ugc3ViZGl2aWRlIGludG8gNCBuZXcgcXVhZHMuXG5cbiAgICAgKi9cbiAgICBmb3IgKHZhciBpRmFjZSA9IDA7IGlGYWNlIDwgZmFjZXMubGVuZ3RoOyArK2lGYWNlKSB7XG5cbiAgICAgICAgdmFyIGZhY2UgPSBmYWNlc1tpRmFjZV07XG5cbiAgICAgICAgZm9yICh2YXIgaVBvaW50ID0gMDsgaVBvaW50IDwgZmFjZS5wb2ludHMubGVuZ3RoOyArK2lQb2ludCkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gZmFjZS5wb2ludHNbaVBvaW50XTtcblxuICAgICAgICAgICAgdmFyIGEgPSBwb2ludC5uZXdQb2ludDtcbiAgICAgICAgICAgIHZhciBiID0gZmFjZS5lZGdlc1soaVBvaW50ICsgMCkgJSBmYWNlLmVkZ2VzLmxlbmd0aF0uZWRnZVBvaW50O1xuICAgICAgICAgICAgdmFyIGMgPSBmYWNlLmZhY2VQb2ludDtcbiAgICAgICAgICAgIHZhciBkID0gZmFjZS5lZGdlc1soaVBvaW50ICsgZmFjZS5lZGdlcy5sZW5ndGggLSAxKSAlIGZhY2UuZWRnZXMubGVuZ3RoXS5lZGdlUG9pbnQ7XG5cbiAgICAgICAgICAgIHZhciBpYSA9IGdldEluZGV4KGEpO1xuICAgICAgICAgICAgdmFyIGliID0gZ2V0SW5kZXgoYik7XG4gICAgICAgICAgICB2YXIgaWMgPSBnZXRJbmRleChjKTtcbiAgICAgICAgICAgIHZhciBpZCA9IGdldEluZGV4KGQpO1xuXG4gICAgICAgICAgICBuZXdDZWxscy5wdXNoKFtpZCwgaWEsIGliLCBpY10pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge3Bvc2l0aW9uczogbmV3UG9zaXRpb25zLCBjZWxsczogbmV3Q2VsbHN9O1xuXG59XG5cbmZ1bmN0aW9uIGNhdG11bGxDbGFyayhwb3NpdGlvbnMsIGNlbGxzLCBudW1TdWJkaXZpc2lvbnMsIGNvbnZlcnRUb1RyaWFuZ2xlcykge1xuXG4gICAgaWYgKG51bVN1YmRpdmlzaW9ucyA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYG51bVN1YmRpdmlzaW9uc2AgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlciFcIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb252ZXJ0VG9UcmlhbmdsZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29udmVydFRvVHJpYW5nbGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge3Bvc2l0aW9uczogcG9zaXRpb25zLCBjZWxsczogY2VsbHN9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtU3ViZGl2aXNpb25zOyArK2kpIHtcblxuICAgICAgICBvYmogPSBfY2F0bXVsbENsYXJrKG9iai5wb3NpdGlvbnMsIG9iai5jZWxscyk7XG5cbiAgICB9XG5cbiAgICBpZiAoY29udmVydFRvVHJpYW5nbGVzKSB7XG4gICAgICAgIG9iai5jZWxscyA9IHF1YWRzVG9UcmlzKG9iai5jZWxscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhdG11bGxDbGFyaztcblxuXG4iLCIvKipcbiAqIGV4cG9ydHMgdm94ZWwtdG8tbWVzaFxuICovXG5cbmltcG9ydCBjYXRtdWxsIGZyb20gJ2dsLWNhdG11bGwtY2xhcmsnXG5pbXBvcnQgcXVhZHNUb1RyaXMgZnJvbSAnZ2wtcXVhZHMtdG8tdHJpcydcblxuY29uc3Qgb3B0cyA9IHtcbiAgc21vb3RoaW5nOiAwLFxuICBjb252ZXJ0VG9UcmlhbmdsZXM6IHRydWUsXG4gIGZsYXR0ZW46IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdm94ZWxUb01lc2hcblxuZnVuY3Rpb24gdm94ZWxUb01lc2godm94ZWxEYXRhLCBvcHRpb25zKSB7XG5cbiAgT2JqZWN0LmFzc2lnbihvcHRzLCBvcHRpb25zKVxuXG4gIGxldCB2b3hPYmogPSBwYXJzZURhdGEodm94ZWxEYXRhKVxuXG4gIHZveE9iaiA9IHJlbW92ZUR1cGxpY2F0ZUZhY2VzKHZveE9iailcbiAgdm94T2JqID0gcmVtb3ZlVW51c2VkVmVydGljZXModm94T2JqKVxuXG4gIGNvbnN0IHMgPSBvcHRzLnNtb290aGluZ1xuICBpZiAocGFyc2VJbnQocykgPT09IHMgJiYgcyA+IDApIHtcbiAgICB2b3hPYmogPSBjYXRtdWxsKHZveE9iai52ZXJ0aWNlcywgdm94T2JqLmluZGljZXMsIG9wdHMuc21vb3RoaW5nLCBvcHRzLmNvbnZlcnRUb1RyaWFuZ2xlcylcbiAgfSBlbHNlIGlmIChvcHRzLmNvbnZlcnRUb1RyaWFuZ2xlcykge1xuICAgIHZveE9iai5pbmRpY2VzID0gcXVhZHNUb1RyaXModm94T2JqLmluZGljZXMpXG4gIH1cblxuICBpZiAob3B0cy5mbGF0dGVuKSB7XG4gICAgY29uc3QgZmxhdHRlbiA9IChhLGIpID0+IGEuY29uY2F0KGIpXG4gICAgdm94T2JqLmluZGljZXMgPSB2b3hPYmouaW5kaWNlcy5yZWR1Y2UoZmxhdHRlbiwgW10pXG4gICAgdm94T2JqLnZlcnRpY2VzID0gdm94T2JqLnZlcnRpY2VzLnJlZHVjZShmbGF0dGVuLCBbXSlcbiAgfVxuICByZXR1cm4gdm94T2JqXG4gIC8vbmV3TWVzaC5jb2xvcnMgPSBnZXRDb2xvcnMobmV3TWVzaClcbn1cblxuZnVuY3Rpb24gbWFrZUNvcHlDYXQoaW5kZXgpIHtcbiAgbGV0IHRhYmxlID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ha2VDYXQgPSBpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGksXG4gICAgICBnZXQgdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0YWJsZVxuICAgICAgfSxcbiAgICAgIHNldCB0YWJsZSh0KSB7XG4gICAgICAgIHRhYmxlID0gdFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZShjb3B5Q2F0KSB7XG4gICAgICAgIHRhYmxlID0gY29weUNhdC50YWJsZSA9IG5ldyBTZXQoWy4uLnRhYmxlLCAuLi5jb3B5Q2F0LnRhYmxlXSlcbiAgICAgICAgdGFibGUuZm9yRWFjaChjYXQgPT4ge1xuICAgICAgICAgIGNhdC52YWx1ZSA9IGNvcHlDYXQudmFsdWVcbiAgICAgICAgICBjYXQudGFibGUgPSB0YWJsZVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBhbm90aGVyQ2F0ID0gbWFrZUNhdCh0aGlzLnZhbHVlKVxuICAgICAgICB0YWJsZS5hZGQoYW5vdGhlckNhdClcbiAgICAgICAgcmV0dXJuIGFub3RoZXJDYXRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3Q2F0ID0gbWFrZUNhdChpbmRleClcbiAgdGFibGUuYWRkKG5ld0NhdClcbiAgcmV0dXJuIG5ld0NhdFxufVxuXG5mdW5jdGlvbiBuZXdCb3goeHl6LCBjZWxsT2Zmc2V0KSB7XG4gIGNvbnN0IHN1bVZlYyA9ICh2MSwgdjIpID0+IHYxLm1hcCgodmFsLCBpbmRleCkgPT4gdmFsICsgdjJbaW5kZXhdKVxuICBjb25zdCBwT2Zmc2V0ID0gc3VtVmVjLmJpbmQobnVsbCwgeHl6KVxuXG4gIGNvbnN0IFthLCBiLCBjLCBkLCBlLCBmLCBnLCBoXSA9IFtcbiAgICBbMCwgMCwgMF0sXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAxLCAwXSxcbiAgICBbMCwgMSwgMV0sXG4gICAgWzEsIDAsIDBdLFxuICAgIFsxLCAwLCAxXSxcbiAgICBbMSwgMSwgMF0sXG4gICAgWzEsIDEsIDFdXG4gIF0ubWFwKHBPZmZzZXQpXG5cbiAgY29uc3QgdmVydGljZXMgPSBbYSwgYiwgYywgZCwgZSwgZiwgZywgaF1cblxuICBjb25zdCBbYzAsIGMxLCBjMiwgYzMsIGM0LCBjNSwgYzYsIGM3XSA9IFtcbiAgICAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3XG4gIF0ubWFwKGMgPT4gbWFrZUNvcHlDYXQoYyArIGNlbGxPZmZzZXQpKVxuXG4gIGNvbnN0IGNvcHkgPSBjYXQgPT4gY2F0LmNsb25lKClcblxuICBjb25zdCBpbmRpY2VzID0gW1xuICAgIFtjMiwgYzMsIGMxLCBjMF0sIC8vb3JpZ2luYWxzXG4gICAgW2M0LCBjNSwgYzcsIGM2XSwgLy9vcmlnaW5hbHNcblxuICAgIFtjMywgYzcsIGM1LCBjMV0ubWFwKGNvcHkpLCBbYzAsIGM0LCBjNiwgYzJdLm1hcChjb3B5KSxcblxuICAgIFtjMSwgYzUsIGM0LCBjMF0ubWFwKGNvcHkpLCBbYzIsIGM2LCBjNywgYzNdLm1hcChjb3B5KVxuICBdXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlcyxcbiAgICBpbmRpY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRhKHZveGVsRGF0YSkge1xuXG4gIGxldCB2ZXJ0aWNlcyA9IFtdLFxuICAgIGluZGljZXMgPSBbXVxuICBsZXQgY2VsbE9mZnNldCA9IDBcbiAgY29uc3QgVkVSVFNfUEVSX0NVQkUgPSA4XG5cbiAgdm94ZWxEYXRhLmZvckVhY2godm94ZWwgPT4ge1xuICAgIGNvbnN0IGN1YmUgPSBuZXdCb3godm94ZWwuc2xpY2UoMCwgMyksIGNlbGxPZmZzZXQpXG4gICAgY2VsbE9mZnNldCArPSBWRVJUU19QRVJfQ1VCRVxuXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQoY3ViZS52ZXJ0aWNlcylcbiAgICBpbmRpY2VzID0gaW5kaWNlcy5jb25jYXQoY3ViZS5pbmRpY2VzKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgdmVydGljZXMsXG4gICAgaW5kaWNlc1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZUZhY2VzKHtcbiAgdmVydGljZXMsXG4gIGluZGljZXNcbn0pIHtcblxuICBjb25zdCBpbmRpY2VNYXAgPSBuZXcgTWFwKClcbiAgY29uc3QgaW5kZXhXaGFja0xpc3QgPSBuZXcgU2V0KClcbiAgY29uc3Qga2V5aWZ5ID0gYXJyID0+IGFyci5tYXAodiA9PiB2ZXJ0aWNlc1t2XSkuc29ydCgpLmpvaW4oJy0nKVxuXG4gIGluZGljZXMgPSBpbmRpY2VzXG4gICAgLm1hcCgocmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGtleWlmeShyZWN0Lm1hcChyaSA9PiByaS52YWx1ZSkpXG4gICAgICBpZiAoaW5kaWNlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIGNvbnN0IGZhY2UgPSBpbmRpY2VNYXAuZ2V0KGtleSlcbiAgICAgICAgY29uc3QgZmFjZUluZGV4ID0gZmFjZS5pbmRleFxuICAgICAgICBpbmRleFdoYWNrTGlzdC5hZGQoaW5kZXgpLmFkZChmYWNlSW5kZXgpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChyaSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJldmVyc2VJbmRleCA9IDMgLSBpXG4gICAgICAgICAgcmkudXBkYXRlKGZhY2UucmVjdFtyZXZlcnNlSW5kZXhdKVxuICAgICAgICB9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VNYXAuc2V0KGtleSwge1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHJlY3RcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWN0XG4gICAgfSlcbiAgICAuZmlsdGVyKChfLCBpKSA9PiAhaW5kZXhXaGFja0xpc3QuaGFzKGkpKVxuICAgIC5tYXAocmVjdCA9PiByZWN0Lm1hcChyaSA9PiByaS52YWx1ZSkpXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlcyxcbiAgICBpbmRpY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVW51c2VkVmVydGljZXMoe1xuICB2ZXJ0aWNlcyxcbiAgaW5kaWNlc1xufSkge1xuICBjb25zdCBuZXdWZXJ0aWNlcyA9IFtdXG4gIGNvbnN0IGluZGV4TWFwID0gbmV3IE1hcCgpXG4gIGxldCBpbmRleENvdW50ZXIgPSAwXG4gIGluZGljZXMgPSBpbmRpY2VzLm1hcChpbmRleEFycmF5ID0+IGluZGV4QXJyYXkubWFwKGluZGV4ID0+IHtcbiAgICBpZiAoIWluZGV4TWFwLmhhcyhpbmRleCkpIHtcbiAgICAgIGluZGV4TWFwLnNldChpbmRleCwgaW5kZXhDb3VudGVyKyspXG4gICAgfVxuICAgIGNvbnN0IGkgPSBpbmRleE1hcC5nZXQoaW5kZXgpXG4gICAgbmV3VmVydGljZXNbaV0gPSB2ZXJ0aWNlc1tpbmRleF1cbiAgICByZXR1cm4gaVxuICB9KSlcblxuICByZXR1cm4ge1xuICAgICd2ZXJ0aWNlcyc6IG5ld1ZlcnRpY2VzLFxuICAgIGluZGljZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb2xvcnMoe1xuICB2ZXJ0aWNlcyxcbiAgaW5kaWNlc1xufSkge1xuICBjb25zdCBjb2xvciA9IFsyNTUsIDI1NSwgMjU1LCAxXVxuICByZXR1cm4gQXJyYXkoaW5kaWNlcy5sZW5ndGgpLmZpbGwoY29sb3IpXG59XG5cbiIsImltcG9ydCB2b3hlbFRvTWVzaCBmcm9tICcuLi9zcmMvdm94ZWxUb01lc2gnXG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKVxudmFyIGVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZShjYW52YXMsIHRydWUpXG5cbnZhciBjcmVhdGVTY2VuZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpXG5cbiAgdmFyIGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcImRpcmVjdFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDEpLCBzY2VuZSlcblxuICB2YXIgY2FtZXJhID0gbmV3IEJBQllMT04uQXJjUm90YXRlQ2FtZXJhKFwiY2FtZXJhMVwiLCAwLCAwLCAwLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBzY2VuZSlcbiAgY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNSwgLTMwKSlcbiAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKVxuXG4gIC8vQ3JlYXRlIGEgY3VzdG9tIG1lc2hcbiAgdmFyIGN1c3RvbU1lc2ggPSBuZXcgQkFCWUxPTi5NZXNoKFwiY3VzdG9tXCIsIHNjZW5lKVxuXG4gIC8veCx5LHosY29sb3JcbiAgdmFyIHZveGVscyA9IFtcbiAgICBbMCwgMywgMiwgWzAsIDAsIDAsIDFdXSxcbiAgICBbMCwgMSwgMCwgWzI1NSwgMCwgMCwgMV1dLFxuICAgIFsxLCAxLCAyLCBbMCwgMjU1LCAwLCAxXV0sXG4gICAgWzIsIDAsIDIsIFswLCAwLCAyNTUsIDFdXSxcbiAgICBbMSwgMSwgMSwgWzI1NSwgMCwgMjU1LCAxXV0sXG4gICAgWzEsIDMsIDIsIFswLCAyNTUsIDAsIDFdXVxuICBdXG5cbiAgY29uc3QgbWVzaCA9IHZveGVsVG9NZXNoKHZveGVscywge3Ntb290aGluZzogMH0pXG4gIHZhciBwb3NpdGlvbnMgPSBtZXNoLnZlcnRpY2VzXG4gIHZhciBpbmRpY2VzID0gbWVzaC5pbmRpY2VzXG5cbiAgLy9FbXB0eSBhcnJheSB0byBjb250YWluIGNhbGN1bGF0ZWQgdmFsdWVzXG4gIHZhciBub3JtYWxzID0gW11cblxuICB2YXIgdmVydGV4RGF0YSA9IG5ldyBCQUJZTE9OLlZlcnRleERhdGEoKVxuICBCQUJZTE9OLlZlcnRleERhdGEuQ29tcHV0ZU5vcm1hbHMocG9zaXRpb25zLCBpbmRpY2VzLCBub3JtYWxzKVxuXG4gIC8vQXNzaWduIHBvc2l0aW9ucywgaW5kaWNlcyBhbmQgbm9ybWFscyB0byB2ZXJ0ZXhEYXRhXG4gIHZlcnRleERhdGEucG9zaXRpb25zID0gcG9zaXRpb25zXG4gIHZlcnRleERhdGEuaW5kaWNlcyA9IGluZGljZXNcbiAgdmVydGV4RGF0YS5ub3JtYWxzID0gbm9ybWFsc1xuICAvL3ZlcnRleERhdGEuY29sb3JzID0gY29sb3JzXG5cbiAgLy9BcHBseSB2ZXJ0ZXhEYXRhIHRvIGN1c3RvbSBtZXNoXG4gIHZlcnRleERhdGEuYXBwbHlUb01lc2goY3VzdG9tTWVzaClcblxuICB2YXIgbWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdtYXRlcmlhbDAxJywgc2NlbmUpXG4gIGN1c3RvbU1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbFxuICBtYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSB0cnVlXG4gIG1hdGVyaWFsLndpcmVmcmFtZSA9IGZhbHNlXG5cbiAgcmV0dXJuIHNjZW5lXG59XG5cbnZhciBzY2VuZSA9IGNyZWF0ZVNjZW5lKClcblxuZW5naW5lLnJ1blJlbmRlckxvb3AoZnVuY3Rpb24oKSB7XG4gIHNjZW5lLnJlbmRlcigpXG59KVxuXG4vLyBSZXNpemVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICBlbmdpbmUucmVzaXplKClcbn0pXG5cbiJdLCJuYW1lcyI6WyJmcm9tVmFsdWVzIiwibm9ybWFsaXplIiwiZG90IiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxOCIsInJlcXVpcmUkJDE5IiwicmVxdWlyZSQkMjAiLCJyZXF1aXJlJCQyMSIsInJlcXVpcmUkJDIyIiwicmVxdWlyZSQkMjMiLCJyZXF1aXJlJCQyNCIsInJlcXVpcmUkJDI1IiwicmVxdWlyZSQkMjYiLCJyZXF1aXJlJCQyNyIsInJlcXVpcmUkJDI4IiwicmVxdWlyZSQkMjkiLCJyZXF1aXJlJCQzMCIsInJlcXVpcmUkJDMxIiwidmFsdWUiLCJtYXgiLCJhYnMiLCJmbG9vciIsIm51bWJlcklzTmFOIiwidG9Qb3NJbnQiLCJjcmVhdGUiLCJzaGltIiwia2V5cyIsImZvckVhY2giLCJpbmRleE9mIiwibm9ybWFsaXplT3B0cyIsImNhbGxhYmxlIiwiZCIsImRlZmluZVByb3BlcnR5Iiwib2JqVG9TdHJpbmciLCJpZCIsIml0ZXJhdG9yU3ltYm9sIiwiaXNBcnJheSIsImFGcm9tIiwiY2FsbCIsImVuc3VyZUNhbGxhYmxlIiwiYmluZCIsImNvcHkiLCJtYXAiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiU3ltYm9sIiwiSXRlcmF0b3IiLCJpdGVyYWJsZSIsIkFycmF5SXRlcmF0b3IiLCJTdHJpbmdJdGVyYXRvciIsIml0ZXJhdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJpc05hdGl2ZSIsImVlIiwidmVjMyIsIlNldCIsInF1YWRzVG9UcmlzIiwidm94ZWxUb01lc2giLCJjYXRtdWxsIl0sIm1hcHBp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QUFDLEVBQUU7SUFDdkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUM7SUFDcEIsT0FBTyxHQUFHOzs7QUNkZCxTQUFjLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVXJCLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7SUFDN0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQzdCLE9BQU8sR0FBRzs7O0FDZGQsU0FBYyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7OztBQVVyQixTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQzdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENB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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFDckQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFDckQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFDdEQsT0FBTyxHQUFHOzs7QUNsQmQsbUJBQWMsR0FBRyxhQUFhLENBQUM7Ozs7Ozs7Ozs7QUFVL0IsU0FBUyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUM7SUFDaEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUM7SUFDdkMsT0FBTyxHQUFHOzs7QUNmZCxtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7OztBQVUvQixTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7O0lBRzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7UUFHMUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUM3QixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzdCLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDN0IsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxZQUFDOzs7SUFHbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxH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SUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUV0QixJQUFJLEdBQUcsR0FBR0EsTUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7O1FBR2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3hDQSxNQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsRUFBRSxLQUFLLENBQUM7U0FDWDs7O1FBR0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BDQSxNQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsRUFBRSxLQUFLLENBQUM7U0FDWDs7O1FBR0RBLE1BQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Ozs7O1FBS3JCLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLElBQUksR0FBR0EsTUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDcENBLE1BQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQixFQUFFLEtBQUssQ0FBQztTQUNYO1FBQ0RBLE1BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7OztRQUdwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUN4Qjs7Ozs7OztJQU9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFOztRQUV2QyxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUdBLE1BQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3pDQSxNQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0M7O1FBRUQsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDREEsTUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFeEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRTdDQSxNQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUV4QyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVE7O0tBRTVCOztJQUVELFlBQVksR0FBRyxFQUFFLENBQUM7SUFDbEIsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFFZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7OztJQU1kLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtRQUNqQixJQUFJLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7U0FFekM7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7O0tBRWxCOzs7Ozs7OztJQVFELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFOztRQUUvQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRXhCLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRTtZQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUVoQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQy9ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUM7O1lBRW5GLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkM7S0FDSjs7O0lBR0QsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztDQUVyRDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTs7SUFFekUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTs7SUFFRCxJQUFJLE9BQU8sa0JBQWtCLEtBQUssV0FBVyxFQUFFO1FBQzNDLGtCQUFrQixHQUFHLElBQUksQ0FBQztLQUM3Qjs7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUU7O1FBRXRDLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O0tBRWpEOztJQUVELElBQUksa0JBQWtCLEVBQUU7UUFDcEIsR0FBRyxDQUFDLEtBQUssR0FBR0UsYUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7SUFFRCxPQUFPLEdBQUcsQ0FBQztDQUNkOzs7QUFHRCxrQkFBYyxHQUFHLFlBQVksQ0FBQzs7QUMxVDlCOzs7QUFHQSxBQUdBO0FBQ0EsTUFBTSxJQUFJLEdBQUc7RUFDWCxTQUFTLEVBQUUsQ0FBQztFQUNaLGtCQUFrQixFQUFFLElBQUk7RUFDeEIsT0FBTyxFQUFFLElBQUk7RUFDZDtBQUNELEFBRUE7QUFDQSxTQUFTQyxhQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTs7RUFFdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOztFQUU1QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFDOztFQUVqQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFDO0VBQ3JDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUM7O0VBRXJDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFTO0VBQ3hCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQzlCLE1BQU0sR0FBR0MsY0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBQztHQUMzRixNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO0lBQ2xDLE1BQU0sQ0FBQyxPQUFPLEdBQUdGLGFBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO0dBQzdDOztFQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUNoQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUM7SUFDcEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFDO0lBQ25ELE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQztHQUN0RDtFQUNELE9BQU8sTUFBTTs7Q0FFZDs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7RUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUU7RUFDckIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJO0lBQ25CLE9BQU87TUFDTCxLQUFLLEVBQUUsQ0FBQztNQUNSLElBQUksS0FBSyxHQUFHO1FBQ1YsT0FBTyxLQUFLO09BQ2I7TUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDWCxLQUFLLEdBQUcsRUFBQztPQUNWO01BQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNkLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDN0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUk7VUFDbkIsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBSztVQUN6QixHQUFHLENBQUMsS0FBSyxHQUFHLE1BQUs7U0FDbEIsRUFBQztPQUNIO01BQ0QsS0FBSyxHQUFHO1FBQ04sTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUM7UUFDckIsT0FBTyxVQUFVO09BQ2xCO0tBQ0Y7SUFDRjtFQUNELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUM7RUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUM7RUFDakIsT0FBTyxNQUFNO0NBQ2Q7O0FBRUQsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRTtFQUMvQixNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztFQUNsRSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUM7O0VBRXRDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUc7SUFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDVixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUM7O0VBRWQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDOztFQUV6QyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHO0lBQ3ZDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFDOztFQUV2QyxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRTs7RUFFL0IsTUFBTSxPQUFPLEdBQUc7SUFDZCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7SUFFaEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDOztJQUV0RCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDdkQ7O0VBRUQsT0FBTztJQUNMLFFBQVE7SUFDUixPQUFPO0dBQ1I7Q0FDRjs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O0VBRTVCLElBQUksUUFBUSxHQUFHLEVBQUU7SUFDZixPQUFPLEdBQUcsSUFBRTtFQUNkLElBQUksVUFBVSxHQUFHLEVBQUM7RUFDbEIsTUFBTSxjQUFjLEdBQUcsRUFBQzs7RUFFeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUk7SUFDekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBQztJQUNsRCxVQUFVLElBQUksZUFBYzs7SUFFNUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztJQUN6QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO0dBQ3ZDLEVBQUM7O0VBRUYsT0FBTztJQUNMLFFBQVE7SUFDUixPQUFPO0dBQ1I7Q0FDRjs7QUFFRCxTQUFTLG9CQUFvQixDQUFDO0VBQzVCLFFBQVE7RUFDUixPQUFPO0NBQ1IsRUFBRTs7RUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRTtFQUMzQixNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsR0FBRTtFQUNoQyxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQzs7RUFFaEUsT0FBTyxHQUFHLE9BQU87S0FDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLO01BQ3BCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUM7TUFDNUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFLO1FBQzVCLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQzs7UUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUs7VUFDdEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUM7VUFDMUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDO1NBQ25DLEVBQUM7O09BRUgsTUFBTTtRQUNMLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1VBQ2pCLEtBQUs7VUFDTCxJQUFJO1NBQ0wsRUFBQztPQUNIO01BQ0QsT0FBTyxJQUFJO0tBQ1osQ0FBQztLQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDOztFQUV4QyxPQUFPO0lBQ0wsUUFBUTtJQUNSLE9BQU87R0FDUjtDQUNGOztBQUVELFNBQVMsb0JBQW9CLENBQUM7RUFDNUIsUUFBUTtFQUNSLE9BQU87Q0FDUixFQUFFO0VBQ0QsTUFBTSxXQUFXLEdBQUcsR0FBRTtFQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRTtFQUMxQixJQUFJLFlBQVksR0FBRyxFQUFDO0VBQ3BCLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSTtJQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN4QixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBQztLQUNwQztJQUNELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO0lBQzdCLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFDO0lBQ2hDLE9BQU8sQ0FBQztHQUNULENBQUMsRUFBQzs7RUFFSCxPQUFPO0lBQ0wsVUFBVSxFQUFFLFdBQVc7SUFDdkIsT0FBTztHQUNSO0NBQ0Y7O0FDMUxELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFDO0FBQ3BELElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztBQUU3QyxJQUFJLFdBQVcsR0FBRyxXQUFXO0VBQzNCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUM7O0VBRXJDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUM7O0VBRXZGLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFDO0VBQ2pHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztFQUNsRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7OztFQUdsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBQzs7O0VBR2xELElBQUksTUFBTSxHQUFHO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUI7O0VBRUQsTUFBTSxJQUFJLEdBQUdDLGFBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUM7RUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVE7RUFDN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQU87OztFQUcxQixJQUFJLE9BQU8sR0FBRyxHQUFFOztFQUVoQixJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEdBQUU7RUFDekMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUM7OztFQUc5RCxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVM7RUFDaEMsVUFBVSxDQUFDLE9BQU8sR0FBRyxRQUFPO0VBQzVCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsUUFBTzs7OztFQUk1QixVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBQzs7RUFFbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBQztFQUNoRSxVQUFVLENBQUMsUUFBUSxHQUFHLFNBQVE7RUFDOUIsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFJO0VBQy9CLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBSzs7RUFFMUIsT0FBTyxLQUFLO0VBQ2I7O0FBRUQsSUFBSSxLQUFLLEdBQUcsV0FBVyxHQUFFOztBQUV6QixNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVc7RUFDOUIsS0FBSyxDQUFDLE1BQU0sR0FBRTtDQUNmLEVBQUM7OztBQUdGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBVztFQUMzQyxNQUFNLENBQUMsTUFBTSxHQUFFO0NBQ2hCLENBQUM7Ozs7In0=
