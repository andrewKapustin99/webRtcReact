(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t){},112:function(e,t){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),r=a.n(c),i=a(171),l=a(166),s=a(161),o=a(164),d=a(132),j=a(70),m=a(46),u=a.n(m),b=a(4);const x=Object(n.createContext)(),p=e=>{let{children:t}=e;const[a,c]=Object(n.useState)(!1),[r,i]=Object(n.useState)(!1),[l,s]=Object(n.useState)(),[o,d]=Object(n.useState)(""),[m,p]=Object(n.useState)({}),[O,h]=Object(n.useState)(""),[g]=Object(n.useState)(Math.floor(10+90*Math.random()).toString()),f=Object(j.io)("https://videotradedev.ru",{query:{callerId:g}}),v=Object(n.useRef)(),C=Object(n.useRef)(),w=Object(n.useRef)();Object(n.useEffect)((()=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((e=>{s(e),v.current.srcObject=e})),h(g),f.on("callUser",(e=>{let{from:t,name:a,signal:n}=e;console.log("fafafaada"),p({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(b.jsx)(x.Provider,{value:{call:m,callAccepted:a,myVideo:v,userVideo:C,stream:l,name:o,setName:d,callEnded:r,me:O,callUser:e=>{const t=new u.a({initiator:!0,trickle:!1,stream:l,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:89.221.60.156:3478",username:"andrew",credential:"kapustin"}]}});t.on("signal",(t=>{f.emit("callUser",{userToCall:e,signalData:t,from:O,name:o})})),t.on("stream",(e=>{C.current.srcObject=e})),f.on("callAccepted",(e=>{c(!0),t.signal(e)})),w.current=t},leaveCall:()=>{i(!0),w.current.destroy(),window.location.reload()},answerCall:()=>{c(!0);const e=new u.a({initiator:!1,trickle:!1,stream:l,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:89.221.60.156:3478",username:"andrew",credential:"kapustin"}]}});e.on("signal",(e=>{f.emit("answerCall",{signal:e,to:m.from})})),e.on("stream",(e=>{C.current.srcObject=e})),e.signal(m.signal),w.current=e}},children:t})},O=Object(s.a)((e=>({video:{width:"250px",[e.breakpoints.down("xs")]:{width:"300px"}},gridContainer:{justifyContent:"center",[e.breakpoints.down("xs")]:{flexDirection:"column"}},paper:{padding:"10px",border:"2px solid black",margin:"10px"}})));var h=()=>{const{name:e,callAccepted:t,myVideo:a,userVideo:c,callEnded:r,stream:i,call:s}=Object(n.useContext)(x),j=O();return Object(b.jsxs)(o.a,{container:!0,className:j.gridContainer,children:[i&&Object(b.jsx)(d.a,{className:j.paper,children:Object(b.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(b.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:e||"Name"}),Object(b.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0,className:j.video})]})}),t&&!r&&Object(b.jsx)(d.a,{className:j.paper,children:Object(b.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(b.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:s.name||"Name"}),Object(b.jsx)("video",{playsInline:!0,ref:c,autoPlay:!0,className:j.video})]})})]})},g=a(167),f=a(172),v=a(173),C=a(76),w=a(168),y=a(169),N=a(170);const k=Object(s.a)((e=>({root:{display:"flex",flexDirection:"column"},gridContainer:{width:"100%",[e.breakpoints.down("xs")]:{flexDirection:"column"}},container:{width:"300px",margin:"35px 0",padding:0,[e.breakpoints.down("xs")]:{width:"80%"}},margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}})));var S=e=>{let{children:t}=e;const{me:a,callAccepted:c,name:r,setName:i,callEnded:s,leaveCall:j,callUser:m}=Object(n.useContext)(x),[u,p]=Object(n.useState)(""),O=k();return Object(b.jsx)(g.a,{className:O.container,children:Object(b.jsxs)(d.a,{elevation:10,className:O.paper,children:[Object(b.jsx)("form",{className:O.root,noValidate:!0,autoComplete:"off",children:Object(b.jsxs)(o.a,{container:!0,className:O.gridContainer,children:[Object(b.jsxs)(o.a,{item:!0,xs:12,md:6,className:O.padding,children:[Object(b.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(b.jsx)(f.a,{label:"Name",value:r,onChange:e=>i(e.target.value),fullWidth:!0}),Object(b.jsx)(C.CopyToClipboard,{text:a,className:O.margin,children:Object(b.jsx)(v.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(b.jsx)(w.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(b.jsxs)(o.a,{item:!0,xs:12,md:6,className:O.padding,children:[Object(b.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(b.jsx)(f.a,{label:"ID to call",value:u,onChange:e=>p(e.target.value),fullWidth:!0}),c&&!s?Object(b.jsx)(v.a,{variant:"contained",color:"secondary",startIcon:Object(b.jsx)(y.a,{fontSize:"large"}),fullWidth:!0,onClick:j,className:O.margin,children:"Hang Up"}):Object(b.jsx)(v.a,{variant:"contained",color:"primary",startIcon:Object(b.jsx)(N.a,{fontSize:"large"}),fullWidth:!0,onClick:()=>m(u),className:O.margin,children:"Call"})]})]})}),t]})})};var I=()=>{const{answerCall:e,call:t,callAccepted:a}=Object(n.useContext)(x);return Object(b.jsx)(b.Fragment,{children:t.isReceivingCall&&!a&&Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(b.jsxs)("h1",{children:[t.name," is calling:"]}),Object(b.jsx)(v.a,{variant:"contained",color:"primary",onClick:e,children:"Answer"})]})})};const D=Object(s.a)((e=>({appBar:{borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"300px",border:"2px solid black",[e.breakpoints.down("xs")]:{width:"90%"}},image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}})));var A=()=>{const e=D();return Object(b.jsxs)("div",{className:e.wrapper,children:[Object(b.jsx)(i.a,{className:e.appBar,position:"static",color:"inherit",children:Object(b.jsx)(l.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(b.jsx)(h,{}),Object(b.jsx)(S,{children:Object(b.jsx)(I,{})})]})};a(130);r.a.render(Object(b.jsx)(p,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.3396832c.chunk.js.map