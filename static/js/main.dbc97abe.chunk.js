(this.webpackJsonpiggsphotoshop=this.webpackJsonpiggsphotoshop||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),o=n.n(c),r=n(34),s=n.n(r),i=(n(149),n(150),n(10)),l=n(23),u=n(14),h=function(e){var t=e.photo,n=e.setOpen,o=t.id,r=t.category,s=t.image,i=t.price,h=t.title,j=t.likes,b=t.color,d=Object(c.useState)(!1),p=Object(l.a)(d,2),O=p[0],m=p[1],f=Object(u.c)((function(e){return e.auth})),x=Object(u.b)(),g=Object(c.useState)(0),y=Object(l.a)(g,2),v=y[0],S=y[1];Object(c.useEffect)((function(){if(0!==v){var e=j+v%2,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({like:e})};fetch("https://desolate-plateau-74310.herokuapp.com/likes/".concat(o),t)}}),[v]);var k="https://desolate-plateau-74310.herokuapp.com".concat(s),T="https://desolate-plateau-74310.herokuapp.com/image_file/".concat(o),w={boxShadow:"-6px -6px 50px ".concat(b)};return Object(a.jsxs)("div",{className:"image-card",children:[Object(a.jsx)("div",{className:"frame",style:O?w:{boxShadow:"-3px -3px 22px #fff"},children:Object(a.jsxs)("div",{onClick:function(){x({type:"SHOW_PHOTO",payload:t}),n(!0)},onMouseOver:function(){return m(!0)},onMouseOut:function(){return m(!1)},children:[O?Object(a.jsx)("h3",{children:h}):null,O?Object(a.jsx)("h3",{children:r}):null,Object(a.jsx)("img",{src:k,alt:r})]})}),Object(a.jsxs)("div",{className:"innards",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:["Price: $",i,".00"]})}),Object(a.jsx)("button",{"aria-label":"download button",className:"ui button circular",children:Object(a.jsx)("a",{style:{color:"black"},href:T,target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("i",{className:"download icon"})})}),f.id?Object(a.jsxs)("button",{"aria-label":"like button",onClick:function(){return S(v+1)},className:"ui button circular black",children:[Object(a.jsx)("i",{className:"heart icon"}),j+v%2]}):null,Object(a.jsx)("button",{"aria-label":"add to cart button",className:"ui button circular",onClick:function(){return x({type:"ADD_PHOTO",payload:t})},children:Object(a.jsx)("i",{style:{color:"black"},className:"cart plus icon"})})]})]})},j=n(129),b=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(u.c)((function(e){return e.photos})),s=Object(u.c)((function(e){return e.photo})),i=s.title,b=s.image,d="https://desolate-plateau-74310.herokuapp.com".concat(b);return Object(a.jsxs)(a.Fragment,{children:[n?Object(a.jsx)(j.a,{large:d,alt:i,onClose:function(){return o(!1)},hideDownload:!0}):null,Object(a.jsx)("div",{className:"card-container",children:r.map((function(e){return Object(a.jsx)(h,{setOpen:o,photo:e},e.id)}))})]})},d=n(171),p=n(172),O=function(e){return{type:"FETCH_USER_SUCCESS",payload:e}},m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),h=s[0],j=s[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),f=m[0],x=m[1],g=Object(c.useState)(!1),y=Object(l.a)(g,2),v=y[0],S=y[1],k=Object(c.useState)([]),T=Object(l.a)(k,2),w=T[0],C=T[1],E=Object(c.useState)([]),N=Object(l.a)(E,2),_=N[0],R=N[1],U=Object(i.f)(),I=Object(u.b)(),P=function(e){switch(e.target.name){case"username":o(e.target.value);break;case"email":x(e.target.value);break;case"password":j(e.target.value);break;default:return}},F=function(){return w?w.map((function(e){return e.split(" ")[0]})):[]};return Object(a.jsx)(a.Fragment,{children:v?Object(a.jsxs)(d.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:f,password:h})};fetch("https://desolate-plateau-74310.herokuapp.com/users",t).then((function(e){return e.json()})).then((function(e){e.errors?C(e.errors):fetch("https://desolate-plateau-74310.herokuapp.com/auth",t).then((function(e){return e.json()})).then((function(e){e.errors?C(e.errors):(localStorage.setItem("myToken",e.token),I(O(e)),U.push("/"))}))}))},children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Username")&&"Username must be valid",fluid:!0,type:"text",name:"username",value:n,onChange:P}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Password")&&"Password can't be blank",fluid:!0,type:"password",name:"password",value:h,onChange:P}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Email")&&"Email must be valid",fluid:!0,type:"text",name:"email",value:f,onChange:P}),Object(a.jsx)(p.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Signup"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{style:{color:"red"},children:_}),Object(a.jsxs)(d.a,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:h})};fetch("https://desolate-plateau-74310.herokuapp.com/auth",t).then((function(e){return e.json()})).then((function(e){e.error?R(e.error):(localStorage.setItem("myToken",e.token),I(O(e)),U.push("/"))}))},className:"login-form",children:[Object(a.jsx)("label",{name:"username",children:"Username:"}),Object(a.jsx)("input",{onChange:P,type:"text",name:"username",value:n}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{onChange:P,type:"password",name:"password",value:h}),Object(a.jsx)(p.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Login"}),Object(a.jsx)(p.a,{onClick:function(){return S(!0)},inverted:!0,style:{marginTop:"10px"},children:"Signup"})]})]})})},f=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(u.c)((function(e){return e.cart}),(function(e){return e.length===o}))),r=Object(u.b)(),s=Object(i.f)(),h=o.map((function(e){return parseInt(e.price)})).reduce((function(e,t){return e+t}),0);return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{fontSize:"20px"},className:"login-form",children:"Please Read the About page before you checkout"}),Object(a.jsxs)("div",{className:"cart-cont",children:[Object(a.jsx)("div",{className:"your-cart",children:"Your cart"}),0!==o.length?Object(a.jsx)("div",{className:"cart",children:o.map((function(e,t){return Object(a.jsxs)("div",{className:"cart-item",children:[e.title,": $",e.price,".00",Object(a.jsx)("button",{onClick:function(){return r({type:"REMOVE_FROM_CART",payload:t})},style:{float:"right"},className:"circular mini ui icon button black",children:Object(a.jsx)("i",{className:"x icon"})})]})}))}):null,Object(a.jsxs)("div",{className:"total",children:["Total: $",h,".00"]}),Object(a.jsx)("a",{href:"https://www.buymeacoffee.com/AnansiOmega",target:"_blank",children:Object(a.jsx)("button",{onClick:function(){r({type:"CLEAR_CART"}),s.push("/")},style:{marginLeft:"5px",width:"497px",color:"black"},className:"massive ui button",children:"Make a Donation"})})]})]})})},x=function(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("h1",{children:"What's going on here"}),Object(a.jsx)("h2",{style:{fontSize:"60px"},children:Object(a.jsx)("b",{children:"In this website you are not buying anything!"})}),Object(a.jsx)("p",{children:"The idea behind this website is to test my skills in creating an e-commerce website. Unfortunately, I have nothing to sell, so by adding these photos to your cart and purchasing them you are making a donation for the phenomenal work that I've been doing. You'll be redirected to another website that you can make a donation of your choice."}),Object(a.jsx)("p",{children:"Also, I've given you the ability to download any photo you'd like to your computer. Lastly, if you feel like making an account (which is not mandatory.) You will have the ability to like photography. So have at it. Try to have some fun. Maybe send some money to me. Or don't. It's fine."})]})},g=n(30),y=function(){var e=Object(u.c)((function(e){return e.cart}),(function(t){return t.length===e})),t=Object(u.c)((function(e){return e.auth})),n=Object(u.b)();return Object(a.jsxs)("div",{className:"ui menu inverted",children:[Object(a.jsx)(g.b,{to:"/",children:Object(a.jsx)("div",{className:"header item",children:"Igg's Photo Shop"})}),Object(a.jsx)(g.b,{to:"/about",className:"item",children:"About"}),Object(a.jsxs)(g.b,{className:"item",to:"/cart",children:[Object(a.jsx)(a.Fragment,{children:"Cart"}),Object(a.jsx)("div",{className:"ui circular label white",children:e.length})]}),t.id?Object(a.jsx)("a",{onClick:function(){localStorage.removeItem("myToken"),n({type:"LOGOUT_USER"})},className:"right menu item",children:"Logout"}):Object(a.jsx)(g.b,{className:"right menu item",to:"/login",children:"Login"})]})},v=n.p+"static/media/blackWoodBackground.fdd81561.jpg",S=function(){var e=Object(u.b)();return Object(c.useEffect)((function(){document.body.style.backgroundImage="url(".concat(v,")")}),[]),Object(c.useEffect)((function(){var t=localStorage.getItem("myToken"),n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};fetch("https://desolate-plateau-74310.herokuapp.com/current_user",n).then((function(e){return e.json()})).then((function(t){return e({type:"CURRENT_USER",payload:t})}))}),[]),Object(c.useEffect)((function(){fetch("https://desolate-plateau-74310.herokuapp.com/photos").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PHOTOS_SUCCESS",payload:t})}))}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{exact:!0,path:"/",component:b}),Object(a.jsx)(i.a,{path:"/login",component:m}),Object(a.jsx)(i.a,{path:"/cart",component:f}),Object(a.jsx)(i.a,{path:"/about",component:x})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},T=n(59),w={},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":case"CURRENT_USER":return t.payload;case"LOGOUT_USER":return{};default:return e}},E=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PHOTOS_SUCCESS":return t.payload;default:return e}},_={},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_PHOTO":return t.payload;default:return e}},U=n(130),I=[],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PHOTO":return[].concat(Object(U.a)(e),[t.payload]);case"REMOVE_FROM_CART":var n=e;return n.splice(t.payload,1),n;case"LOGOUT_USER":case"CLEAR_CART":return[];default:return e}},F=Object(T.b)({auth:C,photos:N,photo:R,cart:P}),A=(n(157),Object(T.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(a.jsx)(u.a,{store:A,children:Object(a.jsx)(g.a,{basename:"/IggsPhotoShop",children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})})})}),document.getElementById("root")),k()}},[[158,1,2]]]);
//# sourceMappingURL=main.dbc97abe.chunk.js.map