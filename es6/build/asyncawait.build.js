"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getDataFirst() {
  return new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();

    http.onload = function () {
      resolve(http.response); // resolve the result so that the SUbscriber of the Promise will get the response 
    };

    http.onerror = function (e) {
      reject(e); // rejection for error
    }; // start making call to external REST API


    http.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products"); // send the request

    http.send();
  });
}

function getDataSecond() {
  return new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();

    http.onload = function () {
      resolve(http.response); // resolve the result so that the SUbscriber of the Promise will get the response 
    };

    http.onerror = function (e) {
      reject(e); // rejection for error
    }; // start making call to external REST API


    http.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products"); // send the request

    http.send();
  });
}

function multiPromise() {
  var promises = Promise.all([getDataFirst(), getDataSecond()]);
  return promises;
} // using async/await


function caller() {
  return _caller.apply(this, arguments);
}

function _caller() {
  _caller = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res1, res2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getDataFirst();

          case 2:
            res1 = _context.sent;
            console.log("res1 = ".concat(res1));
            _context.next = 6;
            return getDataSecond();

          case 6:
            res2 = _context.sent;
            console.log("res2 = ".concat(res2));
            return _context.abrupt("return", [res1, res2]);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _caller.apply(this, arguments);
}
