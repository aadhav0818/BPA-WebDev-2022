(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}

},{}],2:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":3}],3:[function(require,module,exports){
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],4:[function(require,module,exports){
'use strict';

var isArray    = require('is-array');
var isWindow   = require('is-window');
var isFunction = require('is-function');


module.exports = function (obj) {

  if (!obj) {
    return false;
  }

  if (isArray(obj)) {
    return true;
  }

  if (isFunction(obj) || isWindow(obj)) {
    return false;
  }

  obj = Object(obj);

  var length = 'length' in obj && obj.length;

  if (obj.nodeType === 1 && length) {
    return true;
  }

  return length === 0 ||
    typeof length === 'number' && length > 0 && ( length - 1 ) in obj;
};

},{"is-array":5,"is-function":6,"is-window":10}],5:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],6:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  if (!fn) {
    return false
  }
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],7:[function(require,module,exports){
'use strict';

module.exports = function (obj) {

  return obj == null;
};

},{}],8:[function(require,module,exports){
'use strict';

module.exports = function isObject(x) {
	return typeof x === 'object' && x !== null;
};

},{}],9:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = require('has-symbols')();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

},{"has-symbols":2}],10:[function(require,module,exports){
'use strict';

module.exports = function (obj) {

  if (obj == null) {
    return false;
  }

  var o = Object(obj);

  return o === o.window;
};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = 4294967295;

},{}],12:[function(require,module,exports){
'use strict';

module.exports = 9007199254740991;

},{}],13:[function(require,module,exports){
'use strict';

var isArrayLike = require('is-array-like');
var randomIndex = require('random-index');

module.exports = function (arr) {

  if (!arr || !isArrayLike(arr)) {
    return arr;
  }

  var length = arr.length;
  if (!length) {
    return undefined;
  }

  return arr[randomIndex({ max: length - 1 })];
};

},{"is-array-like":4,"random-index":15}],14:[function(require,module,exports){
'use strict';

var pickItem = require('pick-item');

// Data taken from https://github.com/umpirsky/country-list/blob/master/country/cldr/en_US/country.json
var countries = [{
  name: "Afghanistan",
  abbreviation: "AF"
}, {
  name: "Albania",
  abbreviation: "AL"
}, {
  name: "Algeria",
  abbreviation: "DZ"
}, {
  name: "American Samoa",
  abbreviation: "AS"
}, {
  name: "Andorra",
  abbreviation: "AD"
}, {
  name: "Angola",
  abbreviation: "AO"
}, {
  name: "Anguilla",
  abbreviation: "AI"
}, {
  name: "Antarctica",
  abbreviation: "AQ"
}, {
  name: "Antigua and Barbuda",
  abbreviation: "AG"
}, {
  name: "Argentina",
  abbreviation: "AR"
}, {
  name: "Armenia",
  abbreviation: "AM"
}, {
  name: "Aruba",
  abbreviation: "AW"
}, {
  name: "Australia",
  abbreviation: "AU"
}, {
  name: "Austria",
  abbreviation: "AT"
}, {
  name: "Azerbaijan",
  abbreviation: "AZ"
}, {
  name: "Bahamas",
  abbreviation: "BS"
}, {
  name: "Bahrain",
  abbreviation: "BH"
}, {
  name: "Bangladesh",
  abbreviation: "BD"
}, {
  name: "Barbados",
  abbreviation: "BB"
}, {
  name: "Belarus",
  abbreviation: "BY"
}, {
  name: "Belgium",
  abbreviation: "BE"
}, {
  name: "Belize",
  abbreviation: "BZ"
}, {
  name: "Benin",
  abbreviation: "BJ"
}, {
  name: "Bermuda",
  abbreviation: "BM"
}, {
  name: "Bhutan",
  abbreviation: "BT"
}, {
  name: "Bolivia",
  abbreviation: "BO"
}, {
  name: "Bosnia and Herzegovina",
  abbreviation: "BA"
}, {
  name: "Botswana",
  abbreviation: "BW"
}, {
  name: "Bouvet Island",
  abbreviation: "BV"
}, {
  name: "Brazil",
  abbreviation: "BR"
}, {
  name: "British Antarctic Territory",
  abbreviation: "BQ"
}, {
  name: "British Indian Ocean Territory",
  abbreviation: "IO"
}, {
  name: "British Virgin Islands",
  abbreviation: "VG"
}, {
  name: "Brunei",
  abbreviation: "BN"
}, {
  name: "Bulgaria",
  abbreviation: "BG"
}, {
  name: "Burkina Faso",
  abbreviation: "BF"
}, {
  name: "Burundi",
  abbreviation: "BI"
}, {
  name: "Cambodia",
  abbreviation: "KH"
}, {
  name: "Cameroon",
  abbreviation: "CM"
}, {
  name: "Canada",
  abbreviation: "CA"
}, {
  name: "Canton and Enderbury Islands",
  abbreviation: "CT"
}, {
  name: "Cape Verde",
  abbreviation: "CV"
}, {
  name: "Cayman Islands",
  abbreviation: "KY"
}, {
  name: "Central African Republic",
  abbreviation: "CF"
}, {
  name: "Chad",
  abbreviation: "TD"
}, {
  name: "Chile",
  abbreviation: "CL"
}, {
  name: "China",
  abbreviation: "CN"
}, {
  name: "Christmas Island",
  abbreviation: "CX"
}, {
  name: "Cocos [Keeling] Islands",
  abbreviation: "CC"
}, {
  name: "Colombia",
  abbreviation: "CO"
}, {
  name: "Comoros",
  abbreviation: "KM"
}, {
  name: "Congo - Brazzaville",
  abbreviation: "CG"
}, {
  name: "Congo - Kinshasa",
  abbreviation: "CD"
}, {
  name: "Cook Islands",
  abbreviation: "CK"
}, {
  name: "Costa Rica",
  abbreviation: "CR"
}, {
  name: "Croatia",
  abbreviation: "HR"
}, {
  name: "Cuba",
  abbreviation: "CU"
}, {
  name: "Cyprus",
  abbreviation: "CY"
}, {
  name: "Czech Republic",
  abbreviation: "CZ"
}, {
  name: "Côte d’Ivoire",
  abbreviation: "CI"
}, {
  name: "Denmark",
  abbreviation: "DK"
}, {
  name: "Djibouti",
  abbreviation: "DJ"
}, {
  name: "Dominica",
  abbreviation: "DM"
}, {
  name: "Dominican Republic",
  abbreviation: "DO"
}, {
  name: "Dronning Maud Land",
  abbreviation: "NQ"
}, {
  name: "East Germany",
  abbreviation: "DD"
}, {
  name: "Ecuador",
  abbreviation: "EC"
}, {
  name: "Egypt",
  abbreviation: "EG"
}, {
  name: "El Salvador",
  abbreviation: "SV"
}, {
  name: "Equatorial Guinea",
  abbreviation: "GQ"
}, {
  name: "Eritrea",
  abbreviation: "ER"
}, {
  name: "Estonia",
  abbreviation: "EE"
}, {
  name: "Ethiopia",
  abbreviation: "ET"
}, {
  name: "Falkland Islands",
  abbreviation: "FK"
}, {
  name: "Faroe Islands",
  abbreviation: "FO"
}, {
  name: "Fiji",
  abbreviation: "FJ"
}, {
  name: "Finland",
  abbreviation: "FI"
}, {
  name: "France",
  abbreviation: "FR"
}, {
  name: "French Guiana",
  abbreviation: "GF"
}, {
  name: "French Polynesia",
  abbreviation: "PF"
}, {
  name: "French Southern Territories",
  abbreviation: "TF"
}, {
  name: "French Southern and Antarctic Territories",
  abbreviation: "FQ"
}, {
  name: "Gabon",
  abbreviation: "GA"
}, {
  name: "Gambia",
  abbreviation: "GM"
}, {
  name: "Georgia",
  abbreviation: "GE"
}, {
  name: "Germany",
  abbreviation: "DE"
}, {
  name: "Ghana",
  abbreviation: "GH"
}, {
  name: "Gibraltar",
  abbreviation: "GI"
}, {
  name: "Greece",
  abbreviation: "GR"
}, {
  name: "Greenland",
  abbreviation: "GL"
}, {
  name: "Grenada",
  abbreviation: "GD"
}, {
  name: "Guadeloupe",
  abbreviation: "GP"
}, {
  name: "Guam",
  abbreviation: "GU"
}, {
  name: "Guatemala",
  abbreviation: "GT"
}, {
  name: "Guernsey",
  abbreviation: "GG"
}, {
  name: "Guinea",
  abbreviation: "GN"
}, {
  name: "Guinea-Bissau",
  abbreviation: "GW"
}, {
  name: "Guyana",
  abbreviation: "GY"
}, {
  name: "Haiti",
  abbreviation: "HT"
}, {
  name: "Heard Island and McDonald Islands",
  abbreviation: "HM"
}, {
  name: "Honduras",
  abbreviation: "HN"
}, {
  name: "Hong Kong SAR China",
  abbreviation: "HK"
}, {
  name: "Hungary",
  abbreviation: "HU"
}, {
  name: "Iceland",
  abbreviation: "IS"
}, {
  name: "India",
  abbreviation: "IN"
}, {
  name: "Indonesia",
  abbreviation: "ID"
}, {
  name: "Iran",
  abbreviation: "IR"
}, {
  name: "Iraq",
  abbreviation: "IQ"
}, {
  name: "Ireland",
  abbreviation: "IE"
}, {
  name: "Isle of Man",
  abbreviation: "IM"
}, {
  name: "Israel",
  abbreviation: "IL"
}, {
  name: "Italy",
  abbreviation: "IT"
}, {
  name: "Jamaica",
  abbreviation: "JM"
}, {
  name: "Japan",
  abbreviation: "JP"
}, {
  name: "Jersey",
  abbreviation: "JE"
}, {
  name: "Johnston Island",
  abbreviation: "JT"
}, {
  name: "Jordan",
  abbreviation: "JO"
}, {
  name: "Kazakhstan",
  abbreviation: "KZ"
}, {
  name: "Kenya",
  abbreviation: "KE"
}, {
  name: "Kiribati",
  abbreviation: "KI"
}, {
  name: "Kuwait",
  abbreviation: "KW"
}, {
  name: "Kyrgyzstan",
  abbreviation: "KG"
}, {
  name: "Laos",
  abbreviation: "LA"
}, {
  name: "Latvia",
  abbreviation: "LV"
}, {
  name: "Lebanon",
  abbreviation: "LB"
}, {
  name: "Lesotho",
  abbreviation: "LS"
}, {
  name: "Liberia",
  abbreviation: "LR"
}, {
  name: "Libya",
  abbreviation: "LY"
}, {
  name: "Liechtenstein",
  abbreviation: "LI"
}, {
  name: "Lithuania",
  abbreviation: "LT"
}, {
  name: "Luxembourg",
  abbreviation: "LU"
}, {
  name: "Macau SAR China",
  abbreviation: "MO"
}, {
  name: "Macedonia",
  abbreviation: "MK"
}, {
  name: "Madagascar",
  abbreviation: "MG"
}, {
  name: "Malawi",
  abbreviation: "MW"
}, {
  name: "Malaysia",
  abbreviation: "MY"
}, {
  name: "Maldives",
  abbreviation: "MV"
}, {
  name: "Mali",
  abbreviation: "ML"
}, {
  name: "Malta",
  abbreviation: "MT"
}, {
  name: "Marshall Islands",
  abbreviation: "MH"
}, {
  name: "Martinique",
  abbreviation: "MQ"
}, {
  name: "Mauritania",
  abbreviation: "MR"
}, {
  name: "Mauritius",
  abbreviation: "MU"
}, {
  name: "Mayotte",
  abbreviation: "YT"
}, {
  name: "Metropolitan France",
  abbreviation: "FX"
}, {
  name: "Mexico",
  abbreviation: "MX"
}, {
  name: "Micronesia",
  abbreviation: "FM"
}, {
  name: "Midway Islands",
  abbreviation: "MI"
}, {
  name: "Moldova",
  abbreviation: "MD"
}, {
  name: "Monaco",
  abbreviation: "MC"
}, {
  name: "Mongolia",
  abbreviation: "MN"
}, {
  name: "Montenegro",
  abbreviation: "ME"
}, {
  name: "Montserrat",
  abbreviation: "MS"
}, {
  name: "Morocco",
  abbreviation: "MA"
}, {
  name: "Mozambique",
  abbreviation: "MZ"
}, {
  name: "Myanmar [Burma]",
  abbreviation: "MM"
}, {
  name: "Namibia",
  abbreviation: "NA"
}, {
  name: "Nauru",
  abbreviation: "NR"
}, {
  name: "Nepal",
  abbreviation: "NP"
}, {
  name: "Netherlands",
  abbreviation: "NL"
}, {
  name: "Netherlands Antilles",
  abbreviation: "AN"
}, {
  name: "Neutral Zone",
  abbreviation: "NT"
}, {
  name: "New Caledonia",
  abbreviation: "NC"
}, {
  name: "New Zealand",
  abbreviation: "NZ"
}, {
  name: "Nicaragua",
  abbreviation: "NI"
}, {
  name: "Niger",
  abbreviation: "NE"
}, {
  name: "Nigeria",
  abbreviation: "NG"
}, {
  name: "Niue",
  abbreviation: "NU"
}, {
  name: "Norfolk Island",
  abbreviation: "NF"
}, {
  name: "North Korea",
  abbreviation: "KP"
}, {
  name: "North Vietnam",
  abbreviation: "VD"
}, {
  name: "Northern Mariana Islands",
  abbreviation: "MP"
}, {
  name: "Norway",
  abbreviation: "NO"
}, {
  name: "Oman",
  abbreviation: "OM"
}, {
  name: "Pacific Islands Trust Territory",
  abbreviation: "PC"
}, {
  name: "Pakistan",
  abbreviation: "PK"
}, {
  name: "Palau",
  abbreviation: "PW"
}, {
  name: "Palestinian Territories",
  abbreviation: "PS"
}, {
  name: "Panama",
  abbreviation: "PA"
}, {
  name: "Panama Canal Zone",
  abbreviation: "PZ"
}, {
  name: "Papua New Guinea",
  abbreviation: "PG"
}, {
  name: "Paraguay",
  abbreviation: "PY"
}, {
  name: "People's Democratic Republic of Yemen",
  abbreviation: "YD"
}, {
  name: "Peru",
  abbreviation: "PE"
}, {
  name: "Philippines",
  abbreviation: "PH"
}, {
  name: "Pitcairn Islands",
  abbreviation: "PN"
}, {
  name: "Poland",
  abbreviation: "PL"
}, {
  name: "Portugal",
  abbreviation: "PT"
}, {
  name: "Puerto Rico",
  abbreviation: "PR"
}, {
  name: "Qatar",
  abbreviation: "QA"
}, {
  name: "Romania",
  abbreviation: "RO"
}, {
  name: "Russia",
  abbreviation: "RU"
}, {
  name: "Rwanda",
  abbreviation: "RW"
}, {
  name: "Réunion",
  abbreviation: "RE"
}, {
  name: "Saint Barthélemy",
  abbreviation: "BL"
}, {
  name: "Saint Helena",
  abbreviation: "SH"
}, {
  name: "Saint Kitts and Nevis",
  abbreviation: "KN"
}, {
  name: "Saint Lucia",
  abbreviation: "LC"
}, {
  name: "Saint Martin",
  abbreviation: "MF"
}, {
  name: "Saint Pierre and Miquelon",
  abbreviation: "PM"
}, {
  name: "Saint Vincent and the Grenadines",
  abbreviation: "VC"
}, {
  name: "Samoa",
  abbreviation: "WS"
}, {
  name: "San Marino",
  abbreviation: "SM"
}, {
  name: "Saudi Arabia",
  abbreviation: "SA"
}, {
  name: "Senegal",
  abbreviation: "SN"
}, {
  name: "Serbia",
  abbreviation: "RS"
}, {
  name: "Serbia and Montenegro",
  abbreviation: "CS"
}, {
  name: "Seychelles",
  abbreviation: "SC"
}, {
  name: "Sierra Leone",
  abbreviation: "SL"
}, {
  name: "Singapore",
  abbreviation: "SG"
}, {
  name: "Slovakia",
  abbreviation: "SK"
}, {
  name: "Slovenia",
  abbreviation: "SI"
}, {
  name: "Solomon Islands",
  abbreviation: "SB"
}, {
  name: "Somalia",
  abbreviation: "SO"
}, {
  name: "South Africa",
  abbreviation: "ZA"
}, {
  name: "South Georgia and the South Sandwich Islands",
  abbreviation: "GS"
}, {
  name: "South Korea",
  abbreviation: "KR"
}, {
  name: "Spain",
  abbreviation: "ES"
}, {
  name: "Sri Lanka",
  abbreviation: "LK"
}, {
  name: "Sudan",
  abbreviation: "SD"
}, {
  name: "Suriname",
  abbreviation: "SR"
}, {
  name: "Svalbard and Jan Mayen",
  abbreviation: "SJ"
}, {
  name: "Swaziland",
  abbreviation: "SZ"
}, {
  name: "Sweden",
  abbreviation: "SE"
}, {
  name: "Switzerland",
  abbreviation: "CH"
}, {
  name: "Syria",
  abbreviation: "SY"
}, {
  name: "São Tomé and Príncipe",
  abbreviation: "ST"
}, {
  name: "Taiwan",
  abbreviation: "TW"
}, {
  name: "Tajikistan",
  abbreviation: "TJ"
}, {
  name: "Tanzania",
  abbreviation: "TZ"
}, {
  name: "Thailand",
  abbreviation: "TH"
}, {
  name: "Timor-Leste",
  abbreviation: "TL"
}, {
  name: "Togo",
  abbreviation: "TG"
}, {
  name: "Tokelau",
  abbreviation: "TK"
}, {
  name: "Tonga",
  abbreviation: "TO"
}, {
  name: "Trinidad and Tobago",
  abbreviation: "TT"
}, {
  name: "Tunisia",
  abbreviation: "TN"
}, {
  name: "Turkey",
  abbreviation: "TR"
}, {
  name: "Turkmenistan",
  abbreviation: "TM"
}, {
  name: "Turks and Caicos Islands",
  abbreviation: "TC"
}, {
  name: "Tuvalu",
  abbreviation: "TV"
}, {
  name: "U.S. Minor Outlying Islands",
  abbreviation: "UM"
}, {
  name: "U.S. Miscellaneous Pacific Islands",
  abbreviation: "PU"
}, {
  name: "U.S. Virgin Islands",
  abbreviation: "VI"
}, {
  name: "Uganda",
  abbreviation: "UG"
}, {
  name: "Ukraine",
  abbreviation: "UA"
}, {
  name: "Union of Soviet Socialist Republics",
  abbreviation: "SU"
}, {
  name: "United Arab Emirates",
  abbreviation: "AE"
}, {
  name: "United Kingdom",
  abbreviation: "GB"
}, {
  name: "United States",
  abbreviation: "US"
}, {
  name: "Unknown or Invalid Region",
  abbreviation: "ZZ"
}, {
  name: "Uruguay",
  abbreviation: "UY"
}, {
  name: "Uzbekistan",
  abbreviation: "UZ"
}, {
  name: "Vanuatu",
  abbreviation: "VU"
}, {
  name: "Vatican City",
  abbreviation: "VA"
}, {
  name: "Venezuela",
  abbreviation: "VE"
}, {
  name: "Vietnam",
  abbreviation: "VN"
}, {
  name: "Wake Island",
  abbreviation: "WK"
}, {
  name: "Wallis and Futuna",
  abbreviation: "WF"
}, {
  name: "Western Sahara",
  abbreviation: "EH"
}, {
  name: "Yemen",
  abbreviation: "YE"
}, {
  name: "Zambia",
  abbreviation: "ZM"
}, {
  name: "Zimbabwe",
  abbreviation: "ZW"
}, {
  name: "Åland Islands",
  abbreviation: "AX"
}];


module.exports = function (options) {

  var counrty = pickItem(countries);

  return options && options.full ? counrty.name : counrty.abbreviation;
};

module.exports.countries = countries;

},{"pick-item":13}],15:[function(require,module,exports){
'use strict';

var randomNatural  = require('random-natural');
var MAX_ARR_LENGTH = require('max-array-length');

var fixme = randomNatural.fixme;

module.exports = function (options) {

  if (options) {
    if (!options.inspected) {
      options.min = fixme(options.min, 0, MAX_ARR_LENGTH, true);
      options.max = fixme(options.max, 0, MAX_ARR_LENGTH, false);
    }
  } else {
    options = {
      min: 0,
      max: MAX_ARR_LENGTH
    };
  }

  options.inspected = true;

  return randomNatural(options);
};

},{"max-array-length":11,"random-natural":17}],16:[function(require,module,exports){
'use strict';

var clamp        = require('clamp');
var toInteger    = require('to-integer');
var MAX_SAFE_INT = require('max-safe-int');
var MIN_SAFE_INT = -MAX_SAFE_INT;

function fixme(val, min, max, isMin) {

  if (typeof val !== 'number') {
    val = toInteger(val);
  }

  if (isNaN(val) || !isFinite(val)) {
    return isMin ? min : max;
  }

  return clamp(val, min, max);
}

module.exports = function (options) {

  if (options) {
    // for speed up
    if (!options.inspected) {
      options.min = fixme(options.min, MIN_SAFE_INT, MAX_SAFE_INT, true);
      options.max = fixme(options.max, MIN_SAFE_INT, MAX_SAFE_INT, false);
    }
  } else {
    options = {
      min: MIN_SAFE_INT,
      max: MAX_SAFE_INT
    };
  }

  var min = options.min;
  var max = options.max;

  // swap to variables
  // ref: http://stackoverflow.com/a/16201688
  if (min > max) {
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

module.exports.fixme = fixme;

},{"clamp":1,"max-safe-int":12,"to-integer":18}],17:[function(require,module,exports){
'use strict';

var randomInt    = require('random-integral');
var MAX_SAFE_INT = require('max-safe-int');

module.exports = function (options) {

  if (options) {
    if (!options.inspected) {
      options.min = randomInt.fixme(options.min, 0, MAX_SAFE_INT, true);
      options.max = randomInt.fixme(options.max, 0, MAX_SAFE_INT, false);
    }
  } else {
    options = {
      min: 0,
      max: MAX_SAFE_INT
    };
  }

  options.inspected = true;

  return randomInt(options);
};

module.exports.fixme = randomInt.fixme;

},{"max-safe-int":12,"random-integral":16}],18:[function(require,module,exports){
'use strict';

var isNil      = require('is-nil');
var isSymbol   = require('is-symbol');
var isObject   = require('is-object');
var isFunction = require('is-function');

var NAN = 0 / 0;

module.exports = function (value) {

  if (isNil(value)) {
    return 0;
  }

  var type = typeof value;

  if (type === 'number') {
    return value;
  } else if (type === 'boolean') {
    return value ? 1 : 0;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {

    var raw = isFunction(value.valueOf) ? value.valueOf() : value;

    value = isObject(raw) ? (raw + '') : raw;
  }


  type = typeof value;
  if (type !== 'string') {
    return type === 'number' ? value : parseInt(value, 10);
  }


  // trim
  value = value.replace(/^\s+|\s+$/g, '');


  if (/^0b[01]+$/i.test(value)) {
    return parseInt(value.slice(2), 2);
  } else if (/^0o[0-7]+$/i.test(value)) {
    return parseInt(value.slice(2), 8);
  } else if (/^0x[0-9a-f]+$/i.test(value)) {
    return parseInt(value.slice(2), 16);
  }

  if(/^0b/i.test(value)||/^0o/i.test(value)||/^[\+\-]?0x/i.test(value)){
    return NAN;
  }

  return parseInt(value, 10);
};

},{"is-function":6,"is-nil":7,"is-object":8,"is-symbol":9}],19:[function(require,module,exports){
document.getElementById("dbutton").addEventListener("click", function(event) {
    var randomCountry = require('random-country');
    alert(randomCountry({ full: true }));
})



},{"random-country":14}]},{},[19]);
