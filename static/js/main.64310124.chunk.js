(this.webpackJsonpiggsphotoshop=this.webpackJsonpiggsphotoshop||[]).push([[0],{213:function(e,t,n){},214:function(e,t,n){},344:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),o=n(32),s=n.n(o),i=(n(213),n(214),n(10)),l=n(19),u=n(20),h=n(189),j={showPhoto:function(e){return{type:"SHOW_PHOTO",payload:e}},addToCart:function(e){return{type:"ADD_PHOTO",payload:e}}},d=Object(u.b)((function(e){return{user:e.auth}}),j)((function(e){var t=e.photo,n=e.showPhoto,r=e.setOpen,o=e.addToCart,s=e.user,i=t.id,u=t.category,j=t.image,d=t.price,b=t.title,O=t.likes,p=Object(a.useState)([]),m=Object(l.a)(p,2),f=m[0],x=m[1],g=Object(a.useState)(!1),y=Object(l.a)(g,2),v=y[0],S=y[1],T=Object(a.useState)(0),C=Object(l.a)(T,2),k=C[0],N=C[1];Object(a.useEffect)((function(){if(0!==k){var e=O+k%2,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({like:e})};fetch("http://localhost:3000/likes/".concat(i),t)}}),[k]);var w="http://localhost:3000".concat(j),E="http://localhost:3000/image_file/".concat(i),_={boxShadow:"-6px -6px 50px ".concat(f[1])};return Object(c.jsxs)("div",{className:"image-card",children:[Object(c.jsx)("div",{className:"frame",style:v?_:{boxShadow:"-3px -3px 22px #fff"},children:Object(c.jsxs)("div",{onClick:function(){n(t),r(!0)},onMouseOver:function(){return S(!0)},onMouseOut:function(){return S(!1)},children:[v?Object(c.jsx)("h3",{children:b}):null,v?Object(c.jsx)("h3",{children:u}):null,Object(c.jsx)("img",{src:w,alt:u})]})}),Object(c.jsxs)("div",{className:"innards",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:["Price: $",d,".00"]})}),Object(c.jsx)("button",{className:"ui button circular",children:Object(c.jsx)("a",{style:{color:"black"},href:E,target:"_blank",rel:"noreferrer noopener",children:Object(c.jsx)("i",{className:"download icon"})})}),s.id?Object(c.jsxs)("button",{onClick:function(){return N(k+1)},className:"ui button circular black",children:[Object(c.jsx)("i",{className:"heart icon"}),O+k%2]}):null,Object(c.jsx)("button",{className:"ui button circular",onClick:function(){return o(t)},children:Object(c.jsx)("i",{style:{color:"black"},className:"cart plus icon"})})]}),Object(c.jsx)(h.a,{src:w,getColors:function(e){return x(e)}})]})})),b=n(193),O={fetchPhotosSuccess:function(e){return{type:"FETCH_PHOTOS_SUCCESS",payload:e}}},p=Object(u.b)((function(e){return{photos:e.photos,photo:e.photo}}),O)((function(e){var t=e.fetchPhotosSuccess,n=e.photos,r=e.photo,o=Object(a.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];Object(a.useEffect)((function(){fetch("https://desolate-plateau-74310.herokuapp.com/photos").then((function(e){return e.json()})).then((function(e){return t(e)}))}),[]);var h=r.title,j=r.image,O="https://desolate-plateau-74310.herokuapp.com".concat(j);return Object(c.jsxs)(c.Fragment,{children:[i?Object(c.jsx)(b.a,{large:O,alt:h,onClose:function(){return u(!1)},hideDownload:!0}):null,Object(c.jsx)("div",{className:"card-container",children:n.map((function(e){return Object(c.jsx)(d,{setOpen:u,photo:e},e.id)}))})]})})),m=n(357),f=n(358),x={fetchUserSuccess:function(e){return{type:"FETCH_USER_SUCCESS",payload:e}}},g=Object(u.b)(null,x)((function(e){var t=e.fetchUserSuccess,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],s=r[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),j=h[0],d=h[1],b=Object(a.useState)(""),O=Object(l.a)(b,2),p=O[0],x=O[1],g=Object(a.useState)(!1),y=Object(l.a)(g,2),v=y[0],S=y[1],T=Object(a.useState)([]),C=Object(l.a)(T,2),k=C[0],N=C[1],w=Object(a.useState)([]),E=Object(l.a)(w,2),_=E[0],U=E[1],P=Object(i.f)(),I=function(e){switch(e.target.name){case"username":s(e.target.value);break;case"email":x(e.target.value);break;case"password":d(e.target.value);break;default:return}},R=function(){return k?k.map((function(e){return e.split(" ")[0]})):[]};return Object(c.jsx)(c.Fragment,{children:v?Object(c.jsxs)(m.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,email:p,password:j})};fetch("http://localhost:3000/users",n).then((function(e){return e.json()})).then((function(e){e.errors?N(e.errors):fetch("http://localhost:3000/auth",n).then((function(e){return e.json()})).then((function(e){e.errors?N(e.errors):(localStorage.setItem("myToken",e.token),t(e),P.push("/"))}))}))},children:[Object(c.jsx)("label",{children:"Username:"}),Object(c.jsx)(m.a.Input,{error:!!R().includes("Username")&&"Username must be valid",fluid:!0,type:"text",name:"username",value:o,onChange:I}),Object(c.jsx)("label",{children:"Password:"}),Object(c.jsx)(m.a.Input,{error:!!R().includes("Password")&&"Password can't be blank",fluid:!0,type:"password",name:"password",value:j,onChange:I}),Object(c.jsx)("label",{children:"Email:"}),Object(c.jsx)(m.a.Input,{error:!!R().includes("Email")&&"Email must be valid",fluid:!0,type:"text",name:"email",value:p,onChange:I}),Object(c.jsx)(f.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Signup"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{style:{color:"red"},children:_}),Object(c.jsxs)(m.a,{onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:j})};fetch("http://localhost:3000/auth",n).then((function(e){return e.json()})).then((function(e){e.error?U(e.error):(localStorage.setItem("myToken",e.token),t(e),P.push("/"))}))},className:"login-form",children:[Object(c.jsx)("label",{name:"username",children:"Username:"}),Object(c.jsx)("input",{onChange:I,type:"text",name:"username",value:o}),Object(c.jsx)("label",{children:"Password:"}),Object(c.jsx)("input",{onChange:I,type:"password",name:"password",value:j}),Object(c.jsx)(f.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Login"}),Object(c.jsx)(f.a,{onClick:function(){return S(!0)},inverted:!0,style:{marginTop:"10px"},children:"Signup"})]})]})})})),y=n(191),v={clearCart:function(e){return{type:"CLEAR_CART"}}},S=Object(u.b)((function(e){return{cart:e.cart}}),v)((function(e){var t=e.cart,n=e.clearCart,r=Object(a.useState)(!1),o=Object(l.a)(r,2),s=o[0],u=o[1],h=Object(i.f)(),j=t.map((function(e){return parseInt(e.price)})).reduce((function(e,t){return e+t}),0);return Object(c.jsx)(c.Fragment,{children:s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"total-paypal",children:["Total: $",j,".00"]}),Object(c.jsx)(y.PayPalButton,{amount:j,shippingPreference:"NO_SHIPPING",onSuccess:function(e,t){alert("Thanks for purchasing "+e.payer.name.given_name),n(),h.push("/")}})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:{fontSize:"20px"},className:"login-form",children:"Please Read the About page before you checkout"}),Object(c.jsxs)("div",{className:"cart-cont",children:[Object(c.jsx)("div",{className:"your-cart",children:"Your cart"}),0!==t.length?Object(c.jsx)("div",{className:"cart",children:t.map((function(e){return Object(c.jsxs)("div",{className:"cart-item",children:[e.title,": $",e.price,".00"]})}))}):null,Object(c.jsxs)("div",{className:"total",children:["Total: $",j,".00"]}),Object(c.jsx)("button",{style:{marginLeft:"5px",width:"497px",color:"black"},className:"massive ui button",onClick:function(){return u(!0)},children:"Make a Donation"})]})]})})})),T=function(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("h1",{children:"What's going on here"}),Object(c.jsx)("h2",{style:{fontSize:"60px"},children:Object(c.jsx)("b",{children:"In this website you are not buying anything!"})}),Object(c.jsx)("p",{children:"The idea behind this website is to test my skills in creating an e-commerce website. Unfortunately, I have nothing to sell, so by adding these photos to your cart and purchasing them you are making a donation for the phenomenal work that I've been doing."}),Object(c.jsx)("p",{children:"Also, I've given you the ability to download any photo you'd like to your computer. Lastly, if you feel like making an account (which is not mandatory.) You will have the ability to like photography. So have at it. Try to have some fun. Maybe send some money to me. Or don't. It's fine."})]})},C=n(33),k={logoutUser:function(){return{type:"LOGOUT_USER"}}},N=Object(u.b)((function(e){return{cart:e.cart,auth:e.auth}}),k)((function(e){var t=e.cart,n=e.auth,a=e.logoutUser;return Object(c.jsxs)("div",{className:"ui menu inverted",children:[Object(c.jsx)(C.b,{to:"/",children:Object(c.jsx)("div",{className:"header item",children:"Igg's Photo Shop"})}),Object(c.jsx)(C.b,{to:"/about",className:"item",children:"About"}),Object(c.jsxs)(C.b,{className:"item",to:"/cart",children:[Object(c.jsx)(c.Fragment,{children:"Cart"}),Object(c.jsx)("div",{className:"ui circular label white",children:t.length})]}),n.id?Object(c.jsx)("a",{onClick:function(){localStorage.removeItem("myToken"),a()},className:"right menu item",children:"Logout"}):Object(c.jsx)(C.b,{className:"right menu item",to:"/login",children:"Login"})]})})),w=n.p+"static/media/blackWoodBackground.fdd81561.jpg",E={currentUser:function(e){return{type:"CURRENT_USER",payload:e}}},_=Object(u.b)(null,E)((function(e){var t=e.currentUser;return Object(a.useEffect)((function(){document.body.style.backgroundImage="url(".concat(w,")")}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("myToken"),n={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};fetch("http://localhost:3000/current_user",n).then((function(e){return e.json()})).then((function(e){return t(e)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(N,{}),Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(c.jsx)(i.a,{path:"/login",component:g}),Object(c.jsx)(i.a,{path:"/cart",component:S}),Object(c.jsx)(i.a,{path:"/about",component:T})]})]})})),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},P=n(64),I={},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":case"CURRENT_USER":return t.payload;case"LOGOUT_USER":return{};default:return e}},F=[],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PHOTOS_SUCCESS":return t.payload;default:return e}},D={},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_PHOTO":return t.payload;default:return e}},A=n(194),B=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PHOTO":return[].concat(Object(A.a)(e),[t.payload]);case"LOGOUT_USER":case"CLEAR_CART":return[];default:return e}},J=Object(P.b)({auth:R,photos:L,photo:H,cart:G}),M=(n(343),Object(P.c)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(c.jsx)(u.a,{store:M,children:Object(c.jsx)(C.a,{children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_,{})})})}),document.getElementById("root")),U()}},[[344,1,2]]]);
//# sourceMappingURL=main.64310124.chunk.js.map