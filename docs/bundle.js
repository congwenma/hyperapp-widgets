!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=1)}([function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.h=function(a,b){for(var c=[],d=[],f=arguments.length;2<f--;)c.push(arguments[f]);for(;c.length;){var g=c.pop();if(g&&g.pop)for(f=g.length;f--;)c.push(g[f]);else null!=g&&!0!==g&&!1!==g&&d.push(g)}return"function"==typeof a?a(b||{},d):{nodeName:a,attributes:b||{},children:d,key:b&&b.key}},b.app=function(j,e,k,n){function q(a){return"function"==typeof a?q(a(s,u)):null==a?"":a}function l(){w=!w;var b=q(k);for(n&&!w&&(o=function b(e,k,n,l,i){if(l===n);else if(null==n||n.nodeName!==l.nodeName){var o=function a(b,d){var e="string"==typeof b||"number"==typeof b?document.createTextNode(b):(d=d||"svg"===b.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",b.nodeName):document.createElement(b.nodeName),f=b.attributes;if(f){f.oncreate&&c.push(function(){f.oncreate(e)});for(var g=0;g<b.children.length;g++)e.appendChild(a(b.children[g]=q(b.children[g]),d));for(var h in f)v(e,h,f[h],null,d)}return e}(l,i);e.insertBefore(o,k),null!=n&&m(e,k,n),k=o}else if(null==n.nodeName)k.nodeValue=l;else{!function(b,d,e,f){for(var g in h(d,e))e[g]!==("value"===g||"checked"===g?b[g]:d[g])&&v(b,g,e[g],d[g],f);var i=a?e.oncreate:e.onupdate;i&&c.push(function(){i(b,d)})}(k,n.attributes,l.attributes,i=i||"svg"===l.nodeName);for(var p={},r={},s=[],d=n.children,f=l.children,u=0;u<d.length;u++){s[u]=k.childNodes[u];var w=t(d[u]);null!=w&&(p[w]=[s[u],d[u]])}for(var u=0,g=0;g<f.length;){var w=t(d[u]),y=t(f[g]=q(f[g]));if(r[w])u++;else if(null==y||a)null==w&&(b(k,s[u],d[u],f[g],i),g++),u++;else{var j=p[y]||[];w===y?(b(k,j[0],j[1],f[g],i),u++):j[0]?b(k,k.insertBefore(j[0],s[u]),j[1],f[g],i):b(k,s[u],null,f[g],i),r[y]=f[g],g++}}for(;u<d.length;)null==t(d[u])&&m(k,s[u],d[u]),u++;for(var u in p)r[u]||m(k,p[u][0],p[u][1])}return k}(n,o,r,r=b)),a=!1;c.length;)c.pop()()}function f(){w||(w=!0,setTimeout(l))}function h(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}function b(a,c,d){var e={};return a.length?(e[a[0]]=1<a.length?b(a.slice(1),c,d[a[0]]):c,h(d,e)):c}function p(a,b){for(var c=0;c<a.length;)b=b[a[c++]];return b}function t(a){return a?a.key:null}function g(a){return a.currentTarget.events[a.type](a)}function v(a,b,c,d,e){if("key"===b);else if("style"===b)for(var f in h(d,c)){var j=null==c||null==c[f]?"":c[f];"-"===f[0]?a[b].setProperty(f,j):a[b][f]=j}else"o"===b[0]&&"n"===b[1]?(b=b.slice(2),a.events?d||(d=a.events[b]):a.events={},a.events[b]=c,c?d||a.addEventListener(b,g):a.removeEventListener(b,g)):b in a&&"list"!==b&&!e?a[b]=null==c?"":c:null!=c&&!1!==c&&a.setAttribute(b,c),null!=c&&!1!==c||a.removeAttribute(b)}function m(a,b,c){function d(){a.removeChild(function a(b,c){var d=c.attributes;if(d){for(var e=0;e<c.children.length;e++)a(b.childNodes[e],c.children[e]);d.ondestroy&&d.ondestroy(b)}return b}(b,c))}var e=c.attributes&&c.attributes.onremove;e?e(b,d):d()}var w,x=[].map,o=n&&n.children[0]||null,r=o&&function a(b){return{nodeName:b.nodeName.toLowerCase(),attributes:{},children:x.call(b.childNodes,function(b){return 3===b.nodeType?b.nodeValue:a(b)})}}(o),c=[],a=!0,s=h(j),u=function a(c,d,g){for(var e in g)"function"==typeof g[e]?function(a,j){g[a]=function(a){var e=j(a);return"function"==typeof e&&(e=e(p(c,s),g)),e&&e!==(d=p(c,s))&&!e.then&&f(s=b(c,h(d,e),s)),e}}(e,g[e]):a(c.concat(e),d[e]=h(d[e]),g[e]=h(g[e]));return g}([],s,h(e));return f(),u}},function(a,b,c){c(2),a.exports=c(3)},function(k,e,o){"use strict";function q(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}Object.defineProperty(e,"__esModule",{value:!0});var z=o(0),i=function(a){return Object(z.h)("div",{style:{position:"absolute",height:"100%",width:"100%"}},Object(z.h)("div",{style:{height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}},a))},l=i("No results found"),w=function(a){var b=a.checked,c=a.onclick,d=a.option;return Object(z.h)("li",{class:"MultiSelect-option",style:{listStyle:"none"}},[Object(z.h)("label",{style:{display:"flex",whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"hidden",alignItems:"center"}},[Object(z.h)("input",{type:"checkbox",checked:b,onclick:c}),d])])},a=Object(z.h)("div",{style:{position:"absolute",height:"100%",alignItems:"center",top:0,display:"flex",left:"3px"}},Object(z.h)("div",{style:{height:"4px",backgroundColor:"#19B5FE",width:"10px",borderRadius:"3px"}})),n={ZERO_STATE_FILTERED_MESSAGE:l,ZeroStateTemplate:i,AllOptionRows:function(a){var b=a.allOptions,c=a.selected,d=a.onSelect;return[Object(z.h)("div",{style:{height:"5px"}})].concat(q(b.map(function(a){return Object(z.h)(w,{option:a,checked:c.includes(a),onclick:function(b){b.preventDefault(),d(a)}})})))},initialState:{selected:[],allOptions:[],cachedOptions:[],isOpen:!1,filterText:""},actions:{updateOptions:function(a){return function(b){return Object.assign({},b,{allOptions:a,cachedOptions:a,selected:[]})}},onSelect:function(a){return function(b){if(b.selected.includes(a)){var c=b.selected.filter(function(b){return b!==a});return Object.assign({},b,{selected:c})}return Object.assign({},b,{selected:[a].concat(q(b.selected))})}},onSelectAll:function(){return function(a){var b=a.selected,c=a.cachedOptions,d=c.length===b.length;return Object.assign({},a,{selected:d?[]:c})}},onOpen:function(){return function(a){return Object.assign({},a,{isOpen:!0})}},onClose:function(){return function(a){return Object.assign({},a,{isOpen:!1})}},onUpdateFilterText:function(a){return function(b){var c=a.toLowerCase(),d=b.cachedOptions;return Object.assign({},b,{allOptions:d.filter(function(a){return""===c||a.toLowerCase().includes(c)}),filterText:c})}}},handleFocusFilterInput:function(a){setTimeout(function(){for(var b=a.target;!b.classList.contains("MultiSelect");)b=b.parentElement;b.querySelector(".MultiSelect-filterInput").focus()})},MultiSelectControl:function(b){var e=b.isFilterable,f=b.isOpen,g=b.onUpdateFilterText,h=b.filterIcon,i=b.cachedOptions,j=b.selected,c=b.canSelectAll,k=b.onSelectAll,d=j.length===i.length;return Object(z.h)("div",{class:"MultiSelect-filterCheckallControl",style:{padding:"2px 0",background:"#eefaff",borderBottom:"1px dashed #19B5FE"}},[e&&Object(z.h)("div",{style:{display:"flex",background:"#eefaff",padding:"4px 6px",fontWeight:"800"}},[f&&Object(z.h)("span",{oncreate:function(a){a.nextElementSibling.focus()}}),Object(z.h)("input",{onkeyup:function(a){return g(a.target.value)},class:"MultiSelect-filterInput",placeholder:"Search...",style:{outlineWidth:"0px",width:"100%",fontSize:"16px",border:"2px solid #19B5FE",boxSizing:"border-box"}}),h]),c&&Object(z.h)("div",{style:{position:"relative",background:"#eefaff"}},[Object(z.h)(w,{option:"Select all",checked:d,onclick:function(a){a.preventDefault(),k()}}),!!j.length&&!d&&a])])}},D=n.ZERO_STATE_FILTERED_MESSAGE,d=n.ZeroStateTemplate,p=n.AllOptionRows,f=n.actions,G=n.handleFocusFilterInput,b=n.MultiSelectControl,h=function(f){var e=f.state,l=e.isOpen,q=e.allOptions,t=e.cachedOptions,v=e.selected,H=f.actions,c=H.onSelect,J=H.onSelectAll,K=H.onOpen,u=H.onClose,L=H.onUpdateFilterText,P=f.dropdownIcon,O=f.filterIcon,Q=(f._dropdownCheckbox,f.style),m=void 0===Q?{}:Q,R=f.class,j=void 0===R?"":R,x=f.inputClass,k=void 0===x?"":x,w=f.listStyle,A=void 0===w?{}:w,S=f.objectName,E=void 0===S?"Items":S,M=f.isFilterable,F=void 0!==M&&M,T=f.canSelectAll,N=void 0!==T&&T,U="MultiSelect "+(l?"is-open":"")+" "+j;return Object(z.h)("div",{class:U,style:Object.assign({border:"1px solid black",position:"relative",paddingBottom:"2px"},m,l?{borderBottomStyle:"dashed"}:{borderBottomStyle:"solid"})},[Object(z.h)("div",{class:"MultiSelect-input "+k,style:{display:"flex",whiteSpace:"nowrap",textOverflow:"ellipsis"},onclick:l?u:K},[Object(z.h)("span",{style:{marginRight:"auto"}},[v.length?"Selected "+v.length+" "+E:"Pick "+E+"..."]),Object(z.h)("span",{class:"MultiSelect-arrowIcon",style:{position:"absolute",right:0}},[P||Object(z.h)("span",{oncreate:function(a){return a.innerHTML="&forall;"},style:{right:"5px",position:"absolute",transition:"transform .4s ease",transform:l?"rotate(180deg)":""}})])]),l&&Object(z.h)("div",{class:"MultiSelect-overlay",style:{top:"0",left:"0",width:"100%",height:"100%",position:"fixed",zIndex:1},onclick:u}),l&&Object(z.h)("div",{class:"MultiSelect-list-wrapper",style:Object.assign({marginTop:"0",paddingLeft:0,position:"absolute",width:"100%",zIndex:2,background:"rgba(255, 255, 255, 1)",border:"1px solid black",borderTop:"0px"},A)},[(F||N)&&Object(z.h)(b,{isFilterable:F,isOpen:l,onUpdateFilterText:L,filterIcon:O,cachedOptions:t,selected:v,canSelectAll:N,onSelectAll:J}),Object(z.h)("ul",{class:"MultiSelect-list",style:{position:"relative",overflowY:"scroll",overflowX:"hidden",maxHeight:"200px",minHeight:"100px",padding:0,margin:0,listStyle:"none"},onclick:F&&G},q.length?Object(z.h)(p,{allOptions:q,selected:v,onSelect:c}):t.length?D:d("There are no "+E))])])};h.initialState=n.initialState,h.actions=f;var g=h,s={multiSelect:g.initialState},t={multiSelect:g.actions},m=function(){return Object(z.h)("div",null,Object(z.h)("h1",null,Object(z.h)("br",null),"Multi Select"),Object(z.h)("p",null,Object(z.h)("em",null,"in ",Object(z.h)("a",{href:"https://hyperapp.js.org/"},"Hyperapp"))),Object(z.h)("hr",null))},u=Object(z.app)(s,t,function(a,b){var c=a.multiSelect,d=b.multiSelect;return Object(z.h)("div",{class:"counter",style:{height:"1000px"}},Object(z.h)(m,null),Object(z.h)("br",null),Object(z.h)(g,{state:c,actions:d,objectName:"people",inputClass:"pl0_5",listStyle:{marginTop:"4px"},isFilterable:!0,canSelectAll:!0}))},document.body);window.myApp=u,u.multiSelect.updateOptions(["Donald Vandervort","Lahoma Propst","Lacy Laswell","Katerine Buckmaster","Herma Olaughlin","Apryl Sigala","Hattie Dill","Magnolia Brar","Kristi Bussell","Roxana Balbuena","Walton Alan","Mamie Locklear","Veda Pujol","Vernita Deangelo","Fredia Biller","Jacqui Bettencourt","Paul Dively","Rosaura Heath","Alva Genao","Lory Casares","Andreas Vanmatre","Mitsue Castaneda","Yukiko Robbins","Jonathon Herford","Edyth Vital","Karyn Leake","Gita Lomanto","Frida Purnell","Elwood Vaillancourt","Yessenia Sambrano"])},function(){}]);