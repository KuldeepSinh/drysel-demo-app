'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _core = require('@blueprintjs/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'pages__IndexWrapper',
  componentId: 's11fvoes-0'
})(['width:400px;text-align:center;']);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: '',
      password: '',
      isLoading: false
    }, _this.handleLogin = function () {
      _this.setState({ isLoading: true });

      if (_this.state.username === 'admin' && _this.state.password === 'admin') {
        setTimeout(function () {
          return _index2.default.push('/profile');
        }, 2000);
      } else {
        setTimeout(function () {
          return _this.setState({ username: '', password: '', isLoading: false });
        }, 2000);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(IndexWrapper, { className: 'pt-card pt-elevation-4' }, _react2.default.createElement('br', null), _react2.default.createElement('h2', null, 'Login'), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement(_core.InputGroup, {
        className: 'pt-large',
        id: 'username',
        type: 'text',
        value: this.state.username,
        placeholder: 'Username',
        leftIconName: 'user',
        onChange: function onChange(event) {
          return _this2.setState({ username: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement('br', null), _react2.default.createElement(_core.InputGroup, {
        className: 'pt-large',
        id: 'password',
        type: 'password',
        value: this.state.password,
        placeholder: 'Password',
        leftIconName: 'lock',
        onChange: function onChange(event) {
          return _this2.setState({ password: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement('br', null), _react2.default.createElement('br', null), _react2.default.createElement(_core.Button, {
        className: 'pt-large pt-fill',
        id: 'button-login',
        text: 'Login',
        onClick: this.handleLogin,
        loading: this.state.isLoading,
        disabled: !this.state.username || !this.state.password
      }), _react2.default.createElement('br', null), _react2.default.createElement('br', null));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;