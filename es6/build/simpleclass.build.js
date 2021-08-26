"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SimpleClass = /*#__PURE__*/function () {
  // default constructor
  function SimpleClass() {
    _classCallCheck(this, SimpleClass);
  } // public method


  _createClass(SimpleClass, [{
    key: "add",
    value: function add(x, y) {
      return Math.pow(x, y) + Math.pow(y, x);
    }
  }]);

  return SimpleClass;
}(); // define an instance


var o1 = new SimpleClass();
console.log("Add = ".concat(o1.add(2, 3)));
