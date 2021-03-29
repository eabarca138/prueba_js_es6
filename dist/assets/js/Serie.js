"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Serie = /*#__PURE__*/function () {
  function Serie(nombre) {
    var personajes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Serie);

    this.nombre = nombre;
    this.personajes = personajes;
  }

  _createClass(Serie, [{
    key: "agregarPersonajes",
    value: function agregarPersonajes(personaje) {
      return this.personajes.push(personaje);
    }
  }, {
    key: "getPersonajes",
    value: function getPersonajes() {
      var _this = this;

      var app = document.getElementById("app");
      setTimeout(function () {
        _this.personajes.map(function (x) {
          var element = x.imagen;
          var element2 = x.obtenerNombre;
          var element3 = x.especie;
          var element4 = x.estado;
          var element5 = x.origen;
          app.innerHTML += "\n        <div class= \"col-12 col-sm-6 col-md-4 col-lg-3 px-4\">\n            <div class=\"card my-3\" style=\"width: 100%\">\n                <img src=\"".concat(element, "\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">Nombre: ").concat(element2, "</p>\n                    <p class=\"card-text\">Especie: ").concat(element3, "</p>\n                    <p class=\"card-text\">Estado: ").concat(element4, "</p>\n                    <p class=\"card-text\">Origen: ").concat(element5, "</p>\n                </div>\n            </div>\n        </div>\n    ");
        });
      }, 3000);
    }
  }]);

  return Serie;
}();

var _default = Serie;
exports["default"] = _default;