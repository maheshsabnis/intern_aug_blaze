"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj1 = {
  a: 10
};
var obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2));
obj2.x = 90; // runtime modifying the schema of obj2 

console.log(JSON.stringify(obj2)); // a anonymous object will be created with schema as {c:80} and then data
// from obj2 will be added in it adn then ut will be assigned to obj3 

var obj3 = Object.assign({
  c: 80
}, obj2);
console.log(JSON.stringify(obj3));
var obj4 = {
  x: 100
};
console.log(JSON.stringify(obj4)); // build an immutable object using spread ...

obj4 = _objectSpread(_objectSpread({}, obj4), {}, {
  y: 900,
  z: 800
});
console.log('obj4 with spread with new propertis and values');
console.log(JSON.stringify(obj4));
console.log('using Standard JavaSCript "arguments" array');

function sumData(values) {
  var sum = 0;

  if (values.length > 0) {
    values.forEach(function (v, i) {
      sum += v;
    });
  }

  return sum;
}

console.log("2 Parameters ".concat(sumData([1, 2]))); // single Parameter of array

console.log("3 Parameters ".concat(sumData([1, 2, 3]))); // single Parameter of array

console.log("4 Parameters ".concat(sumData([1, 2, 3, 4]))); // single Parameter of array

console.log();
console.log('USing Spread');

function sumDataSpread() {
  var sum = 0;

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  if (values.length > 0) {
    values.forEach(function (v, i) {
      sum += v;
    });
  }

  return sum;
}

console.log("2 Parameters ".concat(sumDataSpread(1, 2))); // object with 2 values mutation

console.log("3 Parameters ".concat(sumDataSpread(1, 2, 3))); // object with 3 values mutation

console.log("4 Parameters ".concat(sumDataSpread(1, 2, 3, 4))); // object with 4 values mutation
