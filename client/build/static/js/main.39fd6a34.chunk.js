(this["webpackJsonpclient-melichallenge"]=this["webpackJsonpclient-melichallenge"]||[]).push([[0],{144:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(51),n=r.n(a),i=r(11),o=r(6),s=r(158),d=r(159),l=r(168),j=r(169),h=r(167),b=r(165),u=r(147),p=r(161),g=r(13),x=r(95),m=r(96),O=r(32),f=r(48),v=r.n(f),w=r(73),y=r(45),_=r.n(y),S="GET_PRODUCTS",C="GET_DETAIL",k="RESET_DETAIL",z="RESET_PRODUCTS",I="ERROR_DETAIL",F="ERROR_PRODUCT";function A(){return function(e){e({type:z})}}var D=r(26),L=r(2);function T(){var e=Object(D.b)(),t=Object(i.e)(),r=Object(c.useState)(""),a=Object(o.a)(r,2),n=a[0],f=a[1];function v(r){r.preventDefault(),e((function(e){e({type:k})})),t.push("/items?search=".concat(n))}return Object(L.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(L.jsx)(s.a,{backgroundColor:"primary.500",paddingTop:3,paddingBottom:1.5,boxShadow:"sm",children:Object(L.jsx)(d.a,{maxWidth:"container.xl",children:Object(L.jsxs)(l.a,{spacing:3,children:[Object(L.jsxs)(l.a,{direction:"row",justifyContent:"space-between",children:[Object(L.jsxs)(l.a,{direction:"row",spacing:12,flex:1,children:[Object(L.jsx)(O.b,{to:"/",children:Object(L.jsx)(j.a,{cursor:"pointer",onClick:function(t){e(A())},src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1634924370/logo_y1ctl4.png",objectFit:"contain",height:8})}),Object(L.jsxs)(l.a,{padding:1,boxShadow:"md",borderRadius:"sm",backgroundColor:"white",maxWidth:600,maxHeight:"2.5rem",width:"100%",direction:"row",alignItems:"center",divider:Object(L.jsx)(l.b,{}),children:[Object(L.jsx)(h.a,{onChange:function(e){return function(e){f(e.target.value)}(e)},paddingX:2,fontSize:"14px",placeholder:"Buscar productos,marcas y m\xe1s...",fontWeight:"thin",variant:"unstyled"}),Object(L.jsx)(b.a,{type:"submit",backgroundColor:"transparent",width:"1rem",_hover:"backgroundColor=transparent",children:Object(L.jsx)(u.a,{as:g.e,cursor:"pointer",width:6,height:5,color:"gray.400"})})]})]}),Object(L.jsx)(l.a,{direction:"row",alignItems:"center",color:"blackAlpha.700",spacing:3,children:Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1634935208/D_NQ_877425-MLA47306668299_082021-OO_xlu2tw.webp",height:"2.2rem",width:"19rem"})})]}),Object(L.jsxs)(l.a,{direction:"row",justifyContent:"space-between",alignItems:"baseline",children:[Object(L.jsxs)(l.a,{direction:"row",spacing:12,alignItems:"baseline",children:[Object(L.jsxs)(l.a,{alignItems:"center",direction:"row",spacing:1,children:[Object(L.jsx)(u.a,{color:"blackAlpha.800",cursor:"pointer",as:x.a,width:6,height:6}),Object(L.jsxs)(l.a,{spacing:0,children:[Object(L.jsxs)(p.a,{lineHeight:"normal",fontSize:"11",color:"blackAlpha.500",children:["Enviar a"," "]}),Object(L.jsx)(p.a,{lineHeight:"normal",fontSize:"12.5px",children:"Rafaela,Vieytes 14"})]})]}),Object(L.jsxs)(l.a,{cursor:"pointer",direction:"row",fontSize:"12.5px",color:"blackAlpha.600",spacing:5,children:[Object(L.jsxs)(p.a,{children:["Categorias",Object(L.jsx)(u.a,{height:3,width:3,as:g.c})]}),Object(L.jsx)(p.a,{children:"Ofertas"}),Object(L.jsx)(p.a,{children:"Historial"}),Object(L.jsx)(p.a,{children:"Supermercado"}),Object(L.jsx)(p.a,{children:"Moda"}),Object(L.jsx)(p.a,{children:"Vender"}),Object(L.jsx)(p.a,{children:"Ayuda"})]})]}),Object(L.jsxs)(l.a,{cursor:"pointer",direction:"row",spacing:6,color:"blackAlpha.700",fontSize:"12.5px",alignItems:"center",children:[Object(L.jsx)(p.a,{children:"Cre\xe1 tu cuenta"}),Object(L.jsx)(p.a,{children:"Ingres\xe1"}),Object(L.jsx)(p.a,{children:"Mis compras"}),Object(L.jsx)(u.a,{as:m.a,width:6,height:6})]})]})]})})}),Object(L.jsx)(s.a,{children:Object(L.jsx)(d.a,{alignSelf:"center",maxWidth:"container.xl",paddingX:0})})]})}function R(e){var t=e.condition,r=e.sold_quantity,c=e.title,a=e.categories;function n(e,t){return Math.floor(Math.random()*(t-e+1))+e}return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(u.a,{position:"relative",width:6,height:6,cursor:"pointer",color:"#3483fa",top:"4rem",left:"15.5rem",as:g.d}),Object(L.jsxs)(p.a,{color:"blackAlpha.600",fontSize:"sm",children:["new"===t?"Nuevo":"Usado"," | ",r," vendidos"]}),Object(L.jsxs)(p.a,{maxWidth:"85%",fontWeight:"medium",fontSize:"xl",lineHeight:"shorter",children:[" ",c]}),Object(L.jsxs)(l.a,{direction:"row",cursor:"pointer",alignItems:"center",spacing:1,children:[Object(L.jsx)(u.a,{color:"#3483fa",as:g.a}),Object(L.jsx)(u.a,{color:"#3483fa",as:g.a}),Object(L.jsx)(u.a,{color:"#3483fa",as:g.a}),Object(L.jsx)(u.a,{color:"#3483fa",as:g.a}),Object(L.jsx)(u.a,{color:"#3483fa",as:g.f}),Object(L.jsxs)(p.a,{color:"blackAlpha.600",fontSize:"sm",children:[n(1,20)," opiniones"]})]}),r>=150?Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsx)(p.a,{cursor:"pointer",color:"white",backgroundColor:"#f73",paddingLeft:1,fontWeight:"semibold",borderRadius:"sm",width:"5.5rem",fontSize:"xs",children:"M\xc1S VENDIDO"}),Object(L.jsxs)(p.a,{cursor:"pointer",color:"#3483fa",fontSize:"xs",children:[n(1,12),"\xba en ",a]})]}):null]})}var E=r(97);function W(e){var t=e.price;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(l.a,{spacing:0,children:[Object(L.jsxs)(p.a,{fontSize:"xx-large",fontWeight:"light",children:["$",t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")]}),Object(L.jsxs)(p.a,{maxWidth:"80%",children:["en 12x ",(t/12).toFixed(2)," pagando con Mercado Cr\xe9dito"]}),Object(L.jsx)(p.a,{cursor:"pointer",color:"#3483fa",fontSize:"small",children:"Ver los medios de pago"})]}),Object(L.jsxs)(l.a,{spacing:0,children:[Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsxs)(p.a,{children:[Object(L.jsx)(u.a,{width:4,height:4,as:E.a})," Env\xedo a todo el pa\xeds"]}),Object(L.jsxs)(p.a,{color:"#00a650",fontWeight:"extrabold",fontSize:"sm",fontFamily:"sans-serif",children:[Object(L.jsx)(u.a,{as:g.b}),Object(L.jsx)("em",{children:"FULL "}),Object(L.jsx)(u.a,{height:3,width:3,color:"blackAlpha.600",as:g.c})]})]}),Object(L.jsxs)(l.a,{paddingLeft:"5",spacing:0,children:[Object(L.jsx)(p.a,{color:"blackAlpha.600",fontSize:"13",children:"Conoc\xe9 los tiempos y las formas de env\xedo."}),Object(L.jsx)(p.a,{cursor:"pointer",color:"#3483fa",fontSize:"xs",children:"Calcular cu\xe1ndo llega"})]})]})]})}function M(e){var t=e.available_quantity;return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(l.a,{paddingTop:5,children:[Object(L.jsx)(p.a,{fontWeight:"medium",fontSize:"15",children:"Stock disponible"}),Object(L.jsxs)(l.a,{direction:"row",spacing:1,alignItems:"center",paddingTop:3,children:[Object(L.jsxs)(p.a,{fontSize:"15",fontWeight:"normal",children:["Cantidad: ",Object(L.jsx)("b",{children:"1 unidad"})," ",Object(L.jsx)(u.a,{height:3,width:3,color:"#3483fa",cursor:"pointer",as:g.c})]}),Object(L.jsxs)(p.a,{fontSize:"xs",color:"blackAlpha.600",children:["(",t," disponibles)"]})]}),Object(L.jsx)(p.a,{color:"#00a650",fontSize:"12.5",children:"Ahorr\xe1 en el env\xedo comprando 4 o m\xe1s unidades"})]})})}var q=r(98);function B(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(l.a,{spacing:0,children:[Object(L.jsx)(l.a,{justifyContent:"center",children:Object(L.jsxs)(p.a,{color:"#00a650",children:[Object(L.jsx)(u.a,{as:q.a,color:"#00a650"})," Devoluci\xf3n Gratis"]})}),Object(L.jsxs)(l.a,{paddingLeft:"5",spacing:0,children:[Object(L.jsx)(p.a,{color:"blackAlpha.600",fontSize:"13",children:"Ten\xe9s 30 d\xedas desde que lo recib\xeds.."}),Object(L.jsx)(p.a,{cursor:"pointer",color:"#3483fa",fontSize:"xs",children:"Conocer m\xe1s"})]})]})})}function N(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(l.a,{paddingTop:3,children:[Object(L.jsx)(b.a,{_hover:{backgroundColor:"#2968c8"},backgroundColor:"#3483fa",color:"white",children:"Comprar ahora"}),Object(L.jsx)(b.a,{_hover:{backgroundColor:"#d2e4fe"},backgroundColor:"#e4edfa",color:"#3483fa",children:"Agregar al carrito"}),Object(L.jsx)(b.a,{_hover:{backgroundColor:"#e9f2fe"},backgroundColor:"white",color:"#3483fa",children:"Comprar con Mercado Cr\xe9dito"})]})})}var P=r(99);function U(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(p.a,{color:"#3483fa",fontSize:"xs",children:[Object(L.jsx)(u.a,{width:4,height:4,color:"blackAlpha.600",as:P.a}),"Compra Protegida"]}),Object(L.jsxs)(p.a,{color:"#3483fa",fontSize:"xs",children:[Object(L.jsx)(u.a,{width:4,height:4,color:"blackAlpha.600",as:g.g}),"Mercado Puntos"]})]})}function Q(e){var t=e.condition,r=e.title,c=e.sold_quantity,a=e.categories,n=e.price,i=e.available_quantity;return Object(L.jsxs)(l.a,{paddingLeft:"5",paddingRight:"5",alignItems:"left",marginTop:"1rem",marginRight:"0.7rem",width:320,borderRadius:"6",height:r.length>45?850:800,border:"solid 1px #D6d6d6",children:[Object(L.jsx)(R,{condition:t,sold_quantity:c,categories:a,title:r}),Object(L.jsx)(W,{price:n}),Object(L.jsx)(M,{available_quantity:i}),Object(L.jsx)(B,{}),Object(L.jsx)(N,{}),Object(L.jsx)(U,{})]})}var V=r(162);function H(){return Object(L.jsxs)(l.a,{marginTop:20,spacing:5,direction:"row",alignItems:"center",justifyContent:"center",children:[Object(L.jsx)(j.a,{height:"5rem",width:"6rem",src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635254238/busqueda_olgwwp.png"}),Object(L.jsxs)(l.a,{alignItems:"flex-start",children:[Object(L.jsx)(p.a,{fontSize:"25px",fontWeight:"medium",children:"No hay publicaciones que coincidan con tu b\xfasqueda."}),Object(L.jsxs)(V.b,{paddingLeft:6,children:[Object(L.jsx)(V.a,{children:Object(L.jsx)(p.a,{fontSize:"15px",fontWeight:"light",children:"Revis\xe1 la ortograf\xeda de la palabra."})}),Object(L.jsx)(V.a,{children:Object(L.jsx)(p.a,{fontSize:"15px",fontWeight:"light",children:"Utiliz\xe1 palabras m\xe1s gen\xe9ricas o menos palabras."})}),Object(L.jsx)(V.a,{children:Object(L.jsx)(p.a,{fontSize:"15px",fontWeight:"light",children:"Naveg\xe1 por las categor\xedas para encontrar un producto similar"})})]})]})]})}function $(e){var t=Object(D.b)(),r=Object(D.c)((function(e){return e.detail}));return Object(c.useEffect)((function(){var r;t(A()),t((r=e.match.params.id,function(){var e=Object(w.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("/api/items/".concat(r));case 3:c=e.sent,t({type:C,payload:c.data}),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t({type:I,payload:e.t0.name}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}),[t,e.match.params.id]),Object(L.jsx)(L.Fragment,{children:"Error"===r?Object(L.jsx)(H,{}):r?Object(L.jsxs)(l.a,{width:"100%",padding:"2rem",alignItems:"center",backgroundColor:"#E6e6e5",border:"solid 1.3px #D6d6d6",children:[Object(L.jsx)(l.a,{direction:"row",alignSelf:"flex-start",paddingLeft:"7vh",children:r.categories.path.map((function(e,t,r){return Object(L.jsx)(p.a,{cursor:"pointer",fontSize:"sm",color:"blackAlpha.600",children:e.name+(t!==r.length-1?" > ":"")})}))}),Object(L.jsxs)(l.a,{marginTop:"20",backgroundColor:"white",alignItems:"center",width:"94%",height:"100%",padding:"2rem",border:"solid 1px #D6d6d6",borderRadius:"6",children:[Object(L.jsx)(l.a,{direction:"column",position:"absolute",left:"18vh",spacing:12,children:r&&r.item.pictures.slice(0,4).map((function(e){return Object(L.jsx)(l.a,{width:"8vh",height:"8vh",children:Object(L.jsx)(j.a,{src:e})})}))}),Object(L.jsxs)(l.a,{direction:"row",children:[Object(L.jsxs)(l.a,{spacing:2,paddingRight:"15vh",paddingLeft:"15vh",alignItems:"center",children:[Object(L.jsx)(j.a,{marginBottom:"1rem",src:r&&r.item.pictures[0]}),Object(L.jsx)(l.a,{padding:4,maxWidth:"37rem",border:"solid 1px  #D6d6d6",borderRadius:"6",children:Object(L.jsx)(p.a,{fontSize:"sm",color:"blackAlpha.600",children:r.item.description&&r.item.description})})]}),Object(L.jsx)(l.a,{children:Object(L.jsx)(Q,{condition:r&&r.item.condition,sold_quantity:r&&r.item.sold_quantity,title:r&&r.item.title,categories:r.categories.name,price:r.item.price.amount,available_quantity:r.item.available_quantity})})]})]})]}):Object(L.jsx)(l.a,{alignItems:"center",justifyContent:"center",children:Object(L.jsx)(l.a,{width:"3rem",height:"3rem",marginTop:"6vh",children:Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif"})})})})}function G(e){var t=e.id,r=e.picture,c=e.price,a=e.title,n=e.free_shipping,i=e.address;return Object(L.jsx)(l.a,{padding:10,children:Object(L.jsx)(O.b,{to:"/items/".concat(t),children:Object(L.jsxs)(l.a,{direction:"row",justifyContent:"left",alignItems:"center",marginTop:"2rem",spacing:10,children:[Object(L.jsx)(l.a,{children:Object(L.jsx)(l.a,{width:"16rem",height:"11rem",alignItems:"center",children:Object(L.jsx)(j.a,{height:"inherit",width:"fit-content",src:r})})}),Object(L.jsxs)(l.a,{margin:4,height:"10rem",children:[Object(L.jsxs)(p.a,{fontSize:"x-large",fontWeight:"normal",children:["$",c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")]}),Object(L.jsx)(p.a,{children:a}),n?Object(L.jsx)(p.a,{fontSize:"xs",fontWeight:"medium",paddingLeft:.5,paddingRight:.5,backgroundColor:"#E6F7EE",maxWidth:"7.2rem",color:"#00A650",borderRadius:"sm",children:"Llega gratis ma\xf1ana"}):null,Object(L.jsx)(p.a,{fontSize:"sm",color:"blackAlpha.600",children:i})]})]})})})}function J(){var e=Object(D.c)((function(e){return e.products})),t=Object(D.b)();var r=new URLSearchParams(Object(i.f)().search).get("search");return Object(c.useEffect)((function(){var e;t((e=r,function(){var t=Object(w.a)(v.a.mark((function t(r){var c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("/api/items?q=".concat(e));case 3:c=t.sent,r({type:S,payload:c.data}),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",r({type:F,payload:t.t0.name}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[r]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635354560/banner_sq2hnb.png"}),"Error"===e?Object(L.jsx)(H,{}):e.length>0?e.map((function(e){return Object(L.jsx)(l.a,{alignItems:"left",marginLeft:"35vh",children:Object(L.jsx)(G,{id:e.items.map((function(e){return e.id})),picture:e.items.map((function(e){return e.picture})),price:e.items.map((function(e){return e.price.amount})),title:e.items.map((function(e){return e.title})),free_shipping:e.free_shipping,address:e.author.address})})})):Object(L.jsx)(l.a,{alignItems:"center",justifyContent:"center",children:Object(L.jsx)(l.a,{width:"3rem",height:"3rem",marginTop:"6vh",children:Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635287448/loading-buffering_x968rg.gif"})})})]})}var X=r(100),K=r.n(X),Y=[{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283680/D_NQ_715855-MLA48023008001_102021-OO_du8ydu.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283677/D_NQ_658433-MLA47933462741_102021-OO_bnucmp.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283675/D_NQ_926682-MLA47965174852_102021-OO_wy7hrz.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283656/D_NQ_888686-MLA47892055072_102021-OO_ql6gro.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283654/D_NQ_897467-MLA47976582955_102021-OO_u0htqt.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283652/D_NQ_662857-MLA47981877797_102021-OO_rfzz4i.webp"},{url:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635283650/D_NQ_657966-MLA48007822815_102021-OO_gxyuay.webp"}];function Z(){return Object(L.jsx)("div",{children:Object(L.jsx)(K.a,{width:"100%",height:"43vh",images:Y,showBullets:!0,showNavs:!0,autoPlay:!0,slideDuration:3})})}function ee(){return Object(L.jsxs)(l.a,{border:"1px solid #D6d6d6",padding:5,direction:"row",width:"100%",alignItems:"center",justifyContent:"space-around",marginTop:"2rem",children:[Object(L.jsxs)(l.a,{cursor:"pointer",alignItems:"center",children:[Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg"}),Object(L.jsx)(p.a,{children:"Tarjeta de cr\xe9dito"})]}),Object(L.jsx)(p.a,{fontSize:"xs",color:"#3483fa",children:"Ver promociones bancarias"})]}),Object(L.jsxs)(l.a,{cursor:"pointer",alignItems:"center",children:[Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg"}),Object(L.jsx)(p.a,{children:"Tarjeta de d\xe9bito"})]}),Object(L.jsx)(p.a,{fontSize:"xs",color:"#3483fa",children:"Ver m\xe1s"})]}),Object(L.jsxs)(l.a,{cursor:"pointer",alignItems:"center",children:[Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635284882/mercado-creditsv2_y6xc17.svg"}),Object(L.jsx)(p.a,{children:"Cuotas sin tarjeta"})]}),Object(L.jsx)(p.a,{fontSize:"xs",color:"#3483fa",children:"Conoc\xe9 Mercado Cr\xe9dito"})]}),Object(L.jsxs)(l.a,{cursor:"pointer",alignItems:"center",children:[Object(L.jsxs)(l.a,{direction:"row",alignItems:"center",children:[Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg"}),Object(L.jsx)(p.a,{children:"Efectivo"})]}),Object(L.jsx)(p.a,{fontSize:"xs",color:"#3483fa",children:"Ver m\xe1s"})]}),Object(L.jsx)(l.a,{cursor:"pointer",paddingBottom:"1.6rem",paddingLeft:"2rem",direction:"row",alignItems:"center",children:Object(L.jsx)(j.a,{src:"https://res.cloudinary.com/dbduj98i3/image/upload/v1635284900/view-more_loh57d.svg"})})]})}var te=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(i.a,{path:"/",component:T}),Object(L.jsx)(i.a,{exact:!0,path:"/",component:Z}),Object(L.jsx)(i.a,{exact:!0,path:"/",component:ee}),Object(L.jsx)(i.a,{exact:!0,path:"/items",component:J}),Object(L.jsx)(i.a,{path:"/items/:id",component:$})]})},re=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,170)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))},ce=r(64),ae=r(101),ne=r(103),ie=r(15),oe={products:[],detail:null,searchUpdate:!1};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case F:return Object(ie.a)(Object(ie.a)({},e),{},{products:t.payload});case C:case I:return Object(ie.a)(Object(ie.a)({},e),{},{detail:t.payload});case k:return Object(ie.a)(Object(ie.a)({},e),{},{detail:null});case z:return Object(ie.a)(Object(ie.a)({},e),{},{products:[]});default:return e}},de=Object(ce.createStore)(se,Object(ae.composeWithDevTools)(Object(ce.applyMiddleware)(ne.a))),le=r(164),je=r(166),he=r(163),be=r(60),ue=Object(he.a)({styles:{global:{body:{color:"blackAlpha.900"}}},colors:{primary:{50:"#FFF9BD",100:"#FFF693",200:"#FFF693",300:"#FFF583",400:"#FFF372",500:"#fff159",600:"#E6D950",700:"#CCC147",800:"#BFB543",900:"#BFB543"},secondary:Object(ie.a)(Object(ie.a)({},be.theme.colors.messenger),{},{100:be.theme.colors.messenger[50],50:"rgba(65,137,230,.15)"}),success:be.theme.colors.whatsapp,error:be.theme.colors.red,warning:be.theme.colors.orange},sizes:{container:{xl:"1200px"}},components:{Link:{variants:{unstyled:function(e){var t=e.colorScheme,r=void 0===t?"blackAlpha":t;return{color:"".concat(r,".700"),_hover:{color:"".concat(r,".800"),textDecoration:"none"}}},color:function(e){var t=e.colorScheme,r=void 0===t?"secondary":t;return{color:"".concat(r,".500"),_hover:{color:"".concat(r,".600"),textDecoration:"none"}}}},defaultProps:{variant:"color"}},Button:{sizes:{lg:{fontSize:"md"}},variants:{ghost:function(e){var t=e.colorScheme,r=void 0===t?"secondary":t;return{backgroundColor:"".concat(r,".50"),":hover, :focus":{backgroundColor:"".concat(r,".100")}}}}},Input:{parts:["field"],defaultProps:{focusBorderColor:"secondary.500"},variants:{filled:{field:{borderRadius:"sm",color:"blackAlpha.800",backgroundColor:"white",":hover, :focus":{backgroundColor:"white"}}},outline:{field:{borderColor:"gray.300"}}}}}}),pe=r(105);r.n(pe).a.config(),_.a.defaults.baseURL="https://frontend-test-meli.herokuapp.com",n.a.render(Object(L.jsx)(D.a,{store:de,children:Object(L.jsxs)(O.a,{children:[Object(L.jsx)(le.a,{initialColorMode:ue.config.initialColorMode}),Object(L.jsx)(je.a,{theme:ue,children:Object(L.jsx)(te,{})})]})}),document.getElementById("root")),re()}},[[144,1,2]]]);
//# sourceMappingURL=main.39fd6a34.chunk.js.map