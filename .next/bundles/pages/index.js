
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([5],{259:function(e,t,a){e.exports=a(260)},260:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(18),r=n(l),s=a(8),u=n(s),d=a(9),o=n(d),i=a(19),c=n(i),f=a(20),p=n(f),m=a(0),g=n(m),h=a(46),b=n(h),v=a(88),E=n(v),w=a(122),L=E.default.div.withConfig({displayName:"pages__IndexWrapper",componentId:"s11fvoes-0"})(["width:400px;text-align:center;"]),_=function(e){function t(){var e,a,n,l;(0,u.default)(this,t);for(var s=arguments.length,d=Array(s),o=0;o<s;o++)d[o]=arguments[o];return a=n=(0,c.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(d))),n.state={username:"",password:"",isLoading:!1},n.handleLogin=function(){n.setState({isLoading:!0}),"admin"===n.state.username&&"admin"===n.state.password?setTimeout(function(){return b.default.push("/profile")},2e3):setTimeout(function(){return n.setState({username:"",password:"",isLoading:!1})},2e3)},l=a,(0,c.default)(n,l)}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this;return g.default.createElement(L,{className:"pt-card pt-elevation-4"},g.default.createElement("br",null),g.default.createElement("h2",null,"Login"),g.default.createElement("br",null),g.default.createElement("br",null),g.default.createElement(w.InputGroup,{className:"pt-large",id:"username",type:"text",value:this.state.username,placeholder:"Username",leftIconName:"user",onChange:function(t){return e.setState({username:t.target.value})},disabled:this.state.isLoading}),g.default.createElement("br",null),g.default.createElement(w.InputGroup,{className:"pt-large",id:"password",type:"password",value:this.state.password,placeholder:"Password",leftIconName:"lock",onChange:function(t){return e.setState({password:t.target.value})},disabled:this.state.isLoading}),g.default.createElement("br",null),g.default.createElement("br",null),g.default.createElement(w.Button,{className:"pt-large pt-fill",id:"button-login",text:"Login",onClick:this.handleLogin,loading:this.state.isLoading,disabled:!this.state.username||!this.state.password}),g.default.createElement("br",null),g.default.createElement("br",null))}}]),t}(m.Component);t.default=_}},[259]);
            return { page: comp.default }
          })
        