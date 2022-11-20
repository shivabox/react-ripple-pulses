"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LightenColor = function LightenColor(color, sec) {
  if (sec === "pri") return color + "8f";else return color + "00";
};
var renderPulse = function renderPulse(color, size) {
  console.log(color, size);
  return (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n0% {\n    box-shadow: 0px 0px 5px 0px  ", ";\n  }\n\n  65% {\n    box-shadow: 0px 0px 5px ", " ", ";\n  }\n\n  90% {\n    box-shadow: 0px 0px 5px ", " ", ";\n  }\n"])), color ? LightenColor(color, "pri") : "#ff5c7c8f", size ? size + "px" : "12px", color ? LightenColor(color, "pri") : "#ff5c7c8f", size ? size + "px" : "12px", color ? LightenColor(color, "sec") : "#ff5c7c00");
};
var Ripple = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    font-size: 0;\n    background-color: ", ";\n    border: 0;\n    border-radius: 50%;\n    outline: none;\n    animation-name: ", ";\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    cursor: not-allowed;\n"])), function (props) {
  return props.size ? function (props) {
    return props.size + "px";
  } : "12px";
}, function (props) {
  return props.size ? function (props) {
    return props.size + "px";
  } : "12px";
}, function (props) {
  return props.color ? function (props) {
    return props.color;
  } : "#ff5c7c";
}, function (props) {
  return renderPulse(props.color, props.size);
});
var Ripples = function Ripples(props) {
  return /*#__PURE__*/_react.default.createElement(Ripple, {
    color: props.color ? props.color : undefined,
    size: props.size ? props.size : undefined
  });
};
var _default = Ripples;
exports.default = _default;