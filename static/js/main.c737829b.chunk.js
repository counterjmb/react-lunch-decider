(this["webpackJsonprandom-lunch-generator"]=this["webpackJsonprandom-lunch-generator"]||[]).push([[0],{131:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(35),c=e.n(o),s=(e(43),e(38)),i=e(13),u=e(14),l=e(16),h=e(15),d=e(1),p=function(t){Object(l.a)(e,t);var n=Object(h.a)(e);function e(){return Object(i.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var t=this.props.displayColor();return document.documentElement.style.backgroundColor=t,Object(d.jsxs)("div",{style:{backgroundColor:"white"},className:"box",children:[Object(d.jsxs)("div",{className:"fadeIn",style:{color:t},children:[Object(d.jsx)("h1",{id:"restaurant",children:this.props.restaurant}),Object(d.jsx)("h5",{id:"type",children:this.props.type})]},Math.random()),Object(d.jsx)("button",{style:{backgroundColor:t},id:"buttons",onClick:this.props.nextClick,children:"Next"}),Object(d.jsx)("button",{style:{backgroundColor:t},id:"buttons",onClick:this.props.pickClick,children:"Pick"})]})}}]),e}(a.a.Component),b=[{restaurant:"Mercy Thai",type:"Thai"},{restaurant:"Astoria",type:"Indian"},{restaurant:"China Wok",type:"Cheap Chinese"},{restaurant:"Saigon",type:"Vietnamese"},{restaurant:"Arby's",type:"Trash"}];e(45),e(37),e(36);var j=function(t){Object(l.a)(e,t);var n=Object(h.a)(e);function e(){var t;return Object(i.a)(this,e),(t=n.call(this)).nextClick=function(){var n=t.randomRestaurant();t.setState({restaurant:n.restaurant,type:n.type}),t.shuffleRestaurants(b)},t.pickClick=function(){console.log("Picking Works")},t.state={restaurant:b[0].restaurant,types:b[0].type},t}return Object(u.a)(e,[{key:"randomRestaurant",value:function(){var t=Math.floor(Math.random()*b.length);return b[t]}},{key:"shuffleRestaurants",value:function(t){return t.sort((function(){return Math.random()-.5}))}},{key:"randomColor",value:function(){return"rgb(\n      ".concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),")")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,Object(s.a)({displayColor:this.randomColor,nextClick:this.nextClick,pickClick:this.pickClick},this.state))})}}]),e}(a.a.Component),k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,138)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),o(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),k()},43:function(t,n,e){},45:function(t,n,e){}},[[131,1,2]]]);
//# sourceMappingURL=main.c737829b.chunk.js.map