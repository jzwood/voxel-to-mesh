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

var vec = create_1();

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

/**
 * exports voxel-to-mesh
 */

const opts = {
  convertToTriangles: true,
  flatten: true
};

function voxelToMesh$1(voxelData, options) {

  Object.assign(opts, options);

  let voxObj = parseData(voxelData);

  voxObj = removeDuplicateFaces(voxObj);
  voxObj = removeUnusedVertices(voxObj);

  if (opts.convertToTriangles) {
    voxObj.indices = glQuadsToTris(voxObj.indices);
    voxObj.colors = voxObj.colors.reduce((arr, color) => arr.concat([color, color]), []);
  }

  if (opts.flatten) {
    const flatten = (a, b) => a.concat(b);
    voxObj.indices = voxObj.indices.reduce(flatten, []);
    voxObj.vertices = voxObj.vertices.reduce(flatten, []);
    voxObj.colors = voxObj.colors.reduce(flatten, []);
  }
  return voxObj;
}

function makeCopyCat(index) {
  let table = new Set();
  const makeCat = i => {
    return {
      value: i,
      get table() {
        return table;
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
        return anotherCat;
      }
    };
  };
  const newCat = makeCat(index);
  table.add(newCat);
  return newCat;
}

function newBox(xyz, cellOffset) {
  const sumVec = (v1, v2) => v1.map((val, index) => val + v2[index]);
  const pOffset = sumVec.bind(null, xyz);

  const [a, b, c, d, e, f, g, h] = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]].map(pOffset);

  const vertices = [a, b, c, d, e, f, g, h];

  const [c0, c1, c2, c3, c4, c5, c6, c7] = [0, 1, 2, 3, 4, 5, 6, 7].map(c => makeCopyCat(c + cellOffset));

  const copy = cat => cat.clone();

  const indices = [[c2, c3, c1, c0], //originals
  [c4, c5, c7, c6], //originals

  [c3, c7, c5, c1].map(copy), [c0, c4, c6, c2].map(copy), [c1, c5, c4, c0].map(copy), [c2, c6, c7, c3].map(copy)];

  return {
    vertices,
    indices
  };
}

function parseData(voxelData) {

  let vertices = [],
      indices = [],
      colors = [];
  let cellOffset = 0;
  const DEFAULT_COLOR = [0, 0, 0, 1];
  const VERTS_PER_CUBE = 8;
  const FACES_PER_RECT = 6;

  voxelData.forEach(voxel => {
    const cube = newBox(voxel.slice(0, 3), cellOffset);
    cellOffset += VERTS_PER_CUBE;
    const color = voxel[3] || DEFAULT_COLOR;

    vertices = vertices.concat(cube.vertices);
    indices = indices.concat(cube.indices);
    colors = colors.concat(Array(FACES_PER_RECT).fill(color));
  });

  return {
    vertices,
    indices,
    colors
  };
}

function removeDuplicateFaces({
  vertices,
  indices,
  colors
}) {

  const indiceMap = new Map();
  const indexWhackList = new Set();
  const keyify = arr => arr.map(v => vertices[v]).sort().join('-');

  indices = indices.map((rect, index) => {
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
    return rect;
  }).filter((_, i) => !indexWhackList.has(i)).map(rect => rect.map(ri => ri.value));

  colors = colors.filter((color, i) => !indexWhackList.has(i));

  return {
    vertices,
    indices,
    colors
  };
}

function removeUnusedVertices({
  vertices,
  indices,
  colors
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
    return i;
  }));

  return {
    'vertices': newVertices,
    indices,
    colors
  };
}

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  //var light = new BABYLON.DirectionalLight("direct", new BABYLON.Vector3(0, 0, 1), scene)
  var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 5, -30));
  camera.attachControl(canvas, true);

  //Create a custom mesh
  var customMesh = new BABYLON.Mesh("custom", scene);

  //x,y,z,color
  var voxels = [[1, 1, 1, [0, 0, 0, 1]], [1, 1, 0, [255, 0, 0, 1]], [0, 1, 1, [0, 255, 0, 1]], [0, 1, 0, [0, 0, 255, 1]], [0, 1, 0, [255, 0, 255, 1]], [1, 0, 1, [0, 255, 0, 1]]];

  const mesh = voxelToMesh$1(voxels);
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
  material.wireframe = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm94ZWwuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nbC12ZWMzL2ZvckVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtdmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS8jL2NsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvbnVtYmVyL2lzLW5hbi9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci9pcy1uYW4vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci9pcy1uYW4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9tYXRoL3NpZ24vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L21hdGgvc2lnbi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L251bWJlci90by1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvbnVtYmVyL3RvLXBvcy1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvYXJyYXkvIy9lLWluZGV4LW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YvaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9zZXQtcHJvdG90eXBlLW9mL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9rZXlzL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qvbm9ybWFsaXplLW9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2V2ZW50LWVtaXR0ZXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pcy1pbXBsZW1lbnRlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL2lzLXN5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL3ZhbGlkYXRlLXN5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc3ltYm9sL3BvbHlmaWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1zeW1ib2wvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9mdW5jdGlvbi9pcy1hcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9pcy1pdGVyYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvdmFsaWQtaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2lzLWltcGxlbWVudGVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvZnVuY3Rpb24vaXMtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL3NoaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9hcnJheS9mcm9tL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2NvcHkuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvX2l0ZXJhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvZm9yLWVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvbWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2QvYXV0by1iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvYXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LWl0ZXJhdG9yL3N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtaXRlcmF0b3IvZ2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VzNi1pdGVyYXRvci9mb3Itb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9saWIvaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9pcy1uYXRpdmUtaW1wbGVtZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvZXM2LXNldC9wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lczYtc2V0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2dsLXF1YWRzLXRvLXRyaXMvaW5kZXguanMiLCIuLi9zcmMvdm94ZWxUb01lc2guanMiLCJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IDBcbiAgICBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgICAgICB2YXIgaSwgbFxuICAgICAgICBpZighc3RyaWRlKSB7XG4gICAgICAgICAgICBzdHJpZGUgPSAzXG4gICAgICAgIH1cblxuICAgICAgICBpZighb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNvdW50KSB7XG4gICAgICAgICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gYS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIHZlY1swXSA9IGFbaV0gXG4gICAgICAgICAgICB2ZWNbMV0gPSBhW2krMV0gXG4gICAgICAgICAgICB2ZWNbMl0gPSBhW2krMl1cbiAgICAgICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgICAgICBhW2ldID0gdmVjWzBdIFxuICAgICAgICAgICAgYVtpKzFdID0gdmVjWzFdIFxuICAgICAgICAgICAgYVtpKzJdID0gdmVjWzJdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNldCwgaXRlcmF0b3IsIHJlc3VsdDtcblx0aWYgKHR5cGVvZiBTZXQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0c2V0ID0gbmV3IFNldChbJ3JheicsICdkd2EnLCAndHJ6eSddKTtcblx0aWYgKFN0cmluZyhzZXQpICE9PSAnW29iamVjdCBTZXRdJykgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2V0LnNpemUgIT09IDMpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQuYWRkICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2Ygc2V0LmNsZWFyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2Ygc2V0LmRlbGV0ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRpZiAodHlwZW9mIHNldC5lbnRyaWVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2Ygc2V0LmZvckVhY2ggIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQuaGFzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdGlmICh0eXBlb2Ygc2V0LmtleXMgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiBzZXQudmFsdWVzICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0aXRlcmF0b3IgPSBzZXQudmFsdWVzKCk7XG5cdHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcblx0aWYgKHJlc3VsdC5kb25lICE9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAocmVzdWx0LnZhbHVlICE9PSAncmF6JykgcmV0dXJuIGZhbHNlO1xuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHktZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge307XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF91bmRlZmluZWQgPSByZXF1aXJlKFwiLi4vZnVuY3Rpb24vbm9vcFwiKSgpOyAvLyBTdXBwb3J0IEVTMyBlbmdpbmVzXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbCkge1xuIHJldHVybiAodmFsICE9PSBfdW5kZWZpbmVkKSAmJiAodmFsICE9PSBudWxsKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi9pcy12YWx1ZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc1ZhbHVlKHZhbHVlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgbnVsbCBvciB1bmRlZmluZWRcIik7XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIvLyBJbnNwaXJlZCBieSBHb29nbGUgQ2xvc3VyZTpcbi8vIGh0dHA6Ly9jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vc3ZuL2RvY3MvXG4vLyBjbG9zdXJlX2dvb2dfYXJyYXlfYXJyYXkuanMuaHRtbCNnb29nLmFycmF5LmNsZWFyXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWUgPSByZXF1aXJlKFwiLi4vLi4vb2JqZWN0L3ZhbGlkLXZhbHVlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFsdWUodGhpcykubGVuZ3RoID0gMDtcblx0cmV0dXJuIHRoaXM7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU47XG5cdGlmICh0eXBlb2YgbnVtYmVySXNOYU4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gIW51bWJlcklzTmFOKHt9KSAmJiBudW1iZXJJc05hTihOYU4pICYmICFudW1iZXJJc05hTigzNCk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblx0cmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gTnVtYmVyLmlzTmFOXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHNpZ24gPSBNYXRoLnNpZ247XG5cdGlmICh0eXBlb2Ygc2lnbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoc2lnbigxMCkgPT09IDEpICYmIChzaWduKC0yMCkgPT09IC0xKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHRpZiAoaXNOYU4odmFsdWUpIHx8ICh2YWx1ZSA9PT0gMCkpIHJldHVybiB2YWx1ZTtcblx0cmV0dXJuIHZhbHVlID4gMCA/IDEgOiAtMTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gTWF0aC5zaWduXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoXCIuLi9tYXRoL3NpZ25cIilcblxuICAsIGFicyA9IE1hdGguYWJzLCBmbG9vciA9IE1hdGguZmxvb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmIChpc05hTih2YWx1ZSkpIHJldHVybiAwO1xuXHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdGlmICgodmFsdWUgPT09IDApIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0cmV0dXJuIHNpZ24odmFsdWUpICogZmxvb3IoYWJzKHZhbHVlKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKFwiLi90by1pbnRlZ2VyXCIpXG5cbiAgLCBtYXggPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiByZXR1cm4gbWF4KDAsIHRvSW50ZWdlcih2YWx1ZSkpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbnVtYmVySXNOYU4gICAgICAgPSByZXF1aXJlKFwiLi4vLi4vbnVtYmVyL2lzLW5hblwiKVxuICAsIHRvUG9zSW50ICAgICAgICAgID0gcmVxdWlyZShcIi4uLy4uL251bWJlci90by1wb3MtaW50ZWdlclwiKVxuICAsIHZhbHVlICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC92YWxpZC12YWx1ZVwiKVxuICAsIGluZGV4T2YgICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2ZcbiAgLCBvYmpIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBhYnMgICAgICAgICAgICAgICA9IE1hdGguYWJzXG4gICwgZmxvb3IgICAgICAgICAgICAgPSBNYXRoLmZsb29yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXgqLykge1xuXHR2YXIgaSwgbGVuZ3RoLCBmcm9tSW5kZXgsIHZhbDtcblx0aWYgKCFudW1iZXJJc05hTihzZWFyY2hFbGVtZW50KSkgcmV0dXJuIGluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuXHRsZW5ndGggPSB0b1Bvc0ludCh2YWx1ZSh0aGlzKS5sZW5ndGgpO1xuXHRmcm9tSW5kZXggPSBhcmd1bWVudHNbMV07XG5cdGlmIChpc05hTihmcm9tSW5kZXgpKSBmcm9tSW5kZXggPSAwO1xuXHRlbHNlIGlmIChmcm9tSW5kZXggPj0gMCkgZnJvbUluZGV4ID0gZmxvb3IoZnJvbUluZGV4KTtcblx0ZWxzZSBmcm9tSW5kZXggPSB0b1Bvc0ludCh0aGlzLmxlbmd0aCkgLSBmbG9vcihhYnMoZnJvbUluZGV4KSk7XG5cblx0Zm9yIChpID0gZnJvbUluZGV4OyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRpZiAob2JqSGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBpKSkge1xuXHRcdFx0dmFsID0gdGhpc1tpXTtcblx0XHRcdGlmIChudW1iZXJJc05hTih2YWwpKSByZXR1cm4gaTsgLy8gSnNsaW50OiBpZ25vcmVcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSwgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsIHBsYWluT2JqZWN0ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qIEN1c3RvbUNyZWF0ZSovKSB7XG5cdHZhciBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiwgY3VzdG9tQ3JlYXRlID0gYXJndW1lbnRzWzBdIHx8IGNyZWF0ZTtcblx0aWYgKHR5cGVvZiBzZXRQcm90b3R5cGVPZiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBnZXRQcm90b3R5cGVPZihzZXRQcm90b3R5cGVPZihjdXN0b21DcmVhdGUobnVsbCksIHBsYWluT2JqZWN0KSkgPT09IHBsYWluT2JqZWN0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNWYWx1ZSA9IHJlcXVpcmUoXCIuL2lzLXZhbHVlXCIpO1xuXG52YXIgbWFwID0geyBmdW5jdGlvbjogdHJ1ZSwgb2JqZWN0OiB0cnVlIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiAoaXNWYWx1ZSh2YWx1ZSkgJiYgbWFwW3R5cGVvZiB2YWx1ZV0pIHx8IGZhbHNlO1xufTtcbiIsIi8vIFdvcmthcm91bmQgZm9yIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTI4MDRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBzaGltO1xuXG5pZiAoIXJlcXVpcmUoXCIuL3NldC1wcm90b3R5cGUtb2YvaXMtaW1wbGVtZW50ZWRcIikoKSkge1xuXHRzaGltID0gcmVxdWlyZShcIi4vc2V0LXByb3RvdHlwZS1vZi9zaGltXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBudWxsT2JqZWN0LCBwb2x5UHJvcHMsIGRlc2M7XG5cdGlmICghc2hpbSkgcmV0dXJuIGNyZWF0ZTtcblx0aWYgKHNoaW0ubGV2ZWwgIT09IDEpIHJldHVybiBjcmVhdGU7XG5cblx0bnVsbE9iamVjdCA9IHt9O1xuXHRwb2x5UHJvcHMgPSB7fTtcblx0ZGVzYyA9IHtcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiB1bmRlZmluZWRcblx0fTtcblx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LnByb3RvdHlwZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdGlmIChuYW1lID09PSBcIl9fcHJvdG9fX1wiKSB7XG5cdFx0XHRwb2x5UHJvcHNbbmFtZV0gPSB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogdW5kZWZpbmVkXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwb2x5UHJvcHNbbmFtZV0gPSBkZXNjO1xuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMobnVsbE9iamVjdCwgcG9seVByb3BzKTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2hpbSwgXCJudWxsUG9seWZpbGxcIiwge1xuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdHZhbHVlOiBudWxsT2JqZWN0XG5cdH0pO1xuXG5cdHJldHVybiBmdW5jdGlvbiAocHJvdG90eXBlLCBwcm9wcykge1xuXHRcdHJldHVybiBjcmVhdGUocHJvdG90eXBlID09PSBudWxsID8gbnVsbE9iamVjdCA6IHByb3RvdHlwZSwgcHJvcHMpO1xuXHR9O1xufSgpKTtcbiIsIi8qIGVzbGludCBuby1wcm90bzogXCJvZmZcIiAqL1xuXG4vLyBCaWcgdGhhbmtzIHRvIEBXZWJSZWZsZWN0aW9uIGZvciBzb3J0aW5nIHRoaXMgb3V0XG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09iamVjdCAgICAgICAgPSByZXF1aXJlKFwiLi4vaXMtb2JqZWN0XCIpXG4gICwgdmFsdWUgICAgICAgICAgID0gcmVxdWlyZShcIi4uL3ZhbGlkLXZhbHVlXCIpXG4gICwgb2JqSXNQcm90b3R5cGVPZiA9IE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZlxuICAsIGRlZmluZVByb3BlcnR5ICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIG51bGxEZXNjICAgICAgICA9IHtcblx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0d3JpdGFibGU6IHRydWUsXG5cdHZhbHVlOiB1bmRlZmluZWRcbn1cbiAgLCB2YWxpZGF0ZTtcblxudmFsaWRhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90b3R5cGUpIHtcblx0dmFsdWUob2JqKTtcblx0aWYgKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBpc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4gb2JqO1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvdG90eXBlIG11c3QgYmUgbnVsbCBvciBhbiBvYmplY3RcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoc3RhdHVzKSB7XG5cdHZhciBmbiwgc2V0O1xuXHRpZiAoIXN0YXR1cykgcmV0dXJuIG51bGw7XG5cdGlmIChzdGF0dXMubGV2ZWwgPT09IDIpIHtcblx0XHRpZiAoc3RhdHVzLnNldCkge1xuXHRcdFx0c2V0ID0gc3RhdHVzLnNldDtcblx0XHRcdGZuID0gZnVuY3Rpb24gKG9iaiwgcHJvdG90eXBlKSB7XG5cdFx0XHRcdHNldC5jYWxsKHZhbGlkYXRlKG9iaiwgcHJvdG90eXBlKSwgcHJvdG90eXBlKTtcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZuID0gZnVuY3Rpb24gKG9iaiwgcHJvdG90eXBlKSB7XG5cdFx0XHRcdHZhbGlkYXRlKG9iaiwgcHJvdG90eXBlKS5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG5cdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmbiA9IGZ1bmN0aW9uIHNlbGYob2JqLCBwcm90b3R5cGUpIHtcblx0XHRcdHZhciBpc051bGxCYXNlO1xuXHRcdFx0dmFsaWRhdGUob2JqLCBwcm90b3R5cGUpO1xuXHRcdFx0aXNOdWxsQmFzZSA9IG9iaklzUHJvdG90eXBlT2YuY2FsbChzZWxmLm51bGxQb2x5ZmlsbCwgb2JqKTtcblx0XHRcdGlmIChpc051bGxCYXNlKSBkZWxldGUgc2VsZi5udWxsUG9seWZpbGwuX19wcm90b19fO1xuXHRcdFx0aWYgKHByb3RvdHlwZSA9PT0gbnVsbCkgcHJvdG90eXBlID0gc2VsZi5udWxsUG9seWZpbGw7XG5cdFx0XHRvYmouX19wcm90b19fID0gcHJvdG90eXBlO1xuXHRcdFx0aWYgKGlzTnVsbEJhc2UpIGRlZmluZVByb3BlcnR5KHNlbGYubnVsbFBvbHlmaWxsLCBcIl9fcHJvdG9fX1wiLCBudWxsRGVzYyk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgXCJsZXZlbFwiLCB7XG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0dmFsdWU6IHN0YXR1cy5sZXZlbFxuXHR9KTtcbn0oXG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRtcE9iajEgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdFx0ICAsIHRtcE9iajIgPSB7fVxuXHRcdCAgLCBzZXRcblx0XHQgICwgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgXCJfX3Byb3RvX19cIik7XG5cblx0XHRpZiAoZGVzYykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c2V0ID0gZGVzYy5zZXQ7IC8vIE9wZXJhIGNyYXNoZXMgYXQgdGhpcyBwb2ludFxuXHRcdFx0XHRzZXQuY2FsbCh0bXBPYmoxLCB0bXBPYmoyKTtcblx0XHRcdH0gY2F0Y2ggKGlnbm9yZSkge31cblx0XHRcdGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodG1wT2JqMSkgPT09IHRtcE9iajIpIHJldHVybiB7IHNldDogc2V0LCBsZXZlbDogMiB9O1xuXHRcdH1cblxuXHRcdHRtcE9iajEuX19wcm90b19fID0gdG1wT2JqMjtcblx0XHRpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRtcE9iajEpID09PSB0bXBPYmoyKSByZXR1cm4geyBsZXZlbDogMiB9O1xuXG5cdFx0dG1wT2JqMSA9IHt9O1xuXHRcdHRtcE9iajEuX19wcm90b19fID0gdG1wT2JqMjtcblx0XHRpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRtcE9iajEpID09PSB0bXBPYmoyKSByZXR1cm4geyBsZXZlbDogMSB9O1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpXG4pKTtcblxucmVxdWlyZShcIi4uL2NyZWF0ZVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBPYmplY3Quc2V0UHJvdG90eXBlT2Zcblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihmbiArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRyZXR1cm4gZm47XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiwgb2JqO1xuXHRpZiAodHlwZW9mIGFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdG9iaiA9IHsgZm9vOiBcInJhelwiIH07XG5cdGFzc2lnbihvYmosIHsgYmFyOiBcImR3YVwiIH0sIHsgdHJ6eTogXCJ0cnp5XCIgfSk7XG5cdHJldHVybiAob2JqLmZvbyArIG9iai5iYXIgKyBvYmoudHJ6eSkgPT09IFwicmF6ZHdhdHJ6eVwiO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dHJ5IHtcblx0XHRPYmplY3Qua2V5cyhcInByaW1pdGl2ZVwiKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuIHJldHVybiBmYWxzZTtcbn1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi4vaXMtdmFsdWVcIik7XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuXHRyZXR1cm4ga2V5cyhpc1ZhbHVlKG9iamVjdCkgPyBPYmplY3Qob2JqZWN0KSA6IG9iamVjdCk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKVxuXHQ/IE9iamVjdC5rZXlzXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIga2V5cyAgPSByZXF1aXJlKFwiLi4va2V5c1wiKVxuICAsIHZhbHVlID0gcmVxdWlyZShcIi4uL3ZhbGlkLXZhbHVlXCIpXG4gICwgbWF4ICAgPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGVzdCwgc3JjIC8qLCDigKZzcmNuKi8pIHtcblx0dmFyIGVycm9yLCBpLCBsZW5ndGggPSBtYXgoYXJndW1lbnRzLmxlbmd0aCwgMiksIGFzc2lnbjtcblx0ZGVzdCA9IE9iamVjdCh2YWx1ZShkZXN0KSk7XG5cdGFzc2lnbiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHR0cnkge1xuXHRcdFx0ZGVzdFtrZXldID0gc3JjW2tleV07XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlO1xuXHRcdH1cblx0fTtcblx0Zm9yIChpID0gMTsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0c3JjID0gYXJndW1lbnRzW2ldO1xuXHRcdGtleXMoc3JjKS5mb3JFYWNoKGFzc2lnbik7XG5cdH1cblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGVycm9yO1xuXHRyZXR1cm4gZGVzdDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gT2JqZWN0LmFzc2lnblxuXHQ6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi9pcy12YWx1ZVwiKTtcblxudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCwgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoc3JjLCBvYmopIHtcblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gc3JjKSBvYmpba2V5XSA9IHNyY1trZXldO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzMSAvKiwg4oCmb3B0aW9ucyovKSB7XG5cdHZhciByZXN1bHQgPSBjcmVhdGUobnVsbCk7XG5cdGZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0aWYgKCFpc1ZhbHVlKG9wdGlvbnMpKSByZXR1cm47XG5cdFx0cHJvY2VzcyhPYmplY3Qob3B0aW9ucyksIHJlc3VsdCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIERlcHJlY2F0ZWRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHIgPSBcInJhemR3YXRyenlcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc3RyLmNvbnRhaW5zICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIChzdHIuY29udGFpbnMoXCJkd2FcIikgPT09IHRydWUpICYmIChzdHIuY29udGFpbnMoXCJmb29cIikgPT09IGZhbHNlKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZy8qLCBwb3NpdGlvbiovKSB7XG5cdHJldHVybiBpbmRleE9mLmNhbGwodGhpcywgc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pID4gLTE7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKVxuXHQ/IFN0cmluZy5wcm90b3R5cGUuY29udGFpbnNcblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2Fzc2lnbicpXG4gICwgbm9ybWFsaXplT3B0cyA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zJylcbiAgLCBpc0NhbGxhYmxlICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUnKVxuICAsIGNvbnRhaW5zICAgICAgPSByZXF1aXJlKCdlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zJylcblxuICAsIGQ7XG5cbmQgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICgoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHx8ICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpKSB7XG5cdFx0b3B0aW9ucyA9IHZhbHVlO1xuXHRcdHZhbHVlID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuXHR9XG5cdGlmIChkc2NyID09IG51bGwpIHtcblx0XHRjID0gdyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0XHR3ID0gY29udGFpbnMuY2FsbChkc2NyLCAndycpO1xuXHR9XG5cblx0ZGVzYyA9IHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IGMsIGVudW1lcmFibGU6IGUsIHdyaXRhYmxlOiB3IH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSAnc3RyaW5nJykge1xuXHRcdG9wdGlvbnMgPSBzZXQ7XG5cdFx0c2V0ID0gZ2V0O1xuXHRcdGdldCA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1szXTtcblx0fVxuXHRpZiAoZ2V0ID09IG51bGwpIHtcblx0XHRnZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKHNldCA9PSBudWxsKSB7XG5cdFx0c2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKHNldCkpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZFR5cGVzID0geyBvYmplY3Q6IHRydWUsIHN5bWJvbDogdHJ1ZSB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHN5bWJvbDtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblx0c3ltYm9sID0gU3ltYm9sKCd0ZXN0IHN5bWJvbCcpO1xuXHR0cnkgeyBTdHJpbmcoc3ltYm9sKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBSZXR1cm4gJ3RydWUnIGFsc28gZm9yIHBvbHlmaWxsc1xuXHRpZiAoIXZhbGlkVHlwZXNbdHlwZW9mIFN5bWJvbC5pdGVyYXRvcl0pIHJldHVybiBmYWxzZTtcblx0aWYgKCF2YWxpZFR5cGVzW3R5cGVvZiBTeW1ib2wudG9QcmltaXRpdmVdKSByZXR1cm4gZmFsc2U7XG5cdGlmICghdmFsaWRUeXBlc1t0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnXSkgcmV0dXJuIGZhbHNlO1xuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeCkge1xuXHRpZiAoIXgpIHJldHVybiBmYWxzZTtcblx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykgcmV0dXJuIHRydWU7XG5cdGlmICgheC5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXHRpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3ltYm9sJykgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gKHhbeC5jb25zdHJ1Y3Rvci50b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXMtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNTeW1ib2wodmFsdWUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKHZhbHVlICsgXCIgaXMgbm90IGEgc3ltYm9sXCIpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiLy8gRVMyMDE1IFN5bWJvbCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IChvciBwYXJ0aWFsbHkpIHN1cHBvcnQgaXRcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCB2YWxpZGF0ZVN5bWJvbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGUtc3ltYm9sJylcblxuICAsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LCBvYmpQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlXG4gICwgTmF0aXZlU3ltYm9sLCBTeW1ib2xQb2x5ZmlsbCwgSGlkZGVuU3ltYm9sLCBnbG9iYWxTeW1ib2xzID0gY3JlYXRlKG51bGwpXG4gICwgaXNOYXRpdmVTYWZlO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHROYXRpdmVTeW1ib2wgPSBTeW1ib2w7XG5cdHRyeSB7XG5cdFx0U3RyaW5nKE5hdGl2ZVN5bWJvbCgpKTtcblx0XHRpc05hdGl2ZVNhZmUgPSB0cnVlO1xuXHR9IGNhdGNoIChpZ25vcmUpIHt9XG59XG5cbnZhciBnZW5lcmF0ZU5hbWUgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgY3JlYXRlZCA9IGNyZWF0ZShudWxsKTtcblx0cmV0dXJuIGZ1bmN0aW9uIChkZXNjKSB7XG5cdFx0dmFyIHBvc3RmaXggPSAwLCBuYW1lLCBpZTExQnVnV29ya2Fyb3VuZDtcblx0XHR3aGlsZSAoY3JlYXRlZFtkZXNjICsgKHBvc3RmaXggfHwgJycpXSkgKytwb3N0Zml4O1xuXHRcdGRlc2MgKz0gKHBvc3RmaXggfHwgJycpO1xuXHRcdGNyZWF0ZWRbZGVzY10gPSB0cnVlO1xuXHRcdG5hbWUgPSAnQEAnICsgZGVzYztcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmpQcm90b3R5cGUsIG5hbWUsIGQuZ3MobnVsbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHQvLyBGb3IgSUUxMSBpc3N1ZSBzZWU6XG5cdFx0XHQvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFja2RldGFpbC92aWV3LzE5Mjg1MDgvXG5cdFx0XHQvLyAgICBpZTExLWJyb2tlbi1nZXR0ZXJzLW9uLWRvbS1vYmplY3RzXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbWVkaWtvby9lczYtc3ltYm9sL2lzc3Vlcy8xMlxuXHRcdFx0aWYgKGllMTFCdWdXb3JrYXJvdW5kKSByZXR1cm47XG5cdFx0XHRpZTExQnVnV29ya2Fyb3VuZCA9IHRydWU7XG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkKHZhbHVlKSk7XG5cdFx0XHRpZTExQnVnV29ya2Fyb3VuZCA9IGZhbHNlO1xuXHRcdH0pKTtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcbn0oKSk7XG5cbi8vIEludGVybmFsIGNvbnN0cnVjdG9yIChub3Qgb25lIGV4cG9zZWQpIGZvciBjcmVhdGluZyBTeW1ib2wgaW5zdGFuY2VzLlxuLy8gVGhpcyBvbmUgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBgc29tZVN5bWJvbCBpbnN0YW5jZW9mIFN5bWJvbGAgYWx3YXlzIHJldHVybiBmYWxzZVxuSGlkZGVuU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG5cdGlmICh0aGlzIGluc3RhbmNlb2YgSGlkZGVuU3ltYm9sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0cmV0dXJuIFN5bWJvbFBvbHlmaWxsKGRlc2NyaXB0aW9uKTtcbn07XG5cbi8vIEV4cG9zZWQgYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIChyZXR1cm5zIGluc3RhbmNlcyBvZiBIaWRkZW5TeW1ib2wpXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFBvbHlmaWxsID0gZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG5cdHZhciBzeW1ib2w7XG5cdGlmICh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcblx0aWYgKGlzTmF0aXZlU2FmZSkgcmV0dXJuIE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG5cdHN5bWJvbCA9IGNyZWF0ZShIaWRkZW5TeW1ib2wucHJvdG90eXBlKTtcblx0ZGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKGRlc2NyaXB0aW9uKSk7XG5cdHJldHVybiBkZWZpbmVQcm9wZXJ0aWVzKHN5bWJvbCwge1xuXHRcdF9fZGVzY3JpcHRpb25fXzogZCgnJywgZGVzY3JpcHRpb24pLFxuXHRcdF9fbmFtZV9fOiBkKCcnLCBnZW5lcmF0ZU5hbWUoZGVzY3JpcHRpb24pKVxuXHR9KTtcbn07XG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbFBvbHlmaWxsLCB7XG5cdGZvcjogZChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0aWYgKGdsb2JhbFN5bWJvbHNba2V5XSkgcmV0dXJuIGdsb2JhbFN5bWJvbHNba2V5XTtcblx0XHRyZXR1cm4gKGdsb2JhbFN5bWJvbHNba2V5XSA9IFN5bWJvbFBvbHlmaWxsKFN0cmluZyhrZXkpKSk7XG5cdH0pLFxuXHRrZXlGb3I6IGQoZnVuY3Rpb24gKHMpIHtcblx0XHR2YXIga2V5O1xuXHRcdHZhbGlkYXRlU3ltYm9sKHMpO1xuXHRcdGZvciAoa2V5IGluIGdsb2JhbFN5bWJvbHMpIGlmIChnbG9iYWxTeW1ib2xzW2tleV0gPT09IHMpIHJldHVybiBrZXk7XG5cdH0pLFxuXG5cdC8vIFRvIGVuc3VyZSBwcm9wZXIgaW50ZXJvcGVyYWJpbGl0eSB3aXRoIG90aGVyIG5hdGl2ZSBmdW5jdGlvbnMgKGUuZy4gQXJyYXkuZnJvbSlcblx0Ly8gZmFsbGJhY2sgdG8gZXZlbnR1YWwgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIGdpdmVuIHN5bWJvbFxuXHRoYXNJbnN0YW5jZTogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuaGFzSW5zdGFuY2UpIHx8IFN5bWJvbFBvbHlmaWxsKCdoYXNJbnN0YW5jZScpKSxcblx0aXNDb25jYXRTcHJlYWRhYmxlOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUpIHx8XG5cdFx0U3ltYm9sUG9seWZpbGwoJ2lzQ29uY2F0U3ByZWFkYWJsZScpKSxcblx0aXRlcmF0b3I6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLml0ZXJhdG9yKSB8fCBTeW1ib2xQb2x5ZmlsbCgnaXRlcmF0b3InKSksXG5cdG1hdGNoOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5tYXRjaCkgfHwgU3ltYm9sUG9seWZpbGwoJ21hdGNoJykpLFxuXHRyZXBsYWNlOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5yZXBsYWNlKSB8fCBTeW1ib2xQb2x5ZmlsbCgncmVwbGFjZScpKSxcblx0c2VhcmNoOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC5zZWFyY2gpIHx8IFN5bWJvbFBvbHlmaWxsKCdzZWFyY2gnKSksXG5cdHNwZWNpZXM6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnNwZWNpZXMpIHx8IFN5bWJvbFBvbHlmaWxsKCdzcGVjaWVzJykpLFxuXHRzcGxpdDogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wuc3BsaXQpIHx8IFN5bWJvbFBvbHlmaWxsKCdzcGxpdCcpKSxcblx0dG9QcmltaXRpdmU6IGQoJycsIChOYXRpdmVTeW1ib2wgJiYgTmF0aXZlU3ltYm9sLnRvUHJpbWl0aXZlKSB8fCBTeW1ib2xQb2x5ZmlsbCgndG9QcmltaXRpdmUnKSksXG5cdHRvU3RyaW5nVGFnOiBkKCcnLCAoTmF0aXZlU3ltYm9sICYmIE5hdGl2ZVN5bWJvbC50b1N0cmluZ1RhZykgfHwgU3ltYm9sUG9seWZpbGwoJ3RvU3RyaW5nVGFnJykpLFxuXHR1bnNjb3BhYmxlczogZCgnJywgKE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wudW5zY29wYWJsZXMpIHx8IFN5bWJvbFBvbHlmaWxsKCd1bnNjb3BhYmxlcycpKVxufSk7XG5cbi8vIEludGVybmFsIHR3ZWFrcyBmb3IgcmVhbCBzeW1ib2wgcHJvZHVjZXJcbmRlZmluZVByb3BlcnRpZXMoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwge1xuXHRjb25zdHJ1Y3RvcjogZChTeW1ib2xQb2x5ZmlsbCksXG5cdHRvU3RyaW5nOiBkKCcnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9fbmFtZV9fOyB9KVxufSk7XG5cbi8vIFByb3BlciBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGV4cG9zZWQgb24gU3ltYm9sLnByb3RvdHlwZVxuLy8gVGhleSB3b24ndCBiZSBhY2Nlc3NpYmxlIG9uIHByb2R1Y2VkIHN5bWJvbCBpbnN0YW5jZXMgYXMgdGhleSBkZXJpdmUgZnJvbSBIaWRkZW5TeW1ib2wucHJvdG90eXBlXG5kZWZpbmVQcm9wZXJ0aWVzKFN5bWJvbFBvbHlmaWxsLnByb3RvdHlwZSwge1xuXHR0b1N0cmluZzogZChmdW5jdGlvbiAoKSB7IHJldHVybiAnU3ltYm9sICgnICsgdmFsaWRhdGVTeW1ib2wodGhpcykuX19kZXNjcmlwdGlvbl9fICsgJyknOyB9KSxcblx0dmFsdWVPZjogZChmdW5jdGlvbiAoKSB7IHJldHVybiB2YWxpZGF0ZVN5bWJvbCh0aGlzKTsgfSlcbn0pO1xuZGVmaW5lUHJvcGVydHkoU3ltYm9sUG9seWZpbGwucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1ByaW1pdGl2ZSwgZCgnJywgZnVuY3Rpb24gKCkge1xuXHR2YXIgc3ltYm9sID0gdmFsaWRhdGVTeW1ib2wodGhpcyk7XG5cdGlmICh0eXBlb2Ygc3ltYm9sID09PSAnc3ltYm9sJykgcmV0dXJuIHN5bWJvbDtcblx0cmV0dXJuIHN5bWJvbC50b1N0cmluZygpO1xufSkpO1xuZGVmaW5lUHJvcGVydHkoU3ltYm9sUG9seWZpbGwucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywgZCgnYycsICdTeW1ib2wnKSk7XG5cbi8vIFByb3BlciBpbXBsZW1lbnRhdG9uIG9mIHRvUHJpbWl0aXZlIGFuZCB0b1N0cmluZ1RhZyBmb3IgcmV0dXJuZWQgc3ltYm9sIGluc3RhbmNlc1xuZGVmaW5lUHJvcGVydHkoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsXG5cdGQoJ2MnLCBTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGVbU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWddKSk7XG5cbi8vIE5vdGU6IEl0J3MgaW1wb3J0YW50IHRvIGRlZmluZSBgdG9QcmltaXRpdmVgIGFzIGxhc3Qgb25lLCBhcyBzb21lIGltcGxlbWVudGF0aW9uc1xuLy8gaW1wbGVtZW50IGB0b1ByaW1pdGl2ZWAgbmF0aXZlbHkgd2l0aG91dCBpbXBsZW1lbnRpbmcgYHRvU3RyaW5nVGFnYCAob3Igb3RoZXIgc3BlY2lmaWVkIHN5bWJvbHMpXG4vLyBBbmQgdGhhdCBtYXkgaW52b2tlIGVycm9yIGluIGRlZmluaXRpb24gZmxvdzpcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21lZGlrb28vZXM2LXN5bWJvbC9pc3N1ZXMvMTMjaXNzdWVjb21tZW50LTE2NDE0NjE0OVxuZGVmaW5lUHJvcGVydHkoSGlkZGVuU3ltYm9sLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9QcmltaXRpdmUsXG5cdGQoJ2MnLCBTeW1ib2xQb2x5ZmlsbC5wcm90b3R5cGVbU3ltYm9sUG9seWZpbGwudG9QcmltaXRpdmVdKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pcy1pbXBsZW1lbnRlZCcpKCkgPyBTeW1ib2wgOiByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9ialRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAsIGlkID0gb2JqVG9TdHJpbmcuY2FsbChcblx0KGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzO1xuXHR9KSgpXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IGlkO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgb2JqVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLCBpZCA9IG9ialRvU3RyaW5nLmNhbGwoXCJcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8XG5cdFx0KHZhbHVlICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcblx0XHRcdCh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZyB8fCBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gaWQpKSB8fFxuXHRcdGZhbHNlXG5cdCk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoXCJlczUtZXh0L2Z1bmN0aW9uL2lzLWFyZ3VtZW50c1wiKVxuICAsIGlzVmFsdWUgICAgID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L2lzLXZhbHVlXCIpXG4gICwgaXNTdHJpbmcgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9zdHJpbmcvaXMtc3RyaW5nXCIpO1xuXG52YXIgaXRlcmF0b3JTeW1ib2wgPSByZXF1aXJlKFwiZXM2LXN5bWJvbFwiKS5pdGVyYXRvclxuICAsIGlzQXJyYXkgICAgICAgID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc1ZhbHVlKHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuXHRpZiAoaXNBcnJheSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXHRpZiAoaXNTdHJpbmcodmFsdWUpKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGlzQXJndW1lbnRzKHZhbHVlKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiB0eXBlb2YgdmFsdWVbaXRlcmF0b3JTeW1ib2xdID09PSBcImZ1bmN0aW9uXCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0l0ZXJhYmxlID0gcmVxdWlyZShcIi4vaXMtaXRlcmFibGVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdGlmICghaXNJdGVyYWJsZSh2YWx1ZSkpIHRocm93IG5ldyBUeXBlRXJyb3IodmFsdWUgKyBcIiBpcyBub3QgaXRlcmFibGVcIik7XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBmcm9tID0gQXJyYXkuZnJvbSwgYXJyLCByZXN1bHQ7XG5cdGlmICh0eXBlb2YgZnJvbSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGFyciA9IFtcInJhelwiLCBcImR3YVwiXTtcblx0cmVzdWx0ID0gZnJvbShhcnIpO1xuXHRyZXR1cm4gQm9vbGVhbihyZXN1bHQgJiYgKHJlc3VsdCAhPT0gYXJyKSAmJiAocmVzdWx0WzFdID09PSBcImR3YVwiKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmpUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsIGlkID0gb2JqVG9TdHJpbmcuY2FsbChyZXF1aXJlKFwiLi9ub29wXCIpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBpZDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGl0ZXJhdG9yU3ltYm9sID0gcmVxdWlyZShcImVzNi1zeW1ib2xcIikuaXRlcmF0b3JcbiAgLCBpc0FyZ3VtZW50cyAgICA9IHJlcXVpcmUoXCIuLi8uLi9mdW5jdGlvbi9pcy1hcmd1bWVudHNcIilcbiAgLCBpc0Z1bmN0aW9uICAgICA9IHJlcXVpcmUoXCIuLi8uLi9mdW5jdGlvbi9pcy1mdW5jdGlvblwiKVxuICAsIHRvUG9zSW50ICAgICAgID0gcmVxdWlyZShcIi4uLy4uL251bWJlci90by1wb3MtaW50ZWdlclwiKVxuICAsIGNhbGxhYmxlICAgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC92YWxpZC1jYWxsYWJsZVwiKVxuICAsIHZhbGlkVmFsdWUgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC92YWxpZC12YWx1ZVwiKVxuICAsIGlzVmFsdWUgICAgICAgID0gcmVxdWlyZShcIi4uLy4uL29iamVjdC9pcy12YWx1ZVwiKVxuICAsIGlzU3RyaW5nICAgICAgID0gcmVxdWlyZShcIi4uLy4uL3N0cmluZy9pcy1zdHJpbmdcIilcbiAgLCBpc0FycmF5ICAgICAgICA9IEFycmF5LmlzQXJyYXlcbiAgLCBjYWxsICAgICAgICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwgZGVzYyAgICAgICAgICAgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBudWxsIH1cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5TGlrZSAvKiwgbWFwRm4sIHRoaXNBcmcqLykge1xuXHR2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV1cblx0ICAsIHRoaXNBcmcgPSBhcmd1bWVudHNbMl1cblx0ICAsIENvbnRleHRcblx0ICAsIGlcblx0ICAsIGpcblx0ICAsIGFyclxuXHQgICwgbGVuZ3RoXG5cdCAgLCBjb2RlXG5cdCAgLCBpdGVyYXRvclxuXHQgICwgcmVzdWx0XG5cdCAgLCBnZXRJdGVyYXRvclxuXHQgICwgdmFsdWU7XG5cblx0YXJyYXlMaWtlID0gT2JqZWN0KHZhbGlkVmFsdWUoYXJyYXlMaWtlKSk7XG5cblx0aWYgKGlzVmFsdWUobWFwRm4pKSBjYWxsYWJsZShtYXBGbik7XG5cdGlmICghdGhpcyB8fCB0aGlzID09PSBBcnJheSB8fCAhaXNGdW5jdGlvbih0aGlzKSkge1xuXHRcdC8vIFJlc3VsdDogUGxhaW4gYXJyYXlcblx0XHRpZiAoIW1hcEZuKSB7XG5cdFx0XHRpZiAoaXNBcmd1bWVudHMoYXJyYXlMaWtlKSkge1xuXHRcdFx0XHQvLyBTb3VyY2U6IEFyZ3VtZW50c1xuXHRcdFx0XHRsZW5ndGggPSBhcnJheUxpa2UubGVuZ3RoO1xuXHRcdFx0XHRpZiAobGVuZ3RoICE9PSAxKSByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgYXJyYXlMaWtlKTtcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRhcnJbMF0gPSBhcnJheUxpa2VbMF07XG5cdFx0XHRcdHJldHVybiBhcnI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0XHRcdC8vIFNvdXJjZTogQXJyYXlcblx0XHRcdFx0YXJyID0gbmV3IEFycmF5KGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGgpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIGFycltpXSA9IGFycmF5TGlrZVtpXTtcblx0XHRcdFx0cmV0dXJuIGFycjtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXJyID0gW107XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUmVzdWx0OiBOb24gcGxhaW4gYXJyYXlcblx0XHRDb250ZXh0ID0gdGhpcztcblx0fVxuXG5cdGlmICghaXNBcnJheShhcnJheUxpa2UpKSB7XG5cdFx0aWYgKChnZXRJdGVyYXRvciA9IGFycmF5TGlrZVtpdGVyYXRvclN5bWJvbF0pICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIFNvdXJjZTogSXRlcmF0b3Jcblx0XHRcdGl0ZXJhdG9yID0gY2FsbGFibGUoZ2V0SXRlcmF0b3IpLmNhbGwoYXJyYXlMaWtlKTtcblx0XHRcdGlmIChDb250ZXh0KSBhcnIgPSBuZXcgQ29udGV4dCgpO1xuXHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0aSA9IDA7XG5cdFx0XHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgaSkgOiByZXN1bHQudmFsdWU7XG5cdFx0XHRcdGlmIChDb250ZXh0KSB7XG5cdFx0XHRcdFx0ZGVzYy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdGRlZmluZVByb3BlcnR5KGFyciwgaSwgZGVzYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXJyW2ldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHR9XG5cdFx0XHRsZW5ndGggPSBpO1xuXHRcdH0gZWxzZSBpZiAoaXNTdHJpbmcoYXJyYXlMaWtlKSkge1xuXHRcdFx0Ly8gU291cmNlOiBTdHJpbmdcblx0XHRcdGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG5cdFx0XHRpZiAoQ29udGV4dCkgYXJyID0gbmV3IENvbnRleHQoKTtcblx0XHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dmFsdWUgPSBhcnJheUxpa2VbaV07XG5cdFx0XHRcdGlmIChpICsgMSA8IGxlbmd0aCkge1xuXHRcdFx0XHRcdGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApO1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0XHRpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRiZmYpIHZhbHVlICs9IGFycmF5TGlrZVsrK2ldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gbWFwRm4gPyBjYWxsLmNhbGwobWFwRm4sIHRoaXNBcmcsIHZhbHVlLCBqKSA6IHZhbHVlO1xuXHRcdFx0XHRpZiAoQ29udGV4dCkge1xuXHRcdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRkZWZpbmVQcm9wZXJ0eShhcnIsIGosIGRlc2MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFycltqXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsrajtcblx0XHRcdH1cblx0XHRcdGxlbmd0aCA9IGo7XG5cdFx0fVxuXHR9XG5cdGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIFNvdXJjZTogYXJyYXkgb3IgYXJyYXktbGlrZVxuXHRcdGxlbmd0aCA9IHRvUG9zSW50KGFycmF5TGlrZS5sZW5ndGgpO1xuXHRcdGlmIChDb250ZXh0KSBhcnIgPSBuZXcgQ29udGV4dChsZW5ndGgpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0dmFsdWUgPSBtYXBGbiA/IGNhbGwuY2FsbChtYXBGbiwgdGhpc0FyZywgYXJyYXlMaWtlW2ldLCBpKSA6IGFycmF5TGlrZVtpXTtcblx0XHRcdGlmIChDb250ZXh0KSB7XG5cdFx0XHRcdGRlc2MudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkoYXJyLCBpLCBkZXNjKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFycltpXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoQ29udGV4dCkge1xuXHRcdGRlc2MudmFsdWUgPSBudWxsO1xuXHRcdGFyci5sZW5ndGggPSBsZW5ndGg7XG5cdH1cblx0cmV0dXJuIGFycjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pcy1pbXBsZW1lbnRlZFwiKSgpXG5cdD8gQXJyYXkuZnJvbVxuXHQ6IHJlcXVpcmUoXCIuL3NoaW1cIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFGcm9tICA9IHJlcXVpcmUoXCIuLi9hcnJheS9mcm9tXCIpXG4gICwgYXNzaWduID0gcmVxdWlyZShcIi4vYXNzaWduXCIpXG4gICwgdmFsdWUgID0gcmVxdWlyZShcIi4vdmFsaWQtdmFsdWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iai8qLCBwcm9wZXJ0eU5hbWVzLCBvcHRpb25zKi8pIHtcblx0dmFyIGNvcHkgPSBPYmplY3QodmFsdWUob2JqKSksIHByb3BlcnR5TmFtZXMgPSBhcmd1bWVudHNbMV0sIG9wdGlvbnMgPSBPYmplY3QoYXJndW1lbnRzWzJdKTtcblx0aWYgKGNvcHkgIT09IG9iaiAmJiAhcHJvcGVydHlOYW1lcykgcmV0dXJuIGNvcHk7XG5cdHZhciByZXN1bHQgPSB7fTtcblx0aWYgKHByb3BlcnR5TmFtZXMpIHtcblx0XHRhRnJvbShwcm9wZXJ0eU5hbWVzLCBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5lbnN1cmUgfHwgcHJvcGVydHlOYW1lIGluIG9iaikgcmVzdWx0W3Byb3BlcnR5TmFtZV0gPSBvYmpbcHJvcGVydHlOYW1lXTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRhc3NpZ24ocmVzdWx0LCBvYmopO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gSW50ZXJuYWwgbWV0aG9kLCB1c2VkIGJ5IGl0ZXJhdGlvbiBmdW5jdGlvbnMuXG4vLyBDYWxscyBhIGZ1bmN0aW9uIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyIGZvdW5kIGluIG9iamVjdFxuLy8gT3B0aW9uYWxseSB0YWtlcyBjb21wYXJlRm4gdG8gaXRlcmF0ZSBvYmplY3QgaW4gc3BlY2lmaWMgb3JkZXJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxsYWJsZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3ZhbGlkLWNhbGxhYmxlXCIpXG4gICwgdmFsdWUgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi92YWxpZC12YWx1ZVwiKVxuICAsIGJpbmQgICAgICAgICAgICAgICAgICAgID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgLCBjYWxsICAgICAgICAgICAgICAgICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsXG4gICwga2V5cyAgICAgICAgICAgICAgICAgICAgPSBPYmplY3Qua2V5c1xuICAsIG9ialByb3BlcnR5SXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kLCBkZWZWYWwpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChvYmosIGNiIC8qLCB0aGlzQXJnLCBjb21wYXJlRm4qLykge1xuXHRcdHZhciBsaXN0LCB0aGlzQXJnID0gYXJndW1lbnRzWzJdLCBjb21wYXJlRm4gPSBhcmd1bWVudHNbM107XG5cdFx0b2JqID0gT2JqZWN0KHZhbHVlKG9iaikpO1xuXHRcdGNhbGxhYmxlKGNiKTtcblxuXHRcdGxpc3QgPSBrZXlzKG9iaik7XG5cdFx0aWYgKGNvbXBhcmVGbikge1xuXHRcdFx0bGlzdC5zb3J0KHR5cGVvZiBjb21wYXJlRm4gPT09IFwiZnVuY3Rpb25cIiA/IGJpbmQuY2FsbChjb21wYXJlRm4sIG9iaikgOiB1bmRlZmluZWQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIG1ldGhvZCAhPT0gXCJmdW5jdGlvblwiKSBtZXRob2QgPSBsaXN0W21ldGhvZF07XG5cdFx0cmV0dXJuIGNhbGwuY2FsbChtZXRob2QsIGxpc3QsIGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG5cdFx0XHRpZiAoIW9ialByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpKSByZXR1cm4gZGVmVmFsO1xuXHRcdFx0cmV0dXJuIGNhbGwuY2FsbChjYiwgdGhpc0FyZywgb2JqW2tleV0sIGtleSwgb2JqLCBpbmRleCk7XG5cdFx0fSk7XG5cdH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vX2l0ZXJhdGVcIikoXCJmb3JFYWNoXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxsYWJsZSA9IHJlcXVpcmUoXCIuL3ZhbGlkLWNhbGxhYmxlXCIpXG4gICwgZm9yRWFjaCAgPSByZXF1aXJlKFwiLi9mb3ItZWFjaFwiKVxuICAsIGNhbGwgICAgID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgY2IgLyosIHRoaXNBcmcqLykge1xuXHR2YXIgcmVzdWx0ID0ge30sIHRoaXNBcmcgPSBhcmd1bWVudHNbMl07XG5cdGNhbGxhYmxlKGNiKTtcblx0Zm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5LCB0YXJnZXRPYmosIGluZGV4KSB7XG5cdFx0cmVzdWx0W2tleV0gPSBjYWxsLmNhbGwoY2IsIHRoaXNBcmcsIHZhbHVlLCBrZXksIHRhcmdldE9iaiwgaW5kZXgpO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb3B5ICAgICAgICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvY29weScpXG4gICwgbm9ybWFsaXplT3B0aW9ucyA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zJylcbiAgLCBlbnN1cmVDYWxsYWJsZSAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUnKVxuICAsIG1hcCAgICAgICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC9tYXAnKVxuICAsIGNhbGxhYmxlICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG4gICwgdmFsaWRWYWx1ZSAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLXZhbHVlJylcblxuICAsIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCwgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBkZWZpbmU7XG5cbmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXNjLCBvcHRpb25zKSB7XG5cdHZhciB2YWx1ZSA9IHZhbGlkVmFsdWUoZGVzYykgJiYgY2FsbGFibGUoZGVzYy52YWx1ZSksIGRncztcblx0ZGdzID0gY29weShkZXNjKTtcblx0ZGVsZXRlIGRncy53cml0YWJsZTtcblx0ZGVsZXRlIGRncy52YWx1ZTtcblx0ZGdzLmdldCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIW9wdGlvbnMub3ZlcndyaXRlRGVmaW5pdGlvbiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUpKSByZXR1cm4gdmFsdWU7XG5cdFx0ZGVzYy52YWx1ZSA9IGJpbmQuY2FsbCh2YWx1ZSwgb3B0aW9ucy5yZXNvbHZlQ29udGV4dCA/IG9wdGlvbnMucmVzb2x2ZUNvbnRleHQodGhpcykgOiB0aGlzKTtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkZXNjKTtcblx0XHRyZXR1cm4gdGhpc1tuYW1lXTtcblx0fTtcblx0cmV0dXJuIGRncztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BzLyosIG9wdGlvbnMqLykge1xuXHR2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMoYXJndW1lbnRzWzFdKTtcblx0aWYgKG9wdGlvbnMucmVzb2x2ZUNvbnRleHQgIT0gbnVsbCkgZW5zdXJlQ2FsbGFibGUob3B0aW9ucy5yZXNvbHZlQ29udGV4dCk7XG5cdHJldHVybiBtYXAocHJvcHMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7IHJldHVybiBkZWZpbmUobmFtZSwgZGVzYywgb3B0aW9ucyk7IH0pO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2xlYXIgICAgPSByZXF1aXJlKFwiZXM1LWV4dC9hcnJheS8jL2NsZWFyXCIpXG4gICwgYXNzaWduICAgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3QvYXNzaWduXCIpXG4gICwgY2FsbGFibGUgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGVcIilcbiAgLCB2YWx1ZSAgICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC92YWxpZC12YWx1ZVwiKVxuICAsIGQgICAgICAgID0gcmVxdWlyZShcImRcIilcbiAgLCBhdXRvQmluZCA9IHJlcXVpcmUoXCJkL2F1dG8tYmluZFwiKVxuICAsIFN5bWJvbCAgID0gcmVxdWlyZShcImVzNi1zeW1ib2xcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLCBJdGVyYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBJdGVyYXRvciA9IGZ1bmN0aW9uIChsaXN0LCBjb250ZXh0KSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBJdGVyYXRvcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb25zdHJ1Y3RvciByZXF1aXJlcyAnbmV3J1wiKTtcblx0ZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cdFx0X19saXN0X186IGQoXCJ3XCIsIHZhbHVlKGxpc3QpKSxcblx0XHRfX2NvbnRleHRfXzogZChcIndcIiwgY29udGV4dCksXG5cdFx0X19uZXh0SW5kZXhfXzogZChcIndcIiwgMClcblx0fSk7XG5cdGlmICghY29udGV4dCkgcmV0dXJuO1xuXHRjYWxsYWJsZShjb250ZXh0Lm9uKTtcblx0Y29udGV4dC5vbihcIl9hZGRcIiwgdGhpcy5fb25BZGQpO1xuXHRjb250ZXh0Lm9uKFwiX2RlbGV0ZVwiLCB0aGlzLl9vbkRlbGV0ZSk7XG5cdGNvbnRleHQub24oXCJfY2xlYXJcIiwgdGhpcy5fb25DbGVhcik7XG59O1xuXG4vLyBJbnRlcm5hbCAlSXRlcmF0b3JQcm90b3R5cGUlIGRvZXNuJ3QgZXhwb3NlIGl0cyBjb25zdHJ1Y3RvclxuZGVsZXRlIEl0ZXJhdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZGVmaW5lUHJvcGVydGllcyhcblx0SXRlcmF0b3IucHJvdG90eXBlLFxuXHRhc3NpZ24oXG5cdFx0e1xuXHRcdFx0X25leHQ6IGQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgaTtcblx0XHRcdFx0aWYgKCF0aGlzLl9fbGlzdF9fKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRpZiAodGhpcy5fX3JlZG9fXykge1xuXHRcdFx0XHRcdGkgPSB0aGlzLl9fcmVkb19fLnNoaWZ0KCk7XG5cdFx0XHRcdFx0aWYgKGkgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX19uZXh0SW5kZXhfXyA8IHRoaXMuX19saXN0X18ubGVuZ3RoKSByZXR1cm4gdGhpcy5fX25leHRJbmRleF9fKys7XG5cdFx0XHRcdHRoaXMuX3VuQmluZCgpO1xuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0fSksXG5cdFx0XHRuZXh0OiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2NyZWF0ZVJlc3VsdCh0aGlzLl9uZXh0KCkpO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlUmVzdWx0OiBkKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdGlmIChpID09PSB1bmRlZmluZWQpIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcblx0XHRcdFx0cmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0aGlzLl9yZXNvbHZlKGkpIH07XG5cdFx0XHR9KSxcblx0XHRcdF9yZXNvbHZlOiBkKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9fbGlzdF9fW2ldO1xuXHRcdFx0fSksXG5cdFx0XHRfdW5CaW5kOiBkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy5fX2xpc3RfXyA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fcmVkb19fO1xuXHRcdFx0XHRpZiAoIXRoaXMuX19jb250ZXh0X18pIHJldHVybjtcblx0XHRcdFx0dGhpcy5fX2NvbnRleHRfXy5vZmYoXCJfYWRkXCIsIHRoaXMuX29uQWRkKTtcblx0XHRcdFx0dGhpcy5fX2NvbnRleHRfXy5vZmYoXCJfZGVsZXRlXCIsIHRoaXMuX29uRGVsZXRlKTtcblx0XHRcdFx0dGhpcy5fX2NvbnRleHRfXy5vZmYoXCJfY2xlYXJcIiwgdGhpcy5fb25DbGVhcik7XG5cdFx0XHRcdHRoaXMuX19jb250ZXh0X18gPSBudWxsO1xuXHRcdFx0fSksXG5cdFx0XHR0b1N0cmluZzogZChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBcIltvYmplY3QgXCIgKyAodGhpc1tTeW1ib2wudG9TdHJpbmdUYWddIHx8IFwiT2JqZWN0XCIpICsgXCJdXCI7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0YXV0b0JpbmQoe1xuXHRcdFx0X29uQWRkOiBkKGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdFx0XHRpZiAoaW5kZXggPj0gdGhpcy5fX25leHRJbmRleF9fKSByZXR1cm47XG5cdFx0XHRcdCsrdGhpcy5fX25leHRJbmRleF9fO1xuXHRcdFx0XHRpZiAoIXRoaXMuX19yZWRvX18pIHtcblx0XHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9fcmVkb19fXCIsIGQoXCJjXCIsIFtpbmRleF0pKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fX3JlZG9fXy5mb3JFYWNoKGZ1bmN0aW9uIChyZWRvLCBpKSB7XG5cdFx0XHRcdFx0aWYgKHJlZG8gPj0gaW5kZXgpIHRoaXMuX19yZWRvX19baV0gPSArK3JlZG87XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHR0aGlzLl9fcmVkb19fLnB1c2goaW5kZXgpO1xuXHRcdFx0fSksXG5cdFx0XHRfb25EZWxldGU6IGQoZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0XHRcdHZhciBpO1xuXHRcdFx0XHRpZiAoaW5kZXggPj0gdGhpcy5fX25leHRJbmRleF9fKSByZXR1cm47XG5cdFx0XHRcdC0tdGhpcy5fX25leHRJbmRleF9fO1xuXHRcdFx0XHRpZiAoIXRoaXMuX19yZWRvX18pIHJldHVybjtcblx0XHRcdFx0aSA9IHRoaXMuX19yZWRvX18uaW5kZXhPZihpbmRleCk7XG5cdFx0XHRcdGlmIChpICE9PSAtMSkgdGhpcy5fX3JlZG9fXy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHRoaXMuX19yZWRvX18uZm9yRWFjaChmdW5jdGlvbiAocmVkbywgaikge1xuXHRcdFx0XHRcdGlmIChyZWRvID4gaW5kZXgpIHRoaXMuX19yZWRvX19bal0gPSAtLXJlZG87XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0fSksXG5cdFx0XHRfb25DbGVhcjogZChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9fcmVkb19fKSBjbGVhci5jYWxsKHRoaXMuX19yZWRvX18pO1xuXHRcdFx0XHR0aGlzLl9fbmV4dEluZGV4X18gPSAwO1xuXHRcdFx0fSlcblx0XHR9KVxuXHQpXG4pO1xuXG5kZWZpbmVQcm9wZXJ0eShcblx0SXRlcmF0b3IucHJvdG90eXBlLFxuXHRTeW1ib2wuaXRlcmF0b3IsXG5cdGQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9KVxuKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKVxuICAsIGNvbnRhaW5zICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvc3RyaW5nLyMvY29udGFpbnNcIilcbiAgLCBkICAgICAgICAgICAgICA9IHJlcXVpcmUoXCJkXCIpXG4gICwgU3ltYm9sICAgICAgICAgPSByZXF1aXJlKFwiZXM2LXN5bWJvbFwiKVxuICAsIEl0ZXJhdG9yICAgICAgID0gcmVxdWlyZShcIi4vXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksIEFycmF5SXRlcmF0b3I7XG5cbkFycmF5SXRlcmF0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcnIsIGtpbmQpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIEFycmF5SXRlcmF0b3IpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgcmVxdWlyZXMgJ25ldydcIik7XG5cdEl0ZXJhdG9yLmNhbGwodGhpcywgYXJyKTtcblx0aWYgKCFraW5kKSBraW5kID0gXCJ2YWx1ZVwiO1xuXHRlbHNlIGlmIChjb250YWlucy5jYWxsKGtpbmQsIFwia2V5K3ZhbHVlXCIpKSBraW5kID0gXCJrZXkrdmFsdWVcIjtcblx0ZWxzZSBpZiAoY29udGFpbnMuY2FsbChraW5kLCBcImtleVwiKSkga2luZCA9IFwia2V5XCI7XG5cdGVsc2Uga2luZCA9IFwidmFsdWVcIjtcblx0ZGVmaW5lUHJvcGVydHkodGhpcywgXCJfX2tpbmRfX1wiLCBkKFwiXCIsIGtpbmQpKTtcbn07XG5pZiAoc2V0UHJvdG90eXBlT2YpIHNldFByb3RvdHlwZU9mKEFycmF5SXRlcmF0b3IsIEl0ZXJhdG9yKTtcblxuLy8gSW50ZXJuYWwgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlIGRvZXNuJ3QgZXhwb3NlIGl0cyBjb25zdHJ1Y3RvclxuZGVsZXRlIEFycmF5SXRlcmF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG5BcnJheUl0ZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3IucHJvdG90eXBlLCB7XG5cdF9yZXNvbHZlOiBkKGZ1bmN0aW9uIChpKSB7XG5cdFx0aWYgKHRoaXMuX19raW5kX18gPT09IFwidmFsdWVcIikgcmV0dXJuIHRoaXMuX19saXN0X19baV07XG5cdFx0aWYgKHRoaXMuX19raW5kX18gPT09IFwia2V5K3ZhbHVlXCIpIHJldHVybiBbaSwgdGhpcy5fX2xpc3RfX1tpXV07XG5cdFx0cmV0dXJuIGk7XG5cdH0pXG59KTtcbmRlZmluZVByb3BlcnR5KEFycmF5SXRlcmF0b3IucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIGQoXCJjXCIsIFwiQXJyYXkgSXRlcmF0b3JcIikpO1xuIiwiLy8gVGhhbmtzIEBtYXRoaWFzYnluZW5zXG4vLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUjaXRlcmF0aW5nLW92ZXItc3ltYm9sc1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcImVzNS1leHQvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIilcbiAgLCBkICAgICAgICAgICAgICA9IHJlcXVpcmUoXCJkXCIpXG4gICwgU3ltYm9sICAgICAgICAgPSByZXF1aXJlKFwiZXM2LXN5bWJvbFwiKVxuICAsIEl0ZXJhdG9yICAgICAgID0gcmVxdWlyZShcIi4vXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksIFN0cmluZ0l0ZXJhdG9yO1xuXG5TdHJpbmdJdGVyYXRvciA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgU3RyaW5nSXRlcmF0b3IpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgcmVxdWlyZXMgJ25ldydcIik7XG5cdHN0ciA9IFN0cmluZyhzdHIpO1xuXHRJdGVyYXRvci5jYWxsKHRoaXMsIHN0cik7XG5cdGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX19sZW5ndGhfX1wiLCBkKFwiXCIsIHN0ci5sZW5ndGgpKTtcbn07XG5pZiAoc2V0UHJvdG90eXBlT2YpIHNldFByb3RvdHlwZU9mKFN0cmluZ0l0ZXJhdG9yLCBJdGVyYXRvcik7XG5cbi8vIEludGVybmFsICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJSBkb2Vzbid0IGV4cG9zZSBpdHMgY29uc3RydWN0b3JcbmRlbGV0ZSBTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cblN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3IucHJvdG90eXBlLCB7XG5cdF9uZXh0OiBkKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRoaXMuX19saXN0X18pIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMuX19uZXh0SW5kZXhfXyA8IHRoaXMuX19sZW5ndGhfXykgcmV0dXJuIHRoaXMuX19uZXh0SW5kZXhfXysrO1xuXHRcdHRoaXMuX3VuQmluZCgpO1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH0pLFxuXHRfcmVzb2x2ZTogZChmdW5jdGlvbiAoaSkge1xuXHRcdHZhciBjaGFyID0gdGhpcy5fX2xpc3RfX1tpXSwgY29kZTtcblx0XHRpZiAodGhpcy5fX25leHRJbmRleF9fID09PSB0aGlzLl9fbGVuZ3RoX18pIHJldHVybiBjaGFyO1xuXHRcdGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cdFx0aWYgKGNvZGUgPj0gMHhkODAwICYmIGNvZGUgPD0gMHhkYmZmKSByZXR1cm4gY2hhciArIHRoaXMuX19saXN0X19bdGhpcy5fX25leHRJbmRleF9fKytdO1xuXHRcdHJldHVybiBjaGFyO1xuXHR9KVxufSk7XG5kZWZpbmVQcm9wZXJ0eShTdHJpbmdJdGVyYXRvci5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywgZChcImNcIiwgXCJTdHJpbmcgSXRlcmF0b3JcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc0FyZ3VtZW50cyAgICA9IHJlcXVpcmUoXCJlczUtZXh0L2Z1bmN0aW9uL2lzLWFyZ3VtZW50c1wiKVxuICAsIGlzU3RyaW5nICAgICAgID0gcmVxdWlyZShcImVzNS1leHQvc3RyaW5nL2lzLXN0cmluZ1wiKVxuICAsIEFycmF5SXRlcmF0b3IgID0gcmVxdWlyZShcIi4vYXJyYXlcIilcbiAgLCBTdHJpbmdJdGVyYXRvciA9IHJlcXVpcmUoXCIuL3N0cmluZ1wiKVxuICAsIGl0ZXJhYmxlICAgICAgID0gcmVxdWlyZShcIi4vdmFsaWQtaXRlcmFibGVcIilcbiAgLCBpdGVyYXRvclN5bWJvbCA9IHJlcXVpcmUoXCJlczYtc3ltYm9sXCIpLml0ZXJhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKHR5cGVvZiBpdGVyYWJsZShvYmopW2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gb2JqW2l0ZXJhdG9yU3ltYm9sXSgpO1xuXHRpZiAoaXNBcmd1bWVudHMob2JqKSkgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKG9iaik7XG5cdGlmIChpc1N0cmluZyhvYmopKSByZXR1cm4gbmV3IFN0cmluZ0l0ZXJhdG9yKG9iaik7XG5cdHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcihvYmopO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKFwiZXM1LWV4dC9mdW5jdGlvbi9pcy1hcmd1bWVudHNcIilcbiAgLCBjYWxsYWJsZSAgICA9IHJlcXVpcmUoXCJlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZVwiKVxuICAsIGlzU3RyaW5nICAgID0gcmVxdWlyZShcImVzNS1leHQvc3RyaW5nL2lzLXN0cmluZ1wiKVxuICAsIGdldCAgICAgICAgID0gcmVxdWlyZShcIi4vZ2V0XCIpO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXksIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgY2IgLyosIHRoaXNBcmcqLykge1xuXHR2YXIgbW9kZSwgdGhpc0FyZyA9IGFyZ3VtZW50c1syXSwgcmVzdWx0LCBkb0JyZWFrLCBicm9rZW4sIGksIGxlbmd0aCwgY2hhciwgY29kZTtcblx0aWYgKGlzQXJyYXkoaXRlcmFibGUpIHx8IGlzQXJndW1lbnRzKGl0ZXJhYmxlKSkgbW9kZSA9IFwiYXJyYXlcIjtcblx0ZWxzZSBpZiAoaXNTdHJpbmcoaXRlcmFibGUpKSBtb2RlID0gXCJzdHJpbmdcIjtcblx0ZWxzZSBpdGVyYWJsZSA9IGdldChpdGVyYWJsZSk7XG5cblx0Y2FsbGFibGUoY2IpO1xuXHRkb0JyZWFrID0gZnVuY3Rpb24gKCkge1xuXHRcdGJyb2tlbiA9IHRydWU7XG5cdH07XG5cdGlmIChtb2RlID09PSBcImFycmF5XCIpIHtcblx0XHRzb21lLmNhbGwoaXRlcmFibGUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0Y2FsbC5jYWxsKGNiLCB0aGlzQXJnLCB2YWx1ZSwgZG9CcmVhayk7XG5cdFx0XHRyZXR1cm4gYnJva2VuO1xuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAobW9kZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGxlbmd0aCA9IGl0ZXJhYmxlLmxlbmd0aDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdGNoYXIgPSBpdGVyYWJsZVtpXTtcblx0XHRcdGlmIChpICsgMSA8IGxlbmd0aCkge1xuXHRcdFx0XHRjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXHRcdFx0XHRpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRiZmYpIGNoYXIgKz0gaXRlcmFibGVbKytpXTtcblx0XHRcdH1cblx0XHRcdGNhbGwuY2FsbChjYiwgdGhpc0FyZywgY2hhciwgZG9CcmVhayk7XG5cdFx0XHRpZiAoYnJva2VuKSBicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJlc3VsdCA9IGl0ZXJhYmxlLm5leHQoKTtcblxuXHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0Y2FsbC5jYWxsKGNiLCB0aGlzQXJnLCByZXN1bHQudmFsdWUsIGRvQnJlYWspO1xuXHRcdGlmIChicm9rZW4pIHJldHVybjtcblx0XHRyZXN1bHQgPSBpdGVyYWJsZS5uZXh0KCk7XG5cdH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXRQcm90b3R5cGVPZiAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YnKVxuICAsIGNvbnRhaW5zICAgICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucycpXG4gICwgZCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBJdGVyYXRvciAgICAgICAgICA9IHJlcXVpcmUoJ2VzNi1pdGVyYXRvcicpXG4gICwgdG9TdHJpbmdUYWdTeW1ib2wgPSByZXF1aXJlKCdlczYtc3ltYm9sJykudG9TdHJpbmdUYWdcblxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgU2V0SXRlcmF0b3I7XG5cblNldEl0ZXJhdG9yID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2V0LCBraW5kKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZXRJdGVyYXRvcikpIHJldHVybiBuZXcgU2V0SXRlcmF0b3Ioc2V0LCBraW5kKTtcblx0SXRlcmF0b3IuY2FsbCh0aGlzLCBzZXQuX19zZXREYXRhX18sIHNldCk7XG5cdGlmICgha2luZCkga2luZCA9ICd2YWx1ZSc7XG5cdGVsc2UgaWYgKGNvbnRhaW5zLmNhbGwoa2luZCwgJ2tleSt2YWx1ZScpKSBraW5kID0gJ2tleSt2YWx1ZSc7XG5cdGVsc2Uga2luZCA9ICd2YWx1ZSc7XG5cdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2tpbmRfXycsIGQoJycsIGtpbmQpKTtcbn07XG5pZiAoc2V0UHJvdG90eXBlT2YpIHNldFByb3RvdHlwZU9mKFNldEl0ZXJhdG9yLCBJdGVyYXRvcik7XG5cblNldEl0ZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3IucHJvdG90eXBlLCB7XG5cdGNvbnN0cnVjdG9yOiBkKFNldEl0ZXJhdG9yKSxcblx0X3Jlc29sdmU6IGQoZnVuY3Rpb24gKGkpIHtcblx0XHRpZiAodGhpcy5fX2tpbmRfXyA9PT0gJ3ZhbHVlJykgcmV0dXJuIHRoaXMuX19saXN0X19baV07XG5cdFx0cmV0dXJuIFt0aGlzLl9fbGlzdF9fW2ldLCB0aGlzLl9fbGlzdF9fW2ldXTtcblx0fSksXG5cdHRvU3RyaW5nOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuICdbb2JqZWN0IFNldCBJdGVyYXRvcl0nOyB9KVxufSk7XG5kZWZpbmVQcm9wZXJ0eShTZXRJdGVyYXRvci5wcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBkKCdjJywgJ1NldCBJdGVyYXRvcicpKTtcbiIsIi8vIEV4cG9ydHMgdHJ1ZSBpZiBlbnZpcm9ubWVudCBwcm92aWRlcyBuYXRpdmUgYFNldGAgaW1wbGVtZW50YXRpb24sXG4vLyB3aGF0ZXZlciB0aGF0IGlzLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFNldC5wcm90b3R5cGUpID09PSAnW29iamVjdCBTZXRdJyk7XG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xlYXIgICAgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L2FycmF5LyMvY2xlYXInKVxuICAsIGVJbmRleE9mICAgICAgID0gcmVxdWlyZSgnZXM1LWV4dC9hcnJheS8jL2UtaW5kZXgtb2YnKVxuICAsIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZicpXG4gICwgY2FsbGFibGUgICAgICAgPSByZXF1aXJlKCdlczUtZXh0L29iamVjdC92YWxpZC1jYWxsYWJsZScpXG4gICwgZCAgICAgICAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBlZSAgICAgICAgICAgICA9IHJlcXVpcmUoJ2V2ZW50LWVtaXR0ZXInKVxuICAsIFN5bWJvbCAgICAgICAgID0gcmVxdWlyZSgnZXM2LXN5bWJvbCcpXG4gICwgaXRlcmF0b3IgICAgICAgPSByZXF1aXJlKCdlczYtaXRlcmF0b3IvdmFsaWQtaXRlcmFibGUnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnZXM2LWl0ZXJhdG9yL2Zvci1vZicpXG4gICwgSXRlcmF0b3IgICAgICAgPSByZXF1aXJlKCcuL2xpYi9pdGVyYXRvcicpXG4gICwgaXNOYXRpdmUgICAgICAgPSByZXF1aXJlKCcuL2lzLW5hdGl2ZS1pbXBsZW1lbnRlZCcpXG5cbiAgLCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2ZcbiAgLCBTZXRQb2x5LCBnZXRWYWx1ZXMsIE5hdGl2ZVNldDtcblxuaWYgKGlzTmF0aXZlKSBOYXRpdmVTZXQgPSBTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0UG9seSA9IGZ1bmN0aW9uIFNldCgvKml0ZXJhYmxlKi8pIHtcblx0dmFyIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdLCBzZWxmO1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgU2V0UG9seSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnN0cnVjdG9yIHJlcXVpcmVzIFxcJ25ld1xcJycpO1xuXHRpZiAoaXNOYXRpdmUgJiYgc2V0UHJvdG90eXBlT2YpIHNlbGYgPSBzZXRQcm90b3R5cGVPZihuZXcgTmF0aXZlU2V0KCksIGdldFByb3RvdHlwZU9mKHRoaXMpKTtcblx0ZWxzZSBzZWxmID0gdGhpcztcblx0aWYgKGl0ZXJhYmxlICE9IG51bGwpIGl0ZXJhdG9yKGl0ZXJhYmxlKTtcblx0ZGVmaW5lUHJvcGVydHkoc2VsZiwgJ19fc2V0RGF0YV9fJywgZCgnYycsIFtdKSk7XG5cdGlmICghaXRlcmFibGUpIHJldHVybiBzZWxmO1xuXHRmb3JPZihpdGVyYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0aWYgKGVJbmRleE9mLmNhbGwodGhpcywgdmFsdWUpICE9PSAtMSkgcmV0dXJuO1xuXHRcdHRoaXMucHVzaCh2YWx1ZSk7XG5cdH0sIHNlbGYuX19zZXREYXRhX18pO1xuXHRyZXR1cm4gc2VsZjtcbn07XG5cbmlmIChpc05hdGl2ZSkge1xuXHRpZiAoc2V0UHJvdG90eXBlT2YpIHNldFByb3RvdHlwZU9mKFNldFBvbHksIE5hdGl2ZVNldCk7XG5cdFNldFBvbHkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShOYXRpdmVTZXQucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiBkKFNldFBvbHkpIH0pO1xufVxuXG5lZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTZXRQb2x5LnByb3RvdHlwZSwge1xuXHRhZGQ6IGQoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuaGFzKHZhbHVlKSkgcmV0dXJuIHRoaXM7XG5cdFx0dGhpcy5lbWl0KCdfYWRkJywgdGhpcy5fX3NldERhdGFfXy5wdXNoKHZhbHVlKSAtIDEsIHZhbHVlKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSksXG5cdGNsZWFyOiBkKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRoaXMuX19zZXREYXRhX18ubGVuZ3RoKSByZXR1cm47XG5cdFx0Y2xlYXIuY2FsbCh0aGlzLl9fc2V0RGF0YV9fKTtcblx0XHR0aGlzLmVtaXQoJ19jbGVhcicpO1xuXHR9KSxcblx0ZGVsZXRlOiBkKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHZhciBpbmRleCA9IGVJbmRleE9mLmNhbGwodGhpcy5fX3NldERhdGFfXywgdmFsdWUpO1xuXHRcdGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcblx0XHR0aGlzLl9fc2V0RGF0YV9fLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5lbWl0KCdfZGVsZXRlJywgaW5kZXgsIHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSksXG5cdGVudHJpZXM6IGQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yKHRoaXMsICdrZXkrdmFsdWUnKTsgfSksXG5cdGZvckVhY2g6IGQoZnVuY3Rpb24gKGNiLyosIHRoaXNBcmcqLykge1xuXHRcdHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdLCBpdGVyYXRvciwgcmVzdWx0LCB2YWx1ZTtcblx0XHRjYWxsYWJsZShjYik7XG5cdFx0aXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpO1xuXHRcdHJlc3VsdCA9IGl0ZXJhdG9yLl9uZXh0KCk7XG5cdFx0d2hpbGUgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YWx1ZSA9IGl0ZXJhdG9yLl9yZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRjYWxsLmNhbGwoY2IsIHRoaXNBcmcsIHZhbHVlLCB2YWx1ZSwgdGhpcyk7XG5cdFx0XHRyZXN1bHQgPSBpdGVyYXRvci5fbmV4dCgpO1xuXHRcdH1cblx0fSksXG5cdGhhczogZChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gKGVJbmRleE9mLmNhbGwodGhpcy5fX3NldERhdGFfXywgdmFsdWUpICE9PSAtMSk7XG5cdH0pLFxuXHRrZXlzOiBkKGdldFZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudmFsdWVzKCk7IH0pLFxuXHRzaXplOiBkLmdzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX19zZXREYXRhX18ubGVuZ3RoOyB9KSxcblx0dmFsdWVzOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzKTsgfSksXG5cdHRvU3RyaW5nOiBkKGZ1bmN0aW9uICgpIHsgcmV0dXJuICdbb2JqZWN0IFNldF0nOyB9KVxufSkpO1xuZGVmaW5lUHJvcGVydHkoU2V0UG9seS5wcm90b3R5cGUsIFN5bWJvbC5pdGVyYXRvciwgZChnZXRWYWx1ZXMpKTtcbmRlZmluZVByb3BlcnR5KFNldFBvbHkucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIGQoJ2MnLCAnU2V0JykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaXMtaW1wbGVtZW50ZWQnKSgpID8gU2V0IDogcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuIiwiXG5cbmZ1bmN0aW9uIHF1YWRzVG9UcmlzKGNlbGxzKSB7XG5cbiAgICB2YXIgbmV3Q2VsbHMgPSBbXTtcblxuICAgIGZvciAodmFyIGlDZWxsID0gMDsgaUNlbGwgPCBjZWxscy5sZW5ndGg7ICsraUNlbGwpIHtcblxuICAgICAgICB2YXIgY2VsbCA9IGNlbGxzW2lDZWxsXTtcblxuICAgICAgICBuZXdDZWxscy5wdXNoKFtjZWxsWzBdLCBjZWxsWzFdLCBjZWxsWzJdXSk7XG4gICAgICAgIG5ld0NlbGxzLnB1c2goW2NlbGxbMF0sIGNlbGxbMl0sIGNlbGxbM11dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Q2VsbHM7XG59XG5cbm1vZHVsZS5leHBvcnRzPSBxdWFkc1RvVHJpcztcblxuXG4iLCIvKipcbiAqIGV4cG9ydHMgdm94ZWwtdG8tbWVzaFxuICovXG5cbmltcG9ydCBjYXRtdWxsIGZyb20gJ2dsLWNhdG11bGwtY2xhcmsnXG5pbXBvcnQgcXVhZHNUb1RyaXMgZnJvbSAnZ2wtcXVhZHMtdG8tdHJpcydcblxuY29uc3Qgb3B0cyA9IHtcbiAgY29udmVydFRvVHJpYW5nbGVzOiB0cnVlLFxuICBmbGF0dGVuOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZveGVsVG9NZXNoXG5cbmZ1bmN0aW9uIHZveGVsVG9NZXNoKHZveGVsRGF0YSwgb3B0aW9ucykge1xuXG4gIE9iamVjdC5hc3NpZ24ob3B0cywgb3B0aW9ucylcblxuICBsZXQgdm94T2JqID0gcGFyc2VEYXRhKHZveGVsRGF0YSlcblxuICB2b3hPYmogPSByZW1vdmVEdXBsaWNhdGVGYWNlcyh2b3hPYmopXG4gIHZveE9iaiA9IHJlbW92ZVVudXNlZFZlcnRpY2VzKHZveE9iailcblxuICBpZiAob3B0cy5jb252ZXJ0VG9UcmlhbmdsZXMpIHtcbiAgICB2b3hPYmouaW5kaWNlcyA9IHF1YWRzVG9UcmlzKHZveE9iai5pbmRpY2VzKVxuICAgIHZveE9iai5jb2xvcnMgPSB2b3hPYmouY29sb3JzLnJlZHVjZSgoYXJyLCBjb2xvcikgPT4gYXJyLmNvbmNhdChbY29sb3IsIGNvbG9yXSksW10pXG4gIH1cblxuICBpZiAob3B0cy5mbGF0dGVuKSB7XG4gICAgY29uc3QgZmxhdHRlbiA9IChhLGIpID0+IGEuY29uY2F0KGIpXG4gICAgdm94T2JqLmluZGljZXMgPSB2b3hPYmouaW5kaWNlcy5yZWR1Y2UoZmxhdHRlbiwgW10pXG4gICAgdm94T2JqLnZlcnRpY2VzID0gdm94T2JqLnZlcnRpY2VzLnJlZHVjZShmbGF0dGVuLCBbXSlcbiAgICB2b3hPYmouY29sb3JzID0gdm94T2JqLmNvbG9ycy5yZWR1Y2UoZmxhdHRlbiwgW10pXG4gIH1cbiAgcmV0dXJuIHZveE9ialxufVxuXG5mdW5jdGlvbiBtYWtlQ29weUNhdChpbmRleCkge1xuICBsZXQgdGFibGUgPSBuZXcgU2V0KClcbiAgY29uc3QgbWFrZUNhdCA9IGkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaSxcbiAgICAgIGdldCB0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRhYmxlXG4gICAgICB9LFxuICAgICAgc2V0IHRhYmxlKHQpIHtcbiAgICAgICAgdGFibGUgPSB0XG4gICAgICB9LFxuICAgICAgdXBkYXRlKGNvcHlDYXQpIHtcbiAgICAgICAgdGFibGUgPSBjb3B5Q2F0LnRhYmxlID0gbmV3IFNldChbLi4udGFibGUsIC4uLmNvcHlDYXQudGFibGVdKVxuICAgICAgICB0YWJsZS5mb3JFYWNoKGNhdCA9PiB7XG4gICAgICAgICAgY2F0LnZhbHVlID0gY29weUNhdC52YWx1ZVxuICAgICAgICAgIGNhdC50YWJsZSA9IHRhYmxlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IGFub3RoZXJDYXQgPSBtYWtlQ2F0KHRoaXMudmFsdWUpXG4gICAgICAgIHRhYmxlLmFkZChhbm90aGVyQ2F0KVxuICAgICAgICByZXR1cm4gYW5vdGhlckNhdFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBuZXdDYXQgPSBtYWtlQ2F0KGluZGV4KVxuICB0YWJsZS5hZGQobmV3Q2F0KVxuICByZXR1cm4gbmV3Q2F0XG59XG5cbmZ1bmN0aW9uIG5ld0JveCh4eXosIGNlbGxPZmZzZXQpIHtcbiAgY29uc3Qgc3VtVmVjID0gKHYxLCB2MikgPT4gdjEubWFwKCh2YWwsIGluZGV4KSA9PiB2YWwgKyB2MltpbmRleF0pXG4gIGNvbnN0IHBPZmZzZXQgPSBzdW1WZWMuYmluZChudWxsLCB4eXopXG5cbiAgY29uc3QgW2EsIGIsIGMsIGQsIGUsIGYsIGcsIGhdID0gW1xuICAgIFswLCAwLCAwXSxcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDEsIDBdLFxuICAgIFswLCAxLCAxXSxcbiAgICBbMSwgMCwgMF0sXG4gICAgWzEsIDAsIDFdLFxuICAgIFsxLCAxLCAwXSxcbiAgICBbMSwgMSwgMV1cbiAgXS5tYXAocE9mZnNldClcblxuICBjb25zdCB2ZXJ0aWNlcyA9IFthLCBiLCBjLCBkLCBlLCBmLCBnLCBoXVxuXG4gIGNvbnN0IFtjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzddID0gW1xuICAgIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDdcbiAgXS5tYXAoYyA9PiBtYWtlQ29weUNhdChjICsgY2VsbE9mZnNldCkpXG5cbiAgY29uc3QgY29weSA9IGNhdCA9PiBjYXQuY2xvbmUoKVxuXG4gIGNvbnN0IGluZGljZXMgPSBbXG4gICAgW2MyLCBjMywgYzEsIGMwXSwgLy9vcmlnaW5hbHNcbiAgICBbYzQsIGM1LCBjNywgYzZdLCAvL29yaWdpbmFsc1xuXG4gICAgW2MzLCBjNywgYzUsIGMxXS5tYXAoY29weSksIFtjMCwgYzQsIGM2LCBjMl0ubWFwKGNvcHkpLFxuICAgIFtjMSwgYzUsIGM0LCBjMF0ubWFwKGNvcHkpLCBbYzIsIGM2LCBjNywgYzNdLm1hcChjb3B5KVxuICBdXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlcyxcbiAgICBpbmRpY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRhKHZveGVsRGF0YSkge1xuXG4gIGxldCB2ZXJ0aWNlcyA9IFtdLFxuICAgIGluZGljZXMgPSBbXSxcbiAgICBjb2xvcnMgPSBbXVxuICBsZXQgY2VsbE9mZnNldCA9IDBcbiAgY29uc3QgREVGQVVMVF9DT0xPUiA9IFswLDAsMCwxXVxuICBjb25zdCBWRVJUU19QRVJfQ1VCRSA9IDhcbiAgY29uc3QgRkFDRVNfUEVSX1JFQ1QgPSA2XG5cbiAgdm94ZWxEYXRhLmZvckVhY2godm94ZWwgPT4ge1xuICAgIGNvbnN0IGN1YmUgPSBuZXdCb3godm94ZWwuc2xpY2UoMCwgMyksIGNlbGxPZmZzZXQpXG4gICAgY2VsbE9mZnNldCArPSBWRVJUU19QRVJfQ1VCRVxuICAgIGNvbnN0IGNvbG9yID0gdm94ZWxbM10gfHwgREVGQVVMVF9DT0xPUlxuXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQoY3ViZS52ZXJ0aWNlcylcbiAgICBpbmRpY2VzID0gaW5kaWNlcy5jb25jYXQoY3ViZS5pbmRpY2VzKVxuICAgIGNvbG9ycyA9IGNvbG9ycy5jb25jYXQoQXJyYXkoRkFDRVNfUEVSX1JFQ1QpLmZpbGwoY29sb3IpKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgdmVydGljZXMsXG4gICAgaW5kaWNlcyxcbiAgICBjb2xvcnNcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVGYWNlcyh7XG4gIHZlcnRpY2VzLFxuICBpbmRpY2VzLFxuICBjb2xvcnNcbn0pIHtcblxuICBjb25zdCBpbmRpY2VNYXAgPSBuZXcgTWFwKClcbiAgY29uc3QgaW5kZXhXaGFja0xpc3QgPSBuZXcgU2V0KClcbiAgY29uc3Qga2V5aWZ5ID0gYXJyID0+IGFyci5tYXAodiA9PiB2ZXJ0aWNlc1t2XSkuc29ydCgpLmpvaW4oJy0nKVxuXG4gIGluZGljZXMgPSBpbmRpY2VzXG4gICAgLm1hcCgocmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGtleWlmeShyZWN0Lm1hcChyaSA9PiByaS52YWx1ZSkpXG4gICAgICBpZiAoaW5kaWNlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIGNvbnN0IGZhY2UgPSBpbmRpY2VNYXAuZ2V0KGtleSlcbiAgICAgICAgY29uc3QgZmFjZUluZGV4ID0gZmFjZS5pbmRleFxuICAgICAgICBpbmRleFdoYWNrTGlzdC5hZGQoaW5kZXgpLmFkZChmYWNlSW5kZXgpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChyaSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJldmVyc2VJbmRleCA9IDMgLSBpXG4gICAgICAgICAgcmkudXBkYXRlKGZhY2UucmVjdFtyZXZlcnNlSW5kZXhdKVxuICAgICAgICB9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VNYXAuc2V0KGtleSwge1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHJlY3RcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWN0XG4gICAgfSlcbiAgICAuZmlsdGVyKChfLCBpKSA9PiAhaW5kZXhXaGFja0xpc3QuaGFzKGkpKVxuICAgIC5tYXAocmVjdCA9PiByZWN0Lm1hcChyaSA9PiByaS52YWx1ZSkpXG5cbiAgY29sb3JzID0gY29sb3JzLmZpbHRlcigoY29sb3IsIGkpID0+ICFpbmRleFdoYWNrTGlzdC5oYXMoaSkpXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNlcyxcbiAgICBpbmRpY2VzLFxuICAgIGNvbG9yc1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVudXNlZFZlcnRpY2VzKHtcbiAgdmVydGljZXMsXG4gIGluZGljZXMsXG4gIGNvbG9yc1xufSkge1xuICBjb25zdCBuZXdWZXJ0aWNlcyA9IFtdXG4gIGNvbnN0IGluZGV4TWFwID0gbmV3IE1hcCgpXG4gIGxldCBpbmRleENvdW50ZXIgPSAwXG4gIGluZGljZXMgPSBpbmRpY2VzLm1hcChpbmRleEFycmF5ID0+IGluZGV4QXJyYXkubWFwKGluZGV4ID0+IHtcbiAgICBpZiAoIWluZGV4TWFwLmhhcyhpbmRleCkpIHtcbiAgICAgIGluZGV4TWFwLnNldChpbmRleCwgaW5kZXhDb3VudGVyKyspXG4gICAgfVxuICAgIGNvbnN0IGkgPSBpbmRleE1hcC5nZXQoaW5kZXgpXG4gICAgbmV3VmVydGljZXNbaV0gPSB2ZXJ0aWNlc1tpbmRleF1cbiAgICByZXR1cm4gaVxuICB9KSlcblxuICByZXR1cm4ge1xuICAgICd2ZXJ0aWNlcyc6IG5ld1ZlcnRpY2VzLFxuICAgIGluZGljZXMsXG4gICAgY29sb3JzXG4gIH1cbn1cblxuIiwiaW1wb3J0IHZveGVsVG9NZXNoIGZyb20gJy4uL3NyYy92b3hlbFRvTWVzaCdcblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyQ2FudmFzXCIpXG52YXIgZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKGNhbnZhcywgdHJ1ZSlcblxudmFyIGNyZWF0ZVNjZW5lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKGVuZ2luZSlcblxuICAvL3ZhciBsaWdodCA9IG5ldyBCQUJZTE9OLkRpcmVjdGlvbmFsTGlnaHQoXCJkaXJlY3RcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAxKSwgc2NlbmUpXG4gIHZhciBsaWdodCA9IG5ldyBCQUJZTE9OLkhlbWlzcGhlcmljTGlnaHQoXCJIZW1pTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpXG5cbiAgdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYTFcIiwgMCwgMCwgMCwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgc2NlbmUpXG4gIGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIC0zMCkpXG4gIGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgdHJ1ZSlcblxuICAvL0NyZWF0ZSBhIGN1c3RvbSBtZXNoXG4gIHZhciBjdXN0b21NZXNoID0gbmV3IEJBQllMT04uTWVzaChcImN1c3RvbVwiLCBzY2VuZSlcblxuICAvL3gseSx6LGNvbG9yXG4gIHZhciB2b3hlbHMgPSBbXG4gICAgWzEsIDEsIDEsIFswLDAsMCwxXV0sXG4gICAgWzEsIDEsIDAsIFsyNTUsIDAsIDAsIDFdXSxcbiAgICBbMCwgMSwgMSwgWzAsIDI1NSwgMCwgMV1dLFxuICAgIFswLCAxLCAwLCBbMCwgMCwgMjU1LCAxXV0sXG4gICAgWzAsIDEsIDAsIFsyNTUsIDAsIDI1NSwgMV1dLFxuICAgIFsxLCAwLCAxLCBbMCwgMjU1LCAwLCAxXV1cbiAgXVxuXG4gIGNvbnN0IG1lc2ggPSB2b3hlbFRvTWVzaCh2b3hlbHMpXG4gIHZhciBwb3NpdGlvbnMgPSBtZXNoLnZlcnRpY2VzXG4gIHZhciBpbmRpY2VzID0gbWVzaC5pbmRpY2VzXG4gIHZhciBjb2xvcnMgPSBtZXNoLmNvbG9yc1xuXG4gIC8vRW1wdHkgYXJyYXkgdG8gY29udGFpbiBjYWxjdWxhdGVkIHZhbHVlc1xuICB2YXIgbm9ybWFscyA9IFtdXG5cbiAgdmFyIHZlcnRleERhdGEgPSBuZXcgQkFCWUxPTi5WZXJ0ZXhEYXRhKClcbiAgQkFCWUxPTi5WZXJ0ZXhEYXRhLkNvbXB1dGVOb3JtYWxzKHBvc2l0aW9ucywgaW5kaWNlcywgbm9ybWFscylcblxuICAvL0Fzc2lnbiBwb3NpdGlvbnMsIGluZGljZXMgYW5kIG5vcm1hbHMgdG8gdmVydGV4RGF0YVxuICB2ZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IHBvc2l0aW9uc1xuICB2ZXJ0ZXhEYXRhLmluZGljZXMgPSBpbmRpY2VzXG4gIHZlcnRleERhdGEubm9ybWFscyA9IG5vcm1hbHNcbiAgdmVydGV4RGF0YS5jb2xvcnMgPSBjb2xvcnNcblxuICAvL0FwcGx5IHZlcnRleERhdGEgdG8gY3VzdG9tIG1lc2hcbiAgdmVydGV4RGF0YS5hcHBseVRvTWVzaChjdXN0b21NZXNoKVxuXG4gIHZhciBtYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoJ21hdGVyaWFsMDEnLCBzY2VuZSlcbiAgY3VzdG9tTWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsXG4gIG1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IHRydWVcbiAgbWF0ZXJpYWwud2lyZWZyYW1lID0gdHJ1ZVxuXG4gIHJldHVybiBzY2VuZVxufVxuXG52YXIgc2NlbmUgPSBjcmVhdGVTY2VuZSgpXG5cbmVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKCkge1xuICBzY2VuZS5yZW5kZXIoKVxufSlcblxuLy8gUmVzaXplXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgZW5naW5lLnJlc2l6ZSgpXG59KVxuXG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInZhbHVlIiwicmVxdWlyZSQkMSIsIm1heCIsImFicyIsImZsb29yIiwibnVtYmVySXNOYU4iLCJ0b1Bvc0ludCIsImNyZWF0ZSIsInNoaW0iLCJrZXlzIiwiZm9yRWFjaCIsImluZGV4T2YiLCJub3JtYWxpemVPcHRzIiwiY2FsbGFibGUiLCJkIiwiZGVmaW5lUHJvcGVydHkiLCJvYmpUb1N0cmluZyIsImlkIiwiaXRlcmF0b3JTeW1ib2wiLCJpc0FycmF5IiwiYUZyb20iLCJjYWxsIiwiZW5zdXJlQ2FsbGFibGUiLCJiaW5kIiwiY29weSIsIm1hcCIsImRlZmluZVByb3BlcnRpZXMiLCJTeW1ib2wiLCJJdGVyYXRvciIsIml0ZXJhYmxlIiwiQXJyYXlJdGVyYXRvciIsIlN0cmluZ0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJnZXRQcm90b3R5cGVPZiIsImlzTmF0aXZlIiwiZWUiLCJvcHRzIiwidm94ZWxUb01lc2giLCJ2b3hlbERhdGEiLCJvcHRpb25zIiwiYXNzaWduIiwidm94T2JqIiwicGFyc2VEYXRhIiwicmVtb3ZlRHVwbGljYXRlRmFjZXMiLCJyZW1vdmVVbnVzZWRWZXJ0aWNlcyIsImNvbnZlcnRUb1RyaWFuZ2xlcyIsImluZGljZXMiLCJxdWFkc1RvVHJpcyIsImNvbG9ycyIsInJlZHVjZSIsImFyciIsImNvbG9yIiwiY29uY2F0IiwiZmxhdHRlbiIsImEiLCJiIiwidmVydGljZXMiLCJtYWtlQ29weUNhdCIsImluZGV4IiwidGFibGUiLCJTZXQiLCJtYWtlQ2F0IiwiaSIsInQiLCJjb3B5Q2F0IiwiY2F0IiwiYW5vdGhlckNhdCIsImFkZCIsIm5ld0NhdCIsIm5ld0JveCIsInh5eiIsImNlbGxPZmZzZXQiLCJzdW1WZWMiLCJ2MSIsInYyIiwidmFsIiwicE9mZnNldCIsImMiLCJlIiwiZiIsImciLCJoIiwiYzAiLCJjMSIsImMyIiwiYzMiLCJjNCIsImM1IiwiYzYiLCJjNyIsImNsb25lIiwiREVGQVVMVF9DT0xPUiIsIlZFUlRTX1BFUl9DVUJFIiwiRkFDRVNfUEVSX1JFQ1QiLCJ2b3hlbCIsImN1YmUiLCJzbGljZSIsIkFycmF5IiwiZmlsbCIsImluZGljZU1hcCIsIk1hcCIsImluZGV4V2hhY2tMaXN0Iiwia2V5aWZ5IiwidiIsInNvcnQiLCJqb2luIiwicmVjdCIsImtleSIsInJpIiwiaGFzIiwiZmFjZSIsImdldCIsImZhY2VJbmRleCIsInJldmVyc2VJbmRleCIsInVwZGF0ZSIsInNldCIsImZpbHRlciIsIl8iLCJuZXdWZXJ0aWNlcyIsImluZGV4TWFwIiwiaW5kZXhDb3VudGVyIiwiaW5kZXhBcnJheSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbmdpbmUiLCJCQUJZTE9OIiwiRW5naW5lIiwiY3JlYXRlU2NlbmUiLCJzY2VuZSIsIlNjZW5lIiwibGlnaHQiLCJIZW1pc3BoZXJpY0xpZ2h0IiwiVmVjdG9yMyIsImNhbWVyYSIsIkFyY1JvdGF0ZUNhbWVyYSIsInNldFBvc2l0aW9uIiwiYXR0YWNoQ29udHJvbCIsImN1c3RvbU1lc2giLCJNZXNoIiwidm94ZWxzIiwibWVzaCIsInBvc2l0aW9ucyIsIm5vcm1hbHMiLCJ2ZXJ0ZXhEYXRhIiwiVmVydGV4RGF0YSIsIkNvbXB1dGVOb3JtYWxzIiwiYXBwbHlUb01lc2giLCJtYXRlcmlhbCIsIlN0YW5kYXJkTWF0ZXJpYWwiLCJiYWNrRmFjZUN1bGxpbmciLCJ3aXJlZnJhbWUiLCJydW5SZW5kZXJMb29wIiwicmVuZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsWUFBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7OztBQU94QixTQUFTLE1BQU0sR0FBRztJQUNkLElBQUksR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBQztJQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQztJQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDO0lBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUM7SUFDVixPQUFPLEdBQUc7OztBQ1ZkLElBQUksR0FBRyxHQUFHQSxRQUFtQixFQUFFOztBQ0EvQixpQkFBYyxHQUFHLFlBQVk7Q0FDNUIsSUFBSSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztDQUMxQixJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRSxPQUFPLEtBQUssQ0FBQztDQUM1QyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDdEMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0NBQ2pELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUM7Q0FDakMsSUFBSSxPQUFPLEdBQUcs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
