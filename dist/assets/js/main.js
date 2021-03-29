"use strict";

require("../../assets/css/style.css");

require("regenerator-runtime/runtime.js");

var _Serie = _interopRequireDefault(require("./Serie"));

var _Personajes = _interopRequireDefault(require("./Personajes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var llamarPersonajes = function () {
  var urlBase = "https://rickandmortyapi.com/api";
  var cantidadPersonajes = 0;

  var dataPersonajes = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(urlAPI, urlP) {
      var arr, req, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              arr = [];
              _context.prev = 1;
              _context.next = 4;
              return fetch(urlAPI + urlP);

            case 4:
              req = _context.sent;
              _context.next = 7;
              return req.json();

            case 7:
              data = _context.sent;
              arr = data.results;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log("Error en la obtenci\xF3n de los personajes desde la API: ".concat(_context.t0));

            case 14:
              _context.prev = 14;
              return _context.abrupt("return", arr);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11, 14, 17]]);
    }));

    return function dataPersonajes(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var funcionPublica1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var serie, resultadosAPI;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              serie = new _Serie["default"]("Rick and Morty");
              _context2.next = 3;
              return dataPersonajes(urlBase, "/character");

            case 3:
              resultadosAPI = _context2.sent;
              cantidadPersonajes = resultadosAPI.length;
              resultadosAPI.forEach(function (personaje) {
                var per = new _Personajes["default"](personaje.id, personaje.name, personaje.species, personaje.image, personaje.status, personaje.origin.name);
                serie.agregarPersonajes(per);
                console.log(serie.personajes);
              });
              serie.getPersonajes();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function funcionPublica1() {
      return _ref2.apply(this, arguments);
    };
  }();

  var funcionPublica2 = function funcionPublica2() {
    console.log("Personajes a mostrar: ".concat(cantidadPersonajes));
    var numP = document.getElementById('cantidadPersonajes');
    var spinner = document.getElementById('spinner');
    setTimeout(function () {
      spinner.classList.remove('spinner-border');
    }, 3000);
    setTimeout(function () {
      numP.innerHTML = cantidadPersonajes;
    }, 3000);
  };

  return {
    funcionPublica1: funcionPublica1,
    funcionPublica2: funcionPublica2
  };
}();

llamarPersonajes.funcionPublica1();
llamarPersonajes.funcionPublica2();