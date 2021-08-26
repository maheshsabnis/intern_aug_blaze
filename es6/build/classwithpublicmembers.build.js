"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PublicMembers = /*#__PURE__*/function () {
  // parameterized ctor
  function PublicMembers(fname, mname, lname) {
    _classCallCheck(this, PublicMembers);

    // define public members using 'this.' prefix
    this.firstName = fname;
    this.middleName = mname;
    this.lastName = lname;
  } // the method using public data members


  _createClass(PublicMembers, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    }
  }]);

  return PublicMembers;
}();
