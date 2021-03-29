"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Personaje = /*#__PURE__*/function () {
  function Personaje(id, nombrePersonaje, especie, imagen, estado, origen) {
    _classCallCheck(this, Personaje);

    var _id = id;

    this.getId = function () {
      return _id;
    };

    var _nombre = nombrePersonaje;

    this.getNombre = function () {
      return _nombre;
    };

    this.especie = especie, this.imagen = imagen;
    this.estado = estado;
    this.origen = origen;
  }

  _createClass(Personaje, [{
    key: "obtenerId",
    get: function get() {
      return this.getId();
    }
  }, {
    key: "obtenerNombre",
    get: function get() {
      return this.getNombre();
    }
  }]);

  return Personaje;
}();

var _default = Personaje;
exports["default"] = _default;