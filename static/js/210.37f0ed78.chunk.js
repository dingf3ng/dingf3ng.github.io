"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[210],{210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>tt});var r=n(43),l=n(475);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const a=["children","options"],c={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var o,s;(s=o||(o={}))[s.MAX=0]="MAX",s[s.HIGH=1]="HIGH",s[s.MED=2]="MED",s[s.LOW=3]="LOW",s[s.MIN=4]="MIN";const d=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,m=/\n{2,}$/,g=/^(\s*>[\s\S]*?)(?=\n{2,})/,y=/^ *> ?/gm,k=/^ {2,}\n/,x=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,w=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,S=/^(?:\n *)*\n/,E=/\r\n?/g,C=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,A=/^\[\^([^\]]+)]/,z=/\f/g,L=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,T=/^\s*?\[(x|\s)\]/,M=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,O=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,$=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,j=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,B=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,R=/^<!--[\s\S]*?(?:-->)/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,N=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,U=/^\{.*\}$/,D=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,_=/^<([^ >]+@[^ >]+)>/,H=/^<([^ >]+:\/[^ >]+)>/,F=/-([a-z])?/gi,P=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,W=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,q=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,V=/\t/g,X=/(^ *\||\| *$)/g,J=/^ *:-+: *$/,K=/^ *:-+ *$/,Y=/^ *-+: *$/,ee="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",te=new RegExp("^([*_])\\1".concat(ee,"\\1\\1(?!\\1)")),ne=new RegExp("^([*_])".concat(ee,"\\1(?!\\1|\\w)")),re=new RegExp("^==".concat(ee,"==")),le=new RegExp("^~~".concat(ee,"~~")),ie=/^\\([^0-9A-Za-z\s])/,ae=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ce=/^\n+/,oe=/^([ \t]*)/,se=/\\([^\\])/g,de=/ *\n+$/,ue=/(?:^|\n)( *)$/,pe="(?:\\d+\\.)",he="(?:[*+-])";function fe(e){return"( *)("+(1===e?pe:he)+") +"}const me=fe(1),ge=fe(2);function ye(e){return new RegExp("^"+(1===e?me:ge))}const ke=ye(1),xe=ye(2);function be(e){return new RegExp("^"+(1===e?me:ge)+"[^\\n]*(?:\\n(?!\\1"+(1===e?pe:he)+" )[^\\n]*)*(\\n|$)","gm")}const ve=be(1),we=be(2);function Se(e){const t=1===e?pe:he;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const Ee=Se(1),Ce=Se(2);function Ae(e,t){const n=1===t,r=n?Ee:Ce,l=n?ve:we,i=n?ke:xe;return{match(e,t,n){const l=ue.exec(n);return l&&(t.list||!t.inline&&!t.simple)?r.exec(e=l[1]+e):null},order:1,parse(e,t,r){const a=n?+e[2]:void 0,c=e[0].replace(m,"\n").match(l);let o=!1;return{items:c.map((function(e,n){const l=i.exec(e)[0].length,a=new RegExp("^ {1,"+l+"}","gm"),s=e.replace(a,"").replace(i,""),d=n===c.length-1,u=-1!==s.indexOf("\n\n")||d&&o;o=u;const p=r.inline,h=r.list;let f;r.list=!0,u?(r.inline=!1,f=s.replace(de,"\n\n")):(r.inline=!0,f=s.replace(de,""));const m=t(f,r);return r.inline=p,r.list=h,m})),ordered:n,start:a}},render:(t,n,r)=>e(t.ordered?"ol":"ul",{key:r.key,start:t.type===c.orderedList?t.start:void 0},t.items.map((function(t,l){return e("li",{key:l},n(t,r))})))}}const ze=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Le=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Te=[g,b,v,M,$,O,R,P,ve,Ee,we,Ce],Me=[...Te,/^[^\n]+(?:  \n|\n{2,})/,j,N];function Oe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function $e(e){return Y.test(e)?"right":J.test(e)?"center":K.test(e)?"left":null}function je(e,t,n,r){const l=n.inTable;n.inTable=!0;let i=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,l)=>("|"===l.trim()?e.push(r?{type:c.tableSeparator}:{type:c.text,text:l}):""!==l&&e.push.apply(e,t(l,n)),e)),[]);n.inTable=l;let a=[[]];return i.forEach((function(e,t){e.type===c.tableSeparator?0!==t&&t!==i.length-1&&a.push([]):(e.type!==c.text||null!=i[t+1]&&i[t+1].type!==c.tableSeparator||(e.text=e.text.trimEnd()),a[a.length-1].push(e))})),a}function Be(e,t,n){n.inline=!0;const r=e[2]?e[2].replace(X,"").split("|").map($e):[],l=e[3]?function(e,t,n){return e.trim().split("\n").map((function(e){return je(e,t,n,!0)}))}(e[3],t,n):[],i=je(e[1],t,n,!!l.length);return n.inline=!1,l.length?{align:r,cells:l,header:i,type:c.table}:{children:i,type:c.paragraph}}function Re(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ie(e){return function(t,n){return n.inline?e.exec(t):null}}function Ne(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ue(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function De(e){return function(t){return e.exec(t)}}function _e(e,t,n){if(t.inline||t.simple)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!Te.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const l=r.trimEnd();return""==l?null:[r,l]}function He(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function Fe(e){return e.replace(se,"$1")}function Pe(e,t,n){const r=n.inline||!1,l=n.simple||!1;n.inline=!0,n.simple=!0;const i=e(t,n);return n.inline=r,n.simple=l,i}function We(e,t,n){const r=n.inline||!1,l=n.simple||!1;n.inline=!1,n.simple=!0;const i=e(t,n);return n.inline=r,n.simple=l,i}function Ge(e,t,n){const r=n.inline||!1;n.inline=!1;const l=e(t,n);return n.inline=r,l}const Ze=(e,t,n)=>({children:Pe(t,e[1],n)});function qe(){return{}}function Qe(){return null}function Ve(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Xe(e,t,n){let r=e;const l=t.split(".");for(;l.length&&(r=r[l[0]],void 0!==r);)l.shift();return r||n}function Je(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(e,n){const r=Xe(t.overrides,"".concat(e,".props"),{});for(var l=arguments.length,a=new Array(l>2?l-2:0),c=2;c<l;c++)a[c-2]=arguments[c];return t.createElement(function(e,t){const n=Xe(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Xe(t,"".concat(e,".component"),e):e}(e,t.overrides),i({},n,r,{className:Ve(null==n?void 0:n.className,r.className)||void 0}),...a)}function l(e){e=e.replace(L,"");let l=!1;t.forceInline?l=!0:t.forceBlock||(l=!1===Q.test(e));const i=J(X(l?e:"".concat(e.trimEnd().replace(ce,""),"\n\n"),{inline:l}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;const a=t.wrapper||(l?"span":"div");let c;if(i.length>1||t.forceWrapper)c=i;else{if(1===i.length)return c=i[0],"string"==typeof c?n("span",{key:"outer"},c):c;c=null}return r.createElement(a,{key:"outer"},c)}function a(e,n){const i=n.match(h);return i?i.reduce((function(n,i,a){const c=i.indexOf("=");if(-1!==c){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(I)&&(e=e.replace(F,(function(e,t){return t.toUpperCase()}))),e}(i.slice(0,c)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(i.slice(c+1).trim()),u=d[o]||o,p=n[u]=function(e,t,n,r){return"style"===t?n.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===t||"src"===t?r(n,e,t):(n.match(U)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(e,o,s,t.sanitizer);"string"==typeof p&&(j.test(p)||N.test(p))&&(n[u]=r.cloneElement(l(p.trim()),{key:a}))}else"style"!==i&&(n[d[i]||i]=!0);return n}),{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||He,t.slugify=t.slugify||Oe,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},u,t.namedCodesToUnicode):u,t.createElement=t.createElement||r.createElement;const o=[],s={},m={[c.blockQuote]:{match:Ue(g),order:1,parse:(e,t,n)=>({children:t(e[0].replace(y,""),n)}),render:(e,t,r)=>n("blockquote",{key:r.key},t(e.children,r))},[c.breakLine]:{match:De(k),order:1,parse:qe,render:(e,t,r)=>n("br",{key:r.key})},[c.breakThematic]:{match:Ue(x),order:1,parse:qe,render:(e,t,r)=>n("hr",{key:r.key})},[c.codeBlock]:{match:Ue(v),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,r)=>n("pre",{key:r.key},n("code",i({},e.attrs,{className:e.lang?"lang-".concat(e.lang):""}),e.text))},[c.codeFenced]:{match:Ue(b),order:0,parse:e=>({attrs:a("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:c.codeBlock})},[c.codeInline]:{match:Ne(w),order:3,parse:e=>({text:e[2]}),render:(e,t,r)=>n("code",{key:r.key},e.text)},[c.footnote]:{match:Ue(C),order:0,parse:e=>(o.push({footnote:e[2],identifier:e[1]}),{}),render:Qe},[c.footnoteReference]:{match:Ie(A),order:1,parse:e=>({target:"#".concat(t.slugify(e[1],Oe)),text:e[1]}),render:(e,r,l)=>n("a",{key:l.key,href:t.sanitizer(e.target,"a","href")},n("sup",{key:l.key},e.text))},[c.gfmTask]:{match:Ie(T),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,r)=>n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[c.heading]:{match:Ue(t.enforceAtxHeadings?O:M),order:1,parse:(e,n,r)=>({children:Pe(n,e[2],r),id:t.slugify(e[2],Oe),level:e[1].length}),render:(e,t,r)=>n("h".concat(e.level),{id:e.id,key:r.key},t(e.children,r))},[c.headingSetext]:{match:Ue($),order:0,parse:(e,t,n)=>({children:Pe(t,e[1],n),level:"="===e[2]?1:2,type:c.heading})},[c.htmlBlock]:{match:De(j),order:1,parse(e,t,n){const[,r]=e[3].match(oe),l=new RegExp("^".concat(r),"gm"),i=e[3].replace(l,""),c=(o=i,Me.some((e=>e.test(o)))?Ge:Pe);var o;const s=e[1].toLowerCase(),d=-1!==p.indexOf(s),u=(d?s:e[1]).trim(),h={attrs:a(u,e[2]),noInnerParse:d,tag:u};return n.inAnchor=n.inAnchor||"a"===s,d?h.text=e[3]:h.children=c(t,i,n),n.inAnchor=!1,h},render:(e,t,r)=>n(e.tag,i({key:r.key},e.attrs),e.text||t(e.children,r))},[c.htmlSelfClosing]:{match:De(N),order:1,parse(e){const t=e[1].trim();return{attrs:a(t,e[2]||""),tag:t}},render:(e,t,r)=>n(e.tag,i({},e.attrs,{key:r.key}))},[c.htmlComment]:{match:De(R),order:1,parse:()=>({}),render:Qe},[c.image]:{match:Ne(Le),order:1,parse:e=>({alt:e[1],target:Fe(e[2]),title:e[3]}),render:(e,r,l)=>n("img",{key:l.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})},[c.link]:{match:Ie(ze),order:3,parse:(e,t,n)=>({children:We(t,e[1],n),target:Fe(e[2]),title:e[3]}),render:(e,r,l)=>n("a",{key:l.key,href:t.sanitizer(e.target,"a","href"),title:e.title},r(e.children,l))},[c.linkAngleBraceStyleDetector]:{match:Ie(H),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],type:c.link})},[c.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Ie(D)(e,t),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],title:void 0,type:c.link})},[c.linkMailtoDetector]:{match:Ie(_),order:0,parse(e){let t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:c.text}],target:n,type:c.link}}},[c.orderedList]:Ae(n,1),[c.unorderedList]:Ae(n,2),[c.newlineCoalescer]:{match:Ue(S),order:3,parse:qe,render:()=>"\n"},[c.paragraph]:{match:_e,order:3,parse:Ze,render:(e,t,r)=>n("p",{key:r.key},t(e.children,r))},[c.ref]:{match:Ie(W),order:0,parse:e=>(s[e[1]]={target:e[2],title:e[4]},{}),render:Qe},[c.refImage]:{match:Ne(G),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,l)=>s[e.ref]?n("img",{key:l.key,alt:e.alt,src:t.sanitizer(s[e.ref].target,"img","src"),title:s[e.ref].title}):null},[c.refLink]:{match:Ie(Z),order:0,parse:(e,t,n)=>({children:t(e[1],n),fallbackChildren:t(e[0].replace(q,"\\$1"),n),ref:e[2]}),render:(e,r,l)=>s[e.ref]?n("a",{key:l.key,href:t.sanitizer(s[e.ref].target,"a","href"),title:s[e.ref].title},r(e.children,l)):n("span",{key:l.key},r(e.fallbackChildren,l))},[c.table]:{match:Ue(P),order:1,parse:Be,render(e,t,r){const l=e;return n("table",{key:r.key},n("thead",null,n("tr",null,l.header.map((function(e,i){return n("th",{key:i,style:Re(l,i)},t(e,r))})))),n("tbody",null,l.cells.map((function(e,i){return n("tr",{key:i},e.map((function(e,i){return n("td",{key:i,style:Re(l,i)},t(e,r))})))}))))}},[c.text]:{match:De(ae),order:4,parse:e=>({text:e[0].replace(B,((e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e))}),render:e=>e.text},[c.textBolded]:{match:Ne(te),order:2,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,r)=>n("strong",{key:r.key},t(e.children,r))},[c.textEmphasized]:{match:Ne(ne),order:3,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,r)=>n("em",{key:r.key},t(e.children,r))},[c.textEscaped]:{match:Ne(ie),order:1,parse:e=>({text:e[1],type:c.text})},[c.textMarked]:{match:Ne(re),order:3,parse:Ze,render:(e,t,r)=>n("mark",{key:r.key},t(e.children,r))},[c.textStrikethroughed]:{match:Ne(le),order:3,parse:Ze,render:(e,t,r)=>n("del",{key:r.key},t(e.children,r))}};!0===t.disableParsingRawHTML&&(delete m[c.htmlBlock],delete m[c.htmlSelfClosing]);const X=function(e){let t=Object.keys(e);function n(r,l){let i=[],a="";for(;r;){let c=0;for(;c<t.length;){const o=t[c],s=e[o],d=s.match(r,l,a);if(d){const e=d[0];r=r.substring(e.length);const t=s.parse(d,n,l);null==t.type&&(t.type=o),i.push(t),a=e;break}c++}}return i}return t.sort((function(t,n){let r=e[t].order,l=e[n].order;return r!==l?r-l:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(E,"\n").replace(z,"").replace(V,"    ")}(e),t)}}(m),J=(K=function(e,t){return function(n,r,l){const i=e[n.type].render;return t?t((()=>i(n,r,l)),n,r,l):i(n,r,l)}}(m,t.renderRule),function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t)){const r=n.key,l=[];let i=!1;for(let a=0;a<t.length;a++){n.key=a;const r=e(t[a],n),c="string"==typeof r;c&&i?l[l.length-1]+=r:null!==r&&l.push(r),i=c}return n.key=r,l}return K(t,e,n)});var K;const Y=l(e);return o.length?n("div",null,Y,n("footer",{key:"footer"},o.map((function(e){return n("div",{id:t.slugify(e.identifier,Oe),key:e.identifier},e.identifier,J(X(e.footnote,{inline:!0})))})))):Y}const Ke=e=>{let{children:t="",options:n}=e,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(l[n]=e[n]);return l}(e,a);return r.cloneElement(Je(t,n),l)};var Ye=n(551),et=n(579);const tt=()=>{const[e,t]=(0,r.useState)("");(0,r.useEffect)((()=>{n.e(27).then(n.t.bind(n,27,17)).then((e=>{fetch(e.default).then((e=>e.text())).then(t)}))}));const i=e.split(/\s+/).map((e=>e.replace(/\W/g,""))).filter((e=>e.length)).length;return(0,et.jsx)(Ye.A,{title:"About",description:"Learn More",children:(0,et.jsxs)("article",{className:"post markdown",id:"about",children:[(0,et.jsx)("header",{children:(0,et.jsxs)("div",{className:"title",children:[(0,et.jsx)("h2",{children:(0,et.jsx)(l.N_,{to:"/about",children:"About Me"})}),(0,et.jsxs)("p",{children:["(in about ",i," words)"]})]})}),(0,et.jsx)(Ke,{children:e})]})})}}}]);
//# sourceMappingURL=210.37f0ed78.chunk.js.map