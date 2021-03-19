(self.webpackChunkreact_metro_brick=self.webpackChunkreact_metro_brick||[]).push([[143],{297:function(e,r,t){"use strict";var i=t(294),n=t(209),a=t(482);r.Z=function(e){var r=[{icon:(0,a.C)("document"),size:"wide",name:"Docs",msg:[{body:i.createElement("span",{className:"title-message"},"Check out the documentation")}],msgDelay:1e4,href:"./#documentation"},{theme:"orange",msg:["blue","purple"].map((function(e){return{theme:e}}))},{theme:"purple",msg:["green","red"].map((function(e){return{theme:e}})),msgDelay:6e3},{icon:(0,a.C)("demo"),size:"wide",theme:"teal",name:"Demo",msg:[{bkg:(0,a.C)("demo","gallery","png")}],msgDelay:8e3,href:e.demo?"#demo":"demo.html"},{icon:(0,a.C)("github"),size:"wide",theme:"amber",name:"Github",msg:[{body:i.createElement("span",{className:"title-message"},"Visit / Fork the repo")}],msgDelay:11e3,href:"https://github.com/DemChing/react-metro-brick"},{theme:"cobalt",msg:["dark","orange"].map((function(e){return{theme:e}})),msgDelay:9e3}],t=[{icon:(0,a.C)("up"),size:"small",theme:"purple",name:"Go To Top",href:"#title"},{icon:(0,a.C)("github"),size:"small",theme:"amber",name:"Fork Me",href:"#title"},{icon:(0,a.C)("bmc","styled"),size:"small",theme:"yellow",name:"Support Me",href:"https://www.buymeacoffee.com/demching"}];return i.createElement(i.Fragment,null,i.createElement(n.y,{bricks:r.filter((function(r){return e.demo||Boolean(r.name)})),size:e.demo?"medium":"large"}),i.createElement(n.y,{divProps:{id:"navigation"},bricks:t,columns:1}))}},228:function(e,r,t){"use strict";var i=t(294),n=t(935),a=t(209),c=t(561),o=t(482),l=t(297),s=function(e){return i.createElement("svg",{viewBox:"0 0 20 20"},i.createElement("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#fff"},e))},b=c.k5.map((function(e){return{theme:e,name:e}})),m=c.tV.map((function(e){return{size:e,name:e}})).reverse(),d=[{size:"small"},{size:"small"},{},{},{size:"wide"},{size:"small"},{size:"small"}].map((function(e,r){return e.icon=s(r+1),e})),u=[{size:"small"},{size:"small"},{},{},{fill:!0,size:"small",divProps:{style:{background:"#555"}}},{fill:!0,size:"small",divProps:{style:{background:"#555"}}},{size:"wide"},{size:"small"},{size:"small"}].map((function(e,r){return e.icon=s(r+1),!e.fill||(e.name="".concat(r+1)),e})),k=[{size:"small"},{size:"small"},{},{},{size:"wide",prepend:{count:2,size:"small"}},{size:"small"},{size:"small"}].map((function(e,r){return e.icon=s(r+1),e}));n.render(i.createElement(l.Z,null),document.getElementById("title-bricks")),n.render(i.createElement(a.y,{size:"wide",bricks:b}),document.getElementById("theme-bricks")),n.render(i.createElement(a.y,{size:"wide",bricks:m}),document.getElementById("size-bricks")),n.render(i.createElement("div",null,i.createElement(a.y,{size:"wide",bricks:m.map((function(e){return(e=Object.assign({},e)).icon=(0,o.C)("windows"),delete e.name,e}))}),i.createElement(a.y,{size:"wide",bricks:m.map((function(e){return(e=Object.assign({},e)).icon=i.createElement("img",{src:(0,o.C)("outlook","styled")}),delete e.name,e.theme="dark",e}))})),document.getElementById("icon-bricks")),n.render(i.createElement(a.y,{size:"wide",bricks:m.map((function(e){return(e=Object.assign({},e)).icon=(0,o.C)("windows"),e.name="Example App",e.badge=721,e}))}),document.getElementById("name-badge-bricks")),n.render(i.createElement(a.y,{size:"wide",bricks:m.map((function(e){return(e=Object.assign({},e)).icon=(0,o.C)("windows"),e.name="Gallery",e.bkg=(0,o.C)("01","gallery","jpg"),e}))}),document.getElementById("background-bricks")),n.render(i.createElement("div",null,i.createElement(a.y,{size:"wide",bricks:m.map((function(e,r){return(e=Object.assign({},e)).icon=(0,o.C)("windows"),e.name="Message",e.msg=[{title:"Title",body:"Message Body",delay:2e3*(r+1)}],e}))}),i.createElement(a.y,{size:"wide",bricks:m.map((function(e,r){return(e=Object.assign({},e)).icon=(0,o.C)("windows"),e.name="Gallery",e.msg=[{bkg:(0,o.C)("02","gallery","jpg"),delay:2e3*(r+1)},{bkg:(0,o.C)("03","gallery","jpg"),delay:2e3*(r+1)},{bkg:(0,o.C)("04","gallery","jpg"),delay:2e3*(r+1)}],e.bkg=(0,o.C)("01","gallery","jpg"),e}))})),document.getElementById("message-bricks")),n.render(i.createElement("div",null,i.createElement(a.y,{name:"Default",bricks:[{},{size:"large"},{}]}),i.createElement(a.y,{name:"Large",size:"large",bricks:[{size:"large"},{size:"wide"},{size:"large"},{},{}]})),document.getElementById("layout-containers")),n.render(i.createElement(a.y,{name:"Example Container",bricks:[{},{size:"wide"},{size:"wide"},{}]}),document.getElementById("basic-containers")),n.render(i.createElement("div",null,i.createElement(a.y,{bricks:d,name:"Default Order"}),i.createElement("br",null),i.createElement(a.y,{bricks:u,name:"Manually add 2 Small Bricks after Brick 4"}),i.createElement("br",null),i.createElement(a.y,{bricks:k,name:"Prepend 2 Small Bricks before Brick 5"})),document.getElementById("gap-containers"))},482:function(e,r,t){"use strict";t.d(r,{C:function(){return i}});var i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"plain",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"svg";return"../assets/".concat(r,"/").concat(e,".").concat(t)}},209:function(e,r,t){"use strict";t.d(r,{y:function(){return x}});var i=t(294),n=function(){for(var e=[],r=0;r<arguments.length;r++){var t=r<0||arguments.length<=r?void 0:arguments[r];if("string"==typeof t)""!=t.trim()&&e.push(t);else if(null!=t)for(var i in t)Boolean(t[i])&&e.push(i)}return e.join(" ")},a=t(379),c=t.n(a),o=t(673),l={insert:"head",singleton:!1};c()(o.Z,l),o.Z.locals;function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var b=function(e){for(var r=[],t=0;t<e.tiles.length;t++){var a=Object.assign({},e.tiles[t]);!a.theme&&e.theme&&(a.theme=e.theme),!a.bkg&&e.bkg&&(a.bkg=e.bkg),r.push(a)}return i.createElement(i.Fragment,null,r.map((function(r,t){var a;return i.createElement("div",{key:"brick-tile-".concat(t),className:n("brick brick-tile",(a={},s(a,"brick-".concat(e.size),e.size),s(a,"brick-".concat(r.theme),r.theme),s(a,"brick-tile-active",-1!=e.tileId&&(t==e.tileId||t==e.tileId-1)),a)),style:{backgroundImage:r.bkg?"url('".concat(r.bkg,"')"):""},"data-tiles":t},i.createElement("div",{className:n("brick-status-bar",{"has-background":r.bkg})},e.icon?i.createElement("div",{className:"brick-badge"},e.icon):"",i.createElement("div",{className:"brick-name"},e.name)),i.createElement("div",{className:"brick-message"},i.createElement("div",{className:"brick-message-title"},i.createElement("div",null,r.title)),i.createElement("div",{className:"brick-message-body"},r.body)))})))},m=t(115),d={insert:"head",singleton:!1};c()(m.Z,d),m.Z.locals;function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function k(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],i=!0,n=!1,a=void 0;try{for(var c,o=e[Symbol.iterator]();!(i=(c=o.next()).done)&&(t.push(c.value),!r||t.length!==r);i=!0);}catch(e){n=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}var f=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)r.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(t[i[n]]=e[i[n]])}return t},p=function(e){var r,t=k(i.useState(-1),2),a=t[0],c=t[1],o=k(i.useState(e.msgDelay||5e3),2),l=o[0],s=o[1],m="small"==e.size,d=e.icon?"string"==typeof e.icon?i.createElement("img",{src:e.icon}):e.icon:"",g=e.badge||"";"number"==typeof g&&g>99&&(g="99+"),g=g||(e.bkg?d:""),i.useEffect((function(){var r=setTimeout((function(){var r,t=a;e.msg&&e.msg.length&&(++t==e.msg.length&&(t=-1),s((null===(r=e.msg[t])||void 0===r?void 0:r.delay)||e.msgDelay||5e3)),t!=a&&c(t)}),l);return function(){return clearTimeout(r)}}),[a]);var p={},h={},y="";if(e.divProps){var v=e.divProps,w=v.style,x=v.className;v.title;p=f(v,["style","className","title"]),w&&(h=w),x&&(y=x)}e.bkg&&(h.backgroundImage="url('".concat(e.bkg,"')"));var E=i.createElement(i.Fragment,null,i.createElement("div",{className:"brick-content"},m||!e.name&&!g?"":i.createElement("div",{className:n("brick-status-bar",{"has-background":e.bkg})},g?i.createElement("div",{className:"brick-badge"},g):"",i.createElement("div",{className:"brick-name"},e.name)),i.createElement("div",{className:"brick-icon"},!m&&e.bkg?"":d)),!m&&e.msg&&e.msg.length?i.createElement(b,{tileId:a,tiles:e.msg,size:e.size,theme:e.theme,bkg:e.bkg,name:e.name,icon:d}):"",i.createElement("div",{className:"brick-cover"}));return i.createElement("div",Object.assign({className:n(y,"brick",(r={},u(r,"brick-".concat(e.size),e.size),u(r,"brick-".concat(e.theme),e.theme),u(r,"brick-standalone",e.standalone),u(r,"brick-fill",e.fill),r)),title:e.name,style:h},p),e.href?i.createElement("a",{href:e.href},E):E)},h=t(121),y={insert:"head",singleton:!1},v=(c()(h.Z,y),h.Z.locals,t(561)),w=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)r.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(t[i[n]]=e[i[n]])}return t},x=function(e){var r=6,t=[],a=function(e){for(var r=0;r<e.count;r++)t.push({fill:!0,size:e.size})};if(e.bricks)for(var c=0;c<e.bricks.length;c++){var o=e.bricks[c].prepend,l=e.bricks[c].append;o&&a(o),t.push(e.bricks[c]),l&&a(l)}var s={},b={},m=e.children,d="";if(e.divProps){var u=e.divProps,k=u.className,g=u.children;s=w(u,["className","children"]),g&&(m=i.createElement(i.Fragment,null,m,g)),k&&(d=k)}switch(e.size){case"small":r=4;break;case"wide":r=8;break;case"large":r=12}return e.columns&&e.columns>0&&(r=e.columns),6!=r&&(b.gridTemplateColumns="repeat(".concat(r,", ").concat(v.Sf,")")),i.createElement("div",Object.assign({className:n(d,"brick-container")},s),i.createElement("div",{className:"brick-container-header"},e.name),i.createElement("div",{className:"brick-container-layout",style:b},t.map((function(e,r){return i.createElement(p,Object.assign({key:"brick-".concat(r)},e))})),m))}},561:function(e,r,t){"use strict";t.d(r,{tV:function(){return i},k5:function(){return n},Sf:function(){return a}});var i=["small","medium","wide","large"],n=["red","green","amber","orange","blue","cobalt","cyan","purple","teal","dark","yellow"],a="3rem"},115:function(e,r,t){"use strict";var i=t(645),n=t.n(i)()((function(e){return e[1]}));n.push([e.id,".brick{display:inline-grid;position:relative;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:.2s linear;-o-transition:.2s linear;transition:.2s linear;padding:.25rem;background-color:#0078d4;grid-column-end:span 2;grid-row-end:span 2;background-size:cover;background-repeat:no-repeat;background-position:center;background-origin:border-box;overflow:hidden}.brick>a{display:inherit;color:currentColor}.brick .brick-status-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;bottom:0;left:0;width:100%;padding:.2rem .4rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.brick .brick-status-bar .brick-badge{min-width:1rem}.brick .brick-status-bar .brick-badge .brick-name{padding-right:.25rem}.brick .brick-status-bar .brick-name{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:left}.brick .brick-content{display:grid;position:absolute;top:0;left:0;width:100%;height:100%;justify-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.brick .brick-content .brick-status-bar+.brick-icon{width:40%;height:40%}.brick .brick-content .brick-icon{width:50%;height:50%}.brick .brick-content .brick-icon *{max-width:100%;max-height:100%}.brick .brick-cover{position:absolute;top:0;left:0;width:100%;height:100%;border:2px solid transparent;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:.2s linear;-o-transition:.2s linear;transition:.2s linear}.brick.brick-wide{grid-column-end:span 4}.brick.brick-small{grid-column-end:span 1;grid-row-end:span 1}.brick.brick-small .brick-icon{width:60%;height:60%}.brick.brick-small .brick-status-bar{display:none}.brick.brick-large{grid-column-end:span 4;grid-row-end:span 4}.brick.brick-standalone{width:6.25rem;height:6.25rem;margin:.125rem}.brick.brick-standalone.brick-wide{width:12.75rem}.brick.brick-standalone.brick-small{width:3rem;height:3rem}.brick.brick-standalone.brick-large{width:12.75rem;height:12.75rem}.brick.brick-fill{background-color:transparent}.brick.brick-fill>*{display:none}.brick.brick-red{background-color:#af2031}.brick.brick-green{background-color:#107c10}.brick.brick-amber{background-color:#cc7729}.brick.brick-orange{background-color:#d55408}.brick.brick-blue{background-color:#103f91}.brick.brick-cobalt{background-color:#0050ef}.brick.brick-cyan{background-color:#0078d4}.brick.brick-purple{background-color:#641790}.brick.brick-teal{background-color:#036c70}.brick.brick-dark{background-color:#474747}.brick.brick-yellow{background-color:#d6b039}.brick:hover .brick-cover{border-color:#ccc;background-color:rgba(255,255,255,0.13333)}.brick:hover .brick-status-bar.has-background{background-color:rgba(255,255,255,0.2)}.brick:active .brick-cover{background-color:rgba(0,0,0,0.13333)}",""]),r.Z=n},121:function(e,r,t){"use strict";var i=t(645),n=t.n(i)()((function(e){return e[1]}));n.push([e.id,".brick-container{display:inline-block;margin:.5rem;color:#fff;font-family:Arial;font-size:.8rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.brick-container .brick-container-header{min-height:2rem;display:grid;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left}.brick-container .brick-container-layout{display:inline-grid;grid-template-columns:repeat(6, 3rem);grid-auto-rows:3rem;grid-gap:.25rem;grid-auto-flow:dense;vertical-align:top}.brick-container .brick-container-layout .brick.brick-standalone{margin:0}",""]),r.Z=n},673:function(e,r,t){"use strict";var i=t(645),n=t.n(i)()((function(e){return e[1]}));n.push([e.id,".brick.brick-tile{position:absolute;top:100%;left:0;width:100%;height:100%;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.brick.brick-tile .brick-message{max-height:calc(100% - 1.2rem);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.2rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left}.brick.brick-tile .brick-message .brick-message-title{font-weight:bold;min-height:1.25rem;display:grid;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.brick.brick-tile .brick-message .brick-message-title>div{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:left}.brick.brick-tile .brick-message .brick-message-body{text-align:left;overflow:hidden;line-height:1.2;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.brick.brick-tile.brick-large .brick-message .brick-message-body{-webkit-line-clamp:9}.brick.brick-tile.brick-tile-active{top:0}",""]),r.Z=n},645:function(e){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(n[c]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);i&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},379:function(e,r,t){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),c=[];function o(e){for(var r=-1,t=0;t<c.length;t++)if(c[t].identifier===e){r=t;break}return r}function l(e,r){for(var t={},i=[],n=0;n<e.length;n++){var a=e[n],l=r.base?a[0]+r.base:a[0],s=t[l]||0,b="".concat(l," ").concat(s);t[l]=s+1;var m=o(b),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==m?(c[m].references++,c[m].updater(d)):c.push({identifier:b,updater:f(d,r),references:1}),i.push(b)}return i}function s(e){var r=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var n=t.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(e){r.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(r);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var b,m=(b=[],function(e,r){return b[e]=r,b.filter(Boolean).join("\n")});function d(e,r,t,i){var n=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=m(r,n);else{var a=document.createTextNode(n),c=e.childNodes;c[r]&&e.removeChild(c[r]),c.length?e.insertBefore(a,c[r]):e.appendChild(a)}}function u(e,r,t){var i=t.css,n=t.media,a=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var k=null,g=0;function f(e,r){var t,i,n;if(r.singleton){var a=g++;t=k||(k=s(r)),i=d.bind(null,t,a,!1),n=d.bind(null,t,a,!0)}else t=s(r),i=u.bind(null,t,r),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;i(e=r)}else n()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=n());var t=l(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var n=o(t[i]);c[n].references--}for(var a=l(e,r),s=0;s<t.length;s++){var b=o(t[s]);0===c[b].references&&(c[b].updater(),c.splice(b,1))}t=a}}}}},function(e){"use strict";var r;r=228,e(e.s=r)}]);