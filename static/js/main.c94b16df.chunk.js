(this.webpackJsonpiggsphotoshop=this.webpackJsonpiggsphotoshop||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),o=n.n(c),r=n(34),s=n.n(r),i=(n(149),n(15)),l=(n(150),n(10)),u=n(12),j=function(e){var t=e.photo,n=e.setOpen,o=t.id,r=t.category,s=t.image,l=t.price,j=t.title,h=t.likes,b=t.color,d=Object(c.useState)(!1),O=Object(i.a)(d,2),p=O[0],m=O[1],f=Object(u.d)((function(e){return e.auth})),g=Object(u.c)(),x=Object(c.useState)(0),y=Object(i.a)(x,2),v=y[0],S=y[1];Object(c.useEffect)((function(){if(0!==v){var e=h+v%2,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({like:e})};fetch("https://desolate-plateau-74310.herokuapp.com/likes/".concat(o),t)}}),[v]);var k="https://desolate-plateau-74310.herokuapp.com".concat(s),w="https://desolate-plateau-74310.herokuapp.com/image_file/".concat(o),E={boxShadow:"-6px -6px 50px ".concat(b)};return Object(a.jsxs)("div",{className:"image-card",children:[Object(a.jsx)("div",{className:"frame",style:p?E:{boxShadow:"-3px -3px 22px #fff"},children:Object(a.jsxs)("div",{onClick:function(){g({type:"SHOW_PHOTO",payload:t}),n(!0)},onMouseOver:function(){return m(!0)},onMouseOut:function(){return m(!1)},children:[p?Object(a.jsx)("h3",{children:j}):null,p?Object(a.jsx)("h3",{children:r}):null,Object(a.jsx)("img",{src:k,alt:r})]})}),Object(a.jsxs)("div",{className:"innards",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:["Price: $",l,".00"]})}),Object(a.jsx)("button",{"aria-label":"download button",className:"ui button circular",children:Object(a.jsx)("a",{style:{color:"black"},href:w,target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("i",{className:"download icon"})})}),f.id?Object(a.jsxs)("button",{"aria-label":"like button",onClick:function(){return S(v+1)},className:"ui button circular black",children:[Object(a.jsx)("i",{className:"heart icon"}),h+v%2]}):null,Object(a.jsx)("button",{"aria-label":"add to cart button",className:"ui button circular",onClick:function(){return g({type:"ADD_PHOTO",payload:t})},children:Object(a.jsx)("i",{style:{color:"black"},className:"cart plus icon"})})]})]})},h=n(130),b=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),l=s[0],b=s[1],d=Object(u.d)((function(e){return e.photos}),u.b),O=Object(u.d)((function(e){return e.photo}));Object(c.useEffect)((function(){d.length<1?b(!0):b(!1)}),[d]);var p=O.title,m=O.image,f="https://desolate-plateau-74310.herokuapp.com".concat(m);return Object(a.jsxs)(a.Fragment,{children:[n?Object(a.jsx)(h.a,{large:f,alt:p,onClose:function(){return o(!1)},hideDownload:!0}):null,l?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{style:{color:"white"},children:"Loading Images, this might take a while"}),Object(a.jsx)("p",{style:{color:"white"},children:"my apologies, I'm using free services"})]}):Object(a.jsx)("div",{className:"card-container",children:d.map((function(e){return Object(a.jsx)(j,{setOpen:o,photo:e},e.id)}))})]})},d=n(171),O=n(172),p=function(e){return{type:"FETCH_USER_SUCCESS",payload:e}},m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),j=s[0],h=s[1],b=Object(c.useState)(""),m=Object(i.a)(b,2),f=m[0],g=m[1],x=Object(c.useState)(!1),y=Object(i.a)(x,2),v=y[0],S=y[1],k=Object(c.useState)([]),w=Object(i.a)(k,2),E=w[0],T=w[1],C=Object(c.useState)([]),N=Object(i.a)(C,2),_=N[0],R=N[1],U=Object(l.f)(),I=Object(u.c)(),P=function(e){switch(e.target.name){case"username":o(e.target.value);break;case"email":g(e.target.value);break;case"password":h(e.target.value);break;default:return}},F=function(){return E?E.map((function(e){return e.split(" ")[0]})):[]};return Object(a.jsx)(a.Fragment,{children:v?Object(a.jsxs)(d.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:f,password:j})};fetch("https://desolate-plateau-74310.herokuapp.com/users",t).then((function(e){return e.json()})).then((function(e){e.errors?T(e.errors):fetch("https://desolate-plateau-74310.herokuapp.com/auth",t).then((function(e){return e.json()})).then((function(e){e.errors?T(e.errors):(localStorage.setItem("myToken",e.token),I(p(e)),U.push("/"))}))}))},children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Username")&&"Username must be valid",fluid:!0,type:"text",name:"username",value:n,onChange:P}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Password")&&"Password can't be blank",fluid:!0,type:"password",name:"password",value:j,onChange:P}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(d.a.Input,{error:!!F().includes("Email")&&"Email must be valid",fluid:!0,type:"text",name:"email",value:f,onChange:P}),Object(a.jsx)(O.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Signup"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{style:{color:"red"},children:_}),Object(a.jsxs)(d.a,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:j})};fetch("https://desolate-plateau-74310.herokuapp.com/auth",t).then((function(e){return e.json()})).then((function(e){e.error?R(e.error):(localStorage.setItem("myToken",e.token),I(p(e)),U.push("/"))}))},className:"login-form",children:[Object(a.jsx)("label",{name:"username",children:"Username:"}),Object(a.jsx)("input",{onChange:P,type:"text",name:"username",value:n}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{onChange:P,type:"password",name:"password",value:j}),Object(a.jsx)(O.a,{inverted:!0,style:{marginTop:"10px"},type:"submit",children:"Login"}),Object(a.jsx)(O.a,{onClick:function(){return S(!0)},inverted:!0,style:{marginTop:"10px"},children:"Signup"})]})]})})},f=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=(t[1],Object(u.d)((function(e){return e.cart}),(function(e){return e.length===o}))),r=Object(u.c)(),s=Object(l.f)(),j=o.map((function(e){return parseInt(e.price)})).reduce((function(e,t){return e+t}),0);return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{fontSize:"20px"},className:"login-form",children:"Please Read the About page before you checkout"}),Object(a.jsxs)("div",{className:"cart-cont",children:[Object(a.jsx)("div",{className:"your-cart",children:"Your cart"}),0!==o.length?Object(a.jsx)("div",{className:"cart",children:o.map((function(e,t){return Object(a.jsxs)("div",{className:"cart-item",children:[e.title,": $",e.price,".00",Object(a.jsx)("button",{onClick:function(){return r({type:"REMOVE_FROM_CART",payload:t})},style:{float:"right"},className:"circular mini ui icon button black",children:Object(a.jsx)("i",{className:"x icon"})})]})}))}):null,Object(a.jsxs)("div",{className:"total",children:["Total: $",j,".00"]}),Object(a.jsx)("a",{href:"https://www.buymeacoffee.com/AnansiOmega",target:"_blank",children:Object(a.jsx)("button",{onClick:function(){r({type:"CLEAR_CART"}),s.push("/")},style:{marginLeft:"5px",width:"497px",color:"black"},className:"massive ui button",children:"Make a Donation"})})]})]})})},g=function(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("h1",{children:"What's going on here"}),Object(a.jsx)("h2",{style:{fontSize:"60px"},children:Object(a.jsx)("b",{children:"In this website you are not buying anything!"})}),Object(a.jsx)("p",{children:"The idea behind this website is to test my skills in creating an e-commerce website. Unfortunately, I have nothing to sell, so by adding these photos to your cart and purchasing them you are making a donation for the phenomenal work that I've been doing. You'll be redirected to another website that you can make a donation of your choice."}),Object(a.jsx)("p",{children:"Also, I've given you the ability to download any photo you'd like to your computer. Lastly, if you feel like making an account (which is not mandatory.) You will have the ability to like photography. So have at it. Try to have some fun. Maybe send some money to me. Or don't. It's fine."})]})},x=n(30),y=function(){var e=Object(u.d)((function(e){return e.cart}),(function(t){return t.length===e})),t=Object(u.d)((function(e){return e.auth})),n=Object(u.c)();return Object(a.jsxs)("div",{className:"ui menu inverted",children:[Object(a.jsx)(x.b,{to:"/",children:Object(a.jsx)("div",{className:"header item",children:"Igg's Photo Shop"})}),Object(a.jsx)(x.b,{to:"/about",className:"item",children:"About"}),Object(a.jsxs)(x.b,{className:"item",to:"/cart",children:[Object(a.jsx)(a.Fragment,{children:"Cart"}),Object(a.jsx)("div",{className:"ui circular label white",children:e.length})]}),t.id?Object(a.jsx)("a",{onClick:function(){localStorage.removeItem("myToken"),n({type:"LOGOUT_USER"})},className:"right menu item",children:"Logout"}):Object(a.jsx)(x.b,{className:"right menu item",to:"/login",children:"Login"})]})},v=n.p+"static/media/blackWoodBackground.fdd81561.jpg",S=function(){var e=Object(u.c)(),t=Object(c.useState)(1),n=Object(i.a)(t,2),o=n[0],r=n[1],s=Object(c.useState)(""),j=Object(i.a)(s,2),h=j[0],d=j[1],O=Object(c.useState)(500),p=Object(i.a)(O,2),x=p[0],S=p[1];return Object(c.useEffect)((function(){document.body.style.backgroundImage="url(".concat(v,")"),document.addEventListener("scroll",(function(){return d(window.scrollY)}))}),[]),Object(c.useEffect)((function(){h>x&&(r(o+1),S(x+500))}),[h]),Object(c.useEffect)((function(){fetch("https://desolate-plateau-74310.herokuapp.com/photos?page=".concat(o)).then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"FETCH_PHOTOS_SUCCESS",payload:t})}))}),[o]),Object(c.useEffect)((function(){var t=localStorage.getItem("myToken");if(t){var n={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};fetch("https://desolate-plateau-74310.herokuapp.com/current_user",n).then((function(e){return e.json()})).then((function(t){return e({type:"CURRENT_USER",payload:t})}))}}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(a.jsx)(l.a,{path:"/login",component:m}),Object(a.jsx)(l.a,{path:"/cart",component:f}),Object(a.jsx)(l.a,{path:"/about",component:g})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},w=n(59),E={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SUCCESS":case"CURRENT_USER":return t.payload;case"LOGOUT_USER":return{};default:return e}},C=n(82),N=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PHOTOS_SUCCESS":return[].concat(Object(C.a)(e),Object(C.a)(t.payload));default:return e}},R={},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_PHOTO":return t.payload;default:return e}},I=[],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PHOTO":return[].concat(Object(C.a)(e),[t.payload]);case"REMOVE_FROM_CART":var n=e;return n.splice(t.payload,1),n;case"LOGOUT_USER":case"CLEAR_CART":return[];default:return e}},F=Object(w.b)({auth:T,photos:_,photo:U,cart:P}),L=(n(157),Object(w.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(a.jsx)(u.a,{store:L,children:Object(a.jsx)(x.a,{basename:"/IggsPhotoShop",children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})})})}),document.getElementById("root")),k()}},[[158,1,2]]]);
//# sourceMappingURL=main.c94b16df.chunk.js.map