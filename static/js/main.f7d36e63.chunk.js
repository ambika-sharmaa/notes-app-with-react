(this["webpackJsonpnotes-final"]=this["webpackJsonpnotes-final"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),o=n(8),u=n(4);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Notes"))};var m=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 Ambika Sharma ",e))};var f=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},E=n(3),d=n(5);var v=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(E.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"title",onChange:o,value:r.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onChange:o,value:r.content,placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}},"Add")))};var s=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(v,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(m,null))};c.a.render(l.a.createElement(s,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.f7d36e63.chunk.js.map