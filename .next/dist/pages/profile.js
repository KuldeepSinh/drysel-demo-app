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

var ProfileWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'profile__ProfileWrapper',
  componentId: 's1rdklc4-0'
})(['display:flex;justify-content:space-around;width:1200px;']);

var ProfileInputGroup = _styledComponents2.default.div.withConfig({
  displayName: 'profile__ProfileInputGroup',
  componentId: 's1rdklc4-1'
})(['display:flex;flex-direction:column;width:100%;padding:20px;']);

var ProfileOutputGroup = _styledComponents2.default.div.withConfig({
  displayName: 'profile__ProfileOutputGroup',
  componentId: 's1rdklc4-2'
})(['display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:20px;']);

var Input = (0, _styledComponents2.default)(_core.InputGroup).withConfig({
  displayName: 'profile__Input',
  componentId: 's1rdklc4-3'
})(['margin:10px 0;']);

var Divider = _styledComponents2.default.div.withConfig({
  displayName: 'profile__Divider',
  componentId: 's1rdklc4-4'
})(['border-left:1px solid #b9bcbd;']);

var ProfileOutputGroupCard = _styledComponents2.default.div.withConfig({
  displayName: 'profile__ProfileOutputGroupCard',
  componentId: 's1rdklc4-5'
})(['display:flex;justify-content:center;width:400px;text-align:center;']);

var ProfileOutputGroupCardContent = _styledComponents2.default.div.withConfig({
  displayName: 'profile__ProfileOutputGroupCardContent',
  componentId: 's1rdklc4-6'
})(['margin-top:50px;']);

var StyledIcon = (0, _styledComponents2.default)(_core.Icon).withConfig({
  displayName: 'profile__StyledIcon',
  componentId: 's1rdklc4-7'
})(['position:absolute;background-color:white;margin-top:-65px;font-size:100px !important;']);

var Skeleton = _styledComponents2.default.div.withConfig({
  displayName: 'profile__Skeleton',
  componentId: 's1rdklc4-8'
})(['width:300px;height:', ';border-color:rgba(167,182,194,0.2) !important;border-radius:2px;box-shadow:none !important;background:rgba(167,182,194,0.2) !important;background-clip:padding-box !important;cursor:default;color:transparent !important;animation:2000ms linear infinite glow;pointer-events:none;user-select:none;'], function (props) {
  return props.height + 'px';
});

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: false,
      firstname: '',
      lastname: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      output: {
        name: '',
        address1: '',
        address2: ''
      }
    }, _this.handleSave = function () {
      var _this$state = _this.state,
          isLoading = _this$state.isLoading,
          firstname = _this$state.firstname,
          lastname = _this$state.lastname,
          addressLine1 = _this$state.addressLine1,
          addressLine2 = _this$state.addressLine2,
          city = _this$state.city,
          state = _this$state.state,
          zipcode = _this$state.zipcode;

      _this.setState({ isLoading: true });

      setTimeout(function () {
        _this.setState({
          isLoading: false,
          firstname: '',
          lastname: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipcode: '',
          output: {
            name: firstname + ' ' + lastname,
            address1: addressLine1 + ', ' + addressLine2,
            address2: city + ', ' + state + ', ' + zipcode
          }
        });
      }, 2000);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Profile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(ProfileWrapper, { className: 'pt-card pt-elevation-4' }, _react2.default.createElement(ProfileInputGroup, null, _react2.default.createElement('h2', null, 'Profile info'), _react2.default.createElement('br', null), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'firstname',
        type: 'text',
        value: this.state.firstname,
        placeholder: 'Firstname',
        onChange: function onChange(event) {
          return _this2.setState({ firstname: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'lastname',
        type: 'text',
        value: this.state.lastname,
        placeholder: 'Lastname',
        onChange: function onChange(event) {
          return _this2.setState({ lastname: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'address-line-1',
        type: 'text',
        value: this.state.addressLine1,
        placeholder: 'Address Line 1',
        onChange: function onChange(event) {
          return _this2.setState({ addressLine1: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'address-line-2',
        type: 'text',
        value: this.state.addressLine2,
        placeholder: 'Address Line 2',
        onChange: function onChange(event) {
          return _this2.setState({ addressLine2: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'city',
        type: 'text',
        value: this.state.city,
        placeholder: 'City',
        onChange: function onChange(event) {
          return _this2.setState({ city: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement('div', {
        className: 'pt-select pt-large pt-fill',
        style: { margin: '5px 0' }
      }, _react2.default.createElement('select', {
        id: 'state',
        defaultValue: 'State',
        onChange: function onChange(event) {
          return _this2.setState({ state: event.target.value });
        },
        disabled: this.state.isLoading
      }, _react2.default.createElement('option', { value: 'State' }, 'State'), _react2.default.createElement('option', { value: 'Arizona' }, 'Arizona'), _react2.default.createElement('option', { value: 'California' }, 'California'), _react2.default.createElement('option', { value: 'Washington' }, 'Washington'))), _react2.default.createElement(Input, {
        className: 'pt-large',
        id: 'zipcode',
        type: 'text',
        value: this.state.zipcode,
        placeholder: 'Zipcode',
        onChange: function onChange(event) {
          return _this2.setState({ zipcode: event.target.value });
        },
        disabled: this.state.isLoading
      }), _react2.default.createElement('br', null), _react2.default.createElement(_core.Button, {
        className: 'pt-large pt-fill',
        id: 'button-save',
        text: 'Save',
        onClick: this.handleSave,
        loading: this.state.isLoading,
        disabled: !this.state.firstname || !this.state.lastname || !this.state.addressLine1 || !this.state.addressLine2 || !this.state.city || !this.state.state || this.state.state === 'State' || !this.state.zipcode
      })), _react2.default.createElement(Divider, null), _react2.default.createElement(ProfileOutputGroup, null, _react2.default.createElement(ProfileOutputGroupCard, { className: 'pt-card pt-elevation-2' }, _react2.default.createElement(StyledIcon, { iconName: 'user' }), _react2.default.createElement(ProfileOutputGroupCardContent, null, this.state.output.name && !this.state.isLoading ? _react2.default.createElement('h2', { id: 'name' }, this.state.output.name) : _react2.default.createElement(Skeleton, { height: 40 }), _react2.default.createElement('br', null), _react2.default.createElement('br', null), this.state.output.address1 && !this.state.isLoading ? _react2.default.createElement('h4', { id: 'address1' }, this.state.output.address1) : _react2.default.createElement(Skeleton, { height: 30 }), _react2.default.createElement('br', null), this.state.output.address2 && !this.state.isLoading ? _react2.default.createElement('h4', { id: 'address2' }, this.state.output.address2) : _react2.default.createElement(Skeleton, { height: 30 })))));
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;