"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _firstName = /*#__PURE__*/new WeakMap();

var _middleName = /*#__PURE__*/new WeakMap();

var _lastName = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var PrivateMembers = /*#__PURE__*/function () {
  // defining private members
  function PrivateMembers(f, m, l) {
    _classCallCheck(this, PrivateMembers);

    _validate.add(this);

    _firstName.set(this, {
      writable: true,
      value: ''
    });

    _middleName.set(this, {
      writable: true,
      value: ''
    });

    _lastName.set(this, {
      writable: true,
      value: ''
    });

    // set values for private members
    _classPrivateFieldSet(this, _firstName, f);

    _classPrivateFieldSet(this, _middleName, m);

    _classPrivateFieldSet(this, _lastName, l);
  } // adding private method


  _createClass(PrivateMembers, [{
    key: "getFullName",
    value: function getFullName() {
      if (!_classPrivateMethodGet(this, _validate, _validate2).call(this)) return "Please PAss Data Correctly";
      return "".concat(_classPrivateFieldGet(this, _firstName), " ").concat(_classPrivateFieldGet(this, _middleName), " ").concat(_classPrivateFieldGet(this, _lastName));
    }
  }]);

  return PrivateMembers;
}();

function _validate2() {
  if (_classPrivateFieldGet(this, _firstName).length == 0 || _classPrivateFieldGet(this, _middleName).length == 0 || _classPrivateFieldGet(this, _lastName).length == 0) return false;
}

var oo = new PrivateMembers(); // console.log(oo.#firstName); // errors
