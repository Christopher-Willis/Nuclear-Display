(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),l=n.n(r),c=(n(57),n(43)),s=n(44),i=n(50),u=n(45),p=n(51),d=n(46),m=n.n(d),h=n(48),v=n.n(h),E=n(49),f=n.n(E);var b=function(e){return o.a.createElement(m.a,null,o.a.createElement(v.a,{avatar:o.a.createElement(f.a,{"aria-label":"Isotope Abbreviation"},e.data.symbol),title:e.data.name,subheader:e.data.summary}))},y=(n(134),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.urlIsotopes).then(function(e){return e.json()}).then(function(t){e.props.addNuclde(t)}),fetch(this.props.urlElements).then(function(e){return e.json()}).then(function(t){e.props.addElement(t)})}},{key:"render",value:function(){var e="";return this.props.allNuclides&&this.props.allElements<100?e=o.a.createElement("div",null,"Loading: ",this.props.allElements.length," of 1481"):this.props.allNuclides&&(e=o.a.createElement("div",{className:"isotope-grid"},this.props.allElements.map(function(e,t){return o.a.createElement("div",{className:"isotope-container",key:t},o.a.createElement(b,{data:e}))}))),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"header"),o.a.createElement("body",{className:"inlineBlock"},e))}}]),t}(a.Component)),j=n(27);var N={addNuclde:function(e){return{type:"ADD_NUCLIDES",value:e}},addElement:function(e){return{type:"ADD_ELEMENTS",value:e}}};var w=Object(j.b)(function(e){return{urlIsotopes:"".concat("https://nuclear-display.herokuapp.com","/isotopes"),urlElements:"".concat("https://nuclear-display.herokuapp.com","/elements"),allNuclides:e.nuclides,allElements:e.elements}},N)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(11),g=n(16);var D=Object(O.b)({nuclides:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_NUCLIDES"===t.type?[].concat(Object(g.a)(e),Object(g.a)(t.value)):e},elements:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_ELEMENTS"===t.type?[].concat(Object(g.a)(e),Object(g.a)(t.value)):e}}),k=Object(O.c)(D,{});l.a.render(o.a.createElement(j.a,{store:k},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,n){e.exports=n(137)},57:function(e,t,n){}},[[52,1,2]]]);
//# sourceMappingURL=main.40c39e4f.chunk.js.map