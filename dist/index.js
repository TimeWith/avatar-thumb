'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarThumb = function (_Component) {
  _inherits(AvatarThumb, _Component);

  function AvatarThumb() {
    _classCallCheck(this, AvatarThumb);

    return _possibleConstructorReturn(this, (AvatarThumb.__proto__ || Object.getPrototypeOf(AvatarThumb)).apply(this, arguments));
  }

  _createClass(AvatarThumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          firstName = _props.firstName,
          lastName = _props.lastName,
          style = _props.style;
      var _props2 = this.props,
          bgColor = _props2.bgColor,
          radius = _props2.radius,
          fontSize = _props2.fontSize,
          color = _props2.color;

      if (!bgColor) {
        bgColor = '#7DCE82';
      }
      if (!fontSize) {
        fontSize = '18px';
      }
      if (!radius) {
        radius = '45px';
      }
      if (!color) {
        color = 'white';
      }

      var AvatarDIV = _glamorous2.default.div({
        width: radius,
        height: radius,
        borderRadius: parseFloat(radius) / 2 + 'px',
        overflow: 'hidden'
      });

      var element = void 0;
      if (src) {
        var AvatarIMG = _glamorous2.default.img({
          width: 'auto',
          height: 'auto',
          minWidth: radius,
          minHeight: radius
        });
        element = _react2.default.createElement(AvatarIMG, { src: src, alt: firstName + ' ' + lastName });
      } else {
        var Circle = _glamorous2.default.div(_defineProperty({
          width: radius,
          height: radius,
          lineHeight: radius,
          backgroundColor: bgColor,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: radius / 2 + 'px',
          color: color
        }, 'textAlign', 'center'));
        var initials = firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : firstName.charAt(0);
        element = _react2.default.createElement(
          Circle,
          null,
          initials
        );
      }

      return _react2.default.createElement(
        AvatarDIV,
        { style: style },
        element
      );
    }
  }]);

  return AvatarThumb;
}(_react.Component);

exports.default = AvatarThumb;
//# sourceMappingURL=index.js.map