(this.webpackJsonpweb4=this.webpackJsonpweb4||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),u=n(6),i=n.n(u),r=(n(12),n(7)),s=n(4),j=(n(13),n(0));var o=function(e){var t=Object(a.useState)({name:"",age:""}),n=Object(s.a)(t,2),c=n[0],u=n[1],i=function(t){t.preventDefault(),e.Add(c),u({name:"",age:""})};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{type:"submit",onSubmit:i,children:[Object(j.jsx)("input",{type:"text",placeholder:"Nhap ten",value:c.name,onChange:function(e){u({name:e.target.value,age:c.age})}}),Object(j.jsx)("input",{type:"number",placeholder:"Nhap tuoi",value:c.age,onChange:function(e){u({name:c.name,age:e.target.value})}}),Object(j.jsx)("input",{type:"submit",value:"ADD",onSubmit:i})]})})};var b=function(e){return Object(j.jsxs)("div",{style:{marginTop:"50px"},children:[Object(j.jsxs)("h2",{children:["Name:",e.student.name]}),Object(j.jsxs)("h2",{children:["Age: ",e.student.age]})]})};var d=function(){var e=Object(a.useState)([{name:"Hieu",age:18}]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{Add:function(e){var t=Object(r.a)(n);t.push(e),c(t)}}),n.map((function(e){return Object(j.jsx)(b,{student:e})}))]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,u=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),u(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.c4bd1293.chunk.js.map