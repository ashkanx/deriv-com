(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(177),i=a(175);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist."))}},170:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=function(e){var t=e.translate;return r.a.createElement(n.Fragment,null,t)};i.propTypes={translate:a.n(o).a.string},t.a=i},172:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(46),c=a.n(l);a.d(t,"a",function(){return c.a});a(170);var d=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(d.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||o,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},173:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(69),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},174:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("linearGradient",{id:"a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},[n.createElement("stop",{offset:"0%",stopColor:"#FF6544",key:0}),n.createElement("stop",{offset:"100%",stopColor:"#FF4449",key:1})])),n.createElement("g",{fill:"none",fillRule:"nonzero",key:1},[n.createElement("path",{fill:"url(#a)",d:"M6.13 0v.03L16.314 13.5 0 26.97V27h16.474c4.807 0 8.979-3.373 10.06-8.136l1.363-6.008a10.63 10.63 0 0 0-1.98-8.894A10.261 10.261 0 0 0 17.84 0H6.13z",key:0}),n.createElement("path",{fill:"#B51A31",d:"M16.308 13.527L9.144 27H0z",key:1}),n.createElement("path",{fill:"#FFF",d:"M39.64 0h10.283c8.279 0 13.01 5.782 11.702 13.327l-.013.076c-1.31 7.547-8.05 13.406-16.338 13.406H34.992L39.639 0zm6.559 21.485c4.744 0 8.51-3.255 9.334-8.005l.013-.077c.824-4.747-1.799-8.08-6.546-8.08H44.52l-2.804 16.162H46.2zM69.473 0h19.89l-.912 5.247H74.328l-.945 5.438h9.118l-.91 5.247h-9.117l-.976 5.625H85.81l-.91 5.247H64.826L69.473 0zm38.975 17.235l4.778 9.574h-6.78l-6.31-13.793h4.364c2.826 0 4.712-1.541 5.103-3.791l.014-.076c.438-2.523-1.07-3.825-3.895-3.825h-5.754L96.24 26.808h-5.8L95.088 0h12.054c3.353 0 5.785.959 7.204 2.72 1.21 1.492 1.64 3.6 1.197 6.127l-.013.077c-.742 4.326-3.51 7.046-7.082 8.311zM122.963 0h5.8l-4.647 26.809h-5.802L122.964 0zm10.51 0h6.402l3.62 18.88L153.662 0h6.254l-15.343 27h-5.123l-5.977-27z",key:2})])])}r.defaultProps={width:"160",height:"27",viewBox:"0 0 160 27"},e.exports=r,r.default=r},175:function(e,t,a){"use strict";var n=a(176),r=a(0),o=a.n(r),i=a(5),l=a.n(i),c=a(179),d=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=s},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Deriv.com",description:"Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.",author:"Deriv.com"}}}}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(172),c=a(169),d=a(171),s=a(174),u=a.n(s),m=c.c.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1acehd8-0"})(["background-color:var(--color-black);border-bottom:1px solid rgba(0,0,0,0.0975);"]),p=c.c.div.withConfig({displayName:"header__Wrapper",componentId:"sc-1acehd8-1"})(["width:80%;margin:0 auto;display:flex;align-items:center;padding:2rem 1rem;"]),f=c.c.div.withConfig({displayName:"header__NavLeft",componentId:"sc-1acehd8-2"})(["width:25%;text-align:left;"]),h=c.c.div.withConfig({displayName:"header__NavCenter",componentId:"sc-1acehd8-3"})(["width:50%;text-align:center;"]),g=c.c.div.withConfig({displayName:"header__NavRight",componentId:"sc-1acehd8-4"})(["width:25%;text-align:right;"]),b=Object(c.c)(function(e){return r.a.createElement(l.a,e)}).withConfig({displayName:"header__StyledLink",componentId:"sc-1acehd8-5"})(["color:var(--color-white);text-decoration:none;padding:1rem;border-bottom:1px solid transparent;transition:border-bottom 0.25s;margin:0 0.3rem;&:hover{border-bottom:1px solid var(--color-red);}&.active{border-bottom:1px solid var(--color-red);}"]),v=c.c.button.withConfig({displayName:"header__NavButton",componentId:"sc-1acehd8-6"})(["border-radius:6px;border:2px solid var(--color-red);color:var(--color-red);background-color:transparent;padding:0.6rem 1.2rem;font-size:100%;&:hover{background-color:var(--color-red);color:var(--color-white);transition:background-color 0.2s,color 0.2s;cursor:pointer;}"]),y=function(){return r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(l.a,{to:"/"},r.a.createElement(u.a,null))),r.a.createElement(h,null,r.a.createElement(b,{to:"/trade",activeClassName:"active"},r.a.createElement(d.a,{translate:"Trade"})),r.a.createElement(b,{to:"/about",activeClassName:"active"},r.a.createElement(d.a,{translate:"About us"})),r.a.createElement(b,{to:"/help-centre",activeClassName:"active"},r.a.createElement(d.a,{translate:"Help centre"}))),r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(d.a,{translate:"Login"})))))},E=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},w=a(178),k=a.n(w),x=Object(c.b)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"]),q=Object(c.b)([":root{--color-black:#0e0e0e;--color-white:#ffffff;--color-red:#ff444f;--color-light-grey:#f4f4f4;}"]);function N(){var e=k()(["\n    ","\n    ","\n    body {\n        font-family: 'IBM Plex Sans', sans-serif;\n        margin: 0;\n    }\n\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-size: 62.5%; /* 1 rem = 10px */\n    }\n"]);return N=function(){return e},e}var C=Object(c.a)(N(),x,q),_=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(y,null),r.a.createElement("main",null,t),r.a.createElement(E,null))};_.propTypes={children:i.a.node.isRequired};t.a=_}}]);
//# sourceMappingURL=component---src-pages-404-js-bdbc793031dd0e6aa15b.js.map