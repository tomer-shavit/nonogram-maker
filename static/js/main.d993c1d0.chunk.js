(this.webpackJsonpnonogram_maker=this.webpackJsonpnonogram_maker||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(92),r=n(1),i=n(61),o=n.n(i),a=n(94),s=n(62),u=n(86),h=n(89),l=n(91),j=n(95),b=n(90),f=n(11),g=n(3),O=n(2),d=Object(r.createContext)(),x=function(e){for(var t=[],n=0;n<e;n++)t.push([]);return t},m=function(e,t){for(var n=[],c=0;c<t;c++){n.push([]);for(var r=0;r<e;r++)n[c].push(-1)}return n},p=function(e){var t=e.children,n=Object(r.useState)(5),c=Object(g.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)(5),s=Object(g.a)(a,2),u=s[0],h=s[1],l=Object(r.useState)(x(i)),j=Object(g.a)(l,2),b=j[0],p=j[1],v=Object(r.useState)(x(u)),C=Object(g.a)(v,2),w=C[0],y=C[1],E=Object(r.useState)([w,b]),S=Object(g.a)(E,2),k=S[0],F=S[1],V=Object(r.useState)(m(i,u)),B=Object(g.a)(V,2),D=B[0],I=B[1];Object(r.useEffect)((function(){}),[D]),Object(r.useEffect)((function(){p(H(i))}),[i]),Object(r.useEffect)((function(){y(L(u))}),[u]),Object(r.useEffect)((function(){I(T(i)),console.log(D)}),[i]),Object(r.useEffect)((function(){I(A(u))}),[u]),Object(r.useEffect)((function(){F([w,b])}),[b,w]);var L=function(e){if(e<w.length)return w.slice(0,e);for(var t=[],n=w.map((function(e){return e.slice()})),c=w.length;c<e;c++)n.push(t);return n},H=function(e){if(e<b.length)return b.slice(0,e);for(var t=[],n=b.map((function(e){return e.slice()})),c=b.length;c<e;c++)n.push(t);return n},T=function(e){var t=[];if(e>D[0].length)var n=Array.from({length:e-D[0].length},(function(e,t){return-1}));for(var c=0;c<D.length;c++){var r=D[c].slice(0,e);e>D[0].length&&(r=r.concat(n)),t.push(r)}return t},A=function(e){if(e<D.length)return D.slice(0,e);for(var t=Array.from({length:D[0].length},(function(e,t){return-1})),n=D.map((function(e){return e.slice()})),c=D.length;c<e;c++)n.push(t);return n},J=function(e){for(var t=[],n=0,c=0;c<D[e].length;c++)1===D[e][c]&&(c===D[0].length-1?(n+=1,t.push(n)):1===D[e][c+1]?n+=1:(n+=1,t.push(n),n=0));return t},P=function(e){for(var t=[],n=0,c=0;c<D.length;c++)1===D[c][e]&&(c===D.length-1?(n+=1,t.push(n)):1===D[c+1][e]?n+=1:(n+=1,t.push(n),n=0));return t};return Object(O.jsx)(d.Provider,{value:{length:i,setLength:o,height:u,setHeight:h,constraintsX:b,constraintsY:w,constraints:k,board:D,editCell:function(e,t,n){var c=D[e];c[t]=n?1:0,I(D.map((function(e,t){return t===e?c:e})));var r=J(e),i=P(t);y([].concat(Object(f.a)(w.slice(0,e)),[r],Object(f.a)(w.slice(e+1,21)))),p([].concat(Object(f.a)(b.slice(0,t)),[i],Object(f.a)(b.slice(t+1,21))))},resetBoard:function(){p(5),y(5),I(m(i,u))}},children:t})},v=function(e){var t=e.row,n=e.col,c=Object(r.useContext)(d).editCell,i=Object(r.useState)(!1),o=Object(g.a)(i,2),a=o[0],s=o[1];return Object(O.jsx)(u.a,{width:"1.5rem",height:"1.5rem",background:a?"#4ECCC3":"#FFF",borderColor:"#ececec",borderWidth:"1px",cursor:"pointer",onClick:function(){return c(t,n,!a),void s(!a)}})},C=function(){var e=Object(r.useContext)(d).board;return Object(O.jsxs)(u.a,{height:"100%",alignItems:"center",justifyContent:"center",children:[Object(O.jsx)(j.a,{spacing:0,children:e.map((function(e,t){return Object(O.jsx)(u.a,{children:e.map((function(e,n){return Object(O.jsx)(v,{row:t,col:n},n)}))},t)}))}),Object(O.jsx)(u.a,{height:"60px",width:"1px"})]})},w=n(87),y=function(){var e=Object(r.useContext)(d).constraints;return Object(O.jsx)(u.a,{justifyContent:"center",alignItems:"center",width:"80%",children:Object(O.jsx)(w.a,{color:"#141414",textAlign:"center",children:JSON.stringify(e)})})},E=n(93),S=function(e){e.intiValue;var t=e.setValue;return Object(O.jsx)(u.a,{width:"100%",children:Object(O.jsxs)(E.a,{defaultValue:5,min:1,max:20,step:1,"aria-label":"slider-ex-2",focusThumbOnChange:!1,onChangeEnd:function(e){return t(e)},children:[Object(O.jsx)(E.d,{bg:"#e6e6e6",children:Object(O.jsx)(E.b,{bg:"#FFCC00"})}),Object(O.jsx)(E.c,{})]})})},k=function(e){var t=e.type,n=e.value,c=e.setValue;return Object(O.jsxs)(u.a,{flexDir:"column",p:2,width:"30%",children:[Object(O.jsxs)(u.a,{flexDir:"row",marginBottom:2,children:[Object(O.jsxs)(h.a,{color:"#141414",marginRight:2,children:[t,":"]}),Object(O.jsx)(h.a,{color:"#141414",children:n})]}),Object(O.jsx)(S,{setValue:c,intiValue:n})]})},F=function(){var e=Object(r.useContext)(d),t=e.length,n=e.height,c=e.setHeight,i=e.setLength;return Object(O.jsxs)(j.a,{spacing:4,justifyContent:"center",width:"80%",borderRadius:"20px",background:"#f5f5f5",p:8,margin:4,children:[Object(O.jsx)(b.a,{color:"#222222",children:"Nonogram Maker 5000"}),Object(O.jsxs)(u.a,{justifyContent:"space-between",p:2,width:"60%",children:[Object(O.jsx)(k,{type:"Height",value:n,setValue:c}),Object(O.jsx)(k,{type:"Length",value:t,setValue:i})]}),Object(O.jsx)(C,{}),Object(O.jsx)(y,{})]})};var V=function(){return Object(O.jsx)(a.a,{theme:s.theme,children:Object(O.jsxs)(u.a,{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"100vh",height:"100%",background:"linear-gradient(#4ECDC4 0%, #556270 100%)",children:[Object(O.jsx)(F,{}),Object(O.jsxs)(u.a,{fontSize:"sm",children:[Object(O.jsx)(h.a,{color:"white",marginRight:1,children:"made by:"}),Object(O.jsx)(l.a,{href:"https://github.com/tomer-shavit",isExternal:"true",color:"#4ECCC3",children:"Tomer Shavit"})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(79);o.a.render(Object(O.jsxs)(r.StrictMode,{children:[Object(O.jsx)(c.a,{}),Object(O.jsx)(p,{children:Object(O.jsx)(V,{})})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[80,1,2]]]);
//# sourceMappingURL=main.d993c1d0.chunk.js.map