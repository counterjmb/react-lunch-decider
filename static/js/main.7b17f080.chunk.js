(this["webpackJsonpreact-lunch-generator"]=this["webpackJsonpreact-lunch-generator"]||[]).push([[0],{131:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(35),s=n.n(o),c=(n(43),n(38)),i=n(13),u=n(14),l=n(16),h=n(15),p=n(1),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.displayColor();return document.documentElement.style.backgroundColor=t,Object(p.jsxs)("div",{style:{backgroundColor:"white"},className:"box",children:[Object(p.jsxs)("div",{className:"fadeIn",style:{color:t},children:[Object(p.jsx)("h1",{id:"restaurant",children:this.props.restaurant}),Object(p.jsx)("h5",{id:"type",children:this.props.type})]},Math.random()),Object(p.jsx)("button",{style:{backgroundColor:t},id:"buttons",onClick:this.props.nextClick,children:"Next"}),Object(p.jsx)("button",{style:{backgroundColor:t},id:"buttons",onClick:this.props.pickClick,children:"Pick"})]})}}]),n}(a.a.Component),y=[{restaurant:"Mercy Thai",type:"Thai"},{restaurant:"Astoria",type:"Indian"},{restaurant:"China Wok",type:"Cheap Chinese"},{restaurant:"Saigon",type:"Vietnamese"},{restaurant:"Applebees",type:"Trash"},{restaurant:"Cheddars",type:"Better Applebees"},{restaurant:"McDonalds",type:"Delicious Trash"},{restaurant:"Jimmy Johns",type:"Sammy"},{restaurant:"Bahn Mi Shop",type:"Vietnamese"},{restaurant:"Golden Coral",type:"Early Bird Special"},{restaurant:"Arby's",type:"Trash"}];n(45),n(37),n(36);var b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).nextClick=function(){var e=t.randomRestaurant();t.setState({restaurant:e.restaurant,type:e.type}),t.shuffleRestaurants(y)},t.pickClick=function(){console.log("Picking Works")},t.state={restaurant:y[0].restaurant,types:y[0].type},t}return Object(u.a)(n,[{key:"randomRestaurant",value:function(){var t=Math.floor(Math.random()*y.length);return y[t]}},{key:"shuffleRestaurants",value:function(t){return t.sort((function(){return Math.random()-.5}))}},{key:"randomColor",value:function(){return"rgb(\n      ".concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),")")}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(d,Object(c.a)({displayColor:this.randomColor,nextClick:this.nextClick,pickClick:this.pickClick},this.state))})}}]),n}(a.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),o(t),s(t)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),j()},43:function(t,e,n){},45:function(t,e,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.7b17f080.chunk.js.map