(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(177),o=(a(99),a(193)),l=a(172),s=a(194),d=a.n(s),c=a(169).c.div.withConfig({displayName:"image-wrapper__ImageWrapper",componentId:"o2mt2j-0"})(["max-width:",";"],function(e){return e.width}),u=function(e){var t=e.img_name,a=e.alt,r=e.width;return n.a.createElement(l.b,{query:"3231977207",render:function(e){var i=e.allImageSharp.edges.find(function(e){return e.node.fluid.originalName===t});return i?n.a.createElement(c,{width:r},n.a.createElement(d.a,{alt:a,fluid:i.node.fluid})):null},data:o})},f=a(175),p=a(171);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(f.a,{title:"Home"}),n.a.createElement("h1",null,n.a.createElement(p.a,{translate:"Home"})),n.a.createElement(u,{width:"300px",img_name:"practice.png",alt:"gatsby astronaut"})))}},170:function(e,t,a){var r;e.exports=(r=a(173))&&r.default||r},171:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(5),o=function(e){var t=e.translate;return n.a.createElement(r.Fragment,null,t)};o.propTypes={translate:a.n(i).a.string},t.a=o},172:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(5),o=a.n(i),l=a(46),s=a.n(l);a.d(t,"a",function(){return s.a});a(170);var d=n.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,o=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,o&&i(o),!o&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(d.Consumer,null,function(e){return n.a.createElement(c,{data:t,query:a,render:r||i,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},173:function(e,t,a){"use strict";a.r(t);a(29);var r=a(0),n=a.n(r),i=a(5),o=a.n(i),l=a(69),s=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},174:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("linearGradient",{id:"a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},[r.createElement("stop",{offset:"0%",stopColor:"#FF6544",key:0}),r.createElement("stop",{offset:"100%",stopColor:"#FF4449",key:1})])),r.createElement("g",{fill:"none",fillRule:"nonzero",key:1},[r.createElement("path",{fill:"url(#a)",d:"M6.13 0v.03L16.314 13.5 0 26.97V27h16.474c4.807 0 8.979-3.373 10.06-8.136l1.363-6.008a10.63 10.63 0 0 0-1.98-8.894A10.261 10.261 0 0 0 17.84 0H6.13z",key:0}),r.createElement("path",{fill:"#B51A31",d:"M16.308 13.527L9.144 27H0z",key:1}),r.createElement("path",{fill:"#FFF",d:"M39.64 0h10.283c8.279 0 13.01 5.782 11.702 13.327l-.013.076c-1.31 7.547-8.05 13.406-16.338 13.406H34.992L39.639 0zm6.559 21.485c4.744 0 8.51-3.255 9.334-8.005l.013-.077c.824-4.747-1.799-8.08-6.546-8.08H44.52l-2.804 16.162H46.2zM69.473 0h19.89l-.912 5.247H74.328l-.945 5.438h9.118l-.91 5.247h-9.117l-.976 5.625H85.81l-.91 5.247H64.826L69.473 0zm38.975 17.235l4.778 9.574h-6.78l-6.31-13.793h4.364c2.826 0 4.712-1.541 5.103-3.791l.014-.076c.438-2.523-1.07-3.825-3.895-3.825h-5.754L96.24 26.808h-5.8L95.088 0h12.054c3.353 0 5.785.959 7.204 2.72 1.21 1.492 1.64 3.6 1.197 6.127l-.013.077c-.742 4.326-3.51 7.046-7.082 8.311zM122.963 0h5.8l-4.647 26.809h-5.802L122.964 0zm10.51 0h6.402l3.62 18.88L153.662 0h6.254l-15.343 27h-5.123l-5.977-27z",key:2})])])}n.defaultProps={width:"160",height:"27",viewBox:"0 0 160 27"},e.exports=n,n.default=n},175:function(e,t,a){"use strict";var r=a(176),n=a(0),i=a.n(n),o=a(5),l=a.n(o),s=a(179),d=a.n(s);function c(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,s=t||l.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=c},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Deriv.com",description:"Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.",author:"Deriv.com"}}}}},177:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(5),o=a.n(i),l=a(172),s=a(169),d=a(171),c=a(174),u=a.n(c),f=s.c.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1acehd8-0"})(["background-color:var(--color-black);border-bottom:1px solid rgba(0,0,0,0.0975);"]),p=s.c.div.withConfig({displayName:"header__Wrapper",componentId:"sc-1acehd8-1"})(["width:80%;margin:0 auto;display:flex;align-items:center;padding:2rem 1rem;"]),m=s.c.div.withConfig({displayName:"header__NavLeft",componentId:"sc-1acehd8-2"})(["width:25%;text-align:left;"]),h=s.c.div.withConfig({displayName:"header__NavCenter",componentId:"sc-1acehd8-3"})(["width:50%;text-align:center;"]),g=s.c.div.withConfig({displayName:"header__NavRight",componentId:"sc-1acehd8-4"})(["width:25%;text-align:right;"]),b=Object(s.c)(function(e){return n.a.createElement(l.a,e)}).withConfig({displayName:"header__StyledLink",componentId:"sc-1acehd8-5"})(["color:var(--color-white);text-decoration:none;padding:1rem;border-bottom:1px solid transparent;transition:border-bottom 0.25s;margin:0 0.3rem;&:hover{border-bottom:1px solid var(--color-red);}&.active{border-bottom:1px solid var(--color-red);}"]),v=s.c.button.withConfig({displayName:"header__NavButton",componentId:"sc-1acehd8-6"})(["border-radius:6px;border:2px solid var(--color-red);color:var(--color-red);background-color:transparent;padding:0.6rem 1.2rem;font-size:100%;&:hover{background-color:var(--color-red);color:var(--color-white);transition:background-color 0.2s,color 0.2s;cursor:pointer;}"]),y=function(){return n.a.createElement(f,null,n.a.createElement(p,null,n.a.createElement(m,null,n.a.createElement(l.a,{to:"/"},n.a.createElement(u.a,null))),n.a.createElement(h,null,n.a.createElement(b,{to:"/trade",activeClassName:"active"},n.a.createElement(d.a,{translate:"Trade"})),n.a.createElement(b,{to:"/about",activeClassName:"active"},n.a.createElement(d.a,{translate:"About us"})),n.a.createElement(b,{to:"/help-centre",activeClassName:"active"},n.a.createElement(d.a,{translate:"Help centre"}))),n.a.createElement(g,null,n.a.createElement(v,null,n.a.createElement(d.a,{translate:"Login"})))))},w=function(){return n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},E=a(178),S=a.n(E),A=Object(s.b)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"]),L=Object(s.b)([":root{--color-black:#0e0e0e;--color-white:#ffffff;--color-red:#ff444f;--color-light-grey:#f4f4f4;}"]);function x(){var e=S()(["\n    ","\n    ","\n    body {\n        font-family: 'IBM Plex Sans', sans-serif;\n        margin: 0;\n    }\n\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-size: 62.5%; /* 1 rem = 10px */\n    }\n"]);return x=function(){return e},e}var R=Object(s.a)(x(),A,L),C=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(y,null),n.a.createElement("main",null,t),n.a.createElement(w,null))};C.propTypes={children:o.a.node.isRequired};t.a=C},193:function(e){e.exports={data:{allImageSharp:{edges:[{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADaklEQVQ4y22T3W9URRjGx9Z4SSQxChSkgiiG1G7Z3ZaWyoc9M2fOdne7LbXbpdvt9oPamJh4440Xhhv/AP8JjV5ghKgNlAZqxI8mUk28oCQSb6hETfDCi+7Z8z6+M3O6dKGTPHnemXPe33nfmTNC8MC8FJjzWkxMF7wC5hUw61Gsx+OI333Auo5ZuYB35DOWMe21iu2D3g0EJgccdMb7CAsamPFClnHiBLDIzmclMO8jfucXnr9uodUYaiq0PqMaH+CH13CBE6pejWWctrlRHVP8zL4jH6LqH2uqEG+rGCRbnKs9mJL3Mc3tVzi54hmnZpdGm5jVoCn5ExbyzW1jOq60Ip+OXaLCwElpRCizl5t8K65hJmC4KovHB8qe84mBVjdXH6DKL0/IkGWcYmGbh5jSxi89CZxzrdOkLzB60q2dV1+gwtASV1KSxin2rTjChDLxuthp0KRrnc4rt59l/SwV1T1MMLQo6yw8kiKrEp/6uNrYGXjxoghL8SGVfdd6Ufdy4r8Y40reUhELVmNc4RhXOK7NfG1H4FryrFhs67TxcnuqcXL/5byrGA9Ao6qOUYY9UohSxvinT8DWk/2NeLk9aU97PX169w9Hu5cob5L9iEa4xRGOnUwcojgInNPvNZI3VIdY6+iz8Z+nBsSXL3Ra2J30G4lv2rp+3zhxmmE6oiGGFLbE+zbsU8OHfVfN3ZO+WDmUsvGvnf0tRbH7KROvvnZiZHH/8c1v29Oo51QNQz4oz8lDnGw8bz1CQZu1B3RO7xK/dfaLS8/Zqyh+fLWnsV+3jvR8uHwgicvPJ/BH76kQhQBRlgE5nyjHsJyNjYcY5nbz+krT3t14KeVux+fvt948lP5s5UAK3Ha0cjhdpwwnDjLIycZOfOUG/RoKWV7TVfdb5IfF1bYuC7uXPnPw+sHU6s39KXy1L1G7vCdB9/vOANmAKGBAwC0Hmp1bdNpEjmEZfRvFcdfdJ7uO2p/39rHes0svJv9e2necYV01ro5uvdwNaE3kBONwqrNqyA6a5w8RBB32/w20ZYnvj/TMLfF+Le7tMrCQhStc3V99b3Iy/3eSq1EMUuw+35aAQZmsWfuZfAfDFuy7w90f3zAt7k0YWP1rhpnqVl/pYQDDPG1EYGdFkPofyOAaP5tGdsztexC4K5rxxf8BMpJeQ+opkAAAAABJRU5ErkJggg==",aspectRatio:1.0555555555555556,src:"/deriv-com/static/852875f0c19c842d8ec3040d6f60f5d4/7272d/logo.png",srcSet:"/deriv-com/static/852875f0c19c842d8ec3040d6f60f5d4/7272d/logo.png 38w",sizes:"(max-width: 38px) 100vw, 38px",originalName:"logo.png"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAADV0lEQVQoz21S22ubdRj+KiJU8B8Yijel7kaECl5M23qCbXizGw+gCHPMOx3qLlQQdUuaNm26drZuMKob3ShJmn3N0uPartvocXPWLqFtkubw5Tvk8B1zbpN8v8ffN/RGfOHhfX+nh+d53x/D0Dj79TdPH+/ofPbtI683nzz5WXOfy9Vst3c1d/8y9Jx1bnf7PnVN34bdy9Z/dvtIt38K5zw3yXm67puag83LXrPuvXjm2yYrM21tbRePdLSr7Z2dMVonW1pakq2trcmXDh9OvnDoUOy9jz9RXDPz+HHMS9i1ByjLCh5GYxZRo3dyDvbxCY/Fs7wVfIYpFItvDF4YuD/c48QFhwNOZy9sNhsctO5xOtHT5UD3r5dgZwPknJeFlM0R/DZKkM1heGGpYb95CxcDM0v1Qv5lnhdOMSlReOegXF2EoqGelWvlStUsFktmtbpv1uoNE4C5GU+S72+48RO1O76yTgo5Geu7EUJtm87JWQwGpldreeNVXhC+YDKC0JGWlcW9/X0ENa2xlclgU5Ke4JEoIpjNYiYYgpMqGQhMo5cNYGBqjvRNTMLln6w5fP7q8NSc/yBvvEIVnmZS8fibWd24cy8Ww+jincZCOIy1dBr3eR4rHIdlQcAKxWqSwzbdjykKormcmdB1cJlsJhSJfhSJJ46lJek1QRRPM9TSWzEpPe9mfRgZG2vYro/hbjSKLT6FCM/hIc1rFjlVGynkkQIBB2Jm6UOlUk6rXOqEJIpHRVFsp/iKGfd4P+8fGAy65xcw++dfZv/VUdzdWEemXEJC07CT2MMOn8RmMgGDTrjy+3WULo2Yu11D4O6tSQZwlE9L74o830kJzzIfvv/BBMuy0dHZ2+i6OmreuBVAzDAQLxQQN3TEVQUxas+yqm3vwFhYQunKNcKf70fO4zc4duaKsPHoS0lX20VB+M6y/BQdpSdVrWI5FKrRPpGwYZBdVSVhTSO7uk52aN5WVJIolwl3sE9Kqxtm/fIIKj/YK3+cOCWGu4fOWDxcaPv5Jx87o2o+3jQRooropPGYqgpqKkKqiuA/eEwVcrSHfKWMVLGALDGRKRQ4i4j5b6hG/nJcUQ72ZDkdkxWZ2vtfiJoui4ZhISvqelHW9dV/ObRqpYlPpZr+Bhy5ywSqH2q8AAAAAElFTkSuQmCC",aspectRatio:1.7092198581560283,src:"/deriv-com/static/44c28fde3a4ba1cb5b69f964165f6ca2/66f2b/practice.png",srcSet:"/deriv-com/static/44c28fde3a4ba1cb5b69f964165f6ca2/647de/practice.png 400w,\n/deriv-com/static/44c28fde3a4ba1cb5b69f964165f6ca2/59139/practice.png 600w,\n/deriv-com/static/44c28fde3a4ba1cb5b69f964165f6ca2/66f2b/practice.png 723w",sizes:"(max-width: 723px) 100vw, 723px",originalName:"practice.png"}}}]}}}},194:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var n,i=r(a(9)),o=r(a(47)),l=r(a(101)),s=r(a(102)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,b=new WeakMap;var v=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+s+a+n+t+o+i+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:n},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&g&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,A=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,s.default)({opacity:A?1:0,transition:L?"opacity "+b+"ms":"none"},l),R="boolean"==typeof g?"lightgray":g,C={transitionDelay:b+"ms"},O=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&C,l,f),I={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(m){var k=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),k.base64&&d.default.createElement(w,(0,s.default)({src:k.base64},I)),k.tracedSVG&&d.default.createElement(w,(0,s.default)({src:k.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(w,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,s.default)({alt:a,title:t,loading:S},k))}}))}if(h){var z=h,N=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete N.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,s.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},L&&C)}),z.base64&&d.default.createElement(w,(0,s.default)({src:z.base64},I)),z.tracedSVG&&d.default.createElement(w,(0,s.default)({src:z.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(w,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,s.default)({alt:a,title:t,loading:S},z))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),A=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:S,sizes:A,fixed:S,fluid:A,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var L=E;t.default=L}}]);
//# sourceMappingURL=component---src-pages-index-js-1ff44a1e7e590b5aef11.js.map