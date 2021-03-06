define("media-player",["exports"],function(e){"use strict"
var t="undefined"!=typeof window&&window&&"node"!==window.appEnvironment
t&&(window.VIDEOJS_NO_DYNAMIC_STYLE=!0)
var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t){return e(t={exports:{}},t.exports),t.exports}var a="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},s=Array.prototype.slice,o=function(e,t){"length"in e||(e=[e])
e=s.call(e)
for(;e.length;){var i=e.shift(),n=t(i)
if(n)return n
i.childNodes&&i.childNodes.length&&(e=s.call(i.childNodes).concat(e))}}
var l=u
function u(e,t){if(!(this instanceof u))return new u(e,t)
this.data=e
this.nodeValue=e
this.length=e.length
this.ownerDocument=t||null}u.prototype.nodeType=8
u.prototype.nodeName="#comment"
u.prototype.toString=function(){return"[object Comment]"}
var c=d
function d(e,t){if(!(this instanceof d))return new d(e)
this.data=e||""
this.length=this.data.length
this.ownerDocument=t||null}d.prototype.type="DOMTextNode"
d.prototype.nodeType=3
d.prototype.nodeName="#text"
d.prototype.toString=function(){return this.data}
d.prototype.replaceData=function(e,t,i){var n=this.data,r=n.substring(0,e),a=n.substring(e+t,n.length)
this.data=r+i+a
this.length=this.data.length}
var h=function(e){var t=this,i=e.type
e.target||(e.target=t)
t.listeners||(t.listeners={})
var n=t.listeners[i]
if(n)return n.forEach((function(i){e.currentTarget=t
"function"==typeof i?i(e):i.handleEvent(e)}))
t.parentNode&&t.parentNode.dispatchEvent(e)}
var p=function(e,t){this.listeners||(this.listeners={})
this.listeners[e]||(this.listeners[e]=[]);-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}
var f=function(e,t){if(!this.listeners)return
if(!this.listeners[e])return
var i=this.listeners[e],n=i.indexOf(t);-1!==n&&i.splice(n,1)}
var m=v,g=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"]
function v(e){switch(e.nodeType){case 3:return b(e.data)
case 8:return"\x3c!--"+e.data+"--\x3e"
default:return (function(e){var t=[],i=e.tagName
"http://www.w3.org/1999/xhtml"===e.namespaceURI&&(i=i.toLowerCase())
t.push("<"+i+(function(e){var t=[]
for(var i in e)y(e,i)&&t.push({name:i,value:e[i]})
for(var n in e._attributes)for(var r in e._attributes[n]){var a=e._attributes[n][r],s=(a.prefix?a.prefix+":":"")+r
t.push({name:s,value:a.value})}e.className&&t.push({name:"class",value:e.className})
return t.length?_(t):""})(e)+(function(e){var t=e.dataset,i=[]
for(var n in t)i.push({name:"data-"+n,value:t[n]})
return i.length?_(i):""})(e))
if(g.indexOf(i)>-1)t.push(" />")
else{t.push(">")
e.childNodes.length?t.push.apply(t,e.childNodes.map(v)):e.textContent||e.innerText?t.push(b(e.textContent||e.innerText)):e.innerHTML&&t.push(e.innerHTML)
t.push("</"+i+">")}return t.join("")})(e)}}function y(e,t){var i=typeof e[t]
return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t}function _(e){var t=[]
e.forEach((function(e){var i=e.name,n=e.value
"style"===i&&(n=(function(e){if("string"==typeof e)return e
var t=""
Object.keys(e).forEach((function(i){var n=e[i]
i=i.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))
t+=i+":"+n+";"}))
return t})(n))
t.push(i+'="'+b(n).replace(/"/g,"&quot;")+'"')}))
return t.length?" "+t.join(" "):""}function b(e){var t=""
"string"==typeof e?t=e:e&&(t=e.toString())
return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var T="http://www.w3.org/1999/xhtml",S=k
function k(e,t,i){if(!(this instanceof k))return new k(e)
var n=void 0===i?T:i||null
this.tagName=n===T?String(e).toUpperCase():e
this.nodeName=this.tagName
this.className=""
this.dataset={}
this.childNodes=[]
this.parentNode=null
this.style={}
this.ownerDocument=t||null
this.namespaceURI=n
this._attributes={}
"INPUT"===this.tagName&&(this.type="text")}k.prototype.type="DOMElement"
k.prototype.nodeType=1
k.prototype.appendChild=function(e){e.parentNode&&e.parentNode.removeChild(e)
this.childNodes.push(e)
e.parentNode=this
return e}
k.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e)
var i=this.childNodes.indexOf(t)
t.parentNode=null
this.childNodes[i]=e
e.parentNode=this
return t}
k.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e)
this.childNodes.splice(t,1)
e.parentNode=null
return e}
k.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e)
var i=null==t?-1:this.childNodes.indexOf(t)
i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e)
e.parentNode=this
return e}
k.prototype.setAttributeNS=function(e,t,i){var n=null,r=t,a=t.indexOf(":")
if(a>-1){n=t.substr(0,a)
r=t.substr(a+1)}if("INPUT"===this.tagName&&"type"===t)this.type=i
else{(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:n}}}
k.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],n=i&&i[t]&&i[t].value
return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof n?null:n}
k.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e]
i&&delete i[t]}
k.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e]
return!!i&&t in i}
k.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)}
k.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)}
k.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)}
k.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)}
k.prototype.removeEventListener=f
k.prototype.addEventListener=p
k.prototype.dispatchEvent=h
k.prototype.focus=function(){}
k.prototype.toString=function(){return m(this)}
k.prototype.getElementsByClassName=function(e){var t=e.split(" "),i=[]
o(this,(function(e){if(1===e.nodeType){var n=(e.className||"").split(" ")
t.every((function(e){return-1!==n.indexOf(e)}))&&i.push(e)}}))
return i}
k.prototype.getElementsByTagName=function(e){e=e.toLowerCase()
var t=[]
o(this.childNodes,(function(i){1!==i.nodeType||"*"!==e&&i.tagName.toLowerCase()!==e||t.push(i)}))
return t}
k.prototype.contains=function(e){return o(this,(function(t){return e===t}))||!1}
var C=E
function E(e){if(!(this instanceof E))return new E
this.childNodes=[]
this.parentNode=null
this.ownerDocument=e||null}E.prototype.type="DocumentFragment"
E.prototype.nodeType=11
E.prototype.nodeName="#document-fragment"
E.prototype.appendChild=S.prototype.appendChild
E.prototype.replaceChild=S.prototype.replaceChild
E.prototype.removeChild=S.prototype.removeChild
E.prototype.toString=function(){return this.childNodes.map((function(e){return String(e)})).join("")}
var w=I
function I(e){}I.prototype.initEvent=function(e,t,i){this.type=e
this.bubbles=t
this.cancelable=i}
I.prototype.preventDefault=function(){}
var P=A
function A(){if(!(this instanceof A))return new A
this.head=this.createElement("head")
this.body=this.createElement("body")
this.documentElement=this.createElement("html")
this.documentElement.appendChild(this.head)
this.documentElement.appendChild(this.body)
this.childNodes=[this.documentElement]
this.nodeType=9}var x=A.prototype
x.createTextNode=function(e){return new c(e,this)}
x.createElementNS=function(e,t){var i=null===e?null:String(e)
return new S(t,this,i)}
x.createElement=function(e){return new S(e,this)}
x.createDocumentFragment=function(){return new C(this)}
x.createEvent=function(e){return new w(e)}
x.createComment=function(e){return new l(e,this)}
x.getElementById=function(e){e=String(e)
return o(this.childNodes,(function(t){if(String(t.id)===e)return t}))||null}
x.getElementsByClassName=S.prototype.getElementsByClassName
x.getElementsByTagName=S.prototype.getElementsByTagName
x.contains=S.prototype.contains
x.removeEventListener=f
x.addEventListener=p
x.dispatchEvent=h
var O,L=new P,D=void 0!==i?i:"undefined"!=typeof window?window:{}
"undefined"!=typeof document?O=document:(O=D["__GLOBAL_DOCUMENT_CACHE@4"])||(O=D["__GLOBAL_DOCUMENT_CACHE@4"]=L)
var R=O,N=r((function(e){function t(){e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}
return t.apply(this,arguments)}e.exports=t}))
var M=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}
r((function(e){function t(i){"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
return t(i)}e.exports=t})),r((function(e){function t(i){e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)}
return t(i)}e.exports=t}))
var U=function(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
e.__proto__=t},B=function(e,t){var i,n=null
try{i=JSON.parse(e,t)}catch(r){n=r}return[n,i]}
var j=r((function(e,t){function i(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode
t&&(e=t)}if("number"==typeof e)return s[e]
var i,a=String(e)
return(i=n[a.toLowerCase()])?i:(i=r[a.toLowerCase()])||(1===a.length?a.charCodeAt(0):void 0)}i.isEventKey=function(e,t){if(e&&"object"==typeof e){var i=e.which||e.keyCode||e.charCode
if(null==i)return!1
if("string"==typeof t){var a
if(a=n[t.toLowerCase()])return a===i
if(a=r[t.toLowerCase()])return a===i}else if("number"==typeof t)return t===i
return!1}}
var n=(t=e.exports=i).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},r=t.aliases={windows:91,"???":16,"???":18,"???":17,"???":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91}
for(a=97;a<123;a++)n[String.fromCharCode(a)]=a-32
for(var a=48;a<58;a++)n[a-48]=a
for(a=1;a<13;a++)n["f"+a]=a+111
for(a=0;a<10;a++)n["numpad "+a]=a+96
var s=t.names=t.title={}
for(a in n)s[n[a]]=a
for(var o in r)n[o]=r[o]})),F=(j.code,j.codes,j.aliases,j.names,j.title,"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{}),V=function(e){if(!e)return!1
var t=H.call(e)
return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)},H=Object.prototype.toString
var q=function(e){var t={}
if(!e)return t
e.trim().split("\n").forEach((function(e){var i=e.indexOf(":"),n=e.slice(0,i).trim().toLowerCase(),r=e.slice(i+1).trim()
void 0===t[n]?t[n]=r:Array.isArray(t[n])?t[n].push(r):t[n]=[t[n],r]}))
return t},W=K,z=K
K.XMLHttpRequest=F.XMLHttpRequest||function(){}
K.XDomainRequest="withCredentials"in new K.XMLHttpRequest?K.XMLHttpRequest:F.XDomainRequest;((function(e,t){for(var i=0;i<e.length;i++)t(e[i])}))(["get","put","post","patch","head","delete"],(function(e){K["delete"===e?"del":e]=function(t,i,n){(i=G(t,i,n)).method=e.toUpperCase()
return X(i)}}))
function G(e,t,i){var n=e
if(V(t)){i=t
"string"==typeof e&&(n={uri:e})}else n=N({},t,{uri:e})
n.callback=i
return n}function K(e,t,i){return X(t=G(e,t,i))}function X(e){if(void 0===e.callback)throw new Error("callback argument missing")
var t=!1,i=function(i,n,r){if(!t){t=!0
e.callback(i,n,r)}}
function n(){var e=void 0
e=l.response?l.response:l.responseText||(function(e){try{if("document"===e.responseType)return e.responseXML
var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName
if(""===e.responseType&&!t)return e.responseXML}catch(i){}return null})(l)
if(m)try{e=JSON.parse(e)}catch(t){}return e}function r(e){clearTimeout(u)
e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error")))
e.statusCode=0
return i(e,g)}function a(){if(!o){var t
clearTimeout(u)
t=e.useXDR&&void 0===l.status?200:1223===l.status?204:l.status
var r=g,a=null
if(0!==t){r={body:n(),statusCode:t,method:d,headers:{},url:c,rawRequest:l}
l.getAllResponseHeaders&&(r.headers=q(l.getAllResponseHeaders()))}else a=new Error("Internal XMLHttpRequest Error")
return i(a,r,r.body)}}var s,o,l=e.xhr||null
l||(l=e.cors||e.useXDR?new K.XDomainRequest:new K.XMLHttpRequest)
var u,c=l.url=e.uri||e.url,d=l.method=e.method||"GET",h=e.body||e.data,p=l.headers=e.headers||{},f=!!e.sync,m=!1,g={body:void 0,headers:{},statusCode:0,method:d,url:c,rawRequest:l}
if("json"in e&&!1!==e.json){m=!0
p.accept||p.Accept||(p.Accept="application/json")
if("GET"!==d&&"HEAD"!==d){p["content-type"]||p["Content-Type"]||(p["Content-Type"]="application/json")
h=JSON.stringify(!0===e.json?h:e.json)}}l.onreadystatechange=function(){4===l.readyState&&setTimeout(a,0)}
l.onload=a
l.onerror=r
l.onprogress=function(){}
l.onabort=function(){o=!0}
l.ontimeout=r
l.open(d,c,!f,e.username,e.password)
f||(l.withCredentials=!!e.withCredentials)
!f&&e.timeout>0&&(u=setTimeout((function(){if(!o){o=!0
l.abort("timeout")
var e=new Error("XMLHttpRequest timeout")
e.code="ETIMEDOUT"
r(e)}}),e.timeout))
if(l.setRequestHeader)for(s in p)p.hasOwnProperty(s)&&l.setRequestHeader(s,p[s])
else if(e.headers&&!(function(e){for(var t in e)if(e.hasOwnProperty(t))return!1
return!0})(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object")
"responseType"in e&&(l.responseType=e.responseType)
"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(l)
l.send(h||null)
return l}W.default=z
var Y,Q=void 0!==i?i:"undefined"!=typeof window?window:{}
"undefined"!=typeof document?Y=document:(Y=Q["__GLOBAL_DOCUMENT_CACHE@4"])||(Y=Q["__GLOBAL_DOCUMENT_CACHE@4"]=L)
var $=Y,J=Object.create||(function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.")
e.prototype=t
return new e}})()
function Z(e,t){this.name="ParsingError"
this.code=e.code
this.message=t||e.message}Z.prototype=J(Error.prototype)
Z.prototype.constructor=Z
Z.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}}
function ee(e){function t(e,t,i,n){return 3600*(0|e)+60*(0|t)+(0|i)+(0|n)/1e3}var i=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/)
return i?i[3]?t(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?t(i[1],i[2],0,i[4]):t(0,i[1],i[2],i[4]):null}function te(){this.values=J(null)}te.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,i){return i?this.has(e)?this.values[e]:t[i]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,i){for(var n=0;n<i.length;++n)if(t===i[n]){this.set(e,t)
break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){if(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100){this.set(e,t)
return!0}return!1}}
function ie(e,t,i,n){var r=n?e.split(n):[e]
for(var a in r)if("string"==typeof r[a]){var s=r[a].split(i)
if(2===s.length){t(s[0],s[1])}}}function ne(e,t,i){var n=e
function r(){var t=ee(e)
if(null===t)throw new Z(Z.Errors.BadTimeStamp,"Malformed timestamp: "+n)
e=e.replace(/^[^\sa-zA-Z-]+/,"")
return t}function a(){e=e.replace(/^\s+/,"")}a()
t.startTime=r()
a()
if("--\x3e"!==e.substr(0,3))throw new Z(Z.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n)
e=e.substr(3)
a()
t.endTime=r()
a();((function(e,t){var n=new te
ie(e,(function(e,t){switch(e){case"region":for(var r=i.length-1;r>=0;r--)if(i[r].id===t){n.set(e,i[r].region)
break}break
case"vertical":n.alt(e,t,["rl","lr"])
break
case"line":var a=t.split(","),s=a[0]
n.integer(e,s)
n.percent(e,s)&&n.set("snapToLines",!1)
n.alt(e,s,["auto"])
2===a.length&&n.alt("lineAlign",a[1],["start","center","end"])
break
case"position":a=t.split(",")
n.percent(e,a[0])
2===a.length&&n.alt("positionAlign",a[1],["start","center","end"])
break
case"size":n.percent(e,t)
break
case"align":n.alt(e,t,["start","center","end","left","right"])}}),/:/,/\s/)
t.region=n.get("region",null)
t.vertical=n.get("vertical","")
try{t.line=n.get("line","auto")}catch(r){}t.lineAlign=n.get("lineAlign","start")
t.snapToLines=n.get("snapToLines",!0)
t.size=n.get("size",100)
try{t.align=n.get("align","center")}catch(r){t.align=n.get("align","middle")}try{t.position=n.get("position","auto")}catch(r){t.position=n.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},t.align)}t.positionAlign=n.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},t.align)}))(e,t)}var re=$.createElement("textarea"),ae={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},se={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},oe={v:"title",lang:"lang"},le={rt:"ruby"}
function ue(e,t){function i(){if(!t)return null
var e=t.match(/^([^<]*)(<[^>]*>?)?/)
return (function(e){t=t.substr(e.length)
return e})(e[1]?e[1]:e[2])}function n(e){re.innerHTML=e
e=re.textContent
re.textContent=""
return e}function r(e,t){return!le[t.localName]||le[t.localName]===e.localName}function a(t,i){var n=ae[t]
if(!n)return null
var r=e.document.createElement(n),a=oe[t]
a&&i&&(r[a]=i.trim())
return r}for(var s,o=e.document.createElement("div"),l=o,u=[];null!==(s=i());)if("<"!==s[0])l.appendChild(e.document.createTextNode(n(s)))
else{if("/"===s[1]){if(u.length&&u[u.length-1]===s.substr(2).replace(">","")){u.pop()
l=l.parentNode}continue}var c,d=ee(s.substr(1,s.length-2))
if(d){c=e.document.createProcessingInstruction("timestamp",d)
l.appendChild(c)
continue}var h=s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)
if(!h)continue
if(!(c=a(h[1],h[3])))continue
if(!r(l,c))continue
if(h[2]){var p=h[2].split(".")
p.forEach((function(e){var t=/^bg_/.test(e),i=t?e.slice(3):e
if(se.hasOwnProperty(i)){var n=t?"background-color":"color",r=se[i]
c.style[n]=r}}))
c.className=p.join(" ")}u.push(h[1])
l.appendChild(c)
l=c}return o}var ce=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]]
function de(e){for(var t=0;t<ce.length;t++){var i=ce[t]
if(e>=i[0]&&e<=i[1])return!0}return!1}function he(e){var t=[],i=""
if(!e||!e.childNodes)return"ltr"
function n(e,t){for(var i=t.childNodes.length-1;i>=0;i--)e.push(t.childNodes[i])}function r(e){if(!e||!e.length)return null
var t=e.pop(),i=t.textContent||t.innerText
if(i){var a=i.match(/^.*(\n|\r)/)
if(a){e.length=0
return a[0]}return i}if("ruby"===t.tagName)return r(e)
if(t.childNodes){n(e,t)
return r(e)}}n(t,e)
for(;i=r(t);)for(var a=0;a<i.length;a++)if(de(i.charCodeAt(a)))return"rtl"
return"ltr"}function pe(){}pe.prototype.applyStyles=function(e,t){t=t||this.div
for(var i in e)e.hasOwnProperty(i)&&(t.style[i]=e[i])}
pe.prototype.formatStyle=function(e,t){return 0===e?0:e+t}
function fe(e,t,i){pe.call(this)
this.cue=t
this.cueDiv=ue(e,t.text)
var n={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"}
this.applyStyles(n,this.cueDiv)
this.div=e.document.createElement("div")
n={direction:he(this.cueDiv),writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===t.align?"center":t.align,font:i.font,whiteSpace:"pre-line",position:"absolute"}
this.applyStyles(n)
this.div.appendChild(this.cueDiv)
var r=0
switch(t.positionAlign){case"start":r=t.position
break
case"center":r=t.position-t.size/2
break
case"end":r=t.position-t.size}""===t.vertical?this.applyStyles({left:this.formatStyle(r,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(r,"%"),height:this.formatStyle(t.size,"%")})
this.move=function(e){this.applyStyles({top:this.formatStyle(e.top,"px"),bottom:this.formatStyle(e.bottom,"px"),left:this.formatStyle(e.left,"px"),right:this.formatStyle(e.right,"px"),height:this.formatStyle(e.height,"px"),width:this.formatStyle(e.width,"px")})}}fe.prototype=J(pe.prototype)
fe.prototype.constructor=fe
function me(e){var t,i,n,r
if(e.div){i=e.div.offsetHeight
n=e.div.offsetWidth
r=e.div.offsetTop
var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects()
e=e.div.getBoundingClientRect()
t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left
this.right=e.right
this.top=e.top||r
this.height=e.height||i
this.bottom=e.bottom||r+(e.height||i)
this.width=e.width||n
this.lineHeight=void 0!==t?t:e.lineHeight}me.prototype.move=function(e,t){t=void 0!==t?t:this.lineHeight
switch(e){case"+x":this.left+=t
this.right+=t
break
case"-x":this.left-=t
this.right-=t
break
case"+y":this.top+=t
this.bottom+=t
break
case"-y":this.top-=t
this.bottom-=t}}
me.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top}
me.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0
return!1}
me.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right}
me.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left
case"-x":return this.right>e.right
case"+y":return this.top<e.top
case"-y":return this.bottom>e.bottom}}
me.prototype.intersectPercentage=function(e){return Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left))*Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top))/(this.height*this.width)}
me.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}}
me.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,i=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,n=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0
return{left:(e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e).left,right:e.right,top:e.top||n,height:e.height||t,bottom:e.bottom||n+(e.height||t),width:e.width||i}}
function ge(e,t,i,n){var r=new me(t),a=t.cue,s=(function(e){if("number"==typeof e.line&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line
if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1
for(var t=e.track,i=t.textTrackList,n=0,r=0;r<i.length&&i[r]!==t;r++)"showing"===i[r].mode&&n++
return-1*++n})(a),o=[]
if(a.snapToLines){var l
switch(a.vertical){case"":o=["+y","-y"]
l="height"
break
case"rl":o=["+x","-x"]
l="width"
break
case"lr":o=["-x","+x"]
l="width"}var u=r.lineHeight,c=u*Math.round(s),d=i[l]+u,h=o[0]
if(Math.abs(c)>d){c=c<0?-1:1
c*=Math.ceil(d/u)*u}if(s<0){c+=""===a.vertical?i.height:i.width
o=o.reverse()}r.move(h,c)}else{var p=r.lineHeight/i.height*100
switch(a.lineAlign){case"center":s-=p/2
break
case"end":s-=p}switch(a.vertical){case"":t.applyStyles({top:t.formatStyle(s,"%")})
break
case"rl":t.applyStyles({left:t.formatStyle(s,"%")})
break
case"lr":t.applyStyles({right:t.formatStyle(s,"%")})}o=["+y","-x","+x","-y"]
r=new me(t)}var f=(function(e,t){for(var r,a=new me(e),s=1,o=0;o<t.length;o++){for(;e.overlapsOppositeAxis(i,t[o])||e.within(i)&&e.overlapsAny(n);)e.move(t[o])
if(e.within(i))return e
var l=e.intersectPercentage(i)
if(s>l){r=new me(e)
s=l}e=new me(a)}return r||a})(r,o)
t.move(f.toCSSCompatValues(i))}function ve(){}ve.StringDecoder=function(){return{decode:function(e){if(!e)return""
if("string"!=typeof e)throw new Error("Error - expected string data.")
return decodeURIComponent(encodeURIComponent(e))}}}
ve.convertCueToDOMTree=function(e,t){return e&&t?ue(e,t):null}
ve.processCues=function(e,t,i){if(!e||!t||!i)return null
for(;i.firstChild;)i.removeChild(i.firstChild)
var n=e.document.createElement("div")
n.style.position="absolute"
n.style.left="0"
n.style.right="0"
n.style.top="0"
n.style.bottom="0"
n.style.margin="1.5%"
i.appendChild(n)
if((function(e){for(var t=0;t<e.length;t++)if(e[t].hasBeenReset||!e[t].displayState)return!0
return!1})(t)){var r=[],a=me.getSimpleBoxPosition(n),s={font:Math.round(.05*a.height*100)/100+"px sans-serif"};((function(){for(var i,o,l=0;l<t.length;l++){o=t[l]
i=new fe(e,o,s)
n.appendChild(i.div)
ge(0,i,a,r)
o.displayState=i.div
r.push(me.getSimpleBoxPosition(i))}}))()}else for(var o=0;o<t.length;o++)n.appendChild(t[o].displayState)}
ve.Parser=function(e,t,i){if(!i){i=t
t={}}t||(t={})
this.window=e
this.vttjs=t
this.state="INITIAL"
this.buffer=""
this.decoder=i||new TextDecoder("utf8")
this.regionList=[]}
ve.Parser.prototype={reportOrThrowError:function(e){if(!(e instanceof Z))throw e
this.onparsingerror&&this.onparsingerror(e)},parse:function(e){var t=this
e&&(t.buffer+=t.decoder.decode(e,{stream:!0}))
function i(){for(var e=t.buffer,i=0;i<e.length&&"\r"!==e[i]&&"\n"!==e[i];)++i
var n=e.substr(0,i)
"\r"===e[i]&&++i
"\n"===e[i]&&++i
t.buffer=e.substr(i)
return n}function n(e){e.match(/X-TIMESTAMP-MAP/)?ie(e,(function(e,i){switch(e){case"X-TIMESTAMP-MAP":((function(e){var i=new te
ie(e,(function(e,t){switch(e){case"MPEGT":i.integer(e+"S",t)
break
case"LOCA":i.set(e+"L",ee(t))}}),/[^\d]:/,/,/)
t.ontimestampmap&&t.ontimestampmap({MPEGTS:i.get("MPEGTS"),LOCAL:i.get("LOCAL")})}))(i)}}),/=/):ie(e,(function(e,i){switch(e){case"Region":((function(e){var i=new te
ie(e,(function(e,t){switch(e){case"id":i.set(e,t)
break
case"width":i.percent(e,t)
break
case"lines":i.integer(e,t)
break
case"regionanchor":case"viewportanchor":var n=t.split(",")
if(2!==n.length)break
var r=new te
r.percent("x",n[0])
r.percent("y",n[1])
if(!r.has("x")||!r.has("y"))break
i.set(e+"X",r.get("x"))
i.set(e+"Y",r.get("y"))
break
case"scroll":i.alt(e,t,["up"])}}),/=/,/\s/)
if(i.has("id")){var n=new(t.vttjs.VTTRegion||t.window.VTTRegion)
n.width=i.get("width",100)
n.lines=i.get("lines",3)
n.regionAnchorX=i.get("regionanchorX",0)
n.regionAnchorY=i.get("regionanchorY",100)
n.viewportAnchorX=i.get("viewportanchorX",0)
n.viewportAnchorY=i.get("viewportanchorY",100)
n.scroll=i.get("scroll","")
t.onregion&&t.onregion(n)
t.regionList.push({id:i.get("id"),region:n})}}))(i)}}),/:/)}try{var r
if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this
var a=(r=i()).match(/^WEBVTT([ \t].*)?$/)
if(!a||!a[0])throw new Z(Z.Errors.BadSignature)
t.state="HEADER"}for(var s=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this
s?s=!1:r=i()
switch(t.state){case"HEADER":/:/.test(r)?n(r):r||(t.state="ID")
continue
case"NOTE":r||(t.state="ID")
continue
case"ID":if(/^NOTE($|[ \t])/.test(r)){t.state="NOTE"
break}if(!r)continue
t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"")
try{t.cue.align="center"}catch(l){t.cue.align="middle"}t.state="CUE"
if(-1===r.indexOf("--\x3e")){t.cue.id=r
continue}case"CUE":try{ne(r,t.cue,t.regionList)}catch(l){t.reportOrThrowError(l)
t.cue=null
t.state="BADCUE"
continue}t.state="CUETEXT"
continue
case"CUETEXT":var o=-1!==r.indexOf("--\x3e")
if(!r||o&&(s=!0)){t.oncue&&t.oncue(t.cue)
t.cue=null
t.state="ID"
continue}t.cue.text&&(t.cue.text+="\n")
t.cue.text+=r.replace(/\u2028/g,"\n").replace(/u2029/g,"\n")
continue
case"BADCUE":r||(t.state="ID")
continue}}}catch(l){t.reportOrThrowError(l)
"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue)
t.cue=null
t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{this.buffer+=this.decoder.decode()
if(this.cue||"HEADER"===this.state){this.buffer+="\n\n"
this.parse()}if("INITIAL"===this.state)throw new Z(Z.Errors.BadSignature)}catch(e){this.reportOrThrowError(e)}this.onflush&&this.onflush()
return this}}
var ye=ve,_e="auto",be={"":1,lr:1,rl:1},Te={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1}
function Se(e){return"string"==typeof e&&(!!Te[e.toLowerCase()]&&e.toLowerCase())}function ke(e,t,i){this.hasBeenReset=!1
var n="",r=!1,a=e,s=t,o=i,l=null,u="",c=!0,d="auto",h="start",p="auto",f="auto",m=100,g="center"
Object.defineProperties(this,{id:{enumerable:!0,get:function(){return n},set:function(e){n=""+e}},pauseOnExit:{enumerable:!0,get:function(){return r},set:function(e){r=!!e}},startTime:{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.")
a=e
this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.")
s=e
this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(e){o=""+e
this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return l},set:function(e){l=e
this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return u},set:function(e){var t=(function(e){return"string"==typeof e&&!!be[e.toLowerCase()]&&e.toLowerCase()})(e)
if(!1===t)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.")
u=t
this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(e){c=!!e
this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return d},set:function(e){if("number"!=typeof e&&e!==_e)throw new SyntaxError("Line: an invalid number or illegal string was specified.")
d=e
this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return h},set:function(e){var t=Se(e)
if(t){h=t
this.hasBeenReset=!0}else console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return p},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.")
p=e
this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(e){var t=Se(e)
if(t){f=t
this.hasBeenReset=!0}else console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return m},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.")
m=e
this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(e){var t=Se(e)
if(!t)throw new SyntaxError("align: an invalid or illegal alignment string was specified.")
g=t
this.hasBeenReset=!0}}})
this.displayState=void 0}ke.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)}
var Ce=ke,Ee={"":!0,up:!0}
function we(e){return"number"==typeof e&&e>=0&&e<=100}var Ie=function(){var e=100,t=3,i=0,n=100,r=0,a=100,s=""
Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!we(t))throw new Error("Width must be between 0 and 100.")
e=t}},lines:{enumerable:!0,get:function(){return t},set:function(e){if("number"!=typeof e)throw new TypeError("Lines must be set to a number.")
t=e}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(e){if(!we(e))throw new Error("RegionAnchorX must be between 0 and 100.")
n=e}},regionAnchorX:{enumerable:!0,get:function(){return i},set:function(e){if(!we(e))throw new Error("RegionAnchorY must be between 0 and 100.")
i=e}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(e){if(!we(e))throw new Error("ViewportAnchorY must be between 0 and 100.")
a=e}},viewportAnchorX:{enumerable:!0,get:function(){return r},set:function(e){if(!we(e))throw new Error("ViewportAnchorX must be between 0 and 100.")
r=e}},scroll:{enumerable:!0,get:function(){return s},set:function(e){var t=(function(e){return"string"==typeof e&&!!Ee[e.toLowerCase()]&&e.toLowerCase()})(e)
!1===t?console.warn("Scroll: an invalid or illegal string was specified."):s=t}}})},Pe=r((function(e){var t=e.exports={WebVTT:ye,VTTCue:Ce,VTTRegion:Ie}
F.vttjs=t
F.WebVTT=t.WebVTT
var i=t.VTTCue,n=t.VTTRegion,r=F.VTTCue,a=F.VTTRegion
t.shim=function(){F.VTTCue=i
F.VTTRegion=n}
t.restore=function(){F.VTTCue=r
F.VTTRegion=a}
F.VTTCue||t.shim()})),Ae=(Pe.WebVTT,Pe.VTTCue,Pe.VTTRegion,r((function(e){function t(i,n){e.exports=t=Object.setPrototypeOf||function(e,t){e.__proto__=t
return e}
return t(i,n)}e.exports=t})))
var xe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})))
return!0}catch(e){return!1}},Oe=r((function(e){function t(i,n,r){xe()?e.exports=t=Reflect.construct:e.exports=t=function(e,t,i){var n=[null]
n.push.apply(n,t)
var r=new(Function.bind.apply(e,n))
i&&Ae(r,i.prototype)
return r}
return t.apply(null,arguments)}e.exports=t}))
var Le=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
t&&Ae(e,t)}
function De(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var Re=De(r((function(e,t){i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,n=/^([^\/?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,a=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,s={buildAbsoluteURL:function(e,t,i){i=i||{}
e=e.trim()
if(!(t=t.trim())){if(!i.alwaysNormalize)return e
var r=s.parseURL(e)
if(!r)throw new Error("Error trying to parse base URL.")
r.path=s.normalizePath(r.path)
return s.buildURLFromParts(r)}var a=s.parseURL(t)
if(!a)throw new Error("Error trying to parse relative URL.")
if(a.scheme){if(!i.alwaysNormalize)return t
a.path=s.normalizePath(a.path)
return s.buildURLFromParts(a)}var o=s.parseURL(e)
if(!o)throw new Error("Error trying to parse base URL.")
if(!o.netLoc&&o.path&&"/"!==o.path[0]){var l=n.exec(o.path)
o.netLoc=l[1]
o.path=l[2]}o.netLoc&&!o.path&&(o.path="/")
var u={scheme:o.scheme,netLoc:a.netLoc,path:null,params:a.params,query:a.query,fragment:a.fragment}
if(!a.netLoc){u.netLoc=o.netLoc
if("/"!==a.path[0])if(a.path){var c=o.path,d=c.substring(0,c.lastIndexOf("/")+1)+a.path
u.path=s.normalizePath(d)}else{u.path=o.path
if(!a.params){u.params=o.params
a.query||(u.query=o.query)}}}null===u.path&&(u.path=i.alwaysNormalize?s.normalizePath(a.path):a.path)
return s.buildURLFromParts(u)},parseURL:function(e){var t=i.exec(e)
return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){e=e.split("").reverse().join("").replace(r,"")
for(;e.length!==(e=e.replace(a,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=s
var i,n,r,a,s}))),Ne=De(F),Me=function(e,t){if(/^[a-z]+:/i.test(t))return t;/\/\//i.test(e)||(e=Re.default.buildAbsoluteURL(Ne.default.location&&Ne.default.location.href||"",e))
return Re.default.buildAbsoluteURL(e,t)},Ue=(function(){function e(){this.listeners={}}var t=e.prototype
t.on=function(e,t){this.listeners[e]||(this.listeners[e]=[])
this.listeners[e].push(t)}
t.off=function(e,t){if(!this.listeners[e])return!1
var i=this.listeners[e].indexOf(t)
this.listeners[e]=this.listeners[e].slice(0)
this.listeners[e].splice(i,1)
return i>-1}
t.trigger=function(e){var t=this.listeners[e]
if(t)if(2===arguments.length)for(var i=t.length,n=0;n<i;++n)t[n].call(this,arguments[1])
else for(var r=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,r)}
t.dispose=function(){this.listeners={}}
t.pipe=function(e){this.on("data",(function(t){e.push(t)}))}
return e})()
function Be(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var je=Be(F),Fe=function(e){return je.default.atob?je.default.atob(e):Buffer.from(e,"base64").toString("binary")}
var Ve=function(e){for(var t=Fe(e),i=new Uint8Array(t.length),n=0;n<t.length;n++)i[n]=t.charCodeAt(n)
return i},He=(function(e){U(t,e)
function t(){var t;(t=e.call(this)||this).buffer=""
return t}t.prototype.push=function(e){var t
this.buffer+=e
t=this.buffer.indexOf("\n")
for(;t>-1;t=this.buffer.indexOf("\n")){this.trigger("data",this.buffer.substring(0,t))
this.buffer=this.buffer.substring(t+1)}}
return t})(Ue),qe=function(e){for(var t,i=e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),n={},r=i.length;r--;)if(""!==i[r]){(t=/([^=]*)=(.*)/.exec(i[r]).slice(1))[0]=t[0].replace(/^\s+|\s+$/g,"")
t[1]=t[1].replace(/^\s+|\s+$/g,"")
t[1]=t[1].replace(/^['"](.*)['"]$/g,"$1")
n[t[0]]=t[1]}return n},We=(function(e){U(t,e)
function t(){var t;(t=e.call(this)||this).customParsers=[]
t.tagMappers=[]
return t}var i=t.prototype
i.push=function(e){var t,i,n=this
if(0!==(e=e.trim()).length)if("#"===e[0]){this.tagMappers.reduce((function(t,i){var n=i(e)
return n===e?t:t.concat([n])}),[e]).forEach((function(e){for(var r=0;r<n.customParsers.length;r++)if(n.customParsers[r].call(n,e))return
if(0===e.indexOf("#EXT")){e=e.replace("\r","")
if(t=/^#EXTM3U/.exec(e))n.trigger("data",{type:"tag",tagType:"m3u"})
else if(t=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)){i={type:"tag",tagType:"inf"}
t[1]&&(i.duration=parseFloat(t[1]))
t[2]&&(i.title=t[2])
n.trigger("data",i)}else if(t=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)){i={type:"tag",tagType:"targetduration"}
t[1]&&(i.duration=parseInt(t[1],10))
n.trigger("data",i)}else if(t=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)){i={type:"tag",tagType:"totalduration"}
t[1]&&(i.duration=parseInt(t[1],10))
n.trigger("data",i)}else if(t=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)){i={type:"tag",tagType:"version"}
t[1]&&(i.version=parseInt(t[1],10))
n.trigger("data",i)}else if(t=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)){i={type:"tag",tagType:"media-sequence"}
t[1]&&(i.number=parseInt(t[1],10))
n.trigger("data",i)}else if(t=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)){i={type:"tag",tagType:"discontinuity-sequence"}
t[1]&&(i.number=parseInt(t[1],10))
n.trigger("data",i)}else if(t=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)){i={type:"tag",tagType:"playlist-type"}
t[1]&&(i.playlistType=t[1])
n.trigger("data",i)}else if(t=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)){i={type:"tag",tagType:"byterange"}
t[1]&&(i.length=parseInt(t[1],10))
t[2]&&(i.offset=parseInt(t[2],10))
n.trigger("data",i)}else if(t=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)){i={type:"tag",tagType:"allow-cache"}
t[1]&&(i.allowed=!/NO/.test(t[1]))
n.trigger("data",i)}else if(t=/^#EXT-X-MAP:?(.*)$/.exec(e)){i={type:"tag",tagType:"map"}
if(t[1]){var a=qe(t[1])
a.URI&&(i.uri=a.URI)
if(a.BYTERANGE){var s=a.BYTERANGE.split("@"),o=s[0],l=s[1]
i.byterange={}
o&&(i.byterange.length=parseInt(o,10))
l&&(i.byterange.offset=parseInt(l,10))}}n.trigger("data",i)}else if(t=/^#EXT-X-STREAM-INF:?(.*)$/.exec(e)){i={type:"tag",tagType:"stream-inf"}
if(t[1]){i.attributes=qe(t[1])
if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),c={}
u[0]&&(c.width=parseInt(u[0],10))
u[1]&&(c.height=parseInt(u[1],10))
i.attributes.RESOLUTION=c}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10))
i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}n.trigger("data",i)}else if(t=/^#EXT-X-MEDIA:?(.*)$/.exec(e)){i={type:"tag",tagType:"media"}
t[1]&&(i.attributes=qe(t[1]))
n.trigger("data",i)}else if(t=/^#EXT-X-ENDLIST/.exec(e))n.trigger("data",{type:"tag",tagType:"endlist"})
else if(t=/^#EXT-X-DISCONTINUITY/.exec(e))n.trigger("data",{type:"tag",tagType:"discontinuity"})
else if(t=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)){i={type:"tag",tagType:"program-date-time"}
if(t[1]){i.dateTimeString=t[1]
i.dateTimeObject=new Date(t[1])}n.trigger("data",i)}else if(t=/^#EXT-X-KEY:?(.*)$/.exec(e)){i={type:"tag",tagType:"key"}
if(t[1]){i.attributes=qe(t[1])
if(i.attributes.IV){"0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2))
i.attributes.IV=i.attributes.IV.match(/.{8}/g)
i.attributes.IV[0]=parseInt(i.attributes.IV[0],16)
i.attributes.IV[1]=parseInt(i.attributes.IV[1],16)
i.attributes.IV[2]=parseInt(i.attributes.IV[2],16)
i.attributes.IV[3]=parseInt(i.attributes.IV[3],16)
i.attributes.IV=new Uint32Array(i.attributes.IV)}}n.trigger("data",i)}else if(t=/^#EXT-X-START:?(.*)$/.exec(e)){i={type:"tag",tagType:"start"}
if(t[1]){i.attributes=qe(t[1])
i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"])
i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)}n.trigger("data",i)}else if(t=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)){i={type:"tag",tagType:"cue-out-cont"}
t[1]?i.data=t[1]:i.data=""
n.trigger("data",i)}else if(t=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)){i={type:"tag",tagType:"cue-out"}
t[1]?i.data=t[1]:i.data=""
n.trigger("data",i)}else if(t=/^#EXT-X-CUE-IN:?(.*)?$/.exec(e)){i={type:"tag",tagType:"cue-in"}
t[1]?i.data=t[1]:i.data=""
n.trigger("data",i)}else n.trigger("data",{type:"tag",data:e.slice(4)})}else n.trigger("data",{type:"comment",text:e.slice(1)})}))}else this.trigger("data",{type:"uri",uri:e})}
i.addParser=function(e){var t=this,i=e.expression,n=e.customType,r=e.dataParser,a=e.segment
"function"!=typeof r&&(r=function(e){return e})
this.customParsers.push((function(e){if(i.exec(e)){t.trigger("data",{type:"custom",data:r(e),customType:n,segment:a})
return!0}}))}
i.addTagMapper=function(e){var t=e.expression,i=e.map
this.tagMappers.push((function(e){return t.test(e)?i(e):e}))}
return t})(Ue),ze=(function(e){U(t,e)
function t(){var t;(t=e.call(this)||this).lineStream=new He
t.parseStream=new We
t.lineStream.pipe(t.parseStream)
var i,n,r=M(t),a=[],s={},o={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},l=0
t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]}
var u=0
t.parseStream.on("data",(function(e){var t,c;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed
if(!("allowed"in e)){this.trigger("info",{message:"defaulting allowCache to YES"})
this.manifest.allowCache=!0}},byterange:function(){var t={}
if("length"in e){s.byterange=t
t.length=e.length
"offset"in e||(e.offset=u)}if("offset"in e){s.byterange=t
t.offset=e.offset}u=t.offset+t.length},endlist:function(){this.manifest.endList=!0},inf:function(){if(!("mediaSequence"in this.manifest)){this.manifest.mediaSequence=0
this.trigger("info",{message:"defaulting media sequence to zero"})}if(!("discontinuitySequence"in this.manifest)){this.manifest.discontinuitySequence=0
this.trigger("info",{message:"defaulting discontinuity sequence to zero"})}e.duration>0&&(s.duration=e.duration)
if(0===e.duration){s.duration=.01
this.trigger("info",{message:"updating zero segment duration to a small value"})}this.manifest.segments=a},key:function(){if(e.attributes)if("NONE"!==e.attributes.METHOD)if(e.attributes.URI)if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"!==e.attributes.KEYFORMAT){e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"})
n={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI}
void 0!==e.attributes.IV&&(n.iv=e.attributes.IV)}else{if(-1===["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(e.attributes.METHOD)){this.trigger("warn",{message:"invalid key method provided for Widevine"})
return}"SAMPLE-AES-CENC"===e.attributes.METHOD&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"})
if("data:text/plain;base64,"!==e.attributes.URI.substring(0,23)){this.trigger("warn",{message:"invalid key URI provided for Widevine"})
return}if(!e.attributes.KEYID||"0x"!==e.attributes.KEYID.substring(0,2)){this.trigger("warn",{message:"invalid key ID provided for Widevine"})
return}this.manifest.contentProtection={"com.widevine.alpha":{attributes:{schemeIdUri:e.attributes.KEYFORMAT,keyId:e.attributes.KEYID.substring(2)},pssh:Ve(e.attributes.URI.split(",")[1])}}}else this.trigger("warn",{message:"ignoring key declaration without URI"})
else n=null
else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){if(isFinite(e.number)){this.manifest.discontinuitySequence=e.number
l=e.number}else this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){i={}
e.uri&&(i.uri=e.uri)
e.byterange&&(i.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=a
this.manifest.mediaGroups=this.manifest.mediaGroups||o
if(e.attributes){s.attributes||(s.attributes={})
N(s.attributes,e.attributes)}else this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){this.manifest.mediaGroups=this.manifest.mediaGroups||o
if(e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var i=this.manifest.mediaGroups[e.attributes.TYPE]
i[e.attributes["GROUP-ID"]]=i[e.attributes["GROUP-ID"]]||{}
t=i[e.attributes["GROUP-ID"]];(c={default:/yes/i.test(e.attributes.DEFAULT)}).default?c.autoselect=!0:c.autoselect=/yes/i.test(e.attributes.AUTOSELECT)
e.attributes.LANGUAGE&&(c.language=e.attributes.LANGUAGE)
e.attributes.URI&&(c.uri=e.attributes.URI)
e.attributes["INSTREAM-ID"]&&(c.instreamId=e.attributes["INSTREAM-ID"])
e.attributes.CHARACTERISTICS&&(c.characteristics=e.attributes.CHARACTERISTICS)
e.attributes.FORCED&&(c.forced=/yes/i.test(e.attributes.FORCED))
t[e.attributes.NAME]=c}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){l+=1
s.discontinuity=!0
this.manifest.discontinuityStarts.push(a.length)},"program-date-time":function(){if(void 0===this.manifest.dateTimeString){this.manifest.dateTimeString=e.dateTimeString
this.manifest.dateTimeObject=e.dateTimeObject}s.dateTimeString=e.dateTimeString
s.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){s.cueOut=e.data},"cue-out-cont":function(){s.cueOutCont=e.data},"cue-in":function(){s.cueIn=e.data}}[e.tagType]||function(){}).call(r)},uri:function(){s.uri=e.uri
a.push(s)
if(this.manifest.targetDuration&&!("duration"in s)){this.trigger("warn",{message:"defaulting segment duration to the target duration"})
s.duration=this.manifest.targetDuration}n&&(s.key=n)
s.timeline=l
i&&(s.map=i)
s={}},comment:function(){},custom:function(){if(e.segment){s.custom=s.custom||{}
s.custom[e.customType]=e.data}else{this.manifest.custom=this.manifest.custom||{}
this.manifest.custom[e.customType]=e.data}}})[e.type].call(r)}))
return t}var i=t.prototype
i.push=function(e){this.lineStream.push(e)}
i.end=function(){this.lineStream.push("\n")}
i.addParser=function(e){this.parseStream.addParser(e)}
i.addTagMapper=function(e){this.parseStream.addTagMapper(e)}
return t})(Ue),Ge=r((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})
var i=/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,n=/^application\/dash\+xml/i
t.simpleTypeFromSourceType=function(e){return i.test(e)?"hls":n.test(e)?"dash":"application/vnd.videojs.vhs+json"===e?"vhs-json":null}}))
n(Ge)
var Ke=Ge.simpleTypeFromSourceType,Xe=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,Ye=new RegExp("[\\-\\.0-9"+Xe.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),Qe=new RegExp("^"+Xe.source+Ye.source+"*(?::"+Xe.source+Ye.source+"*)?$"),$e=0,Je=1,Ze=2,et=3,tt=4,it=5,nt=6,rt=7
function at(){}at.prototype={parse:function(e,t,i){var n=this.domBuilder
n.startDocument()
dt(t,t={});((function(e,t,i,n,r){function a(e){var t=e.slice(1,-1)
if(t in i)return i[t]
if("#"===t.charAt(0))return (function(e){if(e>65535){var t=55296+((e-=65536)>>10),i=56320+(1023&e)
return String.fromCharCode(t,i)}return String.fromCharCode(e)})(parseInt(t.substr(1).replace("x","0x")))
r.error("entity not found:"+e)
return e}function s(t){if(t>f){var i=e.substring(f,t).replace(/&#?\w+;/g,a)
d&&o(f)
n.characters(i,0,t-f)
f=t}}function o(t,i){for(;t>=u&&(i=c.exec(e));){l=i.index
u=l+i[0].length
d.lineNumber++}d.columnNumber=t-l+1}var l=0,u=0,c=/.*(?:\r\n?|\n)|.*$/g,d=n.locator,h=[{currentNSMap:t}],p={},f=0
for(;;){try{var m=e.indexOf("<",f)
if(m<0){if(!e.substr(f).match(/^\s*$/)){var g=n.doc,v=g.createTextNode(e.substr(f))
g.appendChild(v)
n.currentElement=v}return}m>f&&s(m)
switch(e.charAt(m+1)){case"/":var y=e.indexOf(">",m+3),_=e.substring(m+2,y),b=h.pop()
if(y<0){_=e.substring(m+2).replace(/[\s<].*/,"")
r.error("end tag name: "+_+" is not complete:"+b.tagName)
y=m+1+_.length}else if(_.match(/\s</)){_=_.replace(/[\s<].*/,"")
r.error("end tag name: "+_+" maybe not complete")
y=m+1+_.length}var T=b.localNSMap,S=b.tagName==_,k=S||b.tagName&&b.tagName.toLowerCase()==_.toLowerCase()
if(k){n.endElement(b.uri,b.localName,_)
if(T)for(var C in T)n.endPrefixMapping(C)
S||r.fatalError("end tag name: "+_+" is not match the current start tagName:"+b.tagName)}else h.push(b)
y++
break
case"?":d&&o(m)
y=pt(e,m,n)
break
case"!":d&&o(m)
y=ht(e,m,n,r)
break
default:d&&o(m)
var E=new ft,w=h[h.length-1].currentNSMap,y=ot(e,m,E,w,a,r),I=E.length
if(!E.closed&&ct(e,y,E.tagName,p)){E.closed=!0
i.nbsp||r.warning("unclosed xml attribute")}if(d&&I){for(var P=st(d,{}),A=0;A<I;A++){var x=E[A]
o(x.offset)
x.locator=st(d,{})}n.locator=P
lt(E,n,w)&&h.push(E)
n.locator=d}else lt(E,n,w)&&h.push(E)
"http://www.w3.org/1999/xhtml"!==E.uri||E.closed?y++:y=ut(e,y,E.tagName,a,n)}}catch(O){r.error("element parse error: "+O)
y=-1}y>f?f=y:s(Math.max(m,f)+1)}}))(e,t,i,n,this.errorHandler)
n.endDocument()}}
function st(e,t){t.lineNumber=e.lineNumber
t.columnNumber=e.columnNumber
return t}function ot(e,t,i,n,r,a){for(var s,o=++t,l=$e;;){var u=e.charAt(o)
switch(u){case"=":if(l===Je){s=e.slice(t,o)
l=et}else{if(l!==Ze)throw new Error("attribute equal must after attrName")
l=et}break
case"'":case'"':if(l===et||l===Je){if(l===Je){a.warning('attribute value must after "="')
s=e.slice(t,o)}t=o+1
if(!((o=e.indexOf(u,t))>0))throw new Error("attribute value no end '"+u+"' match")
c=e.slice(t,o).replace(/&#?\w+;/g,r)
i.add(s,c,t-1)
l=it}else{if(l!=tt)throw new Error('attribute value must after "="')
c=e.slice(t,o).replace(/&#?\w+;/g,r)
i.add(s,c,t)
a.warning('attribute "'+s+'" missed start quot('+u+")!!")
t=o+1
l=it}break
case"/":switch(l){case $e:i.setTagName(e.slice(t,o))
case it:case nt:case rt:l=rt
i.closed=!0
case tt:case Je:case Ze:break
default:throw new Error("attribute invalid close char('/')")}break
case"":a.error("unexpected end of input")
l==$e&&i.setTagName(e.slice(t,o))
return o
case">":switch(l){case $e:i.setTagName(e.slice(t,o))
case it:case nt:case rt:break
case tt:case Je:if("/"===(c=e.slice(t,o)).slice(-1)){i.closed=!0
c=c.slice(0,-1)}case Ze:l===Ze&&(c=s)
if(l==tt){a.warning('attribute "'+c+'" missed quot(")!!')
i.add(s,c.replace(/&#?\w+;/g,r),t)}else{"http://www.w3.org/1999/xhtml"===n[""]&&c.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+c+'" missed value!! "'+c+'" instead!!')
i.add(c,c,t)}break
case et:throw new Error("attribute value missed!!")}return o
case"??":u=" "
default:if(u<=" ")switch(l){case $e:i.setTagName(e.slice(t,o))
l=nt
break
case Je:s=e.slice(t,o)
l=Ze
break
case tt:var c=e.slice(t,o).replace(/&#?\w+;/g,r)
a.warning('attribute "'+c+'" missed quot(")!!')
i.add(s,c,t)
case it:l=nt}else switch(l){case Ze:i.tagName
"http://www.w3.org/1999/xhtml"===n[""]&&s.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute "'+s+'" missed value!! "'+s+'" instead2!!')
i.add(s,s,t)
t=o
l=Je
break
case it:a.warning('attribute space is required"'+s+'"!!')
case nt:l=Je
t=o
break
case et:l=tt
t=o
break
case rt:throw new Error("elements closed character '/' and '>' must be connected to")}}o++}}function lt(e,t,i){for(var n=e.tagName,r=null,a=e.length;a--;){var s=e[a],o=s.qName,l=s.value
if((h=o.indexOf(":"))>0)var u=s.prefix=o.slice(0,h),c=o.slice(h+1),d="xmlns"===u&&c
else{c=o
u=null
d="xmlns"===o&&""}s.localName=c
if(!1!==d){if(null==r){r={}
dt(i,i={})}i[d]=r[d]=l
s.uri="http://www.w3.org/2000/xmlns/"
t.startPrefixMapping(d,l)}}for(a=e.length;a--;){if(u=(s=e[a]).prefix){"xml"===u&&(s.uri="http://www.w3.org/XML/1998/namespace")
"xmlns"!==u&&(s.uri=i[u||""])}}var h
if((h=n.indexOf(":"))>0){u=e.prefix=n.slice(0,h)
c=e.localName=n.slice(h+1)}else{u=null
c=e.localName=n}var p=e.uri=i[u||""]
t.startElement(p,c,n,e)
if(!e.closed){e.currentNSMap=i
e.localNSMap=r
return!0}t.endElement(p,c,n)
if(r)for(u in r)t.endPrefixMapping(u)}function ut(e,t,i,n,r){if(/^(?:script|textarea)$/i.test(i)){var a=e.indexOf("</"+i+">",t),s=e.substring(t+1,a)
if(/[&<]/.test(s)){if(/^script$/i.test(i)){r.characters(s,0,s.length)
return a}s=s.replace(/&#?\w+;/g,n)
r.characters(s,0,s.length)
return a}}return t+1}function ct(e,t,i,n){var r=n[i]
if(null==r){(r=e.lastIndexOf("</"+i+">"))<t&&(r=e.lastIndexOf("</"+i))
n[i]=r}return r<t}function dt(e,t){for(var i in e)t[i]=e[i]}function ht(e,t,i,n){switch(e.charAt(t+2)){case"-":if("-"===e.charAt(t+3)){if((r=e.indexOf("--\x3e",t+4))>t){i.comment(e,t+4,r-t-4)
return r+3}n.error("Unclosed comment")
return-1}return-1
default:if("CDATA["==e.substr(t+3,6)){var r=e.indexOf("]]>",t+9)
i.startCDATA()
i.characters(e,t+9,r-t-9)
i.endCDATA()
return r+3}var a=(function(e,t){var i,n=[],r=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g
r.lastIndex=t
r.exec(e)
for(;i=r.exec(e);){n.push(i)
if(i[1])return n}})(e,t),s=a.length
if(s>1&&/!doctype/i.test(a[0][0])){var o=a[1][0],l=s>3&&/^public$/i.test(a[2][0])&&a[3][0],u=s>4&&a[4][0],c=a[s-1]
i.startDTD(o,l&&l.replace(/^(['"])(.*?)\1$/,"$2"),u&&u.replace(/^(['"])(.*?)\1$/,"$2"))
i.endDTD()
return c.index+c[0].length}}return-1}function pt(e,t,i){var n=e.indexOf("?>",t)
if(n){var r=e.substring(t,n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)
if(r){r[0].length
i.processingInstruction(r[1],r[2])
return n+2}return-1}return-1}function ft(e){}ft.prototype={setTagName:function(e){if(!Qe.test(e))throw new Error("invalid tagName:"+e)
this.tagName=e},add:function(e,t,i){if(!Qe.test(e))throw new Error("invalid attribute:"+e)
this[this.length++]={qName:e,value:t,offset:i}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}}
function mt(e,t){e.__proto__=t
return e}mt({},mt.prototype)instanceof mt||(mt=function(e,t){function i(){}i.prototype=t
i=new i
for(t in e)i[t]=e[t]
return i})
var gt={XMLReader:at}
function vt(e,t){for(var i in e)t[i]=e[i]}function yt(e,t){var i=e.prototype
if(Object.create){var n=Object.create(t.prototype)
i.__proto__=n}if(!(i instanceof t)){function r(){}r.prototype=t.prototype
vt(i,r=new r)
e.prototype=i=r}if(i.constructor!=e){"function"!=typeof e&&console.error("unknow Class:"+e)
i.constructor=e}}var _t="http://www.w3.org/1999/xhtml",bt={},Tt=bt.ELEMENT_NODE=1,St=bt.ATTRIBUTE_NODE=2,kt=bt.TEXT_NODE=3,Ct=bt.CDATA_SECTION_NODE=4,Et=bt.ENTITY_REFERENCE_NODE=5,wt=bt.ENTITY_NODE=6,It=bt.PROCESSING_INSTRUCTION_NODE=7,Pt=bt.COMMENT_NODE=8,At=bt.DOCUMENT_NODE=9,xt=bt.DOCUMENT_TYPE_NODE=10,Ot=bt.DOCUMENT_FRAGMENT_NODE=11,Lt=bt.NOTATION_NODE=12,Dt={},Rt={},Nt=(Dt.INDEX_SIZE_ERR=(Rt[1]="Index size error",1),Dt.DOMSTRING_SIZE_ERR=(Rt[2]="DOMString size error",2),Dt.HIERARCHY_REQUEST_ERR=(Rt[3]="Hierarchy request error",3)),Mt=(Dt.WRONG_DOCUMENT_ERR=(Rt[4]="Wrong document",4),Dt.INVALID_CHARACTER_ERR=(Rt[5]="Invalid character",5),Dt.NO_DATA_ALLOWED_ERR=(Rt[6]="No data allowed",6),Dt.NO_MODIFICATION_ALLOWED_ERR=(Rt[7]="No modification allowed",7),Dt.NOT_FOUND_ERR=(Rt[8]="Not found",8)),Ut=(Dt.NOT_SUPPORTED_ERR=(Rt[9]="Not supported",9),Dt.INUSE_ATTRIBUTE_ERR=(Rt[10]="Attribute in use",10))
Dt.INVALID_STATE_ERR=(Rt[11]="Invalid state",11),Dt.SYNTAX_ERR=(Rt[12]="Syntax error",12),Dt.INVALID_MODIFICATION_ERR=(Rt[13]="Invalid modification",13),Dt.NAMESPACE_ERR=(Rt[14]="Invalid namespace",14),Dt.INVALID_ACCESS_ERR=(Rt[15]="Invalid access",15)
function Bt(e,t){if(t instanceof Error)var i=t
else{i=this
Error.call(this,Rt[e])
this.message=Rt[e]
Error.captureStackTrace&&Error.captureStackTrace(this,Bt)}i.code=e
t&&(this.message=this.message+": "+t)
return i}Bt.prototype=Error.prototype
vt(Dt,Bt)
function jt(){}jt.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var i=[],n=0;n<this.length;n++)gi(this[n],i,e,t)
return i.join("")}}
function Ft(e,t){this._node=e
this._refresh=t
Vt(this)}function Vt(e){var t=e._node._inc||e._node.ownerDocument._inc
if(e._inc!=t){var i=e._refresh(e._node)
vi(e,"length",i.length)
vt(i,e)
e._inc=t}}Ft.prototype.item=function(e){Vt(this)
return this[e]}
yt(Ft,jt)
function Ht(){}function qt(e,t){for(var i=e.length;i--;)if(e[i]===t)return i}function Wt(e,t,i,n){n?t[qt(t,n)]=i:t[t.length++]=i
if(e){i.ownerElement=e
var r=e.ownerDocument
if(r){n&&$t(r,e,n);((function(e,t,i){e&&e._inc++
"http://www.w3.org/2000/xmlns/"==i.namespaceURI&&(t._nsMap[i.prefix?i.localName:""]=i.value)}))(r,e,i)}}}function zt(e,t,i){var n=qt(t,i)
if(!(n>=0))throw Bt(Mt,new Error(e.tagName+"@"+i))
for(var r=t.length-1;n<r;)t[n]=t[++n]
t.length=r
if(e){var a=e.ownerDocument
if(a){$t(a,e,i)
i.ownerElement=null}}}Ht.prototype={length:0,item:jt.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var i=this[t]
if(i.nodeName==e)return i}},setNamedItem:function(e){var t=e.ownerElement
if(t&&t!=this._ownerElement)throw new Bt(Ut)
var i=this.getNamedItem(e.nodeName)
Wt(this._ownerElement,this,e,i)
return i},setNamedItemNS:function(e){var t,i=e.ownerElement
if(i&&i!=this._ownerElement)throw new Bt(Ut)
t=this.getNamedItemNS(e.namespaceURI,e.localName)
Wt(this._ownerElement,this,e,t)
return t},removeNamedItem:function(e){var t=this.getNamedItem(e)
zt(this._ownerElement,this,t)
return t},removeNamedItemNS:function(e,t){var i=this.getNamedItemNS(e,t)
zt(this._ownerElement,this,i)
return i},getNamedItemNS:function(e,t){for(var i=this.length;i--;){var n=this[i]
if(n.localName==t&&n.namespaceURI==e)return n}return null}}
function Gt(e){this._features={}
if(e)for(var t in e)this._features=e[t]}Gt.prototype={hasFeature:function(e,t){var i=this._features[e.toLowerCase()]
return!(!i||t&&!(t in i))},createDocument:function(e,t,i){var n=new Qt
n.implementation=this
n.childNodes=new jt
n.doctype=i
i&&n.appendChild(i)
if(t){var r=n.createElementNS(e,t)
n.appendChild(r)}return n},createDocumentType:function(e,t,i){var n=new oi
n.name=e
n.nodeName=e
n.publicId=t
n.systemId=i
return n}}
function Kt(){}Kt.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return ei(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t)
t&&this.removeChild(t)},removeChild:function(e){return Zt(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return (function e(t,i,n){var r=new i.constructor
for(var a in i){var s=i[a]
"object"!=typeof s&&s!=r[a]&&(r[a]=s)}i.childNodes&&(r.childNodes=new jt)
r.ownerDocument=t
switch(r.nodeType){case Tt:var o=i.attributes,l=r.attributes=new Ht,u=o.length
l._ownerElement=r
for(var c=0;c<u;c++)r.setAttributeNode(e(t,o.item(c),!0))
break
case St:n=!0}if(n)for(var d=i.firstChild;d;){r.appendChild(e(t,d,n))
d=d.nextSibling}return r})(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling
if(t&&t.nodeType==kt&&e.nodeType==kt){this.removeChild(t)
e.appendData(t.data)}else{e.normalize()
e=t}}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var i=t._nsMap
if(i)for(var n in i)if(i[n]==e)return n
t=t.nodeType==St?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var i=t._nsMap
if(i&&e in i)return i[e]
t=t.nodeType==St?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}}
function Xt(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}vt(bt,Kt)
vt(bt,Kt.prototype)
function Yt(e,t){if(t(e))return!0
if(e=e.firstChild)do{if(Yt(e,t))return!0}while(e=e.nextSibling)}function Qt(){}function $t(e,t,i,n){e&&e._inc++
"http://www.w3.org/2000/xmlns/"==i.namespaceURI&&delete t._nsMap[i.prefix?i.localName:""]}function Jt(e,t,i){if(e&&e._inc){e._inc++
var n=t.childNodes
if(i)n[n.length++]=i
else{for(var r=t.firstChild,a=0;r;){n[a++]=r
r=r.nextSibling}n.length=a}}}function Zt(e,t){var i=t.previousSibling,n=t.nextSibling
i?i.nextSibling=n:e.firstChild=n
n?n.previousSibling=i:e.lastChild=i
Jt(e.ownerDocument,e)
return t}function ei(e,t,i){var n=t.parentNode
n&&n.removeChild(t)
if(t.nodeType===Ot){var r=t.firstChild
if(null==r)return t
var a=t.lastChild}else r=a=t
var s=i?i.previousSibling:e.lastChild
r.previousSibling=s
a.nextSibling=i
s?s.nextSibling=r:e.firstChild=r
null==i?e.lastChild=a:i.previousSibling=a
do{r.parentNode=e}while(r!==a&&(r=r.nextSibling))
Jt(e.ownerDocument||e,e)
t.nodeType==Ot&&(t.firstChild=t.lastChild=null)
return t}Qt.prototype={nodeName:"#document",nodeType:At,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==Ot){for(var i=e.firstChild;i;){var n=i.nextSibling
this.insertBefore(i,t)
i=n}return e}null==this.documentElement&&e.nodeType==Tt&&(this.documentElement=e)
return ei(this,e,t),e.ownerDocument=this,e},removeChild:function(e){this.documentElement==e&&(this.documentElement=null)
return Zt(this,e)},importNode:function(e,t){return (function e(t,i,n){var r
switch(i.nodeType){case Tt:(r=i.cloneNode(!1)).ownerDocument=t
case Ot:break
case St:n=!0}r||(r=i.cloneNode(!1))
r.ownerDocument=t
r.parentNode=null
if(n)for(var a=i.firstChild;a;){r.appendChild(e(t,a,n))
a=a.nextSibling}return r})(this,e,t)},getElementById:function(e){var t=null
Yt(this.documentElement,(function(i){if(i.nodeType==Tt&&i.getAttribute("id")==e){t=i
return!0}}))
return t},createElement:function(e){var t=new ti
t.ownerDocument=this
t.nodeName=e
t.tagName=e
t.childNodes=new jt;(t.attributes=new Ht)._ownerElement=t
return t},createDocumentFragment:function(){var e=new di
e.ownerDocument=this
e.childNodes=new jt
return e},createTextNode:function(e){var t=new ri
t.ownerDocument=this
t.appendData(e)
return t},createComment:function(e){var t=new ai
t.ownerDocument=this
t.appendData(e)
return t},createCDATASection:function(e){var t=new si
t.ownerDocument=this
t.appendData(e)
return t},createProcessingInstruction:function(e,t){var i=new hi
i.ownerDocument=this
i.tagName=i.target=e
i.nodeValue=i.data=t
return i},createAttribute:function(e){var t=new ii
t.ownerDocument=this
t.name=e
t.nodeName=e
t.localName=e
t.specified=!0
return t},createEntityReference:function(e){var t=new ci
t.ownerDocument=this
t.nodeName=e
return t},createElementNS:function(e,t){var i=new ti,n=t.split(":"),r=i.attributes=new Ht
i.childNodes=new jt
i.ownerDocument=this
i.nodeName=t
i.tagName=t
i.namespaceURI=e
if(2==n.length){i.prefix=n[0]
i.localName=n[1]}else i.localName=t
r._ownerElement=i
return i},createAttributeNS:function(e,t){var i=new ii,n=t.split(":")
i.ownerDocument=this
i.nodeName=t
i.name=t
i.namespaceURI=e
i.specified=!0
if(2==n.length){i.prefix=n[0]
i.localName=n[1]}else i.localName=t
return i}}
yt(Qt,Kt)
function ti(){this._nsMap={}}ti.prototype={nodeType:Tt,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e)
return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var i=this.ownerDocument.createAttribute(e)
i.value=i.nodeValue=""+t
this.setAttributeNode(i)},removeAttribute:function(e){var t=this.getAttributeNode(e)
t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===Ot?this.insertBefore(e,null):(function(e,t){var i=t.parentNode
if(i){var n=e.lastChild
i.removeChild(t)
n=e.lastChild}n=e.lastChild
t.parentNode=e
t.previousSibling=n
t.nextSibling=null
n?n.nextSibling=t:e.firstChild=t
e.lastChild=t
Jt(e.ownerDocument,e,t)
return t})(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var i=this.getAttributeNodeNS(e,t)
i&&this.removeAttributeNode(i)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var i=this.getAttributeNodeNS(e,t)
return i&&i.value||""},setAttributeNS:function(e,t,i){var n=this.ownerDocument.createAttributeNS(e,t)
n.value=n.nodeValue=""+i
this.setAttributeNode(n)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new Ft(this,function(t){var i=[]
Yt(t,(function(n){n===t||n.nodeType!=Tt||"*"!==e&&n.tagName!=e||i.push(n)}))
return i})},getElementsByTagNameNS:function(e,t){return new Ft(this,function(i){var n=[]
Yt(i,(function(r){r===i||r.nodeType!==Tt||"*"!==e&&r.namespaceURI!==e||"*"!==t&&r.localName!=t||n.push(r)}))
return n})}}
Qt.prototype.getElementsByTagName=ti.prototype.getElementsByTagName
Qt.prototype.getElementsByTagNameNS=ti.prototype.getElementsByTagNameNS
yt(ti,Kt)
function ii(){}ii.prototype.nodeType=St
yt(ii,Kt)
function ni(){}ni.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e
this.nodeValue=this.data=e
this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(Rt[Nt])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,i){i=this.data.substring(0,e)+i+this.data.substring(e+t)
this.nodeValue=this.data=i
this.length=i.length}}
yt(ni,Kt)
function ri(){}ri.prototype={nodeName:"#text",nodeType:kt,splitText:function(e){var t=this.data,i=t.substring(e)
t=t.substring(0,e)
this.data=this.nodeValue=t
this.length=t.length
var n=this.ownerDocument.createTextNode(i)
this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)
return n}}
yt(ri,ni)
function ai(){}ai.prototype={nodeName:"#comment",nodeType:Pt}
yt(ai,ni)
function si(){}si.prototype={nodeName:"#cdata-section",nodeType:Ct}
yt(si,ni)
function oi(){}oi.prototype.nodeType=xt
yt(oi,Kt)
function li(){}li.prototype.nodeType=Lt
yt(li,Kt)
function ui(){}ui.prototype.nodeType=wt
yt(ui,Kt)
function ci(){}ci.prototype.nodeType=Et
yt(ci,Kt)
function di(){}di.prototype.nodeName="#document-fragment"
di.prototype.nodeType=Ot
yt(di,Kt)
function hi(){}hi.prototype.nodeType=It
yt(hi,Kt)
function pi(){}pi.prototype.serializeToString=function(e,t,i){return fi.call(e,t,i)}
Kt.prototype.toString=fi
function fi(e,t){var i=[],n=9==this.nodeType?this.documentElement:this,r=n.prefix,a=n.namespaceURI
if(a&&null==r){if(null==(r=n.lookupPrefix(a)))var s=[{namespace:a,prefix:null}]}gi(this,i,e,t,s)
return i.join("")}function mi(e,t,i){var n=e.prefix||"",r=e.namespaceURI
if(!n&&!r)return!1
if("xml"===n&&"http://www.w3.org/XML/1998/namespace"===r||"http://www.w3.org/2000/xmlns/"==r)return!1
for(var a=i.length;a--;){var s=i[a]
if(s.prefix==n)return s.namespace!=r}return!0}function gi(e,t,i,n,r){if(n){if(!(e=n(e)))return
if("string"==typeof e){t.push(e)
return}}switch(e.nodeType){case Tt:r||(r=[])
r.length
var a=e.attributes,s=a.length,o=e.firstChild,l=e.tagName
i=_t===e.namespaceURI||i
t.push("<",l)
for(var u=0;u<s;u++){"xmlns"==(c=a.item(u)).prefix?r.push({prefix:c.localName,namespace:c.value}):"xmlns"==c.nodeName&&r.push({prefix:"",namespace:c.value})}for(u=0;u<s;u++){var c
if(mi(c=a.item(u),0,r)){var d=c.prefix||"",h=c.namespaceURI,p=d?" xmlns:"+d:" xmlns"
t.push(p,'="',h,'"')
r.push({prefix:d,namespace:h})}gi(c,t,i,n,r)}if(mi(e,0,r)){d=e.prefix||"",h=e.namespaceURI,p=d?" xmlns:"+d:" xmlns"
t.push(p,'="',h,'"')
r.push({prefix:d,namespace:h})}if(o||i&&!/^(?:meta|link|img|br|hr|input)$/i.test(l)){t.push(">")
if(i&&/^script$/i.test(l))for(;o;){o.data?t.push(o.data):gi(o,t,i,n,r)
o=o.nextSibling}else for(;o;){gi(o,t,i,n,r)
o=o.nextSibling}t.push("</",l,">")}else t.push("/>")
return
case At:case Ot:for(o=e.firstChild;o;){gi(o,t,i,n,r)
o=o.nextSibling}return
case St:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,Xt),'"')
case kt:return t.push(e.data.replace(/[<&]/g,Xt))
case Ct:return t.push("<![CDATA[",e.data,"]]>")
case Pt:return t.push("\x3c!--",e.data,"--\x3e")
case xt:var f=e.publicId,m=e.systemId
t.push("<!DOCTYPE ",e.name)
if(f){t.push(' PUBLIC "',f)
m&&"."!=m&&t.push('" "',m)
t.push('">')}else if(m&&"."!=m)t.push(' SYSTEM "',m,'">')
else{var g=e.internalSubset
g&&t.push(" [",g,"]")
t.push(">")}return
case It:return t.push("<?",e.target," ",e.data,"?>")
case Et:return t.push("&",e.nodeName,";")
default:t.push("??",e.nodeName)}}function vi(e,t,i){e[t]=i}try{if(Object.defineProperty){Object.defineProperty(Ft.prototype,"length",{get:function(){Vt(this)
return this.$$length}})
Object.defineProperty(Kt.prototype,"textContent",{get:function(){return (function e(t){switch(t.nodeType){case Tt:case Ot:var i=[]
t=t.firstChild
for(;t;){7!==t.nodeType&&8!==t.nodeType&&i.push(e(t))
t=t.nextSibling}return i.join("")
default:return t.nodeValue}})(this)},set:function(e){switch(this.nodeType){case Tt:case Ot:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e))
break
default:this.data=e
this.value=e
this.nodeValue=e}}})
vi=function(e,t,i){e["$$"+t]=i}}}catch(Kg){}var yi={DOMImplementation:Gt,XMLSerializer:pi},_i=r((function(e,t){function i(e){this.options=e||{locator:{}}}i.prototype.parseFromString=function(e,t){var i=this.options,r=new l,s=i.domBuilder||new n,o=i.errorHandler,u=i.locator,c=i.xmlns||{},d={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"}
u&&s.setDocumentLocator(u)
r.errorHandler=(function(e,t,i){if(!e){if(t instanceof n)return t
e=t}var r={},s=e instanceof Function
i=i||{}
function o(t){var n=e[t]
!n&&s&&(n=2==e.length?function(i){e(t,i)}:e)
r[t]=n&&function(e){n("[xmldom "+t+"]\t"+e+a(i))}||function(){}}o("warning")
o("error")
o("fatalError")
return r})(o,s,u)
r.domBuilder=i.domBuilder||s
if(/\/x?html?$/.test(t)){d.nbsp="??"
d.copy="??"
c[""]="http://www.w3.org/1999/xhtml"}c.xml=c.xml||"http://www.w3.org/XML/1998/namespace"
e?r.parse(e,c,d):r.errorHandler.error("invalid doc source")
return s.doc}
function n(){this.cdata=!1}function r(e,t){t.lineNumber=e.lineNumber
t.columnNumber=e.columnNumber}n.prototype={startDocument:function(){this.doc=(new u).createDocument(null,null,null)
this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,i,n){var a=this.doc,s=a.createElementNS(e,i||t),l=n.length
o(this,s)
this.currentElement=s
this.locator&&r(this.locator,s)
for(var u=0;u<l;u++){e=n.getURI(u)
var c=n.getValue(u),d=(i=n.getQName(u),a.createAttributeNS(e,i))
this.locator&&r(n.getLocator(u),d)
d.value=d.nodeValue=c
s.setAttributeNode(d)}},endElement:function(e,t,i){var n=this.currentElement
n.tagName
this.currentElement=n.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var i=this.doc.createProcessingInstruction(e,t)
this.locator&&r(this.locator,i)
o(this,i)},ignorableWhitespace:function(e,t,i){},characters:function(e,t,i){if(e=s.apply(this,arguments)){if(this.cdata)var n=this.doc.createCDATASection(e)
else n=this.doc.createTextNode(e)
this.currentElement?this.currentElement.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n)
this.locator&&r(this.locator,n)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,i){e=s.apply(this,arguments)
var n=this.doc.createComment(e)
this.locator&&r(this.locator,n)
o(this,n)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,i){var n=this.doc.implementation
if(n&&n.createDocumentType){var a=n.createDocumentType(e,t,i)
this.locator&&r(this.locator,a)
o(this,a)}},warning:function(e){console.warn("[xmldom warning]\t"+e,a(this.locator))},error:function(e){console.error("[xmldom error]\t"+e,a(this.locator))},fatalError:function(e){console.error("[xmldom fatalError]\t"+e,a(this.locator))
throw e}}
function a(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function s(e,t,i){return"string"==typeof e?e.substr(t,i):e.length>=t+i||t?new java.lang.String(e,t,i)+"":e}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){n.prototype[e]=function(){return null}}))
function o(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}var l=gt.XMLReader,u=t.DOMImplementation=yi.DOMImplementation
t.XMLSerializer=yi.XMLSerializer
t.DOMParser=i})),bi=(_i.DOMImplementation,_i.XMLSerializer,_i.DOMParser),Ti=function(e){return!!e&&"object"==typeof e},Si=function e(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
return i.reduce((function(t,i){Object.keys(i).forEach((function(n){Array.isArray(t[n])&&Array.isArray(i[n])?t[n]=t[n].concat(i[n]):Ti(t[n])&&Ti(i[n])?t[n]=e(t[n],i[n]):t[n]=i[n]}))
return t}),{})},ki=function(e){return e.reduce((function(e,t){return e.concat(t)}),[])},Ci=function(e){if(!e.length)return[]
for(var t=[],i=0;i<e.length;i++)t.push(e[i])
return t},Ei="INVALID_NUMBER_OF_PERIOD",wi="DASH_EMPTY_MANIFEST",Ii="DASH_INVALID_XML",Pi="NO_BASE_URL",Ai="SEGMENT_TIME_UNSPECIFIED",xi="UNSUPPORTED_UTC_TIMING_SCHEME",Oi=function(e){var t=e.baseUrl,i=void 0===t?"":t,n=e.source,r=void 0===n?"":n,a=e.range,s=void 0===a?"":a,o=e.indexRange,l=void 0===o?"":o,u={uri:r,resolvedUri:Me(i||"",r)}
if(s||l){var c=(s||l).split("-"),d=parseInt(c[0],10),h=parseInt(c[1],10)
u.byterange={length:h-d+1,offset:d}}return u},Li={static:function(e){var t=e.duration,i=e.timescale,n=void 0===i?1:i,r=e.sourceDuration
return{start:0,end:Math.ceil(r/(t/n))}},dynamic:function(e){var t=e.NOW,i=e.clientOffset,n=e.availabilityStartTime,r=e.timescale,a=void 0===r?1:r,s=e.duration,o=e.start,l=void 0===o?0:o,u=e.minimumUpdatePeriod,c=void 0===u?0:u,d=e.timeShiftBufferDepth,h=void 0===d?1/0:d,p=(t+i)/1e3,f=n+l,m=p+c-f,g=Math.ceil(m*a/s),v=Math.floor((p-f-h)*a/s),y=Math.floor((p-f)*a/s)
return{start:Math.max(0,v),end:Math.min(g,y)}}},Di=function(e){var t=e.type,i=void 0===t?"static":t,n=e.duration,r=e.timescale,a=void 0===r?1:r,s=e.sourceDuration,o=Li[i](e),l=(function(e,t){for(var i=[],n=e;n<t;n++)i.push(n)
return i})(o.start,o.end).map((function(e){return function(t,i){var n=e.duration,r=e.timescale,a=void 0===r?1:r,s=e.periodIndex,o=e.startNumber
return{number:(void 0===o?1:o)+t,duration:n/a,timeline:s,time:i*n}}})(e))
if("static"===i){var u=l.length-1
l[u].duration=s-n/a*u}return l},Ri=function(e){var t=e.baseUrl,i=e.initialization,n=void 0===i?{}:i,r=e.sourceDuration,a=e.indexRange,s=void 0===a?"":a,o=e.duration
if(!t)throw new Error(Pi)
var l=Oi({baseUrl:t,source:n.sourceURL,range:n.range}),u=Oi({baseUrl:t,source:t,indexRange:s})
u.map=l
if(o){var c=Di(e)
if(c.length){u.duration=c[0].duration
u.timeline=c[0].timeline}}else if(r){u.duration=r
u.timeline=0}u.number=0
return[u]},Ni=function(e,t,i){for(var n=e.sidx.map?e.sidx.map:null,r=e.sidx.duration,a=e.timeline||0,s=e.sidx.byterange,o=s.offset+s.length,l=t.timescale,u=t.references.filter((function(e){return 1!==e.referenceType})),c=[],d=o+t.firstOffset,h=0;h<u.length;h++){var p=t.references[h],f=p.referencedSize,m=p.subsegmentDuration,g=Ri({baseUrl:i,timescale:l,timeline:a,periodIndex:a,duration:m,sourceDuration:r,indexRange:d+"-"+(d+f-1)})[0]
n&&(g.map=n)
c.push(g)
d+=f}e.segments=c
return e},Mi=function(e){var t
return(t=e.reduce((function(e,t){var i=t.attributes.id+(t.attributes.lang||"")
if(e[i]){var n
t.segments[0]&&(t.segments[0].discontinuity=!0);(n=e[i].segments).push.apply(n,t.segments)
t.attributes.contentProtection&&(e[i].attributes.contentProtection=t.attributes.contentProtection)}else e[i]=t
return e}),{}),Object.keys(t).map((function(e){return t[e]}))).map((function(e){e.discontinuityStarts=(t=e.segments,i="discontinuity",t.reduce((function(e,t,n){t[i]&&e.push(n)
return e}),[]))
var t,i
return e}))},Ui=function(e,t){void 0===t&&(t={})
if(!Object.keys(t).length)return e
for(var i in e){var n=e[i]
if(n.sidx){var r=n.sidx.uri+"-"+(s=n.sidx.byterange,o=void 0,o=s.offset+s.length-1,s.offset+"-"+o),a=t[r]&&t[r].sidx
n.sidx&&a&&Ni(n,a,n.sidx.resolvedUri)}}var s,o
return e},Bi=function(e){var t,i=e.attributes,n=e.segments,r=e.sidx,a={attributes:(t={NAME:i.id,BANDWIDTH:i.bandwidth,CODECS:i.codecs},t["PROGRAM-ID"]=1,t),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}
i.contentProtection&&(a.contentProtection=i.contentProtection)
r&&(a.sidx=r)
return a},ji=function(e){var t,i=e.attributes,n=e.segments
if(void 0===n){n=[{uri:i.baseUrl,timeline:i.periodIndex,resolvedUri:i.baseUrl||"",duration:i.sourceDuration,number:0}]
i.duration=i.sourceDuration}var r=((t={NAME:i.id,BANDWIDTH:i.bandwidth})["PROGRAM-ID"]=1,t)
i.codecs&&(r.CODECS=i.codecs)
return{attributes:r,uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:i.baseUrl||"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}},Fi=function(e){var t,i=e.attributes,n=e.segments,r=e.sidx,a={attributes:(t={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},t["PROGRAM-ID"]=1,t),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:n,mediaSequence:n.length?n[0].number:1}
i.contentProtection&&(a.contentProtection=i.contentProtection)
r&&(a.sidx=r)
return a},Vi=function(e,t,i){var n
void 0===i&&(i={})
if(!e.length)return{}
var r=e[0].attributes,a=r.sourceDuration,s=r.type,o=void 0===s?"static":s,l=r.suggestedPresentationDelay,u=r.minimumUpdatePeriod,c=Mi(e.filter((function(e){var t=e.attributes
return"video/mp4"===t.mimeType||"video"===t.contentType}))).map(Fi),d=Mi(e.filter((function(e){var t=e.attributes
return"audio/mp4"===t.mimeType||"audio"===t.contentType}))),h=e.filter((function(e){var t=e.attributes
return"text/vtt"===t.mimeType||"text"===t.contentType})),p={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(n={AUDIO:{},VIDEO:{}},n["CLOSED-CAPTIONS"]={},n.SUBTITLES={},n),uri:"",duration:a,playlists:Ui(c,i)}
u>=0&&(p.minimumUpdatePeriod=1e3*u)
t&&(p.locations=t)
"dynamic"===o&&(p.suggestedPresentationDelay=l)
d.length&&(p.mediaGroups.AUDIO.audio=(function(e,t){void 0===t&&(t={})
var i,n=e.reduce((function(e,n){var r=n.attributes.role&&n.attributes.role.value||"",a=n.attributes.lang||"",s="main"
if(a){var o=r?" ("+r+")":""
s=""+n.attributes.lang+o}if(e[s]&&e[s].playlists[0].attributes.BANDWIDTH>n.attributes.bandwidth)return e
e[s]={language:a,autoselect:!0,default:"main"===r,playlists:Ui([Bi(n)],t),uri:""}
void 0===i&&"main"===r&&((i=n).default=!0)
return e}),{})
i||(n[Object.keys(n)[0]].default=!0)
return n})(d,i))
h.length&&(p.mediaGroups.SUBTITLES.subs=(function(e,t){void 0===t&&(t={})
return e.reduce((function(e,i){var n=i.attributes.lang||"text"
if(e[n])return e
e[n]={language:n,default:!1,autoselect:!1,playlists:Ui([ji(i)],t),uri:""}
return e}),{})})(h,i))
return p},Hi=function(e,t,i){var n=e.NOW,r=e.clientOffset,a=e.availabilityStartTime,s=e.timescale,o=void 0===s?1:s,l=e.start,u=void 0===l?0:l,c=e.minimumUpdatePeriod,d=(n+r)/1e3+(void 0===c?0:c)-(a+u)
return Math.ceil((d*o-t)/i)},qi=function(e,t){for(var i=e.type,n=void 0===i?"static":i,r=e.minimumUpdatePeriod,a=void 0===r?0:r,s=e.media,o=void 0===s?"":s,l=e.sourceDuration,u=e.timescale,c=void 0===u?1:u,d=e.startNumber,h=void 0===d?1:d,p=e.periodIndex,f=[],m=-1,g=0;g<t.length;g++){var v=t[g],y=v.d,_=v.r||0,b=v.t||0
m<0&&(m=b)
b&&b>m&&(m=b)
var T=void 0
if(_<0){var S=g+1
T=S===t.length?"dynamic"===n&&a>0&&o.indexOf("$Number$")>0?Hi(e,m,y):(l*c-m)/y:(t[S].t-m)/y}else T=_+1
for(var k=h+f.length+T,C=h+f.length;C<k;){f.push({number:C,duration:y/c,time:m,timeline:p})
m+=y
C++}}return f},Wi=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,zi=function(e,t){return e.replace(Wi,(function(e){return function(t,i,n,r){if("$$"===t)return"$"
if(void 0===e[i])return t
var a=""+e[i]
if("RepresentationID"===i)return a
r=n?parseInt(r,10):1
return a.length>=r?a:""+new Array(r-a.length+1).join("0")+a}})(t))},Gi=function(e,t){var i={RepresentationID:e.id,Bandwidth:e.bandwidth||0},n=e.initialization,r=void 0===n?{sourceURL:"",range:""}:n,a=Oi({baseUrl:e.baseUrl,source:zi(r.sourceURL,i),range:r.range})
return (function(e,t){return e.duration||t?e.duration?Di(e):qi(e,t):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]})(e,t).map((function(t){i.Number=t.number
i.Time=t.time
var n=zi(e.media||"",i)
return{uri:n,timeline:t.timeline,duration:t.duration,resolvedUri:Me(e.baseUrl||"",n),map:a,number:t.number}}))},Ki=function(e,t){var i=e.duration,n=e.segmentUrls,r=void 0===n?[]:n
if(!i&&!t||i&&t)throw new Error(Ai)
var a,s=r.map((function(t){return (function(e,t){var i=e.baseUrl,n=e.initialization,r=void 0===n?{}:n,a=Oi({baseUrl:i,source:r.sourceURL,range:r.range}),s=Oi({baseUrl:i,source:t.media,range:t.mediaRange})
s.map=a
return s})(e,t)}))
i&&(a=Di(e))
t&&(a=qi(e,t))
return a.map((function(e,t){if(s[t]){var i=s[t]
i.timeline=e.timeline
i.duration=e.duration
i.number=e.number
return i}})).filter((function(e){return e}))},Xi=function(e){var t,i,n=e.attributes,r=e.segmentInfo
if(r.template){i=Gi
t=Si(n,r.template)}else if(r.base){i=Ri
t=Si(n,r.base)}else if(r.list){i=Ki
t=Si(n,r.list)}var a={attributes:n}
if(!i)return a
var s=i(t,r.timeline)
if(t.duration){var o=t,l=o.duration,u=o.timescale,c=void 0===u?1:u
t.duration=l/c}else s.length?t.duration=s.reduce((function(e,t){return Math.max(e,Math.ceil(t.duration))}),0):t.duration=0
a.attributes=t
a.segments=s
if(r.base&&t.indexRange){a.sidx=s[0]
a.segments=[]}return a},Yi=function(e,t){return Ci(e.childNodes).filter((function(e){return e.tagName===t}))},Qi=function(e){return e.textContent.trim()},$i=function(e){var t=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e)
if(!t)return 0
var i=t.slice(1),n=i[0],r=i[1],a=i[2],s=i[3],o=i[4],l=i[5]
return 31536e3*parseFloat(n||0)+2592e3*parseFloat(r||0)+86400*parseFloat(a||0)+3600*parseFloat(s||0)+60*parseFloat(o||0)+parseFloat(l||0)},Ji={mediaPresentationDuration:function(e){return $i(e)},availabilityStartTime:function(e){return (function(e){/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e)&&(e+="Z")
return Date.parse(e)})(e)/1e3},minimumUpdatePeriod:function(e){return $i(e)},suggestedPresentationDelay:function(e){return $i(e)},type:function(e){return e},timeShiftBufferDepth:function(e){return $i(e)},start:function(e){return $i(e)},width:function(e){return parseInt(e,10)},height:function(e){return parseInt(e,10)},bandwidth:function(e){return parseInt(e,10)},startNumber:function(e){return parseInt(e,10)},timescale:function(e){return parseInt(e,10)},duration:function(e){var t=parseInt(e,10)
return isNaN(t)?$i(e):t},d:function(e){return parseInt(e,10)},t:function(e){return parseInt(e,10)},r:function(e){return parseInt(e,10)},DEFAULT:function(e){return e}},Zi=function(e){return e&&e.attributes?Ci(e.attributes).reduce((function(e,t){var i=Ji[t.name]||Ji.DEFAULT
e[t.name]=i(t.value)
return e}),{}):{}},en={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},tn=function(e,t){return t.length?ki(e.map((function(e){return t.map((function(t){return Me(e,Qi(t))}))}))):e},nn=function(e){var t=Yi(e,"SegmentTemplate")[0],i=Yi(e,"SegmentList")[0],n=i&&Yi(i,"SegmentURL").map((function(e){return Si({tag:"SegmentURL"},Zi(e))})),r=Yi(e,"SegmentBase")[0],a=i||t,s=a&&Yi(a,"SegmentTimeline")[0],o=i||r||t,l=o&&Yi(o,"Initialization")[0],u=t&&Zi(t)
u&&l?u.initialization=l&&Zi(l):u&&u.initialization&&(u.initialization={sourceURL:u.initialization})
var c={template:u,timeline:s&&Yi(s,"S").map((function(e){return Zi(e)})),list:i&&Si(Zi(i),{segmentUrls:n,initialization:Zi(l)}),base:r&&Si(Zi(r),{initialization:Zi(l)})}
Object.keys(c).forEach((function(e){c[e]||delete c[e]}))
return c},rn=function(e,t,i){return function(n){var r=Zi(n),a=tn(t,Yi(n,"BaseURL")),s=Yi(n,"Role")[0],o={role:Zi(s)},l=Si(e,r,o),u=Yi(n,"ContentProtection").reduce((function(e,t){var i=Zi(t),n=en[i.schemeIdUri]
if(n){e[n]={attributes:i}
var r=Yi(t,"cenc:pssh")[0]
if(r){var a=Qi(r),s=a&&Ve(a)
e[n].pssh=s}}return e}),{})
Object.keys(u).length&&(l=Si(l,{contentProtection:u}))
var c=nn(n),d=Yi(n,"Representation"),h=Si(i,c)
return ki(d.map((function(e,t,i){return function(n){var r=Yi(n,"BaseURL"),a=tn(t,r),s=Si(e,Zi(n)),o=nn(n)
return a.map((function(e){return{segmentInfo:Si(i,o),attributes:Si(s,{baseUrl:e})}}))}})(l,a,h)))}},an=function(e,t){return function(i,n){var r=tn(t,Yi(i,"BaseURL")),a=Zi(i),s=parseInt(a.id,10),o=F.isNaN(s)?n:s,l=Si(e,{periodIndex:o}),u=Yi(i,"AdaptationSet"),c=nn(i)
return ki(u.map(rn(l,r,c)))}},sn=function(e){if(""===e)throw new Error(wi)
var t=(new bi).parseFromString(e,"application/xml"),i=t&&"MPD"===t.documentElement.tagName?t.documentElement:null
if(!i||i&&i.getElementsByTagName("parsererror").length>0)throw new Error(Ii)
return i},on=function(e,t){void 0===t&&(t={})
var i=(function(e,t){void 0===t&&(t={})
var i=t,n=i.manifestUri,r=void 0===n?"":n,a=i.NOW,s=void 0===a?Date.now():a,o=i.clientOffset,l=void 0===o?0:o,u=Yi(e,"Period")
if(!u.length)throw new Error(Ei)
var c=Yi(e,"Location"),d=Zi(e),h=tn([r],Yi(e,"BaseURL"))
d.sourceDuration=d.mediaPresentationDuration||0
d.NOW=s
d.clientOffset=l
c.length&&(d.locations=c.map(Qi))
return{locations:d.locations,representationInfo:ki(u.map(an(d,h)))}})(sn(e),t),n=i.representationInfo.map(Xi)
return Vi(n,i.locations,t.sidxMapping)},ln=function(e){return (function(e){var t=Yi(e,"UTCTiming")[0]
if(!t)return null
var i=Zi(t)
switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD"
break
case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET"
break
case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT"
i.value=Date.parse(i.value)
break
case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(xi)}return i})(sn(e))},un=function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength),n={version:e[0],flags:new Uint8Array(e.subarray(1,4)),references:[],referenceId:i.getUint32(4),timescale:i.getUint32(8),earliestPresentationTime:i.getUint32(12),firstOffset:i.getUint32(16)},r=i.getUint16(22)
for(t=24;r;t+=12,r--)n.references.push({referenceType:(128&e[t])>>>7,referencedSize:2147483647&i.getUint32(t),subsegmentDuration:i.getUint32(t+4),startsWithSap:!!(128&e[t+8]),sapType:(112&e[t+8])>>>4,sapDeltaTime:268435455&i.getUint32(t+8)})
return n},cn=r((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})
var i=function(e){return e instanceof Uint8Array?e:new Uint8Array(e&&e.buffer||e,e&&e.byteOffset||0,e&&e.byteLength||0)},n=function(e){if(!e)return""
e=Array.prototype.slice.call(e)
var t=String.fromCharCode.apply(null,i(e))
try{return decodeURIComponent(escape(t))}catch(Kg){}return t},r=function(e,t){void 0===t&&(t=0)
var n=(e=i(e))[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9]
return(16&e[t+5])>>4?n+20:n+10},a=function e(t,a){void 0===a&&(a=0)
return(t=i(t)).length-a<10||"ID3"!==n(t.subarray(a,a+3))?a:e(t,a+=r(t,a))},s={aac:function(e){var t=a(e)
return e.length>=t+2&&255==(255&e[t])&&224==(224&e[t+1])&&16==(22&e[t+1])},mp3:function(e){var t=a(e)
return e.length>=t+2&&255==(255&e[t])&&224==(224&e[t+1])&&2==(6&e[t+1])},webm:function(e){return e.length>=4&&26==(255&e[0])&&69==(255&e[1])&&223==(255&e[2])&&163==(255&e[3])},mp4:function(e){return e.length>=8&&/^(f|s)typ$/.test(n(e.subarray(4,8)))&&!/^ftyp3g$/.test(n(e.subarray(4,10)))},"3gp":function(e){return e.length>=10&&/^ftyp3g$/.test(n(e.subarray(4,10)))},ts:function(e){if(e.length<189&&e.length>=1)return 71===e[0]
for(var t=0;t+188<e.length&&t<188;){if(71===e[t]&&71===e[t+188])return!0
t+=1}return!1},flac:function(e){return e.length>=4&&/^fLaC$/.test(n(e.subarray(0,4)))},ogg:function(e){return e.length>=4&&/^OggS$/.test(n(e.subarray(0,4)))}},o=Object.keys(s).filter((function(e){return"ts"!==e})).concat("ts")
o.forEach((function(e){var t=s[e]
s[e]=function(e){return t(i(e))}}))
t.detectContainerForBytes=function(e){e=i(e)
for(var t=0;t<o.length;t++){var n=o[t]
if(s[n](e))return n}return""}
t.getId3Offset=a
t.id3Size=r
t.isLikely=s
t.isLikelyFmp4MediaSegment=function(e){e=i(e)
for(var t=0;t<e.length;){var r=(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0
if("moof"===n(e.subarray(t+4,t+8)))return!0
0===r||r+t>e.length?t=e.length:t+=r}return!1}}))
n(cn)
var dn=cn.detectContainerForBytes,hn=cn.getId3Offset,pn=(cn.id3Size,cn.isLikely,cn.isLikelyFmp4MediaSegment),fn=r((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})
var i=function(e){return e instanceof Uint8Array?e:new Uint8Array(e&&e.buffer||e,e&&e.byteOffset||0,e&&e.byteLength||0)}
t.bytesToString=function(e){if(!e)return""
e=Array.prototype.slice.call(e)
var t=String.fromCharCode.apply(null,i(e))
try{return decodeURIComponent(escape(t))}catch(Kg){}return t}
t.concatTypedArrays=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.reduce((function(e,t){return e+=t&&(t.byteLength||t.length)||0}),0),a=new Uint8Array(r),s=0
t.forEach((function(e){e=i(e)
a.set(e,s)
s+=e.byteLength}))
return a}
t.isTypedArray=function(e){return ArrayBuffer.isView(e)}
t.stringToBytes=function(e,t){void 0===t&&(t=!1)
"string"!=typeof e&&e&&"function"==typeof e.toString&&(e=e.toString())
if("string"!=typeof e)return[]
t||(e=unescape(encodeURIComponent(e)))
return e.split("").map((function(e){return 255&e.charCodeAt(0)}))}
t.toUint8=i}))
n(fn)
fn.bytesToString
var mn=fn.concatTypedArrays,gn=(fn.isTypedArray,fn.stringToBytes),vn=fn.toUint8,yn=27,_n=15,bn=21,Tn=function(){this.init=function(){var e={}
this.on=function(t,i){e[t]||(e[t]=[])
e[t]=e[t].concat(i)}
this.off=function(t,i){var n
if(!e[t])return!1
n=e[t].indexOf(i)
e[t]=e[t].slice()
e[t].splice(n,1)
return n>-1}
this.trigger=function(t){var i,n,r,a
if(i=e[t])if(2===arguments.length){r=i.length
for(n=0;n<r;++n)i[n].call(this,arguments[1])}else{a=[]
n=arguments.length
for(n=1;n<arguments.length;++n)a.push(arguments[n])
r=i.length
for(n=0;n<r;++n)i[n].apply(this,a)}}
this.dispose=function(){e={}}}}
Tn.prototype.pipe=function(e){this.on("data",(function(t){e.push(t)}))
this.on("done",(function(t){e.flush(t)}))
this.on("partialdone",(function(t){e.partialFlush(t)}))
this.on("endedtimeline",(function(t){e.endTimeline(t)}))
this.on("reset",(function(t){e.reset(t)}))
return e}
Tn.prototype.push=function(e){this.trigger("data",e)}
Tn.prototype.flush=function(e){this.trigger("done",e)}
Tn.prototype.partialFlush=function(e){this.trigger("partialdone",e)}
Tn.prototype.endTimeline=function(e){this.trigger("endedtimeline",e)}
Tn.prototype.reset=function(e){this.trigger("reset",e)}
var Sn=Tn,kn=function(e,t){var i=1
e>t&&(i=-1)
for(;Math.abs(t-e)>4294967296;)e+=8589934592*i
return e},Cn=function(e){var t,i
Cn.prototype.init.call(this)
this.type_=e||"shared"
this.push=function(e){if("shared"===this.type_||e.type===this.type_){void 0===i&&(i=e.dts)
e.dts=kn(e.dts,i)
e.pts=kn(e.pts,i)
t=e.dts
this.trigger("data",e)}}
this.flush=function(){i=t
this.trigger("done")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline")}
this.discontinuity=function(){i=void 0
t=void 0}
this.reset=function(){this.discontinuity()
this.trigger("reset")}}
Cn.prototype=new Sn
var En,wn,In,Pn,An=function(e){var t=31&e[1]
t<<=8
return t|=e[2]},xn=function(e){return!!(64&e[1])},On=function(e){var t=0;(48&e[3])>>>4>1&&(t+=e[4]+1)
return t},Ln=function(e){switch(e){case 5:return"slice_layer_without_partitioning_rbsp_idr"
case 6:return"sei_rbsp"
case 7:return"seq_parameter_set_rbsp"
case 8:return"pic_parameter_set_rbsp"
case 9:return"access_unit_delimiter_rbsp"
default:return null}},Dn={parseType:function(e,t){var i=An(e)
return 0===i?"pat":i===t?"pmt":t?"pes":null},parsePat:function(e){var t=xn(e),i=4+On(e)
t&&(i+=e[i]+1)
return(31&e[i+10])<<8|e[i+11]},parsePmt:function(e){var t={},i=xn(e),n=4+On(e)
i&&(n+=e[n]+1)
if(1&e[n+5]){var r
r=3+((15&e[n+1])<<8|e[n+2])-4
for(var a=12+((15&e[n+10])<<8|e[n+11]);a<r;){var s=n+a
t[(31&e[s+1])<<8|e[s+2]]=e[s]
a+=5+((15&e[s+3])<<8|e[s+4])}return t}},parsePayloadUnitStartIndicator:xn,parsePesType:function(e,t){switch(t[An(e)]){case yn:return"video"
case _n:return"audio"
case bn:return"timed-metadata"
default:return null}},parsePesTime:function(e){if(!xn(e))return null
var t=4+On(e)
if(t>=e.byteLength)return null
var i,n=null
if(192&(i=e[t+7])){(n={}).pts=(14&e[t+9])<<27|(255&e[t+10])<<20|(254&e[t+11])<<12|(255&e[t+12])<<5|(254&e[t+13])>>>3
n.pts*=4
n.pts+=(6&e[t+13])>>>1
n.dts=n.pts
if(64&i){n.dts=(14&e[t+14])<<27|(255&e[t+15])<<20|(254&e[t+16])<<12|(255&e[t+17])<<5|(254&e[t+18])>>>3
n.dts*=4
n.dts+=(6&e[t+18])>>>1}}return n},videoPacketContainsKeyFrame:function(e){for(var t=4+On(e),i=e.subarray(t),n=0,r=0,a=!1;r<i.byteLength-3;r++)if(1===i[r+2]){n=r+5
break}for(;n<i.byteLength;)switch(i[n]){case 0:if(0!==i[n-1]){n+=2
break}if(0!==i[n-2]){n++
break}r+3!==n-2&&"slice_layer_without_partitioning_rbsp_idr"===Ln(31&i[r+3])&&(a=!0)
do{n++}while(1!==i[n]&&n<i.length)
r=n-2
n+=3
break
case 1:if(0!==i[n-1]||0!==i[n-2]){n+=3
break}"slice_layer_without_partitioning_rbsp_idr"===Ln(31&i[r+3])&&(a=!0)
r=n-2
n+=3
break
default:n+=3}i=i.subarray(r)
n-=r
r=0
i&&i.byteLength>3&&"slice_layer_without_partitioning_rbsp_idr"===Ln(31&i[r+3])&&(a=!0)
return a}},Rn=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],Nn=function(e,t){var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9]
i=i>=0?i:0
return(16&e[t+5])>>4?i+20:i+10},Mn=function(e,t){if(e.length-t<10||e[t]!=="I".charCodeAt(0)||e[t+1]!=="D".charCodeAt(0)||e[t+2]!=="3".charCodeAt(0))return t
t+=Nn(e,t)
return Mn(e,t)},Un=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},Bn={isLikelyAacData:function(e){var t=Mn(e,0)
return e.length>=t+2&&255==(255&e[t])&&240==(240&e[t+1])&&16==(22&e[t+1])},parseId3TagSize:Nn,parseAdtsSize:function(e,t){var i=(224&e[t+5])>>5,n=e[t+4]<<3
return 6144&e[t+3]|n|i},parseType:function(e,t){return e[t]==="I".charCodeAt(0)&&e[t+1]==="D".charCodeAt(0)&&e[t+2]==="3".charCodeAt(0)?"timed-metadata":!0&e[t]&&240==(240&e[t+1])?"audio":null},parseSampleRate:function(e){for(var t=0;t+5<e.length;){if(255===e[t]&&240==(246&e[t+1]))return Rn[(60&e[t+2])>>>2]
t++}return null},parseAacTimestamp:function(e){var t,i,n
t=10
if(64&e[5]){t+=4
t+=Un(e.subarray(10,14))}do{if((i=Un(e.subarray(t+4,t+8)))<1)return null
if("PRIV"===String.fromCharCode(e[t],e[t+1],e[t+2],e[t+3])){n=e.subarray(t+10,t+i+10)
for(var r=0;r<n.byteLength;r++)if(0===n[r]){if("com.apple.streaming.transportStreamTimestamp"===unescape((function(e,t,i){var n,r=""
for(n=t;n<i;n++)r+="%"+("00"+e[n].toString(16)).slice(-2)
return r})(n,0,r))){var a=n.subarray(r+1),s=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2
s*=4
return s+=3&a[7]}break}}t+=10
t+=i}while(t<e.byteLength)
return null}};(function(e,t){return En(Pn(e,t))});(function(e,t){return wn(In(e),t)});(function(e,t,i){return In(i?e:e-t)})
var jn=9e4,Fn=(En=function(e){return 9e4*e},wn=function(e,t){return e*t},In=function(e){return e/9e4},Pn=function(e,t){return e/t},jn),Vn=kn,Hn={}
Hn.ts=Dn
Hn.aac=Bn
var qn,Wn,zn,Gn=jn,Kn=function(e,t,i){for(var n,r,a,s,o=0,l=188,u=!1;l<=e.byteLength;)if(71!==e[o]||71!==e[l]&&l!==e.byteLength){o++
l++}else{n=e.subarray(o,l)
switch(Hn.ts.parseType(n,t.pid)){case"pes":r=Hn.ts.parsePesType(n,t.table)
a=Hn.ts.parsePayloadUnitStartIndicator(n)
if("audio"===r&&a&&(s=Hn.ts.parsePesTime(n))){s.type="audio"
i.audio.push(s)
u=!0}}if(u)break
o+=188
l+=188}o=(l=e.byteLength)-188
u=!1
for(;o>=0;)if(71!==e[o]||71!==e[l]&&l!==e.byteLength){o--
l--}else{n=e.subarray(o,l)
switch(Hn.ts.parseType(n,t.pid)){case"pes":r=Hn.ts.parsePesType(n,t.table)
a=Hn.ts.parsePayloadUnitStartIndicator(n)
if("audio"===r&&a&&(s=Hn.ts.parsePesTime(n))){s.type="audio"
i.audio.push(s)
u=!0}}if(u)break
o-=188
l-=188}},Xn=function(e,t,i){for(var n,r,a,s,o,l,u,c=0,d=188,h=!1,p={data:[],size:0};d<e.byteLength;)if(71!==e[c]||71!==e[d]){c++
d++}else{n=e.subarray(c,d)
switch(Hn.ts.parseType(n,t.pid)){case"pes":r=Hn.ts.parsePesType(n,t.table)
a=Hn.ts.parsePayloadUnitStartIndicator(n)
if("video"===r){if(a&&!h&&(s=Hn.ts.parsePesTime(n))){s.type="video"
i.video.push(s)
h=!0}if(!i.firstKeyFrame){if(a&&0!==p.size){o=new Uint8Array(p.size)
l=0
for(;p.data.length;){u=p.data.shift()
o.set(u,l)
l+=u.byteLength}if(Hn.ts.videoPacketContainsKeyFrame(o)){var f=Hn.ts.parsePesTime(o)
if(f){i.firstKeyFrame=f
i.firstKeyFrame.type="video"}else console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")}p.size=0}p.data.push(n)
p.size+=n.byteLength}}}if(h&&i.firstKeyFrame)break
c+=188
d+=188}c=(d=e.byteLength)-188
h=!1
for(;c>=0;)if(71!==e[c]||71!==e[d]){c--
d--}else{n=e.subarray(c,d)
switch(Hn.ts.parseType(n,t.pid)){case"pes":r=Hn.ts.parsePesType(n,t.table)
a=Hn.ts.parsePayloadUnitStartIndicator(n)
if("video"===r&&a&&(s=Hn.ts.parsePesTime(n))){s.type="video"
i.video.push(s)
h=!0}}if(h)break
c-=188
d-=188}},Yn=function(e){var t={pid:null,table:null},i={};((function(e,t){for(var i,n=0,r=188;r<e.byteLength;)if(71!==e[n]||71!==e[r]){n++
r++}else{i=e.subarray(n,r)
switch(Hn.ts.parseType(i,t.pid)){case"pat":t.pid||(t.pid=Hn.ts.parsePat(i))
break
case"pmt":t.table||(t.table=Hn.ts.parsePmt(i))}if(t.pid&&t.table)return
n+=188
r+=188}}))(e,t)
for(var n in t.table)if(t.table.hasOwnProperty(n)){switch(t.table[n]){case yn:i.video=[]
Xn(e,t,i)
0===i.video.length&&delete i.video
break
case _n:i.audio=[]
Kn(e,t,i)
0===i.audio.length&&delete i.audio}}return i},Qn=function(e,t){var i
if(!(i=Hn.aac.isLikelyAacData(e)?(function(e){for(var t,i=!1,n=0,r=null,a=null,s=0,o=0;e.length-o>=3;){switch(Hn.aac.parseType(e,o)){case"timed-metadata":if(e.length-o<10){i=!0
break}if((s=Hn.aac.parseId3TagSize(e,o))>e.length){i=!0
break}if(null===a){t=e.subarray(o,o+s)
a=Hn.aac.parseAacTimestamp(t)}o+=s
break
case"audio":if(e.length-o<7){i=!0
break}if((s=Hn.aac.parseAdtsSize(e,o))>e.length){i=!0
break}if(null===r){t=e.subarray(o,o+s)
r=Hn.aac.parseSampleRate(t)}n++
o+=s
break
default:o++}if(i)return null}if(null===r||null===a)return null
var l=Gn/r
return{audio:[{type:"audio",dts:a,pts:a},{type:"audio",dts:a+1024*n*l,pts:a+1024*n*l}]}})(e):Yn(e))||!i.audio&&!i.video)return null;((function(e,t){if(e.audio&&e.audio.length){var i=t
void 0===i&&(i=e.audio[0].dts)
e.audio.forEach((function(e){e.dts=Vn(e.dts,i)
e.pts=Vn(e.pts,i)
e.dtsTime=e.dts/Gn
e.ptsTime=e.pts/Gn}))}if(e.video&&e.video.length){var n=t
void 0===n&&(n=e.video[0].dts)
e.video.forEach((function(e){e.dts=Vn(e.dts,n)
e.pts=Vn(e.pts,n)
e.dtsTime=e.dts/Gn
e.ptsTime=e.pts/Gn}))
if(e.firstKeyFrame){var r=e.firstKeyFrame
r.dts=Vn(r.dts,n)
r.pts=Vn(r.pts,n)
r.dtsTime=r.dts/Gn
r.ptsTime=r.dts/Gn}}}))(i,t)
return i},$n=function(e){return e>>>0},Jn=function(e){var t=""
t+=String.fromCharCode(e[0])
t+=String.fromCharCode(e[1])
t+=String.fromCharCode(e[2])
return t+=String.fromCharCode(e[3])},Zn=$n,er=function(e,t){var i,n,r,a,s,o=[]
if(!t.length)return null
for(i=0;i<e.byteLength;){n=Zn(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3])
r=Jn(e.subarray(i+4,i+8))
a=n>1?i+n:e.byteLength
r===t[0]&&(1===t.length?o.push(e.subarray(i+8,a)):(s=er(e.subarray(i+8,a),t.slice(1))).length&&(o=o.concat(s)))
i=a}return o},tr=er,ir=function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength),n={version:e[0],flags:new Uint8Array(e.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],l=32&n.flags[2],u=65536&n.flags[0],c=131072&n.flags[0]
t=8
if(r){t+=4
n.baseDataOffset=i.getUint32(12)
t+=4}if(a){n.sampleDescriptionIndex=i.getUint32(t)
t+=4}if(s){n.defaultSampleDuration=i.getUint32(t)
t+=4}if(o){n.defaultSampleSize=i.getUint32(t)
t+=4}l&&(n.defaultSampleFlags=i.getUint32(t))
u&&(n.durationIsEmpty=!0)
!r&&c&&(n.baseDataOffsetIsMoof=!0)
return n},nr=function(e){return{isLeading:(12&e[0])>>>2,dependsOn:3&e[0],isDependedOn:(192&e[1])>>>6,hasRedundancy:(48&e[1])>>>4,paddingValue:(14&e[1])>>>1,isNonSyncSample:1&e[1],degradationPriority:e[2]<<8|e[3]}},rr=function(e){var t,i={version:e[0],flags:new Uint8Array(e.subarray(1,4)),samples:[]},n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=1&i.flags[2],a=4&i.flags[2],s=1&i.flags[1],o=2&i.flags[1],l=4&i.flags[1],u=8&i.flags[1],c=n.getUint32(4),d=8
if(r){i.dataOffset=n.getInt32(d)
d+=4}if(a&&c){t={flags:nr(e.subarray(d,d+4))}
d+=4
if(s){t.duration=n.getUint32(d)
d+=4}if(o){t.size=n.getUint32(d)
d+=4}if(u){1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d)
d+=4}i.samples.push(t)
c--}for(;c--;){t={}
if(s){t.duration=n.getUint32(d)
d+=4}if(o){t.size=n.getUint32(d)
d+=4}if(l){t.flags=nr(e.subarray(d,d+4))
d+=4}if(u){1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d)
d+=4}i.samples.push(t)}return i},ar=$n,sr=function(e){var t={version:e[0],flags:new Uint8Array(e.subarray(1,4)),baseMediaDecodeTime:ar(e[4]<<24|e[5]<<16|e[6]<<8|e[7])}
if(1===t.version){t.baseMediaDecodeTime*=Math.pow(2,32)
t.baseMediaDecodeTime+=ar(e[8]<<24|e[9]<<16|e[10]<<8|e[11])}return t},or=$n,lr=function(e){return("00"+e.toString(16)).slice(-2)};(function(e){return tr(e,["moov","trak"]).reduce((function(e,t){var i,n,r,a,s
if(!(i=tr(t,["tkhd"])[0]))return null
n=i[0]
a=or(i[r=0===n?12:20]<<24|i[r+1]<<16|i[r+2]<<8|i[r+3])
if(!(s=tr(t,["mdia","mdhd"])[0]))return null
r=0===(n=s[0])?12:20
e[a]=or(s[r]<<24|s[r+1]<<16|s[r+2]<<8|s[r+3])
return e}),{})})
qn=function(e,t){var i,n,r
i=tr(t,["moof","traf"])
n=[].concat.apply([],i.map((function(t){return tr(t,["tfhd"]).map((function(i){var n,r
n=or(i[4]<<24|i[5]<<16|i[6]<<8|i[7])
r=e[n]||9e4
return(tr(t,["tfdt"]).map((function(e){var t,i
t=e[0]
i=or(e[4]<<24|e[5]<<16|e[6]<<8|e[7])
if(1===t){i*=Math.pow(2,32)
i+=or(e[8]<<24|e[9]<<16|e[10]<<8|e[11])}return i}))[0]||1/0)/r}))})))
r=Math.min.apply(null,n)
return isFinite(r)?r:0};(function(e,t){var i,n=tr(t,["moof","traf"]),r=0,a=0
if(n&&n.length){var s=tr(n[0],["tfhd"])[0],o=tr(n[0],["trun"])[0],l=tr(n[0],["tfdt"])[0]
if(s){i=ir(s).trackId}if(l){r=sr(l).baseMediaDecodeTime}if(o){var u=rr(o)
u.samples&&u.samples.length&&(a=u.samples[0].compositionTimeOffset||0)}}return(r+a)/(e[i]||9e4)});(function(e){var t=tr(e,["moov","trak"]),i=[]
t.forEach((function(e){var t=tr(e,["mdia","hdlr"]),n=tr(e,["tkhd"])
t.forEach((function(e,t){var r,a,s=Jn(e.subarray(8,12)),o=n[t]
if("vide"===s){a=0===(r=new DataView(o.buffer,o.byteOffset,o.byteLength)).getUint8(0)?r.getUint32(12):r.getUint32(20)
i.push(a)}}))}))
return i})
Wn=function(e){var t=tr(e,["moov","trak"]),i=[]
t.forEach((function(e){var t,n,r={},a=tr(e,["tkhd"])[0]
if(a){n=(t=new DataView(a.buffer,a.byteOffset,a.byteLength)).getUint8(0)
r.id=0===n?t.getUint32(12):t.getUint32(20)}var s=tr(e,["mdia","hdlr"])[0]
if(s){var o=Jn(s.subarray(8,12))
r.type="vide"===o?"video":"soun"===o?"audio":o}var l=tr(e,["mdia","minf","stbl","stsd"])[0]
if(l){var u=l.subarray(8)
r.codec=Jn(u.subarray(4,8))
var c,d=tr(u,[r.codec])[0]
if(d)if(/^[a-z]vc[1-9]$/i.test(r.codec)){c=d.subarray(78)
if("avcC"===Jn(c.subarray(4,8))&&c.length>11){r.codec+="."
r.codec+=lr(c[9])
r.codec+=lr(c[10])
r.codec+=lr(c[11])}else r.codec="avc1.4d400d"}else if(/^mp4[a,v]$/i.test(r.codec)){c=d.subarray(28)
if("esds"===Jn(c.subarray(4,8))&&c.length>20&&0!==c[19]){r.codec+="."+lr(c[19])
r.codec+="."+lr(c[20]>>>2&63).replace(/^0/,"")}else r.codec="mp4a.40.2"}}var h=tr(e,["mdia","mdhd"])[0]
h&&(r.timescale=zn(h))
i.push(r)}))
return i}
var ur=qn,cr=Wn,dr=(zn=function(e){var t=0===e[0]?12:20
return or(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])},r((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})
function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(F),r={mp4:/^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v)/,webm:/^(vp0?[89]|av0?1|opus|vorbis)/,ogg:/^(vp0?[89]|theora|flac|opus|vorbis)/,video:/^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,audio:/^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3)/,muxerVideo:/^(avc0?1)/,muxerAudio:/^(mp4a)/},a=function(e){return e?e.replace(/avc1\.(\d+)\.(\d+)/i,(function(e,t,i){return"avc1."+("00"+Number(t).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})):e},s=function(e){return e.map(a)},o=function(e){void 0===e&&(e="")
var t=e.split(","),i={}
t.forEach((function(e){e=e.trim();["video","audio"].forEach((function(t){var n=r[t].exec(e.toLowerCase())
if(n&&!(n.length<=1)){var a=e.substring(0,n[1].length),s=e.replace(a,"")
i[t]={type:a,details:s}}}))}))
return i},l=function(e){void 0===e&&(e="")
return r.audio.test(e.trim().toLowerCase())},u=function(e){if(e&&"string"==typeof e){var t=e.toLowerCase().split(",").map((function(e){return a(e.trim())})),i="video"
1===t.length&&l(t[0])&&(i="audio")
var n="mp4"
t.every((function(e){return r.mp4.test(e)}))?n="mp4":t.every((function(e){return r.webm.test(e)}))?n="webm":t.every((function(e){return r.ogg.test(e)}))&&(n="ogg")
return i+"/"+n+';codecs="'+e+'"'}}
t.DEFAULT_AUDIO_CODEC="mp4a.40.2"
t.DEFAULT_VIDEO_CODEC="avc1.4d400d"
t.browserSupportsCodec=function(e){void 0===e&&(e="")
return n.default.MediaSource&&n.default.MediaSource.isTypeSupported&&n.default.MediaSource.isTypeSupported(u(e))||!1}
t.codecsFromDefault=function(e,t){if(!e.mediaGroups.AUDIO||!t)return null
var i=e.mediaGroups.AUDIO[t]
if(!i)return null
for(var n in i){var r=i[n]
if(r.default&&r.playlists)return o(r.playlists[0].attributes.CODECS)}return null}
t.getMimeForCodec=u
t.isAudioCodec=l
t.isVideoCodec=function(e){void 0===e&&(e="")
return r.video.test(e.trim().toLowerCase())}
t.mapLegacyAvcCodecs=function(e){return e.replace(/avc1\.(\d+)\.(\d+)/i,(function(e){return s([e])[0]}))}
t.muxerSupportsCodec=function(e){void 0===e&&(e="")
return e.toLowerCase().split(",").every((function(e){e=e.trim()
return r.muxerVideo.test(e)||r.muxerAudio.test(e)}))}
t.parseCodecs=o
t.translateLegacyCodec=a
t.translateLegacyCodecs=s})))
n(dr)
var hr=dr.DEFAULT_AUDIO_CODEC,pr=dr.DEFAULT_VIDEO_CODEC,fr=dr.browserSupportsCodec,mr=dr.codecsFromDefault,gr=dr.getMimeForCodec,vr=dr.isAudioCodec,yr=dr.isVideoCodec,_r=(dr.mapLegacyAvcCodecs,dr.muxerSupportsCodec),br=dr.parseCodecs,Tr=dr.translateLegacyCodec,Sr=(dr.translateLegacyCodecs,"7.11.0"),kr=[],Cr=function(e,t){return function(i,n,r){var s=t.levels[n],o=new RegExp("^("+s+")$")
"log"!==i&&r.unshift(i.toUpperCase()+":")
r.unshift(e+":")
if(kr){kr.push([].concat(r))
var l=kr.length-1e3
kr.splice(0,l>0?l:0)}if(a.console){var u=a.console[i]
u||"debug"!==i||(u=a.console.info||a.console.log)
u&&s&&o.test(i)&&u[Array.isArray(r)?"apply":"call"](a.console,r)}}}
var Er=(function e(t){var i,n="info",r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
i("log",n,t)}
i=Cr(t,r)
r.createLogger=function(i){return e(t+": "+i)}
r.levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:n}
r.level=function(e){if("string"==typeof e){if(!r.levels.hasOwnProperty(e))throw new Error('"'+e+'" in not a valid log level')
n=e}return n};(r.history=function(){return kr?[].concat(kr):[]}).filter=function(e){return(kr||[]).filter((function(t){return new RegExp(".*"+e+".*").test(t[0])}))}
r.history.clear=function(){kr&&(kr.length=0)}
r.history.disable=function(){if(null!==kr){kr.length=0
kr=null}}
r.history.enable=function(){null===kr&&(kr=[])}
r.error=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return i("error",n,t)}
r.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return i("warn",n,t)}
r.debug=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return i("debug",n,t)}
return r})("VIDEOJS"),wr=Er.createLogger,Ir=Object.prototype.toString,Pr=function(e){return Or(e)?Object.keys(e):[]}
function Ar(e,t){Pr(e).forEach((function(i){return t(e[i],i)}))}function xr(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n]
if(Object.assign)return N.apply(void 0,[e].concat(i))
i.forEach((function(t){t&&Ar(t,(function(t,i){e[i]=t}))}))
return e}function Or(e){return!!e&&"object"==typeof e}function Lr(e){return Or(e)&&"[object Object]"===Ir.call(e)&&e.constructor===Object}function Dr(e,t){if(!e||!t)return""
if("function"==typeof a.getComputedStyle){var i=a.getComputedStyle(e)
return i?i.getPropertyValue(t)||i[t]:""}return""}function Rr(e){return"string"==typeof e&&Boolean(e.trim())}function Nr(e){if(e.indexOf(" ")>=0)throw new Error("class has illegal whitespace characters")}function Mr(){return R===a.document}function Ur(e){return Or(e)&&1===e.nodeType}function Br(){try{return a.parent!==a.self}catch(e){return!0}}function jr(e){return function(t,i){if(!Rr(t))return R[e](null)
Rr(i)&&(i=R.querySelector(i))
var n=Ur(i)?i:R
return n[e]&&n[e](t)}}function Fr(e,t,i,n){void 0===e&&(e="div")
void 0===t&&(t={})
void 0===i&&(i={})
var r=R.createElement(e)
Object.getOwnPropertyNames(t).forEach((function(e){var i=t[e]
if(-1!==e.indexOf("aria-")||"role"===e||"type"===e){Er.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set "+e+" to "+i+".")
r.setAttribute(e,i)}else"textContent"===e?Vr(r,i):r[e]===i&&"tabIndex"!==e||(r[e]=i)}))
Object.getOwnPropertyNames(i).forEach((function(e){r.setAttribute(e,i[e])}))
n&&sa(r,n)
return r}function Vr(e,t){void 0===e.textContent?e.innerText=t:e.textContent=t
return e}function Hr(e,t){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}function qr(e,t){Nr(t)
return e.classList?e.classList.contains(t):(i=t,new RegExp("(^|\\s)"+i+"($|\\s)")).test(e.className)
var i}function Wr(e,t){e.classList?e.classList.add(t):qr(e,t)||(e.className=(e.className+" "+t).trim())
return e}function zr(e,t){if(e.classList)e.classList.remove(t)
else{Nr(t)
e.className=e.className.split(/\s+/).filter((function(e){return e!==t})).join(" ")}return e}function Gr(e,t,i){var n=qr(e,t)
"function"==typeof i&&(i=i(e,t))
"boolean"!=typeof i&&(i=!n)
if(i!==n){i?Wr(e,t):zr(e,t)
return e}}function Kr(e,t){Object.getOwnPropertyNames(t).forEach((function(i){var n=t[i]
null==n||!1===n?e.removeAttribute(i):e.setAttribute(i,!0===n?"":n)}))}function Xr(e){var t={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,"
if(e&&e.attributes&&e.attributes.length>0)for(var n=e.attributes,r=n.length-1;r>=0;r--){var a=n[r].name,s=n[r].value
"boolean"!=typeof e[a]&&-1===i.indexOf(","+a+",")||(s=null!==s)
t[a]=s}return t}function Yr(e,t){return e.getAttribute(t)}function Qr(e,t,i){e.setAttribute(t,i)}function $r(e,t){e.removeAttribute(t)}function Jr(){R.body.focus()
R.onselectstart=function(){return!1}}function Zr(){R.onselectstart=function(){return!0}}function ea(e){if(e&&e.getBoundingClientRect&&e.parentNode){var t=e.getBoundingClientRect(),i={};["bottom","height","left","right","top","width"].forEach((function(e){void 0!==t[e]&&(i[e]=t[e])}))
i.height||(i.height=parseFloat(Dr(e,"height")))
i.width||(i.width=parseFloat(Dr(e,"width")))
return i}}function ta(e){if(!e||e&&!e.offsetParent)return{left:0,top:0,width:0,height:0}
var t=e.offsetWidth,i=e.offsetHeight,n=0,r=0
do{n+=e.offsetLeft
r+=e.offsetTop
e=e.offsetParent}while(e)
return{left:n,top:r,width:t,height:i}}function ia(e,t){var i={},n=ta(t.target),r=ta(e),a=r.width,s=r.height,o=t.offsetY-(r.top-n.top),l=t.offsetX-(r.left-n.left)
if(t.changedTouches){l=t.changedTouches[0].pageX-r.left
o=t.changedTouches[0].pageY+r.top}i.y=1-Math.max(0,Math.min(1,o/s))
i.x=Math.max(0,Math.min(1,l/a))
return i}function na(e){return Or(e)&&3===e.nodeType}function ra(e){for(;e.firstChild;)e.removeChild(e.firstChild)
return e}function aa(e){"function"==typeof e&&(e=e())
return(Array.isArray(e)?e:[e]).map((function(e){"function"==typeof e&&(e=e())
return Ur(e)||na(e)?e:"string"==typeof e&&/\S/.test(e)?R.createTextNode(e):void 0})).filter((function(e){return e}))}function sa(e,t){aa(t).forEach((function(t){return e.appendChild(t)}))
return e}function oa(e,t){return sa(ra(e),t)}function la(e){return void 0===e.button&&void 0===e.buttons||(0===e.button&&void 0===e.buttons||("mouseup"===e.type&&0===e.button&&0===e.buttons||0===e.button&&1===e.buttons))}var ua,ca=jr("querySelector"),da=jr("querySelectorAll"),ha=Object.freeze({__proto__:null,isReal:Mr,isEl:Ur,isInFrame:Br,createEl:Fr,textContent:Vr,prependTo:Hr,hasClass:qr,addClass:Wr,removeClass:zr,toggleClass:Gr,setAttributes:Kr,getAttributes:Xr,getAttribute:Yr,setAttribute:Qr,removeAttribute:$r,blockTextSelection:Jr,unblockTextSelection:Zr,getBoundingClientRect:ea,findPosition:ta,getPointerPosition:ia,isTextNode:na,emptyEl:ra,normalizeContent:aa,appendContent:sa,insertContent:oa,isSingleLeftClick:la,$:ca,$$:da}),pa=!1,fa=function(){if(Mr()&&!1!==ua.options.autoSetup){var e=Array.prototype.slice.call(R.getElementsByTagName("video")),t=Array.prototype.slice.call(R.getElementsByTagName("audio")),i=Array.prototype.slice.call(R.getElementsByTagName("video-js")),n=e.concat(t,i)
if(n&&n.length>0)for(var r=0,a=n.length;r<a;r++){var s=n[r]
if(!s||!s.getAttribute){ma(1)
break}if(void 0===s.player){null!==s.getAttribute("data-setup")&&ua(s)}}else pa||ma(1)}}
function ma(e,t){t&&(ua=t)
a.setTimeout(fa,e)}function ga(){pa=!0
a.removeEventListener("load",ga)}Mr()&&("complete"===R.readyState?ga():a.addEventListener("load",ga))
var va,ya=function(e){var t=R.createElement("style")
t.className=e
return t},_a=function(e,t){e.styleSheet?e.styleSheet.cssText=t:e.textContent=t},ba=3
function Ta(){return ba++}a.WeakMap||(va=(function(){function e(){this.vdata="vdata"+Math.floor(a.performance&&a.performance.now()||Date.now())
this.data={}}var t=e.prototype
t.set=function(e,t){var i=e[this.vdata]||Ta()
e[this.vdata]||(e[this.vdata]=i)
this.data[i]=t
return this}
t.get=function(e){var t=e[this.vdata]
if(t)return this.data[t]
Er("We have no data for this element",e)}
t.has=function(e){return e[this.vdata]in this.data}
t.delete=function(e){var t=e[this.vdata]
if(t){delete this.data[t]
delete e[this.vdata]}}
return e})())
var Sa,ka=a.WeakMap?new WeakMap:new va
function Ca(e,t){if(ka.has(e)){var i=ka.get(e)
if(0===i.handlers[t].length){delete i.handlers[t]
e.removeEventListener?e.removeEventListener(t,i.dispatcher,!1):e.detachEvent&&e.detachEvent("on"+t,i.dispatcher)}if(Object.getOwnPropertyNames(i.handlers).length<=0){delete i.handlers
delete i.dispatcher
delete i.disabled}0===Object.getOwnPropertyNames(i).length&&ka.delete(e)}}function Ea(e,t,i,n){i.forEach((function(i){e(t,i,n)}))}function wa(e){if(e.fixed_)return e
function t(){return!0}function i(){return!1}if(!e||!e.isPropagationStopped){var n=e||a.event
e={}
for(var r in n)"layerX"!==r&&"layerY"!==r&&"keyLocation"!==r&&"webkitMovementX"!==r&&"webkitMovementY"!==r&&("returnValue"===r&&n.preventDefault||(e[r]=n[r]))
e.target||(e.target=e.srcElement||R)
e.relatedTarget||(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement)
e.preventDefault=function(){n.preventDefault&&n.preventDefault()
e.returnValue=!1
n.returnValue=!1
e.defaultPrevented=!0}
e.defaultPrevented=!1
e.stopPropagation=function(){n.stopPropagation&&n.stopPropagation()
e.cancelBubble=!0
n.cancelBubble=!0
e.isPropagationStopped=t}
e.isPropagationStopped=i
e.stopImmediatePropagation=function(){n.stopImmediatePropagation&&n.stopImmediatePropagation()
e.isImmediatePropagationStopped=t
e.stopPropagation()}
e.isImmediatePropagationStopped=i
if(null!==e.clientX&&void 0!==e.clientX){var s=R.documentElement,o=R.body
e.pageX=e.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0)
e.pageY=e.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)}e.which=e.charCode||e.keyCode
null!==e.button&&void 0!==e.button&&(e.button=1&e.button?0:4&e.button?1:2&e.button?2:0)}e.fixed_=!0
return e}var Ia=function(){if("boolean"!=typeof Sa){Sa=!1
try{var e=Object.defineProperty({},"passive",{get:function(){Sa=!0}})
a.addEventListener("test",null,e)
a.removeEventListener("test",null,e)}catch(Kg){}}return Sa},Pa=["touchstart","touchmove"]
function Aa(e,t,i){if(Array.isArray(t))return Ea(Aa,e,t,i)
ka.has(e)||ka.set(e,{})
var n=ka.get(e)
n.handlers||(n.handlers={})
n.handlers[t]||(n.handlers[t]=[])
i.guid||(i.guid=Ta())
n.handlers[t].push(i)
if(!n.dispatcher){n.disabled=!1
n.dispatcher=function(t,i){if(!n.disabled){t=wa(t)
var r=n.handlers[t.type]
if(r)for(var a=r.slice(0),s=0,o=a.length;s<o&&!t.isImmediatePropagationStopped();s++)try{a[s].call(e,t,i)}catch(Kg){Er.error(Kg)}}}}if(1===n.handlers[t].length)if(e.addEventListener){var r=!1
Ia()&&Pa.indexOf(t)>-1&&(r={passive:!0})
e.addEventListener(t,n.dispatcher,r)}else e.attachEvent&&e.attachEvent("on"+t,n.dispatcher)}function xa(e,t,i){if(ka.has(e)){var n=ka.get(e)
if(n.handlers){if(Array.isArray(t))return Ea(xa,e,t,i)
var r=function(e,t){n.handlers[t]=[]
Ca(e,t)}
if(void 0!==t){var a=n.handlers[t]
if(a)if(i){if(i.guid)for(var s=0;s<a.length;s++)a[s].guid===i.guid&&a.splice(s--,1)
Ca(e,t)}else r(e,t)}else for(var o in n.handlers)Object.prototype.hasOwnProperty.call(n.handlers||{},o)&&r(e,o)}}}function Oa(e,t,i){var n=ka.has(e)?ka.get(e):{},r=e.parentNode||e.ownerDocument
"string"==typeof t?t={type:t,target:e}:t.target||(t.target=e)
t=wa(t)
n.dispatcher&&n.dispatcher.call(e,t,i)
if(r&&!t.isPropagationStopped()&&!0===t.bubbles)Oa.call(null,r,t,i)
else if(!r&&!t.defaultPrevented&&t.target&&t.target[t.type]){ka.has(t.target)||ka.set(t.target,{})
var a=ka.get(t.target)
if(t.target[t.type]){a.disabled=!0
"function"==typeof t.target[t.type]&&t.target[t.type]()
a.disabled=!1}}return!t.defaultPrevented}function La(e,t,i){if(Array.isArray(t))return Ea(La,e,t,i)
var n=function n(){xa(e,t,n)
i.apply(this,arguments)}
n.guid=i.guid=i.guid||Ta()
Aa(e,t,n)}function Da(e,t,i){var n=function n(){xa(e,t,n)
i.apply(this,arguments)}
n.guid=i.guid=i.guid||Ta()
Aa(e,t,n)}var Ra,Na=Object.freeze({__proto__:null,fixEvent:wa,on:Aa,off:xa,trigger:Oa,one:La,any:Da}),Ma=30,Ua=function(e,t,i){t.guid||(t.guid=Ta())
var n=t.bind(e)
n.guid=i?i+"_"+t.guid:t.guid
return n},Ba=function(e,t){var i=a.performance.now()
return function(){var n=a.performance.now()
if(n-i>=t){e.apply(void 0,arguments)
i=n}}},ja=function(e,t,i,n){void 0===n&&(n=a)
var r,s=function(){var a=this,s=arguments,o=function(){r=null
o=null
i||e.apply(a,s)}
!r&&i&&e.apply(a,s)
n.clearTimeout(r)
r=n.setTimeout(o,t)}
s.cancel=function(){n.clearTimeout(r)
r=null}
return s},Fa=function(){}
Fa.prototype.allowedEvents_={}
Fa.prototype.on=function(e,t){var i=this.addEventListener
this.addEventListener=function(){}
Aa(this,e,t)
this.addEventListener=i}
Fa.prototype.addEventListener=Fa.prototype.on
Fa.prototype.off=function(e,t){xa(this,e,t)}
Fa.prototype.removeEventListener=Fa.prototype.off
Fa.prototype.one=function(e,t){var i=this.addEventListener
this.addEventListener=function(){}
La(this,e,t)
this.addEventListener=i}
Fa.prototype.any=function(e,t){var i=this.addEventListener
this.addEventListener=function(){}
Da(this,e,t)
this.addEventListener=i}
Fa.prototype.trigger=function(e){var t=e.type||e
"string"==typeof e&&(e={type:t})
e=wa(e)
this.allowedEvents_[t]&&this["on"+t]&&this["on"+t](e)
Oa(this,e)}
Fa.prototype.dispatchEvent=Fa.prototype.trigger
Fa.prototype.queueTrigger=function(e){var t=this
Ra||(Ra=new Map)
var i=e.type||e,n=Ra.get(this)
if(!n){n=new Map
Ra.set(this,n)}var r=n.get(i)
n.delete(i)
a.clearTimeout(r)
var s=a.setTimeout((function(){if(0===n.size){n=null
Ra.delete(t)}t.trigger(e)}),0)
n.set(i,s)}
var Va=function(e){return e instanceof Fa||!!e.eventBusEl_&&["on","one","off","trigger"].every((function(t){return"function"==typeof e[t]}))},Ha=function(e){return"string"==typeof e&&/\S/.test(e)||Array.isArray(e)&&!!e.length},qa=function(e){if(!e.nodeName&&!Va(e))throw new Error("Invalid target; must be a DOM node or evented object.")},Wa=function(e){if(!Ha(e))throw new Error("Invalid event type; must be a non-empty string or array.")},za=function(e){if("function"!=typeof e)throw new Error("Invalid listener; must be a function.")},Ga=function(e,t){var i,n,r,a=t.length<3||t[0]===e||t[0]===e.eventBusEl_
if(a){i=e.eventBusEl_
t.length>=3&&t.shift()
n=t[0]
r=t[1]}else{i=t[0]
n=t[1]
r=t[2]}qa(i)
Wa(n)
za(r)
return{isTargetingSelf:a,target:i,type:n,listener:r=Ua(e,r)}},Ka=function(e,t,i,n){qa(e)
e.nodeName?Na[t](e,i,n):e[t](i,n)},Xa={on:function(){for(var e=this,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
var r=Ga(this,i),a=r.isTargetingSelf,s=r.target,o=r.type,l=r.listener
Ka(s,"on",o,l)
if(!a){var u=function(){return e.off(s,o,l)}
u.guid=l.guid
var c=function(){return e.off("dispose",u)}
c.guid=l.guid
Ka(this,"on","dispose",u)
Ka(s,"on","dispose",c)}},one:function(){for(var e=this,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
var r=Ga(this,i),a=r.isTargetingSelf,s=r.target,o=r.type,l=r.listener
if(a)Ka(s,"one",o,l)
else{var u=function t(){e.off(s,o,t)
for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r]
l.apply(null,n)}
u.guid=l.guid
Ka(s,"one",o,u)}},any:function(){for(var e=this,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
var r=Ga(this,i),a=r.isTargetingSelf,s=r.target,o=r.type,l=r.listener
if(a)Ka(s,"any",o,l)
else{var u=function t(){e.off(s,o,t)
for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r]
l.apply(null,n)}
u.guid=l.guid
Ka(s,"any",o,u)}},off:function(e,t,i){if(!e||Ha(e))xa(this.eventBusEl_,e,t)
else{var n=e,r=t
qa(n)
Wa(r)
za(i)
i=Ua(this,i)
this.off("dispose",i)
if(n.nodeName){xa(n,r,i)
xa(n,"dispose",i)}else if(Va(n)){n.off(r,i)
n.off("dispose",i)}}},trigger:function(e,t){return Oa(this.eventBusEl_,e,t)}}
function Ya(e,t){void 0===t&&(t={})
var i=t.eventBusKey
if(i){if(!e[i].nodeName)throw new Error('The eventBusKey "'+i+'" does not refer to an element.')
e.eventBusEl_=e[i]}else e.eventBusEl_=Fr("span",{className:"vjs-event-bus"})
xr(e,Xa)
e.eventedCallbacks&&e.eventedCallbacks.forEach((function(e){e()}))
e.on("dispose",(function(){e.off()
a.setTimeout((function(){e.eventBusEl_=null}),0)}))
return e}var Qa={state:{},setState:function(e){var t,i=this
"function"==typeof e&&(e=e())
Ar(e,(function(e,n){i.state[n]!==e&&((t=t||{})[n]={from:i.state[n],to:e})
i.state[n]=e}))
t&&Va(this)&&this.trigger({changes:t,type:"statechanged"})
return t}}
function $a(e,t){xr(e,Qa)
e.state=xr({},e.state,t)
"function"==typeof e.handleStateChanged&&Va(e)&&e.on("statechanged",e.handleStateChanged)
return e}var Ja=function(e){return"string"!=typeof e?e:e.replace(/./,(function(e){return e.toLowerCase()}))},Za=function(e){return"string"!=typeof e?e:e.replace(/./,(function(e){return e.toUpperCase()}))}
function es(){for(var e={},t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
i.forEach((function(t){t&&Ar(t,(function(t,i){if(Lr(t)){Lr(e[i])||(e[i]={})
e[i]=es(e[i],t)}else e[i]=t}))}))
return e}var ts=(function(){function e(){this.map_={}}var t=e.prototype
t.has=function(e){return e in this.map_}
t.delete=function(e){var t=this.has(e)
delete this.map_[e]
return t}
t.set=function(e,t){this.set_[e]=t
return this}
t.forEach=function(e,t){for(var i in this.map_)e.call(t,this.map_[i],i,this)}
return e})(),is=a.Map?a.Map:ts,ns=(function(){function e(){this.set_={}}var t=e.prototype
t.has=function(e){return e in this.set_}
t.delete=function(e){var t=this.has(e)
delete this.set_[e]
return t}
t.add=function(e){this.set_[e]=1
return this}
t.forEach=function(e,t){for(var i in this.set_)e.call(t,i,i,this)}
return e})(),rs=a.Set?a.Set:ns,as=(function(){function e(e,t,i){!e&&this.play?this.player_=e=this:this.player_=e
this.isDisposed_=!1
this.parentComponent_=null
this.options_=es({},this.options_)
t=this.options_=es(this.options_,t)
this.id_=t.id||t.el&&t.el.id
if(!this.id_){var n=e&&e.id&&e.id()||"no_player"
this.id_=n+"_component_"+Ta()}this.name_=t.name||null
t.el?this.el_=t.el:!1!==t.createEl&&(this.el_=this.createEl())
if(!1!==t.evented){Ya(this,{eventBusKey:this.el_?"el_":null})
this.handleLanguagechange=this.handleLanguagechange.bind(this)
this.on(this.player_,"languagechange",this.handleLanguagechange)}$a(this,this.constructor.defaultState)
this.children_=[]
this.childIndex_={}
this.childNameIndex_={}
this.setTimeoutIds_=new rs
this.setIntervalIds_=new rs
this.rafIds_=new rs
this.namedRafs_=new is
this.clearingTimersOnDispose_=!1
!1!==t.initChildren&&this.initChildren()
this.ready(i)
!1!==t.reportTouchActivity&&this.enableTouchActivity()}var t=e.prototype
t.dispose=function(){if(!this.isDisposed_){this.trigger({type:"dispose",bubbles:!1})
this.isDisposed_=!0
if(this.children_)for(var e=this.children_.length-1;e>=0;e--)this.children_[e].dispose&&this.children_[e].dispose()
this.children_=null
this.childIndex_=null
this.childNameIndex_=null
this.parentComponent_=null
if(this.el_){this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_)
ka.has(this.el_)&&ka.delete(this.el_)
this.el_=null}this.player_=null}}
t.isDisposed=function(){return Boolean(this.isDisposed_)}
t.player=function(){return this.player_}
t.options=function(e){if(!e)return this.options_
this.options_=es(this.options_,e)
return this.options_}
t.el=function(){return this.el_}
t.createEl=function(e,t,i){return Fr(e,t,i)}
t.localize=function(e,t,i){void 0===i&&(i=e)
var n=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),a=r&&r[n],s=n&&n.split("-")[0],o=r&&r[s],l=i
a&&a[e]?l=a[e]:o&&o[e]&&(l=o[e])
t&&(l=l.replace(/\{(\d+)\}/g,(function(e,i){var n=t[i-1],r=n
void 0===n&&(r=e)
return r})))
return l}
t.handleLanguagechange=function(){}
t.contentEl=function(){return this.contentEl_||this.el_}
t.id=function(){return this.id_}
t.name=function(){return this.name_}
t.children=function(){return this.children_}
t.getChildById=function(e){return this.childIndex_[e]}
t.getChild=function(e){if(e)return this.childNameIndex_[e]}
t.getDescendant=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
t=t.reduce((function(e,t){return e.concat(t)}),[])
for(var n=this,r=0;r<t.length;r++)if(!(n=n.getChild(t[r]))||!n.getChild)return
return n}
t.addChild=function(t,i,n){void 0===i&&(i={})
void 0===n&&(n=this.children_.length)
var r,a
if("string"==typeof t){a=Za(t)
var s=i.componentClass||a
i.name=a
var o=e.getComponent(s)
if(!o)throw new Error("Component "+s+" does not exist")
if("function"!=typeof o)return null
r=new o(this.player_||this,i)}else r=t
r.parentComponent_&&r.parentComponent_.removeChild(r)
this.children_.splice(n,0,r)
r.parentComponent_=this
"function"==typeof r.id&&(this.childIndex_[r.id()]=r)
if(a=a||r.name&&Za(r.name())){this.childNameIndex_[a]=r
this.childNameIndex_[Ja(a)]=r}if("function"==typeof r.el&&r.el()){var l=null
this.children_[n+1]&&(this.children_[n+1].el_?l=this.children_[n+1].el_:Ur(this.children_[n+1])&&(l=this.children_[n+1]))
this.contentEl().insertBefore(r.el(),l)}return r}
t.removeChild=function(e){"string"==typeof e&&(e=this.getChild(e))
if(e&&this.children_){for(var t=!1,i=this.children_.length-1;i>=0;i--)if(this.children_[i]===e){t=!0
this.children_.splice(i,1)
break}if(t){e.parentComponent_=null
this.childIndex_[e.id()]=null
this.childNameIndex_[Za(e.name())]=null
this.childNameIndex_[Ja(e.name())]=null
var n=e.el()
n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(e.el())}}}
t.initChildren=function(){var t=this,i=this.options_.children
if(i){var n,r=this.options_,a=e.getComponent("Tech");(n=Array.isArray(i)?i:Object.keys(i)).concat(Object.keys(this.options_).filter((function(e){return!n.some((function(t){return"string"==typeof t?e===t:e===t.name}))}))).map((function(e){var n,r
if("string"==typeof e)r=i[n=e]||t.options_[n]||{}
else{n=e.name
r=e}return{name:n,opts:r}})).filter((function(t){var i=e.getComponent(t.opts.componentClass||Za(t.name))
return i&&!a.isTech(i)})).forEach((function(e){var i=e.name,n=e.opts
void 0!==r[i]&&(n=r[i])
if(!1!==n){!0===n&&(n={})
n.playerOptions=t.options_.playerOptions
var a=t.addChild(i,n)
a&&(t[i]=a)}}))}}
t.buildCSSClass=function(){return""}
t.ready=function(e,t){void 0===t&&(t=!1)
if(e)if(this.isReady_)t?e.call(this):this.setTimeout(e,1)
else{this.readyQueue_=this.readyQueue_||[]
this.readyQueue_.push(e)}}
t.triggerReady=function(){this.isReady_=!0
this.setTimeout((function(){var e=this.readyQueue_
this.readyQueue_=[]
e&&e.length>0&&e.forEach((function(e){e.call(this)}),this)
this.trigger("ready")}),1)}
t.$=function(e,t){return ca(e,t||this.contentEl())}
t.$$=function(e,t){return da(e,t||this.contentEl())}
t.hasClass=function(e){return qr(this.el_,e)}
t.addClass=function(e){Wr(this.el_,e)}
t.removeClass=function(e){zr(this.el_,e)}
t.toggleClass=function(e,t){Gr(this.el_,e,t)}
t.show=function(){this.removeClass("vjs-hidden")}
t.hide=function(){this.addClass("vjs-hidden")}
t.lockShowing=function(){this.addClass("vjs-lock-showing")}
t.unlockShowing=function(){this.removeClass("vjs-lock-showing")}
t.getAttribute=function(e){return Yr(this.el_,e)}
t.setAttribute=function(e,t){Qr(this.el_,e,t)}
t.removeAttribute=function(e){$r(this.el_,e)}
t.width=function(e,t){return this.dimension("width",e,t)}
t.height=function(e,t){return this.dimension("height",e,t)}
t.dimensions=function(e,t){this.width(e,!0)
this.height(t)}
t.dimension=function(e,t,i){if(void 0===t){if(!this.el_)return 0
var n=this.el_.style[e],r=n.indexOf("px")
return-1!==r?parseInt(n.slice(0,r),10):parseInt(this.el_["offset"+Za(e)],10)}null!==t&&t==t||(t=0);-1!==(""+t).indexOf("%")||-1!==(""+t).indexOf("px")?this.el_.style[e]=t:this.el_.style[e]="auto"===t?"":t+"px"
i||this.trigger("componentresize")}
t.currentDimension=function(e){var t=0
if("width"!==e&&"height"!==e)throw new Error("currentDimension only accepts width or height value")
t=Dr(this.el_,e)
if(0===(t=parseFloat(t))||isNaN(t)){var i="offset"+Za(e)
t=this.el_[i]}return t}
t.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}}
t.currentWidth=function(){return this.currentDimension("width")}
t.currentHeight=function(){return this.currentDimension("height")}
t.focus=function(){this.el_.focus()}
t.blur=function(){this.el_.blur()}
t.handleKeyDown=function(e){if(this.player_){e.stopPropagation()
this.player_.handleKeyDown(e)}}
t.handleKeyPress=function(e){this.handleKeyDown(e)}
t.emitTapEvents=function(){var e,t=0,i=null
this.on("touchstart",(function(n){if(1===n.touches.length){i={pageX:n.touches[0].pageX,pageY:n.touches[0].pageY}
t=a.performance.now()
e=!0}}))
this.on("touchmove",(function(t){if(t.touches.length>1)e=!1
else if(i){var n=t.touches[0].pageX-i.pageX,r=t.touches[0].pageY-i.pageY
Math.sqrt(n*n+r*r)>10&&(e=!1)}}))
var n=function(){e=!1}
this.on("touchleave",n)
this.on("touchcancel",n)
this.on("touchend",(function(n){i=null
if(!0===e){if(a.performance.now()-t<200){n.preventDefault()
this.trigger("tap")}}}))}
t.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e,t=Ua(this.player(),this.player().reportUserActivity)
this.on("touchstart",(function(){t()
this.clearInterval(e)
e=this.setInterval(t,250)}))
var i=function(i){t()
this.clearInterval(e)}
this.on("touchmove",t)
this.on("touchend",i)
this.on("touchcancel",i)}}
t.setTimeout=function(e,t){var i,n=this
e=Ua(this,e)
this.clearTimersOnDispose_()
i=a.setTimeout((function(){n.setTimeoutIds_.has(i)&&n.setTimeoutIds_.delete(i)
e()}),t)
this.setTimeoutIds_.add(i)
return i}
t.clearTimeout=function(e){if(this.setTimeoutIds_.has(e)){this.setTimeoutIds_.delete(e)
a.clearTimeout(e)}return e}
t.setInterval=function(e,t){e=Ua(this,e)
this.clearTimersOnDispose_()
var i=a.setInterval(e,t)
this.setIntervalIds_.add(i)
return i}
t.clearInterval=function(e){if(this.setIntervalIds_.has(e)){this.setIntervalIds_.delete(e)
a.clearInterval(e)}return e}
t.requestAnimationFrame=function(e){var t,i=this
if(!this.supportsRaf_)return this.setTimeout(e,1e3/60)
this.clearTimersOnDispose_()
e=Ua(this,e)
t=a.requestAnimationFrame((function(){i.rafIds_.has(t)&&i.rafIds_.delete(t)
e()}))
this.rafIds_.add(t)
return t}
t.requestNamedAnimationFrame=function(e,t){var i=this
if(!this.namedRafs_.has(e)){this.clearTimersOnDispose_()
t=Ua(this,t)
var n=this.requestAnimationFrame((function(){t()
i.namedRafs_.has(e)&&i.namedRafs_.delete(e)}))
this.namedRafs_.set(e,n)
return e}}
t.cancelNamedAnimationFrame=function(e){if(this.namedRafs_.has(e)){this.cancelAnimationFrame(this.namedRafs_.get(e))
this.namedRafs_.delete(e)}}
t.cancelAnimationFrame=function(e){if(!this.supportsRaf_)return this.clearTimeout(e)
if(this.rafIds_.has(e)){this.rafIds_.delete(e)
a.cancelAnimationFrame(e)}return e}
t.clearTimersOnDispose_=function(){var e=this
if(!this.clearingTimersOnDispose_){this.clearingTimersOnDispose_=!0
this.one("dispose",(function(){[["namedRafs_","cancelNamedAnimationFrame"],["rafIds_","cancelAnimationFrame"],["setTimeoutIds_","clearTimeout"],["setIntervalIds_","clearInterval"]].forEach((function(t){var i=t[0],n=t[1]
e[i].forEach((function(t,i){return e[n](i)}))}))
e.clearingTimersOnDispose_=!1}))}}
e.registerComponent=function(t,i){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.')
var n=e.getComponent("Tech"),r=n&&n.isTech(i),a=e===i||e.prototype.isPrototypeOf(i.prototype)
if(r||!a){var s
s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass"
throw new Error('Illegal component, "'+t+'"; '+s+".")}t=Za(t)
e.components_||(e.components_={})
var o=e.getComponent("Player")
if("Player"===t&&o&&o.players){var l=o.players,u=Object.keys(l)
if(l&&u.length>0&&u.map((function(e){return l[e]})).every(Boolean))throw new Error("Can not register Player component after player has been created.")}e.components_[t]=i
e.components_[Ja(t)]=i
return i}
e.getComponent=function(t){if(t&&e.components_)return e.components_[t]}
return e})()
as.prototype.supportsRaf_="function"==typeof a.requestAnimationFrame&&"function"==typeof a.cancelAnimationFrame
as.registerComponent("Component",as)
var ss,os=a.navigator&&a.navigator.userAgent||"",ls=/AppleWebKit\/([\d.]+)/i.exec(os),us=ls?parseFloat(ls.pop()):null,cs=/iPod/i.test(os),ds=(ss=os.match(/OS (\d+)_/i))&&ss[1]?ss[1]:null,hs=/Android/i.test(os),ps=(function(){var e=os.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)
if(!e)return null
var t=e[1]&&parseFloat(e[1]),i=e[2]&&parseFloat(e[2])
return t&&i?parseFloat(e[1]+"."+e[2]):t||null})(),fs=hs&&ps<5&&us<537,ms=/Firefox/i.test(os),gs=/Edg/i.test(os),vs=!gs&&(/Chrome/i.test(os)||/CriOS/i.test(os)),ys=(function(){var e=os.match(/(Chrome|CriOS)\/(\d+)/)
return e&&e[2]?parseFloat(e[2]):null})(),_s=(function(){var e=/MSIE\s(\d+)\.\d/.exec(os),t=e&&parseFloat(e[1])
!t&&/Trident\/7.0/i.test(os)&&/rv:11.0/.test(os)&&(t=11)
return t})(),bs=/Safari/i.test(os)&&!vs&&!hs&&!gs,Ts=/Windows/i.test(os),Ss=Boolean(Mr()&&("ontouchstart"in a||a.navigator.maxTouchPoints||a.DocumentTouch&&a.document instanceof a.DocumentTouch)),ks=/iPad/i.test(os)||bs&&Ss&&!/iPhone/i.test(os),Cs=/iPhone/i.test(os)&&!ks,Es=Cs||ks||cs,ws=(bs||Es)&&!vs,Is=Object.freeze({__proto__:null,IS_IPOD:cs,IOS_VERSION:ds,IS_ANDROID:hs,ANDROID_VERSION:ps,IS_NATIVE_ANDROID:fs,IS_FIREFOX:ms,IS_EDGE:gs,IS_CHROME:vs,CHROME_VERSION:ys,IE_VERSION:_s,IS_SAFARI:bs,IS_WINDOWS:Ts,TOUCH_ENABLED:Ss,IS_IPAD:ks,IS_IPHONE:Cs,IS_IOS:Es,IS_ANY_SAFARI:ws})
function Ps(e,t,i,n){((function(e,t,i){if("number"!=typeof t||t<0||t>i)throw new Error("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+t+") is non-numeric or out of bounds (0-"+i+").")}))(e,n,i.length-1)
return i[n][t]}function As(e){return void 0===e||0===e.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:e.length,start:Ps.bind(null,"start",0,e),end:Ps.bind(null,"end",1,e)}}function xs(e,t){return Array.isArray(e)?As(e):void 0===e||void 0===t?As():As([[e,t]])}function Os(e,t){var i,n,r=0
if(!t)return 0
e&&e.length||(e=xs(0,0))
for(var a=0;a<e.length;a++){i=e.start(a);(n=e.end(a))>t&&(n=t)
r+=n-i}return r/t}for(var Ls,Ds={prefixed:!0},Rs=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror","fullscreen"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"]],Ns=Rs[0],Ms=0;Ms<Rs.length;Ms++)if(Rs[Ms][1]in R){Ls=Rs[Ms]
break}if(Ls){for(var Us=0;Us<Ls.length;Us++)Ds[Ns[Us]]=Ls[Us]
Ds.prefixed=Ls[0]!==Ns[0]}function Bs(e){if(e instanceof Bs)return e
if("number"==typeof e)this.code=e
else if("string"==typeof e)this.message=e
else if(Or(e)){"number"==typeof e.code&&(this.code=e.code)
xr(this,e)}this.message||(this.message=Bs.defaultMessages[this.code]||"")}Bs.prototype.code=0
Bs.prototype.message=""
Bs.prototype.status=null
Bs.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"]
Bs.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."}
for(var js=0;js<Bs.errorTypes.length;js++){Bs[Bs.errorTypes[js]]=js
Bs.prototype[Bs.errorTypes[js]]=js}function Fs(e){return null!=e&&"function"==typeof e.then}function Vs(e){Fs(e)&&e.then(null,(function(e){}))}var Hs=function(e){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce((function(t,i,n){e[i]&&(t[i]=e[i])
return t}),{cues:e.cues&&Array.prototype.map.call(e.cues,(function(e){return{startTime:e.startTime,endTime:e.endTime,text:e.text,id:e.id}}))})},qs=function(e){var t=e.$$("track"),i=Array.prototype.map.call(t,(function(e){return e.track}))
return Array.prototype.map.call(t,(function(e){var t=Hs(e.track)
e.src&&(t.src=e.src)
return t})).concat(Array.prototype.filter.call(e.textTracks(),(function(e){return-1===i.indexOf(e)})).map(Hs))},Ws=function(e,t){e.forEach((function(e){var i=t.addRemoteTextTrack(e).track
!e.src&&e.cues&&e.cues.forEach((function(e){return i.addCue(e)}))}))
return t.textTracks()},zs="vjs-modal-dialog",Gs=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).opened_=n.hasBeenOpened_=n.hasBeenFilled_=!1
n.closeable(!n.options_.uncloseable)
n.content(n.options_.content)
n.contentEl_=Fr("div",{className:zs+"-content"},{role:"document"})
n.descEl_=Fr("p",{className:zs+"-description vjs-control-text",id:n.el().getAttribute("aria-describedby")})
Vr(n.descEl_,n.description())
n.el_.appendChild(n.descEl_)
n.el_.appendChild(n.contentEl_)
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})}
i.dispose=function(){this.contentEl_=null
this.descEl_=null
this.previouslyActiveEl_=null
e.prototype.dispose.call(this)}
i.buildCSSClass=function(){return zs+" vjs-hidden "+e.prototype.buildCSSClass.call(this)}
i.label=function(){return this.localize(this.options_.label||"Modal Window")}
i.description=function(){var e=this.options_.description||this.localize("This is a modal window.")
this.closeable()&&(e+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button."))
return e}
i.open=function(){if(!this.opened_){var e=this.player()
this.trigger("beforemodalopen")
this.opened_=!0;(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill()
this.wasPlaying_=!e.paused()
this.options_.pauseOnOpen&&this.wasPlaying_&&e.pause()
this.on("keydown",this.handleKeyDown)
this.hadControls_=e.controls()
e.controls(!1)
this.show()
this.conditionalFocus_()
this.el().setAttribute("aria-hidden","false")
this.trigger("modalopen")
this.hasBeenOpened_=!0}}
i.opened=function(e){"boolean"==typeof e&&this[e?"open":"close"]()
return this.opened_}
i.close=function(){if(this.opened_){var e=this.player()
this.trigger("beforemodalclose")
this.opened_=!1
this.wasPlaying_&&this.options_.pauseOnOpen&&e.play()
this.off("keydown",this.handleKeyDown)
this.hadControls_&&e.controls(!0)
this.hide()
this.el().setAttribute("aria-hidden","true")
this.trigger("modalclose")
this.conditionalBlur_()
this.options_.temporary&&this.dispose()}}
i.closeable=function(e){if("boolean"==typeof e){var t=this.closeable_=!!e,i=this.getChild("closeButton")
if(t&&!i){var n=this.contentEl_
this.contentEl_=this.el_
i=this.addChild("closeButton",{controlText:"Close Modal Dialog"})
this.contentEl_=n
this.on(i,"close",this.close)}if(!t&&i){this.off(i,"close",this.close)
this.removeChild(i)
i.dispose()}}return this.closeable_}
i.fill=function(){this.fillWith(this.content())}
i.fillWith=function(e){var t=this.contentEl(),i=t.parentNode,n=t.nextSibling
this.trigger("beforemodalfill")
this.hasBeenFilled_=!0
i.removeChild(t)
this.empty()
oa(t,e)
this.trigger("modalfill")
n?i.insertBefore(t,n):i.appendChild(t)
var r=this.getChild("closeButton")
r&&i.appendChild(r.el_)}
i.empty=function(){this.trigger("beforemodalempty")
ra(this.contentEl())
this.trigger("modalempty")}
i.content=function(e){void 0!==e&&(this.content_=e)
return this.content_}
i.conditionalFocus_=function(){var e=R.activeElement,t=this.player_.el_
this.previouslyActiveEl_=null
if(t.contains(e)||t===e){this.previouslyActiveEl_=e
this.focus()}}
i.conditionalBlur_=function(){if(this.previouslyActiveEl_){this.previouslyActiveEl_.focus()
this.previouslyActiveEl_=null}}
i.handleKeyDown=function(e){e.stopPropagation()
if(j.isEventKey(e,"Escape")&&this.closeable()){e.preventDefault()
this.close()}else if(j.isEventKey(e,"Tab")){for(var t,i=this.focusableEls_(),n=this.el_.querySelector(":focus"),r=0;r<i.length;r++)if(n===i[r]){t=r
break}R.activeElement===this.el_&&(t=0)
if(e.shiftKey&&0===t){i[i.length-1].focus()
e.preventDefault()}else if(!e.shiftKey&&t===i.length-1){i[0].focus()
e.preventDefault()}}}
i.focusableEls_=function(){var e=this.el_.querySelectorAll("*")
return Array.prototype.filter.call(e,(function(e){return(e instanceof a.HTMLAnchorElement||e instanceof a.HTMLAreaElement)&&e.hasAttribute("href")||(e instanceof a.HTMLInputElement||e instanceof a.HTMLSelectElement||e instanceof a.HTMLTextAreaElement||e instanceof a.HTMLButtonElement)&&!e.hasAttribute("disabled")||e instanceof a.HTMLIFrameElement||e instanceof a.HTMLObjectElement||e instanceof a.HTMLEmbedElement||e.hasAttribute("tabindex")&&-1!==e.getAttribute("tabindex")||e.hasAttribute("contenteditable")}))}
return t})(as)
Gs.prototype.options_={pauseOnOpen:!0,temporary:!0}
as.registerComponent("ModalDialog",Gs)
var Ks=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t=[]);(i=e.call(this)||this).tracks_=[]
Object.defineProperty(M(i),"length",{get:function(){return this.tracks_.length}})
for(var n=0;n<t.length;n++)i.addTrack(t[n])
return i}var i=t.prototype
i.addTrack=function(e){var t=this,i=this.tracks_.length
""+i in this||Object.defineProperty(this,i,{get:function(){return this.tracks_[i]}})
if(-1===this.tracks_.indexOf(e)){this.tracks_.push(e)
this.trigger({track:e,type:"addtrack",target:this})}e.labelchange_=function(){t.trigger({track:e,type:"labelchange",target:t})}
Va(e)&&e.addEventListener("labelchange",e.labelchange_)}
i.removeTrack=function(e){for(var t,i=0,n=this.length;i<n;i++)if(this[i]===e){(t=this[i]).off&&t.off()
this.tracks_.splice(i,1)
break}t&&this.trigger({track:t,type:"removetrack",target:this})}
i.getTrackById=function(e){for(var t=null,i=0,n=this.length;i<n;i++){var r=this[i]
if(r.id===e){t=r
break}}return t}
return t})(Fa)
Ks.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack",labelchange:"labelchange"}
for(var Xs in Ks.prototype.allowedEvents_)Ks.prototype["on"+Xs]=null
var Ys=function(e,t){for(var i=0;i<e.length;i++)Object.keys(e[i]).length&&t.id!==e[i].id&&(e[i].enabled=!1)},Qs=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t=[])
for(var n=t.length-1;n>=0;n--)if(t[n].enabled){Ys(t,t[n])
break}(i=e.call(this,t)||this).changing_=!1
return i}var i=t.prototype
i.addTrack=function(t){var i=this
t.enabled&&Ys(this,t)
e.prototype.addTrack.call(this,t)
if(t.addEventListener){t.enabledChange_=function(){if(!i.changing_){i.changing_=!0
Ys(i,t)
i.changing_=!1
i.trigger("change")}}
t.addEventListener("enabledchange",t.enabledChange_)}}
i.removeTrack=function(t){e.prototype.removeTrack.call(this,t)
if(t.removeEventListener&&t.enabledChange_){t.removeEventListener("enabledchange",t.enabledChange_)
t.enabledChange_=null}}
return t})(Ks),$s=function(e,t){for(var i=0;i<e.length;i++)Object.keys(e[i]).length&&t.id!==e[i].id&&(e[i].selected=!1)},Js=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t=[])
for(var n=t.length-1;n>=0;n--)if(t[n].selected){$s(t,t[n])
break}(i=e.call(this,t)||this).changing_=!1
Object.defineProperty(M(i),"selectedIndex",{get:function(){for(var e=0;e<this.length;e++)if(this[e].selected)return e
return-1},set:function(){}})
return i}var i=t.prototype
i.addTrack=function(t){var i=this
t.selected&&$s(this,t)
e.prototype.addTrack.call(this,t)
if(t.addEventListener){t.selectedChange_=function(){if(!i.changing_){i.changing_=!0
$s(i,t)
i.changing_=!1
i.trigger("change")}}
t.addEventListener("selectedchange",t.selectedChange_)}}
i.removeTrack=function(t){e.prototype.removeTrack.call(this,t)
if(t.removeEventListener&&t.selectedChange_){t.removeEventListener("selectedchange",t.selectedChange_)
t.selectedChange_=null}}
return t})(Ks),Zs=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}var i=t.prototype
i.addTrack=function(t){var i=this
e.prototype.addTrack.call(this,t)
this.queueChange_||(this.queueChange_=function(){return i.queueTrigger("change")})
this.triggerSelectedlanguagechange||(this.triggerSelectedlanguagechange_=function(){return i.trigger("selectedlanguagechange")})
t.addEventListener("modechange",this.queueChange_);-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",this.triggerSelectedlanguagechange_)}
i.removeTrack=function(t){e.prototype.removeTrack.call(this,t)
if(t.removeEventListener){this.queueChange_&&t.removeEventListener("modechange",this.queueChange_)
this.selectedlanguagechange_&&t.removeEventListener("modechange",this.triggerSelectedlanguagechange_)}}
return t})(Ks),eo=(function(){function e(e){void 0===e&&(e=[])
this.trackElements_=[]
Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}})
for(var t=0,i=e.length;t<i;t++)this.addTrackElement_(e[t])}var t=e.prototype
t.addTrackElement_=function(e){var t=this.trackElements_.length
""+t in this||Object.defineProperty(this,t,{get:function(){return this.trackElements_[t]}});-1===this.trackElements_.indexOf(e)&&this.trackElements_.push(e)}
t.getTrackElementByTrack_=function(e){for(var t,i=0,n=this.trackElements_.length;i<n;i++)if(e===this.trackElements_[i].track){t=this.trackElements_[i]
break}return t}
t.removeTrackElement_=function(e){for(var t=0,i=this.trackElements_.length;t<i;t++)if(e===this.trackElements_[t]){this.trackElements_[t].track&&"function"==typeof this.trackElements_[t].track.off&&this.trackElements_[t].track.off()
"function"==typeof this.trackElements_[t].off&&this.trackElements_[t].off()
this.trackElements_.splice(t,1)
break}}
return e})(),to=(function(){function e(t){e.prototype.setCues_.call(this,t)
Object.defineProperty(this,"length",{get:function(){return this.length_}})}var t=e.prototype
t.setCues_=function(e){var t=this.length||0,i=0,n=e.length
this.cues_=e
this.length_=e.length
var r=function(e){""+e in this||Object.defineProperty(this,""+e,{get:function(){return this.cues_[e]}})}
if(t<n){i=t
for(;i<n;i++)r.call(this,i)}}
t.getCueById=function(e){for(var t=null,i=0,n=this.length;i<n;i++){var r=this[i]
if(r.id===e){t=r
break}}return t}
return e})(),io={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},no={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},ro={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},ao={disabled:"disabled",hidden:"hidden",showing:"showing"},so=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t={})
i=e.call(this)||this
var n={id:t.id||"vjs_track_"+Ta(),kind:t.kind||"",language:t.language||""},r=t.label||"",a=function(e){Object.defineProperty(M(i),e,{get:function(){return n[e]},set:function(){}})}
for(var s in n)a(s)
Object.defineProperty(M(i),"label",{get:function(){return r},set:function(e){if(e!==r){r=e
this.trigger("labelchange")}}})
return i}return t})(Fa),oo=function(e){var t=["protocol","hostname","port","pathname","search","hash","host"],i=R.createElement("a")
i.href=e
var n,r=""===i.host&&"file:"!==i.protocol
if(r){(n=R.createElement("div")).innerHTML='<a href="'+e+'"></a>'
i=n.firstChild
n.setAttribute("style","display:none; position:absolute;")
R.body.appendChild(n)}for(var s={},o=0;o<t.length;o++)s[t[o]]=i[t[o]]
"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,""))
"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,""))
s.protocol||(s.protocol=a.location.protocol)
r&&R.body.removeChild(n)
return s},lo=function(e){if(!e.match(/^https?:\/\//)){var t=R.createElement("div")
t.innerHTML='<a href="'+e+'">x</a>'
e=t.firstChild.href}return e},uo=function(e){if("string"==typeof e){var t=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e)
if(t)return t.pop().toLowerCase()}return""},co=function(e,t){void 0===t&&(t=a.location)
var i=oo(e)
return(":"===i.protocol?t.protocol:i.protocol)+i.host!==t.protocol+t.host},ho=Object.freeze({__proto__:null,parseUrl:oo,getAbsoluteURL:lo,getFileExtension:uo,isCrossOrigin:co}),po=function(e,t){var i=new a.WebVTT.Parser(a,a.vttjs,a.WebVTT.StringDecoder()),n=[]
i.oncue=function(e){t.addCue(e)}
i.onparsingerror=function(e){n.push(e)}
i.onflush=function(){t.trigger({type:"loadeddata",target:t})}
i.parse(e)
if(n.length>0){a.console&&a.console.groupCollapsed&&a.console.groupCollapsed("Text Track parsing errors for "+t.src)
n.forEach((function(e){return Er.error(e)}))
a.console&&a.console.groupEnd&&a.console.groupEnd()}i.flush()},fo=function(e,t){var i={uri:e},n=co(e)
n&&(i.cors=n)
var r="use-credentials"===t.tech_.crossOrigin()
r&&(i.withCredentials=r)
W(i,Ua(this,(function(e,i,n){if(e)return Er.error(e,i)
t.loaded_=!0
"function"!=typeof a.WebVTT?t.tech_&&t.tech_.any(["vttjsloaded","vttjserror"],(function(e){if("vttjserror"!==e.type)return po(n,t)
Er.error("vttjs failed to load, stopping trying to process "+t.src)})):po(n,t)})))},mo=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t={})
if(!t.tech)throw new Error("A tech was not provided.")
var n=es(t,{kind:ro[t.kind]||"subtitles",language:t.language||t.srclang||""}),r=ao[n.mode]||"disabled",a=n.default
"metadata"!==n.kind&&"chapters"!==n.kind||(r="hidden");(i=e.call(this,n)||this).tech_=n.tech
i.cues_=[]
i.activeCues_=[]
i.preload_=!1!==i.tech_.preloadTextTracks
var s=new to(i.cues_),o=new to(i.activeCues_),l=!1,u=Ua(M(i),(function(){this.activeCues=this.activeCues
if(l){this.trigger("cuechange")
l=!1}}))
"disabled"!==r&&i.tech_.ready((function(){i.tech_.on("timeupdate",u)}),!0)
Object.defineProperties(M(i),{default:{get:function(){return a},set:function(){}},mode:{get:function(){return r},set:function(e){var t=this
if(ao[e]){r=e
this.preload_||"disabled"===r||0!==this.cues.length||fo(this.src,this)
"disabled"!==r?this.tech_.ready((function(){t.tech_.on("timeupdate",u)}),!0):this.tech_.off("timeupdate",u)
this.trigger("modechange")}}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null
if(0===this.cues.length)return o
for(var e=this.tech_.currentTime(),t=[],i=0,n=this.cues.length;i<n;i++){var r=this.cues[i]
r.startTime<=e&&r.endTime>=e?t.push(r):r.startTime===r.endTime&&r.startTime<=e&&r.startTime+.5>=e&&t.push(r)}l=!1
if(t.length!==this.activeCues_.length)l=!0
else for(var a=0;a<t.length;a++)-1===this.activeCues_.indexOf(t[a])&&(l=!0)
this.activeCues_=t
o.setCues_(this.activeCues_)
return o},set:function(){}}})
if(n.src){i.src=n.src
i.preload_||(i.loaded_=!0);(i.preload_||a||"subtitles"!==n.kind&&"captions"!==n.kind)&&fo(i.src,M(i))}else i.loaded_=!0
return i}var i=t.prototype
i.addCue=function(e){var t=e
if(a.vttjs&&!(e instanceof a.vttjs.VTTCue)){t=new a.vttjs.VTTCue(e.startTime,e.endTime,e.text)
for(var i in e)i in t||(t[i]=e[i])
t.id=e.id
t.originalCue_=e}for(var n=this.tech_.textTracks(),r=0;r<n.length;r++)n[r]!==this&&n[r].removeCue(t)
this.cues_.push(t)
this.cues.setCues_(this.cues_)}
i.removeCue=function(e){for(var t=this.cues_.length;t--;){var i=this.cues_[t]
if(i===e||i.originalCue_&&i.originalCue_===e){this.cues_.splice(t,1)
this.cues.setCues_(this.cues_)
break}}}
return t})(so)
mo.prototype.allowedEvents_={cuechange:"cuechange"}
var go=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t={})
var n=es(t,{kind:no[t.kind]||""})
i=e.call(this,n)||this
var r=!1
Object.defineProperty(M(i),"enabled",{get:function(){return r},set:function(e){if("boolean"==typeof e&&e!==r){r=e
this.trigger("enabledchange")}}})
n.enabled&&(i.enabled=n.enabled)
i.loaded_=!0
return i}return t})(so),vo=(function(e){U(t,e)
function t(t){var i
void 0===t&&(t={})
var n=es(t,{kind:io[t.kind]||""})
i=e.call(this,n)||this
var r=!1
Object.defineProperty(M(i),"selected",{get:function(){return r},set:function(e){if("boolean"==typeof e&&e!==r){r=e
this.trigger("selectedchange")}}})
n.selected&&(i.selected=n.selected)
return i}return t})(so),yo=0,_o=2,bo=(function(e){U(t,e)
function t(t){var i,n
void 0===t&&(t={})
i=e.call(this)||this
var r=new mo(t)
i.kind=r.kind
i.src=r.src
i.srclang=r.language
i.label=r.label
i.default=r.default
Object.defineProperties(M(i),{readyState:{get:function(){return n}},track:{get:function(){return r}}})
n=yo
r.addEventListener("loadeddata",(function(){n=_o
i.trigger({type:"load",target:M(i)})}))
return i}return t})(Fa)
bo.prototype.allowedEvents_={load:"load"}
bo.NONE=yo
bo.LOADING=1
bo.LOADED=_o
bo.ERROR=3
var To={audio:{ListClass:Qs,TrackClass:go,capitalName:"Audio"},video:{ListClass:Js,TrackClass:vo,capitalName:"Video"},text:{ListClass:Zs,TrackClass:mo,capitalName:"Text"}}
Object.keys(To).forEach((function(e){To[e].getterName=e+"Tracks"
To[e].privateName=e+"Tracks_"}))
var So={remoteText:{ListClass:Zs,TrackClass:mo,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:eo,TrackClass:bo,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},ko=N({},To,So)
So.names=Object.keys(So)
To.names=Object.keys(To)
ko.names=[].concat(So.names).concat(To.names)
var Co=(function(e){U(t,e)
function t(t,i){var n
void 0===t&&(t={})
void 0===i&&(i=function(){})
t.reportTouchActivity=!1;(n=e.call(this,null,t,i)||this).hasStarted_=!1
n.on("playing",(function(){this.hasStarted_=!0}))
n.on("loadstart",(function(){this.hasStarted_=!1}))
ko.names.forEach((function(e){var i=ko[e]
t&&t[i.getterName]&&(n[i.privateName]=t[i.getterName])}))
n.featuresProgressEvents||n.manualProgressOn()
n.featuresTimeupdateEvents||n.manualTimeUpdatesOn();["Text","Audio","Video"].forEach((function(e){!1===t["native"+e+"Tracks"]&&(n["featuresNative"+e+"Tracks"]=!1)}))
!1===t.nativeCaptions||!1===t.nativeTextTracks?n.featuresNativeTextTracks=!1:!0!==t.nativeCaptions&&!0!==t.nativeTextTracks||(n.featuresNativeTextTracks=!0)
n.featuresNativeTextTracks||n.emulateTextTracks()
n.preloadTextTracks=!1!==t.preloadTextTracks
n.autoRemoteTextTracks_=new ko.text.ListClass
n.initTrackListeners()
t.nativeControlsForTouch||n.emitTapEvents()
n.constructor&&(n.name_=n.constructor.name||"Unknown Tech")
return n}var i=t.prototype
i.triggerSourceset=function(e){var t=this
this.isReady_||this.one("ready",(function(){return t.setTimeout((function(){return t.triggerSourceset(e)}),1)}))
this.trigger({src:e,type:"sourceset"})}
i.manualProgressOn=function(){this.on("durationchange",this.onDurationChange)
this.manualProgress=!0
this.one("ready",this.trackProgress)}
i.manualProgressOff=function(){this.manualProgress=!1
this.stopTrackingProgress()
this.off("durationchange",this.onDurationChange)}
i.trackProgress=function(e){this.stopTrackingProgress()
this.progressInterval=this.setInterval(Ua(this,(function(){var e=this.bufferedPercent()
this.bufferedPercent_!==e&&this.trigger("progress")
this.bufferedPercent_=e
1===e&&this.stopTrackingProgress()})),500)}
i.onDurationChange=function(e){this.duration_=this.duration()}
i.buffered=function(){return xs(0,0)}
i.bufferedPercent=function(){return Os(this.buffered(),this.duration_)}
i.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)}
i.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0
this.on("play",this.trackCurrentTime)
this.on("pause",this.stopTrackingCurrentTime)}
i.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1
this.stopTrackingCurrentTime()
this.off("play",this.trackCurrentTime)
this.off("pause",this.stopTrackingCurrentTime)}
i.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime()
this.currentTimeInterval=this.setInterval((function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})}),250)}
i.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval)
this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})}
i.dispose=function(){this.clearTracks(To.names)
this.manualProgress&&this.manualProgressOff()
this.manualTimeUpdates&&this.manualTimeUpdatesOff()
e.prototype.dispose.call(this)}
i.clearTracks=function(e){var t=this;(e=[].concat(e)).forEach((function(e){for(var i=t[e+"Tracks"]()||[],n=i.length;n--;){var r=i[n]
"text"===e&&t.removeRemoteTextTrack(r)
i.removeTrack(r)}}))}
i.cleanupAutoTextTracks=function(){for(var e=this.autoRemoteTextTracks_||[],t=e.length;t--;){var i=e[t]
this.removeRemoteTextTrack(i)}}
i.reset=function(){}
i.crossOrigin=function(){}
i.setCrossOrigin=function(){}
i.error=function(e){if(void 0!==e){this.error_=new Bs(e)
this.trigger("error")}return this.error_}
i.played=function(){return this.hasStarted_?xs(0,0):xs()}
i.play=function(){}
i.setScrubbing=function(){}
i.scrubbing=function(){}
i.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})}
i.initTrackListeners=function(){var e=this
To.names.forEach((function(t){var i=To[t],n=function(){e.trigger(t+"trackchange")},r=e[i.getterName]()
r.addEventListener("removetrack",n)
r.addEventListener("addtrack",n)
e.on("dispose",(function(){r.removeEventListener("removetrack",n)
r.removeEventListener("addtrack",n)}))}))}
i.addWebVttScript_=function(){var e=this
if(!a.WebVTT)if(R.body.contains(this.el())){if(!this.options_["vtt.js"]&&Lr(Pe)&&Object.keys(Pe).length>0){this.trigger("vttjsloaded")
return}var t=R.createElement("script")
t.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js"
t.onload=function(){e.trigger("vttjsloaded")}
t.onerror=function(){e.trigger("vttjserror")}
this.on("dispose",(function(){t.onload=null
t.onerror=null}))
a.WebVTT=!0
this.el().parentNode.appendChild(t)}else this.ready(this.addWebVttScript_)}
i.emulateTextTracks=function(){var e=this,t=this.textTracks(),i=this.remoteTextTracks(),n=function(e){return t.addTrack(e.track)},r=function(e){return t.removeTrack(e.track)}
i.on("addtrack",n)
i.on("removetrack",r)
this.addWebVttScript_()
var a=function(){return e.trigger("texttrackchange")},s=function(){a()
for(var e=0;e<t.length;e++){var i=t[e]
i.removeEventListener("cuechange",a)
"showing"===i.mode&&i.addEventListener("cuechange",a)}}
s()
t.addEventListener("change",s)
t.addEventListener("addtrack",s)
t.addEventListener("removetrack",s)
this.on("dispose",(function(){i.off("addtrack",n)
i.off("removetrack",r)
t.removeEventListener("change",s)
t.removeEventListener("addtrack",s)
t.removeEventListener("removetrack",s)
for(var e=0;e<t.length;e++){t[e].removeEventListener("cuechange",a)}}))}
i.addTextTrack=function(e,t,i){if(!e)throw new Error("TextTrack kind is required but was not provided")
return (function(e,t,i,n,r){void 0===r&&(r={})
var a=e.textTracks()
r.kind=t
i&&(r.label=i)
n&&(r.language=n)
r.tech=e
var s=new ko.text.TrackClass(r)
a.addTrack(s)
return s})(this,e,t,i)}
i.createRemoteTextTrack=function(e){var t=es(e,{tech:this})
return new So.remoteTextEl.TrackClass(t)}
i.addRemoteTextTrack=function(e,t){var i=this
void 0===e&&(e={})
var n=this.createRemoteTextTrack(e)
if(!0!==t&&!1!==t){Er.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js')
t=!0}this.remoteTextTrackEls().addTrackElement_(n)
this.remoteTextTracks().addTrack(n.track)
!0!==t&&this.ready((function(){return i.autoRemoteTextTracks_.addTrack(n.track)}))
return n}
i.removeRemoteTextTrack=function(e){var t=this.remoteTextTrackEls().getTrackElementByTrack_(e)
this.remoteTextTrackEls().removeTrackElement_(t)
this.remoteTextTracks().removeTrack(e)
this.autoRemoteTextTracks_.removeTrack(e)}
i.getVideoPlaybackQuality=function(){return{}}
i.requestPictureInPicture=function(){var e=this.options_.Promise||a.Promise
if(e)return e.reject()}
i.disablePictureInPicture=function(){return!0}
i.setDisablePictureInPicture=function(){}
i.setPoster=function(){}
i.playsinline=function(){}
i.setPlaysinline=function(){}
i.overrideNativeAudioTracks=function(){}
i.overrideNativeVideoTracks=function(){}
i.canPlayType=function(){return""}
t.canPlayType=function(){return""}
t.canPlaySource=function(e,i){return t.canPlayType(e.type)}
t.isTech=function(e){return e.prototype instanceof t||e instanceof t||e===t}
t.registerTech=function(e,i){t.techs_||(t.techs_={})
if(!t.isTech(i))throw new Error("Tech "+e+" must be a Tech")
if(!t.canPlayType)throw new Error("Techs must have a static canPlayType method on them")
if(!t.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them")
e=Za(e)
t.techs_[e]=i
t.techs_[Ja(e)]=i
"Tech"!==e&&t.defaultTechOrder_.push(e)
return i}
t.getTech=function(e){if(e){if(t.techs_&&t.techs_[e])return t.techs_[e]
e=Za(e)
if(a&&a.videojs&&a.videojs[e]){Er.warn("The "+e+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)")
return a.videojs[e]}}}
return t})(as)
ko.names.forEach((function(e){var t=ko[e]
Co.prototype[t.getterName]=function(){this[t.privateName]=this[t.privateName]||new t.ListClass
return this[t.privateName]}}))
Co.prototype.featuresVolumeControl=!0
Co.prototype.featuresMuteControl=!0
Co.prototype.featuresFullscreenResize=!1
Co.prototype.featuresPlaybackRate=!1
Co.prototype.featuresProgressEvents=!1
Co.prototype.featuresSourceset=!1
Co.prototype.featuresTimeupdateEvents=!1
Co.prototype.featuresNativeTextTracks=!1
Co.withSourceHandlers=function(e){e.registerSourceHandler=function(t,i){var n=e.sourceHandlers
n||(n=e.sourceHandlers=[])
void 0===i&&(i=n.length)
n.splice(i,0,t)}
e.canPlayType=function(t){for(var i,n=e.sourceHandlers||[],r=0;r<n.length;r++)if(i=n[r].canPlayType(t))return i
return""}
e.selectSourceHandler=function(t,i){for(var n=e.sourceHandlers||[],r=0;r<n.length;r++)if(n[r].canHandleSource(t,i))return n[r]
return null}
e.canPlaySource=function(t,i){var n=e.selectSourceHandler(t,i)
return n?n.canHandleSource(t,i):""};["seekable","seeking","duration"].forEach((function(e){var t=this[e]
"function"==typeof t&&(this[e]=function(){return this.sourceHandler_&&this.sourceHandler_[e]?this.sourceHandler_[e].apply(this.sourceHandler_,arguments):t.apply(this,arguments)})}),e.prototype)
e.prototype.setSource=function(t){var i=e.selectSourceHandler(t,this.options_)
i||(e.nativeSourceHandler?i=e.nativeSourceHandler:Er.error("No source handler found for the current source."))
this.disposeSourceHandler()
this.off("dispose",this.disposeSourceHandler)
i!==e.nativeSourceHandler&&(this.currentSource_=t)
this.sourceHandler_=i.handleSource(t,this,this.options_)
this.one("dispose",this.disposeSourceHandler)}
e.prototype.disposeSourceHandler=function(){if(this.currentSource_){this.clearTracks(["audio","video"])
this.currentSource_=null}this.cleanupAutoTextTracks()
if(this.sourceHandler_){this.sourceHandler_.dispose&&this.sourceHandler_.dispose()
this.sourceHandler_=null}}}
as.registerComponent("Tech",Co)
Co.registerTech("Tech",Co)
Co.defaultTechOrder_=[]
var Eo={},wo={},Io={}
function Po(e,t,i){e.setTimeout((function(){return (function e(t,i,n,r,a,s){void 0===t&&(t={})
void 0===i&&(i=[])
void 0===a&&(a=[])
void 0===s&&(s=!1)
var o=i,l=o[0],u=o.slice(1)
if("string"==typeof l)e(t,Eo[l],n,r,a,s)
else if(l){var c=(function(e,t){var i=wo[e.id()],n=null
if(null==i){n=t(e)
wo[e.id()]=[[t,n]]
return n}for(var r=0;r<i.length;r++){var a=i[r],s=a[0],o=a[1]
s===t&&(n=o)}if(null===n){n=t(e)
i.push([t,n])}return n})(r,l)
if(!c.setSource){a.push(c)
return e(t,u,n,r,a,s)}c.setSource(xr({},t),(function(i,o){if(i)return e(t,u,n,r,a,s)
a.push(c)
e(o,t.type===o.type?u:Eo[o.type],n,r,a,s)}))}else u.length?e(t,u,n,r,a,s):s?n(t,a):e(t,Eo["*"],n,r,a,!0)})(t,Eo[t.type],i,e)}),1)}function Ao(e,t,i,n){void 0===n&&(n=null)
var r="call"+Za(i),a=e.reduce(Do(r),n),s=a===Io,o=s?null:t[i](a);((function(e,t,i,n){for(var r=e.length-1;r>=0;r--){var a=e[r]
a[t]&&a[t](n,i)}}))(e,i,o,s)
return o}var xo={buffered:1,currentTime:1,duration:1,muted:1,played:1,paused:1,seekable:1,volume:1},Oo={setCurrentTime:1,setMuted:1,setVolume:1},Lo={play:1,pause:1}
function Do(e){return function(t,i){return t===Io?Io:i[e]?i[e](t):t}}var Ro={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",m4a:"audio/mp4",mp3:"audio/mpeg",aac:"audio/aac",caf:"audio/x-caf",flac:"audio/flac",oga:"audio/ogg",wav:"audio/wav",m3u8:"application/x-mpegURL",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",png:"image/png",svg:"image/svg+xml",webp:"image/webp"},No=function(e){void 0===e&&(e="")
var t=uo(e)
return Ro[t.toLowerCase()]||""}
function Mo(e){if(!e.type){var t=No(e.src)
t&&(e.type=t)}return e}var Uo=(function(e){U(t,e)
function t(t,i,n){var r,a=es({createEl:!1},i)
r=e.call(this,t,a,n)||this
if(i.playerOptions.sources&&0!==i.playerOptions.sources.length)t.src(i.playerOptions.sources)
else for(var s=0,o=i.playerOptions.techOrder;s<o.length;s++){var l=Za(o[s]),u=Co.getTech(l)
l||(u=as.getComponent(l))
if(u&&u.isSupported()){t.loadTech_(l)
break}}return r}return t})(as)
as.registerComponent("MediaLoader",Uo)
var Bo=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).emitTapEvents()
n.enable()
return n}var i=t.prototype
i.createEl=function(t,i,n){void 0===t&&(t="div")
void 0===i&&(i={})
void 0===n&&(n={})
i=xr({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},i)
"button"===t&&Er.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead.")
n=xr({role:"button"},n)
this.tabIndex_=i.tabIndex
var r=e.prototype.createEl.call(this,t,i,n)
this.createControlTextEl(r)
return r}
i.dispose=function(){this.controlTextEl_=null
e.prototype.dispose.call(this)}
i.createControlTextEl=function(e){this.controlTextEl_=Fr("span",{className:"vjs-control-text"},{"aria-live":"polite"})
e&&e.appendChild(this.controlTextEl_)
this.controlText(this.controlText_,e)
return this.controlTextEl_}
i.controlText=function(e,t){void 0===t&&(t=this.el())
if(void 0===e)return this.controlText_||"Need Text"
var i=this.localize(e)
this.controlText_=e
Vr(this.controlTextEl_,i)
this.nonIconControl||t.setAttribute("title",i)}
i.buildCSSClass=function(){return"vjs-control vjs-button "+e.prototype.buildCSSClass.call(this)}
i.enable=function(){if(!this.enabled_){this.enabled_=!0
this.removeClass("vjs-disabled")
this.el_.setAttribute("aria-disabled","false")
void 0!==this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_)
this.on(["tap","click"],this.handleClick)
this.on("keydown",this.handleKeyDown)}}
i.disable=function(){this.enabled_=!1
this.addClass("vjs-disabled")
this.el_.setAttribute("aria-disabled","true")
void 0!==this.tabIndex_&&this.el_.removeAttribute("tabIndex")
this.off("mouseover",this.handleMouseOver)
this.off("mouseout",this.handleMouseOut)
this.off(["tap","click"],this.handleClick)
this.off("keydown",this.handleKeyDown)}
i.handleLanguagechange=function(){this.controlText(this.controlText_)}
i.handleClick=function(e){this.options_.clickHandler&&this.options_.clickHandler.call(this,arguments)}
i.handleKeyDown=function(t){if(j.isEventKey(t,"Space")||j.isEventKey(t,"Enter")){t.preventDefault()
t.stopPropagation()
this.trigger("click")}else e.prototype.handleKeyDown.call(this,t)}
return t})(as)
as.registerComponent("ClickableComponent",Bo)
var jo=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).update()
t.on("posterchange",Ua(M(n),n.update))
return n}var i=t.prototype
i.dispose=function(){this.player().off("posterchange",this.update)
e.prototype.dispose.call(this)}
i.createEl=function(){return Fr("div",{className:"vjs-poster",tabIndex:-1})}
i.update=function(e){var t=this.player().poster()
this.setSrc(t)
t?this.show():this.hide()}
i.setSrc=function(e){var t=""
e&&(t='url("'+e+'")')
this.el_.style.backgroundImage=t}
i.handleClick=function(e){if(this.player_.controls()){var t=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0
!this.player_.tech(!0)||(_s||gs)&&t||this.player_.tech(!0).focus()
this.player_.paused()?Vs(this.player_.play()):this.player_.pause()}}
return t})(Bo)
as.registerComponent("PosterImage",jo)
var Fo={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'}
function Vo(e,t){var i
if(4===e.length)i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]
else{if(7!==e.length)throw new Error("Invalid color code provided, "+e+"; must be formatted as e.g. #f0e or #f604e2.")
i=e.slice(1)}return"rgba("+parseInt(i.slice(0,2),16)+","+parseInt(i.slice(2,4),16)+","+parseInt(i.slice(4,6),16)+","+t+")"}function Ho(e,t,i){try{e.style[t]=i}catch(Kg){return}}var qo=(function(e){U(t,e)
function t(t,i,n){var r
r=e.call(this,t,i,n)||this
var s=Ua(M(r),r.updateDisplay)
t.on("loadstart",Ua(M(r),r.toggleDisplay))
t.on("texttrackchange",s)
t.on("loadedmetadata",Ua(M(r),r.preselectTrack))
t.ready(Ua(M(r),(function(){if(t.tech_&&t.tech_.featuresNativeTextTracks)this.hide()
else{t.on("fullscreenchange",s)
t.on("playerresize",s)
a.addEventListener("orientationchange",s)
t.on("dispose",(function(){return a.removeEventListener("orientationchange",s)}))
for(var e=this.options_.playerOptions.tracks||[],i=0;i<e.length;i++)this.player_.addRemoteTextTrack(e[i],!0)
this.preselectTrack()}})))
return r}var i=t.prototype
i.preselectTrack=function(){for(var e,t,i,n={captions:1,subtitles:1},r=this.player_.textTracks(),a=this.player_.cache_.selectedLanguage,s=0;s<r.length;s++){var o=r[s]
if(a&&a.enabled&&a.language&&a.language===o.language&&o.kind in n)o.kind===a.kind?i=o:i||(i=o)
else if(a&&!a.enabled){i=null
e=null
t=null}else o.default&&("descriptions"!==o.kind||e?o.kind in n&&!t&&(t=o):e=o)}i?i.mode="showing":t?t.mode="showing":e&&(e.mode="showing")}
i.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()}
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})}
i.clearDisplay=function(){"function"==typeof a.WebVTT&&a.WebVTT.processCues(a,[],this.el_)}
i.updateDisplay=function(){var e=this.player_.textTracks(),t=this.options_.allowMultipleShowingTracks
this.clearDisplay()
if(t){for(var i=[],n=0;n<e.length;++n){var r=e[n]
"showing"===r.mode&&i.push(r)}this.updateForTrack(i)}else{for(var a=null,s=null,o=e.length;o--;){var l=e[o]
"showing"===l.mode&&("descriptions"===l.kind?a=l:s=l)}if(s){"off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off")
this.updateForTrack(s)}else if(a){"assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive")
this.updateForTrack(a)}}}
i.updateDisplayState=function(e){for(var t=this.player_.textTrackSettings.getValues(),i=e.activeCues,n=i.length;n--;){var r=i[n]
if(r){var s=r.displayState
t.color&&(s.firstChild.style.color=t.color)
t.textOpacity&&Ho(s.firstChild,"color",Vo(t.color||"#fff",t.textOpacity))
t.backgroundColor&&(s.firstChild.style.backgroundColor=t.backgroundColor)
t.backgroundOpacity&&Ho(s.firstChild,"backgroundColor",Vo(t.backgroundColor||"#000",t.backgroundOpacity))
t.windowColor&&(t.windowOpacity?Ho(s,"backgroundColor",Vo(t.windowColor,t.windowOpacity)):s.style.backgroundColor=t.windowColor)
t.edgeStyle&&("dropshadow"===t.edgeStyle?s.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===t.edgeStyle?s.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===t.edgeStyle?s.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===t.edgeStyle&&(s.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"))
if(t.fontPercent&&1!==t.fontPercent){var o=a.parseFloat(s.style.fontSize)
s.style.fontSize=o*t.fontPercent+"px"
s.style.height="auto"
s.style.top="auto"}t.fontFamily&&"default"!==t.fontFamily&&("small-caps"===t.fontFamily?s.firstChild.style.fontVariant="small-caps":s.firstChild.style.fontFamily=Fo[t.fontFamily])}}}
i.updateForTrack=function(e){Array.isArray(e)||(e=[e])
if("function"==typeof a.WebVTT&&!e.every((function(e){return!e.activeCues}))){for(var t=[],i=0;i<e.length;++i)for(var n=e[i],r=0;r<n.activeCues.length;++r)t.push(n.activeCues[r])
a.WebVTT.processCues(a,t,this.el_)
for(var s=0;s<e.length;++s){for(var o=e[s],l=0;l<o.activeCues.length;++l){var u=o.activeCues[l].displayState
Wr(u,"vjs-text-track-cue")
Wr(u,"vjs-text-track-cue-"+(o.language?o.language:s))}this.player_.textTrackSettings&&this.updateDisplayState(o)}}}
return t})(as)
as.registerComponent("TextTrackDisplay",qo)
var Wo=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}t.prototype.createEl=function(){var t=this.player_.isAudio(),i=this.localize(t?"Audio Player":"Video Player"),n=Fr("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[i])}),r=e.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})
r.appendChild(n)
return r}
return t})(as)
as.registerComponent("LoadingSpinner",Wo)
var zo=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}var i=t.prototype
i.createEl=function(e,t,i){void 0===t&&(t={})
void 0===i&&(i={})
"button"
t=xr({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},t)
i=xr({type:"button"},i)
var n=as.prototype.createEl.call(this,"button",t,i)
this.createControlTextEl(n)
return n}
i.addChild=function(e,t){void 0===t&&(t={})
var i=this.constructor.name
Er.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead.")
return as.prototype.addChild.call(this,e,t)}
i.enable=function(){e.prototype.enable.call(this)
this.el_.removeAttribute("disabled")}
i.disable=function(){e.prototype.disable.call(this)
this.el_.setAttribute("disabled","disabled")}
i.handleKeyDown=function(t){j.isEventKey(t,"Space")||j.isEventKey(t,"Enter")?t.stopPropagation():e.prototype.handleKeyDown.call(this,t)}
return t})(Bo)
as.registerComponent("Button",zo)
var Go=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).mouseused_=!1
n.on("mousedown",n.handleMouseDown)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-big-play-button"}
i.handleClick=function(e){var t=this.player_.play()
if(this.mouseused_&&e.clientX&&e.clientY){var i=this.player_.usingPlugin("eme")&&this.player_.eme.sessions&&this.player_.eme.sessions.length>0
Vs(t)
!this.player_.tech(!0)||(_s||gs)&&i||this.player_.tech(!0).focus()}else{var n=this.player_.getChild("controlBar"),r=n&&n.getChild("playToggle")
if(r){var a=function(){return r.focus()}
Fs(t)?t.then(a,(function(){})):this.setTimeout(a,1)}else this.player_.tech(!0).focus()}}
i.handleKeyDown=function(t){this.mouseused_=!1
e.prototype.handleKeyDown.call(this,t)}
i.handleMouseDown=function(e){this.mouseused_=!0}
return t})(zo)
Go.prototype.controlText_="Play Video"
as.registerComponent("BigPlayButton",Go)
var Ko=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).controlText(i&&i.controlText||n.localize("Close"))
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-close-button "+e.prototype.buildCSSClass.call(this)}
i.handleClick=function(e){this.trigger({type:"close",bubbles:!1})}
i.handleKeyDown=function(t){if(j.isEventKey(t,"Esc")){t.preventDefault()
t.stopPropagation()
this.trigger("click")}else e.prototype.handleKeyDown.call(this,t)}
return t})(zo)
as.registerComponent("CloseButton",Ko)
var Xo=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={})
n=e.call(this,t,i)||this
i.replay=void 0===i.replay||i.replay
n.on(t,"play",n.handlePlay)
n.on(t,"pause",n.handlePause)
i.replay&&n.on(t,"ended",n.handleEnded)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-play-control "+e.prototype.buildCSSClass.call(this)}
i.handleClick=function(e){this.player_.paused()?this.player_.play():this.player_.pause()}
i.handleSeeked=function(e){this.removeClass("vjs-ended")
this.player_.paused()?this.handlePause(e):this.handlePlay(e)}
i.handlePlay=function(e){this.removeClass("vjs-ended")
this.removeClass("vjs-paused")
this.addClass("vjs-playing")
this.controlText("Pause")}
i.handlePause=function(e){this.removeClass("vjs-playing")
this.addClass("vjs-paused")
this.controlText("Play")}
i.handleEnded=function(e){this.removeClass("vjs-playing")
this.addClass("vjs-ended")
this.controlText("Replay")
this.one(this.player_,"seeked",this.handleSeeked)}
return t})(zo)
Xo.prototype.controlText_="Play"
as.registerComponent("PlayToggle",Xo)
var Yo=function(e,t){e=e<0?0:e
var i=Math.floor(e%60),n=Math.floor(e/60%60),r=Math.floor(e/3600),a=Math.floor(t/60%60),s=Math.floor(t/3600);(isNaN(e)||e===1/0)&&(r=n=i="-")
return(r=r>0||s>0?r+":":"")+(n=((r||a>=10)&&n<10?"0"+n:n)+":")+(i=i<10?"0"+i:i)},Qo=Yo
function $o(e,t){void 0===t&&(t=e)
return Qo(e,t)}var Jo=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,["timeupdate","ended"],n.updateContent)
n.updateTextNode_()
return n}var i=t.prototype
i.createEl=function(){var t=this.buildCSSClass(),i=e.prototype.createEl.call(this,"div",{className:t+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text" role="presentation">'+this.localize(this.labelText_)+"??</span>"})
this.contentEl_=Fr("span",{className:t+"-display"},{"aria-live":"off",role:"presentation"})
i.appendChild(this.contentEl_)
return i}
i.dispose=function(){this.contentEl_=null
this.textNode_=null
e.prototype.dispose.call(this)}
i.updateTextNode_=function(e){var t=this
void 0===e&&(e=0)
e=$o(e)
if(this.formattedTime_!==e){this.formattedTime_=e
this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_",(function(){if(t.contentEl_){var e=t.textNode_
t.textNode_=R.createTextNode(t.formattedTime_)
t.textNode_&&(e?t.contentEl_.replaceChild(t.textNode_,e):t.contentEl_.appendChild(t.textNode_))}}))}}
i.updateContent=function(e){}
return t})(as)
Jo.prototype.labelText_="Time"
Jo.prototype.controlText_="Time"
as.registerComponent("TimeDisplay",Jo)
var Zo=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-current-time"}
i.updateContent=function(e){var t
t=this.player_.ended()?this.player_.duration():this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()
this.updateTextNode_(t)}
return t})(Jo)
Zo.prototype.labelText_="Current Time"
Zo.prototype.controlText_="Current Time"
as.registerComponent("CurrentTimeDisplay",Zo)
var el=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,"durationchange",n.updateContent)
n.on(t,"loadstart",n.updateContent)
n.on(t,"loadedmetadata",n.updateContent)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-duration"}
i.updateContent=function(e){var t=this.player_.duration()
this.updateTextNode_(t)}
return t})(Jo)
el.prototype.labelText_="Duration"
el.prototype.controlText_="Duration"
as.registerComponent("DurationDisplay",el)
var tl=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"},{"aria-hidden":!0})}
return t})(as)
as.registerComponent("TimeDivider",tl)
var il=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,"durationchange",n.updateContent)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-remaining-time"}
i.createEl=function(){var t=e.prototype.createEl.call(this)
t.insertBefore(Fr("span",{},{"aria-hidden":!0},"-"),this.contentEl_)
return t}
i.updateContent=function(e){if("number"==typeof this.player_.duration()){var t
t=this.player_.ended()?0:this.player_.remainingTimeDisplay?this.player_.remainingTimeDisplay():this.player_.remainingTime()
this.updateTextNode_(t)}}
return t})(Jo)
il.prototype.labelText_="Remaining Time"
il.prototype.controlText_="Remaining Time"
as.registerComponent("RemainingTimeDisplay",il)
var nl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).updateShowing()
n.on(n.player(),"durationchange",n.updateShowing)
return n}var i=t.prototype
i.createEl=function(){var t=e.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"})
this.contentEl_=Fr("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"??</span>"+this.localize("LIVE")},{"aria-live":"off"})
t.appendChild(this.contentEl_)
return t}
i.dispose=function(){this.contentEl_=null
e.prototype.dispose.call(this)}
i.updateShowing=function(e){this.player().duration()===1/0?this.show():this.hide()}
return t})(as)
as.registerComponent("LiveDisplay",nl)
var rl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).updateLiveEdgeStatus()
n.player_.liveTracker&&n.on(n.player_.liveTracker,"liveedgechange",n.updateLiveEdgeStatus)
return n}var i=t.prototype
i.createEl=function(){var t=e.prototype.createEl.call(this,"button",{className:"vjs-seek-to-live-control vjs-control"})
this.textEl_=Fr("span",{className:"vjs-seek-to-live-text",innerHTML:this.localize("LIVE")},{"aria-hidden":"true"})
t.appendChild(this.textEl_)
return t}
i.updateLiveEdgeStatus=function(){if(!this.player_.liveTracker||this.player_.liveTracker.atLiveEdge()){this.setAttribute("aria-disabled",!0)
this.addClass("vjs-at-live-edge")
this.controlText("Seek to live, currently playing live")}else{this.setAttribute("aria-disabled",!1)
this.removeClass("vjs-at-live-edge")
this.controlText("Seek to live, currently behind live")}}
i.handleClick=function(){this.player_.liveTracker.seekToLiveEdge()}
i.dispose=function(){this.player_.liveTracker&&this.off(this.player_.liveTracker,"liveedgechange",this.updateLiveEdgeStatus)
this.textEl_=null
e.prototype.dispose.call(this)}
return t})(zo)
rl.prototype.controlText_="Seek to live, currently playing live"
as.registerComponent("SeekToLive",rl)
var al=function(e,t,i){e=Number(e)
return Math.min(i,Math.max(t,isNaN(e)?t:e))},sl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).bar=n.getChild(n.options_.barName)
n.vertical(!!n.options_.vertical)
n.enable()
return n}var i=t.prototype
i.enabled=function(){return this.enabled_}
i.enable=function(){if(!this.enabled()){this.on("mousedown",this.handleMouseDown)
this.on("touchstart",this.handleMouseDown)
this.on("keydown",this.handleKeyDown)
this.on("click",this.handleClick)
this.on(this.player_,"controlsvisible",this.update)
this.playerEvent&&this.on(this.player_,this.playerEvent,this.update)
this.removeClass("disabled")
this.setAttribute("tabindex",0)
this.enabled_=!0}}
i.disable=function(){if(this.enabled()){var e=this.bar.el_.ownerDocument
this.off("mousedown",this.handleMouseDown)
this.off("touchstart",this.handleMouseDown)
this.off("keydown",this.handleKeyDown)
this.off("click",this.handleClick)
this.off(this.player_,"controlsvisible",this.update)
this.off(e,"mousemove",this.handleMouseMove)
this.off(e,"mouseup",this.handleMouseUp)
this.off(e,"touchmove",this.handleMouseMove)
this.off(e,"touchend",this.handleMouseUp)
this.removeAttribute("tabindex")
this.addClass("disabled")
this.playerEvent&&this.off(this.player_,this.playerEvent,this.update)
this.enabled_=!1}}
i.createEl=function(t,i,n){void 0===i&&(i={})
void 0===n&&(n={})
i.className=i.className+" vjs-slider"
i=xr({tabIndex:0},i)
n=xr({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},n)
return e.prototype.createEl.call(this,t,i,n)}
i.handleMouseDown=function(e){var t=this.bar.el_.ownerDocument
"mousedown"===e.type&&e.preventDefault()
"touchstart"!==e.type||vs||e.preventDefault()
Jr()
this.addClass("vjs-sliding")
this.trigger("slideractive")
this.on(t,"mousemove",this.handleMouseMove)
this.on(t,"mouseup",this.handleMouseUp)
this.on(t,"touchmove",this.handleMouseMove)
this.on(t,"touchend",this.handleMouseUp)
this.handleMouseMove(e)}
i.handleMouseMove=function(e){}
i.handleMouseUp=function(){var e=this.bar.el_.ownerDocument
Zr()
this.removeClass("vjs-sliding")
this.trigger("sliderinactive")
this.off(e,"mousemove",this.handleMouseMove)
this.off(e,"mouseup",this.handleMouseUp)
this.off(e,"touchmove",this.handleMouseMove)
this.off(e,"touchend",this.handleMouseUp)
this.update()}
i.update=function(){var e=this
if(this.el_&&this.bar){var t=this.getProgress()
if(t===this.progress_)return t
this.progress_=t
this.requestNamedAnimationFrame("Slider#update",(function(){var i=e.vertical()?"height":"width"
e.bar.el().style[i]=(100*t).toFixed(2)+"%"}))
return t}}
i.getProgress=function(){return Number(al(this.getPercent(),0,1).toFixed(4))}
i.calculateDistance=function(e){var t=ia(this.el_,e)
return this.vertical()?t.y:t.x}
i.handleKeyDown=function(t){if(j.isEventKey(t,"Left")||j.isEventKey(t,"Down")){t.preventDefault()
t.stopPropagation()
this.stepBack()}else if(j.isEventKey(t,"Right")||j.isEventKey(t,"Up")){t.preventDefault()
t.stopPropagation()
this.stepForward()}else e.prototype.handleKeyDown.call(this,t)}
i.handleClick=function(e){e.stopPropagation()
e.preventDefault()}
i.vertical=function(e){if(void 0===e)return this.vertical_||!1
this.vertical_=!!e
this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")}
return t})(as)
as.registerComponent("Slider",sl)
var ol=function(e,t){return al(e/t*100,0,100).toFixed(2)+"%"},ll=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).partEls_=[]
n.on(t,"progress",n.update)
return n}var i=t.prototype
i.createEl=function(){var t=e.prototype.createEl.call(this,"div",{className:"vjs-load-progress"}),i=Fr("span",{className:"vjs-control-text"}),n=Fr("span",{textContent:this.localize("Loaded")}),r=R.createTextNode(": ")
this.percentageEl_=Fr("span",{className:"vjs-control-text-loaded-percentage",textContent:"0%"})
t.appendChild(i)
i.appendChild(n)
i.appendChild(r)
i.appendChild(this.percentageEl_)
return t}
i.dispose=function(){this.partEls_=null
this.percentageEl_=null
e.prototype.dispose.call(this)}
i.update=function(e){var t=this
this.requestNamedAnimationFrame("LoadProgressBar#update",(function(){var e=t.player_.liveTracker,i=t.player_.buffered(),n=e&&e.isLive()?e.seekableEnd():t.player_.duration(),r=t.player_.bufferedEnd(),a=t.partEls_,s=ol(r,n)
if(t.percent_!==s){t.el_.style.width=s
Vr(t.percentageEl_,s)
t.percent_=s}for(var o=0;o<i.length;o++){var l=i.start(o),u=i.end(o),c=a[o]
if(!c){c=t.el_.appendChild(Fr())
a[o]=c}if(c.dataset.start!==l||c.dataset.end!==u){c.dataset.start=l
c.dataset.end=u
c.style.left=ol(l,r)
c.style.width=ol(u-l,r)}}for(var d=a.length;d>i.length;d--)t.el_.removeChild(a[d-1])
a.length=i.length}))}
return t})(as)
as.registerComponent("LoadProgressBar",ll)
var ul=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).update=Ba(Ua(M(n),n.update),Ma)
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"},{"aria-hidden":"true"})}
i.update=function(e,t,i){var n=ta(this.el_),r=ea(this.player_.el()),a=e.width*t
if(r&&n){var s=e.left-r.left+a,o=e.width-a+(r.right-e.right),l=n.width/2
s<l?l+=l-s:o<l&&(l=o)
l<0?l=0:l>n.width&&(l=n.width)
this.el_.style.right="-"+l+"px"
this.write(i)}}
i.write=function(e){Vr(this.el_,e)}
i.updateTime=function(e,t,i,n){var r=this
this.requestNamedAnimationFrame("TimeTooltip#updateTime",(function(){var a,s=r.player_.duration()
if(r.player_.liveTracker&&r.player_.liveTracker.isLive()){var o=r.player_.liveTracker.liveWindow(),l=o-t*o
a=(l<1?"":"-")+$o(l,o)}else a=$o(i,s)
r.update(e,t,a)
n&&n()}))}
return t})(as)
as.registerComponent("TimeTooltip",ul)
var cl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).update=Ba(Ua(M(n),n.update),Ma)
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar"},{"aria-hidden":"true"})}
i.update=function(e,t){var i=this.getChild("timeTooltip")
if(i){var n=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()
i.updateTime(e,t,n)}}
return t})(as)
cl.prototype.options_={children:[]}
Es||hs||cl.prototype.options_.children.push("timeTooltip")
as.registerComponent("PlayProgressBar",cl)
var dl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).update=Ba(Ua(M(n),n.update),Ma)
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})}
i.update=function(e,t){var i=this,n=t*this.player_.duration()
this.getChild("timeTooltip").updateTime(e,t,n,(function(){i.el_.style.left=e.width*t+"px"}))}
return t})(as)
dl.prototype.options_={children:["timeTooltip"]}
as.registerComponent("MouseTimeDisplay",dl)
var hl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).setEventHandlers_()
return n}var i=t.prototype
i.setEventHandlers_=function(){this.update_=Ua(this,this.update)
this.update=Ba(this.update_,Ma)
this.on(this.player_,["ended","durationchange","timeupdate"],this.update)
this.player_.liveTracker&&this.on(this.player_.liveTracker,"liveedgechange",this.update)
this.updateInterval=null
this.on(this.player_,["playing"],this.enableInterval_)
this.on(this.player_,["ended","pause","waiting"],this.disableInterval_)
"hidden"in R&&"visibilityState"in R&&this.on(R,"visibilitychange",this.toggleVisibility_)}
i.toggleVisibility_=function(e){if(R.hidden)this.disableInterval_(e)
else{this.enableInterval_()
this.update()}}
i.enableInterval_=function(){this.updateInterval||(this.updateInterval=this.setInterval(this.update,Ma))}
i.disableInterval_=function(e){if(!(this.player_.liveTracker&&this.player_.liveTracker.isLive()&&e&&"ended"!==e.type)&&this.updateInterval){this.clearInterval(this.updateInterval)
this.updateInterval=null}}
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})}
i.update=function(t){var i=this,n=e.prototype.update.call(this)
this.requestNamedAnimationFrame("SeekBar#update",(function(){var e=i.player_.ended()?i.player_.duration():i.getCurrentTime_(),t=i.player_.liveTracker,r=i.player_.duration()
t&&t.isLive()&&(r=i.player_.liveTracker.liveCurrentTime())
if(i.percent_!==n){i.el_.setAttribute("aria-valuenow",(100*n).toFixed(2))
i.percent_=n}if(i.currentTime_!==e||i.duration_!==r){i.el_.setAttribute("aria-valuetext",i.localize("progress bar timing: currentTime={1} duration={2}",[$o(e,r),$o(r,r)],"{1} of {2}"))
i.currentTime_=e
i.duration_=r}i.bar&&i.bar.update(ea(i.el()),i.getProgress())}))
return n}
i.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()}
i.getPercent=function(){var e,t=this.getCurrentTime_(),i=this.player_.liveTracker
if(i&&i.isLive()){e=(t-i.seekableStart())/i.liveWindow()
i.atLiveEdge()&&(e=1)}else e=t/this.player_.duration()
return e}
i.handleMouseDown=function(t){if(la(t)){t.stopPropagation()
this.player_.scrubbing(!0)
this.videoWasPlaying=!this.player_.paused()
this.player_.pause()
e.prototype.handleMouseDown.call(this,t)}}
i.handleMouseMove=function(e){if(la(e)){var t,i=this.calculateDistance(e),n=this.player_.liveTracker
if(n&&n.isLive()){if(i>=.99){n.seekToLiveEdge()
return}var r=n.seekableStart(),a=n.liveCurrentTime();(t=r+i*n.liveWindow())>=a&&(t=a)
t<=r&&(t=r+.1)
if(t===1/0)return}else(t=i*this.player_.duration())===this.player_.duration()&&(t-=.1)
this.player_.currentTime(t)}}
i.enable=function(){e.prototype.enable.call(this)
var t=this.getChild("mouseTimeDisplay")
t&&t.show()}
i.disable=function(){e.prototype.disable.call(this)
var t=this.getChild("mouseTimeDisplay")
t&&t.hide()}
i.handleMouseUp=function(t){e.prototype.handleMouseUp.call(this,t)
t&&t.stopPropagation()
this.player_.scrubbing(!1)
this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})
this.videoWasPlaying?Vs(this.player_.play()):this.update_()}
i.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)}
i.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)}
i.handleAction=function(e){this.player_.paused()?this.player_.play():this.player_.pause()}
i.handleKeyDown=function(t){if(j.isEventKey(t,"Space")||j.isEventKey(t,"Enter")){t.preventDefault()
t.stopPropagation()
this.handleAction(t)}else if(j.isEventKey(t,"Home")){t.preventDefault()
t.stopPropagation()
this.player_.currentTime(0)}else if(j.isEventKey(t,"End")){t.preventDefault()
t.stopPropagation()
this.player_.currentTime(this.player_.duration())}else if(/^[0-9]$/.test(j(t))){t.preventDefault()
t.stopPropagation()
var i=10*(j.codes[j(t)]-j.codes[0])/100
this.player_.currentTime(this.player_.duration()*i)}else if(j.isEventKey(t,"PgDn")){t.preventDefault()
t.stopPropagation()
this.player_.currentTime(this.player_.currentTime()-60)}else if(j.isEventKey(t,"PgUp")){t.preventDefault()
t.stopPropagation()
this.player_.currentTime(this.player_.currentTime()+60)}else e.prototype.handleKeyDown.call(this,t)}
i.dispose=function(){this.disableInterval_()
this.off(this.player_,["ended","durationchange","timeupdate"],this.update)
this.player_.liveTracker&&this.on(this.player_.liveTracker,"liveedgechange",this.update)
this.off(this.player_,["playing"],this.enableInterval_)
this.off(this.player_,["ended","pause","waiting"],this.disableInterval_)
"hidden"in R&&"visibilityState"in R&&this.off(R,"visibilitychange",this.toggleVisibility_)
e.prototype.dispose.call(this)}
return t})(sl)
hl.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"}
Es||hs||hl.prototype.options_.children.splice(1,0,"mouseTimeDisplay")
as.registerComponent("SeekBar",hl)
var pl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).handleMouseMove=Ba(Ua(M(n),n.handleMouseMove),Ma)
n.throttledHandleMouseSeek=Ba(Ua(M(n),n.handleMouseSeek),Ma)
n.enable()
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})}
i.handleMouseMove=function(e){var t=this.getChild("seekBar")
if(t){var i=t.getChild("playProgressBar"),n=t.getChild("mouseTimeDisplay")
if(i||n){var r=t.el(),a=ta(r),s=ia(r,e).x
s=al(s,0,1)
n&&n.update(a,s)
i&&i.update(a,t.getProgress())}}}
i.handleMouseSeek=function(e){var t=this.getChild("seekBar")
t&&t.handleMouseMove(e)}
i.enabled=function(){return this.enabled_}
i.disable=function(){this.children().forEach((function(e){return e.disable&&e.disable()}))
if(this.enabled()){this.off(["mousedown","touchstart"],this.handleMouseDown)
this.off(this.el_,"mousemove",this.handleMouseMove)
this.handleMouseUp()
this.addClass("disabled")
this.enabled_=!1}}
i.enable=function(){this.children().forEach((function(e){return e.enable&&e.enable()}))
if(!this.enabled()){this.on(["mousedown","touchstart"],this.handleMouseDown)
this.on(this.el_,"mousemove",this.handleMouseMove)
this.removeClass("disabled")
this.enabled_=!0}}
i.handleMouseDown=function(e){var t=this.el_.ownerDocument,i=this.getChild("seekBar")
i&&i.handleMouseDown(e)
this.on(t,"mousemove",this.throttledHandleMouseSeek)
this.on(t,"touchmove",this.throttledHandleMouseSeek)
this.on(t,"mouseup",this.handleMouseUp)
this.on(t,"touchend",this.handleMouseUp)}
i.handleMouseUp=function(e){var t=this.el_.ownerDocument,i=this.getChild("seekBar")
i&&i.handleMouseUp(e)
this.off(t,"mousemove",this.throttledHandleMouseSeek)
this.off(t,"touchmove",this.throttledHandleMouseSeek)
this.off(t,"mouseup",this.handleMouseUp)
this.off(t,"touchend",this.handleMouseUp)}
return t})(as)
pl.prototype.options_={children:["seekBar"]}
as.registerComponent("ProgressControl",pl)
var fl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,["enterpictureinpicture","leavepictureinpicture"],n.handlePictureInPictureChange)
n.on(t,["disablepictureinpicturechanged","loadedmetadata"],n.handlePictureInPictureEnabledChange)
n.disable()
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-picture-in-picture-control "+e.prototype.buildCSSClass.call(this)}
i.handlePictureInPictureEnabledChange=function(){R.pictureInPictureEnabled&&!1===this.player_.disablePictureInPicture()?this.enable():this.disable()}
i.handlePictureInPictureChange=function(e){this.player_.isInPictureInPicture()?this.controlText("Exit Picture-in-Picture"):this.controlText("Picture-in-Picture")
this.handlePictureInPictureEnabledChange()}
i.handleClick=function(e){this.player_.isInPictureInPicture()?this.player_.exitPictureInPicture():this.player_.requestPictureInPicture()}
return t})(zo)
fl.prototype.controlText_="Picture-in-Picture"
as.registerComponent("PictureInPictureToggle",fl)
var ml=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,"fullscreenchange",n.handleFullscreenChange)
!1===R[t.fsApi_.fullscreenEnabled]&&n.disable()
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-fullscreen-control "+e.prototype.buildCSSClass.call(this)}
i.handleFullscreenChange=function(e){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")}
i.handleClick=function(e){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()}
return t})(zo)
ml.prototype.controlText_="Fullscreen"
as.registerComponent("FullscreenToggle",ml)
var gl=function(e,t){t.tech_&&!t.tech_.featuresVolumeControl&&e.addClass("vjs-hidden")
e.on(t,"loadstart",(function(){t.tech_.featuresVolumeControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")}))},vl=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})}
return t})(as)
as.registerComponent("VolumeLevel",vl)
var yl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on("slideractive",n.updateLastVolume_)
n.on(t,"volumechange",n.updateARIAAttributes)
t.ready((function(){return n.updateARIAAttributes()}))
return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})}
i.handleMouseDown=function(t){la(t)&&e.prototype.handleMouseDown.call(this,t)}
i.handleMouseMove=function(e){if(la(e)){this.checkMuted()
this.player_.volume(this.calculateDistance(e))}}
i.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)}
i.getPercent=function(){return this.player_.muted()?0:this.player_.volume()}
i.stepForward=function(){this.checkMuted()
this.player_.volume(this.player_.volume()+.1)}
i.stepBack=function(){this.checkMuted()
this.player_.volume(this.player_.volume()-.1)}
i.updateARIAAttributes=function(e){var t=this.player_.muted()?0:this.volumeAsPercentage_()
this.el_.setAttribute("aria-valuenow",t)
this.el_.setAttribute("aria-valuetext",t+"%")}
i.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())}
i.updateLastVolume_=function(){var e=this,t=this.player_.volume()
this.one("sliderinactive",(function(){0===e.player_.volume()&&e.player_.lastVolume_(t)}))}
return t})(sl)
yl.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"}
yl.prototype.playerEvent="volumechange"
as.registerComponent("VolumeBar",yl)
var _l=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={})
i.vertical=i.vertical||!1
if(void 0===i.volumeBar||Lr(i.volumeBar)){i.volumeBar=i.volumeBar||{}
i.volumeBar.vertical=i.vertical}n=e.call(this,t,i)||this
gl(M(n),t)
n.throttledHandleMouseMove=Ba(Ua(M(n),n.handleMouseMove),Ma)
n.on("mousedown",n.handleMouseDown)
n.on("touchstart",n.handleMouseDown)
n.on(n.volumeBar,["focus","slideractive"],(function(){n.volumeBar.addClass("vjs-slider-active")
n.addClass("vjs-slider-active")
n.trigger("slideractive")}))
n.on(n.volumeBar,["blur","sliderinactive"],(function(){n.volumeBar.removeClass("vjs-slider-active")
n.removeClass("vjs-slider-active")
n.trigger("sliderinactive")}))
return n}var i=t.prototype
i.createEl=function(){var t="vjs-volume-horizontal"
this.options_.vertical&&(t="vjs-volume-vertical")
return e.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})}
i.handleMouseDown=function(e){var t=this.el_.ownerDocument
this.on(t,"mousemove",this.throttledHandleMouseMove)
this.on(t,"touchmove",this.throttledHandleMouseMove)
this.on(t,"mouseup",this.handleMouseUp)
this.on(t,"touchend",this.handleMouseUp)}
i.handleMouseUp=function(e){var t=this.el_.ownerDocument
this.off(t,"mousemove",this.throttledHandleMouseMove)
this.off(t,"touchmove",this.throttledHandleMouseMove)
this.off(t,"mouseup",this.handleMouseUp)
this.off(t,"touchend",this.handleMouseUp)}
i.handleMouseMove=function(e){this.volumeBar.handleMouseMove(e)}
return t})(as)
_l.prototype.options_={children:["volumeBar"]}
as.registerComponent("VolumeControl",_l)
var bl=function(e,t){t.tech_&&!t.tech_.featuresMuteControl&&e.addClass("vjs-hidden")
e.on(t,"loadstart",(function(){t.tech_.featuresMuteControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")}))},Tl=(function(e){U(t,e)
function t(t,i){var n
n=e.call(this,t,i)||this
bl(M(n),t)
n.on(t,["loadstart","volumechange"],n.update)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-mute-control "+e.prototype.buildCSSClass.call(this)}
i.handleClick=function(e){var t=this.player_.volume(),i=this.player_.lastVolume_()
if(0===t){var n=i<.1?.1:i
this.player_.volume(n)
this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())}
i.update=function(e){this.updateIcon_()
this.updateControlText_()}
i.updateIcon_=function(){var e=this.player_.volume(),t=3
Es&&this.player_.tech_&&this.player_.tech_.el_&&this.player_.muted(this.player_.tech_.el_.muted)
0===e||this.player_.muted()?t=0:e<.33?t=1:e<.67&&(t=2)
for(var i=0;i<4;i++)zr(this.el_,"vjs-vol-"+i)
Wr(this.el_,"vjs-vol-"+t)}
i.updateControlText_=function(){var e=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute"
this.controlText()!==e&&this.controlText(e)}
return t})(zo)
Tl.prototype.controlText_="Mute"
as.registerComponent("MuteToggle",Tl)
var Sl=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={})
void 0!==i.inline?i.inline=i.inline:i.inline=!0
if(void 0===i.volumeControl||Lr(i.volumeControl)){i.volumeControl=i.volumeControl||{}
i.volumeControl.vertical=!i.inline}(n=e.call(this,t,i)||this).on(t,["loadstart"],n.volumePanelState_)
n.on(n.muteToggle,"keyup",n.handleKeyPress)
n.on(n.volumeControl,"keyup",n.handleVolumeControlKeyUp)
n.on("keydown",n.handleKeyPress)
n.on("mouseover",n.handleMouseOver)
n.on("mouseout",n.handleMouseOut)
n.on(n.volumeControl,["slideractive"],n.sliderActive_)
n.on(n.volumeControl,["sliderinactive"],n.sliderInactive_)
return n}var i=t.prototype
i.sliderActive_=function(){this.addClass("vjs-slider-active")}
i.sliderInactive_=function(){this.removeClass("vjs-slider-active")}
i.volumePanelState_=function(){this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden")
this.volumeControl.hasClass("vjs-hidden")&&!this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")}
i.createEl=function(){var t="vjs-volume-panel-horizontal"
this.options_.inline||(t="vjs-volume-panel-vertical")
return e.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})}
i.dispose=function(){this.handleMouseOut()
e.prototype.dispose.call(this)}
i.handleVolumeControlKeyUp=function(e){j.isEventKey(e,"Esc")&&this.muteToggle.focus()}
i.handleMouseOver=function(e){this.addClass("vjs-hover")
Aa(R,"keyup",Ua(this,this.handleKeyPress))}
i.handleMouseOut=function(e){this.removeClass("vjs-hover")
xa(R,"keyup",Ua(this,this.handleKeyPress))}
i.handleKeyPress=function(e){j.isEventKey(e,"Esc")&&this.handleMouseOut()}
return t})(as)
Sl.prototype.options_={children:["muteToggle","volumeControl"]}
as.registerComponent("VolumePanel",Sl)
var kl=(function(e){U(t,e)
function t(t,i){var n
n=e.call(this,t,i)||this
i&&(n.menuButton_=i.menuButton)
n.focusedChild_=-1
n.on("keydown",n.handleKeyDown)
n.boundHandleBlur_=Ua(M(n),n.handleBlur)
n.boundHandleTapClick_=Ua(M(n),n.handleTapClick)
return n}var i=t.prototype
i.addEventListenerForItem=function(e){if(e instanceof as){this.on(e,"blur",this.boundHandleBlur_)
this.on(e,["tap","click"],this.boundHandleTapClick_)}}
i.removeEventListenerForItem=function(e){if(e instanceof as){this.off(e,"blur",this.boundHandleBlur_)
this.off(e,["tap","click"],this.boundHandleTapClick_)}}
i.removeChild=function(t){"string"==typeof t&&(t=this.getChild(t))
this.removeEventListenerForItem(t)
e.prototype.removeChild.call(this,t)}
i.addItem=function(e){var t=this.addChild(e)
t&&this.addEventListenerForItem(t)}
i.createEl=function(){var t=this.options_.contentElType||"ul"
this.contentEl_=Fr(t,{className:"vjs-menu-content"})
this.contentEl_.setAttribute("role","menu")
var i=e.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"})
i.appendChild(this.contentEl_)
Aa(i,"click",(function(e){e.preventDefault()
e.stopImmediatePropagation()}))
return i}
i.dispose=function(){this.contentEl_=null
this.boundHandleBlur_=null
this.boundHandleTapClick_=null
e.prototype.dispose.call(this)}
i.handleBlur=function(e){var t=e.relatedTarget||R.activeElement
if(!this.children().some((function(e){return e.el()===t}))){var i=this.menuButton_
i&&i.buttonPressed_&&t!==i.el().firstChild&&i.unpressButton()}}
i.handleTapClick=function(e){if(this.menuButton_){this.menuButton_.unpressButton()
var t=this.children()
if(!Array.isArray(t))return
var i=t.filter((function(t){return t.el()===e.target}))[0]
if(!i)return
"CaptionSettingsMenuItem"!==i.name()&&this.menuButton_.focus()}}
i.handleKeyDown=function(e){if(j.isEventKey(e,"Left")||j.isEventKey(e,"Down")){e.preventDefault()
e.stopPropagation()
this.stepForward()}else if(j.isEventKey(e,"Right")||j.isEventKey(e,"Up")){e.preventDefault()
e.stopPropagation()
this.stepBack()}}
i.stepForward=function(){var e=0
void 0!==this.focusedChild_&&(e=this.focusedChild_+1)
this.focus(e)}
i.stepBack=function(){var e=0
void 0!==this.focusedChild_&&(e=this.focusedChild_-1)
this.focus(e)}
i.focus=function(e){void 0===e&&(e=0)
var t=this.children().slice()
t.length&&t[0].hasClass("vjs-menu-title")&&t.shift()
if(t.length>0){e<0?e=0:e>=t.length&&(e=t.length-1)
this.focusedChild_=e
t[e].el_.focus()}}
return t})(as)
as.registerComponent("Menu",kl)
var Cl=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={});(n=e.call(this,t,i)||this).menuButton_=new zo(t,i)
n.menuButton_.controlText(n.controlText_)
n.menuButton_.el_.setAttribute("aria-haspopup","true")
var r=zo.prototype.buildCSSClass()
n.menuButton_.el_.className=n.buildCSSClass()+" "+r
n.menuButton_.removeClass("vjs-control")
n.addChild(n.menuButton_)
n.update()
n.enabled_=!0
n.on(n.menuButton_,"tap",n.handleClick)
n.on(n.menuButton_,"click",n.handleClick)
n.on(n.menuButton_,"keydown",n.handleKeyDown)
n.on(n.menuButton_,"mouseenter",(function(){n.addClass("vjs-hover")
n.menu.show()
Aa(R,"keyup",Ua(M(n),n.handleMenuKeyUp))}))
n.on("mouseleave",n.handleMouseLeave)
n.on("keydown",n.handleSubmenuKeyDown)
return n}var i=t.prototype
i.update=function(){var e=this.createMenu()
if(this.menu){this.menu.dispose()
this.removeChild(this.menu)}this.menu=e
this.addChild(e)
this.buttonPressed_=!1
this.menuButton_.el_.setAttribute("aria-expanded","false")
this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()}
i.createMenu=function(){var e=new kl(this.player_,{menuButton:this})
this.hideThreshold_=0
if(this.options_.title){var t=Fr("li",{className:"vjs-menu-title",innerHTML:Za(this.options_.title),tabIndex:-1})
this.hideThreshold_+=1
var i=new as(this.player_,{el:t})
e.addItem(i)}this.items=this.createItems()
if(this.items)for(var n=0;n<this.items.length;n++)e.addItem(this.items[n])
return e}
i.createItems=function(){}
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})}
i.buildWrapperCSSClass=function(){var t="vjs-menu-button"
!0===this.options_.inline?t+="-inline":t+="-popup"
return"vjs-menu-button "+t+" "+zo.prototype.buildCSSClass()+" "+e.prototype.buildCSSClass.call(this)}
i.buildCSSClass=function(){var t="vjs-menu-button"
!0===this.options_.inline?t+="-inline":t+="-popup"
return"vjs-menu-button "+t+" "+e.prototype.buildCSSClass.call(this)}
i.controlText=function(e,t){void 0===t&&(t=this.menuButton_.el())
return this.menuButton_.controlText(e,t)}
i.dispose=function(){this.handleMouseLeave()
e.prototype.dispose.call(this)}
i.handleClick=function(e){this.buttonPressed_?this.unpressButton():this.pressButton()}
i.handleMouseLeave=function(e){this.removeClass("vjs-hover")
xa(R,"keyup",Ua(this,this.handleMenuKeyUp))}
i.focus=function(){this.menuButton_.focus()}
i.blur=function(){this.menuButton_.blur()}
i.handleKeyDown=function(e){if(j.isEventKey(e,"Esc")||j.isEventKey(e,"Tab")){this.buttonPressed_&&this.unpressButton()
if(!j.isEventKey(e,"Tab")){e.preventDefault()
this.menuButton_.focus()}}else if((j.isEventKey(e,"Up")||j.isEventKey(e,"Down"))&&!this.buttonPressed_){e.preventDefault()
this.pressButton()}}
i.handleMenuKeyUp=function(e){(j.isEventKey(e,"Esc")||j.isEventKey(e,"Tab"))&&this.removeClass("vjs-hover")}
i.handleSubmenuKeyPress=function(e){this.handleSubmenuKeyDown(e)}
i.handleSubmenuKeyDown=function(e){if(j.isEventKey(e,"Esc")||j.isEventKey(e,"Tab")){this.buttonPressed_&&this.unpressButton()
if(!j.isEventKey(e,"Tab")){e.preventDefault()
this.menuButton_.focus()}}}
i.pressButton=function(){if(this.enabled_){this.buttonPressed_=!0
this.menu.show()
this.menu.lockShowing()
this.menuButton_.el_.setAttribute("aria-expanded","true")
if(Es&&Br())return
this.menu.focus()}}
i.unpressButton=function(){if(this.enabled_){this.buttonPressed_=!1
this.menu.unlockShowing()
this.menu.hide()
this.menuButton_.el_.setAttribute("aria-expanded","false")}}
i.disable=function(){this.unpressButton()
this.enabled_=!1
this.addClass("vjs-disabled")
this.menuButton_.disable()}
i.enable=function(){this.enabled_=!0
this.removeClass("vjs-disabled")
this.menuButton_.enable()}
return t})(as)
as.registerComponent("MenuButton",Cl)
var El=(function(e){U(t,e)
function t(t,i){var n,r=i.tracks;(n=e.call(this,t,i)||this).items.length<=1&&n.hide()
if(!r)return M(n)
var a=Ua(M(n),n.update)
r.addEventListener("removetrack",a)
r.addEventListener("addtrack",a)
r.addEventListener("labelchange",a)
n.player_.on("ready",a)
n.player_.on("dispose",(function(){r.removeEventListener("removetrack",a)
r.removeEventListener("addtrack",a)
r.removeEventListener("labelchange",a)}))
return n}return t})(Cl)
as.registerComponent("TrackButton",El)
var wl=["Tab","Esc","Up","Down","Right","Left"],Il=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).selectable=i.selectable
n.isSelected_=i.selected||!1
n.multiSelectable=i.multiSelectable
n.selected(n.isSelected_)
n.selectable?n.multiSelectable?n.el_.setAttribute("role","menuitemcheckbox"):n.el_.setAttribute("role","menuitemradio"):n.el_.setAttribute("role","menuitem")
return n}var i=t.prototype
i.createEl=function(t,i,n){this.nonIconControl=!0
return e.prototype.createEl.call(this,"li",xr({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},i),n)}
i.handleKeyDown=function(t){wl.some((function(e){return j.isEventKey(t,e)}))||e.prototype.handleKeyDown.call(this,t)}
i.handleClick=function(e){this.selected(!0)}
i.selected=function(e){if(this.selectable)if(e){this.addClass("vjs-selected")
this.el_.setAttribute("aria-checked","true")
this.controlText(", selected")
this.isSelected_=!0}else{this.removeClass("vjs-selected")
this.el_.setAttribute("aria-checked","false")
this.controlText("")
this.isSelected_=!1}}
return t})(Bo)
as.registerComponent("MenuItem",Il)
var Pl=(function(e){U(t,e)
function t(t,i){var n,r=i.track,s=t.textTracks()
i.label=r.label||r.language||"Unknown"
i.selected="showing"===r.mode;(n=e.call(this,t,i)||this).track=r
n.kinds=(i.kinds||[i.kind||n.track.kind]).filter(Boolean)
var o=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
n.handleTracksChange.apply(M(n),t)},l=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
n.handleSelectedLanguageChange.apply(M(n),t)}
t.on(["loadstart","texttrackchange"],o)
s.addEventListener("change",o)
s.addEventListener("selectedlanguagechange",l)
n.on("dispose",(function(){t.off(["loadstart","texttrackchange"],o)
s.removeEventListener("change",o)
s.removeEventListener("selectedlanguagechange",l)}))
if(void 0===s.onchange){var u
n.on(["tap","click"],(function(){if("object"!=typeof a.Event)try{u=new a.Event("change")}catch(e){}u||(u=R.createEvent("Event")).initEvent("change",!0,!0)
s.dispatchEvent(u)}))}n.handleTracksChange()
return n}var i=t.prototype
i.handleClick=function(t){var i=this.track,n=this.player_.textTracks()
e.prototype.handleClick.call(this,t)
if(n)for(var r=0;r<n.length;r++){var a=n[r];-1!==this.kinds.indexOf(a.kind)&&(a===i?"showing"!==a.mode&&(a.mode="showing"):"disabled"!==a.mode&&(a.mode="disabled"))}}
i.handleTracksChange=function(e){var t="showing"===this.track.mode
t!==this.isSelected_&&this.selected(t)}
i.handleSelectedLanguageChange=function(e){if("showing"===this.track.mode){var t=this.player_.cache_.selectedLanguage
if(t&&t.enabled&&t.language===this.track.language&&t.kind!==this.track.kind)return
this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}}
i.dispose=function(){this.track=null
e.prototype.dispose.call(this)}
return t})(Il)
as.registerComponent("TextTrackMenuItem",Pl)
var Al=(function(e){U(t,e)
function t(t,i){i.track={player:t,kind:i.kind,kinds:i.kinds,default:!1,mode:"disabled"}
i.kinds||(i.kinds=[i.kind])
i.label?i.track.label=i.label:i.track.label=i.kinds.join(" and ")+" off"
i.selectable=!0
i.multiSelectable=!1
return e.call(this,t,i)||this}var i=t.prototype
i.handleTracksChange=function(e){for(var t=this.player().textTracks(),i=!0,n=0,r=t.length;n<r;n++){var a=t[n]
if(this.options_.kinds.indexOf(a.kind)>-1&&"showing"===a.mode){i=!1
break}}i!==this.isSelected_&&this.selected(i)}
i.handleSelectedLanguageChange=function(e){for(var t=this.player().textTracks(),i=!0,n=0,r=t.length;n<r;n++){var a=t[n]
if(["captions","descriptions","subtitles"].indexOf(a.kind)>-1&&"showing"===a.mode){i=!1
break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})}
return t})(Pl)
as.registerComponent("OffTextTrackMenuItem",Al)
var xl=(function(e){U(t,e)
function t(t,i){void 0===i&&(i={})
i.tracks=t.textTracks()
return e.call(this,t,i)||this}t.prototype.createItems=function(e,t){void 0===e&&(e=[])
void 0===t&&(t=Pl)
var i
this.label_&&(i=this.label_+" off")
e.push(new Al(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i}))
this.hideThreshold_+=1
var n=this.player_.textTracks()
Array.isArray(this.kinds_)||(this.kinds_=[this.kind_])
for(var r=0;r<n.length;r++){var a=n[r]
if(this.kinds_.indexOf(a.kind)>-1){var s=new t(this.player_,{track:a,kinds:this.kinds_,kind:this.kind_,selectable:!0,multiSelectable:!1})
s.addClass("vjs-"+a.kind+"-menu-item")
e.push(s)}}return e}
return t})(El)
as.registerComponent("TextTrackButton",xl)
var Ol=(function(e){U(t,e)
function t(t,i){var n,r=i.track,a=i.cue,s=t.currentTime()
i.selectable=!0
i.multiSelectable=!1
i.label=a.text
i.selected=a.startTime<=s&&s<a.endTime;(n=e.call(this,t,i)||this).track=r
n.cue=a
r.addEventListener("cuechange",Ua(M(n),n.update))
return n}var i=t.prototype
i.handleClick=function(t){e.prototype.handleClick.call(this)
this.player_.currentTime(this.cue.startTime)
this.update(this.cue.startTime)}
i.update=function(e){var t=this.cue,i=this.player_.currentTime()
this.selected(t.startTime<=i&&i<t.endTime)}
return t})(Il)
as.registerComponent("ChaptersTrackMenuItem",Ol)
var Ll=(function(e){U(t,e)
function t(t,i,n){return e.call(this,t,i,n)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-chapters-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-chapters-button "+e.prototype.buildWrapperCSSClass.call(this)}
i.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack())
e.prototype.update.call(this)}
i.setTrack=function(e){if(this.track_!==e){this.updateHandler_||(this.updateHandler_=this.update.bind(this))
if(this.track_){var t=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
t&&t.removeEventListener("load",this.updateHandler_)
this.track_=null}this.track_=e
if(this.track_){this.track_.mode="hidden"
var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
i&&i.addEventListener("load",this.updateHandler_)}}}
i.findChaptersTrack=function(){for(var e=this.player_.textTracks()||[],t=e.length-1;t>=0;t--){var i=e[t]
if(i.kind===this.kind_)return i}}
i.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(Za(this.kind_))}
i.createMenu=function(){this.options_.title=this.getMenuCaption()
return e.prototype.createMenu.call(this)}
i.createItems=function(){var e=[]
if(!this.track_)return e
var t=this.track_.cues
if(!t)return e
for(var i=0,n=t.length;i<n;i++){var r=t[i],a=new Ol(this.player_,{track:this.track_,cue:r})
e.push(a)}return e}
return t})(xl)
Ll.prototype.kind_="chapters"
Ll.prototype.controlText_="Chapters"
as.registerComponent("ChaptersButton",Ll)
var Dl=(function(e){U(t,e)
function t(t,i,n){var r
r=e.call(this,t,i,n)||this
var a=t.textTracks(),s=Ua(M(r),r.handleTracksChange)
a.addEventListener("change",s)
r.on("dispose",(function(){a.removeEventListener("change",s)}))
return r}var i=t.prototype
i.handleTracksChange=function(e){for(var t=this.player().textTracks(),i=!1,n=0,r=t.length;n<r;n++){var a=t[n]
if(a.kind!==this.kind_&&"showing"===a.mode){i=!0
break}}i?this.disable():this.enable()}
i.buildCSSClass=function(){return"vjs-descriptions-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+e.prototype.buildWrapperCSSClass.call(this)}
return t})(xl)
Dl.prototype.kind_="descriptions"
Dl.prototype.controlText_="Descriptions"
as.registerComponent("DescriptionsButton",Dl)
var Rl=(function(e){U(t,e)
function t(t,i,n){return e.call(this,t,i,n)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-subtitles-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+e.prototype.buildWrapperCSSClass.call(this)}
return t})(xl)
Rl.prototype.kind_="subtitles"
Rl.prototype.controlText_="Subtitles"
as.registerComponent("SubtitlesButton",Rl)
var Nl=(function(e){U(t,e)
function t(t,i){var n
i.track={player:t,kind:i.kind,label:i.kind+" settings",selectable:!1,default:!1,mode:"disabled"}
i.selectable=!1
i.name="CaptionSettingsMenuItem";(n=e.call(this,t,i)||this).addClass("vjs-texttrack-settings")
n.controlText(", opens "+i.kind+" settings dialog")
return n}t.prototype.handleClick=function(e){this.player().getChild("textTrackSettings").open()}
return t})(Pl)
as.registerComponent("CaptionSettingsMenuItem",Nl)
var Ml=(function(e){U(t,e)
function t(t,i,n){return e.call(this,t,i,n)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-captions-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-captions-button "+e.prototype.buildWrapperCSSClass.call(this)}
i.createItems=function(){var t=[]
if((!this.player().tech_||!this.player().tech_.featuresNativeTextTracks)&&this.player().getChild("textTrackSettings")){t.push(new Nl(this.player_,{kind:this.kind_}))
this.hideThreshold_+=1}return e.prototype.createItems.call(this,t)}
return t})(xl)
Ml.prototype.kind_="captions"
Ml.prototype.controlText_="Captions"
as.registerComponent("CaptionsButton",Ml)
var Ul=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}t.prototype.createEl=function(t,i,n){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label)
"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      ")
r+="</span>"
return e.prototype.createEl.call(this,t,xr({innerHTML:r},i),n)}
return t})(Pl)
as.registerComponent("SubsCapsMenuItem",Ul)
var Bl=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={});(n=e.call(this,t,i)||this).label_="subtitles";["en","en-us","en-ca","fr-ca"].indexOf(n.player_.language_)>-1&&(n.label_="captions")
n.menuButton_.controlText(Za(n.label_))
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-subs-caps-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+e.prototype.buildWrapperCSSClass.call(this)}
i.createItems=function(){var t=[]
if((!this.player().tech_||!this.player().tech_.featuresNativeTextTracks)&&this.player().getChild("textTrackSettings")){t.push(new Nl(this.player_,{kind:this.label_}))
this.hideThreshold_+=1}return t=e.prototype.createItems.call(this,t,Ul)}
return t})(xl)
Bl.prototype.kinds_=["captions","subtitles"]
Bl.prototype.controlText_="Subtitles"
as.registerComponent("SubsCapsButton",Bl)
var jl=(function(e){U(t,e)
function t(t,i){var n,r=i.track,a=t.audioTracks()
i.label=r.label||r.language||"Unknown"
i.selected=r.enabled;(n=e.call(this,t,i)||this).track=r
n.addClass("vjs-"+r.kind+"-menu-item")
var s=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
n.handleTracksChange.apply(M(n),t)}
a.addEventListener("change",s)
n.on("dispose",(function(){a.removeEventListener("change",s)}))
return n}var i=t.prototype
i.createEl=function(t,i,n){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label)
"main-desc"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Descriptions")+"</span>\n      ")
r+="</span>"
return e.prototype.createEl.call(this,t,xr({innerHTML:r},i),n)}
i.handleClick=function(t){var i=this.player_.audioTracks()
e.prototype.handleClick.call(this,t)
for(var n=0;n<i.length;n++){var r=i[n]
r.enabled=r===this.track}}
i.handleTracksChange=function(e){this.selected(this.track.enabled)}
return t})(Il)
as.registerComponent("AudioTrackMenuItem",jl)
var Fl=(function(e){U(t,e)
function t(t,i){void 0===i&&(i={})
i.tracks=t.audioTracks()
return e.call(this,t,i)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-audio-button "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-audio-button "+e.prototype.buildWrapperCSSClass.call(this)}
i.createItems=function(e){void 0===e&&(e=[])
this.hideThreshold_=1
for(var t=this.player_.audioTracks(),i=0;i<t.length;i++){var n=t[i]
e.push(new jl(this.player_,{track:n,selectable:!0,multiSelectable:!1}))}return e}
return t})(El)
Fl.prototype.controlText_="Audio Track"
as.registerComponent("AudioTrackButton",Fl)
var Vl=(function(e){U(t,e)
function t(t,i){var n,r=i.rate,a=parseFloat(r,10)
i.label=r
i.selected=1===a
i.selectable=!0
i.multiSelectable=!1;(n=e.call(this,t,i)||this).label=r
n.rate=a
n.on(t,"ratechange",n.update)
return n}var i=t.prototype
i.handleClick=function(t){e.prototype.handleClick.call(this)
this.player().playbackRate(this.rate)}
i.update=function(e){this.selected(this.player().playbackRate()===this.rate)}
return t})(Il)
Vl.prototype.contentElType="button"
as.registerComponent("PlaybackRateMenuItem",Vl)
var Hl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).updateVisibility()
n.updateLabel()
n.on(t,"loadstart",n.updateVisibility)
n.on(t,"ratechange",n.updateLabel)
return n}var i=t.prototype
i.createEl=function(){var t=e.prototype.createEl.call(this)
this.labelEl_=Fr("div",{className:"vjs-playback-rate-value",innerHTML:"1x"})
t.appendChild(this.labelEl_)
return t}
i.dispose=function(){this.labelEl_=null
e.prototype.dispose.call(this)}
i.buildCSSClass=function(){return"vjs-playback-rate "+e.prototype.buildCSSClass.call(this)}
i.buildWrapperCSSClass=function(){return"vjs-playback-rate "+e.prototype.buildWrapperCSSClass.call(this)}
i.createMenu=function(){var e=new kl(this.player()),t=this.playbackRates()
if(t)for(var i=t.length-1;i>=0;i--)e.addChild(new Vl(this.player(),{rate:t[i]+"x"}))
return e}
i.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())}
i.handleClick=function(e){for(var t=this.player().playbackRate(),i=this.playbackRates(),n=i[0],r=0;r<i.length;r++)if(i[r]>t){n=i[r]
break}this.player().playbackRate(n)}
i.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates}
i.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0}
i.updateVisibility=function(e){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")}
i.updateLabel=function(e){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")}
return t})(Cl)
Hl.prototype.controlText_="Playback Rate"
as.registerComponent("PlaybackRateMenuButton",Hl)
var ql=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-spacer "+e.prototype.buildCSSClass.call(this)}
i.createEl=function(){return e.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})}
return t})(as)
as.registerComponent("Spacer",ql)
var Wl=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}var i=t.prototype
i.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)}
i.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()})
t.innerHTML="??"
return t}
return t})(ql)
as.registerComponent("CustomControlSpacer",Wl)
var zl=(function(e){U(t,e)
function t(){return e.apply(this,arguments)||this}t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})}
return t})(as)
zl.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","seekToLive","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]}
"exitPictureInPicture"in R&&zl.prototype.options_.children.splice(zl.prototype.options_.children.length-1,0,"pictureInPictureToggle")
as.registerComponent("ControlBar",zl)
var Gl=(function(e){U(t,e)
function t(t,i){var n;(n=e.call(this,t,i)||this).on(t,"error",n.open)
return n}var i=t.prototype
i.buildCSSClass=function(){return"vjs-error-display "+e.prototype.buildCSSClass.call(this)}
i.content=function(){var e=this.player().error()
return e?this.localize(e.message):""}
return t})(Gs)
Gl.prototype.options_=N({},Gs.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0})
as.registerComponent("ErrorDisplay",Gl)
var Kl=["#000","Black"],Xl=["#00F","Blue"],Yl=["#0FF","Cyan"],Ql=["#0F0","Green"],$l=["#F0F","Magenta"],Jl=["#F00","Red"],Zl=["#FFF","White"],eu=["#FF0","Yellow"],tu=["1","Opaque"],iu=["0.5","Semi-Transparent"],nu=["0","Transparent"],ru={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Kl,Zl,Jl,Ql,Xl,eu,$l,Yl]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[tu,iu,nu]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Zl,Kl,Jl,Ql,Xl,eu,$l,Yl]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(e){return"1.00"===e?null:Number(e)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[tu,iu]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[nu,iu,tu]}}
ru.windowColor.options=ru.backgroundColor.options
function au(e,t){t&&(e=t(e))
if(e&&"none"!==e)return e}var su=(function(e){U(t,e)
function t(t,i){var n
i.temporary=!1;(n=e.call(this,t,i)||this).updateDisplay=Ua(M(n),n.updateDisplay)
n.fill()
n.hasBeenOpened_=n.hasBeenFilled_=!0
n.endDialog=Fr("p",{className:"vjs-control-text",textContent:n.localize("End of dialog window.")})
n.el().appendChild(n.endDialog)
n.setDefaults()
void 0===i.persistTextTrackSettings&&(n.options_.persistTextTrackSettings=n.options_.playerOptions.persistTextTrackSettings)
n.on(n.$(".vjs-done-button"),"click",(function(){n.saveSettings()
n.close()}))
n.on(n.$(".vjs-default-button"),"click",(function(){n.setDefaults()
n.updateDisplay()}))
Ar(ru,(function(e){n.on(n.$(e.selector),"change",n.updateDisplay)}))
n.options_.persistTextTrackSettings&&n.restoreSettings()
return n}var i=t.prototype
i.dispose=function(){this.endDialog=null
e.prototype.dispose.call(this)}
i.createElSelect_=function(e,t,i){var n=this
void 0===t&&(t="")
void 0===i&&(i="label")
var r=ru[e],a=r.id.replace("%s",this.id_),s=[t,a].join(" ").trim()
return["<"+i+' id="'+a+'" class="'+("label"===i?"vjs-label":"")+'">',this.localize(r.label),"</"+i+">",'<select aria-labelledby="'+s+'">'].concat(r.options.map((function(e){var t=a+"-"+e[1].replace(/\W+/g,"")
return['<option id="'+t+'" value="'+e[0]+'" ','aria-labelledby="'+s+" "+t+'">',n.localize(e[1]),"</option>"].join("")}))).concat("</select>").join("")}
i.createElFgColor_=function(){var e="captions-text-legend-"+this.id_
return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",e),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",e),"</span>","</fieldset>"].join("")}
i.createElBgColor_=function(){var e="captions-background-"+this.id_
return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",e),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",e),"</span>","</fieldset>"].join("")}
i.createElWinColor_=function(){var e="captions-window-"+this.id_
return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",e),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",e),"</span>","</fieldset>"].join("")}
i.createElColors_=function(){return Fr("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})}
i.createElFont_=function(){return Fr("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})}
i.createElControls_=function(){var e=this.localize("restore all settings to the default values")
return Fr("div",{className:"vjs-track-settings-controls",innerHTML:['<button type="button" class="vjs-default-button" title="'+e+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+e+"</span>","</button>",'<button type="button" class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})}
i.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]}
i.label=function(){return this.localize("Caption Settings Dialog")}
i.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")}
i.buildCSSClass=function(){return e.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"}
i.getValues=function(){var e=this
return (function(e,t,i){void 0===i&&(i=0)
return Pr(e).reduce((function(i,n){return t(i,e[n],n)}),i)})(ru,(function(t,i,n){var r,a,s=(r=e.$(i.selector),a=i.parser,au(r.options[r.options.selectedIndex].value,a))
void 0!==s&&(t[n]=s)
return t}),{})}
i.setValues=function(e){var t=this
Ar(ru,(function(i,n){((function(e,t,i){if(t)for(var n=0;n<e.options.length;n++)if(au(e.options[n].value,i)===t){e.selectedIndex=n
break}}))(t.$(i.selector),e[n],i.parser)}))}
i.setDefaults=function(){var e=this
Ar(ru,(function(t){var i=t.hasOwnProperty("default")?t.default:0
e.$(t.selector).selectedIndex=i}))}
i.restoreSettings=function(){var e
try{e=JSON.parse(a.localStorage.getItem("vjs-text-track-settings"))}catch(t){Er.warn(t)}e&&this.setValues(e)}
i.saveSettings=function(){if(this.options_.persistTextTrackSettings){var e=this.getValues()
try{Object.keys(e).length?a.localStorage.setItem("vjs-text-track-settings",JSON.stringify(e)):a.localStorage.removeItem("vjs-text-track-settings")}catch(t){Er.warn(t)}}}
i.updateDisplay=function(){var e=this.player_.getChild("textTrackDisplay")
e&&e.updateDisplay()}
i.conditionalBlur_=function(){this.previouslyActiveEl_=null
var e=this.player_.controlBar,t=e&&e.subsCapsButton,i=e&&e.captionsButton
t?t.focus():i&&i.focus()}
return t})(Gs)
as.registerComponent("TextTrackSettings",su)
var ou=(function(e){U(t,e)
function t(t,i){var n,r=i.ResizeObserver||a.ResizeObserver
null===i.ResizeObserver&&(r=!1)
var s=es({createEl:!r,reportTouchActivity:!1},i);(n=e.call(this,t,s)||this).ResizeObserver=i.ResizeObserver||a.ResizeObserver
n.loadListener_=null
n.resizeObserver_=null
n.debouncedHandler_=ja((function(){n.resizeHandler()}),100,!1,M(n))
if(r){n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_)
n.resizeObserver_.observe(t.el())}else{n.loadListener_=function(){if(n.el_&&n.el_.contentWindow){var e=n.debouncedHandler_,t=n.unloadListener_=function(){xa(this,"resize",e)
xa(this,"unload",t)
t=null}
Aa(n.el_.contentWindow,"unload",t)
Aa(n.el_.contentWindow,"resize",e)}}
n.one("load",n.loadListener_)}return n}var i=t.prototype
i.createEl=function(){return e.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager",tabIndex:-1},{"aria-hidden":"true"})}
i.resizeHandler=function(){this.player_&&this.player_.trigger&&this.player_.trigger("playerresize")}
i.dispose=function(){this.debouncedHandler_&&this.debouncedHandler_.cancel()
if(this.resizeObserver_){this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el())
this.resizeObserver_.disconnect()}this.loadListener_&&this.off("load",this.loadListener_)
this.el_&&this.el_.contentWindow&&this.unloadListener_&&this.unloadListener_.call(this.el_.contentWindow)
this.ResizeObserver=null
this.resizeObserver=null
this.debouncedHandler_=null
this.loadListener_=null
e.prototype.dispose.call(this)}
return t})(as)
as.registerComponent("ResizeManager",ou)
var lu={trackingThreshold:30,liveTolerance:15},uu=(function(e){U(t,e)
function t(t,i){var n,r=es(lu,i,{createEl:!1});(n=e.call(this,t,r)||this).reset_()
n.on(n.player_,"durationchange",n.handleDurationchange)
_s&&"hidden"in R&&"visibilityState"in R&&n.on(R,"visibilitychange",n.handleVisibilityChange)
return n}var i=t.prototype
i.handleVisibilityChange=function(){this.player_.duration()===1/0&&(R.hidden?this.stopTracking():this.startTracking())}
i.trackLive_=function(){var e=this.player_.seekable()
if(e&&e.length){var t=Number(a.performance.now().toFixed(4)),i=-1===this.lastTime_?0:(t-this.lastTime_)/1e3
this.lastTime_=t
this.pastSeekEnd_=this.pastSeekEnd()+i
var n=this.liveCurrentTime(),r=this.player_.currentTime(),s=this.player_.paused()||this.seekedBehindLive_||Math.abs(n-r)>this.options_.liveTolerance
this.timeupdateSeen_&&n!==1/0||(s=!1)
if(s!==this.behindLiveEdge_){this.behindLiveEdge_=s
this.trigger("liveedgechange")}}}
i.handleDurationchange=function(){if(this.player_.duration()===1/0&&this.liveWindow()>=this.options_.trackingThreshold){this.player_.options_.liveui&&this.player_.addClass("vjs-liveui")
this.startTracking()}else{this.player_.removeClass("vjs-liveui")
this.stopTracking()}}
i.startTracking=function(){if(!this.isTracking()){this.timeupdateSeen_||(this.timeupdateSeen_=this.player_.hasStarted())
this.trackingInterval_=this.setInterval(this.trackLive_,Ma)
this.trackLive_()
this.on(this.player_,["play","pause"],this.trackLive_)
if(this.timeupdateSeen_)this.on(this.player_,"seeked",this.handleSeeked)
else{this.one(this.player_,"play",this.handlePlay)
this.one(this.player_,"timeupdate",this.handleFirstTimeupdate)}}}
i.handleFirstTimeupdate=function(){this.timeupdateSeen_=!0
this.on(this.player_,"seeked",this.handleSeeked)}
i.handleSeeked=function(){var e=Math.abs(this.liveCurrentTime()-this.player_.currentTime())
this.seekedBehindLive_=!this.skipNextSeeked_&&e>2
this.skipNextSeeked_=!1
this.trackLive_()}
i.handlePlay=function(){this.one(this.player_,"timeupdate",this.seekToLiveEdge)}
i.reset_=function(){this.lastTime_=-1
this.pastSeekEnd_=0
this.lastSeekEnd_=-1
this.behindLiveEdge_=!0
this.timeupdateSeen_=!1
this.seekedBehindLive_=!1
this.skipNextSeeked_=!1
this.clearInterval(this.trackingInterval_)
this.trackingInterval_=null
this.off(this.player_,["play","pause"],this.trackLive_)
this.off(this.player_,"seeked",this.handleSeeked)
this.off(this.player_,"play",this.handlePlay)
this.off(this.player_,"timeupdate",this.handleFirstTimeupdate)
this.off(this.player_,"timeupdate",this.seekToLiveEdge)}
i.stopTracking=function(){if(this.isTracking()){this.reset_()
this.trigger("liveedgechange")}}
i.seekableEnd=function(){for(var e=this.player_.seekable(),t=[],i=e?e.length:0;i--;)t.push(e.end(i))
return t.length?t.sort()[t.length-1]:1/0}
i.seekableStart=function(){for(var e=this.player_.seekable(),t=[],i=e?e.length:0;i--;)t.push(e.start(i))
return t.length?t.sort()[0]:0}
i.liveWindow=function(){var e=this.liveCurrentTime()
return e===1/0?1/0:e-this.seekableStart()}
i.isLive=function(){return this.isTracking()}
i.atLiveEdge=function(){return!this.behindLiveEdge()}
i.liveCurrentTime=function(){return this.pastSeekEnd()+this.seekableEnd()}
i.pastSeekEnd=function(){var e=this.seekableEnd();-1!==this.lastSeekEnd_&&e!==this.lastSeekEnd_&&(this.pastSeekEnd_=0)
this.lastSeekEnd_=e
return this.pastSeekEnd_}
i.behindLiveEdge=function(){return this.behindLiveEdge_}
i.isTracking=function(){return"number"==typeof this.trackingInterval_}
i.seekToLiveEdge=function(){this.seekedBehindLive_=!1
if(!this.atLiveEdge()){this.skipNextSeeked_=!0
this.player_.currentTime(this.liveCurrentTime())}}
i.dispose=function(){this.off(R,"visibilitychange",this.handleVisibilityChange)
this.stopTracking()
e.prototype.dispose.call(this)}
return t})(as)
as.registerComponent("LiveTracker",uu)
var cu,du=function(e){var t=e.el()
if(t.hasAttribute("src")){e.triggerSourceset(t.src)
return!0}var i=e.$$("source"),n=[],r=""
if(!i.length)return!1
for(var a=0;a<i.length;a++){var s=i[a].src
s&&-1===n.indexOf(s)&&n.push(s)}if(!n.length)return!1
1===n.length&&(r=n[0])
e.triggerSourceset(r)
return!0},hu=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(e){var t=R.createElement(this.nodeName.toLowerCase())
t.innerHTML=e
for(var i=R.createDocumentFragment();t.childNodes.length;)i.appendChild(t.childNodes[0])
this.innerText=""
a.Element.prototype.appendChild.call(this,i)
return this.innerHTML}}),pu=function(e,t){for(var i={},n=0;n<e.length&&!((i=Object.getOwnPropertyDescriptor(e[n],t))&&i.set&&i.get);n++);i.enumerable=!0
i.configurable=!0
return i},fu=function(e){var t=e.el()
if(!t.resetSourceWatch_){var i={},n=(function(e){return pu([e.el(),a.HTMLMediaElement.prototype,a.Element.prototype,hu],"innerHTML")})(e),r=function(i){return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
var s=i.apply(t,r)
du(e)
return s}};["append","appendChild","insertAdjacentHTML"].forEach((function(e){if(t[e]){i[e]=t[e]
t[e]=r(i[e])}}))
Object.defineProperty(t,"innerHTML",es(n,{set:r(n.set)}))
t.resetSourceWatch_=function(){t.resetSourceWatch_=null
Object.keys(i).forEach((function(e){t[e]=i[e]}))
Object.defineProperty(t,"innerHTML",n)}
e.one("sourceset",t.resetSourceWatch_)}},mu=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?lo(a.Element.prototype.getAttribute.call(this,"src")):""},set:function(e){a.Element.prototype.setAttribute.call(this,"src",e)
return e}}),gu=function(e){if(e.featuresSourceset){var t=e.el()
if(!t.resetSourceset_){var i=(function(e){return pu([e.el(),a.HTMLMediaElement.prototype,mu],"src")})(e),n=t.setAttribute,r=t.load
Object.defineProperty(t,"src",es(i,{set:function(n){var r=i.set.call(t,n)
e.triggerSourceset(t.src)
return r}}))
t.setAttribute=function(i,r){var a=n.call(t,i,r);/src/i.test(i)&&e.triggerSourceset(t.src)
return a}
t.load=function(){var i=r.call(t)
if(!du(e)){e.triggerSourceset("")
fu(e)}return i}
t.currentSrc?e.triggerSourceset(t.currentSrc):du(e)||fu(e)
t.resetSourceset_=function(){t.resetSourceset_=null
t.load=r
t.setAttribute=n
Object.defineProperty(t,"src",i)
t.resetSourceWatch_&&t.resetSourceWatch_()}}}},vu=function(e,t,i,n){void 0===n&&(n=!0)
var r=function(i){return Object.defineProperty(e,t,{value:i,enumerable:!0,writable:!0})},a={configurable:!0,enumerable:!0,get:function(){var e=i()
r(e)
return e}}
n&&(a.set=r)
return Object.defineProperty(e,t,a)},yu=(function(e){U(t,e)
function t(t,i){var n
n=e.call(this,t,i)||this
var r=t.source,a=!1
r&&(n.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?n.setSource(r):n.handleLateInit_(n.el_)
t.enableSourceset&&n.setupSourcesetHandling_()
n.isScrubbing_=!1
if(n.el_.hasChildNodes()){for(var s=n.el_.childNodes,o=s.length,l=[];o--;){var u=s[o]
if("track"===u.nodeName.toLowerCase())if(n.featuresNativeTextTracks){n.remoteTextTrackEls().addTrackElement_(u)
n.remoteTextTracks().addTrack(u.track)
n.textTracks().addTrack(u.track)
a||n.el_.hasAttribute("crossorigin")||!co(u.src)||(a=!0)}else l.push(u)}for(var c=0;c<l.length;c++)n.el_.removeChild(l[c])}n.proxyNativeTracks_()
n.featuresNativeTextTracks&&a&&Er.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading.")
n.restoreMetadataTracksInIOSNativePlayer_();(Ss||Cs||fs)&&!0===t.nativeControlsForTouch&&n.setControls(!0)
n.proxyWebkitFullscreen_()
n.triggerReady()
return n}var i=t.prototype
i.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_()
t.disposeMediaElement(this.el_)
this.options_=null
e.prototype.dispose.call(this)}
i.setupSourcesetHandling_=function(){gu(this)}
i.restoreMetadataTracksInIOSNativePlayer_=function(){var e,t=this.textTracks(),i=function(){e=[]
for(var i=0;i<t.length;i++){var n=t[i]
"metadata"===n.kind&&e.push({track:n,storedMode:n.mode})}}
i()
t.addEventListener("change",i)
this.on("dispose",(function(){return t.removeEventListener("change",i)}))
var n=function i(){for(var n=0;n<e.length;n++){var r=e[n]
"disabled"===r.track.mode&&r.track.mode!==r.storedMode&&(r.track.mode=r.storedMode)}t.removeEventListener("change",i)}
this.on("webkitbeginfullscreen",(function(){t.removeEventListener("change",i)
t.removeEventListener("change",n)
t.addEventListener("change",n)}))
this.on("webkitendfullscreen",(function(){t.removeEventListener("change",i)
t.addEventListener("change",i)
t.removeEventListener("change",n)}))}
i.overrideNative_=function(e,t){var i=this
if(t===this["featuresNative"+e+"Tracks"]){var n=e.toLowerCase()
this[n+"TracksListeners_"]&&Object.keys(this[n+"TracksListeners_"]).forEach((function(e){i.el()[n+"Tracks"].removeEventListener(e,i[n+"TracksListeners_"][e])}))
this["featuresNative"+e+"Tracks"]=!t
this[n+"TracksListeners_"]=null
this.proxyNativeTracksForType_(n)}}
i.overrideNativeAudioTracks=function(e){this.overrideNative_("Audio",e)}
i.overrideNativeVideoTracks=function(e){this.overrideNative_("Video",e)}
i.proxyNativeTracksForType_=function(e){var t=this,i=To[e],n=this.el()[i.getterName],r=this[i.getterName]()
if(this["featuresNative"+i.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(i){var n={type:"change",target:r,currentTarget:r,srcElement:r}
r.trigger(n)
"text"===e&&t[So.remoteText.getterName]().trigger(n)},addtrack:function(e){r.addTrack(e.track)},removetrack:function(e){r.removeTrack(e.track)}},s=function(){for(var e=[],t=0;t<r.length;t++){for(var i=!1,a=0;a<n.length;a++)if(n[a]===r[t]){i=!0
break}i||e.push(r[t])}for(;e.length;)r.removeTrack(e.shift())}
this[i.getterName+"Listeners_"]=a
Object.keys(a).forEach((function(e){var i=a[e]
n.addEventListener(e,i)
t.on("dispose",(function(t){return n.removeEventListener(e,i)}))}))
this.on("loadstart",s)
this.on("dispose",(function(e){return t.off("loadstart",s)}))}}
i.proxyNativeTracks_=function(){var e=this
To.names.forEach((function(t){e.proxyNativeTracksForType_(t)}))}
i.createEl=function(){var e=this.options_.tag
if(!e||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(e){var i=e.cloneNode(!0)
e.parentNode&&e.parentNode.insertBefore(i,e)
t.disposeMediaElement(e)
e=i}else{e=R.createElement("video")
var n=es({},this.options_.tag&&Xr(this.options_.tag))
Ss&&!0===this.options_.nativeControlsForTouch||delete n.controls
Kr(e,xr(n,{id:this.options_.techId,class:"vjs-tech"}))}e.playerId=this.options_.playerId}void 0!==this.options_.preload&&Qr(e,"preload",this.options_.preload)
void 0!==this.options_.disablePictureInPicture&&(e.disablePictureInPicture=this.options_.disablePictureInPicture)
for(var r=["loop","muted","playsinline","autoplay"],a=0;a<r.length;a++){var s=r[a],o=this.options_[s]
if(void 0!==o){o?Qr(e,s,s):$r(e,s)
e[s]=o}}return e}
i.handleLateInit_=function(e){if(0!==e.networkState&&3!==e.networkState)if(0!==e.readyState){var t=["loadstart"]
t.push("loadedmetadata")
e.readyState>=2&&t.push("loadeddata")
e.readyState>=3&&t.push("canplay")
e.readyState>=4&&t.push("canplaythrough")
this.ready((function(){t.forEach((function(e){this.trigger(e)}),this)}))}else{var i=!1,n=function(){i=!0}
this.on("loadstart",n)
var r=function(){i||this.trigger("loadstart")}
this.on("loadedmetadata",r)
this.ready((function(){this.off("loadstart",n)
this.off("loadedmetadata",r)
i||this.trigger("loadstart")}))}}
i.setScrubbing=function(e){this.isScrubbing_=e}
i.scrubbing=function(){return this.isScrubbing_}
i.setCurrentTime=function(e){try{this.isScrubbing_&&this.el_.fastSeek&&ws?this.el_.fastSeek(e):this.el_.currentTime=e}catch(Kg){Er(Kg,"Video is not ready. (Video.js)")}}
i.duration=function(){var e=this
if(this.el_.duration===1/0&&hs&&vs&&0===this.el_.currentTime){this.on("timeupdate",(function t(){if(e.el_.currentTime>0){e.el_.duration===1/0&&e.trigger("durationchange")
e.off("timeupdate",t)}}))
return NaN}return this.el_.duration||NaN}
i.width=function(){return this.el_.offsetWidth}
i.height=function(){return this.el_.offsetHeight}
i.proxyWebkitFullscreen_=function(){var e=this
if("webkitDisplayingFullscreen"in this.el_){var t=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){if("webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode){this.one("webkitendfullscreen",t)
this.trigger("fullscreenchange",{isFullscreen:!0,nativeIOSFullscreen:!0})}}
this.on("webkitbeginfullscreen",i)
this.on("dispose",(function(){e.off("webkitbeginfullscreen",i)
e.off("webkitendfullscreen",t)}))}}
i.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var e=a.navigator&&a.navigator.userAgent||""
if(/Android/.test(e)||!/Chrome|Mac OS X 10.5/.test(e))return!0}return!1}
i.enterFullScreen=function(){var e=this.el_
if(e.paused&&e.networkState<=e.HAVE_METADATA){Vs(this.el_.play())
this.setTimeout((function(){e.pause()
try{e.webkitEnterFullScreen()}catch(Kg){this.trigger("fullscreenerror",Kg)}}),0)}else try{e.webkitEnterFullScreen()}catch(Kg){this.trigger("fullscreenerror",Kg)}}
i.exitFullScreen=function(){this.el_.webkitDisplayingFullscreen?this.el_.webkitExitFullScreen():this.trigger("fullscreenerror",new Error("The video is not fullscreen"))}
i.requestPictureInPicture=function(){return this.el_.requestPictureInPicture()}
i.src=function(e){if(void 0===e)return this.el_.src
this.setSrc(e)}
i.reset=function(){t.resetMediaElement(this.el_)}
i.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc}
i.setControls=function(e){this.el_.controls=!!e}
i.addTextTrack=function(t,i,n){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,i,n):e.prototype.addTextTrack.call(this,t,i,n)}
i.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return e.prototype.createRemoteTextTrack.call(this,t)
var i=R.createElement("track")
t.kind&&(i.kind=t.kind)
t.label&&(i.label=t.label);(t.language||t.srclang)&&(i.srclang=t.language||t.srclang)
t.default&&(i.default=t.default)
t.id&&(i.id=t.id)
t.src&&(i.src=t.src)
return i}
i.addRemoteTextTrack=function(t,i){var n=e.prototype.addRemoteTextTrack.call(this,t,i)
this.featuresNativeTextTracks&&this.el().appendChild(n)
return n}
i.removeRemoteTextTrack=function(t){e.prototype.removeRemoteTextTrack.call(this,t)
if(this.featuresNativeTextTracks)for(var i=this.$$("track"),n=i.length;n--;)t!==i[n]&&t!==i[n].track||this.el().removeChild(i[n])}
i.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality()
var e={}
if(void 0!==this.el().webkitDroppedFrameCount&&void 0!==this.el().webkitDecodedFrameCount){e.droppedVideoFrames=this.el().webkitDroppedFrameCount
e.totalVideoFrames=this.el().webkitDecodedFrameCount}a.performance&&"function"==typeof a.performance.now?e.creationTime=a.performance.now():a.performance&&a.performance.timing&&"number"==typeof a.performance.timing.navigationStart&&(e.creationTime=a.Date.now()-a.performance.timing.navigationStart)
return e}
return t})(Co)
vu(yu,"TEST_VID",(function(){if(Mr()){var e=R.createElement("video"),t=R.createElement("track")
t.kind="captions"
t.srclang="en"
t.label="English"
e.appendChild(t)
return e}}))
yu.isSupported=function(){try{yu.TEST_VID.volume=.5}catch(Kg){return!1}return!(!yu.TEST_VID||!yu.TEST_VID.canPlayType)}
yu.canPlayType=function(e){return yu.TEST_VID.canPlayType(e)}
yu.canPlaySource=function(e,t){return yu.canPlayType(e.type)}
yu.canControlVolume=function(){try{var e=yu.TEST_VID.volume
yu.TEST_VID.volume=e/2+.1
return e!==yu.TEST_VID.volume}catch(Kg){return!1}}
yu.canMuteVolume=function(){try{var e=yu.TEST_VID.muted
yu.TEST_VID.muted=!e
yu.TEST_VID.muted?Qr(yu.TEST_VID,"muted","muted"):$r(yu.TEST_VID,"muted")
return e!==yu.TEST_VID.muted}catch(Kg){return!1}}
yu.canControlPlaybackRate=function(){if(hs&&vs&&ys<58)return!1
try{var e=yu.TEST_VID.playbackRate
yu.TEST_VID.playbackRate=e/2+.1
return e!==yu.TEST_VID.playbackRate}catch(Kg){return!1}}
yu.canOverrideAttributes=function(){try{var e=function(){}
Object.defineProperty(R.createElement("video"),"src",{get:e,set:e})
Object.defineProperty(R.createElement("audio"),"src",{get:e,set:e})
Object.defineProperty(R.createElement("video"),"innerHTML",{get:e,set:e})
Object.defineProperty(R.createElement("audio"),"innerHTML",{get:e,set:e})}catch(Kg){return!1}return!0}
yu.supportsNativeTextTracks=function(){return ws||Es&&vs}
yu.supportsNativeVideoTracks=function(){return!(!yu.TEST_VID||!yu.TEST_VID.videoTracks)}
yu.supportsNativeAudioTracks=function(){return!(!yu.TEST_VID||!yu.TEST_VID.audioTracks)}
yu.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"];[["featuresVolumeControl","canControlVolume"],["featuresMuteControl","canMuteVolume"],["featuresPlaybackRate","canControlPlaybackRate"],["featuresSourceset","canOverrideAttributes"],["featuresNativeTextTracks","supportsNativeTextTracks"],["featuresNativeVideoTracks","supportsNativeVideoTracks"],["featuresNativeAudioTracks","supportsNativeAudioTracks"]].forEach((function(e){var t=e[0],i=e[1]
vu(yu.prototype,t,(function(){return yu[i]()}),!0)}))
yu.prototype.movingMediaElementInDOM=!Es
yu.prototype.featuresFullscreenResize=!0
yu.prototype.featuresProgressEvents=!0
yu.prototype.featuresTimeupdateEvents=!0
yu.patchCanPlayType=function(){if(ps>=4&&!ms&&!vs){cu=yu.TEST_VID&&yu.TEST_VID.constructor.prototype.canPlayType
yu.TEST_VID.constructor.prototype.canPlayType=function(e){return e&&/^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e)?"maybe":cu.call(this,e)}}}
yu.unpatchCanPlayType=function(){var e=yu.TEST_VID.constructor.prototype.canPlayType
cu&&(yu.TEST_VID.constructor.prototype.canPlayType=cu)
return e}
yu.patchCanPlayType()
yu.disposeMediaElement=function(e){if(e){e.parentNode&&e.parentNode.removeChild(e)
for(;e.hasChildNodes();)e.removeChild(e.firstChild)
e.removeAttribute("src")
"function"==typeof e.load&&(function(){try{e.load()}catch(Kg){}})()}}
yu.resetMediaElement=function(e){if(e){for(var t=e.querySelectorAll("source"),i=t.length;i--;)e.removeChild(t[i])
e.removeAttribute("src")
"function"==typeof e.load&&(function(){try{e.load()}catch(Kg){}})()}};["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach((function(e){yu.prototype[e]=function(){return this.el_[e]||this.el_.hasAttribute(e)}}));["muted","defaultMuted","autoplay","loop","playsinline"].forEach((function(e){yu.prototype["set"+Za(e)]=function(t){this.el_[e]=t
t?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}));["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","disablePictureInPicture","played","networkState","readyState","videoWidth","videoHeight","crossOrigin"].forEach((function(e){yu.prototype[e]=function(){return this.el_[e]}}));["volume","src","poster","preload","playbackRate","defaultPlaybackRate","disablePictureInPicture","crossOrigin"].forEach((function(e){yu.prototype["set"+Za(e)]=function(t){this.el_[e]=t}}));["pause","load","play"].forEach((function(e){yu.prototype[e]=function(){return this.el_[e]()}}))
Co.withSourceHandlers(yu)
yu.nativeSourceHandler={}
yu.nativeSourceHandler.canPlayType=function(e){try{return yu.TEST_VID.canPlayType(e)}catch(Kg){return""}}
yu.nativeSourceHandler.canHandleSource=function(e,t){if(e.type)return yu.nativeSourceHandler.canPlayType(e.type)
if(e.src){var i=uo(e.src)
return yu.nativeSourceHandler.canPlayType("video/"+i)}return""}
yu.nativeSourceHandler.handleSource=function(e,t,i){t.setSrc(e.src)}
yu.nativeSourceHandler.dispose=function(){}
yu.registerSourceHandler(yu.nativeSourceHandler)
Co.registerTech("Html5",yu)
var _u=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],bu={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},Tu=["tiny","xsmall","small","medium","large","xlarge","huge"],Su={}
Tu.forEach((function(e){var t="x"===e.charAt(0)?"x-"+e.substring(1):e
Su[e]="vjs-layout-"+t}))
var ku={tiny:210,xsmall:320,small:425,medium:768,large:1440,xlarge:2560,huge:1/0},Cu=(function(e){U(t,e)
function t(i,n,r){var a
i.id=i.id||n.id||"vjs_video_"+Ta();(n=xr(t.getTagSettings(i),n)).initChildren=!1
n.createEl=!1
n.evented=!1
n.reportTouchActivity=!1
if(!n.language)if("function"==typeof i.closest){var s=i.closest("[lang]")
s&&s.getAttribute&&(n.language=s.getAttribute("lang"))}else for(var o=i;o&&1===o.nodeType;){if(Xr(o).hasOwnProperty("lang")){n.language=o.getAttribute("lang")
break}o=o.parentNode}(a=e.call(this,null,n,r)||this).boundDocumentFullscreenChange_=Ua(M(a),a.documentFullscreenChange_)
a.boundFullWindowOnEscKey_=Ua(M(a),a.fullWindowOnEscKey)
a.isFullscreen_=!1
a.log=wr(a.id_)
a.fsApi_=Ds
a.isPosterFromTech_=!1
a.queuedCallbacks_=[]
a.isReady_=!1
a.hasStarted_=!1
a.userActive_=!1
a.debugEnabled_=!1
if(!a.options_||!a.options_.techOrder||!a.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?")
a.tag=i
a.tagAttributes=i&&Xr(i)
a.language(a.options_.language)
if(n.languages){var l={}
Object.getOwnPropertyNames(n.languages).forEach((function(e){l[e.toLowerCase()]=n.languages[e]}))
a.languages_=l}else a.languages_=t.prototype.options_.languages
a.resetCache_()
a.poster_=n.poster||""
a.controls_=!!n.controls
i.controls=!1
i.removeAttribute("controls")
a.changingSrc_=!1
a.playCallbacks_=[]
a.playTerminatedQueue_=[]
i.hasAttribute("autoplay")?a.autoplay(!0):a.autoplay(a.options_.autoplay)
n.plugins&&Object.keys(n.plugins).forEach((function(e){if("function"!=typeof a[e])throw new Error('plugin "'+e+'" does not exist')}))
a.scrubbing_=!1
a.el_=a.createEl()
Ya(M(a),{eventBusKey:"el_"})
if(a.fsApi_.requestFullscreen){Aa(R,a.fsApi_.fullscreenchange,a.boundDocumentFullscreenChange_)
a.on(a.fsApi_.fullscreenchange,a.boundDocumentFullscreenChange_)}a.fluid_&&a.on("playerreset",a.updateStyleEl_)
var u=es(a.options_)
n.plugins&&Object.keys(n.plugins).forEach((function(e){a[e](n.plugins[e])}))
n.debug&&a.debug(!0)
a.options_.playerOptions=u
a.middleware_=[]
a.initChildren()
a.isAudio("audio"===i.nodeName.toLowerCase())
a.controls()?a.addClass("vjs-controls-enabled"):a.addClass("vjs-controls-disabled")
a.el_.setAttribute("role","region")
a.isAudio()?a.el_.setAttribute("aria-label",a.localize("Audio Player")):a.el_.setAttribute("aria-label",a.localize("Video Player"))
a.isAudio()&&a.addClass("vjs-audio")
a.flexNotSupported_()&&a.addClass("vjs-no-flex")
Ss&&a.addClass("vjs-touch-enabled")
Es||a.addClass("vjs-workinghover")
t.players[a.id_]=M(a)
var c=Sr.split(".")[0]
a.addClass("vjs-v"+c)
a.userActive(!0)
a.reportUserActivity()
a.one("play",a.listenForUserActivity_)
a.on("stageclick",a.handleStageClick_)
a.on("keydown",a.handleKeyDown)
a.on("languagechange",a.handleLanguagechange)
a.breakpoints(a.options_.breakpoints)
a.responsive(a.options_.responsive)
return a}var i=t.prototype
i.dispose=function(){var i=this
this.trigger("dispose")
this.off("dispose")
xa(R,this.fsApi_.fullscreenchange,this.boundDocumentFullscreenChange_)
xa(R,"keydown",this.boundFullWindowOnEscKey_)
if(this.styleEl_&&this.styleEl_.parentNode){this.styleEl_.parentNode.removeChild(this.styleEl_)
this.styleEl_=null}t.players[this.id_]=null
this.tag&&this.tag.player&&(this.tag.player=null)
this.el_&&this.el_.player&&(this.el_.player=null)
if(this.tech_){this.tech_.dispose()
this.isPosterFromTech_=!1
this.poster_=""}this.playerElIngest_&&(this.playerElIngest_=null)
this.tag&&(this.tag=null)
wo[this.id()]=null
ko.names.forEach((function(e){var t=ko[e],n=i[t.getterName]()
n&&n.off&&n.off()}))
e.prototype.dispose.call(this)}
i.createEl=function(){var t,i=this.tag,n=this.playerElIngest_=i.parentNode&&i.parentNode.hasAttribute&&i.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase()
n?t=this.el_=i.parentNode:r||(t=this.el_=e.prototype.createEl.call(this,"div"))
var s=Xr(i)
if(r){t=this.el_=i
i=this.tag=R.createElement("video")
for(;t.children.length;)i.appendChild(t.firstChild)
qr(t,"video-js")||Wr(t,"video-js")
t.appendChild(i)
n=this.playerElIngest_=t
Object.keys(t).forEach((function(e){try{i[e]=t[e]}catch(Kg){}}))}i.setAttribute("tabindex","-1")
s.tabindex="-1"
if(_s||vs&&Ts){i.setAttribute("role","application")
s.role="application"}i.removeAttribute("width")
i.removeAttribute("height")
"width"in s&&delete s.width
"height"in s&&delete s.height
Object.getOwnPropertyNames(s).forEach((function(e){r&&"class"===e||t.setAttribute(e,s[e])
r&&i.setAttribute(e,s[e])}))
i.playerId=i.id
i.id+="_html5_api"
i.className="vjs-tech"
i.player=t.player=this
this.addClass("vjs-paused")
if(!0!==a.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=ya("vjs-styles-dimensions")
var o=ca(".vjs-styles-defaults"),l=ca("head")
l.insertBefore(this.styleEl_,o?o.nextSibling:l.firstChild)}this.fill_=!1
this.fluid_=!1
this.width(this.options_.width)
this.height(this.options_.height)
this.fill(this.options_.fill)
this.fluid(this.options_.fluid)
this.aspectRatio(this.options_.aspectRatio)
this.crossOrigin(this.options_.crossOrigin||this.options_.crossorigin)
for(var u=i.getElementsByTagName("a"),c=0;c<u.length;c++){var d=u.item(c)
Wr(d,"vjs-hidden")
d.setAttribute("hidden","hidden")}i.initNetworkState_=i.networkState
i.parentNode&&!n&&i.parentNode.insertBefore(t,i)
Hr(i,t)
this.children_.unshift(i)
this.el_.setAttribute("lang",this.language_)
this.el_=t
return t}
i.crossOrigin=function(e){if(!e)return this.techGet_("crossOrigin")
"anonymous"===e||"use-credentials"===e?this.techCall_("setCrossOrigin",e):Er.warn('crossOrigin must be "anonymous" or "use-credentials", given "'+e+'"')}
i.width=function(e){return this.dimension("width",e)}
i.height=function(e){return this.dimension("height",e)}
i.dimension=function(e,t){var i=e+"_"
if(void 0===t)return this[i]||0
if(""!==t&&"auto"!==t){var n=parseFloat(t)
if(isNaN(n))Er.error('Improper value "'+t+'" supplied for for '+e)
else{this[i]=n
this.updateStyleEl_()}}else{this[i]=void 0
this.updateStyleEl_()}}
i.fluid=function(e){if(void 0===e)return!!this.fluid_
this.fluid_=!!e
Va(this)&&this.off("playerreset",this.updateStyleEl_)
if(e){this.addClass("vjs-fluid")
this.fill(!1);((function(e,t){if(Va(e))t()
else{e.eventedCallbacks||(e.eventedCallbacks=[])
e.eventedCallbacks.push(t)}}))((function(){this.on("playerreset",this.updateStyleEl_)}))}else this.removeClass("vjs-fluid")
this.updateStyleEl_()}
i.fill=function(e){if(void 0===e)return!!this.fill_
this.fill_=!!e
if(e){this.addClass("vjs-fill")
this.fluid(!1)}else this.removeClass("vjs-fill")}
i.aspectRatio=function(e){if(void 0===e)return this.aspectRatio_
if(!/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.")
this.aspectRatio_=e
this.fluid(!0)
this.updateStyleEl_()}
i.updateStyleEl_=function(){if(!0!==a.VIDEOJS_NO_DYNAMIC_STYLE){var e,t,i,n=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),r=n[1]/n[0]
e=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/r:this.videoWidth()||300
t=void 0!==this.height_?this.height_:e*r
i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions"
this.addClass(i)
_a(this.styleEl_,"\n      ."+i+" {\n        width: "+e+"px;\n        height: "+t+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*r+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,o="number"==typeof this.height_?this.height_:this.options_.height,l=this.tech_&&this.tech_.el()
if(l){s>=0&&(l.width=s)
o>=0&&(l.height=o)}}}
i.loadTech_=function(e,t){var i=this
this.tech_&&this.unloadTech_()
var n=Za(e),r=e.charAt(0).toLowerCase()+e.slice(1)
if("Html5"!==n&&this.tag){Co.getTech("Html5").disposeMediaElement(this.tag)
this.tag.player=null
this.tag=null}this.techName_=n
this.isReady_=!1
var a={source:t,autoplay:"string"!=typeof this.autoplay()&&this.autoplay(),nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,disablePictureInPicture:this.options_.disablePictureInPicture,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset,Promise:this.options_.Promise}
ko.names.forEach((function(e){var t=ko[e]
a[t.getterName]=i[t.privateName]}))
xr(a,this.options_[n])
xr(a,this.options_[r])
xr(a,this.options_[e.toLowerCase()])
this.tag&&(a.tag=this.tag)
t&&t.src===this.cache_.src&&this.cache_.currentTime>0&&(a.startTime=this.cache_.currentTime)
var s=Co.getTech(e)
if(!s)throw new Error("No Tech named '"+n+"' exists! '"+n+"' should be registered using videojs.registerTech()'")
this.tech_=new s(a)
this.tech_.ready(Ua(this,this.handleTechReady_),!0)
Ws(this.textTracksJson_||[],this.tech_)
_u.forEach((function(e){i.on(i.tech_,e,i["handleTech"+Za(e)+"_"])}))
Object.keys(bu).forEach((function(e){i.on(i.tech_,e,(function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+bu[e]+"_"].bind(i),event:t}):i["handleTech"+bu[e]+"_"](t)}))}))
this.on(this.tech_,"loadstart",this.handleTechLoadStart_)
this.on(this.tech_,"sourceset",this.handleTechSourceset_)
this.on(this.tech_,"waiting",this.handleTechWaiting_)
this.on(this.tech_,"ended",this.handleTechEnded_)
this.on(this.tech_,"seeking",this.handleTechSeeking_)
this.on(this.tech_,"play",this.handleTechPlay_)
this.on(this.tech_,"firstplay",this.handleTechFirstPlay_)
this.on(this.tech_,"pause",this.handleTechPause_)
this.on(this.tech_,"durationchange",this.handleTechDurationChange_)
this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_)
this.on(this.tech_,"fullscreenerror",this.handleTechFullscreenError_)
this.on(this.tech_,"enterpictureinpicture",this.handleTechEnterPictureInPicture_)
this.on(this.tech_,"leavepictureinpicture",this.handleTechLeavePictureInPicture_)
this.on(this.tech_,"error",this.handleTechError_)
this.on(this.tech_,"loadedmetadata",this.updateStyleEl_)
this.on(this.tech_,"posterchange",this.handleTechPosterChange_)
this.on(this.tech_,"textdata",this.handleTechTextData_)
this.on(this.tech_,"ratechange",this.handleTechRateChange_)
this.usingNativeControls(this.techGet_("controls"))
this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_()
this.tech_.el().parentNode===this.el()||"Html5"===n&&this.tag||Hr(this.tech_.el(),this.el())
if(this.tag){this.tag.player=null
this.tag=null}}
i.unloadTech_=function(){var e=this
ko.names.forEach((function(t){var i=ko[t]
e[i.privateName]=e[i.getterName]()}))
this.textTracksJson_=qs(this.tech_)
this.isReady_=!1
this.tech_.dispose()
this.tech_=!1
if(this.isPosterFromTech_){this.poster_=""
this.trigger("posterchange")}this.isPosterFromTech_=!1}
i.tech=function(e){void 0===e&&Er.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n")
return this.tech_}
i.addTechControlsListeners_=function(){this.removeTechControlsListeners_()
this.on(this.tech_,"mouseup",this.handleTechClick_)
this.on(this.tech_,"dblclick",this.handleTechDoubleClick_)
this.on(this.tech_,"touchstart",this.handleTechTouchStart_)
this.on(this.tech_,"touchmove",this.handleTechTouchMove_)
this.on(this.tech_,"touchend",this.handleTechTouchEnd_)
this.on(this.tech_,"tap",this.handleTechTap_)}
i.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_)
this.off(this.tech_,"touchstart",this.handleTechTouchStart_)
this.off(this.tech_,"touchmove",this.handleTechTouchMove_)
this.off(this.tech_,"touchend",this.handleTechTouchEnd_)
this.off(this.tech_,"mouseup",this.handleTechClick_)
this.off(this.tech_,"dblclick",this.handleTechDoubleClick_)}
i.handleTechReady_=function(){this.triggerReady()
this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume)
this.handleTechPosterChange_()
this.handleTechDurationChange_()}
i.handleTechLoadStart_=function(){this.removeClass("vjs-ended")
this.removeClass("vjs-seeking")
this.error(null)
this.handleTechDurationChange_()
if(this.paused()){this.hasStarted(!1)
this.trigger("loadstart")}else{this.trigger("loadstart")
this.trigger("firstplay")}this.manualAutoplay_(this.autoplay())}
i.manualAutoplay_=function(e){var t=this
if(this.tech_&&"string"==typeof e){var i,n=function(){var e=t.muted()
t.muted(!0)
var i=function(){t.muted(e)}
t.playTerminatedQueue_.push(i)
var n=t.play()
if(Fs(n))return n.catch(i)}
"any"===e&&!0!==this.muted()?Fs(i=this.play())&&(i=i.catch(n)):i="muted"===e&&!0!==this.muted()?n():this.play()
if(Fs(i))return i.then((function(){t.trigger({type:"autoplay-success",autoplay:e})})).catch((function(i){t.trigger({type:"autoplay-failure",autoplay:e})}))}}
i.updateSourceCaches_=function(e){void 0===e&&(e="")
var t=e,i=""
if("string"!=typeof t){t=e.src
i=e.type}this.cache_.source=this.cache_.source||{}
this.cache_.sources=this.cache_.sources||[]
t&&!i&&(i=(function(e,t){if(!t)return""
if(e.cache_.source.src===t&&e.cache_.source.type)return e.cache_.source.type
var i=e.cache_.sources.filter((function(e){return e.src===t}))
if(i.length)return i[0].type
for(var n=e.$$("source"),r=0;r<n.length;r++){var a=n[r]
if(a.type&&a.src&&a.src===t)return a.type}return No(t)})(this,t))
this.cache_.source=es({},e,{src:t,type:i})
for(var n=this.cache_.sources.filter((function(e){return e.src&&e.src===t})),r=[],a=this.$$("source"),s=[],o=0;o<a.length;o++){var l=Xr(a[o])
r.push(l)
l.src&&l.src===t&&s.push(l.src)}s.length&&!n.length?this.cache_.sources=r:n.length||(this.cache_.sources=[this.cache_.source])
this.cache_.src=t}
i.handleTechSourceset_=function(e){var t=this
if(!this.changingSrc_){var i=function(e){return t.updateSourceCaches_(e)},n=this.currentSource().src,r=e.src
n&&!/^blob:/.test(n)&&/^blob:/.test(r)&&(!this.lastSource_||this.lastSource_.tech!==r&&this.lastSource_.player!==n)&&(i=function(){})
i(r)
e.src||this.tech_.any(["sourceset","loadstart"],(function(e){if("sourceset"!==e.type){var i=t.techGet("currentSrc")
t.lastSource_.tech=i
t.updateSourceCaches_(i)}}))}this.lastSource_={player:this.currentSource().src,tech:e.src}
this.trigger({src:e.src,type:"sourceset"})}
i.hasStarted=function(e){if(void 0===e)return this.hasStarted_
if(e!==this.hasStarted_){this.hasStarted_=e
if(this.hasStarted_){this.addClass("vjs-has-started")
this.trigger("firstplay")}else this.removeClass("vjs-has-started")}}
i.handleTechPlay_=function(){this.removeClass("vjs-ended")
this.removeClass("vjs-paused")
this.addClass("vjs-playing")
this.hasStarted(!0)
this.trigger("play")}
i.handleTechRateChange_=function(){if(this.tech_.playbackRate()>0&&0===this.cache_.lastPlaybackRate){this.queuedCallbacks_.forEach((function(e){return e.callback(e.event)}))
this.queuedCallbacks_=[]}this.cache_.lastPlaybackRate=this.tech_.playbackRate()
this.trigger("ratechange")}
i.handleTechWaiting_=function(){var e=this
this.addClass("vjs-waiting")
this.trigger("waiting")
var t=this.currentTime()
this.on("timeupdate",(function i(){if(t!==e.currentTime()){e.removeClass("vjs-waiting")
e.off("timeupdate",i)}}))}
i.handleTechCanPlay_=function(){this.removeClass("vjs-waiting")
this.trigger("canplay")}
i.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting")
this.trigger("canplaythrough")}
i.handleTechPlaying_=function(){this.removeClass("vjs-waiting")
this.trigger("playing")}
i.handleTechSeeking_=function(){this.addClass("vjs-seeking")
this.trigger("seeking")}
i.handleTechSeeked_=function(){this.removeClass("vjs-seeking")
this.removeClass("vjs-ended")
this.trigger("seeked")}
i.handleTechFirstPlay_=function(){if(this.options_.starttime){Er.warn("Passing the `starttime` option to the player will be deprecated in 6.0")
this.currentTime(this.options_.starttime)}this.addClass("vjs-has-started")
this.trigger("firstplay")}
i.handleTechPause_=function(){this.removeClass("vjs-playing")
this.addClass("vjs-paused")
this.trigger("pause")}
i.handleTechEnded_=function(){this.addClass("vjs-ended")
if(this.options_.loop){this.currentTime(0)
this.play()}else this.paused()||this.pause()
this.trigger("ended")}
i.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))}
i.handleTechClick_=function(e){la(e)&&this.controls_&&(this.paused()?Vs(this.play()):this.pause())}
i.handleTechDoubleClick_=function(e){if(this.controls_){Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),(function(t){return t.contains(e.target)}))||void 0!==this.options_&&void 0!==this.options_.userActions&&void 0!==this.options_.userActions.doubleClick&&!1===this.options_.userActions.doubleClick||(void 0!==this.options_&&void 0!==this.options_.userActions&&"function"==typeof this.options_.userActions.doubleClick?this.options_.userActions.doubleClick.call(this,e):this.isFullscreen()?this.exitFullscreen():this.requestFullscreen())}}
i.handleTechTap_=function(){this.userActive(!this.userActive())}
i.handleTechTouchStart_=function(){this.userWasActive=this.userActive()}
i.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()}
i.handleTechTouchEnd_=function(e){e.preventDefault()}
i.handleStageClick_=function(){this.reportUserActivity()}
i.toggleFullscreenClass_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")}
i.documentFullscreenChange_=function(e){var t=e.target.player
if(!t||t===this){var i=this.el(),n=R[this.fsApi_.fullscreenElement]===i
!n&&i.matches?n=i.matches(":"+this.fsApi_.fullscreen):!n&&i.msMatchesSelector&&(n=i.msMatchesSelector(":"+this.fsApi_.fullscreen))
this.isFullscreen(n)}}
i.handleTechFullscreenChange_=function(e,t){if(t){t.nativeIOSFullscreen&&this.toggleClass("vjs-ios-native-fs")
this.isFullscreen(t.isFullscreen)}}
i.handleTechFullscreenError_=function(e,t){this.trigger("fullscreenerror",t)}
i.togglePictureInPictureClass_=function(){this.isInPictureInPicture()?this.addClass("vjs-picture-in-picture"):this.removeClass("vjs-picture-in-picture")}
i.handleTechEnterPictureInPicture_=function(e){this.isInPictureInPicture(!0)}
i.handleTechLeavePictureInPicture_=function(e){this.isInPictureInPicture(!1)}
i.handleTechError_=function(){var e=this.tech_.error()
this.error(e)}
i.handleTechTextData_=function(){var e=null
arguments.length>1&&(e=arguments[1])
this.trigger("textdata",e)}
i.getCache=function(){return this.cache_}
i.resetCache_=function(){this.cache_={currentTime:0,initTime:0,inactivityTimeout:this.options_.inactivityTimeout,duration:NaN,lastVolume:1,lastPlaybackRate:this.defaultPlaybackRate(),media:null,src:"",source:{},sources:[],volume:1}}
i.techCall_=function(e,t){this.ready((function(){if(e in Oo)return (function(e,t,i,n){return t[i](e.reduce(Do(i),n))})(this.middleware_,this.tech_,e,t)
if(e in Lo)return Ao(this.middleware_,this.tech_,e,t)
try{this.tech_&&this.tech_[e](t)}catch(Kg){Er(Kg)
throw Kg}}),!0)}
i.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in xo)return (function(e,t,i){return e.reduceRight(Do(i),t[i]())})(this.middleware_,this.tech_,e)
if(e in Lo)return Ao(this.middleware_,this.tech_,e)
try{return this.tech_[e]()}catch(Kg){if(void 0===this.tech_[e]){Er("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",Kg)
throw Kg}if("TypeError"===Kg.name){Er("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",Kg)
this.tech_.isReady_=!1
throw Kg}Er(Kg)
throw Kg}}}
i.play=function(){var e=this,t=this.options_.Promise||a.Promise
return t?new t(function(t){e.play_(t)}):this.play_()}
i.play_=function(e){var t=this
void 0===e&&(e=Vs)
this.playCallbacks_.push(e)
var i=Boolean(!this.changingSrc_&&(this.src()||this.currentSrc()))
if(this.waitToPlay_){this.off(["ready","loadstart"],this.waitToPlay_)
this.waitToPlay_=null}if(this.isReady_&&i){var n=this.techGet_("play")
null===n?this.runPlayTerminatedQueue_():this.runPlayCallbacks_(n)}else{this.waitToPlay_=function(e){t.play_()}
this.one(["ready","loadstart"],this.waitToPlay_)
i||!ws&&!Es||this.load()}}
i.runPlayTerminatedQueue_=function(){var e=this.playTerminatedQueue_.slice(0)
this.playTerminatedQueue_=[]
e.forEach((function(e){e()}))}
i.runPlayCallbacks_=function(e){var t=this.playCallbacks_.slice(0)
this.playCallbacks_=[]
this.playTerminatedQueue_=[]
t.forEach((function(t){t(e)}))}
i.pause=function(){this.techCall_("pause")}
i.paused=function(){return!1!==this.techGet_("paused")}
i.played=function(){return this.techGet_("played")||xs(0,0)}
i.scrubbing=function(e){if(void 0===e)return this.scrubbing_
this.scrubbing_=!!e
this.techCall_("setScrubbing",this.scrubbing_)
e?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")}
i.currentTime=function(e){if(void 0===e){this.cache_.currentTime=this.techGet_("currentTime")||0
return this.cache_.currentTime}e<0&&(e=0)
if(this.isReady_&&!this.changingSrc_&&this.tech_&&this.tech_.isReady_){this.techCall_("setCurrentTime",e)
this.cache_.initTime=0}else{this.cache_.initTime=e
this.off("canplay",this.applyInitTime_)
this.one("canplay",this.applyInitTime_)}}
i.applyInitTime_=function(){this.currentTime(this.cache_.initTime)}
i.duration=function(e){if(void 0===e)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(e=parseFloat(e))<0&&(e=1/0)
if(e!==this.cache_.duration){this.cache_.duration=e
e===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live")
isNaN(e)||this.trigger("durationchange")}}
i.remainingTime=function(){return this.duration()-this.currentTime()}
i.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())}
i.buffered=function(){var e=this.techGet_("buffered")
e&&e.length||(e=xs(0,0))
return e}
i.bufferedPercent=function(){return Os(this.buffered(),this.duration())}
i.bufferedEnd=function(){var e=this.buffered(),t=this.duration(),i=e.end(e.length-1)
i>t&&(i=t)
return i}
i.volume=function(e){var t
if(void 0===e){t=parseFloat(this.techGet_("volume"))
return isNaN(t)?1:t}t=Math.max(0,Math.min(1,parseFloat(e)))
this.cache_.volume=t
this.techCall_("setVolume",t)
t>0&&this.lastVolume_(t)}
i.muted=function(e){if(void 0===e)return this.techGet_("muted")||!1
this.techCall_("setMuted",e)}
i.defaultMuted=function(e){return void 0!==e?this.techCall_("setDefaultMuted",e):this.techGet_("defaultMuted")||!1}
i.lastVolume_=function(e){if(void 0===e||0===e)return this.cache_.lastVolume
this.cache_.lastVolume=e}
i.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1}
i.isFullscreen=function(e){if(void 0===e)return this.isFullscreen_
var t=this.isFullscreen_
this.isFullscreen_=Boolean(e)
this.isFullscreen_!==t&&this.fsApi_.prefixed&&this.trigger("fullscreenchange")
this.toggleFullscreenClass_()}
i.requestFullscreen=function(e){var t=this.options_.Promise||a.Promise
if(t){var i=this
return new t(function(t,n){function r(){i.off("fullscreenerror",s)
i.off("fullscreenchange",a)}function a(){r()
t()}function s(e,t){r()
n(t)}i.one("fullscreenchange",a)
i.one("fullscreenerror",s)
var o=i.requestFullscreenHelper_(e)
if(o){o.then(r,r)
return o}})}return this.requestFullscreenHelper_()}
i.requestFullscreenHelper_=function(e){var t,i=this
if(!this.fsApi_.prefixed){t=this.options_.fullscreen&&this.options_.fullscreen.options||{}
void 0!==e&&(t=e)}if(this.fsApi_.requestFullscreen){var n=this.el_[this.fsApi_.requestFullscreen](t)
n&&n.then((function(){return i.isFullscreen(!0)}),(function(){return i.isFullscreen(!1)}))
return n}this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):this.enterFullWindow()}
i.exitFullscreen=function(){var e=this.options_.Promise||a.Promise
if(e){var t=this
return new e(function(e,i){function n(){t.off("fullscreenerror",a)
t.off("fullscreenchange",r)}function r(){n()
e()}function a(e,t){n()
i(t)}t.one("fullscreenchange",r)
t.one("fullscreenerror",a)
var s=t.exitFullscreenHelper_()
if(s){s.then(n,n)
return s}})}return this.exitFullscreenHelper_()}
i.exitFullscreenHelper_=function(){var e=this
if(this.fsApi_.requestFullscreen){var t=R[this.fsApi_.exitFullscreen]()
t&&t.then((function(){return e.isFullscreen(!1)}))
return t}this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):this.exitFullWindow()}
i.enterFullWindow=function(){this.isFullscreen(!0)
this.isFullWindow=!0
this.docOrigOverflow=R.documentElement.style.overflow
Aa(R,"keydown",this.boundFullWindowOnEscKey_)
R.documentElement.style.overflow="hidden"
Wr(R.body,"vjs-full-window")
this.trigger("enterFullWindow")}
i.fullWindowOnEscKey=function(e){j.isEventKey(e,"Esc")&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())}
i.exitFullWindow=function(){this.isFullscreen(!1)
this.isFullWindow=!1
xa(R,"keydown",this.boundFullWindowOnEscKey_)
R.documentElement.style.overflow=this.docOrigOverflow
zr(R.body,"vjs-full-window")
this.trigger("exitFullWindow")}
i.disablePictureInPicture=function(e){if(void 0===e)return this.techGet_("disablePictureInPicture")
this.techCall_("setDisablePictureInPicture",e)
this.options_.disablePictureInPicture=e
this.trigger("disablepictureinpicturechanged")}
i.isInPictureInPicture=function(e){if(void 0===e)return!!this.isInPictureInPicture_
this.isInPictureInPicture_=!!e
this.togglePictureInPictureClass_()}
i.requestPictureInPicture=function(){if("pictureInPictureEnabled"in R&&!1===this.disablePictureInPicture())return this.techGet_("requestPictureInPicture")}
i.exitPictureInPicture=function(){if("pictureInPictureEnabled"in R)return R.exitPictureInPicture()}
i.handleKeyDown=function(e){var t=this.options_.userActions
if(t&&t.hotkeys){((function(e){var t=e.tagName.toLowerCase()
if(e.isContentEditable)return!0
if("input"===t)return-1===["button","checkbox","hidden","radio","reset","submit"].indexOf(e.type)
return-1!==["textarea"].indexOf(t)}))(this.el_.ownerDocument.activeElement)||("function"==typeof t.hotkeys?t.hotkeys.call(this,e):this.handleHotkeys(e))}}
i.handleHotkeys=function(e){var t=this.options_.userActions?this.options_.userActions.hotkeys:{},i=t.fullscreenKey,n=void 0===i?function(e){return j.isEventKey(e,"f")}:i,r=t.muteKey,a=void 0===r?function(e){return j.isEventKey(e,"m")}:r,s=t.playPauseKey,o=void 0===s?function(e){return j.isEventKey(e,"k")||j.isEventKey(e,"Space")}:s
if(n.call(this,e)){e.preventDefault()
e.stopPropagation()
var l=as.getComponent("FullscreenToggle")
!1!==R[this.fsApi_.fullscreenEnabled]&&l.prototype.handleClick.call(this,e)}else if(a.call(this,e)){e.preventDefault()
e.stopPropagation()
as.getComponent("MuteToggle").prototype.handleClick.call(this,e)}else if(o.call(this,e)){e.preventDefault()
e.stopPropagation()
as.getComponent("PlayToggle").prototype.handleClick.call(this,e)}}
i.canPlayType=function(e){for(var t,i=0,n=this.options_.techOrder;i<n.length;i++){var r=n[i],a=Co.getTech(r)
a||(a=as.getComponent(r))
if(a){if(a.isSupported()&&(t=a.canPlayType(e)))return t}else Er.error('The "'+r+'" tech is undefined. Skipped browser support check for that tech.')}return""}
i.selectSource=function(e){var t,i=this,n=this.options_.techOrder.map((function(e){return[e,Co.getTech(e)]})).filter((function(e){var t=e[0],i=e[1]
if(i)return i.isSupported()
Er.error('The "'+t+'" tech is undefined. Skipped browser support check for that tech.')
return!1})),r=function(e,t,i){var n
e.some((function(e){return t.some((function(t){if(n=i(e,t))return!0}))}))
return n},a=function(e,t){var n=e[0]
if(e[1].canPlaySource(t,i.options_[n.toLowerCase()]))return{source:t,tech:n}}
return(this.options_.sourceOrder?r(e,n,(t=a,function(e,i){return t(i,e)})):r(n,e,a))||!1}
i.src=function(e){var t=this
if(void 0===e)return this.cache_.src||""
var i=(function e(t){if(Array.isArray(t)){var i=[]
t.forEach((function(t){t=e(t)
Array.isArray(t)?i=i.concat(t):Or(t)&&i.push(t)}))
t=i}else t="string"==typeof t&&t.trim()?[Mo({src:t})]:Or(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Mo(t)]:[]
return t})(e)
if(i.length){this.changingSrc_=!0
this.cache_.sources=i
this.updateSourceCaches_(i[0])
Po(this,i[0],(function(e,n){t.middleware_=n
t.cache_.sources=i
t.updateSourceCaches_(e)
if(t.src_(e)){if(i.length>1)return t.src(i.slice(1))
t.changingSrc_=!1
t.setTimeout((function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})}),0)
t.triggerReady()}else{r=n,a=t.tech_,r.forEach((function(e){return e.setTech&&e.setTech(a)}))
var r,a}}))}else this.setTimeout((function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})}),0)}
i.src_=function(e){var t,i,n=this,r=this.selectSource([e])
if(!r)return!0
if(!(t=r.tech,i=this.techName_,Za(t)===Za(i))){this.changingSrc_=!0
this.loadTech_(r.tech,r.source)
this.tech_.ready((function(){n.changingSrc_=!1}))
return!1}this.ready((function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",e):this.techCall_("src",e.src)
this.changingSrc_=!1}),!0)
return!1}
i.load=function(){this.techCall_("load")}
i.reset=function(){var e=this,t=this.options_.Promise||a.Promise
if(this.paused()||!t)this.doReset_()
else{Vs(this.play().then((function(){return e.doReset_()})))}}
i.doReset_=function(){this.tech_&&this.tech_.clearTracks("text")
this.resetCache_()
this.poster("")
this.loadTech_(this.options_.techOrder[0],null)
this.techCall_("reset")
this.resetControlBarUI_()
Va(this)&&this.trigger("playerreset")}
i.resetControlBarUI_=function(){this.resetProgressBar_()
this.resetPlaybackRate_()
this.resetVolumeBar_()}
i.resetProgressBar_=function(){this.currentTime(0)
var e=this.controlBar,t=e.durationDisplay,i=e.remainingTimeDisplay
t&&t.updateContent()
i&&i.updateContent()}
i.resetPlaybackRate_=function(){this.playbackRate(this.defaultPlaybackRate())
this.handleTechRateChange_()}
i.resetVolumeBar_=function(){this.volume(1)
this.trigger("volumechange")}
i.currentSources=function(){var e=this.currentSource(),t=[]
0!==Object.keys(e).length&&t.push(e)
return this.cache_.sources||t}
i.currentSource=function(){return this.cache_.source||{}}
i.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""}
i.currentType=function(){return this.currentSource()&&this.currentSource().type||""}
i.preload=function(e){if(void 0===e)return this.techGet_("preload")
this.techCall_("setPreload",e)
this.options_.preload=e}
i.autoplay=function(e){if(void 0===e)return this.options_.autoplay||!1
var t
if("string"==typeof e&&/(any|play|muted)/.test(e)){this.options_.autoplay=e
this.manualAutoplay_(e)
t=!1}else this.options_.autoplay=!!e
t=void 0===t?this.options_.autoplay:t
this.tech_&&this.techCall_("setAutoplay",t)}
i.playsinline=function(e){if(void 0!==e){this.techCall_("setPlaysinline",e)
this.options_.playsinline=e
return this}return this.techGet_("playsinline")}
i.loop=function(e){if(void 0===e)return this.techGet_("loop")
this.techCall_("setLoop",e)
this.options_.loop=e}
i.poster=function(e){if(void 0===e)return this.poster_
e||(e="")
if(e!==this.poster_){this.poster_=e
this.techCall_("setPoster",e)
this.isPosterFromTech_=!1
this.trigger("posterchange")}}
i.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var e=this.tech_.poster()||""
if(e!==this.poster_){this.poster_=e
this.isPosterFromTech_=!0
this.trigger("posterchange")}}}
i.controls=function(e){if(void 0===e)return!!this.controls_
e=!!e
if(this.controls_!==e){this.controls_=e
this.usingNativeControls()&&this.techCall_("setControls",e)
if(this.controls_){this.removeClass("vjs-controls-disabled")
this.addClass("vjs-controls-enabled")
this.trigger("controlsenabled")
this.usingNativeControls()||this.addTechControlsListeners_()}else{this.removeClass("vjs-controls-enabled")
this.addClass("vjs-controls-disabled")
this.trigger("controlsdisabled")
this.usingNativeControls()||this.removeTechControlsListeners_()}}}
i.usingNativeControls=function(e){if(void 0===e)return!!this.usingNativeControls_
e=!!e
if(this.usingNativeControls_!==e){this.usingNativeControls_=e
if(this.usingNativeControls_){this.addClass("vjs-using-native-controls")
this.trigger("usingnativecontrols")}else{this.removeClass("vjs-using-native-controls")
this.trigger("usingcustomcontrols")}}}
i.error=function(e){if(void 0===e)return this.error_||null
if(this.options_.suppressNotSupportedError&&e&&4===e.code){var t=function(){this.error(e)}
this.options_.suppressNotSupportedError=!1
this.any(["click","touchstart"],t)
this.one("loadstart",(function(){this.off(["click","touchstart"],t)}))}else if(null!==e){this.error_=new Bs(e)
this.addClass("vjs-error")
Er.error("(CODE:"+this.error_.code+" "+Bs.errorTypes[this.error_.code]+")",this.error_.message,this.error_)
this.trigger("error")}else{this.error_=e
this.removeClass("vjs-error")
this.errorDisplay&&this.errorDisplay.close()}}
i.reportUserActivity=function(e){this.userActivity_=!0}
i.userActive=function(e){if(void 0===e)return this.userActive_
if((e=!!e)!==this.userActive_){this.userActive_=e
if(this.userActive_){this.userActivity_=!0
this.removeClass("vjs-user-inactive")
this.addClass("vjs-user-active")
this.trigger("useractive")}else{this.tech_&&this.tech_.one("mousemove",(function(e){e.stopPropagation()
e.preventDefault()}))
this.userActivity_=!1
this.removeClass("vjs-user-active")
this.addClass("vjs-user-inactive")
this.trigger("userinactive")}}}
i.listenForUserActivity_=function(){var e,t,i,n=Ua(this,this.reportUserActivity),r=function(t){n()
this.clearInterval(e)}
this.on("mousedown",(function(){n()
this.clearInterval(e)
e=this.setInterval(n,250)}))
this.on("mousemove",(function(e){if(e.screenX!==t||e.screenY!==i){t=e.screenX
i=e.screenY
n()}}))
this.on("mouseup",r)
this.on("mouseleave",r)
var a,s=this.getChild("controlBar")
if(s&&!Es&&!hs){s.on("mouseenter",(function(e){this.player().cache_.inactivityTimeout=this.player().options_.inactivityTimeout
this.player().options_.inactivityTimeout=0}))
s.on("mouseleave",(function(e){this.player().options_.inactivityTimeout=this.player().cache_.inactivityTimeout}))}this.on("keydown",n)
this.on("keyup",n)
this.setInterval((function(){if(this.userActivity_){this.userActivity_=!1
this.userActive(!0)
this.clearTimeout(a)
var e=this.options_.inactivityTimeout
e<=0||(a=this.setTimeout((function(){this.userActivity_||this.userActive(!1)}),e))}}),250)}
i.playbackRate=function(e){if(void 0===e)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1
this.techCall_("setPlaybackRate",e)}
i.defaultPlaybackRate=function(e){return void 0!==e?this.techCall_("setDefaultPlaybackRate",e):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1}
i.isAudio=function(e){if(void 0===e)return!!this.isAudio_
this.isAudio_=!!e}
i.addTextTrack=function(e,t,i){if(this.tech_)return this.tech_.addTextTrack(e,t,i)}
i.addRemoteTextTrack=function(e,t){if(this.tech_)return this.tech_.addRemoteTextTrack(e,t)}
i.removeRemoteTextTrack=function(e){void 0===e&&(e={})
var t=e.track
t||(t=e)
if(this.tech_)return this.tech_.removeRemoteTextTrack(t)}
i.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")}
i.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0}
i.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0}
i.language=function(e){if(void 0===e)return this.language_
if(this.language_!==String(e).toLowerCase()){this.language_=String(e).toLowerCase()
Va(this)&&this.trigger("languagechange")}}
i.languages=function(){return es(t.prototype.options_.languages,this.languages_)}
i.toJSON=function(){var e=es(this.options_),t=e.tracks
e.tracks=[]
for(var i=0;i<t.length;i++){var n=t[i];(n=es(n)).player=void 0
e.tracks[i]=n}return e}
i.createModal=function(e,t){var i=this;(t=t||{}).content=e||""
var n=new Gs(this,t)
this.addChild(n)
n.on("dispose",(function(){i.removeChild(n)}))
n.open()
return n}
i.updateCurrentBreakpoint_=function(){if(this.responsive())for(var e=this.currentBreakpoint(),t=this.currentWidth(),i=0;i<Tu.length;i++){var n=Tu[i]
if(t<=this.breakpoints_[n]){if(e===n)return
e&&this.removeClass(Su[e])
this.addClass(Su[n])
this.breakpoint_=n
break}}}
i.removeCurrentBreakpoint_=function(){var e=this.currentBreakpointClass()
this.breakpoint_=""
e&&this.removeClass(e)}
i.breakpoints=function(e){if(void 0===e)return xr(this.breakpoints_)
this.breakpoint_=""
this.breakpoints_=xr({},ku,e)
this.updateCurrentBreakpoint_()
return xr(this.breakpoints_)}
i.responsive=function(e){if(void 0===e)return this.responsive_
if((e=Boolean(e))!==this.responsive_){this.responsive_=e
if(e){this.on("playerresize",this.updateCurrentBreakpoint_)
this.updateCurrentBreakpoint_()}else{this.off("playerresize",this.updateCurrentBreakpoint_)
this.removeCurrentBreakpoint_()}return e}}
i.currentBreakpoint=function(){return this.breakpoint_}
i.currentBreakpointClass=function(){return Su[this.breakpoint_]||""}
i.loadMedia=function(e,t){var i=this
if(e&&"object"==typeof e){this.reset()
this.cache_.media=es(e)
var n=this.cache_.media,r=n.artwork,a=n.poster,s=n.src,o=n.textTracks
!r&&a&&(this.cache_.media.artwork=[{src:a,type:No(a)}])
s&&this.src(s)
a&&this.poster(a)
Array.isArray(o)&&o.forEach((function(e){return i.addRemoteTextTrack(e,!1)}))
this.ready(t)}}
i.getMedia=function(){if(!this.cache_.media){var e=this.poster(),t={src:this.currentSources(),textTracks:Array.prototype.map.call(this.remoteTextTracks(),(function(e){return{kind:e.kind,label:e.label,language:e.language,src:e.src}}))}
if(e){t.poster=e
t.artwork=[{src:t.poster,type:No(t.poster)}]}return t}return es(this.cache_.media)}
t.getTagSettings=function(e){var t={sources:[],tracks:[]},i=Xr(e),n=i["data-setup"]
qr(e,"vjs-fill")&&(i.fill=!0)
qr(e,"vjs-fluid")&&(i.fluid=!0)
if(null!==n){var r=B(n||"{}"),a=r[0],s=r[1]
a&&Er.error(a)
xr(i,s)}xr(t,i)
if(e.hasChildNodes())for(var o=e.childNodes,l=0,u=o.length;l<u;l++){var c=o[l],d=c.nodeName.toLowerCase()
"source"===d?t.sources.push(Xr(c)):"track"===d&&t.tracks.push(Xr(c))}return t}
i.flexNotSupported_=function(){var e=R.createElement("i")
return!("flexBasis"in e.style||"webkitFlexBasis"in e.style||"mozFlexBasis"in e.style||"msFlexBasis"in e.style||"msFlexOrder"in e.style)}
i.debug=function(e){if(void 0===e)return this.debugEnabled_
if(e){this.trigger("debugon")
this.previousLogLevel_=this.log.level
this.log.level("debug")
this.debugEnabled_=!0}else{this.trigger("debugoff")
this.log.level(this.previousLogLevel_)
this.previousLogLevel_=void 0
this.debugEnabled_=!1}}
return t})(as)
ko.names.forEach((function(e){var t=ko[e]
Cu.prototype[t.getterName]=function(){if(this.tech_)return this.tech_[t.getterName]()
this[t.privateName]=this[t.privateName]||new t.ListClass
return this[t.privateName]}}))
Cu.prototype.crossorigin=Cu.prototype.crossOrigin
Cu.players={}
var Eu=a.navigator
Cu.prototype.options_={techOrder:Co.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],liveui:!1,children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","liveTracker","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:Eu&&(Eu.languages&&Eu.languages[0]||Eu.userLanguage||Eu.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media.",fullscreen:{options:{navigationUI:"hide"}},breakpoints:{},responsive:!1};["ended","seeking","seekable","networkState","readyState"].forEach((function(e){Cu.prototype[e]=function(){return this.techGet_(e)}}))
_u.forEach((function(e){Cu.prototype["handleTech"+Za(e)+"_"]=function(){return this.trigger(e)}}))
as.registerComponent("Player",Cu)
var wu={},Iu=function(e){return wu.hasOwnProperty(e)},Pu=function(e){return Iu(e)?wu[e]:void 0},Au=function(e,t){e.activePlugins_=e.activePlugins_||{}
e.activePlugins_[t]=!0},xu=function(e,t,i){var n=(i?"before":"")+"pluginsetup"
e.trigger(n,t)
e.trigger(n+":"+t.name,t)},Ou=function(e,t){t.prototype.name=e
return function(){xu(this,{name:e,plugin:t,instance:null},!0)
for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r]
var a=Oe(t,[this].concat(n))
this[e]=function(){return a}
xu(this,a.getEventHash())
return a}},Lu=(function(){function e(t){if(this.constructor===e)throw new Error("Plugin must be sub-classed; not directly instantiated.")
this.player=t
this.log||(this.log=this.player.log.createLogger(this.name))
Ya(this)
delete this.trigger
$a(this,this.constructor.defaultState)
Au(t,this.name)
this.dispose=Ua(this,this.dispose)
t.on("dispose",this.dispose)}var t=e.prototype
t.version=function(){return this.constructor.VERSION}
t.getEventHash=function(e){void 0===e&&(e={})
e.name=this.name
e.plugin=this.constructor
e.instance=this
return e}
t.trigger=function(e,t){void 0===t&&(t={})
return Oa(this.eventBusEl_,e,this.getEventHash(t))}
t.handleStateChanged=function(e){}
t.dispose=function(){var e=this.name,t=this.player
this.trigger("dispose")
this.off()
t.off("dispose",this.dispose)
t.activePlugins_[e]=!1
this.player=this.state=null
t[e]=Ou(e,wu[e])}
e.isBasic=function(t){var i="string"==typeof t?Pu(t):t
return"function"==typeof i&&!e.prototype.isPrototypeOf(i.prototype)}
e.registerPlugin=function(t,i){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+typeof t+".")
if(Iu(t))Er.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!')
else if(Cu.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!')
if("function"!=typeof i)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+typeof i+".")
wu[t]=i
"plugin"!==t&&(e.isBasic(i)?Cu.prototype[t]=(function(e,t){var i=function(){xu(this,{name:e,plugin:t,instance:null},!0)
var i=t.apply(this,arguments)
Au(this,e)
xu(this,{name:e,plugin:t,instance:i})
return i}
Object.keys(t).forEach((function(e){i[e]=t[e]}))
return i})(t,i):Cu.prototype[t]=Ou(t,i))
return i}
e.deregisterPlugin=function(e){if("plugin"===e)throw new Error("Cannot de-register base plugin.")
if(Iu(e)){delete wu[e]
delete Cu.prototype[e]}}
e.getPlugins=function(e){void 0===e&&(e=Object.keys(wu))
var t
e.forEach((function(e){var i=Pu(e)
i&&((t=t||{})[e]=i)}))
return t}
e.getPluginVersion=function(e){var t=Pu(e)
return t&&t.VERSION||""}
return e})()
Lu.getPlugin=Pu
Lu.BASE_PLUGIN_NAME="plugin"
Lu.registerPlugin("plugin",Lu)
Cu.prototype.usingPlugin=function(e){return!!this.activePlugins_&&!0===this.activePlugins_[e]}
Cu.prototype.hasPlugin=function(e){return!!Iu(e)}
var Du=function(e){return 0===e.indexOf("#")?e.slice(1):e}
function Ru(e,t,i){var n=Ru.getPlayer(e)
if(n){t&&Er.warn('Player "'+e+'" is already initialised. Options will not be applied.')
i&&n.ready(i)
return n}var r="string"==typeof e?ca("#"+Du(e)):e
if(!Ur(r))throw new TypeError("The element or ID supplied is not valid. (videojs)")
r.ownerDocument.defaultView&&r.ownerDocument.body.contains(r)||Er.warn("The element supplied is not included in the DOM")
t=t||{}
Ru.hooks("beforesetup").forEach((function(e){var i=e(r,es(t))
Or(i)&&!Array.isArray(i)?t=es(t,i):Er.error("please return an object in beforesetup hooks")}))
var a=as.getComponent("Player")
n=new a(r,t,i)
Ru.hooks("setup").forEach((function(e){return e(n)}))
return n}Ru.hooks_={}
Ru.hooks=function(e,t){Ru.hooks_[e]=Ru.hooks_[e]||[]
t&&(Ru.hooks_[e]=Ru.hooks_[e].concat(t))
return Ru.hooks_[e]}
Ru.hook=function(e,t){Ru.hooks(e,t)}
Ru.hookOnce=function(e,t){Ru.hooks(e,[].concat(t).map((function(t){return function i(){Ru.removeHook(e,i)
return t.apply(void 0,arguments)}})))}
Ru.removeHook=function(e,t){var i=Ru.hooks(e).indexOf(t)
if(i<=-1)return!1
Ru.hooks_[e]=Ru.hooks_[e].slice()
Ru.hooks_[e].splice(i,1)
return!0}
if(!0!==a.VIDEOJS_NO_DYNAMIC_STYLE&&Mr()){var Nu=ca(".vjs-styles-defaults")
if(!Nu){Nu=ya("vjs-styles-defaults")
var Mu=ca("head")
Mu&&Mu.insertBefore(Nu,Mu.firstChild)
_a(Nu,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}ma(1,Ru)
Ru.VERSION=Sr
Ru.options=Cu.prototype.options_
Ru.getPlayers=function(){return Cu.players}
Ru.getPlayer=function(e){var t,i=Cu.players
if("string"==typeof e){var n=Du(e),r=i[n]
if(r)return r
t=ca("#"+n)}else t=e
if(Ur(t)){var a=t,s=a.player,o=a.playerId
if(s||i[o])return s||i[o]}}
Ru.getAllPlayers=function(){return Object.keys(Cu.players).map((function(e){return Cu.players[e]})).filter(Boolean)}
Ru.players=Cu.players
Ru.getComponent=as.getComponent
Ru.registerComponent=function(e,t){Co.isTech(t)&&Er.warn("The "+e+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)")
as.registerComponent.call(as,e,t)}
Ru.getTech=Co.getTech
Ru.registerTech=Co.registerTech
Ru.use=function(e,t){Eo[e]=Eo[e]||[]
Eo[e].push(t)}
Object.defineProperty(Ru,"middleware",{value:{},writeable:!1,enumerable:!0})
Object.defineProperty(Ru.middleware,"TERMINATOR",{value:Io,writeable:!1,enumerable:!0})
Ru.browser=Is
Ru.TOUCH_ENABLED=Ss
Ru.extend=function(e,t){void 0===t&&(t={})
var i=function(){e.apply(this,arguments)},n={}
if("object"==typeof t){t.constructor!==Object.prototype.constructor&&(i=t.constructor)
n=t}else"function"==typeof t&&(i=t)
Le(i,e)
e&&(i.super_=e)
for(var r in n)n.hasOwnProperty(r)&&(i.prototype[r]=n[r])
return i}
Ru.mergeOptions=es
Ru.bind=Ua
Ru.registerPlugin=Lu.registerPlugin
Ru.deregisterPlugin=Lu.deregisterPlugin
Ru.plugin=function(e,t){Er.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead")
return Lu.registerPlugin(e,t)}
Ru.getPlugins=Lu.getPlugins
Ru.getPlugin=Lu.getPlugin
Ru.getPluginVersion=Lu.getPluginVersion
Ru.addLanguage=function(e,t){var i
e=(""+e).toLowerCase()
Ru.options.languages=es(Ru.options.languages,((i={})[e]=t,i))
return Ru.options.languages[e]}
Ru.log=Er
Ru.createLogger=wr
Ru.createTimeRange=Ru.createTimeRanges=xs
Ru.formatTime=$o
Ru.setFormatTime=function(e){Qo=e}
Ru.resetFormatTime=function(){Qo=Yo}
Ru.parseUrl=oo
Ru.isCrossOrigin=co
Ru.EventTarget=Fa
Ru.on=Aa
Ru.one=La
Ru.off=xa
Ru.trigger=Oa
Ru.xhr=W
Ru.TextTrack=mo
Ru.AudioTrack=go
Ru.VideoTrack=vo;["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach((function(e){Ru[e]=function(){Er.warn("videojs."+e+"() is deprecated; use videojs.dom."+e+"() instead")
return ha[e].apply(null,arguments)}}))
Ru.computedStyle=Dr
Ru.dom=ha
Ru.url=ho
Ru.defineLazyProperty=vu
var Uu,Bu=Me,ju=function(e,t,i){return e&&i&&i.responseURL&&t!==i.responseURL?i.responseURL:t},Fu=Ru.log,Vu=function(e,t){return e+"-"+t},Hu=function(e){var t=e.manifestString,i=e.customTagParsers,n=void 0===i?[]:i,r=e.customTagMappers,a=void 0===r?[]:r,s=new ze
n.forEach((function(e){return s.addParser(e)}))
a.forEach((function(e){return s.addTagMapper(e)}))
s.push(t)
s.end()
return s.manifest},qu=function(e,t){["AUDIO","SUBTITLES"].forEach((function(i){for(var n in e.mediaGroups[i])for(var r in e.mediaGroups[i][n]){var a=e.mediaGroups[i][n][r]
t(a,i,n,r)}}))},Wu=function(e){var t=e.playlist,i=e.uri,n=e.id
t.id=n
i&&(t.uri=i)
t.attributes=t.attributes||{}},zu=function(e,t){e.uri=t
for(var i=0;i<e.playlists.length;i++)if(!e.playlists[i].uri){var n="placeholder-uri-"+i
e.playlists[i].uri=n}qu(e,(function(t,i,n,r){if(t.playlists&&t.playlists.length&&!t.playlists[0].uri){var a="placeholder-uri-"+i+"-"+n+"-"+r,s=Vu(0,a)
t.playlists[0].uri=a
t.playlists[0].id=s
e.playlists[s]=t.playlists[0]
e.playlists[a]=t.playlists[0]}}));((function(e){for(var t=e.playlists.length;t--;){var i=e.playlists[t]
Wu({playlist:i,id:Vu(t,i.uri)})
i.resolvedUri=Bu(e.uri,i.uri)
e.playlists[i.id]=i
e.playlists[i.uri]=i
i.attributes.BANDWIDTH||Fu.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")}}))(e);((function(e){qu(e,(function(t){t.uri&&(t.resolvedUri=Bu(e.uri,t.uri))}))}))(e)},Gu=Ru.mergeOptions,Ku=Ru.EventTarget,Xu=function(e,t){e.resolvedUri||(e.resolvedUri=Bu(t,e.uri))
e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Bu(t,e.key.uri))
e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Bu(t,e.map.uri))},Yu=function(e,t){var i=Gu(e,{}),n=i.playlists[t.id]
if(!n)return null
if(n.segments&&t.segments&&n.segments.length===t.segments.length&&n.endList===t.endList&&n.mediaSequence===t.mediaSequence)return null
var r=Gu(n,t)
n.segments&&(r.segments=(function(e,t,i){var n=t.slice()
i=i||0
for(var r=Math.min(e.length,t.length+i),a=i;a<r;a++)n[a-i]=Gu(e[a],n[a-i])
return n})(n.segments,t.segments,t.mediaSequence-n.mediaSequence))
r.segments.forEach((function(e){Xu(e,r.resolvedUri)}))
for(var a=0;a<i.playlists.length;a++)i.playlists[a].id===t.id&&(i.playlists[a]=r)
i.playlists[t.id]=r
i.playlists[t.uri]=r
return i},Qu=function(e,t){var i=e.segments[e.segments.length-1]
return t&&i&&i.duration?1e3*i.duration:500*(e.targetDuration||10)},$u=(function(e){U(t,e)
function t(t,i,n){var r
void 0===n&&(n={})
r=e.call(this)||this
if(!t)throw new Error("A non-empty playlist URL or object is required")
var a=n,s=a.withCredentials,o=void 0!==s&&s,l=a.handleManifestRedirects,u=void 0!==l&&l
r.src=t
r.vhs_=i
r.withCredentials=o
r.handleManifestRedirects=u
var c=i.options_
r.customTagParsers=c&&c.customTagParsers||[]
r.customTagMappers=c&&c.customTagMappers||[]
r.state="HAVE_NOTHING"
r.on("mediaupdatetimeout",(function(){if("HAVE_METADATA"===r.state){r.state="HAVE_CURRENT_METADATA"
r.request=r.vhs_.xhr({uri:Bu(r.master.uri,r.media().uri),withCredentials:r.withCredentials},(function(e,t){if(r.request){if(e)return r.playlistRequestError(r.request,r.media(),"HAVE_METADATA")
r.haveMetadata({playlistString:r.request.responseText,url:r.media().uri,id:r.media().id})}}))}}))
return r}var i=t.prototype
i.playlistRequestError=function(e,t,i){var n=t.uri,r=t.id
this.request=null
i&&(this.state=i)
this.error={playlist:this.master.playlists[r],status:e.status,message:"HLS playlist request error at URL: "+n+".",responseText:e.responseText,code:e.status>=500?4:2}
this.trigger("error")}
i.haveMetadata=function(e){var t=this,i=e.playlistString,n=e.playlistObject,r=e.url,s=e.id
this.request=null
this.state="HAVE_METADATA"
var o=n||Hu({manifestString:i,customTagParsers:this.customTagParsers,customTagMappers:this.customTagMappers})
Wu({playlist:o,uri:r,id:s})
var l=Yu(this.master,o)
this.targetDuration=o.targetDuration
if(l){this.master=l
this.media_=this.master.playlists[s]}else this.trigger("playlistunchanged")
if(!this.media().endList){a.clearTimeout(this.mediaUpdateTimeout)
this.mediaUpdateTimeout=a.setTimeout((function(){t.trigger("mediaupdatetimeout")}),Qu(this.media(),!!l))}this.trigger("loadedplaylist")}
i.dispose=function(){this.trigger("dispose")
this.stopRequest()
a.clearTimeout(this.mediaUpdateTimeout)
a.clearTimeout(this.finalRenditionTimeout)
this.off()}
i.stopRequest=function(){if(this.request){var e=this.request
this.request=null
e.onreadystatechange=null
e.abort()}}
i.media=function(e,t){var i=this
if(!e)return this.media_
if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state)
if("string"==typeof e){if(!this.master.playlists[e])throw new Error("Unknown playlist URI: "+e)
e=this.master.playlists[e]}a.clearTimeout(this.finalRenditionTimeout)
if(t){var n=e.targetDuration/2*1e3||5e3
this.finalRenditionTimeout=a.setTimeout(this.media.bind(this,e,!1),n)}else{var r=this.state,s=!this.media_||e.id!==this.media_.id
if(this.master.playlists[e.id].endList||e.endList&&e.segments.length){if(this.request){this.request.onreadystatechange=null
this.request.abort()
this.request=null}this.state="HAVE_METADATA"
this.media_=e
if(s){this.trigger("mediachanging")
"HAVE_MASTER"===r?this.trigger("loadedmetadata"):this.trigger("mediachange")}}else if(s){this.state="SWITCHING_MEDIA"
if(this.request){if(e.resolvedUri===this.request.url)return
this.request.onreadystatechange=null
this.request.abort()
this.request=null}this.media_&&this.trigger("mediachanging")
this.request=this.vhs_.xhr({uri:e.resolvedUri,withCredentials:this.withCredentials},(function(t,n){if(i.request){e.resolvedUri=ju(i.handleManifestRedirects,e.resolvedUri,n)
if(t)return i.playlistRequestError(i.request,e,r)
i.haveMetadata({playlistString:n.responseText,url:e.uri,id:e.id})
"HAVE_MASTER"===r?i.trigger("loadedmetadata"):i.trigger("mediachange")}}))}}}
i.pause=function(){this.stopRequest()
a.clearTimeout(this.mediaUpdateTimeout)
"HAVE_NOTHING"===this.state&&(this.started=!1)
"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")}
i.load=function(e){var t=this
a.clearTimeout(this.mediaUpdateTimeout)
var i=this.media()
if(e){var n=i?i.targetDuration/2*1e3:5e3
this.mediaUpdateTimeout=a.setTimeout((function(){return t.load()}),n)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()}
i.start=function(){var e=this
this.started=!0
if("object"!=typeof this.src)this.request=this.vhs_.xhr({uri:this.src,withCredentials:this.withCredentials},(function(t,i){if(e.request){e.request=null
if(t){e.error={status:i.status,message:"HLS playlist request error at URL: "+e.src+".",responseText:i.responseText,code:2}
"HAVE_NOTHING"===e.state&&(e.started=!1)
return e.trigger("error")}e.src=ju(e.handleManifestRedirects,e.src,i)
var n=Hu({manifestString:i.responseText,customTagParsers:e.customTagParsers,customTagMappers:e.customTagMappers})
e.setupInitialPlaylist(n)}}))
else{this.src.uri||(this.src.uri=a.location.href)
this.src.resolvedUri=this.src.uri
setTimeout((function(){e.setupInitialPlaylist(e.src)}),0)}}
i.srcUri=function(){return"string"==typeof this.src?this.src:this.src.uri}
i.setupInitialPlaylist=function(e){this.state="HAVE_MASTER"
if(e.playlists){this.master=e
zu(this.master,this.srcUri())
e.playlists.forEach((function(e){e.segments&&e.segments.forEach((function(t){Xu(t,e.resolvedUri)}))}))
this.trigger("loadedplaylist")
this.request||this.media(this.master.playlists[0])}else{var t=this.srcUri()||a.location.href
this.master=(function(e,t){var i=Vu(0,t),n={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:a.location.href,resolvedUri:a.location.href,playlists:[{uri:t,id:i,resolvedUri:t,attributes:{}}]}
n.playlists[i]=n.playlists[0]
n.playlists[t]=n.playlists[0]
return n})(0,t)
this.haveMetadata({playlistObject:e,url:t,id:this.master.playlists[0].id})
this.trigger("loadedmetadata")}}
return t})(Ku),Ju=function(e,t){var i,n=[]
if(e&&e.length)for(i=0;i<e.length;i++)t(e.start(i),e.end(i))&&n.push([e.start(i),e.end(i)])
return Ru.createTimeRanges(n)},Zu=function(e,t){return Ju(e,(function(e,i){return e-.1<=t&&i+.1>=t}))},ec=function(e,t){return Ju(e,(function(e){return e-1/30>=t}))},tc=function(e){var t=[]
if(!e||!e.length)return""
for(var i=0;i<e.length;i++)t.push(e.start(i)+" => "+e.end(i))
return t.join(", ")},ic=function(e){for(var t=[],i=0;i<e.length;i++)t.push({start:e.start(i),end:e.end(i)})
return t},nc=Ru.createTimeRange,rc=function(e,t,i){void 0===t&&(t=e.mediaSequence+e.segments.length)
if(t<e.mediaSequence)return 0
var n=(function(e,t){var i=0,n=t-e.mediaSequence,r=e.segments[n]
if(r){if(void 0!==r.start)return{result:r.start,precise:!0}
if(void 0!==r.end)return{result:r.end-r.duration,precise:!0}}for(;n--;){if(void 0!==(r=e.segments[n]).end)return{result:i+r.end,precise:!0}
i+=r.duration
if(void 0!==r.start)return{result:i+r.start,precise:!0}}return{result:i,precise:!1}})(e,t)
if(n.precise)return n.result
var r=(function(e,t){for(var i,n=0,r=t-e.mediaSequence;r<e.segments.length;r++){if(void 0!==(i=e.segments[r]).start)return{result:i.start-n,precise:!0}
n+=i.duration
if(void 0!==i.end)return{result:i.end-n,precise:!0}}return{result:-1,precise:!1}})(e,t)
return r.precise?r.result:n.result+i},ac=function(e,t,i){if(!e)return 0
"number"!=typeof i&&(i=0)
if(void 0===t){if(e.totalDuration)return e.totalDuration
if(!e.endList)return a.Infinity}return rc(e,t,i)},sc=function(e,t,i){var n=0
if(t>i){var r=[i,t]
t=r[0]
i=r[1]}if(t<0){for(var a=t;a<Math.min(0,i);a++)n+=e.targetDuration
t=0}for(var s=t;s<i;s++)n+=e.segments[s].duration
return n},oc=function(e,t){if(!e.segments.length)return 0
var i=e.segments.length,n=e.segments[i-1].duration||e.targetDuration,r="number"==typeof t?t:n+2*e.targetDuration
if(0===r)return i
for(var a=0;i--&&!((a+=e.segments[i].duration)>=r););return Math.max(0,i)},lc=function(e,t,i,n){if(!e||!e.segments)return null
if(e.endList)return ac(e)
if(null===t)return null
t=t||0
var r=i?oc(e,n):e.segments.length
return rc(e,e.mediaSequence+r,t)},uc=function(e){return e.excludeUntil&&e.excludeUntil>Date.now()},cc=function(e){return e.excludeUntil&&e.excludeUntil===1/0},dc=function(e){var t=uc(e)
return!e.disabled&&!t},hc=function(e,t){return t.attributes&&t.attributes[e]},pc=function(e,t){if(1===e.playlists.length)return!0
var i=t.attributes.BANDWIDTH||Number.MAX_VALUE
return 0===e.playlists.filter((function(e){return!!dc(e)&&(e.attributes.BANDWIDTH||0)<i})).length},fc={duration:ac,seekable:function(e,t,i){var n=t||0,r=lc(e,t,!0,i)
return null===r?nc():nc(n,r)},safeLiveIndex:oc,getMediaInfoForTime:function(e,t,i,n){var r,a=e.segments.length,s=t-n
if(s<0){if(i>0)for(r=i-1;r>=0;r--)if((s+=e.segments[r].duration+1/30)>0)return{mediaIndex:r,startTime:n-sc(e,i,r)}
return{mediaIndex:0,startTime:t}}if(i<0){for(r=i;r<0;r++)if((s-=e.targetDuration)<0)return{mediaIndex:0,startTime:t}
i=0}for(r=i;r<a;r++)if((s-=e.segments[r].duration+1/30)<0)return{mediaIndex:r,startTime:n+sc(e,i,r)}
return{mediaIndex:a-1,startTime:t}},isEnabled:dc,isDisabled:function(e){return e.disabled},isBlacklisted:uc,isIncompatible:cc,playlistEnd:lc,isAes:function(e){for(var t=0;t<e.segments.length;t++)if(e.segments[t].key)return!0
return!1},hasAttribute:hc,estimateSegmentRequestTime:function(e,t,i,n){void 0===n&&(n=0)
return hc("BANDWIDTH",i)?(e*i.attributes.BANDWIDTH-8*n)/t:NaN},isLowestEnabledRendition:pc},mc=Ru.xhr,gc=Ru.mergeOptions,vc=function(e,t,i,n){var r="arraybuffer"===e.responseType?e.response:e.responseText
if(!t&&r){e.responseTime=Date.now()
e.roundTripTime=e.responseTime-e.requestTime
e.bytesReceived=r.byteLength||r.length
e.bandwidth||(e.bandwidth=Math.floor(e.bytesReceived/e.roundTripTime*8*1e3))}i.headers&&(e.responseHeaders=i.headers)
t&&"ETIMEDOUT"===t.code&&(e.timedout=!0)
t||e.aborted||200===i.statusCode||206===i.statusCode||0===i.statusCode||(t=new Error("XHR Failed with a response of: "+(e&&(r||e.responseText))))
n(t,e)},yc=function(){return function e(t,i){t=gc({timeout:45e3},t)
var n=e.beforeRequest||Ru.Vhs.xhr.beforeRequest
if(n&&"function"==typeof n){var r=n(t)
r&&(t=r)}var a=mc(t,(function(e,t){return vc(a,e,t,i)})),s=a.abort
a.abort=function(){a.aborted=!0
return s.apply(a,arguments)}
a.uri=t.uri
a.requestTime=Date.now()
return a}},_c=function(e){var t,i,n={}
e.byterange&&(n.Range=(t=e.byterange,i=t.offset+t.length-1,"bytes="+t.offset+"-"+i))
return n},bc=function(e,t){return e.start(t)+"-"+e.end(t)},Tc=function(e,t){var i=e.toString(16)
return"00".substring(0,2-i.length)+i+(t%2?" ":"")},Sc=function(e){return e>=32&&e<126?String.fromCharCode(e):"."},kc=function(e){var t={}
Object.keys(e).forEach((function(i){var n=e[i]
ArrayBuffer.isView(n)?t[i]={bytes:n.buffer,byteOffset:n.byteOffset,byteLength:n.byteLength}:t[i]=n}))
return t},Cc=function(e){var t=e.byterange||{length:1/0,offset:0}
return[t.length,t.offset,e.resolvedUri].join(",")},Ec=function(e){return e.resolvedUri},wc=function(e){for(var t=Array.prototype.slice.call(e),i="",n=0;n<t.length/16;n++)i+=t.slice(16*n,16*n+16).map(Tc).join("")+" "+t.slice(16*n,16*n+16).map(Sc).join("")+"\n"
return i},Ic=Object.freeze({__proto__:null,createTransferableMessage:kc,initSegmentId:Cc,segmentKeyId:Ec,hexDump:wc,tagDump:function(e){var t=e.bytes
return wc(t)},textRanges:function(e){var t,i=""
for(t=0;t<e.length;t++)i+=bc(e,t)+" "
return i}}),Pc=function(e){var t=e.playlist,i=e.time,n=void 0===i?void 0:i,r=e.callback
if(!r)throw new Error("getProgramTime: callback must be provided")
if(!t||void 0===n)return r({message:"getProgramTime: playlist and time must be provided"})
var a=(function(e,t){if(!t||!t.segments||0===t.segments.length)return null
for(var i,n=0,r=0;r<t.segments.length&&!(e<=(n=(i=t.segments[r]).videoTimingInfo?i.videoTimingInfo.transmuxedPresentationEnd:n+i.duration));r++);var a=t.segments[t.segments.length-1]
if(a.videoTimingInfo&&a.videoTimingInfo.transmuxedPresentationEnd<e)return null
if(e>n){if(e>n+.25*a.duration)return null
i=a}return{segment:i,estimatedStart:i.videoTimingInfo?i.videoTimingInfo.transmuxedPresentationStart:n-i.duration,type:i.videoTimingInfo?"accurate":"estimate"}})(n,t)
if(!a)return r({message:"valid programTime was not found"})
if("estimate"===a.type)return r({message:"Accurate programTime could not be determined. Please seek to e.seekTime and try again",seekTime:a.estimatedStart})
var s={mediaSeconds:n},o=(function(e,t){if(!t.dateTimeObject)return null
var i=t.videoTimingInfo.transmuxerPrependedSeconds,n=e-(t.videoTimingInfo.transmuxedPresentationStart+i)
return new Date(t.dateTimeObject.getTime()+1e3*n)})(n,a.segment)
o&&(s.programDateTime=o.toISOString())
return r(null,s)},Ac=function e(t){var i=t.programTime,n=t.playlist,r=t.retryCount,a=void 0===r?2:r,s=t.seekTo,o=t.pauseAfterSeek,l=void 0===o||o,u=t.tech,c=t.callback
if(!c)throw new Error("seekToProgramTime: callback must be provided")
if(void 0===i||!n||!s)return c({message:"seekToProgramTime: programTime, seekTo and playlist must be provided"})
if(!n.endList&&!u.hasStarted_)return c({message:"player must be playing a live stream to start buffering"})
if(!(function(e){if(!e.segments||0===e.segments.length)return!1
for(var t=0;t<e.segments.length;t++)if(!e.segments[t].dateTimeObject)return!1
return!0})(n))return c({message:"programDateTime tags must be provided in the manifest "+n.resolvedUri})
var d=(function(e,t){var i
try{i=new Date(e)}catch(Kg){return null}if(!t||!t.segments||0===t.segments.length)return null
var n=t.segments[0]
if(i<n.dateTimeObject)return null
for(var r=0;r<t.segments.length-1;r++){n=t.segments[r]
if(i<t.segments[r+1].dateTimeObject)break}var a,s=t.segments[t.segments.length-1],o=s.dateTimeObject,l=s.videoTimingInfo?(a=s.videoTimingInfo).transmuxedPresentationEnd-a.transmuxedPresentationStart-a.transmuxerPrependedSeconds:s.duration+.25*s.duration
if(i>new Date(o.getTime()+1e3*l))return null
i>o&&(n=s)
return{segment:n,estimatedStart:n.videoTimingInfo?n.videoTimingInfo.transmuxedPresentationStart:fc.duration(t,t.mediaSequence+t.segments.indexOf(n)),type:n.videoTimingInfo?"accurate":"estimate"}})(i,n)
if(!d)return c({message:i+" was not found in the stream"})
var h=d.segment,p=(function(e,t){var i,n
try{i=new Date(e)
n=new Date(t)}catch(Kg){}var r=i.getTime()
return(n.getTime()-r)/1e3})(h.dateTimeObject,i)
if("estimate"!==d.type){var f=h.start+p
u.one("seeked",(function(){return c(null,u.currentTime())}))
l&&u.pause()
s(f)}else{if(0===a)return c({message:i+" is not buffered yet. Try again"})
s(d.estimatedStart+p)
u.one("seeked",(function(){e({programTime:i,playlist:n,retryCount:a-1,seekTo:s,pauseAfterSeek:l,tech:u,callback:c})}))}},xc=function(e,t){if(4===e.readyState)return t()},Oc=Ru.EventTarget,Lc=Ru.mergeOptions,Dc=function(e){var t=e.masterXml,i=e.srcUrl,n=e.clientOffset,r=e.sidxMapping,a=on(t,{manifestUri:i,clientOffset:n,sidxMapping:r})
zu(a,i)
return a},Rc=function(e,t){for(var i=!0,n=Lc(e,{duration:t.duration,minimumUpdatePeriod:t.minimumUpdatePeriod}),r=0;r<t.playlists.length;r++){var a=Yu(n,t.playlists[r])
if(a){n=a
i=!1}}qu(t,(function(e,t,r,a){if(e.playlists&&e.playlists.length){var s=e.playlists[0].id,o=Yu(n,e.playlists[0])
if(o){(n=o).mediaGroups[t][r][a].playlists[0]=n.playlists[s]
i=!1}}}))
t.minimumUpdatePeriod!==e.minimumUpdatePeriod&&(i=!1)
return i?null:n},Nc=function(e){var t=e.byterange.offset+e.byterange.length-1
return e.uri+"-"+e.byterange.offset+"-"+t},Mc=function(e,t){var i,n,r={}
for(var a in e){var s=e[a].sidx
if(s){var o=Nc(s)
if(!t[o])break
var l=t[o].sidxInfo;(i=l,n=s,(Boolean(!i.map&&!n.map)||Boolean(i.map&&n.map&&i.map.byterange.offset===n.map.byterange.offset&&i.map.byterange.length===n.map.byterange.length))&&i.uri===n.uri&&i.byterange.offset===n.byterange.offset&&i.byterange.length===n.byterange.length)&&(r[o]=t[o])}}return r},Uc=function(e,t,i,n,r,a){var s={uri:ju(r.handleManifestRedirects,t.resolvedUri),byterange:t.byterange,playlist:i},o=Ru.mergeOptions(s,{responseType:"arraybuffer",headers:_c(s)})
return (function(e,t,i){var n,r=[],a=!1,s=function(e,t,n,r){t.abort()
a=!0
return i(e,t,n,r)},o=function(e,t){if(!a){if(e)return s(e,t,"",r)
var i=t.responseText.substring(r&&r.byteLength||0,t.responseText.length)
r=mn(r,gn(i,!0))
n=n||hn(r)
if(r.length<10||n&&r.length<n+2)return xc(t,(function(){return s(e,t,"",r)}))
var o=dn(r)
return"ts"===o&&r.length<188?xc(t,(function(){return s(e,t,"",r)})):!o&&r.length<376?xc(t,(function(){return s(e,t,"",r)})):s(null,t,o,r)}},l=t({uri:e,beforeSend:function(e){e.overrideMimeType("text/plain; charset=x-user-defined")
e.addEventListener("progress",(function(t){t.total,t.loaded
return vc(e,null,{statusCode:e.status},o)}))}},(function(e,t){return vc(l,e,t,o)}))
return l})(s.uri,n,(function(t,r,l,u){if(t)return a(t,r)
if(!l||"mp4"!==l)return a({status:r.status,message:"Unsupported "+(l||"unknown")+" container type for sidx segment at URL: "+s.uri,response:"",playlist:i,internal:!0,blacklistDuration:1/0,code:2},r)
var c=s.byterange,d=c.offset,h=c.length
if(u.length>=h+d)return a(t,{response:u.subarray(d,d+h),status:r.status,uri:r.uri})
e.request=n(o,a)}))},Bc=(function(e){U(t,e)
function t(t,i,n,r){var a
void 0===n&&(n={})
a=e.call(this)||this
var s=n,o=s.withCredentials,l=void 0!==o&&o,u=s.handleManifestRedirects,c=void 0!==u&&u
a.vhs_=i
a.withCredentials=l
a.handleManifestRedirects=c
if(!t)throw new Error("A non-empty playlist URL or object is required")
a.on("minimumUpdatePeriod",(function(){a.refreshXml_()}))
a.on("mediaupdatetimeout",(function(){a.refreshMedia_(a.media().id)}))
a.state="HAVE_NOTHING"
a.loadedPlaylists_={}
if("string"==typeof t){a.srcUrl=t
a.sidxMapping_={}
return M(a)}a.setupChildLoader(r,t)
return a}var i=t.prototype
i.setupChildLoader=function(e,t){this.masterPlaylistLoader_=e
this.childPlaylist_=t}
i.dispose=function(){this.trigger("dispose")
this.stopRequest()
this.loadedPlaylists_={}
a.clearTimeout(this.minimumUpdatePeriodTimeout_)
a.clearTimeout(this.mediaRequest_)
a.clearTimeout(this.mediaUpdateTimeout)
this.off()}
i.hasPendingRequest=function(){return this.request||this.mediaRequest_}
i.stopRequest=function(){if(this.request){var e=this.request
this.request=null
e.onreadystatechange=null
e.abort()}}
i.sidxRequestFinished_=function(e,t,i,n){var r=this
return function(a,s){if(r.request){r.request=null
if(!a){var o=vn(s.response),l=un(o.subarray(8))
return n(t,l)}r.error="object"==typeof a?a:{status:s.status,message:"DASH playlist request error at URL: "+e.uri,response:s.response,code:2}
i&&(r.state=i)
r.trigger("error")}}}
i.media=function(e){var t=this
if(!e)return this.media_
if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state)
var i=this.state
if("string"==typeof e){if(!this.master.playlists[e])throw new Error("Unknown playlist URI: "+e)
e=this.master.playlists[e]}var n=!this.media_||e.id!==this.media_.id
if(n&&this.loadedPlaylists_[e.id]&&this.loadedPlaylists_[e.id].endList){this.state="HAVE_METADATA"
this.media_=e
if(n){this.trigger("mediachanging")
this.trigger("mediachange")}}else if(n){this.media_&&this.trigger("mediachanging")
if(e.sidx){var r,s
if(this.masterPlaylistLoader_){r=this.masterPlaylistLoader_.master
s=this.masterPlaylistLoader_.sidxMapping_}else{r=this.master
s=this.sidxMapping_}var o=Nc(e.sidx)
s[o]={sidxInfo:e.sidx}
this.request=Uc(this,e.sidx,e,this.vhs_.xhr,{handleManifestRedirects:this.handleManifestRedirects},this.sidxRequestFinished_(e,r,i,(function(n,r){if(!n||!r)throw new Error("failed to request sidx")
s[o].sidx=r
t.haveMetadata({startingState:i,playlist:n.playlists[e.id]})})))}else this.mediaRequest_=a.setTimeout(this.haveMetadata.bind(this,{startingState:i,playlist:e}),0)}}
i.haveMetadata=function(e){var t=e.startingState,i=e.playlist
this.state="HAVE_METADATA"
this.loadedPlaylists_[i.id]=i
this.mediaRequest_=null
this.refreshMedia_(i.id)
"HAVE_MASTER"===t?this.trigger("loadedmetadata"):this.trigger("mediachange")}
i.pause=function(){this.stopRequest()
a.clearTimeout(this.mediaUpdateTimeout)
a.clearTimeout(this.minimumUpdatePeriodTimeout_)
"HAVE_NOTHING"===this.state&&(this.started=!1)}
i.load=function(e){var t=this
a.clearTimeout(this.mediaUpdateTimeout)
a.clearTimeout(this.minimumUpdatePeriodTimeout_)
var i=this.media()
if(e){var n=i?i.targetDuration/2*1e3:5e3
this.mediaUpdateTimeout=a.setTimeout((function(){return t.load()}),n)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()}
i.start=function(){var e=this
this.started=!0
this.masterPlaylistLoader_?this.mediaRequest_=a.setTimeout(this.haveMaster_.bind(this),0):this.request=this.vhs_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},(function(t,i){if(e.request){e.request=null
if(t){e.error={status:i.status,message:"DASH playlist request error at URL: "+e.srcUrl,responseText:i.responseText,code:2}
"HAVE_NOTHING"===e.state&&(e.started=!1)
return e.trigger("error")}e.masterXml_=i.responseText
i.responseHeaders&&i.responseHeaders.date?e.masterLoaded_=Date.parse(i.responseHeaders.date):e.masterLoaded_=Date.now()
e.srcUrl=ju(e.handleManifestRedirects,e.srcUrl,i)
e.syncClientServerClock_(e.onClientServerClockSync_.bind(e))}}))}
i.syncClientServerClock_=function(e){var t=this,i=ln(this.masterXml_)
if(null===i){this.clientOffset_=this.masterLoaded_-Date.now()
return e()}if("DIRECT"===i.method){this.clientOffset_=i.value-Date.now()
return e()}this.request=this.vhs_.xhr({uri:Bu(this.srcUrl,i.value),method:i.method,withCredentials:this.withCredentials},(function(n,r){if(t.request){if(n){t.clientOffset_=t.masterLoaded_-Date.now()
return e()}var a
a="HEAD"===i.method?r.responseHeaders&&r.responseHeaders.date?Date.parse(r.responseHeaders.date):t.masterLoaded_:Date.parse(r.responseText)
t.clientOffset_=a-Date.now()
e()}}))}
i.haveMaster_=function(){this.state="HAVE_MASTER"
this.mediaRequest_=null
if(this.masterPlaylistLoader_)this.media_||this.media(this.childPlaylist_)
else{this.updateMainManifest_(Dc({masterXml:this.masterXml_,srcUrl:this.srcUrl,clientOffset:this.clientOffset_,sidxMapping:this.sidxMapping_}))
this.trigger("loadedplaylist")}}
i.updateMinimumUpdatePeriodTimeout_=function(){var e=this
a.clearTimeout(this.minimumUpdatePeriodTimeout_)
var t=function(t){e.minimumUpdatePeriodTimeout_=a.setTimeout((function(){e.trigger("minimumUpdatePeriod")}),t)},i=this.master&&this.master.minimumUpdatePeriod
i>0?t(i):0===i&&(this.media()?t(1e3*this.media().targetDuration):this.one("loadedplaylist",(function(){t(1e3*e.media().targetDuration)})))}
i.onClientServerClockSync_=function(){this.haveMaster_()
this.hasPendingRequest()||this.media_||this.media(this.master.playlists[0])
this.updateMinimumUpdatePeriodTimeout_()}
i.updateMainManifest_=function(e){this.master=e
if(this.master.locations&&this.master.locations.length){var t=this.master.locations[0]
t!==this.srcUrl&&(this.srcUrl=t)}}
i.refreshXml_=function(){var e=this
this.request=this.vhs_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},(function(t,i){if(e.request){e.request=null
if(t){e.error={status:i.status,message:"DASH playlist request error at URL: "+e.srcUrl,responseText:i.responseText,code:2}
"HAVE_NOTHING"===e.state&&(e.started=!1)
return e.trigger("error")}e.masterXml_=i.responseText
e.sidxMapping_=(function(e,t,i,n){var r=on(e,{manifestUri:t,clientOffset:i}),a=Mc(r.playlists,n)
qu(r,(function(e,t,i,r){if(e.playlists&&e.playlists.length){var s=e.playlists
a=Lc(a,Mc(s,n))}}))
return a})(e.masterXml_,e.srcUrl,e.clientOffset_,e.sidxMapping_)
var n=Dc({masterXml:e.masterXml_,srcUrl:e.srcUrl,clientOffset:e.clientOffset_,sidxMapping:e.sidxMapping_}),r=Rc(e.master,n),a=e.media().sidx
if(r)if(a){var s=Nc(a)
if(!e.sidxMapping_[s]){var o=e.media()
e.request=Uc(e,o.sidx,o,e.vhs_.xhr,{handleManifestRedirects:e.handleManifestRedirects},e.sidxRequestFinished_(o,n,e.state,(function(t,i){if(!t||!i)throw new Error("failed to request sidx on minimumUpdatePeriod")
e.sidxMapping_[s].sidx=i
e.updateMinimumUpdatePeriodTimeout_()
e.refreshMedia_(e.media().id)})))}}else{e.updateMainManifest_(r)
e.media_&&(e.media_=e.master.playlists[e.media_.id])}e.updateMinimumUpdatePeriodTimeout_()}}))}
i.refreshMedia_=function(e){var t,i,n=this
if(!e)throw new Error("refreshMedia_ must take a media id")
if(this.masterPlaylistLoader_){t=this.masterPlaylistLoader_.master
i=Dc({masterXml:this.masterPlaylistLoader_.masterXml_,srcUrl:this.masterPlaylistLoader_.srcUrl,clientOffset:this.masterPlaylistLoader_.clientOffset_,sidxMapping:this.masterPlaylistLoader_.sidxMapping_})}else{t=this.master
i=Dc({masterXml:this.masterXml_,srcUrl:this.srcUrl,clientOffset:this.clientOffset_,sidxMapping:this.sidxMapping_})}var r=Rc(t,i)
if(r){this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r
this.media_=r.playlists[e]}else{this.media_=t.playlists[e]
this.trigger("playlistunchanged")}this.media().endList||(this.mediaUpdateTimeout=a.setTimeout((function(){n.trigger("mediaupdatetimeout")}),Qu(this.media(),!!r)))
this.trigger("loadedplaylist")}
return t})(Oc),jc={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,BACK_BUFFER_LENGTH:30,GOAL_BUFFER_LENGTH_RATE:1,INITIAL_BANDWIDTH:4194304,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:16,BUFFER_LOW_WATER_LINE_RATE:1,BUFFER_HIGH_WATER_LINE:30},Fc=function(e){for(var t=new Uint8Array(new ArrayBuffer(e.length)),i=0;i<e.length;i++)t[i]=e.charCodeAt(i)
return t.buffer},Vc=[],Hc=function(e){var t=e.transmuxer,i=e.bytes,n=e.audioAppendStart,r=e.gopsToAlignWith,a=e.isPartial,s=e.remux,o=e.onData,l=e.onTrackInfo,u=e.onAudioTimingInfo,c=e.onVideoTimingInfo,d=e.onVideoSegmentTimingInfo,h=e.onId3,p=e.onCaptions,f=e.onDone,m={isPartial:a,buffer:[]}
t.onmessage=function(e){if(Uu){"data"===e.data.action&&(function(e,t,i){var n=e.data.segment,r=n.type,a=n.initSegment,s=n.captions,o=n.captionStreams,l=n.metadata,u=n.videoFrameDtsTime,c=n.videoFramePtsTime
t.buffer.push({captions:s,captionStreams:o,metadata:l})
var d=e.data.segment.boxes||{data:e.data.segment.data},h={type:r,data:new Uint8Array(d.data,d.data.byteOffset,d.data.byteLength),initSegment:new Uint8Array(a.data,a.byteOffset,a.byteLength)}
void 0!==u&&(h.videoFrameDtsTime=u)
void 0!==c&&(h.videoFramePtsTime=c)
i(h)})(e,m,o)
"trackinfo"===e.data.action&&l(e.data.trackInfo)
"gopInfo"===e.data.action&&(function(e,t){t.gopInfo=e.data.gopInfo})(e,m)
"audioTimingInfo"===e.data.action&&u(e.data.audioTimingInfo)
"videoTimingInfo"===e.data.action&&c(e.data.videoTimingInfo)
"videoSegmentTimingInfo"===e.data.action&&d(e.data.videoSegmentTimingInfo)
"id3Frame"===e.data.action&&h([e.data.id3Frame],e.data.id3Frame.dispatchType)
"caption"===e.data.action&&p(e.data.caption)
if("transmuxed"===e.data.type){t.onmessage=null;((function(e){var t=e.transmuxedData,i=e.callback
t.buffer=[]
i(t)}))({transmuxedData:m,callback:f})
qc()}}}
n&&t.postMessage({action:"setAudioAppendStart",appendStart:n})
Array.isArray(r)&&t.postMessage({action:"alignGopsWith",gopsToAlignWith:r})
void 0!==s&&t.postMessage({action:"setRemux",remux:s})
if(i.byteLength){var g=i instanceof ArrayBuffer?i:i.buffer,v=i instanceof ArrayBuffer?0:i.byteOffset
t.postMessage({action:"push",data:g,byteOffset:v,byteLength:i.byteLength},[g])}t.postMessage({action:a?"partialFlush":"flush"})},qc=function(){Uu=null
Vc.length&&("function"==typeof(Uu=Vc.shift())?Uu():Hc(Uu))},Wc=function(e,t){e.postMessage({action:t})
qc()},zc=function(e,t){if(Uu)Vc.push(Wc.bind(null,t,e))
else{Uu=e
Wc(t,e)}},Gc=function(e){if(Uu)Vc.push(e)
else{Uu=e
Hc(e)}},Kc=function(e){zc("reset",e)},Xc=function(){Uu=null
Vc.length=0},Yc=function(e){zc("endTimeline",e)},Qc=2,$c=-101,Jc=-102,Zc=function(e){e.forEach((function(e){e.abort()}))},ed=function(e,t){return t.timedout?{status:t.status,message:"HLS request timed-out at URL: "+t.uri,code:$c,xhr:t}:t.aborted?{status:t.status,message:"HLS request aborted at URL: "+t.uri,code:Jc,xhr:t}:e?{status:t.status,message:"HLS request errored at URL: "+t.uri,code:Qc,xhr:t}:null},td=function(e){var t=e.segment,i=e.bytes,n=e.isPartial,r=e.trackInfoFn,a=e.timingInfoFn,s=e.videoSegmentTimingInfoFn,o=e.id3Fn,l=e.captionsFn,u=e.dataFn,c=e.doneFn,d=t.map&&t.map.tracks||{},h=Boolean(d.audio&&d.video),p=a.bind(null,t,"audio","start"),f=a.bind(null,t,"audio","end"),m=a.bind(null,t,"video","start"),g=a.bind(null,t,"video","end")
if(!n&&!t.lastReachedChar){var v=(function(e,t){var i=Qn(e,t*Fn)
if(!i)return null
var n={hasVideo:i.video&&2===i.video.length||!1,hasAudio:i.audio&&2===i.audio.length||!1}
n.hasVideo&&(n.videoStart=i.video[0].ptsTime)
n.hasAudio&&(n.audioStart=i.audio[0].ptsTime)
return n})(i,t.baseStartTime)
if(v){r(t,{hasAudio:v.hasAudio,hasVideo:v.hasVideo,isMuxed:h})
r=null
v.hasAudio&&!h&&p(v.audioStart)
v.hasVideo&&m(v.videoStart)
p=null
m=null}}Gc({bytes:i,transmuxer:t.transmuxer,audioAppendStart:t.audioAppendStart,gopsToAlignWith:t.gopsToAlignWith,isPartial:n,remux:h,onData:function(e){e.type="combined"===e.type?"video":e.type
u(t,e)},onTrackInfo:function(e){if(r){h&&(e.isMuxed=!0)
r(t,e)}},onAudioTimingInfo:function(e){if(p&&void 0!==e.start){p(e.start)
p=null}f&&void 0!==e.end&&f(e.end)},onVideoTimingInfo:function(e){if(m&&void 0!==e.start){m(e.start)
m=null}g&&void 0!==e.end&&g(e.end)},onVideoSegmentTimingInfo:function(e){s(e)},onId3:function(e,i){o(t,e,i)},onCaptions:function(e){l(t,[e])},onDone:function(e){if(c&&!n){e.type="combined"===e.type?"video":e.type
c(null,t,e)}}})},id=function(e){var t=e.segment,i=e.bytes,n=e.isPartial,r=e.trackInfoFn,a=e.timingInfoFn,s=e.videoSegmentTimingInfoFn,o=e.id3Fn,l=e.captionsFn,u=e.dataFn,c=e.doneFn,d=new Uint8Array(i)
if(pn(d)){t.isFmp4=!0
var h=t.map.tracks,p={isFmp4:!0,hasVideo:!!h.video,hasAudio:!!h.audio}
h.audio&&h.audio.codec&&"enca"!==h.audio.codec&&(p.audioCodec=h.audio.codec)
h.video&&h.video.codec&&"encv"!==h.video.codec&&(p.videoCodec=h.video.codec)
h.video&&h.audio&&(p.isMuxed=!0)
r(t,p)
var f=ur(t.map.timescales,d)
p.hasAudio&&!p.isMuxed&&a(t,"audio","start",f)
p.hasVideo&&a(t,"video","start",f)
var m=function(e){u(t,{data:i,type:p.hasAudio&&!p.isMuxed?"audio":"video"})
e&&e.length&&l(t,e)
c(null,t,{})}
if(!h.video||!i.byteLength||!t.transmuxer){m()
return}var g=i instanceof ArrayBuffer?i:i.buffer,v=i instanceof ArrayBuffer?0:i.byteOffset
t.transmuxer.addEventListener("message",(function e(n){if("mp4Captions"===n.data.action){t.transmuxer.removeEventListener("message",e)
var r=n.data.data
t.bytes=i=new Uint8Array(r,r.byteOffset||0,r.byteLength)
m(n.data.captions)}}))
t.transmuxer.postMessage({action:"pushMp4Captions",timescales:t.map.timescales,trackIds:[h.video.id],data:g,byteOffset:v,byteLength:i.byteLength},[g])}else if(t.transmuxer){void 0===t.container&&(t.container=dn(d))
if("ts"===t.container||"aac"===t.container)td({segment:t,bytes:i,isPartial:n,trackInfoFn:r,timingInfoFn:a,videoSegmentTimingInfoFn:s,id3Fn:o,captionsFn:l,dataFn:u,doneFn:c})
else{r(t,{hasAudio:!1,hasVideo:!1})
c(null,t,{})}}else c(null,t,{})},nd=function(e){var t=e.activeXhrs,i=e.decryptionWorker,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.id3Fn,o=e.captionsFn,l=e.dataFn,u=e.doneFn,c=0,d=!1
return function(e,h){if(!d){if(e){d=!0
Zc(t)
return u(e,h)}if((c+=1)===t.length){h.endOfAllRequests=Date.now()
if(h.encryptedBytes)return (function(e){var t,i=e.decryptionWorker,n=e.segment,r=e.trackInfoFn,a=e.timingInfoFn,s=e.videoSegmentTimingInfoFn,o=e.id3Fn,l=e.captionsFn,u=e.dataFn,c=e.doneFn
i.addEventListener("message",(function e(t){if(t.data.source===n.requestId){i.removeEventListener("message",e)
var d=t.data.decrypted
n.bytes=new Uint8Array(d.bytes,d.byteOffset,d.byteLength)
id({segment:n,bytes:n.bytes,isPartial:!1,trackInfoFn:r,timingInfoFn:a,videoSegmentTimingInfoFn:s,id3Fn:o,captionsFn:l,dataFn:u,doneFn:c})}}))
t=n.key.bytes.slice?n.key.bytes.slice():new Uint32Array(Array.prototype.slice.call(n.key.bytes))
i.postMessage(kc({source:n.requestId,encrypted:n.encryptedBytes,key:t,iv:n.key.iv}),[n.encryptedBytes.buffer,t.buffer])})({decryptionWorker:i,segment:h,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,id3Fn:s,captionsFn:o,dataFn:l,doneFn:u})
id({segment:h,bytes:h.bytes,isPartial:!1,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,id3Fn:s,captionsFn:o,dataFn:l,doneFn:u})}}}},rd=function(e){var t=e.segment,i=e.progressFn,n=e.trackInfoFn,r=e.timingInfoFn,a=e.videoSegmentTimingInfoFn,s=e.id3Fn,o=e.captionsFn,l=e.dataFn,u=e.handlePartialData
return function(e){var c=e.target
if(!c.aborted){if(u&&!t.key&&c.responseText&&c.responseText.length>=8){var d=Fc(c.responseText.substring(t.lastReachedChar||0))
if(t.lastReachedChar||!pn(new Uint8Array(d))){t.lastReachedChar=c.responseText.length
id({segment:t,bytes:d,isPartial:!0,trackInfoFn:n,timingInfoFn:r,videoSegmentTimingInfoFn:a,id3Fn:s,captionsFn:o,dataFn:l})}}t.stats=Ru.mergeOptions(t.stats,(function(e){var t=e.target,i={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-t.requestTime||0}
i.bytesReceived=e.loaded
i.bandwidth=Math.floor(i.bytesReceived/i.roundTripTime*8*1e3)
return i})(e))
!t.stats.firstBytesReceivedAt&&t.stats.bytesReceived&&(t.stats.firstBytesReceivedAt=Date.now())
return i(e,t)}}},ad=function(e){var t=e.xhr,i=e.xhrOptions,n=e.decryptionWorker,r=e.segment,a=e.abortFn,s=e.progressFn,o=e.trackInfoFn,l=e.timingInfoFn,u=e.videoSegmentTimingInfoFn,c=e.id3Fn,d=e.captionsFn,h=e.dataFn,p=e.doneFn,f=e.handlePartialData,m=[],g=nd({activeXhrs:m,decryptionWorker:n,trackInfoFn:o,timingInfoFn:l,videoSegmentTimingInfoFn:u,id3Fn:c,captionsFn:d,dataFn:h,doneFn:p})
if(r.key&&!r.key.bytes){var v=t(Ru.mergeOptions(i,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(function(e,t){return function(i,n){var r=n.response,a=ed(i,n)
if(a)return t(a,e)
if(16!==r.byteLength)return t({status:n.status,message:"Invalid HLS key at URL: "+n.uri,code:Qc,xhr:n},e)
var s=new DataView(r)
e.key.bytes=new Uint32Array([s.getUint32(0),s.getUint32(4),s.getUint32(8),s.getUint32(12)])
return t(null,e)}})(r,g))
m.push(v)}if(r.map&&!r.map.bytes){var y=t(Ru.mergeOptions(i,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:_c(r.map)}),(function(e){var t=e.segment,i=e.finishProcessingFn
return function(e,n){var r=n.response,a=ed(e,n)
if(a)return i(a,t)
if(0===r.byteLength)return i({status:n.status,message:"Empty HLS segment content at URL: "+n.uri,code:Qc,xhr:n},t)
t.map.bytes=new Uint8Array(n.response)
var s=dn(t.map.bytes)
if("mp4"!==s)return i({status:n.status,message:"Found unsupported "+(s||"unknown")+" container for initialization segment at URL: "+n.uri,code:Qc,internal:!0,xhr:n},t)
cr(t.map.bytes).forEach((function(e){t.map.tracks=t.map.tracks||{}
if(!t.map.tracks[e.type]){t.map.tracks[e.type]=e
if(e.id&&e.timescale){t.map.timescales=t.map.timescales||{}
t.map.timescales[e.id]=e.timescale}}}))
return i(null,t)}})({segment:r,finishProcessingFn:g}))
m.push(y)}var _=Ru.mergeOptions(i,{uri:r.resolvedUri,responseType:"arraybuffer",headers:_c(r)})
if(f){_.responseType="text"
_.beforeSend=function(e){e.overrideMimeType("text/plain; charset=x-user-defined")}}var b=t(_,(function(e){var t=e.segment,i=e.finishProcessingFn,n=e.responseType
return function(e,r){var a=r.response,s=ed(e,r)
if(s)return i(s,t)
var o="arraybuffer"!==n&&r.responseText?Fc(r.responseText.substring(t.lastReachedChar||0)):r.response
if(0===a.byteLength)return i({status:r.status,message:"Empty HLS segment content at URL: "+r.uri,code:Qc,xhr:r},t)
t.stats=(function(e){return{bandwidth:e.bandwidth,bytesReceived:e.bytesReceived||0,roundTripTime:e.roundTripTime||0}})(r)
t.key?t.encryptedBytes=new Uint8Array(o):t.bytes=new Uint8Array(o)
return i(null,t)}})({segment:r,finishProcessingFn:g,responseType:_.responseType}))
b.addEventListener("progress",rd({segment:r,progressFn:s,trackInfoFn:o,timingInfoFn:l,videoSegmentTimingInfoFn:u,id3Fn:c,captionsFn:d,dataFn:h,handlePartialData:f}))
m.push(b)
var T={}
m.forEach((function(e){e.addEventListener("loadend",(function(e){var t=e.loadendState,i=e.abortFn
return function(e){if(e.target.aborted&&i&&!t.calledAbortFn){i()
t.calledAbortFn=!0}}})({loadendState:T,abortFn:a}))}))
return function(){return Zc(m)}},sd="undefined"!=typeof window?window:{},od="undefined"==typeof Symbol?"__target":Symbol(),ld="application/javascript",ud=sd.BlobBuilder||sd.WebKitBlobBuilder||sd.MozBlobBuilder||sd.MSBlobBuilder,cd=sd.URL||sd.webkitURL||cd&&cd.msURL,dd=sd.Worker
function hd(e,t){return function(i){var n=this
if(!t)return new dd(e)
if(dd&&!i){var r=gd(t.toString().replace(/^function.+?{/,"").slice(0,-1))
this[od]=new dd(r);((function(e,t){if(!e||!t)return
var i=e.terminate
e.objURL=t
e.terminate=function(){e.objURL&&cd.revokeObjectURL(e.objURL)
i.call(e)}}))(this[od],r)
return this[od]}var a={postMessage:function(e){n.onmessage&&setTimeout((function(){n.onmessage({data:e,target:a})}))}}
t.call(a)
this.postMessage=function(e){setTimeout((function(){a.onmessage({data:e,target:n})}))}
this.isThisThread=!0}}if(dd){var pd,fd=gd("self.onmessage = function () {}"),md=new Uint8Array(1)
try{(pd=new dd(fd)).postMessage(md,[md.buffer])}catch(Kg){dd=null}finally{cd.revokeObjectURL(fd)
pd&&pd.terminate()}}function gd(e){try{return cd.createObjectURL(new Blob([e],{type:ld}))}catch(Kg){var t=new ud
t.append(e)
return cd.createObjectURL(t.getBlob(type))}}var vd=new hd("./transmuxer-worker.worker.js",function(e,t){var i=this;((function(){var e=function(){this.init=function(){var e={}
this.on=function(t,i){e[t]||(e[t]=[])
e[t]=e[t].concat(i)}
this.off=function(t,i){var n
if(!e[t])return!1
n=e[t].indexOf(i)
e[t]=e[t].slice()
e[t].splice(n,1)
return n>-1}
this.trigger=function(t){var i,n,r,a
if(i=e[t])if(2===arguments.length){r=i.length
for(n=0;n<r;++n)i[n].call(this,arguments[1])}else{a=[]
n=arguments.length
for(n=1;n<arguments.length;++n)a.push(arguments[n])
r=i.length
for(n=0;n<r;++n)i[n].apply(this,a)}}
this.dispose=function(){e={}}}}
e.prototype.pipe=function(e){this.on("data",(function(t){e.push(t)}))
this.on("done",(function(t){e.flush(t)}))
this.on("partialdone",(function(t){e.partialFlush(t)}))
this.on("endedtimeline",(function(t){e.endTimeline(t)}))
this.on("reset",(function(t){e.reset(t)}))
return e}
e.prototype.push=function(e){this.trigger("data",e)}
e.prototype.flush=function(e){this.trigger("done",e)}
e.prototype.partialFlush=function(e){this.trigger("partialdone",e)}
e.prototype.endTimeline=function(e){this.trigger("endedtimeline",e)}
e.prototype.reset=function(e){this.trigger("reset",e)}
var t,n,r,a,s,o,l,u,c,d,h,p,f,m,g,v,y,_,b,T,S,k,C,E,w,I,P,A,x,O,L,D,R,N,M,U,B=e,j=Math.pow(2,32)-1;((function(){var e
C={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],pasp:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]}
if("undefined"!=typeof Uint8Array){for(e in C)C.hasOwnProperty(e)&&(C[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)])
E=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)])
I=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)])
w=new Uint8Array([0,0,0,1])
P=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0])
A=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0])
x={video:P,audio:A}
D=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1])
L=new Uint8Array([0,0,0,0,0,0,0,0])
R=new Uint8Array([0,0,0,0,0,0,0,0])
N=R
M=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0])
U=R
O=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}))()
t=function(e){var t,i,n=[],r=0
for(t=1;t<arguments.length;t++)n.push(arguments[t])
t=n.length
for(;t--;)r+=n[t].byteLength
i=new Uint8Array(r+8)
new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength)
i.set(e,4)
for(t=0,r=8;t<n.length;t++){i.set(n[t],r)
r+=n[t].byteLength}return i}
n=function(){return t(C.dinf,t(C.dref,D))}
r=function(e){return t(C.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,e.audioobjecttype<<3|e.samplingfrequencyindex>>>1,e.samplingfrequencyindex<<7|e.channelcount<<3,6,1,2]))}
a=function(){return t(C.ftyp,E,w,E,I)}
v=function(e){return t(C.hdlr,x[e])}
s=function(e){return t(C.mdat,e)}
g=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,e.duration>>>24&255,e.duration>>>16&255,e.duration>>>8&255,255&e.duration,85,196,0,0])
if(e.samplerate){i[12]=e.samplerate>>>24&255
i[13]=e.samplerate>>>16&255
i[14]=e.samplerate>>>8&255
i[15]=255&e.samplerate}return t(C.mdhd,i)}
m=function(e){return t(C.mdia,g(e),v(e.type),l(e))}
o=function(e){return t(C.mfhd,new Uint8Array([0,0,0,0,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e]))}
l=function(e){return t(C.minf,"video"===e.type?t(C.vmhd,O):t(C.smhd,L),n(),_(e))}
u=function(e,i){for(var n=[],r=i.length;r--;)n[r]=T(i[r])
return t.apply(null,[C.moof,o(e)].concat(n))}
c=function(e){for(var i=e.length,n=[];i--;)n[i]=p(e[i])
return t.apply(null,[C.moov,h(4294967295)].concat(n).concat(d(e)))}
d=function(e){for(var i=e.length,n=[];i--;)n[i]=S(e[i])
return t.apply(null,[C.mvex].concat(n))}
h=function(e){var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255])
return t(C.mvhd,i)}
y=function(e){var i,n,r=e.samples||[],a=new Uint8Array(4+r.length)
for(n=0;n<r.length;n++){i=r[n].flags
a[n+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy}return t(C.sdtp,a)}
_=function(e){return t(C.stbl,b(e),t(C.stts,U),t(C.stsc,N),t(C.stsz,M),t(C.stco,R))};((function(){var e,i
b=function(n){return t(C.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===n.type?e(n):i(n))}
e=function(e){var i,n,r=e.sps||[],a=e.pps||[],s=[],o=[]
for(i=0;i<r.length;i++){s.push((65280&r[i].byteLength)>>>8)
s.push(255&r[i].byteLength)
s=s.concat(Array.prototype.slice.call(r[i]))}for(i=0;i<a.length;i++){o.push((65280&a[i].byteLength)>>>8)
o.push(255&a[i].byteLength)
o=o.concat(Array.prototype.slice.call(a[i]))}n=[C.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&e.width)>>8,255&e.width,(65280&e.height)>>8,255&e.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),t(C.avcC,new Uint8Array([1,e.profileIdc,e.profileCompatibility,e.levelIdc,255].concat([r.length],s,[a.length],o))),t(C.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192]))]
if(e.sarRatio){var l=e.sarRatio[0],u=e.sarRatio[1]
n.push(t(C.pasp,new Uint8Array([(4278190080&l)>>24,(16711680&l)>>16,(65280&l)>>8,255&l,(4278190080&u)>>24,(16711680&u)>>16,(65280&u)>>8,255&u])))}return t.apply(null,n)}
i=function(e){return t(C.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&e.channelcount)>>8,255&e.channelcount,(65280&e.samplesize)>>8,255&e.samplesize,0,0,0,0,(65280&e.samplerate)>>8,255&e.samplerate,0,0]),r(e))}}))()
f=function(e){var i=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,0,(4278190080&e.duration)>>24,(16711680&e.duration)>>16,(65280&e.duration)>>8,255&e.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&e.width)>>8,255&e.width,0,0,(65280&e.height)>>8,255&e.height,0,0])
return t(C.tkhd,i)}
T=function(e){var i,n,r,a,s,o
i=t(C.tfhd,new Uint8Array([0,0,0,58,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]))
s=Math.floor(e.baseMediaDecodeTime/(j+1))
o=Math.floor(e.baseMediaDecodeTime%(j+1))
n=t(C.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o]))
92
if("audio"===e.type){r=k(e,92)
return t(C.traf,i,n,r)}a=y(e)
r=k(e,a.length+92)
return t(C.traf,i,n,r,a)}
p=function(e){e.duration=e.duration||4294967295
return t(C.trak,f(e),m(e))}
S=function(e){var i=new Uint8Array([0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1])
"video"!==e.type&&(i[i.length-1]=0)
return t(C.trex,i)};((function(){var e,i,n
n=function(e,t){var i=0,n=0,r=0,a=0
if(e.length){void 0!==e[0].duration&&(i=1)
void 0!==e[0].size&&(n=2)
void 0!==e[0].flags&&(r=4)
void 0!==e[0].compositionTimeOffset&&(a=8)}return[0,0,i|n|r|a,1,(4278190080&e.length)>>>24,(16711680&e.length)>>>16,(65280&e.length)>>>8,255&e.length,(4278190080&t)>>>24,(16711680&t)>>>16,(65280&t)>>>8,255&t]}
i=function(e,i){var r,a,s,o,l,u
i+=20+16*(o=e.samples||[]).length
s=n(o,i);(a=new Uint8Array(s.length+16*o.length)).set(s)
r=s.length
for(u=0;u<o.length;u++){l=o[u]
a[r++]=(4278190080&l.duration)>>>24
a[r++]=(16711680&l.duration)>>>16
a[r++]=(65280&l.duration)>>>8
a[r++]=255&l.duration
a[r++]=(4278190080&l.size)>>>24
a[r++]=(16711680&l.size)>>>16
a[r++]=(65280&l.size)>>>8
a[r++]=255&l.size
a[r++]=l.flags.isLeading<<2|l.flags.dependsOn
a[r++]=l.flags.isDependedOn<<6|l.flags.hasRedundancy<<4|l.flags.paddingValue<<1|l.flags.isNonSyncSample
a[r++]=61440&l.flags.degradationPriority
a[r++]=15&l.flags.degradationPriority
a[r++]=(4278190080&l.compositionTimeOffset)>>>24
a[r++]=(16711680&l.compositionTimeOffset)>>>16
a[r++]=(65280&l.compositionTimeOffset)>>>8
a[r++]=255&l.compositionTimeOffset}return t(C.trun,a)}
e=function(e,i){var r,a,s,o,l,u
i+=20+8*(o=e.samples||[]).length
s=n(o,i);(r=new Uint8Array(s.length+8*o.length)).set(s)
a=s.length
for(u=0;u<o.length;u++){l=o[u]
r[a++]=(4278190080&l.duration)>>>24
r[a++]=(16711680&l.duration)>>>16
r[a++]=(65280&l.duration)>>>8
r[a++]=255&l.duration
r[a++]=(4278190080&l.size)>>>24
r[a++]=(16711680&l.size)>>>16
r[a++]=(65280&l.size)>>>8
r[a++]=255&l.size}return t(C.trun,r)}
k=function(t,n){return"audio"===t.type?e(t,n):i(t,n)}}))()
var F,V,H,q,W,z,G,K,X=s,Y=u,Q=function(e){var t,i=a(),n=c(e);(t=new Uint8Array(i.byteLength+n.byteLength)).set(i)
t.set(n,i.byteLength)
return t},$=function(e,t){var i={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0,isNonSyncSample:1}}
i.dataOffset=t
i.compositionTimeOffset=e.pts-e.dts
i.duration=e.duration
i.size=4*e.length
i.size+=e.byteLength
if(e.keyFrame){i.flags.dependsOn=2
i.flags.isNonSyncSample=0}return i},J=function(e){var t,i,n=[],r=[]
r.byteLength=0
r.nalCount=0
r.duration=0
n.byteLength=0
for(t=0;t<e.length;t++)if("access_unit_delimiter_rbsp"===(i=e[t]).nalUnitType){if(n.length){n.duration=i.dts-n.dts
r.byteLength+=n.byteLength
r.nalCount+=n.length
r.duration+=n.duration
r.push(n)}(n=[i]).byteLength=i.data.byteLength
n.pts=i.pts
n.dts=i.dts}else{"slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(n.keyFrame=!0)
n.duration=i.dts-n.dts
n.byteLength+=i.data.byteLength
n.push(i)}r.length&&(!n.duration||n.duration<=0)&&(n.duration=r[r.length-1].duration)
r.byteLength+=n.byteLength
r.nalCount+=n.length
r.duration+=n.duration
r.push(n)
return r},Z=function(e){var t,i,n=[],r=[]
n.byteLength=0
n.nalCount=0
n.duration=0
n.pts=e[0].pts
n.dts=e[0].dts
r.byteLength=0
r.nalCount=0
r.duration=0
r.pts=e[0].pts
r.dts=e[0].dts
for(t=0;t<e.length;t++)if((i=e[t]).keyFrame){if(n.length){r.push(n)
r.byteLength+=n.byteLength
r.nalCount+=n.nalCount
r.duration+=n.duration}(n=[i]).nalCount=i.length
n.byteLength=i.byteLength
n.pts=i.pts
n.dts=i.dts
n.duration=i.duration}else{n.duration+=i.duration
n.nalCount+=i.length
n.byteLength+=i.byteLength
n.push(i)}r.length&&n.duration<=0&&(n.duration=r[r.length-1].duration)
r.byteLength+=n.byteLength
r.nalCount+=n.nalCount
r.duration+=n.duration
r.push(n)
return r},ee=function(e){var t
if(!e[0][0].keyFrame&&e.length>1){t=e.shift()
e.byteLength-=t.byteLength
e.nalCount-=t.nalCount
e[0][0].dts=t.dts
e[0][0].pts=t.pts
e[0][0].duration+=t.duration}return e},te=function(e,t){var i,n,r,a,s,o=t||0,l=[]
for(i=0;i<e.length;i++){a=e[i]
for(n=0;n<a.length;n++){s=a[n]
o+=(r=$(s,o)).size
l.push(r)}}return l},ie=function(e){var t,i,n,r,a,s,o=0,l=e.byteLength,u=e.nalCount,c=new Uint8Array(l+4*u),d=new DataView(c.buffer)
for(t=0;t<e.length;t++){r=e[t]
for(i=0;i<r.length;i++){a=r[i]
for(n=0;n<a.length;n++){s=a[n]
d.setUint32(o,s.data.byteLength)
o+=4
c.set(s.data,o)
o+=s.data.byteLength}}}return c},ne=function(e,t){var i,n=[]
i=$(e,t||0)
n.push(i)
return n},re=function(e){var t,i,n=0,r=e.byteLength,a=e.length,s=new Uint8Array(r+4*a),o=new DataView(s.buffer)
for(t=0;t<e.length;t++){i=e[t]
o.setUint32(n,i.data.byteLength)
n+=4
s.set(i.data,n)
n+=i.data.byteLength}return s},ae=[33,16,5,32,164,27],se=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],oe=function(e){for(var t=[];e--;)t.push(0)
return t},le=function(){if(!F){var e={96000:[ae,[227,64],oe(154),[56]],88200:[ae,[231],oe(170),[56]],64000:[ae,[248,192],oe(240),[56]],48000:[ae,[255,192],oe(268),[55,148,128],oe(54),[112]],44100:[ae,[255,192],oe(268),[55,163,128],oe(84),[112]],32000:[ae,[255,192],oe(268),[55,234],oe(226),[112]],24000:[ae,[255,192],oe(268),[55,255,128],oe(268),[111,112],oe(126),[224]],16000:[ae,[255,192],oe(268),[55,255,128],oe(268),[111,255],oe(269),[223,108],oe(195),[1,192]],12000:[se,oe(268),[3,127,248],oe(268),[6,255,240],oe(268),[13,255,224],oe(268),[27,253,128],oe(259),[56]],11025:[se,oe(268),[3,127,248],oe(268),[6,255,240],oe(268),[13,255,224],oe(268),[27,255,192],oe(268),[55,175,128],oe(108),[112]],8000:[se,oe(268),[3,121,16],oe(47),[7]]}
F=(t=e,Object.keys(t).reduce((function(e,i){e[i]=new Uint8Array(t[i].reduce((function(e,t){return e.concat(t)}),[]))
return e}),{}))}var t
return F}
z=function(e,t){return V(W(e,t))}
G=function(e,t){return H(q(e),t)}
K=function(e,t,i){return q(i?e:e-t)}
var ue=9e4,ce=(H=function(e,t){return e*t},q=function(e){return e/9e4}),de=(W=function(e,t){return e/t},z),he=G,pe=K,fe=V=function(e){return 9e4*e},me=ce,ge=function(e,t,i,n){var r,a,s,o,l,u=0,c=0,d=0
if(t.length){r=de(e.baseMediaDecodeTime,e.samplerate)
a=Math.ceil(ue/(e.samplerate/1024))
if(i&&n){u=r-Math.max(i,n)
d=(c=Math.floor(u/a))*a}if(!(c<1||d>ue/2)){(s=le()[e.samplerate])||(s=t[0].data)
for(o=0;o<c;o++){l=t[0]
t.splice(0,0,{data:s,dts:l.dts-a,pts:l.pts-a})}e.baseMediaDecodeTime-=Math.floor(he(d,e.samplerate))}}},ve=function(e,t,i){if(t.minSegmentDts>=i)return e
t.minSegmentDts=1/0
return e.filter((function(e){if(e.dts>=i){t.minSegmentDts=Math.min(t.minSegmentDts,e.dts)
t.minSegmentPts=t.minSegmentDts
return!0}return!1}))},ye=function(e){var t,i,n=[]
for(t=0;t<e.length;t++){i=e[t]
n.push({size:i.data.byteLength,duration:1024})}return n},_e=function(e){var t,i,n=0,r=new Uint8Array((function(e){var t,i=0
for(t=0;t<e.length;t++)i+=e[t].data.byteLength
return i})(e))
for(t=0;t<e.length;t++){i=e[t]
r.set(i.data,n)
n+=i.data.byteLength}return r},be=ue,Te=function(e){delete e.minSegmentDts
delete e.maxSegmentDts
delete e.minSegmentPts
delete e.maxSegmentPts},Se=function(e,t){var i,n=e.minSegmentDts
t||(n-=e.timelineStartInfo.dts)
i=e.timelineStartInfo.baseMediaDecodeTime
i+=n
i=Math.max(0,i)
if("audio"===e.type){i*=e.samplerate/be
i=Math.floor(i)}return i},ke=function(e,t){if("number"==typeof t.pts){void 0===e.timelineStartInfo.pts&&(e.timelineStartInfo.pts=t.pts)
void 0===e.minSegmentPts?e.minSegmentPts=t.pts:e.minSegmentPts=Math.min(e.minSegmentPts,t.pts)
void 0===e.maxSegmentPts?e.maxSegmentPts=t.pts:e.maxSegmentPts=Math.max(e.maxSegmentPts,t.pts)}if("number"==typeof t.dts){void 0===e.timelineStartInfo.dts&&(e.timelineStartInfo.dts=t.dts)
void 0===e.minSegmentDts?e.minSegmentDts=t.dts:e.minSegmentDts=Math.min(e.minSegmentDts,t.dts)
void 0===e.maxSegmentDts?e.maxSegmentDts=t.dts:e.maxSegmentDts=Math.max(e.maxSegmentDts,t.dts)}},Ce=function(e){for(var t=0,i={payloadType:-1,payloadSize:0},n=0,r=0;t<e.byteLength&&128!==e[t];){for(;255===e[t];){n+=255
t++}n+=e[t++]
for(;255===e[t];){r+=255
t++}r+=e[t++]
if(!i.payload&&4===n){if("GA94"===String.fromCharCode(e[t+3],e[t+4],e[t+5],e[t+6])){i.payloadType=n
i.payloadSize=r
i.payload=e.subarray(t,t+r)
break}i.payload=void 0}t+=r
n=0
r=0}return i},Ee=function(e){return 181!==e.payload[0]?null:49!=(e.payload[1]<<8|e.payload[2])?null:"GA94"!==String.fromCharCode(e.payload[3],e.payload[4],e.payload[5],e.payload[6])?null:3!==e.payload[7]?null:e.payload.subarray(8,e.payload.length-1)},we=function(e,t){var i,n,r,a,s=[]
if(!(64&t[0]))return s
n=31&t[0]
for(i=0;i<n;i++){a={type:3&t[2+(r=3*i)],pts:e}
if(4&t[r+2]){a.ccData=t[r+3]<<8|t[r+4]
s.push(a)}}return s},Ie=function(e){for(var t,i,n=e.byteLength,r=[],a=1;a<n-2;)if(0===e[a]&&0===e[a+1]&&3===e[a+2]){r.push(a+2)
a+=2}else a++
if(0===r.length)return e
t=n-r.length
i=new Uint8Array(t)
var s=0
for(a=0;a<t;s++,a++){if(s===r[0]){s++
r.shift()}i[a]=e[s]}return i},Pe=4,Ae=function e(){e.prototype.init.call(this)
this.captionPackets_=[]
this.ccStreams_=[new Re(0,0),new Re(0,1),new Re(1,0),new Re(1,1)]
this.reset()
this.ccStreams_.forEach((function(e){e.on("data",this.trigger.bind(this,"data"))
e.on("partialdone",this.trigger.bind(this,"partialdone"))
e.on("done",this.trigger.bind(this,"done"))}),this)};(Ae.prototype=new B).push=function(e){var t,i,n
if("sei_rbsp"===e.nalUnitType&&(t=Ce(e.escapedRBSP)).payloadType===Pe&&(i=Ee(t)))if(e.dts<this.latestDts_)this.ignoreNextEqualDts_=!0
else if(e.dts===this.latestDts_&&this.ignoreNextEqualDts_){this.numSameDts_--
this.numSameDts_||(this.ignoreNextEqualDts_=!1)}else{n=we(e.pts,i)
this.captionPackets_=this.captionPackets_.concat(n)
this.latestDts_!==e.dts&&(this.numSameDts_=0)
this.numSameDts_++
this.latestDts_=e.dts}}
Ae.prototype.flushCCStreams=function(e){this.ccStreams_.forEach((function(t){return"flush"===e?t.flush():t.partialFlush()}),this)}
Ae.prototype.flushStream=function(e){if(this.captionPackets_.length){this.captionPackets_.forEach((function(e,t){e.presortIndex=t}))
this.captionPackets_.sort((function(e,t){return e.pts===t.pts?e.presortIndex-t.presortIndex:e.pts-t.pts}))
this.captionPackets_.forEach((function(e){e.type<2&&this.dispatchCea608Packet(e)}),this)
this.captionPackets_.length=0
this.flushCCStreams(e)}else this.flushCCStreams(e)}
Ae.prototype.flush=function(){return this.flushStream("flush")}
Ae.prototype.partialFlush=function(){return this.flushStream("partialFlush")}
Ae.prototype.reset=function(){this.latestDts_=null
this.ignoreNextEqualDts_=!1
this.numSameDts_=0
this.activeCea608Channel_=[null,null]
this.ccStreams_.forEach((function(e){e.reset()}))}
Ae.prototype.dispatchCea608Packet=function(e){this.setsTextOrXDSActive(e)?this.activeCea608Channel_[e.type]=null:this.setsChannel1Active(e)?this.activeCea608Channel_[e.type]=0:this.setsChannel2Active(e)&&(this.activeCea608Channel_[e.type]=1)
null!==this.activeCea608Channel_[e.type]&&this.ccStreams_[(e.type<<1)+this.activeCea608Channel_[e.type]].push(e)}
Ae.prototype.setsChannel1Active=function(e){return 4096==(30720&e.ccData)}
Ae.prototype.setsChannel2Active=function(e){return 6144==(30720&e.ccData)}
Ae.prototype.setsTextOrXDSActive=function(e){return 256==(28928&e.ccData)||4138==(30974&e.ccData)||6186==(30974&e.ccData)}
var xe={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Oe=function(e){if(null===e)return""
e=xe[e]||e
return String.fromCharCode(e)},Le=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],De=function(){for(var e=[],t=15;t--;)e.push("")
return e},Re=function e(t,i){e.prototype.init.call(this)
this.field_=t||0
this.dataChannel_=i||0
this.name_="CC"+(1+(this.field_<<1|this.dataChannel_))
this.setConstants()
this.reset()
this.push=function(e){var t,i,n,r,a
if((t=32639&e.ccData)!==this.lastControlCode_){4096==(61440&t)?this.lastControlCode_=t:t!==this.PADDING_&&(this.lastControlCode_=null)
n=t>>>8
r=255&t
if(t!==this.PADDING_)if(t===this.RESUME_CAPTION_LOADING_)this.mode_="popOn"
else if(t===this.END_OF_CAPTION_){this.mode_="popOn"
this.clearFormatting(e.pts)
this.flushDisplayed(e.pts)
i=this.displayed_
this.displayed_=this.nonDisplayed_
this.nonDisplayed_=i
this.startPts_=e.pts}else if(t===this.ROLL_UP_2_ROWS_){this.rollUpRows_=2
this.setRollUp(e.pts)}else if(t===this.ROLL_UP_3_ROWS_){this.rollUpRows_=3
this.setRollUp(e.pts)}else if(t===this.ROLL_UP_4_ROWS_){this.rollUpRows_=4
this.setRollUp(e.pts)}else if(t===this.CARRIAGE_RETURN_){this.clearFormatting(e.pts)
this.flushDisplayed(e.pts)
this.shiftRowsUp_()
this.startPts_=e.pts}else if(t===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1)
else if(t===this.ERASE_DISPLAYED_MEMORY_){this.flushDisplayed(e.pts)
this.displayed_=De()}else if(t===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=De()
else if(t===this.RESUME_DIRECT_CAPTIONING_){if("paintOn"!==this.mode_){this.flushDisplayed(e.pts)
this.displayed_=De()}this.mode_="paintOn"
this.startPts_=e.pts}else if(this.isSpecialCharacter(n,r)){a=Oe((n=(3&n)<<8)|r)
this[this.mode_](e.pts,a)
this.column_++}else if(this.isExtCharacter(n,r)){"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[this.row_]=this.displayed_[this.row_].slice(0,-1)
a=Oe((n=(3&n)<<8)|r)
this[this.mode_](e.pts,a)
this.column_++}else if(this.isMidRowCode(n,r)){this.clearFormatting(e.pts)
this[this.mode_](e.pts," ")
this.column_++
14==(14&r)&&this.addFormatting(e.pts,["i"])
1==(1&r)&&this.addFormatting(e.pts,["u"])}else if(this.isOffsetControlCode(n,r))this.column_+=3&r
else if(this.isPAC(n,r)){var s=Le.indexOf(7968&t)
if("rollUp"===this.mode_){s-this.rollUpRows_+1<0&&(s=this.rollUpRows_-1)
this.setRollUp(e.pts,s)}if(s!==this.row_){this.clearFormatting(e.pts)
this.row_=s}1&r&&-1===this.formatting_.indexOf("u")&&this.addFormatting(e.pts,["u"])
16==(16&t)&&(this.column_=4*((14&t)>>1))
this.isColorPAC(r)&&14==(14&r)&&this.addFormatting(e.pts,["i"])}else if(this.isNormalChar(n)){0===r&&(r=null)
a=Oe(n)
a+=Oe(r)
this[this.mode_](e.pts,a)
this.column_+=a.length}}else this.lastControlCode_=null}}
Re.prototype=new B
Re.prototype.flushDisplayed=function(e){var t=this.displayed_.map((function(e){try{return e.trim()}catch(Kg){console.error("Skipping malformed caption.")
return""}})).join("\n").replace(/^\n+|\n+$/g,"")
t.length&&this.trigger("data",{startPts:this.startPts_,endPts:e,text:t,stream:this.name_})}
Re.prototype.reset=function(){this.mode_="popOn"
this.topRow_=0
this.startPts_=0
this.displayed_=De()
this.nonDisplayed_=De()
this.lastControlCode_=null
this.column_=0
this.row_=14
this.rollUpRows_=2
this.formatting_=[]}
Re.prototype.setConstants=function(){if(0===this.dataChannel_){this.BASE_=16
this.EXT_=17
this.CONTROL_=(20|this.field_)<<8
this.OFFSET_=23}else if(1===this.dataChannel_){this.BASE_=24
this.EXT_=25
this.CONTROL_=(28|this.field_)<<8
this.OFFSET_=31}this.PADDING_=0
this.RESUME_CAPTION_LOADING_=32|this.CONTROL_
this.END_OF_CAPTION_=47|this.CONTROL_
this.ROLL_UP_2_ROWS_=37|this.CONTROL_
this.ROLL_UP_3_ROWS_=38|this.CONTROL_
this.ROLL_UP_4_ROWS_=39|this.CONTROL_
this.CARRIAGE_RETURN_=45|this.CONTROL_
this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_
this.BACKSPACE_=33|this.CONTROL_
this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_
this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_}
Re.prototype.isSpecialCharacter=function(e,t){return e===this.EXT_&&t>=48&&t<=63}
Re.prototype.isExtCharacter=function(e,t){return(e===this.EXT_+1||e===this.EXT_+2)&&t>=32&&t<=63}
Re.prototype.isMidRowCode=function(e,t){return e===this.EXT_&&t>=32&&t<=47}
Re.prototype.isOffsetControlCode=function(e,t){return e===this.OFFSET_&&t>=33&&t<=35}
Re.prototype.isPAC=function(e,t){return e>=this.BASE_&&e<this.BASE_+8&&t>=64&&t<=127}
Re.prototype.isColorPAC=function(e){return e>=64&&e<=79||e>=96&&e<=127}
Re.prototype.isNormalChar=function(e){return e>=32&&e<=127}
Re.prototype.setRollUp=function(e,t){if("rollUp"!==this.mode_){this.row_=14
this.mode_="rollUp"
this.flushDisplayed(e)
this.nonDisplayed_=De()
this.displayed_=De()}if(void 0!==t&&t!==this.row_)for(var i=0;i<this.rollUpRows_;i++){this.displayed_[t-i]=this.displayed_[this.row_-i]
this.displayed_[this.row_-i]=""}void 0===t&&(t=this.row_)
this.topRow_=t-this.rollUpRows_+1}
Re.prototype.addFormatting=function(e,t){this.formatting_=this.formatting_.concat(t)
var i=t.reduce((function(e,t){return e+"<"+t+">"}),"")
this[this.mode_](e,i)}
Re.prototype.clearFormatting=function(e){if(this.formatting_.length){var t=this.formatting_.reverse().reduce((function(e,t){return e+"</"+t+">"}),"")
this.formatting_=[]
this[this.mode_](e,t)}}
Re.prototype.popOn=function(e,t){var i=this.nonDisplayed_[this.row_]
i+=t
this.nonDisplayed_[this.row_]=i}
Re.prototype.rollUp=function(e,t){var i=this.displayed_[this.row_]
i+=t
this.displayed_[this.row_]=i}
Re.prototype.shiftRowsUp_=function(){var e
for(e=0;e<this.topRow_;e++)this.displayed_[e]=""
for(e=this.row_+1;e<15;e++)this.displayed_[e]=""
for(e=this.topRow_;e<this.row_;e++)this.displayed_[e]=this.displayed_[e+1]
this.displayed_[this.row_]=""}
Re.prototype.paintOn=function(e,t){var i=this.displayed_[this.row_]
i+=t
this.displayed_[this.row_]=i}
var Ne={CaptionStream:Ae,Cea608Stream:Re},Me={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},Ue=function(e,t){var i=1
e>t&&(i=-1)
for(;Math.abs(t-e)>4294967296;)e+=8589934592*i
return e},Be=function e(t){var i,n
e.prototype.init.call(this)
this.type_=t||"shared"
this.push=function(e){if("shared"===this.type_||e.type===this.type_){void 0===n&&(n=e.dts)
e.dts=Ue(e.dts,n)
e.pts=Ue(e.pts,n)
i=e.dts
this.trigger("data",e)}}
this.flush=function(){n=i
this.trigger("done")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline")}
this.discontinuity=function(){n=void 0
i=void 0}
this.reset=function(){this.discontinuity()
this.trigger("reset")}}
Be.prototype=new B
var je,Fe=Be,Ve=function(e,t,i){var n,r=""
for(n=t;n<i;n++)r+="%"+("00"+e[n].toString(16)).slice(-2)
return r},He=function(e,t,i){return decodeURIComponent(Ve(e,t,i))},qe=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},We={TXXX:function(e){var t
if(3===e.data[0]){for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=He(e.data,1,t)
e.value=He(e.data,t+1,e.data.length).replace(/\0*$/,"")
break}e.data=e.value}},WXXX:function(e){var t
if(3===e.data[0])for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=He(e.data,1,t)
e.url=He(e.data,t+1,e.data.length)
break}},PRIV:function(e){var t,i
for(t=0;t<e.data.length;t++)if(0===e.data[t]){e.owner=(i=e.data,unescape(Ve(i,0,t)))
break}e.privateData=e.data.subarray(t+1)
e.data=e.privateData}};(je=function(e){var t,i={debug:!(!e||!e.debug),descriptor:e&&e.descriptor},n=0,r=[],a=0
je.prototype.init.call(this)
this.dispatchType=Me.METADATA_STREAM_TYPE.toString(16)
if(i.descriptor)for(t=0;t<i.descriptor.length;t++)this.dispatchType+=("00"+i.descriptor[t].toString(16)).slice(-2)
this.push=function(e){var t,s,o,l,u
if("timed-metadata"===e.type){if(e.dataAlignmentIndicator){a=0
r.length=0}if(0===r.length&&(e.data.length<10||e.data[0]!=="I".charCodeAt(0)||e.data[1]!=="D".charCodeAt(0)||e.data[2]!=="3".charCodeAt(0)))i.debug&&console.log("Skipping unrecognized metadata packet")
else{r.push(e)
a+=e.data.byteLength
if(1===r.length){n=qe(e.data.subarray(6,10))
n+=10}if(!(a<n)){t={data:new Uint8Array(n),frames:[],pts:r[0].pts,dts:r[0].dts}
for(u=0;u<n;){t.data.set(r[0].data.subarray(0,n-u),u)
u+=r[0].data.byteLength
a-=r[0].data.byteLength
r.shift()}s=10
if(64&t.data[5]){s+=4
s+=qe(t.data.subarray(10,14))
n-=qe(t.data.subarray(16,20))}do{if((o=qe(t.data.subarray(s+4,s+8)))<1)return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");(l={id:String.fromCharCode(t.data[s],t.data[s+1],t.data[s+2],t.data[s+3]),data:t.data.subarray(s+10,s+o+10)}).key=l.id
if(We[l.id]){We[l.id](l)
if("com.apple.streaming.transportStreamTimestamp"===l.owner){var c=l.data,d=(1&c[3])<<30|c[4]<<22|c[5]<<14|c[6]<<6|c[7]>>>2
d*=4
d+=3&c[7]
l.timeStamp=d
if(void 0===t.pts&&void 0===t.dts){t.pts=l.timeStamp
t.dts=l.timeStamp}this.trigger("timestamp",l)}}t.frames.push(l)
s+=10
s+=o}while(s<n)
this.trigger("data",t)}}}}}).prototype=new B
var ze,Ge,Ke,Xe=je,Ye=Fe;(ze=function(){var e=new Uint8Array(188),t=0
ze.prototype.init.call(this)
this.push=function(i){var n,r=0,a=188
if(t){(n=new Uint8Array(i.byteLength+t)).set(e.subarray(0,t))
n.set(i,t)
t=0}else n=i
for(;a<n.byteLength;)if(71!==n[r]||71!==n[a]){r++
a++}else{this.trigger("data",n.subarray(r,a))
r+=188
a+=188}if(r<n.byteLength){e.set(n.subarray(r),0)
t=n.byteLength-r}}
this.flush=function(){if(188===t&&71===e[0]){this.trigger("data",e)
t=0}this.trigger("done")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline")}
this.reset=function(){t=0
this.trigger("reset")}}).prototype=new B;(Ge=function(){var e,t,i,n
Ge.prototype.init.call(this)
n=this
this.packetsWaitingForPmt=[]
this.programMapTable=void 0
e=function(e,n){var r=0
n.payloadUnitStartIndicator&&(r+=e[r]+1)
"pat"===n.type?t(e.subarray(r),n):i(e.subarray(r),n)}
t=function(e,t){t.section_number=e[7]
t.last_section_number=e[8]
n.pmtPid=(31&e[10])<<8|e[11]
t.pmtPid=n.pmtPid}
i=function(e,t){var i,r
if(1&e[5]){n.programMapTable={video:null,audio:null,"timed-metadata":{}}
i=3+((15&e[1])<<8|e[2])-4
r=12+((15&e[10])<<8|e[11])
for(;r<i;){var a=e[r],s=(31&e[r+1])<<8|e[r+2]
a===Me.H264_STREAM_TYPE&&null===n.programMapTable.video?n.programMapTable.video=s:a===Me.ADTS_STREAM_TYPE&&null===n.programMapTable.audio?n.programMapTable.audio=s:a===Me.METADATA_STREAM_TYPE&&(n.programMapTable["timed-metadata"][s]=a)
r+=5+((15&e[r+3])<<8|e[r+4])}t.programMapTable=n.programMapTable}}
this.push=function(t){var i={},n=4
i.payloadUnitStartIndicator=!!(64&t[1])
i.pid=31&t[1]
i.pid<<=8
i.pid|=t[2];(48&t[3])>>>4>1&&(n+=t[n]+1)
if(0===i.pid){i.type="pat"
e(t.subarray(n),i)
this.trigger("data",i)}else if(i.pid===this.pmtPid){i.type="pmt"
e(t.subarray(n),i)
this.trigger("data",i)
for(;this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift())}else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,n,i]):this.processPes_(t,n,i)}
this.processPes_=function(e,t,i){i.pid===this.programMapTable.video?i.streamType=Me.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Me.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid]
i.type="pes"
i.data=e.subarray(t)
this.trigger("data",i)}}).prototype=new B
Ge.STREAM_TYPES={h264:27,adts:15};(Ke=function(){var e,t=this,i={data:[],size:0},n={data:[],size:0},r={data:[],size:0},a=function(e,i,n){var r,a,s=new Uint8Array(e.size),o={type:i},l=0,u=0
if(e.data.length&&!(e.size<9)){o.trackId=e.data[0].pid
for(l=0;l<e.data.length;l++){a=e.data[l]
s.set(a.data,u)
u+=a.data.byteLength}((function(e,t){var i
t.packetLength=6+(e[4]<<8|e[5])
t.dataAlignmentIndicator=0!=(4&e[6])
if(192&(i=e[7])){t.pts=(14&e[9])<<27|(255&e[10])<<20|(254&e[11])<<12|(255&e[12])<<5|(254&e[13])>>>3
t.pts*=4
t.pts+=(6&e[13])>>>1
t.dts=t.pts
if(64&i){t.dts=(14&e[14])<<27|(255&e[15])<<20|(254&e[16])<<12|(255&e[17])<<5|(254&e[18])>>>3
t.dts*=4
t.dts+=(6&e[18])>>>1}}t.data=e.subarray(9+e[8])}))(s,o)
r="video"===i||o.packetLength<=e.size
if(n||r){e.size=0
e.data.length=0}r&&t.trigger("data",o)}}
Ke.prototype.init.call(this)
this.push=function(s){({pat:function(){},pes:function(){var e,t
switch(s.streamType){case Me.H264_STREAM_TYPE:e=i
t="video"
break
case Me.ADTS_STREAM_TYPE:e=n
t="audio"
break
case Me.METADATA_STREAM_TYPE:e=r
t="timed-metadata"
break
default:return}s.payloadUnitStartIndicator&&a(e,t,!0)
e.data.push(s)
e.size+=s.data.byteLength},pmt:function(){var i={type:"metadata",tracks:[]}
null!==(e=s.programMapTable).video&&i.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"})
null!==e.audio&&i.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"})
t.trigger("data",i)}})[s.type]()}
this.reset=function(){i.size=0
i.data.length=0
n.size=0
n.data.length=0
this.trigger("reset")}
this.flushStreams_=function(){a(i,"video")
a(n,"audio")
a(r,"timed-metadata")}
this.flush=function(){this.flushStreams_()
this.trigger("done")}}).prototype=new B
var Qe={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ze,TransportParseStream:Ge,ElementaryStream:Ke,TimestampRolloverStream:Ye,CaptionStream:Ne.CaptionStream,Cea608Stream:Ne.Cea608Stream,MetadataStream:Xe}
for(var $e in Me)Me.hasOwnProperty($e)&&(Qe[$e]=Me[$e])
var Je,Ze=Qe,et=ue,tt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(Je=function(e){var t,i=0
Je.prototype.init.call(this)
this.push=function(n){var r,a,s,o,l,u,c=0
e||(i=0)
if("audio"===n.type){if(t){o=t;(t=new Uint8Array(o.byteLength+n.data.byteLength)).set(o)
t.set(n.data,o.byteLength)}else t=n.data
for(;c+5<t.length;)if(255===t[c]&&240==(246&t[c+1])){a=2*(1&~t[c+1])
r=(3&t[c+3])<<11|t[c+4]<<3|(224&t[c+5])>>5
u=(l=1024*(1+(3&t[c+6])))*et/tt[(60&t[c+2])>>>2]
s=c+r
if(t.byteLength<s)return
this.trigger("data",{pts:n.pts+i*u,dts:n.dts+i*u,sampleCount:l,audioobjecttype:1+(t[c+2]>>>6&3),channelcount:(1&t[c+2])<<2|(192&t[c+3])>>>6,samplerate:tt[(60&t[c+2])>>>2],samplingfrequencyindex:(60&t[c+2])>>>2,samplesize:16,data:t.subarray(c+7+a,s)})
i++
if(t.byteLength===s){t=void 0
return}t=t.subarray(s)}else c++}}
this.flush=function(){i=0
this.trigger("done")}
this.reset=function(){t=void 0
this.trigger("reset")}
this.endTimeline=function(){t=void 0
this.trigger("endedtimeline")}}).prototype=new B
var it,nt,rt,at=Je,st=function(e){var t=e.byteLength,i=0,n=0
this.length=function(){return 8*t}
this.bitsAvailable=function(){return 8*t+n}
this.loadWord=function(){var r=e.byteLength-t,a=new Uint8Array(4),s=Math.min(4,t)
if(0===s)throw new Error("no bytes available")
a.set(e.subarray(r,r+s))
i=new DataView(a.buffer).getUint32(0)
n=8*s
t-=s}
this.skipBits=function(e){var r
if(n>e){i<<=e
n-=e}else{e-=n
e-=8*(r=Math.floor(e/8))
t-=r
this.loadWord()
i<<=e
n-=e}}
this.readBits=function(e){var r=Math.min(n,e),a=i>>>32-r;(n-=r)>0?i<<=r:t>0&&this.loadWord()
return(r=e-r)>0?a<<r|this.readBits(r):a}
this.skipLeadingZeros=function(){var e
for(e=0;e<n;++e)if(0!=(i&2147483648>>>e)){i<<=e
n-=e
return e}this.loadWord()
return e+this.skipLeadingZeros()}
this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())}
this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())}
this.readUnsignedExpGolomb=function(){var e=this.skipLeadingZeros()
return this.readBits(e+1)-1}
this.readExpGolomb=function(){var e=this.readUnsignedExpGolomb()
return 1&e?1+e>>>1:-1*(e>>>1)}
this.readBoolean=function(){return 1===this.readBits(1)}
this.readUnsignedByte=function(){return this.readBits(8)}
this.loadWord()};(nt=function(){var e,t,i=0
nt.prototype.init.call(this)
this.push=function(n){var r
if(t){(r=new Uint8Array(t.byteLength+n.data.byteLength)).set(t)
r.set(n.data,t.byteLength)
t=r}else t=n.data
for(var a=t.byteLength;i<a-3;i++)if(1===t[i+2]){e=i+5
break}for(;e<a;)switch(t[e]){case 0:if(0!==t[e-1]){e+=2
break}if(0!==t[e-2]){e++
break}i+3!==e-2&&this.trigger("data",t.subarray(i+3,e-2))
do{e++}while(1!==t[e]&&e<a)
i=e-2
e+=3
break
case 1:if(0!==t[e-1]||0!==t[e-2]){e+=3
break}this.trigger("data",t.subarray(i+3,e-2))
i=e-2
e+=3
break
default:e+=3}t=t.subarray(i)
e-=i
i=0}
this.reset=function(){t=null
i=0
this.trigger("reset")}
this.flush=function(){t&&t.byteLength>3&&this.trigger("data",t.subarray(i+3))
t=null
i=0
this.trigger("done")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline")}}).prototype=new B
rt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0};(it=function(){var e,t,i,n,r,a,s,o=new nt
it.prototype.init.call(this)
e=this
this.push=function(e){if("video"===e.type){t=e.trackId
i=e.pts
n=e.dts
o.push(e)}}
o.on("data",(function(s){var o={trackId:t,pts:i,dts:n,data:s}
switch(31&s[0]){case 5:o.nalUnitType="slice_layer_without_partitioning_rbsp_idr"
break
case 6:o.nalUnitType="sei_rbsp"
o.escapedRBSP=r(s.subarray(1))
break
case 7:o.nalUnitType="seq_parameter_set_rbsp"
o.escapedRBSP=r(s.subarray(1))
o.config=a(o.escapedRBSP)
break
case 8:o.nalUnitType="pic_parameter_set_rbsp"
break
case 9:o.nalUnitType="access_unit_delimiter_rbsp"}e.trigger("data",o)}))
o.on("done",(function(){e.trigger("done")}))
o.on("partialdone",(function(){e.trigger("partialdone")}))
o.on("reset",(function(){e.trigger("reset")}))
o.on("endedtimeline",(function(){e.trigger("endedtimeline")}))
this.flush=function(){o.flush()}
this.partialFlush=function(){o.partialFlush()}
this.reset=function(){o.reset()}
this.endTimeline=function(){o.endTimeline()}
s=function(e,t){var i,n=8,r=8
for(i=0;i<e;i++){0!==r&&(r=(n+t.readExpGolomb()+256)%256)
n=0===r?n:r}}
r=function(e){for(var t,i,n=e.byteLength,r=[],a=1;a<n-2;)if(0===e[a]&&0===e[a+1]&&3===e[a+2]){r.push(a+2)
a+=2}else a++
if(0===r.length)return e
t=n-r.length
i=new Uint8Array(t)
var s=0
for(a=0;a<t;s++,a++){if(s===r[0]){s++
r.shift()}i[a]=e[s]}return i}
a=function(e){var t,i,n,r,a,o,l,u,c,d,h,p,f,m=0,g=0,v=0,y=0,_=1
i=(t=new st(e)).readUnsignedByte()
r=t.readUnsignedByte()
n=t.readUnsignedByte()
t.skipUnsignedExpGolomb()
if(rt[i]){3===(a=t.readUnsignedExpGolomb())&&t.skipBits(1)
t.skipUnsignedExpGolomb()
t.skipUnsignedExpGolomb()
t.skipBits(1)
if(t.readBoolean()){h=3!==a?8:12
for(f=0;f<h;f++)t.readBoolean()&&s(f<6?16:64,t)}}t.skipUnsignedExpGolomb()
if(0===(o=t.readUnsignedExpGolomb()))t.readUnsignedExpGolomb()
else if(1===o){t.skipBits(1)
t.skipExpGolomb()
t.skipExpGolomb()
l=t.readUnsignedExpGolomb()
for(f=0;f<l;f++)t.skipExpGolomb()}t.skipUnsignedExpGolomb()
t.skipBits(1)
u=t.readUnsignedExpGolomb()
c=t.readUnsignedExpGolomb()
0===(d=t.readBits(1))&&t.skipBits(1)
t.skipBits(1)
if(t.readBoolean()){m=t.readUnsignedExpGolomb()
g=t.readUnsignedExpGolomb()
v=t.readUnsignedExpGolomb()
y=t.readUnsignedExpGolomb()}if(t.readBoolean()&&t.readBoolean()){switch(t.readUnsignedByte()){case 1:p=[1,1]
break
case 2:p=[12,11]
break
case 3:p=[10,11]
break
case 4:p=[16,11]
break
case 5:p=[40,33]
break
case 6:p=[24,11]
break
case 7:p=[20,11]
break
case 8:p=[32,11]
break
case 9:p=[80,33]
break
case 10:p=[18,11]
break
case 11:p=[15,11]
break
case 12:p=[64,33]
break
case 13:p=[160,99]
break
case 14:p=[4,3]
break
case 15:p=[3,2]
break
case 16:p=[2,1]
break
case 255:p=[t.readUnsignedByte()<<8|t.readUnsignedByte(),t.readUnsignedByte()<<8|t.readUnsignedByte()]}p&&(_=p[0]/p[1])}return{profileIdc:i,levelIdc:n,profileCompatibility:r,width:Math.ceil((16*(u+1)-2*m-2*g)*_),height:(2-d)*(c+1)*16-2*v-2*y,sarRatio:p}}}).prototype=new B
var ot,lt={H264Stream:it,NalByteStream:nt},ut=function(e,t){var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9]
i=i>=0?i:0
return(16&e[t+5])>>4?i+20:i+10},ct=function(e){var t=(function e(t,i){return t.length-i<10||t[i]!=="I".charCodeAt(0)||t[i+1]!=="D".charCodeAt(0)||t[i+2]!=="3".charCodeAt(0)?i:e(t,i+=ut(t,i))})(e,0)
return e.length>=t+2&&255==(255&e[t])&&240==(240&e[t+1])&&16==(22&e[t+1])},dt=ut,ht=function(e,t){var i=(224&e[t+5])>>5,n=e[t+4]<<3
return 6144&e[t+3]|n|i};(ot=function(){var e=new Uint8Array,t=0
ot.prototype.init.call(this)
this.setTimestamp=function(e){t=e}
this.push=function(i){var n,r,a,s,o=0,l=0
if(e.length){s=e.length;(e=new Uint8Array(i.byteLength+s)).set(e.subarray(0,s))
e.set(i,s)}else e=i
for(;e.length-l>=3;)if(e[l]!=="I".charCodeAt(0)||e[l+1]!=="D".charCodeAt(0)||e[l+2]!=="3".charCodeAt(0))if(255!=(255&e[l])||240!=(240&e[l+1]))l++
else{if(e.length-l<7)break
if(l+(o=ht(e,l))>e.length)break
a={type:"audio",data:e.subarray(l,l+o),pts:t,dts:t}
this.trigger("data",a)
l+=o}else{if(e.length-l<10)break
if(l+(o=dt(e,l))>e.length)break
r={type:"timed-metadata",data:e.subarray(l,l+o)}
this.trigger("data",r)
l+=o}n=e.length-l
e=n>0?e.subarray(l):new Uint8Array}
this.reset=function(){e=new Uint8Array
this.trigger("reset")}
this.endTimeline=function(){e=new Uint8Array
this.trigger("endedtimeline")}}).prototype=new B
var pt,ft,mt,gt,vt=ot,yt=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],_t=["width","height","profileIdc","levelIdc","profileCompatibility","sarRatio"],bt=lt.H264Stream,Tt=ct,St=ue,kt=function(e,t){var i
if(e.length!==t.length)return!1
for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1
return!0},Ct=function(e,t,i,n,r,a){return{start:{dts:e,pts:e+(i-t)},end:{dts:e+(n-t),pts:e+(r-i)},prependedContentDuration:a,baseMediaDecodeTime:e}};(ft=function(e,t){var i=[],n=0,r=0,a=0,s=1/0
t=t||{}
ft.prototype.init.call(this)
this.push=function(t){ke(e,t)
e&&yt.forEach((function(i){e[i]=t[i]}))
i.push(t)}
this.setEarliestDts=function(e){r=e}
this.setVideoBaseMediaDecodeTime=function(e){s=e}
this.setAudioAppendStart=function(e){a=e}
this.flush=function(){var o,l,u,c,d
if(0!==i.length){o=ve(i,e,r)
e.baseMediaDecodeTime=Se(e,t.keepOriginalTimestamps)
ge(e,o,a,s)
e.samples=ye(o)
u=X(_e(o))
i=[]
l=Y(n,[e])
c=new Uint8Array(l.byteLength+u.byteLength)
n++
c.set(l)
c.set(u,l.byteLength)
Te(e)
d=Math.ceil(1024*St/e.samplerate)
o.length&&this.trigger("timingInfo",{start:o[0].pts,end:o[0].pts+o.length*d})
this.trigger("data",{track:e,boxes:c})
this.trigger("done","AudioSegmentStream")}else this.trigger("done","AudioSegmentStream")}
this.reset=function(){Te(e)
i=[]
this.trigger("reset")}}).prototype=new B;(pt=function(e,t){var i,n,r=0,a=[],s=[]
t=t||{}
pt.prototype.init.call(this)
delete e.minPTS
this.gopCache_=[]
this.push=function(t){ke(e,t)
if("seq_parameter_set_rbsp"===t.nalUnitType&&!i){i=t.config
e.sps=[t.data]
_t.forEach((function(t){e[t]=i[t]}),this)}if("pic_parameter_set_rbsp"===t.nalUnitType&&!n){n=t.data
e.pps=[t.data]}a.push(t)}
this.flush=function(){for(var i,n,o,l,u,c,d,h,p=0;a.length&&"access_unit_delimiter_rbsp"!==a[0].nalUnitType;)a.shift()
if(0!==a.length){i=J(a)
if(!(o=Z(i))[0][0].keyFrame)if(n=this.getGopForFusion_(a[0],e)){p=n.duration
o.unshift(n)
o.byteLength+=n.byteLength
o.nalCount+=n.nalCount
o.pts=n.pts
o.dts=n.dts
o.duration+=n.duration}else o=ee(o)
if(s.length){var f
if(!(f=t.alignGopsAtEnd?this.alignGopsAtEnd_(o):this.alignGopsAtStart_(o))){this.gopCache_.unshift({gop:o.pop(),pps:e.pps,sps:e.sps})
this.gopCache_.length=Math.min(6,this.gopCache_.length)
a=[]
this.resetStream_()
this.trigger("done","VideoSegmentStream")
return}Te(e)
o=f}ke(e,o)
e.samples=te(o)
u=X(ie(o))
e.baseMediaDecodeTime=Se(e,t.keepOriginalTimestamps)
this.trigger("processedGopsInfo",o.map((function(e){return{pts:e.pts,dts:e.dts,byteLength:e.byteLength}})))
d=o[0]
h=o[o.length-1]
this.trigger("segmentTimingInfo",Ct(e.baseMediaDecodeTime,d.dts,d.pts,h.dts+h.duration,h.pts+h.duration,p))
this.trigger("timingInfo",{start:o[0].pts,end:o[o.length-1].pts+o[o.length-1].duration})
this.gopCache_.unshift({gop:o.pop(),pps:e.pps,sps:e.sps})
this.gopCache_.length=Math.min(6,this.gopCache_.length)
a=[]
this.trigger("baseMediaDecodeTime",e.baseMediaDecodeTime)
this.trigger("timelineStartInfo",e.timelineStartInfo)
l=Y(r,[e])
c=new Uint8Array(l.byteLength+u.byteLength)
r++
c.set(l)
c.set(u,l.byteLength)
this.trigger("data",{track:e,boxes:c})
this.resetStream_()
this.trigger("done","VideoSegmentStream")}else{this.resetStream_()
this.trigger("done","VideoSegmentStream")}}
this.reset=function(){this.resetStream_()
a=[]
this.gopCache_.length=0
s.length=0
this.trigger("reset")}
this.resetStream_=function(){Te(e)
i=void 0
n=void 0}
this.getGopForFusion_=function(t){var i,n,r,a,s,o=1/0
for(s=0;s<this.gopCache_.length;s++){r=(a=this.gopCache_[s]).gop
if(e.pps&&kt(e.pps[0],a.pps[0])&&e.sps&&kt(e.sps[0],a.sps[0])&&(!(r.dts<e.timelineStartInfo.dts)&&(i=t.dts-r.dts-r.duration)>=-1e4&&i<=45e3&&(!n||o>i))){n=a
o=i}}return n?n.gop:null}
this.alignGopsAtStart_=function(e){var t,i,n,r,a,o,l,u
a=e.byteLength
o=e.nalCount
l=e.duration
t=i=0
for(;t<s.length&&i<e.length;){n=s[t]
r=e[i]
if(n.pts===r.pts)break
if(r.pts>n.pts)t++
else{i++
a-=r.byteLength
o-=r.nalCount
l-=r.duration}}if(0===i)return e
if(i===e.length)return null;(u=e.slice(i)).byteLength=a
u.duration=l
u.nalCount=o
u.pts=u[0].pts
u.dts=u[0].dts
return u}
this.alignGopsAtEnd_=function(e){var t,i,n,r,a,o,l
t=s.length-1
i=e.length-1
a=null
o=!1
for(;t>=0&&i>=0;){n=s[t]
r=e[i]
if(n.pts===r.pts){o=!0
break}if(n.pts>r.pts)t--
else{t===s.length-1&&(a=i)
i--}}if(!o&&null===a)return null
if(0===(l=o?i:a))return e
var u=e.slice(l),c=u.reduce((function(e,t){e.byteLength+=t.byteLength
e.duration+=t.duration
e.nalCount+=t.nalCount
return e}),{byteLength:0,duration:0,nalCount:0})
u.byteLength=c.byteLength
u.duration=c.duration
u.nalCount=c.nalCount
u.pts=u[0].pts
u.dts=u[0].dts
return u}
this.alignGopsWith=function(e){s=e}}).prototype=new B;(gt=function(e,t){this.numberOfTracks=0
this.metadataStream=t
void 0!==(e=e||{}).remux?this.remuxTracks=!!e.remux:this.remuxTracks=!0
"boolean"==typeof e.keepOriginalTimestamps?this.keepOriginalTimestamps=e.keepOriginalTimestamps:this.keepOriginalTimestamps=!1
this.pendingTracks=[]
this.videoTrack=null
this.pendingBoxes=[]
this.pendingCaptions=[]
this.pendingMetadata=[]
this.pendingBytes=0
this.emittedTracks=0
gt.prototype.init.call(this)
this.push=function(e){if(e.text)return this.pendingCaptions.push(e)
if(e.frames)return this.pendingMetadata.push(e)
this.pendingTracks.push(e.track)
this.pendingBytes+=e.boxes.byteLength
if("video"===e.track.type){this.videoTrack=e.track
this.pendingBoxes.push(e.boxes)}if("audio"===e.track.type){this.audioTrack=e.track
this.pendingBoxes.unshift(e.boxes)}}}).prototype=new B
gt.prototype.flush=function(e){var t,i,n,r,a=0,s={captions:[],captionStreams:{},metadata:[],info:{}},o=0
if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==e&&"AudioSegmentStream"!==e)return
if(this.remuxTracks)return
if(0===this.pendingTracks.length){this.emittedTracks++
if(this.emittedTracks>=this.numberOfTracks){this.trigger("done")
this.emittedTracks=0}return}}if(this.videoTrack){o=this.videoTrack.timelineStartInfo.pts
_t.forEach((function(e){s.info[e]=this.videoTrack[e]}),this)}else if(this.audioTrack){o=this.audioTrack.timelineStartInfo.pts
yt.forEach((function(e){s.info[e]=this.audioTrack[e]}),this)}if(this.videoTrack||this.audioTrack){1===this.pendingTracks.length?s.type=this.pendingTracks[0].type:s.type="combined"
this.emittedTracks+=this.pendingTracks.length
n=Q(this.pendingTracks)
s.initSegment=new Uint8Array(n.byteLength)
s.initSegment.set(n)
s.data=new Uint8Array(this.pendingBytes)
for(r=0;r<this.pendingBoxes.length;r++){s.data.set(this.pendingBoxes[r],a)
a+=this.pendingBoxes[r].byteLength}for(r=0;r<this.pendingCaptions.length;r++){(t=this.pendingCaptions[r]).startTime=pe(t.startPts,o,this.keepOriginalTimestamps)
t.endTime=pe(t.endPts,o,this.keepOriginalTimestamps)
s.captionStreams[t.stream]=!0
s.captions.push(t)}for(r=0;r<this.pendingMetadata.length;r++){(i=this.pendingMetadata[r]).cueTime=pe(i.pts,o,this.keepOriginalTimestamps)
s.metadata.push(i)}s.metadata.dispatchType=this.metadataStream.dispatchType
this.pendingTracks.length=0
this.videoTrack=null
this.pendingBoxes.length=0
this.pendingCaptions.length=0
this.pendingBytes=0
this.pendingMetadata.length=0
this.trigger("data",s)
for(r=0;r<s.captions.length;r++){t=s.captions[r]
this.trigger("caption",t)}for(r=0;r<s.metadata.length;r++){i=s.metadata[r]
this.trigger("id3Frame",i)}}if(this.emittedTracks>=this.numberOfTracks){this.trigger("done")
this.emittedTracks=0}}
gt.prototype.setRemux=function(e){this.remuxTracks=e};(mt=function(e){var t,i,n=this,r=!0
mt.prototype.init.call(this)
e=e||{}
this.baseMediaDecodeTime=e.baseMediaDecodeTime||0
this.transmuxPipeline_={}
this.setupAacPipeline=function(){var r={}
this.transmuxPipeline_=r
r.type="aac"
r.metadataStream=new Ze.MetadataStream
r.aacStream=new vt
r.audioTimestampRolloverStream=new Ze.TimestampRolloverStream("audio")
r.timedMetadataTimestampRolloverStream=new Ze.TimestampRolloverStream("timed-metadata")
r.adtsStream=new at
r.coalesceStream=new gt(e,r.metadataStream)
r.headOfPipeline=r.aacStream
r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream)
r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream)
r.metadataStream.on("timestamp",(function(e){r.aacStream.setTimestamp(e.timeStamp)}))
r.aacStream.on("data",(function(a){if(!("timed-metadata"!==a.type&&"audio"!==a.type||r.audioSegmentStream)){i=i||{timelineStartInfo:{baseMediaDecodeTime:n.baseMediaDecodeTime},codec:"adts",type:"audio"}
r.coalesceStream.numberOfTracks++
r.audioSegmentStream=new ft(i,e)
r.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo"))
r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)
n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!t})}}))
r.coalesceStream.on("data",this.trigger.bind(this,"data"))
r.coalesceStream.on("done",this.trigger.bind(this,"done"))}
this.setupTsPipeline=function(){var r={}
this.transmuxPipeline_=r
r.type="ts"
r.metadataStream=new Ze.MetadataStream
r.packetStream=new Ze.TransportPacketStream
r.parseStream=new Ze.TransportParseStream
r.elementaryStream=new Ze.ElementaryStream
r.timestampRolloverStream=new Ze.TimestampRolloverStream
r.adtsStream=new at
r.h264Stream=new bt
r.captionStream=new Ze.CaptionStream
r.coalesceStream=new gt(e,r.metadataStream)
r.headOfPipeline=r.packetStream
r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream)
r.timestampRolloverStream.pipe(r.h264Stream)
r.timestampRolloverStream.pipe(r.adtsStream)
r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream)
r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream)
r.elementaryStream.on("data",(function(a){var s
if("metadata"===a.type){s=a.tracks.length
for(;s--;)t||"video"!==a.tracks[s].type?i||"audio"!==a.tracks[s].type||((i=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime):(t=a.tracks[s]).timelineStartInfo.baseMediaDecodeTime=n.baseMediaDecodeTime
if(t&&!r.videoSegmentStream){r.coalesceStream.numberOfTracks++
r.videoSegmentStream=new pt(t,e)
r.videoSegmentStream.on("timelineStartInfo",(function(t){if(i&&!e.keepOriginalTimestamps){i.timelineStartInfo=t
r.audioSegmentStream.setEarliestDts(t.dts-n.baseMediaDecodeTime)}}))
r.videoSegmentStream.on("processedGopsInfo",n.trigger.bind(n,"gopInfo"))
r.videoSegmentStream.on("segmentTimingInfo",n.trigger.bind(n,"videoSegmentTimingInfo"))
r.videoSegmentStream.on("baseMediaDecodeTime",(function(e){i&&r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)}))
r.videoSegmentStream.on("timingInfo",n.trigger.bind(n,"videoTimingInfo"))
r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)}if(i&&!r.audioSegmentStream){r.coalesceStream.numberOfTracks++
r.audioSegmentStream=new ft(i,e)
r.audioSegmentStream.on("timingInfo",n.trigger.bind(n,"audioTimingInfo"))
r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)}n.trigger("trackinfo",{hasAudio:!!i,hasVideo:!!t})}}))
r.coalesceStream.on("data",this.trigger.bind(this,"data"))
r.coalesceStream.on("id3Frame",(function(e){e.dispatchType=r.metadataStream.dispatchType
n.trigger("id3Frame",e)}))
r.coalesceStream.on("caption",this.trigger.bind(this,"caption"))
r.coalesceStream.on("done",this.trigger.bind(this,"done"))}
this.setBaseMediaDecodeTime=function(n){var r=this.transmuxPipeline_
e.keepOriginalTimestamps||(this.baseMediaDecodeTime=n)
if(i){i.timelineStartInfo.dts=void 0
i.timelineStartInfo.pts=void 0
Te(i)
r.audioTimestampRolloverStream&&r.audioTimestampRolloverStream.discontinuity()}if(t){r.videoSegmentStream&&(r.videoSegmentStream.gopCache_=[])
t.timelineStartInfo.dts=void 0
t.timelineStartInfo.pts=void 0
Te(t)
r.captionStream.reset()}r.timestampRolloverStream&&r.timestampRolloverStream.discontinuity()}
this.setAudioAppendStart=function(e){i&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)}
this.setRemux=function(t){var i=this.transmuxPipeline_
e.remux=t
i&&i.coalesceStream&&i.coalesceStream.setRemux(t)}
this.alignGopsWith=function(e){t&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)}
this.push=function(e){if(r){var t=Tt(e)
t&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():t||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline()
r=!1}this.transmuxPipeline_.headOfPipeline.push(e)}
this.flush=function(){r=!0
this.transmuxPipeline_.headOfPipeline.flush()}
this.endTimeline=function(){this.transmuxPipeline_.headOfPipeline.endTimeline()}
this.reset=function(){this.transmuxPipeline_.headOfPipeline&&this.transmuxPipeline_.headOfPipeline.reset()}
this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new B
var Et={Transmuxer:mt,VideoSegmentStream:pt,AudioSegmentStream:ft,AUDIO_PROPERTIES:yt,VIDEO_PROPERTIES:_t,generateVideoSegmentTimingInfo:Ct}.Transmuxer,wt={Adts:at,h264:lt},It=ue,Pt=function e(t,i){var n=[],r=0,a=0,s=0,o=1/0,l=null,u=null
i=i||{}
e.prototype.init.call(this)
this.push=function(e){ke(t,e)
t&&yt.forEach((function(i){t[i]=e[i]}))
n.push(e)}
this.setEarliestDts=function(e){a=e}
this.setVideoBaseMediaDecodeTime=function(e){o=e}
this.setAudioAppendStart=function(e){s=e}
this.processFrames_=function(){var e,c,d,h,p
if(0!==n.length&&0!==(e=ve(n,t,a)).length){t.baseMediaDecodeTime=Se(t,i.keepOriginalTimestamps)
ge(t,e,s,o)
t.samples=ye(e)
d=X(_e(e))
n=[]
c=Y(r,[t])
r++
t.initSegment=Q([t]);(h=new Uint8Array(c.byteLength+d.byteLength)).set(c)
h.set(d,c.byteLength)
Te(t)
null===l&&(u=l=e[0].pts)
u+=e.length*(1024*It/t.samplerate)
p={start:l}
this.trigger("timingInfo",p)
this.trigger("data",{track:t,boxes:h})}}
this.flush=function(){this.processFrames_()
this.trigger("timingInfo",{start:l,end:u})
this.resetTiming_()
this.trigger("done","AudioSegmentStream")}
this.partialFlush=function(){this.processFrames_()
this.trigger("partialdone","AudioSegmentStream")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline","AudioSegmentStream")}
this.resetTiming_=function(){Te(t)
l=null
u=null}
this.reset=function(){this.resetTiming_()
n=[]
this.trigger("reset")}}
Pt.prototype=new B
var At=Pt,xt=function e(t,i){var n,r,a,s=0,o=[],l=[],u=null,c=null,d=!0
i=i||{}
e.prototype.init.call(this)
this.push=function(e){ke(t,e)
void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts)
if("seq_parameter_set_rbsp"===e.nalUnitType&&!n){n=e.config
t.sps=[e.data]
_t.forEach((function(e){t[e]=n[e]}),this)}if("pic_parameter_set_rbsp"===e.nalUnitType&&!r){r=e.data
t.pps=[e.data]}o.push(e)}
this.processNals_=function(e){var n
o=l.concat(o)
for(;o.length&&"access_unit_delimiter_rbsp"!==o[0].nalUnitType;)o.shift()
if(0!==o.length){var r=J(o)
if(r.length){l=r[r.length-1]
if(e){r.pop()
r.duration-=l.duration
r.nalCount-=l.length
r.byteLength-=l.byteLength}if(r.length){this.trigger("timelineStartInfo",t.timelineStartInfo)
if(d){if(!(a=Z(r))[0][0].keyFrame){if(!(a=ee(a))[0][0].keyFrame){o=[].concat.apply([],r).concat(l)
l=[]
return}(r=[].concat.apply([],a)).duration=a.duration}d=!1}if(null===u){u=r[0].pts
c=u}c+=r.duration
this.trigger("timingInfo",{start:u,end:c})
for(n=0;n<r.length;n++){var h=r[n]
t.samples=ne(h)
var p=X(re(h))
Te(t)
ke(t,h)
t.baseMediaDecodeTime=Se(t,i.keepOriginalTimestamps)
var f=Y(s,[t])
s++
t.initSegment=Q([t])
var m=new Uint8Array(f.byteLength+p.byteLength)
m.set(f)
m.set(p,f.byteLength)
this.trigger("data",{track:t,boxes:m,sequence:s,videoFrameDts:h.dts,videoFramePts:h.pts})}o=[]}else o=[]}}}
this.resetTimingAndConfig_=function(){n=void 0
r=void 0
u=null
c=null}
this.partialFlush=function(){this.processNals_(!0)
this.trigger("partialdone","VideoSegmentStream")}
this.flush=function(){this.processNals_(!1)
this.resetTimingAndConfig_()
this.trigger("done","VideoSegmentStream")}
this.endTimeline=function(){this.flush()
this.trigger("endedtimeline","VideoSegmentStream")}
this.reset=function(){this.resetTimingAndConfig_()
l=[]
o=[]
d=!0
this.trigger("reset")}}
xt.prototype=new B
var Ot=xt,Lt=ct,Dt=function(e){e.prototype=new B
e.prototype.init.call(e)
return e},Rt=function(e,t){e.on("data",t.trigger.bind(t,"data"))
e.on("done",t.trigger.bind(t,"done"))
e.on("partialdone",t.trigger.bind(t,"partialdone"))
e.on("endedtimeline",t.trigger.bind(t,"endedtimeline"))
e.on("audioTimingInfo",t.trigger.bind(t,"audioTimingInfo"))
e.on("videoTimingInfo",t.trigger.bind(t,"videoTimingInfo"))
e.on("trackinfo",t.trigger.bind(t,"trackinfo"))
e.on("id3Frame",(function(i){i.dispatchType=e.metadataStream.dispatchType
i.cueTime=ce(i.pts)
t.trigger("id3Frame",i)}))
e.on("caption",(function(e){t.trigger("caption",e)}))},Nt=function e(t){var i=null,n=!0
t=t||{}
e.prototype.init.call(this)
t.baseMediaDecodeTime=t.baseMediaDecodeTime||0
this.push=function(e){if(n){var r=Lt(e)
if(!r||i&&"aac"===i.type){if(!(r||i&&"ts"===i.type)){i=(function(e){var t={type:"ts",tracks:{audio:null,video:null},packet:new Ze.TransportPacketStream,parse:new Ze.TransportParseStream,elementary:new Ze.ElementaryStream,timestampRollover:new Ze.TimestampRolloverStream,adts:new wt.Adts,h264:new wt.h264.H264Stream,captionStream:new Ze.CaptionStream,metadataStream:new Ze.MetadataStream}
t.headOfPipeline=t.packet
t.packet.pipe(t.parse).pipe(t.elementary).pipe(t.timestampRollover)
t.timestampRollover.pipe(t.h264)
t.h264.pipe(t.captionStream)
t.timestampRollover.pipe(t.metadataStream)
t.timestampRollover.pipe(t.adts)
t.elementary.on("data",(function(i){if("metadata"===i.type){for(var n=0;n<i.tracks.length;n++)if(!t.tracks[i.tracks[n].type]){t.tracks[i.tracks[n].type]=i.tracks[n]
t.tracks[i.tracks[n].type].timelineStartInfo.baseMediaDecodeTime=e.baseMediaDecodeTime}if(t.tracks.video&&!t.videoSegmentStream){t.videoSegmentStream=new Ot(t.tracks.video,e)
t.videoSegmentStream.on("timelineStartInfo",(function(i){t.tracks.audio&&!e.keepOriginalTimestamps&&t.audioSegmentStream.setEarliestDts(i.dts-e.baseMediaDecodeTime)}))
t.videoSegmentStream.on("timingInfo",t.trigger.bind(t,"videoTimingInfo"))
t.videoSegmentStream.on("data",(function(e){t.trigger("data",{type:"video",data:e})}))
t.videoSegmentStream.on("done",t.trigger.bind(t,"done"))
t.videoSegmentStream.on("partialdone",t.trigger.bind(t,"partialdone"))
t.videoSegmentStream.on("endedtimeline",t.trigger.bind(t,"endedtimeline"))
t.h264.pipe(t.videoSegmentStream)}if(t.tracks.audio&&!t.audioSegmentStream){t.audioSegmentStream=new At(t.tracks.audio,e)
t.audioSegmentStream.on("data",(function(e){t.trigger("data",{type:"audio",data:e})}))
t.audioSegmentStream.on("done",t.trigger.bind(t,"done"))
t.audioSegmentStream.on("partialdone",t.trigger.bind(t,"partialdone"))
t.audioSegmentStream.on("endedtimeline",t.trigger.bind(t,"endedtimeline"))
t.audioSegmentStream.on("timingInfo",t.trigger.bind(t,"audioTimingInfo"))
t.adts.pipe(t.audioSegmentStream)}t.trigger("trackinfo",{hasAudio:!!t.tracks.audio,hasVideo:!!t.tracks.video})}}))
t.captionStream.on("data",(function(i){var n
n=t.tracks.video&&t.tracks.video.timelineStartInfo.pts||0
i.startTime=pe(i.startPts,n,e.keepOriginalTimestamps)
i.endTime=pe(i.endPts,n,e.keepOriginalTimestamps)
t.trigger("caption",i)}));(t=Dt(t)).metadataStream.on("data",t.trigger.bind(t,"id3Frame"))
return t})(t)
Rt(i,this)}}else{i=(function(e){var t={type:"aac",tracks:{audio:null},metadataStream:new Ze.MetadataStream,aacStream:new vt,audioRollover:new Ze.TimestampRolloverStream("audio"),timedMetadataRollover:new Ze.TimestampRolloverStream("timed-metadata"),adtsStream:new at(!0)}
t.headOfPipeline=t.aacStream
t.aacStream.pipe(t.audioRollover).pipe(t.adtsStream)
t.aacStream.pipe(t.timedMetadataRollover).pipe(t.metadataStream)
t.metadataStream.on("timestamp",(function(e){t.aacStream.setTimestamp(e.timeStamp)}))
t.aacStream.on("data",(function(i){if(!("timed-metadata"!==i.type&&"audio"!==i.type||t.audioSegmentStream)){t.tracks.audio=t.tracks.audio||{timelineStartInfo:{baseMediaDecodeTime:e.baseMediaDecodeTime},codec:"adts",type:"audio"}
t.audioSegmentStream=new At(t.tracks.audio,e)
t.audioSegmentStream.on("data",(function(e){t.trigger("data",{type:"audio",data:e})}))
t.audioSegmentStream.on("partialdone",t.trigger.bind(t,"partialdone"))
t.audioSegmentStream.on("done",t.trigger.bind(t,"done"))
t.audioSegmentStream.on("endedtimeline",t.trigger.bind(t,"endedtimeline"))
t.audioSegmentStream.on("timingInfo",t.trigger.bind(t,"audioTimingInfo"))
t.adtsStream.pipe(t.audioSegmentStream)
t.trigger("trackinfo",{hasAudio:!!t.tracks.audio,hasVideo:!!t.tracks.video})}}));(t=Dt(t)).metadataStream.on("data",t.trigger.bind(t,"id3Frame"))
return t})(t)
Rt(i,this)}n=!1}i.headOfPipeline.push(e)}
this.flush=function(){if(i){n=!0
i.headOfPipeline.flush()}}
this.partialFlush=function(){i&&i.headOfPipeline.partialFlush()}
this.endTimeline=function(){i&&i.headOfPipeline.endTimeline()}
this.reset=function(){i&&i.headOfPipeline.reset()}
this.setBaseMediaDecodeTime=function(e){t.keepOriginalTimestamps||(t.baseMediaDecodeTime=e)
if(i){if(i.tracks.audio){i.tracks.audio.timelineStartInfo.dts=void 0
i.tracks.audio.timelineStartInfo.pts=void 0
Te(i.tracks.audio)
i.audioRollover&&i.audioRollover.discontinuity()}if(i.tracks.video){i.videoSegmentStream&&(i.videoSegmentStream.gopCache_=[])
i.tracks.video.timelineStartInfo.dts=void 0
i.tracks.video.timelineStartInfo.pts=void 0
Te(i.tracks.video)}i.timestampRollover&&i.timestampRollover.discontinuity()}}
this.setRemux=function(e){t.remux=e
i&&i.coalesceStream&&i.coalesceStream.setRemux(e)}
this.setAudioAppendStart=function(e){i&&i.tracks.audio&&i.audioSegmentStream&&i.audioSegmentStream.setAudioAppendStart(e)}
this.alignGopsWith=function(e){}}
Nt.prototype=new B
var Mt=Nt,Ut=function(e){return e>>>0},Bt=function(e){var t=""
t+=String.fromCharCode(e[0])
t+=String.fromCharCode(e[1])
t+=String.fromCharCode(e[2])
return t+=String.fromCharCode(e[3])},jt=Ut,Ft=function e(t,i){var n,r,a,s,o,l=[]
if(!i.length)return null
for(n=0;n<t.byteLength;){r=jt(t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3])
a=Bt(t.subarray(n+4,n+8))
s=r>1?n+r:t.byteLength
a===i[0]&&(1===i.length?l.push(t.subarray(n+8,s)):(o=e(t.subarray(n+8,s),i.slice(1))).length&&(l=l.concat(o)))
n=s}return l},Vt=Ut,Ht=function(e){var t={version:e[0],flags:new Uint8Array(e.subarray(1,4)),baseMediaDecodeTime:Vt(e[4]<<24|e[5]<<16|e[6]<<8|e[7])}
if(1===t.version){t.baseMediaDecodeTime*=Math.pow(2,32)
t.baseMediaDecodeTime+=Vt(e[8]<<24|e[9]<<16|e[10]<<8|e[11])}return t},qt=function(e){return{isLeading:(12&e[0])>>>2,dependsOn:3&e[0],isDependedOn:(192&e[1])>>>6,hasRedundancy:(48&e[1])>>>4,paddingValue:(14&e[1])>>>1,isNonSyncSample:1&e[1],degradationPriority:e[2]<<8|e[3]}},Wt=function(e){var t,i={version:e[0],flags:new Uint8Array(e.subarray(1,4)),samples:[]},n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=1&i.flags[2],a=4&i.flags[2],s=1&i.flags[1],o=2&i.flags[1],l=4&i.flags[1],u=8&i.flags[1],c=n.getUint32(4),d=8
if(r){i.dataOffset=n.getInt32(d)
d+=4}if(a&&c){t={flags:qt(e.subarray(d,d+4))}
d+=4
if(s){t.duration=n.getUint32(d)
d+=4}if(o){t.size=n.getUint32(d)
d+=4}if(u){1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d)
d+=4}i.samples.push(t)
c--}for(;c--;){t={}
if(s){t.duration=n.getUint32(d)
d+=4}if(o){t.size=n.getUint32(d)
d+=4}if(l){t.flags=qt(e.subarray(d,d+4))
d+=4}if(u){1===i.version?t.compositionTimeOffset=n.getInt32(d):t.compositionTimeOffset=n.getUint32(d)
d+=4}i.samples.push(t)}return i},zt=function(e){var t,i=new DataView(e.buffer,e.byteOffset,e.byteLength),n={version:e[0],flags:new Uint8Array(e.subarray(1,4)),trackId:i.getUint32(4)},r=1&n.flags[2],a=2&n.flags[2],s=8&n.flags[2],o=16&n.flags[2],l=32&n.flags[2],u=65536&n.flags[0],c=131072&n.flags[0]
t=8
if(r){t+=4
n.baseDataOffset=i.getUint32(12)
t+=4}if(a){n.sampleDescriptionIndex=i.getUint32(t)
t+=4}if(s){n.defaultSampleDuration=i.getUint32(t)
t+=4}if(o){n.defaultSampleSize=i.getUint32(t)
t+=4}l&&(n.defaultSampleFlags=i.getUint32(t))
u&&(n.durationIsEmpty=!0)
!r&&c&&(n.baseDataOffsetIsMoof=!0)
return n},Gt=Ie,Kt=Ne.CaptionStream,Xt=function(e,t){for(var i=e,n=0;n<t.length;n++){var r=t[n]
if(i<r.size)return r
i-=r.size}return null},Yt=function(e,t){var i=Ft(e,["moof","traf"]),n=Ft(e,["mdat"]),r={},a=[]
n.forEach((function(e,t){var n=i[t]
a.push({mdat:e,traf:n})}))
a.forEach((function(e){var i,n=e.mdat,a=e.traf,s=Ft(a,["tfhd"]),o=zt(s[0]),l=o.trackId,u=Ft(a,["tfdt"]),c=u.length>0?Ht(u[0]).baseMediaDecodeTime:0,d=Ft(a,["trun"])
if(t===l&&d.length>0){i=(function(e,t,i){var n,r,a,s,o=new DataView(e.buffer,e.byteOffset,e.byteLength),l=[]
for(r=0;r+4<e.length;r+=a){a=o.getUint32(r)
r+=4
if(!(a<=0))switch(31&e[r]){case 6:var u=e.subarray(r+1,r+1+a),c=Xt(r,t)
n={nalUnitType:"sei_rbsp",size:a,data:u,escapedRBSP:Gt(u),trackId:i}
if(c){n.pts=c.pts
n.dts=c.dts
s=c}else{if(!s){console.log("We've encountered a nal unit without data. See mux.js#233.")
break}n.pts=s.pts
n.dts=s.dts}l.push(n)}}return l})(n,(function(e,t,i){var n=t,r=i.defaultSampleDuration||0,a=i.defaultSampleSize||0,s=i.trackId,o=[]
e.forEach((function(e){var t=Wt(e).samples
t.forEach((function(e){void 0===e.duration&&(e.duration=r)
void 0===e.size&&(e.size=a)
e.trackId=s
e.dts=n
void 0===e.compositionTimeOffset&&(e.compositionTimeOffset=0)
e.pts=n+e.compositionTimeOffset
n+=e.duration}))
o=o.concat(t)}))
return o})(d,c,o),l)
r[l]||(r[l]=[])
r[l]=r[l].concat(i)}}))
return r},Qt=function(){var e,t,i,n,r,a,s=!1
this.isInitialized=function(){return s}
this.init=function(t){e=new Kt
s=!0
a=!!t&&t.isPartial
e.on("data",(function(e){e.startTime=e.startPts/n
e.endTime=e.endPts/n
r.captions.push(e)
r.captionStreams[e.stream]=!0}))}
this.isNewInit=function(e,t){return!(e&&0===e.length||t&&"object"==typeof t&&0===Object.keys(t).length||i===e[0]&&n===t[i])}
this.parse=function(e,a,s){var o
if(!this.isInitialized())return null
if(!a||!s)return null
if(this.isNewInit(a,s)){i=a[0]
n=s[i]}else if(null===i||!n){t.push(e)
return null}for(;t.length>0;){var l=t.shift()
this.parse(l,a,s)}if(null===(o=(function(e,t,i){return null===t?null:{seiNals:Yt(e,t)[t],timescale:i}})(e,i,n))||!o.seiNals)return null
this.pushNals(o.seiNals)
this.flushStream()
return r}
this.pushNals=function(t){if(!this.isInitialized()||!t||0===t.length)return null
t.forEach((function(t){e.push(t)}))}
this.flushStream=function(){if(!this.isInitialized())return null
a?e.partialFlush():e.flush()}
this.clearParsedCaptions=function(){r.captions=[]
r.captionStreams={}}
this.resetCaptionStream=function(){if(!this.isInitialized())return null
e.reset()}
this.clearAllCaptions=function(){this.clearParsedCaptions()
this.resetCaptionStream()}
this.reset=function(){t=[]
i=null
n=null
r?this.clearParsedCaptions():r={captions:[],captionStreams:{}}
this.resetCaptionStream()}
this.reset()},$t=function(e){return"AudioSegmentStream"===e?"audio":"VideoSegmentStream"===e?"video":""},Jt=(function(){function e(e,t){this.options=t||{}
this.self=e
this.init()}var t=e.prototype
t.init=function(){this.transmuxer&&this.transmuxer.dispose()
this.transmuxer=this.options.handlePartialData?new Mt(this.options):new Et(this.options)
this.options.handlePartialData?(function(e,t){t.on("data",(function(t){var i={data:t.data.track.initSegment.buffer,byteOffset:t.data.track.initSegment.byteOffset,byteLength:t.data.track.initSegment.byteLength},n={boxes:{data:t.data.boxes.buffer,byteOffset:t.data.boxes.byteOffset,byteLength:t.data.boxes.byteLength},initSegment:i,type:t.type,sequence:t.data.sequence}
void 0!==t.data.videoFrameDts&&(n.videoFrameDtsTime=me(t.data.videoFrameDts))
void 0!==t.data.videoFramePts&&(n.videoFramePtsTime=me(t.data.videoFramePts))
e.postMessage({action:"data",segment:n},[n.boxes.data,n.initSegment.data])}))
t.on("id3Frame",(function(t){e.postMessage({action:"id3Frame",id3Frame:t})}))
t.on("caption",(function(t){e.postMessage({action:"caption",caption:t})}))
t.on("done",(function(t){e.postMessage({action:"done",type:$t(t)})}))
t.on("partialdone",(function(t){e.postMessage({action:"partialdone",type:$t(t)})}))
t.on("endedsegment",(function(t){e.postMessage({action:"endedSegment",type:$t(t)})}))
t.on("trackinfo",(function(t){e.postMessage({action:"trackinfo",trackInfo:t})}))
t.on("audioTimingInfo",(function(t){if(null!==t.start){var i={start:me(t.start)}
t.end&&(i.end=me(t.end))
e.postMessage({action:"audioTimingInfo",audioTimingInfo:i})}else e.postMessage({action:"audioTimingInfo",audioTimingInfo:t})}))
t.on("videoTimingInfo",(function(t){var i={start:me(t.start)}
t.end&&(i.end=me(t.end))
e.postMessage({action:"videoTimingInfo",videoTimingInfo:i})}))})(this.self,this.transmuxer):(function(e,t){t.on("data",(function(t){var i=t.initSegment
t.initSegment={data:i.buffer,byteOffset:i.byteOffset,byteLength:i.byteLength}
var n=t.data
t.data=n.buffer
e.postMessage({action:"data",segment:t,byteOffset:n.byteOffset,byteLength:n.byteLength},[t.data])}))
t.on("done",(function(t){e.postMessage({action:"done"})}))
t.on("gopInfo",(function(t){e.postMessage({action:"gopInfo",gopInfo:t})}))
t.on("videoSegmentTimingInfo",(function(t){var i={start:{decode:me(t.start.dts),presentation:me(t.start.pts)},end:{decode:me(t.end.dts),presentation:me(t.end.pts)},baseMediaDecodeTime:me(t.baseMediaDecodeTime)}
t.prependedContentDuration&&(i.prependedContentDuration=me(t.prependedContentDuration))
e.postMessage({action:"videoSegmentTimingInfo",videoSegmentTimingInfo:i})}))
t.on("id3Frame",(function(t){e.postMessage({action:"id3Frame",id3Frame:t})}))
t.on("caption",(function(t){e.postMessage({action:"caption",caption:t})}))
t.on("trackinfo",(function(t){e.postMessage({action:"trackinfo",trackInfo:t})}))
t.on("audioTimingInfo",(function(t){e.postMessage({action:"audioTimingInfo",audioTimingInfo:{start:me(t.start),end:me(t.end)}})}))
t.on("videoTimingInfo",(function(t){e.postMessage({action:"videoTimingInfo",videoTimingInfo:{start:me(t.start),end:me(t.end)}})}))})(this.self,this.transmuxer)}
t.pushMp4Captions=function(e){if(!this.captionParser){this.captionParser=new Qt
this.captionParser.init()}var t=new Uint8Array(e.data,e.byteOffset,e.byteLength),i=this.captionParser.parse(t,e.trackIds,e.timescales)
this.self.postMessage({action:"mp4Captions",captions:i&&i.captions||[],data:t.buffer},[t.buffer])}
t.clearAllMp4Captions=function(){this.captionParser&&this.captionParser.clearAllCaptions()}
t.clearParsedMp4Captions=function(){this.captionParser&&this.captionParser.clearParsedCaptions()}
t.push=function(e){var t=new Uint8Array(e.data,e.byteOffset,e.byteLength)
this.transmuxer.push(t)}
t.reset=function(){this.transmuxer.reset()}
t.setTimestampOffset=function(e){var t=e.timestampOffset||0
this.transmuxer.setBaseMediaDecodeTime(Math.round(fe(t)))}
t.setAudioAppendStart=function(e){this.transmuxer.setAudioAppendStart(Math.ceil(fe(e.appendStart)))}
t.setRemux=function(e){this.transmuxer.setRemux(e.remux)}
t.flush=function(e){this.transmuxer.flush()
i.postMessage({action:"done",type:"transmuxed"})}
t.partialFlush=function(e){this.transmuxer.partialFlush()
i.postMessage({action:"partialdone",type:"transmuxed"})}
t.endTimeline=function(){this.transmuxer.endTimeline()
i.postMessage({action:"endedtimeline",type:"transmuxed"})}
t.alignGopsWith=function(e){this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())}
return e})()
new function(e){e.onmessage=function(t){if("init"===t.data.action&&t.data.options)this.messageHandlers=new Jt(e,t.data.options)
else{this.messageHandlers||(this.messageHandlers=new Jt(e))
t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data)}}}(i)}))()}),yd=function(e,t){var i=t.attributes||{}
return e&&e.mediaGroups&&e.mediaGroups.AUDIO&&i.AUDIO&&e.mediaGroups.AUDIO[i.AUDIO]},_d=function(e,t){var i=t.attributes||{},n=(function(e){var t=e.attributes||{}
if(t.CODECS)return br(t.CODECS)})(t)||{}
if(yd(e,t)&&!n.audio&&!(function(e,t){if(!yd(e,t))return!0
var i=t.attributes||{},n=e.mediaGroups.AUDIO[i.AUDIO]
for(var r in n)if(!n[r].uri&&!n[r].playlists)return!0
return!1})(e,t)){var r=mr(e,i.AUDIO)
r&&(n.audio=r.audio)}var a={}
n.video&&(a.video=Tr(""+n.video.type+n.video.details))
n.audio&&(a.audio=Tr(""+n.audio.type+n.audio.details))
return a},bd=function(e){return Ru.log.debug?Ru.log.debug.bind(Ru,"VHS:",e+" >"):function(){}},Td=bd("PlaylistSelector"),Sd=function(e){if(e&&e.playlist){var t=e.playlist
return JSON.stringify({id:t.id,bandwidth:e.bandwidth,width:e.width,height:e.height,codecs:t.attributes&&t.attributes.CODECS||""})}},kd=function(e,t){if(!e)return""
var i=a.getComputedStyle(e)
return i?i[t]:""},Cd=function(e,t){var i=e.slice()
e.sort((function(e,n){var r=t(e,n)
return 0===r?i.indexOf(e)-i.indexOf(n):r}))},Ed=function(e,t){var i,n
e.attributes.BANDWIDTH&&(i=e.attributes.BANDWIDTH)
i=i||a.Number.MAX_VALUE
t.attributes.BANDWIDTH&&(n=t.attributes.BANDWIDTH)
return i-(n=n||a.Number.MAX_VALUE)},wd=function(e,t,i,n,r){var s={bandwidth:t,width:i,height:n,limitRenditionByPlayerDimensions:r},o=e.playlists.map((function(e){var t=e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width,i=e.attributes.RESOLUTION&&e.attributes.RESOLUTION.height
return{bandwidth:e.attributes.BANDWIDTH||a.Number.MAX_VALUE,width:t,height:i,playlist:e}}))
Cd(o,(function(e,t){return e.bandwidth-t.bandwidth}))
var l=(o=o.filter((function(e){return!fc.isIncompatible(e.playlist)}))).filter((function(e){return fc.isEnabled(e.playlist)}))
l.length||(l=o.filter((function(e){return!fc.isDisabled(e.playlist)})))
var u=l.filter((function(e){return e.bandwidth*jc.BANDWIDTH_VARIANCE<t})),c=u[u.length-1],d=u.filter((function(e){return e.bandwidth===c.bandwidth}))[0]
if(!1===r){var h=d||l[0]||o[0]
if(h&&h.playlist){var p="sortedPlaylistReps"
d&&(p="bandwidthBestRep")
l[0]&&(p="enabledPlaylistReps")
Td("choosing "+Sd(h)+" using "+p+" with options",s)
return h.playlist}Td("could not choose a playlist with options",s)
return null}var f=u.filter((function(e){return e.width&&e.height}))
Cd(f,(function(e,t){return e.width-t.width}))
var m=f.filter((function(e){return e.width===i&&e.height===n}))
c=m[m.length-1]
var g,v,y,_=m.filter((function(e){return e.bandwidth===c.bandwidth}))[0]
if(!_){v=(g=f.filter((function(e){return e.width>i||e.height>n}))).filter((function(e){return e.width===g[0].width&&e.height===g[0].height}))
c=v[v.length-1]
y=v.filter((function(e){return e.bandwidth===c.bandwidth}))[0]}var b=y||_||d||l[0]||o[0]
if(b&&b.playlist){var T="sortedPlaylistReps"
y?T="resolutionPlusOneRep":_?T="resolutionBestRep":d?T="bandwidthBestRep":l[0]&&(T="enabledPlaylistReps")
Td("choosing "+Sd(b)+" using "+T+" with options",s)
return b.playlist}Td("could not choose a playlist with options",s)
return null},Id=function(){var e=this.useDevicePixelRatio&&a.devicePixelRatio||1
return wd(this.playlists.master,this.systemBandwidth,parseInt(kd(this.tech_.el(),"width"),10)*e,parseInt(kd(this.tech_.el(),"height"),10)*e,this.limitRenditionByPlayerDimensions)},Pd=function(e){var t=e.inbandTextTracks,i=e.metadataArray,n=e.timestampOffset,r=e.videoDuration
if(i){var s=a.WebKitDataCue||a.VTTCue,o=t.metadataTrack_
if(o){i.forEach((function(e){var t=e.cueTime+n
!("number"!=typeof t||a.isNaN(t)||t<0)&&t<1/0&&e.frames.forEach((function(e){var i=new s(t,t,e.value||e.url||e.data||"")
i.frame=e
i.value=e;((function(e){Object.defineProperties(e.frame,{id:{get:function(){Ru.log.warn("cue.frame.id is deprecated. Use cue.value.key instead.")
return e.value.key}},value:{get:function(){Ru.log.warn("cue.frame.value is deprecated. Use cue.value.data instead.")
return e.value.data}},privateData:{get:function(){Ru.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead.")
return e.value.data}}})}))(i)
o.addCue(i)}))}))
if(o.cues&&o.cues.length){for(var l=o.cues,u=[],c=0;c<l.length;c++)l[c]&&u.push(l[c])
var d=u.reduce((function(e,t){var i=e[t.startTime]||[]
i.push(t)
e[t.startTime]=i
return e}),{}),h=Object.keys(d).sort((function(e,t){return Number(e)-Number(t)}))
h.forEach((function(e,t){var i=d[e],n=Number(h[t+1])||r
i.forEach((function(e){e.endTime=n}))}))}}}},Ad=function(e,t,i){var n,r
if(i&&i.cues){n=i.cues.length
for(;n--;)(r=i.cues[n]).startTime>=e&&r.endTime<=t&&i.removeCue(r)}},xd=function(e){return"number"==typeof e&&isFinite(e)},Od=function(e){return e+"TimingInfo"},Ld=function(e){var t=e.segmentTimeline,i=e.currentTimeline,n=e.startOfSegment,r=e.buffered
return e.overrideCheck||t!==i?r.length?r.end(r.length-1):n:null},Dd=function(e){var t=e.timelineChangeController,i=e.currentTimeline,n=e.segmentTimeline,r=e.loaderType,a=e.audioDisabled
if(i===n)return!1
if("audio"===r){var s=t.lastTimelineChange({type:"main"})
return!s||s.to!==n}if("main"===r&&a){var o=t.pendingTimelineChange({type:"audio"})
return!o||o.to!==n}return!1},Rd=(function(e){U(t,e)
function t(t,i){var n
n=e.call(this)||this
if(!t)throw new TypeError("Initialization settings are required")
if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified")
if(!t.mediaSource)throw new TypeError("No MediaSource specified")
n.bandwidth=t.bandwidth
n.throughput={rate:0,count:0}
n.roundTrip=NaN
n.resetStats_()
n.mediaIndex=null
n.hasPlayed_=t.hasPlayed
n.currentTime_=t.currentTime
n.seekable_=t.seekable
n.seeking_=t.seeking
n.duration_=t.duration
n.mediaSource_=t.mediaSource
n.vhs_=t.vhs
n.loaderType_=t.loaderType
n.currentMediaInfo_=void 0
n.startingMediaInfo_=void 0
n.segmentMetadataTrack_=t.segmentMetadataTrack
n.goalBufferLength_=t.goalBufferLength
n.sourceType_=t.sourceType
n.sourceUpdater_=t.sourceUpdater
n.inbandTextTracks_=t.inbandTextTracks
n.state_="INIT"
n.handlePartialData_=t.handlePartialData
n.timelineChangeController_=t.timelineChangeController
n.shouldSaveSegmentTimingInfo_=!0
n.checkBufferTimeout_=null
n.error_=void 0
n.currentTimeline_=-1
n.pendingSegment_=null
n.xhrOptions_=null
n.pendingSegments_=[]
n.audioDisabled_=!1
n.isPendingTimestampOffset_=!1
n.gopBuffer_=[]
n.timeMapping_=0
n.safeAppend_=Ru.browser.IE_VERSION>=11
n.appendInitSegment_={audio:!0,video:!0}
n.playlistOfLastInitSegment_={audio:null,video:null}
n.callQueue_=[]
n.loadQueue_=[]
n.metadataQueue_={id3:[],caption:[]}
n.activeInitSegmentId_=null
n.initSegments_={}
n.cacheEncryptionKeys_=t.cacheEncryptionKeys
n.keyCache_={}
n.decrypter_=t.decrypter
n.syncController_=t.syncController
n.syncPoint_={segmentIndex:0,time:0}
n.transmuxer_=n.createTransmuxer_()
n.triggerSyncInfoUpdate_=function(){return n.trigger("syncinfoupdate")}
n.syncController_.on("syncinfoupdate",n.triggerSyncInfoUpdate_)
n.mediaSource_.addEventListener("sourceopen",(function(){n.isEndOfStream_()||(n.ended_=!1)}))
n.fetchAtBuffer_=!1
n.logger_=bd("SegmentLoader["+n.loaderType_+"]")
Object.defineProperty(M(n),"state",{get:function(){return this.state_},set:function(e){if(e!==this.state_){this.logger_(this.state_+" -> "+e)
this.state_=e
this.trigger("statechange")}}})
n.sourceUpdater_.on("ready",(function(){n.hasEnoughInfoToAppend_()&&n.processCallQueue_()}))
"main"===n.loaderType_&&n.timelineChangeController_.on("pendingtimelinechange",(function(){n.hasEnoughInfoToAppend_()&&n.processCallQueue_()}))
"audio"===n.loaderType_&&n.timelineChangeController_.on("timelinechange",(function(){n.hasEnoughInfoToLoad_()&&n.processLoadQueue_()
n.hasEnoughInfoToAppend_()&&n.processCallQueue_()}))
return n}var i=t.prototype
i.createTransmuxer_=function(){var e=new vd
e.postMessage({action:"init",options:{remux:!1,alignGopsAtEnd:this.safeAppend_,keepOriginalTimestamps:!0,handlePartialData:this.handlePartialData_}})
return e}
i.resetStats_=function(){this.mediaBytesTransferred=0
this.mediaRequests=0
this.mediaRequestsAborted=0
this.mediaRequestsTimedout=0
this.mediaRequestsErrored=0
this.mediaTransferDuration=0
this.mediaSecondsLoaded=0}
i.dispose=function(){this.trigger("dispose")
this.state="DISPOSED"
this.pause()
this.abort_()
if(this.transmuxer_){this.transmuxer_.terminate()
Xc()}this.resetStats_()
this.checkBufferTimeout_&&a.clearTimeout(this.checkBufferTimeout_)
this.syncController_&&this.triggerSyncInfoUpdate_&&this.syncController_.off("syncinfoupdate",this.triggerSyncInfoUpdate_)
this.off()}
i.setAudio=function(e){this.audioDisabled_=!e
e?this.appendInitSegment_.audio=!0:this.sourceUpdater_.removeAudio(0,this.duration_())}
i.abort=function(){if("WAITING"===this.state){this.abort_()
this.state="READY"
this.paused()||this.monitorBuffer_()}else this.pendingSegment_&&(this.pendingSegment_=null)}
i.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests&&this.pendingSegment_.abortRequests()
this.pendingSegment_=null
this.callQueue_=[]
this.loadQueue_=[]
this.metadataQueue_.id3=[]
this.metadataQueue_.caption=[]
this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_)}
i.checkForAbort_=function(e){if("APPENDING"===this.state&&!this.pendingSegment_){this.state="READY"
return!0}return!this.pendingSegment_||this.pendingSegment_.requestId!==e}
i.error=function(e){if(void 0!==e){this.logger_("error occurred:",e)
this.error_=e}this.pendingSegment_=null
return this.error_}
i.endOfStream=function(){this.ended_=!0
this.transmuxer_&&Kc(this.transmuxer_)
this.gopBuffer_.length=0
this.pause()
this.trigger("ended")}
i.buffered_=function(){if(!this.sourceUpdater_||!this.startingMediaInfo_)return Ru.createTimeRanges()
if("main"===this.loaderType_){var e=this.startingMediaInfo_,t=e.hasAudio,i=e.hasVideo,n=e.isMuxed
if(i&&t&&!this.audioDisabled_&&!n)return this.sourceUpdater_.buffered()
if(i)return this.sourceUpdater_.videoBuffered()}return this.sourceUpdater_.audioBuffered()}
i.initSegmentForMap=function(e,t){void 0===t&&(t=!1)
if(!e)return null
var i=Cc(e),n=this.initSegments_[i]
t&&!n&&e.bytes&&(this.initSegments_[i]=n={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:e.bytes,tracks:e.tracks,timescales:e.timescales})
return n||e}
i.segmentKey=function(e,t){void 0===t&&(t=!1)
if(!e)return null
var i=Ec(e),n=this.keyCache_[i]
this.cacheEncryptionKeys_&&t&&!n&&e.bytes&&(this.keyCache_[i]=n={resolvedUri:e.resolvedUri,bytes:e.bytes})
var r={resolvedUri:(n||e).resolvedUri}
n&&(r.bytes=n.bytes)
return r}
i.couldBeginLoading_=function(){return this.playlist_&&!this.paused()}
i.load=function(){this.monitorBuffer_()
if(this.playlist_){this.syncController_.setDateTimeMapping(this.playlist_)
if("INIT"===this.state&&this.couldBeginLoading_())return this.init_()
!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}}
i.init_=function(){this.state="READY"
this.resetEverything()
return this.monitorBuffer_()}
i.playlist=function(e,t){void 0===t&&(t={})
if(e){var i=this.playlist_,n=this.pendingSegment_
this.playlist_=e
this.xhrOptions_=t
"INIT"===this.state&&(e.syncInfo={mediaSequence:e.mediaSequence,time:0})
var r=null
i&&(i.id?r=i.id:i.uri&&(r=i.uri))
this.logger_("playlist update ["+r+" => "+(e.id||e.uri)+"]")
this.trigger("syncinfoupdate")
if("INIT"===this.state&&this.couldBeginLoading_())return this.init_()
if(i&&i.uri===e.uri){var a=e.mediaSequence-i.mediaSequence
this.logger_("live window shift ["+a+"]")
null!==this.mediaIndex&&(this.mediaIndex-=a)
if(n){n.mediaIndex-=a
n.mediaIndex>=0&&(n.segment=e.segments[n.mediaIndex])}this.syncController_.saveExpiredSegmentInfo(i,e)}else{(null!==this.mediaIndex||this.handlePartialData_)&&this.resyncLoader()
this.currentMediaInfo_=void 0
this.trigger("playlistupdate")}}}
i.pause=function(){if(this.checkBufferTimeout_){a.clearTimeout(this.checkBufferTimeout_)
this.checkBufferTimeout_=null}}
i.paused=function(){return null===this.checkBufferTimeout_}
i.resetEverything=function(e){this.ended_=!1
this.appendInitSegment_={audio:!0,video:!0}
this.resetLoader()
this.remove(0,1/0,e)
this.transmuxer_&&this.transmuxer_.postMessage({action:"clearAllMp4Captions"})}
i.resetLoader=function(){this.fetchAtBuffer_=!1
this.resyncLoader()}
i.resyncLoader=function(){this.transmuxer_&&Kc(this.transmuxer_)
this.mediaIndex=null
this.syncPoint_=null
this.isPendingTimestampOffset_=!1
this.callQueue_=[]
this.loadQueue_=[]
this.metadataQueue_.id3=[]
this.metadataQueue_.caption=[]
this.abort()
this.transmuxer_&&this.transmuxer_.postMessage({action:"clearParsedMp4Captions"})}
i.remove=function(e,t,i){void 0===i&&(i=function(){})
t===1/0&&(t=this.duration_())
if(this.sourceUpdater_&&this.currentMediaInfo_){var n=1,r=function(){0===--n&&i()}
if(!this.audioDisabled_){n++
this.sourceUpdater_.removeAudio(e,t,r)}if("main"===this.loaderType_&&this.currentMediaInfo_&&this.currentMediaInfo_.hasVideo){this.gopBuffer_=(function(e,t,i,n){for(var r=Math.ceil((t-n)*Fn),a=Math.ceil((i-n)*Fn),s=e.slice(),o=e.length;o--&&!(e[o].pts<=a););if(-1===o)return s
for(var l=o+1;l--&&!(e[l].pts<=r););l=Math.max(l,0)
s.splice(l,o-l+1)
return s})(this.gopBuffer_,e,t,this.timeMapping_)
n++
this.sourceUpdater_.removeVideo(e,t,r)}for(var a in this.inbandTextTracks_)Ad(e,t,this.inbandTextTracks_[a])
Ad(e,t,this.segmentMetadataTrack_)
r()}}
i.monitorBuffer_=function(){this.checkBufferTimeout_&&a.clearTimeout(this.checkBufferTimeout_)
this.checkBufferTimeout_=a.setTimeout(this.monitorBufferTick_.bind(this),1)}
i.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_()
this.checkBufferTimeout_&&a.clearTimeout(this.checkBufferTimeout_)
this.checkBufferTimeout_=a.setTimeout(this.monitorBufferTick_.bind(this),500)}
i.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()))
var e=this.buffered_(),t=this.checkBuffer_(e,this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_)
if(t){t.timestampOffset=Ld({segmentTimeline:t.timeline,currentTimeline:this.currentTimeline_,startOfSegment:t.startOfSegment,buffered:e,overrideCheck:this.isPendingTimestampOffset_})
this.isPendingTimestampOffset_=!1
"number"==typeof t.timestampOffset&&this.timelineChangeController_.pendingTimelineChange({type:this.loaderType_,from:this.currentTimeline_,to:t.timeline})
this.loadSegment_(t)}}}
i.isEndOfStream_=function(e,t){void 0===e&&(e=this.mediaIndex)
void 0===t&&(t=this.playlist_)
if(!t||!this.mediaSource_)return!1
var i=e+1===t.segments.length
return t.endList&&"open"===this.mediaSource_.readyState&&i}
i.checkBuffer_=function(e,t,i,n,r,a){var s=0
e.length&&(s=e.end(e.length-1))
var o=Math.max(0,s-r)
if(!t.segments.length)return null
if(o>=this.goalBufferLength_())return null
if(!n&&o>=1)return null
var l,u=null,c=!1
if(null===a){u=this.getSyncSegmentCandidate_(t)
c=!0}else if(null!==i){var d=t.segments[i]
l=d&&d.end?d.end:s
u=i+1}else if(this.fetchAtBuffer_){var h=fc.getMediaInfoForTime(t,s,a.segmentIndex,a.time)
u=h.mediaIndex
l=h.startTime}else{var p=fc.getMediaInfoForTime(t,r,a.segmentIndex,a.time)
u=p.mediaIndex
l=p.startTime}var f=this.generateSegmentInfo_(t,u,l,c)
if(f&&(!this.mediaSource_||!this.playlist_||f.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())){this.logger_("checkBuffer_ returning "+f.uri,{segmentInfo:f,playlist:t,currentMediaIndex:i,nextMediaIndex:u,startOfSegment:l,isSyncRequest:c})
return f}}
i.getSyncSegmentCandidate_=function(e){var t=this
if(-1===this.currentTimeline_)return 0
var i=e.segments.map((function(e,t){return{timeline:e.timeline,segmentIndex:t}})).filter((function(e){return e.timeline===t.currentTimeline_}))
return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(e.segments.length-1,0)}
i.generateSegmentInfo_=function(e,t,i,n){if(t<0||t>=e.segments.length)return null
var r,a,s=e.segments[t],o=this.sourceUpdater_.audioBuffered(),l=this.sourceUpdater_.videoBuffered()
o.length&&(r=o.end(o.length-1)-this.sourceUpdater_.audioTimestampOffset())
l.length&&(a=(function(e,t,i){if(null==t||!e.length)return[]
var n,r=Math.ceil((t-i+3)*Fn)
for(n=0;n<e.length&&!(e[n].pts>r);n++);return e.slice(n)})(this.gopBuffer_,this.currentTime_()-this.sourceUpdater_.videoTimestampOffset(),this.timeMapping_))
return{requestId:"segment-loader-"+Math.random(),uri:s.resolvedUri,mediaIndex:t,isSyncRequest:n,startOfSegment:i,playlist:e,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:s.timeline,duration:s.duration,segment:s,byteLength:0,transmuxer:this.transmuxer_,audioAppendStart:r,gopsToAlignWith:a}}
i.earlyAbortWhenNeeded_=function(e){if(!this.vhs_.tech_.paused()&&this.xhrOptions_.timeout&&this.playlist_.attributes.BANDWIDTH&&!(Date.now()-(e.firstBytesReceivedAt||Date.now())<1e3)){var t=this.currentTime_(),i=e.bandwidth,n=this.pendingSegment_.duration,r=fc.estimateSegmentRequestTime(n,i,this.playlist_,e.bytesReceived),a=(function(e,t,i){void 0===i&&(i=1)
return((e.length?e.end(e.length-1):0)-t)/i})(this.buffered_(),t,this.vhs_.tech_.playbackRate())-1
if(!(r<=a)){var s=(function(e){var t=e.master,i=e.currentTime,n=e.bandwidth,r=e.duration,a=e.segmentDuration,s=e.timeUntilRebuffer,o=e.currentTimeline,l=e.syncController,u=t.playlists.filter((function(e){return!fc.isIncompatible(e)})),c=u.filter(fc.isEnabled)
c.length||(c=u.filter((function(e){return!fc.isDisabled(e)})))
var d=c.filter(fc.hasAttribute.bind(null,"BANDWIDTH")).map((function(e){var t=l.getSyncPoint(e,r,o,i)?1:2
return{playlist:e,rebufferingImpact:fc.estimateSegmentRequestTime(a,n,e)*t-s}})),h=d.filter((function(e){return e.rebufferingImpact<=0}))
Cd(h,(function(e,t){return Ed(t.playlist,e.playlist)}))
if(h.length)return h[0]
Cd(d,(function(e,t){return e.rebufferingImpact-t.rebufferingImpact}))
return d[0]||null})({master:this.vhs_.playlists.master,currentTime:t,bandwidth:i,duration:this.duration_(),segmentDuration:n,timeUntilRebuffer:a,currentTimeline:this.currentTimeline_,syncController:this.syncController_})
if(s){var o=r-a-s.rebufferingImpact,l=.5
a<=1/30&&(l=1)
if(s.playlist&&s.playlist.uri!==this.playlist_.uri&&!(o<l)){this.bandwidth=s.playlist.attributes.BANDWIDTH*jc.BANDWIDTH_VARIANCE+1
this.trigger("earlyabort")}}}}}
i.handleAbort_=function(){this.mediaRequestsAborted+=1}
i.handleProgress_=function(e,t){this.earlyAbortWhenNeeded_(t.stats)
this.checkForAbort_(t.requestId)||this.trigger("progress")}
i.handleTrackInfo_=function(e,t){this.earlyAbortWhenNeeded_(e.stats)
if(!this.checkForAbort_(e.requestId)&&!this.checkForIllegalMediaSwitch(t)){t=t||{}
if(!(function(e,t){if(!e&&!t||!e&&t||e&&!t)return!1
if(e===t)return!0
var i=Object.keys(e).sort(),n=Object.keys(t).sort()
if(i.length!==n.length)return!1
for(var r=0;r<i.length;r++){var a=i[r]
if(a!==n[r])return!1
if(e[a]!==t[a])return!1}return!0})(this.currentMediaInfo_,t)){this.appendInitSegment_={audio:!0,video:!0}
this.startingMediaInfo_=t
this.currentMediaInfo_=t
this.logger_("trackinfo update",t)
this.trigger("trackinfo")}if(!this.checkForAbort_(e.requestId)){this.pendingSegment_.trackInfo=t
this.hasEnoughInfoToAppend_()&&this.processCallQueue_()}}}
i.handleTimingInfo_=function(e,t,i,n){this.earlyAbortWhenNeeded_(e.stats)
if(!this.checkForAbort_(e.requestId)){var r=this.pendingSegment_,a=Od(t)
r[a]=r[a]||{}
r[a][i]=n
this.logger_("timinginfo: "+t+" - "+i+" - "+n)
this.hasEnoughInfoToAppend_()&&this.processCallQueue_()}}
i.handleCaptions_=function(e,t){var i=this
this.earlyAbortWhenNeeded_(e.stats)
if(!this.checkForAbort_(e.requestId))if(0!==t.length){if(this.pendingSegment_.hasAppendedData_){var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset():this.sourceUpdater_.videoTimestampOffset(),r={}
t.forEach((function(e){r[e.stream]=r[e.stream]||{startTime:1/0,captions:[],endTime:0}
var t=r[e.stream]
t.startTime=Math.min(t.startTime,e.startTime+n)
t.endTime=Math.max(t.endTime,e.endTime+n)
t.captions.push(e)}))
Object.keys(r).forEach((function(e){var t=r[e],s=t.startTime,o=t.endTime,l=t.captions,u=i.inbandTextTracks_
i.logger_("adding cues from "+s+" -> "+o+" for "+e);((function(e,t,i){if(!e[i]){t.trigger({type:"usage",name:"vhs-608"})
t.trigger({type:"usage",name:"hls-608"})
var n=t.textTracks().getTrackById(i)
e[i]=n||t.addRemoteTextTrack({kind:"captions",id:i,label:i},!1).track}}))(u,i.vhs_.tech_,e)
Ad(s,o,u[e]);((function(e){var t=e.inbandTextTracks,i=e.captionArray,n=e.timestampOffset
if(i){var r=a.WebKitDataCue||a.VTTCue
i.forEach((function(e){var i=e.stream
t[i].addCue(new r(e.startTime+n,e.endTime+n,e.text))}))}}))({captionArray:l,inbandTextTracks:u,timestampOffset:n})}))
this.transmuxer_&&this.transmuxer_.postMessage({action:"clearParsedMp4Captions"})}else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this,e,t))}else this.logger_("SegmentLoader received no captions from a caption event")}
i.handleId3_=function(e,t,i){this.earlyAbortWhenNeeded_(e.stats)
if(!this.checkForAbort_(e.requestId)){if(this.pendingSegment_.hasAppendedData_){var n=null===this.sourceUpdater_.videoTimestampOffset()?this.sourceUpdater_.audioTimestampOffset():this.sourceUpdater_.videoTimestampOffset();((function(e,t,i){if(!e.metadataTrack_){e.metadataTrack_=i.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track
e.metadataTrack_.inBandMetadataTrackDispatchType=t}}))(this.inbandTextTracks_,i,this.vhs_.tech_)
Pd({inbandTextTracks:this.inbandTextTracks_,metadataArray:t,timestampOffset:n,videoDuration:this.duration_()})}else this.metadataQueue_.id3.push(this.handleId3_.bind(this,e,t,i))}}
i.processMetadataQueue_=function(){this.metadataQueue_.id3.forEach((function(e){return e()}))
this.metadataQueue_.caption.forEach((function(e){return e()}))
this.metadataQueue_.id3=[]
this.metadataQueue_.caption=[]}
i.processCallQueue_=function(){var e=this.callQueue_
this.callQueue_=[]
e.forEach((function(e){return e()}))}
i.processLoadQueue_=function(){var e=this.loadQueue_
this.loadQueue_=[]
e.forEach((function(e){return e()}))}
i.hasEnoughInfoToLoad_=function(){if("audio"!==this.loaderType_)return!0
var e=this.pendingSegment_
return!!e&&(!this.currentMediaInfo_||!Dd({timelineChangeController:this.timelineChangeController_,currentTimeline:this.currentTimeline_,segmentTimeline:e.timeline,loaderType:this.loaderType_,audioDisabled:this.audioDisabled_}))}
i.hasEnoughInfoToAppend_=function(){if(!this.sourceUpdater_.ready())return!1
var e=this.pendingSegment_
if(!e||!e.trackInfo)return!1
if(!this.handlePartialData_){var t=this.currentMediaInfo_,i=t.hasAudio,n=t.hasVideo,r=t.isMuxed
if(n&&!e.videoTimingInfo)return!1
if(i&&!this.audioDisabled_&&!r&&!e.audioTimingInfo)return!1}return!Dd({timelineChangeController:this.timelineChangeController_,currentTimeline:this.currentTimeline_,segmentTimeline:e.timeline,loaderType:this.loaderType_,audioDisabled:this.audioDisabled_})}
i.handleData_=function(e,t){this.earlyAbortWhenNeeded_(e.stats)
if(!this.checkForAbort_(e.requestId))if(!this.callQueue_.length&&this.hasEnoughInfoToAppend_()){var i=this.pendingSegment_
this.setTimeMapping_(i.timeline)
this.updateMediaSecondsLoaded_(i.segment)
if("closed"!==this.mediaSource_.readyState){if(e.map){e.map=this.initSegmentForMap(e.map,!0)
i.segment.map=e.map}e.key&&this.segmentKey(e.key,!0)
i.isFmp4=e.isFmp4
i.timingInfo=i.timingInfo||{}
if(i.isFmp4){this.trigger("fmp4")
i.timingInfo.start=i[Od(t.type)].start}else{var n,r="main"===this.loaderType_&&this.currentMediaInfo_.hasVideo
r&&(n=this.handlePartialData_?t.videoFramePtsTime:i.videoTimingInfo.start)
i.timingInfo.start=this.trueSegmentStart_({currentStart:i.timingInfo.start,playlist:i.playlist,mediaIndex:i.mediaIndex,currentVideoTimestampOffset:this.sourceUpdater_.videoTimestampOffset(),useVideoTimingInfo:r,firstVideoFrameTimeForData:n,videoTimingInfo:i.videoTimingInfo,audioTimingInfo:i.audioTimingInfo})}this.updateAppendInitSegmentStatus(i,t.type)
this.updateSourceBufferTimestampOffset_(i)
i.hasAppendedData_=!0
this.processMetadataQueue_()
this.appendData_(i,t)}}else this.callQueue_.push(this.handleData_.bind(this,e,t))}
i.updateAppendInitSegmentStatus=function(e,t){"main"!==this.loaderType_||"number"!=typeof e.timestampOffset||e.changedTimestampOffset||(this.appendInitSegment_={audio:!0,video:!0})
this.playlistOfLastInitSegment_[t]!==e.playlist&&(this.appendInitSegment_[t]=!0)}
i.getInitSegmentAndUpdateState_=function(e){var t=e.type,i=e.initSegment,n=e.map,r=e.playlist
if(n){var a=Cc(n)
if(this.activeInitSegmentId_===a)return null
i=this.initSegmentForMap(n,!0).bytes
this.activeInitSegmentId_=a}if(i&&this.appendInitSegment_[t]){this.playlistOfLastInitSegment_[t]=r
this.appendInitSegment_[t]=!!n
this.activeInitSegmentId_=null
return i}return null}
i.appendToSourceBuffer_=function(e){var t=this,i=e.segmentInfo,n=e.type,r=e.initSegment,a=e.data,s=[a],o=a.byteLength
if(r){s.unshift(r)
o+=r.byteLength}var l=(function(e){var t,i=0
if(e.bytes){t=new Uint8Array(e.bytes)
e.segments.forEach((function(e){t.set(e,i)
i+=e.byteLength}))}return t})({bytes:o,segments:s})
this.sourceUpdater_.appendBuffer({segmentInfo:i,type:n,bytes:l},(function(e){if(e){t.error(n+" append of "+l.length+"b failed for segment #"+i.mediaIndex+" in playlist "+i.playlist.id)
t.trigger("appenderror")}}))}
i.handleVideoSegmentTimingInfo_=function(e,t){if(this.pendingSegment_&&e===this.pendingSegment_.requestId){var i=this.pendingSegment_.segment
i.videoTimingInfo||(i.videoTimingInfo={})
i.videoTimingInfo.transmuxerPrependedSeconds=t.prependedContentDuration||0
i.videoTimingInfo.transmuxedPresentationStart=t.start.presentation
i.videoTimingInfo.transmuxedPresentationEnd=t.end.presentation
i.videoTimingInfo.baseMediaDecodeTime=t.baseMediaDecodeTime}}
i.appendData_=function(e,t){var i=t.type,n=t.data
if(n&&n.byteLength&&("audio"!==i||!this.audioDisabled_)){var r=this.getInitSegmentAndUpdateState_({type:i,initSegment:t.initSegment,playlist:e.playlist,map:e.isFmp4?e.segment.map:null})
this.appendToSourceBuffer_({segmentInfo:e,type:i,initSegment:r,data:n})}}
i.loadSegment_=function(e){var t=this
this.state="WAITING"
this.pendingSegment_=e
this.trimBackBuffer_(e)
"number"==typeof e.timestampOffset&&this.transmuxer_&&this.transmuxer_.postMessage({action:"clearAllMp4Captions"})
this.hasEnoughInfoToLoad_()?this.updateTransmuxerAndRequestSegment_(e):this.loadQueue_.push((function(){var i=t.buffered_()
"number"==typeof e.timestampOffset&&(e.timestampOffset=Ld({segmentTimeline:e.timeline,currentTimeline:t.currentTimeline_,startOfSegment:e.startOfSegment,buffered:i,overrideCheck:!0}))
delete e.audioAppendStart
var n=t.sourceUpdater_.audioBuffered()
n.length&&(e.audioAppendStart=n.end(n.length-1)-t.sourceUpdater_.audioTimestampOffset())
t.updateTransmuxerAndRequestSegment_(e)}))}
i.updateTransmuxerAndRequestSegment_=function(e){if(this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset)){this.gopBuffer_.length=0
e.gopsToAlignWith=[]
this.timeMapping_=0
this.transmuxer_.postMessage({action:"reset"})
this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:e.timestampOffset})}var t=this.createSimplifiedSegmentObj_(e)
e.abortRequests=ad({xhr:this.vhs_.xhr,xhrOptions:this.xhrOptions_,decryptionWorker:this.decrypter_,segment:t,handlePartialData:this.handlePartialData_,abortFn:this.handleAbort_.bind(this),progressFn:this.handleProgress_.bind(this),trackInfoFn:this.handleTrackInfo_.bind(this),timingInfoFn:this.handleTimingInfo_.bind(this),videoSegmentTimingInfoFn:this.handleVideoSegmentTimingInfo_.bind(this,e.requestId),captionsFn:this.handleCaptions_.bind(this),id3Fn:this.handleId3_.bind(this),dataFn:this.handleData_.bind(this),doneFn:this.segmentRequestFinished_.bind(this)})}
i.trimBackBuffer_=function(e){var t=(function(e,t,i){var n=t-jc.BACK_BUFFER_LENGTH
e.length&&(n=Math.max(n,e.start(0)))
var r=t-i
return Math.min(r,n)})(this.seekable_(),this.currentTime_(),this.playlist_.targetDuration||10)
t>0&&this.remove(0,t)}
i.createSimplifiedSegmentObj_=function(e){var t=e.segment,i={resolvedUri:t.resolvedUri,byterange:t.byterange,requestId:e.requestId,transmuxer:e.transmuxer,audioAppendStart:e.audioAppendStart,gopsToAlignWith:e.gopsToAlignWith},n=e.playlist.segments[e.mediaIndex]
n&&n.end&&n.timeline===t.timeline&&(i.baseStartTime=n.end+e.timestampOffset)
if(t.key){var r=t.key.iv||new Uint32Array([0,0,0,e.mediaIndex+e.playlist.mediaSequence])
i.key=this.segmentKey(t.key)
i.key.iv=r}t.map&&(i.map=this.initSegmentForMap(t.map))
return i}
i.saveTransferStats_=function(e){this.mediaRequests+=1
if(e){this.mediaBytesTransferred+=e.bytesReceived
this.mediaTransferDuration+=e.roundTripTime}}
i.saveBandwidthRelatedStats_=function(e){this.bandwidth=e.bandwidth
this.roundTrip=e.roundTripTime
this.pendingSegment_.byteLength=e.bytesReceived}
i.handleTimeout_=function(){this.mediaRequestsTimedout+=1
this.bandwidth=1
this.roundTrip=NaN
this.trigger("bandwidthupdate")}
i.segmentRequestFinished_=function(e,t,i){if(this.callQueue_.length)this.callQueue_.push(this.segmentRequestFinished_.bind(this,e,t,i))
else{this.saveTransferStats_(t.stats)
if(this.pendingSegment_&&t.requestId===this.pendingSegment_.requestId)if(e){this.pendingSegment_=null
this.state="READY"
if(e.code===Jc)return
this.pause()
if(e.code===$c){this.handleTimeout_()
return}this.mediaRequestsErrored+=1
this.error(e)
this.trigger("error")}else{this.saveBandwidthRelatedStats_(t.stats)
var n=this.pendingSegment_
n.endOfAllRequests=t.endOfAllRequests
i.gopInfo&&(this.gopBuffer_=(function(e,t,i){if(!t.length)return e
if(i)return t.slice()
for(var n=t[0].pts,r=0;r<e.length&&!(e[r].pts>=n);r++);return e.slice(0,r).concat(t)})(this.gopBuffer_,i.gopInfo,this.safeAppend_))
this.state="APPENDING"
var r=this.isEndOfStream_(n.mediaIndex,n.playlist),a=null!==this.mediaIndex,s=n.timeline!==this.currentTimeline_&&n.timeline>0
!n.isFmp4&&(r||a&&s)&&Yc(this.transmuxer_)
this.trigger("appending")
this.waitForAppendsToComplete_(n)}}}
i.setTimeMapping_=function(e){var t=this.syncController_.mappingForTimeline(e)
null!==t&&(this.timeMapping_=t)}
i.updateMediaSecondsLoaded_=function(e){"number"==typeof e.start&&"number"==typeof e.end?this.mediaSecondsLoaded+=e.end-e.start:this.mediaSecondsLoaded+=e.duration}
i.shouldUpdateTransmuxerTimestampOffset_=function(e){return null!==e&&("main"===this.loaderType_&&e!==this.sourceUpdater_.videoTimestampOffset()||!this.audioDisabled_&&e!==this.sourceUpdater_.audioTimestampOffset())}
i.trueSegmentStart_=function(e){var t=e.currentStart,i=e.playlist,n=e.mediaIndex,r=e.firstVideoFrameTimeForData,a=e.currentVideoTimestampOffset,s=e.useVideoTimingInfo,o=e.videoTimingInfo,l=e.audioTimingInfo
if(void 0!==t)return t
if(!s)return l.start
var u=i.segments[n-1]
return 0!==n&&u&&void 0!==u.start&&u.end===r+a?o.start:r}
i.waitForAppendsToComplete_=function(e){if(this.currentMediaInfo_){var t=this.currentMediaInfo_,i=t.hasAudio,n=t.hasVideo,r=t.isMuxed,a="main"===this.loaderType_&&n,s=!this.audioDisabled_&&i&&!r
e.waitingOnAppends=0
if(e.hasAppendedData_){a&&e.waitingOnAppends++
s&&e.waitingOnAppends++
a&&this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this,e))
s&&this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this,e))}else{e.timingInfo||"number"!=typeof e.timestampOffset||(this.isPendingTimestampOffset_=!0)
e.timingInfo={start:0}
e.waitingOnAppends++
if(!this.isPendingTimestampOffset_){this.updateSourceBufferTimestampOffset_(e)
this.processMetadataQueue_()}this.checkAppendsDone_(e)}}else{this.error({message:"No starting media returned, likely due to an unsupported media format.",blacklistDuration:1/0})
this.trigger("error")}}
i.checkAppendsDone_=function(e){if(!this.checkForAbort_(e.requestId)){e.waitingOnAppends--
0===e.waitingOnAppends&&this.handleAppendsDone_()}}
i.checkForIllegalMediaSwitch=function(e){var t=(function(e,t,i){return"main"===e&&t&&i?i.hasAudio||i.hasVideo?t.hasVideo&&!i.hasVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!t.hasVideo&&i.hasVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null})(this.loaderType_,this.currentMediaInfo_,e)
if(t){this.error({message:t,blacklistDuration:1/0})
this.trigger("error")
return!0}return!1}
i.updateSourceBufferTimestampOffset_=function(e){if(null!==e.timestampOffset&&"number"==typeof e.timingInfo.start&&!e.changedTimestampOffset&&"main"===this.loaderType_){var t=!1
e.timestampOffset-=e.timingInfo.start
e.changedTimestampOffset=!0
if(e.timestampOffset!==this.sourceUpdater_.videoTimestampOffset()){this.sourceUpdater_.videoTimestampOffset(e.timestampOffset)
t=!0}if(e.timestampOffset!==this.sourceUpdater_.audioTimestampOffset()){this.sourceUpdater_.audioTimestampOffset(e.timestampOffset)
t=!0}t&&this.trigger("timestampoffset")}}
i.updateTimingInfoEnd_=function(e){e.timingInfo=e.timingInfo||{}
var t="main"===this.loaderType_&&this.currentMediaInfo_.hasVideo&&e.videoTimingInfo?e.videoTimingInfo:e.audioTimingInfo
t&&(e.timingInfo.end="number"==typeof t.end?t.end:t.start+e.duration)}
i.handleAppendsDone_=function(){this.pendingSegment_&&this.trigger("appendsdone")
if(this.pendingSegment_){var e=this.pendingSegment_
this.updateTimingInfoEnd_(e)
this.shouldSaveSegmentTimingInfo_&&this.syncController_.saveSegmentTimingInfo({segmentInfo:e,shouldSaveTimelineMapping:"main"===this.loaderType_})
this.logger_((function(e){var t=e.segment,i=t.start,n=t.end,r=e.playlist,a=r.mediaSequence,s=r.id,o=r.segments,l=void 0===o?[]:o,u=e.mediaIndex,c=e.timeline
return["appending ["+u+"] of ["+a+", "+(a+l.length)+"] from playlist ["+s+"]","["+i+" => "+n+"] in timeline ["+c+"]"].join(" ")})(e))
this.recordThroughput_(e)
this.pendingSegment_=null
this.state="READY"
if(e.isSyncRequest)this.trigger("syncinfoupdate")
else{this.addSegmentMetadataCue_(e)
this.fetchAtBuffer_=!0
if(this.currentTimeline_!==e.timeline){this.timelineChangeController_.lastTimelineChange({type:this.loaderType_,from:this.currentTimeline_,to:e.timeline})
"main"!==this.loaderType_||this.audioDisabled_||this.timelineChangeController_.lastTimelineChange({type:"audio",from:this.currentTimeline_,to:e.timeline})}this.currentTimeline_=e.timeline
this.trigger("syncinfoupdate")
var t=e.segment
if(t.end&&this.currentTime_()-t.end>3*e.playlist.targetDuration)this.resetEverything()
else{null!==this.mediaIndex&&this.trigger("bandwidthupdate")
this.trigger("progress")
this.mediaIndex=e.mediaIndex
this.isEndOfStream_(e.mediaIndex,e.playlist)&&this.endOfStream()
this.trigger("appended")
this.paused()||this.monitorBuffer_()}}}else{this.state="READY"
this.paused()||this.monitorBuffer_()}}
i.recordThroughput_=function(e){var t=this.throughput.rate,i=Date.now()-e.endOfAllRequests+1,n=Math.floor(e.byteLength/i*8*1e3)
this.throughput.rate+=(n-t)/++this.throughput.count}
i.addSegmentMetadataCue_=function(e){if(this.segmentMetadataTrack_){var t=e.segment,i=t.start,n=t.end
if(xd(i)&&xd(n)){Ad(i,n,this.segmentMetadataTrack_)
var r=a.WebKitDataCue||a.VTTCue,s={custom:t.custom,dateTimeObject:t.dateTimeObject,dateTimeString:t.dateTimeString,bandwidth:e.playlist.attributes.BANDWIDTH,resolution:e.playlist.attributes.RESOLUTION,codecs:e.playlist.attributes.CODECS,byteLength:e.byteLength,uri:e.uri,timeline:e.timeline,playlist:e.playlist.id,start:i,end:n},o=new r(i,n,JSON.stringify(s))
o.value=s
this.segmentMetadataTrack_.addCue(o)}}}
return t})(Ru.EventTarget)
function Nd(){}var Md,Ud=function(e){return"string"!=typeof e?e:e.replace(/./,(function(e){return e.toUpperCase()}))},Bd=["video","audio"],jd=function(e,t){var i=t[e+"Buffer"]
return i&&i.updating||t.queuePending[e]},Fd=function e(t,i){if(0!==i.queue.length){var n=0,r=i.queue[n]
if("mediaSource"!==r.type){if("mediaSource"!==t&&i.started_&&"closed"!==i.mediaSource.readyState&&!jd(t,i)){if(r.type!==t){if(null===(n=(function(e,t){for(var i=0;i<t.length;i++){var n=t[i]
if("mediaSource"===n.type)return null
if(n.type===e)return i}return null})(t,i.queue)))return
r=i.queue[n]}i.queue.splice(n,1)
r.action(t,i)
r.doneFn?i.queuePending[t]=r:e(t,i)}}else if(!i.updating()&&"closed"!==i.mediaSource.readyState){i.queue.shift()
r.action(i)
r.doneFn&&r.doneFn()
e("audio",i)
e("video",i)}}},Vd=function(e,t){var i=t[e+"Buffer"],n=Ud(e)
if(i){i.removeEventListener("updateend",t["on"+n+"UpdateEnd_"])
i.removeEventListener("error",t["on"+n+"Error_"])
t.codecs[e]=null
t[e+"Buffer"]=null}},Hd=function(e,t){return e&&t&&-1!==Array.prototype.indexOf.call(e.sourceBuffers,t)},qd=function(e,t){return function(i,n){var r=n[i+"Buffer"]
if(Hd(n.mediaSource,r)){n.logger_("Appending segment "+t.mediaIndex+"'s "+e.length+" bytes to "+i+"Buffer")
r.appendBuffer(e)}}},Wd=function(e,t){return function(i,n){var r=n[i+"Buffer"]
if(Hd(n.mediaSource,r)){n.logger_("Removing "+e+" to "+t+" from "+i+"Buffer")
r.remove(e,t)}}},zd=function(e){return function(t,i){var n=i[t+"Buffer"]
if(Hd(i.mediaSource,n)){i.logger_("Setting "+t+"timestampOffset to "+e)
n.timestampOffset=e}}},Gd=function(e){return function(t,i){e()}},Kd=function(e){return function(t){if("open"===t.mediaSource.readyState){t.logger_("Calling mediaSource endOfStream("+(e||"")+")")
try{t.mediaSource.endOfStream(e)}catch(Kg){Ru.log.warn("Failed to call media source endOfStream",Kg)}}}},Xd=function(e){return function(t){t.logger_("Setting mediaSource duration to "+e)
try{t.mediaSource.duration=e}catch(Kg){Ru.log.warn("Failed to set media source duration",Kg)}}},Yd=function(){return function(e,t){if("open"===t.mediaSource.readyState){var i=t[e+"Buffer"]
if(Hd(t.mediaSource,i)){t.logger_("calling abort on "+e+"Buffer")
try{i.abort()}catch(Kg){Ru.log.warn("Failed to abort on "+e+"Buffer",Kg)}}}}},Qd=function(e,t){return function(i){var n=Ud(e),r=gr(t)
i.logger_("Adding "+e+"Buffer with codec "+t+" to mediaSource")
var a=i.mediaSource.addSourceBuffer(r)
a.addEventListener("updateend",i["on"+n+"UpdateEnd_"])
a.addEventListener("error",i["on"+n+"Error_"])
i.codecs[e]=t
i[e+"Buffer"]=a}},$d=function(e){return function(t){var i=t[e+"Buffer"]
Vd(e,t)
if(Hd(t.mediaSource,i)){t.logger_("Removing "+e+"Buffer with codec "+t.codecs[e]+" from mediaSource")
try{t.mediaSource.removeSourceBuffer(i)}catch(Kg){Ru.log.warn("Failed to removeSourceBuffer "+e+"Buffer",Kg)}}}},Jd=function(e){return function(t,i){var n=i[t+"Buffer"],r=gr(e)
if(Hd(i.mediaSource,n)&&i.codecs[t]!==e){i.logger_("changing "+t+"Buffer codec from "+i.codecs[t]+" to "+e)
n.changeType(r)
i.codecs[t]=e}}},Zd=function(e){var t=e.type,i=e.sourceUpdater,n=e.action,r=e.doneFn,a=e.name
i.queue.push({type:t,action:n,doneFn:r,name:a})
Fd(t,i)},eh=function(e,t){return function(i){if(t.queuePending[e]){var n=t.queuePending[e].doneFn
t.queuePending[e]=null
n&&n(t[e+"Error_"])}Fd(e,t)}},th=(function(e){U(t,e)
function t(t){var i;(i=e.call(this)||this).mediaSource=t
i.sourceopenListener_=function(){return Fd("mediaSource",M(i))}
i.mediaSource.addEventListener("sourceopen",i.sourceopenListener_)
i.logger_=bd("SourceUpdater")
i.audioTimestampOffset_=0
i.videoTimestampOffset_=0
i.queue=[]
i.queuePending={audio:null,video:null}
i.delayedAudioAppendQueue_=[]
i.videoAppendQueued_=!1
i.codecs={}
i.onVideoUpdateEnd_=eh("video",M(i))
i.onAudioUpdateEnd_=eh("audio",M(i))
i.onVideoError_=function(e){i.videoError_=e}
i.onAudioError_=function(e){i.audioError_=e}
i.started_=!1
return i}var i=t.prototype
i.ready=function(){return this.started_}
i.createSourceBuffers=function(e){if(!this.ready()){this.addOrChangeSourceBuffers(e)
this.started_=!0
this.trigger("ready")}}
i.addSourceBuffer=function(e,t){Zd({type:"mediaSource",sourceUpdater:this,action:Qd(e,t),name:"addSourceBuffer"})}
i.abort=function(e){Zd({type:e,sourceUpdater:this,action:Yd(e),name:"abort"})}
i.removeSourceBuffer=function(e){this.canRemoveSourceBuffer()?Zd({type:"mediaSource",sourceUpdater:this,action:$d(e),name:"removeSourceBuffer"}):Ru.log.error("removeSourceBuffer is not supported!")}
i.canRemoveSourceBuffer=function(){return!Ru.browser.IE_VERSION&&a.MediaSource&&a.MediaSource.prototype&&"function"==typeof a.MediaSource.prototype.removeSourceBuffer}
t.canChangeType=function(){return a.SourceBuffer&&a.SourceBuffer.prototype&&"function"==typeof a.SourceBuffer.prototype.changeType}
i.canChangeType=function(){return this.constructor.canChangeType()}
i.changeType=function(e,t){this.canChangeType()?Zd({type:e,sourceUpdater:this,action:Jd(t),name:"changeType"}):Ru.log.error("changeType is not supported!")}
i.addOrChangeSourceBuffers=function(e){var t=this
if(!e||"object"!=typeof e||0===Object.keys(e).length)throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs")
Object.keys(e).forEach((function(i){var n=e[i]
if(!t.ready())return t.addSourceBuffer(i,n)
t.canChangeType()&&t.changeType(i,n)}))}
i.appendBuffer=function(e,t){var i=this,n=e.segmentInfo,r=e.type,a=e.bytes
this.processedAppend_=!0
if("audio"!==r||!this.videoBuffer||this.videoAppendQueued_){Zd({type:r,sourceUpdater:this,action:qd(a,n||{mediaIndex:-1}),doneFn:t,name:"appendBuffer"})
if("video"===r){this.videoAppendQueued_=!0
if(!this.delayedAudioAppendQueue_.length)return
var s=this.delayedAudioAppendQueue_.slice()
this.logger_("queuing delayed audio "+s.length+" appendBuffers")
this.delayedAudioAppendQueue_.length=0
s.forEach((function(e){i.appendBuffer.apply(i,e)}))}}else{this.delayedAudioAppendQueue_.push([e,t])
this.logger_("delayed audio append of "+a.length+" until video append")}}
i.audioBuffered=function(){return Hd(this.mediaSource,this.audioBuffer)&&this.audioBuffer.buffered?this.audioBuffer.buffered:Ru.createTimeRange()}
i.videoBuffered=function(){return Hd(this.mediaSource,this.videoBuffer)&&this.videoBuffer.buffered?this.videoBuffer.buffered:Ru.createTimeRange()}
i.buffered=function(){var e=Hd(this.mediaSource,this.videoBuffer)?this.videoBuffer:null,t=Hd(this.mediaSource,this.audioBuffer)?this.audioBuffer:null
return t&&!e?this.audioBuffered():e&&!t?this.videoBuffered():(function(e,t){var i=null,n=null,r=0,a=[],s=[]
if(!(e&&e.length&&t&&t.length))return Ru.createTimeRange()
for(var o=e.length;o--;){a.push({time:e.start(o),type:"start"})
a.push({time:e.end(o),type:"end"})}o=t.length
for(;o--;){a.push({time:t.start(o),type:"start"})
a.push({time:t.end(o),type:"end"})}a.sort((function(e,t){return e.time-t.time}))
for(o=0;o<a.length;o++){"start"===a[o].type?2==++r&&(i=a[o].time):"end"===a[o].type&&1==--r&&(n=a[o].time)
if(null!==i&&null!==n){s.push([i,n])
i=null
n=null}}return Ru.createTimeRanges(s)})(this.audioBuffered(),this.videoBuffered())}
i.setDuration=function(e,t){void 0===t&&(t=Nd)
Zd({type:"mediaSource",sourceUpdater:this,action:Xd(e),name:"duration",doneFn:t})}
i.endOfStream=function(e,t){void 0===e&&(e=null)
void 0===t&&(t=Nd)
"string"!=typeof e&&(e=void 0)
Zd({type:"mediaSource",sourceUpdater:this,action:Kd(e),name:"endOfStream",doneFn:t})}
i.removeAudio=function(e,t,i){void 0===i&&(i=Nd)
this.audioBuffered().length&&0!==this.audioBuffered().end(0)?Zd({type:"audio",sourceUpdater:this,action:Wd(e,t),doneFn:i,name:"remove"}):i()}
i.removeVideo=function(e,t,i){void 0===i&&(i=Nd)
this.videoBuffered().length&&0!==this.videoBuffered().end(0)?Zd({type:"video",sourceUpdater:this,action:Wd(e,t),doneFn:i,name:"remove"}):i()}
i.updating=function(){return!(!jd("audio",this)&&!jd("video",this))}
i.audioTimestampOffset=function(e){if(void 0!==e&&this.audioBuffer&&this.audioTimestampOffset_!==e){Zd({type:"audio",sourceUpdater:this,action:zd(e),name:"timestampOffset"})
this.audioTimestampOffset_=e}return this.audioTimestampOffset_}
i.videoTimestampOffset=function(e){if(void 0!==e&&this.videoBuffer&&this.videoTimestampOffset!==e){Zd({type:"video",sourceUpdater:this,action:zd(e),name:"timestampOffset"})
this.videoTimestampOffset_=e}return this.videoTimestampOffset_}
i.audioQueueCallback=function(e){this.audioBuffer&&Zd({type:"audio",sourceUpdater:this,action:Gd(e),name:"callback"})}
i.videoQueueCallback=function(e){this.videoBuffer&&Zd({type:"video",sourceUpdater:this,action:Gd(e),name:"callback"})}
i.dispose=function(){var e=this
this.trigger("dispose")
Bd.forEach((function(t){e.abort(t)
e.canRemoveSourceBuffer()?e.removeSourceBuffer(t):e[t+"QueueCallback"]((function(){return Vd(t,e)}))}))
this.videoAppendQueued_=!1
this.delayedAudioAppendQueue_.length=0
this.sourceopenListener_&&this.mediaSource.removeEventListener("sourceopen",this.sourceopenListener_)
this.off()}
return t})(Ru.EventTarget),ih=function(e){return decodeURIComponent(escape(String.fromCharCode.apply(null,e)))},nh=new Uint8Array("\n\n".split("").map((function(e){return e.charCodeAt(0)}))),rh=(function(e){U(t,e)
function t(t,i){var n
void 0===i&&(i={});(n=e.call(this,t,i)||this).handlePartialData_=!1
n.mediaSource_=null
n.subtitlesTrack_=null
n.loaderType_="subtitle"
n.featuresNativeTextTracks_=t.featuresNativeTextTracks
n.shouldSaveSegmentTimingInfo_=!1
return n}var i=t.prototype
i.createTransmuxer_=function(){return null}
i.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return Ru.createTimeRanges()
var e=this.subtitlesTrack_.cues,t=e[0].startTime,i=e[e.length-1].startTime
return Ru.createTimeRanges([[t,i]])}
i.initSegmentForMap=function(e,t){void 0===t&&(t=!1)
if(!e)return null
var i=Cc(e),n=this.initSegments_[i]
if(t&&!n&&e.bytes){var r=nh.byteLength+e.bytes.byteLength,a=new Uint8Array(r)
a.set(e.bytes)
a.set(nh,e.bytes.byteLength)
this.initSegments_[i]=n={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:a}}return n||e}
i.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()}
i.init_=function(){this.state="READY"
this.resetEverything()
return this.monitorBuffer_()}
i.track=function(e){if(void 0===e)return this.subtitlesTrack_
this.subtitlesTrack_=e
"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()
return this.subtitlesTrack_}
i.remove=function(e,t){Ad(e,t,this.subtitlesTrack_)}
i.fillBuffer_=function(){var e=this
this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()))
var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_)
if(t=this.skipEmptySegments_(t))if(null!==this.syncController_.timestampOffsetForTimeline(t.timeline))this.loadSegment_(t)
else{this.syncController_.one("timestampoffset",(function(){e.state="READY"
e.paused()||e.monitorBuffer_()}))
this.state="WAITING_ON_TIMELINE"}}
i.skipEmptySegments_=function(e){for(;e&&e.segment.empty;)e=this.generateSegmentInfo_(e.playlist,e.mediaIndex+1,e.startOfSegment+e.duration,e.isSyncRequest)
return e}
i.stopForError=function(e){this.error(e)
this.state="READY"
this.pause()
this.trigger("error")}
i.segmentRequestFinished_=function(e,t,i){var n=this
if(this.subtitlesTrack_){this.saveTransferStats_(t.stats)
if(this.pendingSegment_)if(e){e.code===$c&&this.handleTimeout_()
e.code===Jc?this.mediaRequestsAborted+=1:this.mediaRequestsErrored+=1
this.stopForError(e)}else{this.saveBandwidthRelatedStats_(t.stats)
this.state="APPENDING"
this.trigger("appending")
var r=this.pendingSegment_,s=r.segment
s.map&&(s.map.bytes=t.map.bytes)
r.bytes=t.bytes
if("function"!=typeof a.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var o,l=function(){n.subtitlesTrack_.tech_.off("vttjsloaded",o)
n.stopForError({message:"Error loading vtt.js"})}
o=function(){n.subtitlesTrack_.tech_.off("vttjserror",l)
n.segmentRequestFinished_(e,t,i)}
this.state="WAITING_ON_VTTJS"
this.subtitlesTrack_.tech_.one("vttjsloaded",o)
this.subtitlesTrack_.tech_.one("vttjserror",l)}else{s.requested=!0
try{this.parseVTTCues_(r)}catch(Kg){this.stopForError({message:Kg.message})
return}this.updateTimeMapping_(r,this.syncController_.timelines[r.timeline],this.playlist_)
r.cues.length?r.timingInfo={start:r.cues[0].startTime,end:r.cues[r.cues.length-1].endTime}:r.timingInfo={start:r.startOfSegment,end:r.startOfSegment+r.duration}
if(r.isSyncRequest){this.trigger("syncinfoupdate")
this.pendingSegment_=null
this.state="READY"}else{r.byteLength=r.bytes.byteLength
this.mediaSecondsLoaded+=s.duration
r.cues.forEach((function(e){n.remove(e.startTime,e.endTime)
n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_?new a.VTTCue(e.startTime,e.endTime,e.text):e)}))
this.handleAppendsDone_()}}}else{this.state="READY"
this.mediaRequestsAborted+=1}}else this.state="READY"}
i.handleData_=function(){}
i.updateTimingInfoEnd_=function(){}
i.parseVTTCues_=function(e){var t,i=!1
if("function"==typeof a.TextDecoder)t=new a.TextDecoder("utf8")
else{t=a.WebVTT.StringDecoder()
i=!0}var n=new a.WebVTT.Parser(a,a.vttjs,t)
e.cues=[]
e.timestampmap={MPEGTS:0,LOCAL:0}
n.oncue=e.cues.push.bind(e.cues)
n.ontimestampmap=function(t){e.timestampmap=t}
n.onparsingerror=function(e){Ru.log.warn("Error encountered when parsing cues: "+e.message)}
if(e.segment.map){var r=e.segment.map.bytes
i&&(r=ih(r))
n.parse(r)}var s=e.bytes
i&&(s=ih(s))
n.parse(s)
n.flush()}
i.updateTimeMapping_=function(e,t,i){var n=e.segment
if(t)if(e.cues.length){var r=e.timestampmap,a=r.MPEGTS/Fn-r.LOCAL+t.mapping
e.cues.forEach((function(e){e.startTime+=a
e.endTime+=a}))
if(!i.syncInfo){var s=e.cues[0].startTime,o=e.cues[e.cues.length-1].startTime
i.syncInfo={mediaSequence:i.mediaSequence+e.mediaIndex,time:Math.min(s,o-n.duration)}}}else n.empty=!0}
return t})(Rd),ah=function(e,t){for(var i=e.cues,n=0;n<i.length;n++){var r=i[n]
if(t>=r.adStartTime&&t<=r.adEndTime)return r}return null},sh=[{name:"VOD",run:function(e,t,i,n,r){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(e,t,i,n,r){if(!e.datetimeToDisplayTime)return null
var a=t.segments||[],s=null,o=null
r=r||0
for(var l=0;l<a.length;l++){var u=a[l]
if(u.dateTimeObject){var c=u.dateTimeObject.getTime()/1e3+e.datetimeToDisplayTime,d=Math.abs(r-c)
if(null!==o&&(0===d||o<d))break
o=d
s={time:c,segmentIndex:l}}}return s}},{name:"Segment",run:function(e,t,i,n,r){var a=t.segments||[],s=null,o=null
r=r||0
for(var l=0;l<a.length;l++){var u=a[l]
if(u.timeline===n&&void 0!==u.start){var c=Math.abs(r-u.start)
if(null!==o&&o<c)break
if(!s||null===o||o>=c){o=c
s={time:u.start,segmentIndex:l}}}}return s}},{name:"Discontinuity",run:function(e,t,i,n,r){var a=null
r=r||0
if(t.discontinuityStarts&&t.discontinuityStarts.length)for(var s=null,o=0;o<t.discontinuityStarts.length;o++){var l=t.discontinuityStarts[o],u=t.discontinuitySequence+o+1,c=e.discontinuities[u]
if(c){var d=Math.abs(r-c.time)
if(null!==s&&s<d)break
if(!a||null===s||s>=d){s=d
a={time:c.time,segmentIndex:l}}}}return a}},{name:"Playlist",run:function(e,t,i,n,r){if(t.syncInfo){return{time:t.syncInfo.time,segmentIndex:t.syncInfo.mediaSequence-t.mediaSequence}}return null}}],oh=(function(e){U(t,e)
function t(t){var i;(i=e.call(this)||this).timelines=[]
i.discontinuities=[]
i.datetimeToDisplayTime=null
i.logger_=bd("SyncController")
return i}var i=t.prototype
i.getSyncPoint=function(e,t,i,n){var r=this.runStrategies_(e,t,i,n)
return r.length?this.selectSyncPoint_(r,{key:"time",value:n}):null}
i.getExpiredTime=function(e,t){if(!e||!e.segments)return null
var i=this.runStrategies_(e,t,e.discontinuitySequence,0)
if(!i.length)return null
var n=this.selectSyncPoint_(i,{key:"segmentIndex",value:0})
n.segmentIndex>0&&(n.time*=-1)
return Math.abs(n.time+sc(e,n.segmentIndex,0))}
i.runStrategies_=function(e,t,i,n){for(var r=[],a=0;a<sh.length;a++){var s=sh[a],o=s.run(this,e,t,i,n)
if(o){o.strategy=s.name
r.push({strategy:s.name,syncPoint:o})}}return r}
i.selectSyncPoint_=function(e,t){for(var i=e[0].syncPoint,n=Math.abs(e[0].syncPoint[t.key]-t.value),r=e[0].strategy,a=1;a<e.length;a++){var s=Math.abs(e[a].syncPoint[t.key]-t.value)
if(s<n){n=s
i=e[a].syncPoint
r=e[a].strategy}}this.logger_("syncPoint for ["+t.key+": "+t.value+"] chosen with strategy ["+r+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]")
return i}
i.saveExpiredSegmentInfo=function(e,t){for(var i=t.mediaSequence-e.mediaSequence-1;i>=0;i--){var n=e.segments[i]
if(n&&void 0!==n.start){t.syncInfo={mediaSequence:e.mediaSequence+i,time:n.start}
this.logger_("playlist refresh sync: [time:"+t.syncInfo.time+", mediaSequence: "+t.syncInfo.mediaSequence+"]")
this.trigger("syncinfoupdate")
break}}}
i.setDateTimeMapping=function(e){if(!this.datetimeToDisplayTime&&e.segments&&e.segments.length&&e.segments[0].dateTimeObject){var t=e.segments[0].dateTimeObject.getTime()/1e3
this.datetimeToDisplayTime=-t}}
i.saveSegmentTimingInfo=function(e){var t=e.segmentInfo,i=e.shouldSaveTimelineMapping
if(this.calculateSegmentTimeMapping_(t,t.timingInfo,i)){this.saveDiscontinuitySyncInfo_(t)
t.playlist.syncInfo||(t.playlist.syncInfo={mediaSequence:t.playlist.mediaSequence+t.mediaIndex,time:t.segment.start})}}
i.timestampOffsetForTimeline=function(e){return void 0===this.timelines[e]?null:this.timelines[e].time}
i.mappingForTimeline=function(e){return void 0===this.timelines[e]?null:this.timelines[e].mapping}
i.calculateSegmentTimeMapping_=function(e,t,i){var n=e.segment,r=this.timelines[e.timeline]
if(null!==e.timestampOffset){r={time:e.startOfSegment,mapping:e.startOfSegment-t.start}
if(i){this.timelines[e.timeline]=r
this.trigger("timestampoffset")
this.logger_("time mapping for timeline "+e.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]")}n.start=e.startOfSegment
n.end=t.end+r.mapping}else{if(!r)return!1
n.start=t.start+r.mapping
n.end=t.end+r.mapping}return!0}
i.saveDiscontinuitySyncInfo_=function(e){var t=e.playlist,i=e.segment
if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0}
else if(t.discontinuityStarts&&t.discontinuityStarts.length)for(var n=0;n<t.discontinuityStarts.length;n++){var r=t.discontinuityStarts[n],a=t.discontinuitySequence+n+1,s=r-e.mediaIndex,o=Math.abs(s)
if(!this.discontinuities[a]||this.discontinuities[a].accuracy>o){var l=void 0
l=s<0?i.start-sc(t,e.mediaIndex,r):i.end+sc(t,e.mediaIndex+1,r)
this.discontinuities[a]={time:l,accuracy:o}}}}
i.dispose=function(){this.trigger("dispose")
this.off()}
return t})(Ru.EventTarget),lh=(function(e){U(t,e)
function t(){var t;(t=e.call(this)||this).pendingTimelineChanges_={}
t.lastTimelineChanges_={}
return t}var i=t.prototype
i.clearPendingTimelineChange=function(e){this.pendingTimelineChanges_[e]=null
this.trigger("pendingtimelinechange")}
i.pendingTimelineChange=function(e){var t=e.type,i=e.from,n=e.to
if("number"==typeof i&&"number"==typeof n){this.pendingTimelineChanges_[t]={type:t,from:i,to:n}
this.trigger("pendingtimelinechange")}return this.pendingTimelineChanges_[t]}
i.lastTimelineChange=function(e){var t=e.type,i=e.from,n=e.to
if("number"==typeof i&&"number"==typeof n){this.lastTimelineChanges_[t]={type:t,from:i,to:n}
delete this.pendingTimelineChanges_[t]
this.trigger("timelinechange")}return this.lastTimelineChanges_[t]}
i.dispose=function(){this.trigger("dispose")
this.pendingTimelineChanges_={}
this.lastTimelineChanges_={}
this.off()}
return t})(Ru.EventTarget),uh=new hd("./decrypter-worker.worker.js",function(e,t){var i=this;((function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i]
n.enumerable=n.enumerable||!1
n.configurable=!0
"value"in n&&(n.writable=!0)
Object.defineProperty(e,n.key,n)}}var t=function(t,i,n){i&&e(t.prototype,i)
n&&e(t,n)
return t}
var n=function(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
e.__proto__=t},r=(function(){function e(){this.listeners={}}var t=e.prototype
t.on=function(e,t){this.listeners[e]||(this.listeners[e]=[])
this.listeners[e].push(t)}
t.off=function(e,t){if(!this.listeners[e])return!1
var i=this.listeners[e].indexOf(t)
this.listeners[e]=this.listeners[e].slice(0)
this.listeners[e].splice(i,1)
return i>-1}
t.trigger=function(e){var t=this.listeners[e]
if(t)if(2===arguments.length)for(var i=t.length,n=0;n<i;++n)t[n].call(this,arguments[1])
else for(var r=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,r)}
t.dispose=function(){this.listeners={}}
t.pipe=function(e){this.on("data",(function(t){e.push(t)}))}
return e})()
var a=function(){var e,t,i,n,r,a,s,o,l=[[[],[],[],[],[]],[[],[],[],[],[]]],u=l[0],c=l[1],d=u[4],h=c[4],p=[],f=[]
for(e=0;e<256;e++)f[(p[e]=e<<1^283*(e>>7))^e]=e
for(t=i=0;!d[t];t^=n||1,i=f[i]||1){a=(a=i^i<<1^i<<2^i<<3^i<<4)>>8^255&a^99
d[t]=a
h[a]=t
o=16843009*p[r=p[n=p[t]]]^65537*r^257*n^16843008*t
s=257*p[a]^16843008*a
for(e=0;e<4;e++){u[e][t]=s=s<<24^s>>>8
c[e][a]=o=o<<24^o>>>8}}for(e=0;e<5;e++){u[e]=u[e].slice(0)
c[e]=c[e].slice(0)}return l},s=null,o=(function(){function e(e){s||(s=a())
this._tables=[[s[0][0].slice(),s[0][1].slice(),s[0][2].slice(),s[0][3].slice(),s[0][4].slice()],[s[1][0].slice(),s[1][1].slice(),s[1][2].slice(),s[1][3].slice(),s[1][4].slice()]]
var t,i,n,r=this._tables[0][4],o=this._tables[1],l=e.length,u=1
if(4!==l&&6!==l&&8!==l)throw new Error("Invalid aes key size")
var c=e.slice(0),d=[]
this._key=[c,d]
for(t=l;t<4*l+28;t++){n=c[t-1]
if(t%l==0||8===l&&t%l==4){n=r[n>>>24]<<24^r[n>>16&255]<<16^r[n>>8&255]<<8^r[255&n]
if(t%l==0){n=n<<8^n>>>24^u<<24
u=u<<1^283*(u>>7)}}c[t]=c[t-l]^n}for(i=0;t;i++,t--){n=c[3&i?t:t-4]
d[i]=t<=4||i<4?n:o[0][r[n>>>24]]^o[1][r[n>>16&255]]^o[2][r[n>>8&255]]^o[3][r[255&n]]}}e.prototype.decrypt=function(e,t,i,n,r,a){var s,o,l,u,c=this._key[1],d=e^c[0],h=n^c[1],p=i^c[2],f=t^c[3],m=c.length/4-2,g=4,v=this._tables[1],y=v[0],_=v[1],b=v[2],T=v[3],S=v[4]
for(u=0;u<m;u++){s=y[d>>>24]^_[h>>16&255]^b[p>>8&255]^T[255&f]^c[g]
o=y[h>>>24]^_[p>>16&255]^b[f>>8&255]^T[255&d]^c[g+1]
l=y[p>>>24]^_[f>>16&255]^b[d>>8&255]^T[255&h]^c[g+2]
f=y[f>>>24]^_[d>>16&255]^b[h>>8&255]^T[255&p]^c[g+3]
g+=4
d=s
h=o
p=l}for(u=0;u<4;u++){r[(3&-u)+a]=S[d>>>24]<<24^S[h>>16&255]<<16^S[p>>8&255]<<8^S[255&f]^c[g++]
s=d
d=h
h=p
p=f
f=s}}
return e})(),l=(function(e){n(t,e)
function t(){var t;(t=e.call(this,r)||this).jobs=[]
t.delay=1
t.timeout_=null
return t}var i=t.prototype
i.processJob_=function(){this.jobs.shift()()
this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null}
i.push=function(e){this.jobs.push(e)
this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))}
return t})(r),u=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},c=(function(){function e(t,i,n,r){var a=e.STEP,s=new Int32Array(t.buffer),o=new Uint8Array(t.byteLength),c=0
this.asyncStream_=new l
this.asyncStream_.push(this.decryptChunk_(s.subarray(c,c+a),i,n,o))
for(c=a;c<s.length;c+=a){n=new Uint32Array([u(s[c-4]),u(s[c-3]),u(s[c-2]),u(s[c-1])])
this.asyncStream_.push(this.decryptChunk_(s.subarray(c,c+a),i,n,o))}this.asyncStream_.push((function(){r(null,(e=o).subarray(0,e.byteLength-e[e.byteLength-1]))
var e}))}e.prototype.decryptChunk_=function(e,t,i,n){return function(){var r=(function(e,t,i){var n,r,a,s,l,c,d,h,p,f=new Int32Array(e.buffer,e.byteOffset,e.byteLength>>2),m=new o(Array.prototype.slice.call(t)),g=new Uint8Array(e.byteLength),v=new Int32Array(g.buffer)
n=i[0]
r=i[1]
a=i[2]
s=i[3]
for(p=0;p<f.length;p+=4){l=u(f[p])
c=u(f[p+1])
d=u(f[p+2])
h=u(f[p+3])
m.decrypt(l,c,d,h,v,p)
v[p]=u(v[p]^n)
v[p+1]=u(v[p+1]^r)
v[p+2]=u(v[p+2]^a)
v[p+3]=u(v[p+3]^s)
n=l
r=c
a=d
s=h}return g})(e,t,i)
n.set(r,e.byteOffset)}}
t(e,null,[{key:"STEP",get:function(){return 32e3}}])
return e})()
new function(e){e.onmessage=function(t){var i=t.data,n=new Uint8Array(i.encrypted.bytes,i.encrypted.byteOffset,i.encrypted.byteLength),r=new Uint32Array(i.key.bytes,i.key.byteOffset,i.key.byteLength/4),a=new Uint32Array(i.iv.bytes,i.iv.byteOffset,i.iv.byteLength/4)
new c(n,r,a,function(t,n){e.postMessage((function(e){var t={}
Object.keys(e).forEach((function(i){var n=e[i]
ArrayBuffer.isView(n)?t[i]={bytes:n.buffer,byteOffset:n.byteOffset,byteLength:n.byteLength}:t[i]=n}))
return t})({source:i.source,decrypted:n}),[n.buffer])})}}(i)}))()}),ch=function(e){var t=e.default?"main":"alternative"
e.characteristics&&e.characteristics.indexOf("public.accessibility.describes-video")>=0&&(t="main-desc")
return t},dh=function(e,t){e.abort()
e.pause()
if(t&&t.activePlaylistLoader){t.activePlaylistLoader.pause()
t.activePlaylistLoader=null}},hh=function(e,t){t.activePlaylistLoader=e
e.load()},ph={AUDIO:function(e,t){return function(){var i=t.segmentLoaders[e],n=t.mediaTypes[e],r=t.blacklistCurrentPlaylist
dh(i,n)
var a=n.activeTrack(),s=n.activeGroup(),o=(s.filter((function(e){return e.default}))[0]||s[0]).id,l=n.tracks[o]
if(a!==l){Ru.log.warn("Problem encountered loading the alternate audio track.Switching back to default.")
for(var u in n.tracks)n.tracks[u].enabled=n.tracks[u]===l
n.onTrackChanged()}else r({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(e,t){return function(){var i=t.segmentLoaders[e],n=t.mediaTypes[e]
Ru.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track.")
dh(i,n)
var r=n.activeTrack()
r&&(r.mode="disabled")
n.onTrackChanged()}}},fh={AUDIO:function(e,t,i){if(t){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[e]
t.on("loadedmetadata",(function(){var e=t.media()
a.playlist(e,r);(!n.paused()||e.endList&&"none"!==n.preload())&&a.load()}))
t.on("loadedplaylist",(function(){a.playlist(t.media(),r)
n.paused()||a.load()}))
t.on("error",ph[e](e,i))}},SUBTITLES:function(e,t,i){var n=i.tech,r=i.requestOptions,a=i.segmentLoaders[e],s=i.mediaTypes[e]
t.on("loadedmetadata",(function(){var e=t.media()
a.playlist(e,r)
a.track(s.activeTrack());(!n.paused()||e.endList&&"none"!==n.preload())&&a.load()}))
t.on("loadedplaylist",(function(){a.playlist(t.media(),r)
n.paused()||a.load()}))
t.on("error",ph[e](e,i))}},mh={AUDIO:function(e,t){var i=t.vhs,n=t.sourceType,r=t.segmentLoaders[e],a=t.requestOptions,s=t.master,o=s.mediaGroups,l=s.playlists,u=t.mediaTypes[e],c=u.groups,d=u.tracks,h=t.masterPlaylistLoader
o[e]&&0!==Object.keys(o[e]).length||(o[e]={main:{default:{default:!0}}})
var p=function(r){c[r]||(c[r]=[])
var s=l.filter((function(t){return t.attributes[e]===r})),u=function(l){var u=o[e][r][l]
!s.filter((function(e){return e.resolvedUri!==u.resolvedUri})).length&&s.length&&delete u.resolvedUri
var p=void 0
p="vhs-json"===n&&u.playlists?new $u(u.playlists[0],i,a):u.resolvedUri?new $u(u.resolvedUri,i,a):u.playlists&&"dash"===n?new Bc(u.playlists[0],i,a,h):null
u=Ru.mergeOptions({id:l,playlistLoader:p},u)
fh[e](e,u.playlistLoader,t)
c[r].push(u)
if(void 0===d[l]){var f=new Ru.AudioTrack({id:l,kind:ch(u),enabled:!1,language:u.language,default:u.default,label:l})
d[l]=f}}
for(var p in o[e][r])u(p)}
for(var f in o[e])p(f)
r.on("error",ph[e](e,t))},SUBTITLES:function(e,t){var i=t.tech,n=t.vhs,r=t.sourceType,a=t.segmentLoaders[e],s=t.requestOptions,o=t.master.mediaGroups,l=t.mediaTypes[e],u=l.groups,c=l.tracks,d=t.masterPlaylistLoader
for(var h in o[e]){u[h]||(u[h]=[])
for(var p in o[e][h])if(!o[e][h][p].forced){var f=o[e][h][p],m=void 0
"hls"===r?m=new $u(f.resolvedUri,n,s):"dash"===r?m=new Bc(f.playlists[0],n,s,d):"vhs-json"===r&&(m=new $u(f.playlists?f.playlists[0]:f.resolvedUri,n,s))
f=Ru.mergeOptions({id:p,playlistLoader:m},f)
fh[e](e,f.playlistLoader,t)
u[h].push(f)
if(void 0===c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",default:f.default&&f.autoselect,language:f.language,label:p},!1).track
c[p]=g}}}a.on("error",ph[e](e,t))},"CLOSED-CAPTIONS":function(e,t){var i=t.tech,n=t.master.mediaGroups,r=t.mediaTypes[e],a=r.groups,s=r.tracks
for(var o in n[e]){a[o]||(a[o]=[])
for(var l in n[e][o]){var u=n[e][o][l]
if(u.instreamId.match(/CC\d/)){a[o].push(Ru.mergeOptions({id:l},u))
if(void 0===s[l]){var c=i.addRemoteTextTrack({id:u.instreamId,kind:"captions",default:u.default&&u.autoselect,language:u.language,label:l},!1).track
s[l]=c}}}}}},gh={AUDIO:function(e,t){return function(){var i=t.mediaTypes[e].tracks
for(var n in i)if(i[n].enabled)return i[n]
return null}},SUBTITLES:function(e,t){return function(){var i=t.mediaTypes[e].tracks
for(var n in i)if("showing"===i[n].mode||"hidden"===i[n].mode)return i[n]
return null}}},vh=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach((function(t){mh[t](t,e)}))
var t=e.mediaTypes,i=e.masterPlaylistLoader,n=e.tech,r=e.vhs;["AUDIO","SUBTITLES"].forEach((function(i){t[i].activeGroup=(function(e,t){return function(i){var n=t.masterPlaylistLoader,r=t.mediaTypes[e].groups,a=n.media()
if(!a)return null
var s=null
a.attributes[e]&&(s=r[a.attributes[e]])
s=s||r.main
return void 0===i?s:null===i?null:s.filter((function(e){return e.id===i.id}))[0]||null}})(i,e)
t[i].activeTrack=gh[i](i,e)
t[i].onGroupChanged=(function(e,t){return function(){var i=t.segmentLoaders,n=i[e],r=i.main,a=t.mediaTypes[e],s=a.activeTrack(),o=a.activeGroup(s),l=a.activePlaylistLoader
dh(n,a)
if(o)if(o.playlistLoader){n.resyncLoader()
hh(o.playlistLoader,a)}else l&&r.resetEverything()}})(i,e)
t[i].onGroupChanging=(function(e,t){return function(){var i=t.segmentLoaders[e]
i.abort()
i.pause()}})(i,e)
t[i].onTrackChanged=(function(e,t){return function(){var i=t.segmentLoaders,n=i[e],r=i.main,a=t.mediaTypes[e],s=a.activeTrack(),o=a.activeGroup(s),l=a.activePlaylistLoader
dh(n,a)
if(o){if("AUDIO"===e){if(!o.playlistLoader){r.setAudio(!0)
r.resetEverything()
return}n.setAudio(!0)
r.setAudio(!1)}if(l!==o.playlistLoader){n.track&&n.track(s)
n.resetEverything()
hh(o.playlistLoader,a)}else hh(o.playlistLoader,a)}}})(i,e)}))
var a=t.AUDIO.activeGroup()
if(a){var s=(a.filter((function(e){return e.default}))[0]||a[0]).id
t.AUDIO.tracks[s].enabled=!0
t.AUDIO.onTrackChanged()}i.on("mediachange",(function(){["AUDIO","SUBTITLES"].forEach((function(e){return t[e].onGroupChanged()}))}))
i.on("mediachanging",(function(){["AUDIO","SUBTITLES"].forEach((function(e){return t[e].onGroupChanging()}))}))
var o=function(){t.AUDIO.onTrackChanged()
n.trigger({type:"usage",name:"vhs-audio-change"})
n.trigger({type:"usage",name:"hls-audio-change"})}
n.audioTracks().addEventListener("change",o)
n.remoteTextTracks().addEventListener("change",t.SUBTITLES.onTrackChanged)
r.on("dispose",(function(){n.audioTracks().removeEventListener("change",o)
n.remoteTextTracks().removeEventListener("change",t.SUBTITLES.onTrackChanged)}))
n.clearTracks("audio")
for(var l in t.AUDIO.tracks)n.audioTracks().addTrack(t.AUDIO.tracks[l])},yh=function(){var e={};["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach((function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:Nd,activeTrack:Nd,onGroupChanged:Nd,onTrackChanged:Nd}}))
return e},_h=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],bh=function(e){return this.audioSegmentLoader_[e]+this.mainSegmentLoader_[e]},Th=(function(e){U(t,e)
function t(t){var i
i=e.call(this)||this
var n=t.src,r=t.handleManifestRedirects,s=t.withCredentials,o=t.tech,l=t.bandwidth,u=t.externVhs,c=t.useCueTags,d=t.blacklistDuration,h=t.enableLowInitialPlaylist,p=t.sourceType,f=t.cacheEncryptionKeys,m=t.handlePartialData,g=t.experimentalBufferBasedABR
if(!n)throw new Error("A non-empty playlist URL or JSON manifest string is required")
Md=u
i.experimentalBufferBasedABR=Boolean(g)
i.withCredentials=s
i.tech_=o
i.vhs_=o.vhs
i.sourceType_=p
i.useCueTags_=c
i.blacklistDuration=d
i.enableLowInitialPlaylist=h
if(i.useCueTags_){i.cueTagsTrack_=i.tech_.addTextTrack("metadata","ad-cues")
i.cueTagsTrack_.inBandMetadataTrackDispatchType=""}i.requestOptions_={withCredentials:s,handleManifestRedirects:r,timeout:null}
i.on("error",i.pauseLoading)
i.mediaTypes_=yh()
i.mediaSource=new a.MediaSource
i.handleDurationChange_=i.handleDurationChange_.bind(M(i))
i.handleSourceOpen_=i.handleSourceOpen_.bind(M(i))
i.handleSourceEnded_=i.handleSourceEnded_.bind(M(i))
i.mediaSource.addEventListener("durationchange",i.handleDurationChange_)
i.mediaSource.addEventListener("sourceopen",i.handleSourceOpen_)
i.mediaSource.addEventListener("sourceended",i.handleSourceEnded_)
i.seekable_=Ru.createTimeRanges()
i.hasPlayed_=!1
i.syncController_=new oh(t)
i.segmentMetadataTrack_=o.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track
i.decrypter_=new uh
i.sourceUpdater_=new th(i.mediaSource)
i.inbandTextTracks_={}
i.timelineChangeController_=new lh
var v={vhs:i.vhs_,mediaSource:i.mediaSource,currentTime:i.tech_.currentTime.bind(i.tech_),seekable:function(){return i.seekable()},seeking:function(){return i.tech_.seeking()},duration:function(){return i.duration()},hasPlayed:function(){return i.hasPlayed_},goalBufferLength:function(){return i.goalBufferLength()},bandwidth:l,syncController:i.syncController_,decrypter:i.decrypter_,sourceType:i.sourceType_,inbandTextTracks:i.inbandTextTracks_,cacheEncryptionKeys:f,handlePartialData:m,sourceUpdater:i.sourceUpdater_,timelineChangeController:i.timelineChangeController_}
i.masterPlaylistLoader_="dash"===i.sourceType_?new Bc(n,i.vhs_,i.requestOptions_):new $u(n,i.vhs_,i.requestOptions_)
i.setupMasterPlaylistLoaderListeners_()
i.mainSegmentLoader_=new Rd(Ru.mergeOptions(v,{segmentMetadataTrack:i.segmentMetadataTrack_,loaderType:"main"}),t)
i.audioSegmentLoader_=new Rd(Ru.mergeOptions(v,{loaderType:"audio"}),t)
i.subtitleSegmentLoader_=new rh(Ru.mergeOptions(v,{loaderType:"vtt",featuresNativeTextTracks:i.tech_.featuresNativeTextTracks}),t)
i.setupSegmentLoaderListeners_()
if(i.experimentalBufferBasedABR){i.startABRTimer_()
i.tech_.on("pause",(function(){return i.stopABRTimer_()}))
i.tech_.on("play",(function(){return i.startABRTimer_()}))}_h.forEach((function(e){i[e+"_"]=bh.bind(M(i),e)}))
i.logger_=bd("MPC")
i.triggeredFmp4Usage=!1
i.masterPlaylistLoader_.load()
return i}var i=t.prototype
i.checkABR_=function(){var e=this.selectPlaylist()
this.shouldSwitchToMedia_(e)&&this.masterPlaylistLoader_.media(e)}
i.startABRTimer_=function(){var e=this
this.stopABRTimer_()
this.abrTimer_=a.setInterval((function(){return e.checkABR_()}),250)}
i.stopABRTimer_=function(){if(!this.tech_.scrubbing||!this.tech_.scrubbing()){a.clearInterval(this.abrTimer_)
this.abrTimer_=null}}
i.setupMasterPlaylistLoaderListeners_=function(){var e=this
this.masterPlaylistLoader_.on("loadedmetadata",(function(){var t=e.masterPlaylistLoader_.media(),i=1.5*t.targetDuration*1e3
pc(e.masterPlaylistLoader_.master,e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i
if(t.endList&&"none"!==e.tech_.preload()){e.mainSegmentLoader_.playlist(t,e.requestOptions_)
e.mainSegmentLoader_.load()}vh({sourceType:e.sourceType_,segmentLoaders:{AUDIO:e.audioSegmentLoader_,SUBTITLES:e.subtitleSegmentLoader_,main:e.mainSegmentLoader_},tech:e.tech_,requestOptions:e.requestOptions_,masterPlaylistLoader:e.masterPlaylistLoader_,vhs:e.vhs_,master:e.master(),mediaTypes:e.mediaTypes_,blacklistCurrentPlaylist:e.blacklistCurrentPlaylist.bind(e)})
e.triggerPresenceUsage_(e.master(),t)
e.setupFirstPlay()
!e.mediaTypes_.AUDIO.activePlaylistLoader||e.mediaTypes_.AUDIO.activePlaylistLoader.media()?e.trigger("selectedinitialmedia"):e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata",(function(){e.trigger("selectedinitialmedia")}))}))
this.masterPlaylistLoader_.on("loadedplaylist",(function(){var t=e.masterPlaylistLoader_.media()
if(!t){e.excludeUnsupportedVariants_()
var i
e.enableLowInitialPlaylist&&(i=e.selectInitialPlaylist())
i||(i=e.selectPlaylist())
if(!i||!e.shouldSwitchToMedia_(i))return
e.initialMedia_=i
e.masterPlaylistLoader_.media(e.initialMedia_)
if(!("vhs-json"===e.sourceType_&&e.initialMedia_.segments))return
t=e.initialMedia_}e.handleUpdatedMediaPlaylist(t)}))
this.masterPlaylistLoader_.on("error",(function(){e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)}))
this.masterPlaylistLoader_.on("mediachanging",(function(){e.mainSegmentLoader_.abort()
e.mainSegmentLoader_.pause()}))
this.masterPlaylistLoader_.on("mediachange",(function(){var t=e.masterPlaylistLoader_.media(),i=1.5*t.targetDuration*1e3
pc(e.masterPlaylistLoader_.master,e.masterPlaylistLoader_.media())?e.requestOptions_.timeout=0:e.requestOptions_.timeout=i
e.mainSegmentLoader_.playlist(t,e.requestOptions_)
e.mainSegmentLoader_.load()
e.tech_.trigger({type:"mediachange",bubbles:!0})}))
this.masterPlaylistLoader_.on("playlistunchanged",(function(){var t=e.masterPlaylistLoader_.media()
if(e.stuckAtPlaylistEnd_(t)){e.blacklistCurrentPlaylist({message:"Playlist no longer updating."})
e.tech_.trigger("playliststuck")}}))
this.masterPlaylistLoader_.on("renditiondisabled",(function(){e.tech_.trigger({type:"usage",name:"vhs-rendition-disabled"})
e.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}))
this.masterPlaylistLoader_.on("renditionenabled",(function(){e.tech_.trigger({type:"usage",name:"vhs-rendition-enabled"})
e.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})}))}
i.handleUpdatedMediaPlaylist=function(e){this.useCueTags_&&this.updateAdCues_(e)
this.mainSegmentLoader_.playlist(e,this.requestOptions_)
this.updateDuration(!e.endList)
if(!this.tech_.paused()){this.mainSegmentLoader_.load()
this.audioSegmentLoader_&&this.audioSegmentLoader_.load()}}
i.triggerPresenceUsage_=function(e,t){var i=e.mediaGroups||{},n=!0,r=Object.keys(i.AUDIO)
for(var a in i.AUDIO)for(var s in i.AUDIO[a]){i.AUDIO[a][s].uri||(n=!1)}if(n){this.tech_.trigger({type:"usage",name:"vhs-demuxed"})
this.tech_.trigger({type:"usage",name:"hls-demuxed"})}if(Object.keys(i.SUBTITLES).length){this.tech_.trigger({type:"usage",name:"vhs-webvtt"})
this.tech_.trigger({type:"usage",name:"hls-webvtt"})}if(Md.Playlist.isAes(t)){this.tech_.trigger({type:"usage",name:"vhs-aes"})
this.tech_.trigger({type:"usage",name:"hls-aes"})}if(r.length&&Object.keys(i.AUDIO[r[0]]).length>1){this.tech_.trigger({type:"usage",name:"vhs-alternate-audio"})
this.tech_.trigger({type:"usage",name:"hls-alternate-audio"})}if(this.useCueTags_){this.tech_.trigger({type:"usage",name:"vhs-playlist-cue-tags"})
this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})}}
i.shouldSwitchToMedia_=function(e){var t=this.masterPlaylistLoader_.media(),i=this.tech_.buffered()
return (function(e){var t=e.currentPlaylist,i=e.nextPlaylist,n=e.forwardBuffer,r=e.bufferLowWaterLine,a=e.bufferHighWaterLine,s=e.duration,o=e.experimentalBufferBasedABR,l=e.log
if(!i){Ru.log.warn("We received no playlist to switch to. Please check your stream.")
return!1}var u="allowing switch "+(t&&t.id||"null")+" -> "+i.id
if(!t||!t.endList){l(u+" as current playlist "+(t?"is live":"is not set"))
return!0}if(i.id===t.id)return!1
var c=o?jc.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:jc.MAX_BUFFER_LOW_WATER_LINE
if(s<c){l(u+" as duration < max low water line ("+s+" < "+c+")")
return!0}var d=i.attributes.BANDWIDTH,h=t.attributes.BANDWIDTH
if(d<h&&(!o||n<a)){var p=u+" as next bandwidth < current bandwidth ("+d+" < "+h+")"
o&&(p+=" and forwardBuffer < bufferHighWaterLine ("+n+" < "+a+")")
l(p)
return!0}if((!o||d>h)&&n>=r){var f=u+" as forwardBuffer >= bufferLowWaterLine ("+n+" >= "+r+")"
o&&(f+=" and next bandwidth > current bandwidth ("+d+" > "+h+")")
l(f)
return!0}l("not "+u+" as no switching criteria met")
return!1})({currentPlaylist:t,nextPlaylist:e,forwardBuffer:i.length?i.end(i.length-1)-this.tech_.currentTime():0,bufferLowWaterLine:this.bufferLowWaterLine(),bufferHighWaterLine:this.bufferHighWaterLine(),duration:this.duration(),experimentalBufferBasedABR:this.experimentalBufferBasedABR,log:this.logger_})}
i.setupSegmentLoaderListeners_=function(){var e=this
if(!this.experimentalBufferBasedABR){this.mainSegmentLoader_.on("bandwidthupdate",(function(){var t=e.selectPlaylist()
e.shouldSwitchToMedia_(t)&&e.masterPlaylistLoader_.media(t)
e.tech_.trigger("bandwidthupdate")}))
this.mainSegmentLoader_.on("progress",(function(){e.trigger("progress")}))}this.mainSegmentLoader_.on("error",(function(){e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())}))
this.mainSegmentLoader_.on("appenderror",(function(){e.error=e.mainSegmentLoader_.error_
e.trigger("error")}))
this.mainSegmentLoader_.on("syncinfoupdate",(function(){e.onSyncInfoUpdate_()}))
this.mainSegmentLoader_.on("timestampoffset",(function(){e.tech_.trigger({type:"usage",name:"vhs-timestamp-offset"})
e.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}))
this.audioSegmentLoader_.on("syncinfoupdate",(function(){e.onSyncInfoUpdate_()}))
this.audioSegmentLoader_.on("appenderror",(function(){e.error=e.audioSegmentLoader_.error_
e.trigger("error")}))
this.mainSegmentLoader_.on("ended",(function(){e.logger_("main segment loader ended")
e.onEndOfStream()}))
this.mainSegmentLoader_.on("earlyabort",(function(t){e.experimentalBufferBasedABR||e.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}))
var t=function(){if(!e.sourceUpdater_.ready())return e.tryToCreateSourceBuffers_()
var t=e.getCodecsOrExclude_()
t&&e.sourceUpdater_.addOrChangeSourceBuffers(t)}
this.mainSegmentLoader_.on("trackinfo",t)
this.audioSegmentLoader_.on("trackinfo",t)
this.mainSegmentLoader_.on("fmp4",(function(){if(!e.triggeredFmp4Usage){e.tech_.trigger({type:"usage",name:"vhs-fmp4"})
e.tech_.trigger({type:"usage",name:"hls-fmp4"})
e.triggeredFmp4Usage=!0}}))
this.audioSegmentLoader_.on("fmp4",(function(){if(!e.triggeredFmp4Usage){e.tech_.trigger({type:"usage",name:"vhs-fmp4"})
e.tech_.trigger({type:"usage",name:"hls-fmp4"})
e.triggeredFmp4Usage=!0}}))
this.audioSegmentLoader_.on("ended",(function(){e.logger_("audioSegmentLoader ended")
e.onEndOfStream()}))}
i.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)}
i.load=function(){this.mainSegmentLoader_.load()
this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load()
this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()}
i.smoothQualityChange_=function(e){void 0===e&&(e=this.selectPlaylist())
if(e!==this.masterPlaylistLoader_.media()){this.masterPlaylistLoader_.media(e)
this.mainSegmentLoader_.resetLoader()}}
i.fastQualityChange_=function(e){var t=this
void 0===e&&(e=this.selectPlaylist())
if(e!==this.masterPlaylistLoader_.media()){this.masterPlaylistLoader_.media(e)
this.mainSegmentLoader_.resetEverything((function(){Ru.browser.IE_VERSION||Ru.browser.IS_EDGE?t.tech_.setCurrentTime(t.tech_.currentTime()+.04):t.tech_.setCurrentTime(t.tech_.currentTime())}))}}
i.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0)
this.hasPlayed_&&this.load()
var e=this.tech_.seekable()
return this.tech_.duration()===1/0&&this.tech_.currentTime()<e.start(0)?this.tech_.setCurrentTime(e.end(e.length-1)):void 0}}
i.setupFirstPlay=function(){var e=this,t=this.masterPlaylistLoader_.media()
if(!t||this.tech_.paused()||this.hasPlayed_)return!1
if(!t.endList){var i=this.seekable()
if(!i.length)return!1
if(Ru.browser.IE_VERSION&&0===this.tech_.readyState()){this.tech_.one("loadedmetadata",(function(){e.trigger("firstplay")
e.tech_.setCurrentTime(i.end(0))
e.hasPlayed_=!0}))
return!1}this.trigger("firstplay")
this.tech_.setCurrentTime(i.end(0))}this.hasPlayed_=!0
this.load()
return!0}
i.handleSourceOpen_=function(){this.tryToCreateSourceBuffers_()
if(this.tech_.autoplay()){var e=this.tech_.play()
void 0!==e&&"function"==typeof e.then&&e.then(null,(function(e){}))}this.trigger("sourceopen")}
i.handleSourceEnded_=function(){if(this.inbandTextTracks_.metadataTrack_){var e=this.inbandTextTracks_.metadataTrack_.cues
if(e&&e.length){var t=this.duration()
e[e.length-1].endTime=isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t}}}
i.handleDurationChange_=function(){this.tech_.trigger("durationchange")}
i.onEndOfStream=function(){var e=this.mainSegmentLoader_.ended_
this.mediaTypes_.AUDIO.activePlaylistLoader&&(e=!this.mainSegmentLoader_.currentMediaInfo_||this.mainSegmentLoader_.currentMediaInfo_.hasVideo?e&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_)
if(e){this.stopABRTimer_()
this.sourceUpdater_.endOfStream()}}
i.stuckAtPlaylistEnd_=function(e){if(!this.seekable().length)return!1
var t=this.syncController_.getExpiredTime(e,this.duration())
if(null===t)return!1
var i=Md.Playlist.playlistEnd(e,t),n=this.tech_.currentTime(),r=this.tech_.buffered()
if(!r.length)return i-n<=.1
var a=r.end(r.length-1)
return a-n<=.1&&i-a<=.1}
i.blacklistCurrentPlaylist=function(e,t){void 0===e&&(e={})
var i=e.playlist||this.masterPlaylistLoader_.media()
t=t||e.blacklistDuration||this.blacklistDuration
if(i){var n=this.masterPlaylistLoader_.master.playlists,r=n.filter(dc),a=1===r.length&&r[0]===i
if(1===n.length&&t!==1/0){Ru.log.warn("Problem encountered with playlist "+i.id+". Trying again since it is the only playlist.")
this.tech_.trigger("retryplaylist")
return this.masterPlaylistLoader_.load(a)}if(a){var s=!1
n.forEach((function(e){if(e!==i){var t=e.excludeUntil
if(void 0!==t&&t!==1/0){s=!0
delete e.excludeUntil}}}))
if(s){Ru.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded.")
this.tech_.trigger("retryplaylist")}}i.excludeUntil=Date.now()+1e3*t
this.tech_.trigger("blacklistplaylist")
this.tech_.trigger({type:"usage",name:"vhs-rendition-blacklisted"})
this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"})
var o=this.selectPlaylist()
if(o){var l=e.internal?this.logger_:Ru.log.warn,u=e.message?" "+e.message:""
l((e.internal?"Internal problem":"Problem")+" encountered with playlist "+i.id+"."+u+" Switching to playlist "+o.id+".")
o.attributes.AUDIO!==i.attributes.AUDIO&&this.delegateLoaders_("audio",["abort","pause"])
o.attributes.SUBTITLES!==i.attributes.SUBTITLES&&this.delegateLoaders_("subtitle",["abort","pause"])
this.delegateLoaders_("main",["abort","pause"])
return this.masterPlaylistLoader_.media(o,a)}this.error="Playback cannot continue. No available working or supported playlists."
this.trigger("error")}else{this.error=e
"open"!==this.mediaSource.readyState?this.trigger("error"):this.sourceUpdater_.endOfStream("network")}}
i.pauseLoading=function(){this.delegateLoaders_("all",["abort","pause"])
this.stopABRTimer_()}
i.delegateLoaders_=function(e,t){var i=this,n=[],r="all"===e;(r||"main"===e)&&n.push(this.masterPlaylistLoader_)
var a=[];(r||"audio"===e)&&a.push("AUDIO")
if(r||"subtitle"===e){a.push("CLOSED-CAPTIONS")
a.push("SUBTITLES")}a.forEach((function(e){var t=i.mediaTypes_[e]&&i.mediaTypes_[e].activePlaylistLoader
t&&n.push(t)}));["main","audio","subtitle"].forEach((function(t){var r=i[t+"SegmentLoader_"]
!r||e!==t&&"all"!==e||n.push(r)}))
n.forEach((function(e){return t.forEach((function(t){"function"==typeof e[t]&&e[t]()}))}))}
i.setCurrentTime=function(e){var t=Zu(this.tech_.buffered(),e)
if(!this.masterPlaylistLoader_||!this.masterPlaylistLoader_.media())return 0
if(!this.masterPlaylistLoader_.media().segments)return 0
if(t&&t.length)return e
this.mainSegmentLoader_.resetEverything()
this.mainSegmentLoader_.abort()
if(this.mediaTypes_.AUDIO.activePlaylistLoader){this.audioSegmentLoader_.resetEverything()
this.audioSegmentLoader_.abort()}if(this.mediaTypes_.SUBTITLES.activePlaylistLoader){this.subtitleSegmentLoader_.resetEverything()
this.subtitleSegmentLoader_.abort()}this.load()}
i.duration=function(){if(!this.masterPlaylistLoader_)return 0
var e=this.masterPlaylistLoader_.media()
return e?e.endList?this.mediaSource?this.mediaSource.duration:Md.Playlist.duration(e):1/0:0}
i.seekable=function(){return this.seekable_}
i.onSyncInfoUpdate_=function(){var e
if(this.masterPlaylistLoader_){var t=this.masterPlaylistLoader_.media()
if(t){var i=this.syncController_.getExpiredTime(t,this.duration())
if(null!==i){var n=this.masterPlaylistLoader_.master.suggestedPresentationDelay,r=Md.Playlist.seekable(t,i,n)
if(0!==r.length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){t=this.mediaTypes_.AUDIO.activePlaylistLoader.media()
if(null===(i=this.syncController_.getExpiredTime(t,this.duration())))return
if(0===(e=Md.Playlist.seekable(t,i,n)).length)return}var a,s
if(this.seekable_&&this.seekable_.length){a=this.seekable_.end(0)
s=this.seekable_.start(0)}e?e.start(0)>r.end(0)||r.start(0)>e.end(0)?this.seekable_=r:this.seekable_=Ru.createTimeRanges([[e.start(0)>r.start(0)?e.start(0):r.start(0),e.end(0)<r.end(0)?e.end(0):r.end(0)]]):this.seekable_=r
if(!this.seekable_||!this.seekable_.length||this.seekable_.end(0)!==a||this.seekable_.start(0)!==s){this.logger_("seekable updated ["+tc(this.seekable_)+"]")
this.tech_.trigger("seekablechanged")}}}}}}
i.updateDuration=function(e){if(this.updateDuration_){this.mediaSource.removeEventListener("sourceopen",this.updateDuration_)
this.updateDuration_=null}if("open"===this.mediaSource.readyState)if(e){var t=this.seekable()
if(!t.length)return;(isNaN(this.mediaSource.duration)||this.mediaSource.duration<t.end(t.length-1))&&this.sourceUpdater_.setDuration(t.end(t.length-1))}else{var i=this.tech_.buffered(),n=Md.Playlist.duration(this.masterPlaylistLoader_.media())
i.length>0&&(n=Math.max(n,i.end(i.length-1)))
this.mediaSource.duration!==n&&this.sourceUpdater_.setDuration(n)}else{this.updateDuration_=this.updateDuration.bind(this,e)
this.mediaSource.addEventListener("sourceopen",this.updateDuration_)}}
i.dispose=function(){var e=this
this.trigger("dispose")
this.decrypter_.terminate()
this.masterPlaylistLoader_.dispose()
this.mainSegmentLoader_.dispose();["AUDIO","SUBTITLES"].forEach((function(t){var i=e.mediaTypes_[t].groups
for(var n in i)i[n].forEach((function(e){e.playlistLoader&&e.playlistLoader.dispose()}))}))
this.audioSegmentLoader_.dispose()
this.subtitleSegmentLoader_.dispose()
this.sourceUpdater_.dispose()
this.timelineChangeController_.dispose()
this.stopABRTimer_()
this.updateDuration_&&this.mediaSource.removeEventListener("sourceopen",this.updateDuration_)
this.mediaSource.removeEventListener("durationchange",this.handleDurationChange_)
this.mediaSource.removeEventListener("sourceopen",this.handleSourceOpen_)
this.mediaSource.removeEventListener("sourceended",this.handleSourceEnded_)
this.off()}
i.master=function(){return this.masterPlaylistLoader_.master}
i.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_}
i.areMediaTypesKnown_=function(){var e=!!this.mediaTypes_.AUDIO.activePlaylistLoader
return!(!this.mainSegmentLoader_.currentMediaInfo_||e&&!this.audioSegmentLoader_.currentMediaInfo_)}
i.getCodecsOrExclude_=function(){var e=this,t={main:this.mainSegmentLoader_.currentMediaInfo_||{},audio:this.audioSegmentLoader_.currentMediaInfo_||{}}
t.video=t.main
var i=_d(this.master(),this.media()),n={},r=!!this.mediaTypes_.AUDIO.activePlaylistLoader
t.main.hasVideo&&(n.video=i.video||t.main.videoCodec||pr)
t.main.isMuxed&&(n.video+=","+(i.audio||t.main.audioCodec||hr))
if(t.main.hasAudio&&!t.main.isMuxed||t.audio.hasAudio||r){n.audio=i.audio||t.main.audioCodec||t.audio.audioCodec||hr
t.audio.isFmp4=t.main.hasAudio&&!t.main.isMuxed?t.main.isFmp4:t.audio.isFmp4}if(n.audio||n.video){var a,s={};["video","audio"].forEach((function(e){if(n.hasOwnProperty(e)&&!(r=t[e].isFmp4,o=n[e],r?fr(o):_r(o))){var i=t[e].isFmp4?"browser":"muxer"
s[i]=s[i]||[]
s[i].push(n[e])
"audio"===e&&(a=i)}var r,o}))
if(r&&a&&this.media().attributes.AUDIO){var o=this.media().attributes.AUDIO
this.master().playlists.forEach((function(t){(t.attributes&&t.attributes.AUDIO)===o&&t!==e.media()&&(t.excludeUntil=1/0)}))
this.logger_("excluding audio group "+o+" as "+a+' does not support codec(s): "'+n.audio+'"')}if(!Object.keys(s).length){if(this.sourceUpdater_.ready()&&!this.sourceUpdater_.canChangeType()){var l=[];["video","audio"].forEach((function(t){var i=(br(e.sourceUpdater_.codecs[t]||"")[t]||{}).type,r=(br(n[t]||"")[t]||{}).type
i&&r&&i.toLowerCase()!==r.toLowerCase()&&l.push('"'+e.sourceUpdater_.codecs[t]+'" -> "'+n[t]+'"')}))
if(l.length){this.blacklistCurrentPlaylist({playlist:this.media(),message:"Codec switching not supported: "+l.join(", ")+".",blacklistDuration:1/0,internal:!0})
return}}return n}var u=Object.keys(s).reduce((function(e,t){e&&(e+=", ")
return e+=t+' does not support codec(s): "'+s[t].join(",")+'"'}),"")+"."
this.blacklistCurrentPlaylist({playlist:this.media(),internal:!0,message:u,blacklistDuration:1/0})}else this.blacklistCurrentPlaylist({playlist:this.media(),message:"Could not determine codecs for playlist.",blacklistDuration:1/0})}
i.tryToCreateSourceBuffers_=function(){if("open"===this.mediaSource.readyState&&!this.sourceUpdater_.ready()&&this.areMediaTypesKnown_()){var e=this.getCodecsOrExclude_()
if(e){this.sourceUpdater_.createSourceBuffers(e)
var t=[e.video,e.audio].filter(Boolean).join(",")
this.excludeIncompatibleVariants_(t)}}}
i.excludeUnsupportedVariants_=function(){var e=this
this.master().playlists.forEach((function(t){var i=_d(e.master,t)
!i.audio||_r(i.audio)||fr(i.audio)||(t.excludeUntil=1/0)
!i.video||_r(i.video)||fr(i.video)||(t.excludeUntil=1/0)}))}
i.excludeIncompatibleVariants_=function(e){var t=this,i=br(e),n=Object.keys(i).length
this.master().playlists.forEach((function(e){if(e.excludeUntil!==1/0){var r={},a=2,s=[],o=_d(t.masterPlaylistLoader_.master,e)
if(o.audio||o.video){var l=[o.video,o.audio].filter(Boolean).join(",")
r=br(l)
a=Object.keys(r).length}if(a!==n){s.push('codec count "'+a+'" !== "'+n+'"')
e.excludeUntil=1/0}if(!t.sourceUpdater_.canChangeType()){if(r.video&&i.video&&r.video.type.toLowerCase()!==i.video.type.toLowerCase()){s.push('video codec "'+r.video.type+'" !== "'+i.video.type+'"')
e.excludeUntil=1/0}if(r.audio&&i.audio&&r.audio.type.toLowerCase()!==i.audio.type.toLowerCase()){e.excludeUntil=1/0
s.push('audio codec "'+r.audio.type+'" !== "'+i.audio.type+'"')}}s.length&&t.logger_("blacklisting "+e.id+": "+s.join(" && "))}}))}
i.updateAdCues_=function(e){var t=0,i=this.seekable()
i.length&&(t=i.start(0));((function(e,t,i){void 0===i&&(i=0)
if(e.segments)for(var n,r=i,s=0;s<e.segments.length;s++){var o=e.segments[s]
n||(n=ah(t,r+o.duration/2))
if(n){if("cueIn"in o){n.endTime=r
n.adEndTime=r
r+=o.duration
n=null
continue}if(r<n.endTime){r+=o.duration
continue}n.endTime+=o.duration}else{if("cueOut"in o){(n=new a.VTTCue(r,r+o.duration,o.cueOut)).adStartTime=r
n.adEndTime=r+parseFloat(o.cueOut)
t.addCue(n)}if("cueOutCont"in o){var l=o.cueOutCont.split("/").map(parseFloat),u=l[0],c=l[1];(n=new a.VTTCue(r,r+o.duration,"")).adStartTime=r-u
n.adEndTime=n.adStartTime+c
t.addCue(n)}}r+=o.duration}}))(e,this.cueTagsTrack_,t)}
i.goalBufferLength=function(){var e=this.tech_.currentTime(),t=jc.GOAL_BUFFER_LENGTH,i=jc.GOAL_BUFFER_LENGTH_RATE,n=Math.max(t,jc.MAX_GOAL_BUFFER_LENGTH)
return Math.min(t+e*i,n)}
i.bufferLowWaterLine=function(){var e=this.tech_.currentTime(),t=jc.BUFFER_LOW_WATER_LINE,i=jc.BUFFER_LOW_WATER_LINE_RATE,n=Math.max(t,jc.MAX_BUFFER_LOW_WATER_LINE),r=Math.max(t,jc.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE)
return Math.min(t+e*i,this.experimentalBufferBasedABR?r:n)}
i.bufferHighWaterLine=function(){return jc.BUFFER_HIGH_WATER_LINE}
return t})(Ru.EventTarget),Sh=function(e,t,i){var n,r,a,s=e.masterPlaylistController_,o=s[(e.options_.smoothQualityChange?"smooth":"fast")+"QualityChange_"].bind(s)
if(t.attributes.RESOLUTION){var l=t.attributes.RESOLUTION
this.width=l.width
this.height=l.height}this.bandwidth=t.attributes.BANDWIDTH
this.codecs=_d(s.master(),t)
this.playlist=t
this.id=i
this.enabled=(n=e.playlists,r=t.id,a=o,function(e){var t=n.master.playlists[r],i=cc(t),s=dc(t)
if(void 0===e)return s
e?delete t.disabled:t.disabled=!0
if(e!==s&&!i){a()
e?n.trigger("renditionenabled"):n.trigger("renditiondisabled")}return e})},kh=["seeking","seeked","pause","playing","error"],Ch=(function(){function e(e){var t=this
this.masterPlaylistController_=e.masterPlaylistController
this.tech_=e.tech
this.seekable=e.seekable
this.allowSeeksWithinUnsafeLiveWindow=e.allowSeeksWithinUnsafeLiveWindow
this.media=e.media
this.consecutiveUpdates=0
this.lastRecordedTime=null
this.timer_=null
this.checkCurrentTimeTimeout_=null
this.logger_=bd("PlaybackWatcher")
this.logger_("initialize")
var i=function(){return t.monitorCurrentTime_()},n=function(){return t.techWaiting_()},r=function(){return t.cancelTimer_()},s=function(){return t.fixesBadSeeks_()},o=this.masterPlaylistController_,l=["main","subtitle","audio"],u={}
l.forEach((function(e){u[e]={reset:function(){return t.resetSegmentDownloads_(e)},updateend:function(){return t.checkSegmentDownloads_(e)}}
o[e+"SegmentLoader_"].on("appendsdone",u[e].updateend)
o[e+"SegmentLoader_"].on("playlistupdate",u[e].reset)
t.tech_.on(["seeked","seeking"],u[e].reset)}))
this.tech_.on("seekablechanged",s)
this.tech_.on("waiting",n)
this.tech_.on(kh,r)
this.tech_.on("canplay",i)
this.dispose=function(){t.logger_("dispose")
t.tech_.off("seekablechanged",s)
t.tech_.off("waiting",n)
t.tech_.off(kh,r)
t.tech_.off("canplay",i)
l.forEach((function(e){o[e+"SegmentLoader_"].off("appendsdone",u[e].updateend)
o[e+"SegmentLoader_"].off("playlistupdate",u[e].reset)
t.tech_.off(["seeked","seeking"],u[e].reset)}))
t.checkCurrentTimeTimeout_&&a.clearTimeout(t.checkCurrentTimeTimeout_)
t.cancelTimer_()}}var t=e.prototype
t.monitorCurrentTime_=function(){this.checkCurrentTime_()
this.checkCurrentTimeTimeout_&&a.clearTimeout(this.checkCurrentTimeTimeout_)
this.checkCurrentTimeTimeout_=a.setTimeout(this.monitorCurrentTime_.bind(this),250)}
t.resetSegmentDownloads_=function(e){var t=this.masterPlaylistController_[e+"SegmentLoader_"]
this[e+"StalledDownloads_"]>0&&this.logger_("resetting possible stalled download count for "+e+" loader")
this[e+"StalledDownloads_"]=0
this[e+"Buffered_"]=t.buffered_()}
t.checkSegmentDownloads_=function(e){var t=this.masterPlaylistController_,i=t[e+"SegmentLoader_"],n=i.buffered_(),r=(function(e,t){if(e===t)return!1
if(!e&&t||!t&&e)return!0
if(e.length!==t.length)return!0
for(var i=0;i<e.length;i++)if(e.start(i)!==t.start(i)||e.end(i)!==t.end(i))return!0
return!1})(this[e+"Buffered_"],n)
this[e+"Buffered_"]=n
if(r)this.resetSegmentDownloads_(e)
else{this[e+"StalledDownloads_"]++
this.logger_("found #"+this[e+"StalledDownloads_"]+" "+e+" appends that did not increase buffer (possible stalled download)",{playlistId:i.playlist_&&i.playlist_.id,buffered:ic(n)})
if(!(this[e+"StalledDownloads_"]<10)){this.logger_(e+" loader stalled download exclusion")
this.resetSegmentDownloads_(e)
this.tech_.trigger({type:"usage",name:"vhs-"+e+"-download-exclusion"})
"subtitle"!==e&&t.blacklistCurrentPlaylist({message:"Excessive "+e+" segment downloading detected."},1/0)}}}
t.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_()){this.consecutiveUpdates=0
this.lastRecordedTime=this.tech_.currentTime()}else if(!this.tech_.paused()&&!this.tech_.seeking()){var e=this.tech_.currentTime(),t=this.tech_.buffered()
if(this.lastRecordedTime===e&&(!t.length||e+.1>=t.end(t.length-1)))return this.techWaiting_()
if(this.consecutiveUpdates>=5&&e===this.lastRecordedTime){this.consecutiveUpdates++
this.waiting_()}else if(e===this.lastRecordedTime)this.consecutiveUpdates++
else{this.consecutiveUpdates=0
this.lastRecordedTime=e}}}
t.cancelTimer_=function(){this.consecutiveUpdates=0
if(this.timer_){this.logger_("cancelTimer_")
clearTimeout(this.timer_)}this.timer_=null}
t.fixesBadSeeks_=function(){if(!this.tech_.seeking())return!1
var e,t=this.seekable(),i=this.tech_.currentTime()
if(this.afterSeekableWindow_(t,i,this.media(),this.allowSeeksWithinUnsafeLiveWindow)){e=t.end(t.length-1)}if(this.beforeSeekableWindow_(t,i)){var n=t.start(0)
e=n+(n===t.end(0)?0:.1)}if(void 0!==e){this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+tc(t)+". Seeking to "+e+".")
this.tech_.setCurrentTime(e)
return!0}var r=this.tech_.buffered()
if((function(e){var t=e.buffered,i=e.targetDuration,n=e.currentTime
return!(!t.length||t.end(0)-t.start(0)<2*i||n>t.start(0)||!(t.start(0)-n<i))})({buffered:r,targetDuration:this.media().targetDuration,currentTime:i})){e=r.start(0)+.1
this.logger_("Buffered region starts ("+r.start(0)+")  just beyond seek point ("+i+"). Seeking to "+e+".")
this.tech_.setCurrentTime(e)
return!0}return!1}
t.waiting_=function(){if(!this.techWaiting_()){var e=this.tech_.currentTime(),t=this.tech_.buffered(),i=Zu(t,e)
if(i.length&&e+3<=i.end(0)){this.cancelTimer_()
this.tech_.setCurrentTime(e)
this.logger_("Stopped at "+e+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time.")
this.tech_.trigger({type:"usage",name:"vhs-unknown-waiting"})
this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})}else;}}
t.techWaiting_=function(){var e=this.seekable(),t=this.tech_.currentTime()
if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0
if(this.tech_.seeking()||null!==this.timer_)return!0
if(this.beforeSeekableWindow_(e,t)){var i=e.end(e.length-1)
this.logger_("Fell out of live window at time "+t+". Seeking to live point (seekable end) "+i)
this.cancelTimer_()
this.tech_.setCurrentTime(i)
this.tech_.trigger({type:"usage",name:"vhs-live-resync"})
this.tech_.trigger({type:"usage",name:"hls-live-resync"})
return!0}var n=this.tech_.vhs.masterPlaylistController_.sourceUpdater_,r=this.tech_.buffered()
if(this.videoUnderflow_({audioBuffered:n.audioBuffered(),videoBuffered:n.videoBuffered(),currentTime:t})){this.cancelTimer_()
this.tech_.setCurrentTime(t)
this.tech_.trigger({type:"usage",name:"vhs-video-underflow"})
this.tech_.trigger({type:"usage",name:"hls-video-underflow"})
return!0}var a=ec(r,t)
if(a.length>0){var s=a.start(0)-t
this.logger_("Stopped at "+t+", setting timer for "+s+", seeking to "+a.start(0))
this.cancelTimer_()
this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,t)
return!0}return!1}
t.afterSeekableWindow_=function(e,t,i,n){void 0===n&&(n=!1)
if(!e.length)return!1
var r=e.end(e.length-1)+.1
!i.endList&&n&&(r=e.end(e.length-1)+3*i.targetDuration)
return t>r}
t.beforeSeekableWindow_=function(e,t){return!!(e.length&&e.start(0)>0&&t<e.start(0)-.1)}
t.videoUnderflow_=function(e){var t=e.videoBuffered,i=e.audioBuffered,n=e.currentTime
if(t){var r
if(t.length&&i.length){var a=Zu(t,n-3),s=Zu(t,n),o=Zu(i,n)
o.length&&!s.length&&a.length&&(r={start:a.end(0),end:o.end(0)})}else{ec(t,n).length||(r=this.gapFromVideoUnderflow_(t,n))}if(r){this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+n)
return!0}return!1}}
t.skipTheGap_=function(e){var t=this.tech_.buffered(),i=this.tech_.currentTime(),n=ec(t,i)
this.cancelTimer_()
if(0!==n.length&&i===e){this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",e,"nextRange start:",n.start(0))
this.tech_.setCurrentTime(n.start(0)+1/30)
this.tech_.trigger({type:"usage",name:"vhs-gap-skip"})
this.tech_.trigger({type:"usage",name:"hls-gap-skip"})}}
t.gapFromVideoUnderflow_=function(e,t){for(var i=(function(e){if(e.length<2)return Ru.createTimeRanges()
for(var t=[],i=1;i<e.length;i++){var n=e.end(i-1),r=e.start(i)
t.push([n,r])}return Ru.createTimeRanges(t)})(e),n=0;n<i.length;n++){var r=i.start(n),a=i.end(n)
if(t-r<4&&t-r>2)return{start:r,end:a}}return null}
return e})(),Eh={errorInterval:30,getSource:function(e){return e(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_||this.currentSource())}},wh=function(e){((function e(t,i){var n=0,r=0,a=Ru.mergeOptions(Eh,i)
t.ready((function(){t.trigger({type:"usage",name:"vhs-error-reload-initialized"})
t.trigger({type:"usage",name:"hls-error-reload-initialized"})}))
var s=function(){r&&t.currentTime(r)},o=function(e){if(null!=e){r=t.duration()!==1/0&&t.currentTime()||0
t.one("loadedmetadata",s)
t.src(e)
t.trigger({type:"usage",name:"vhs-error-reload"})
t.trigger({type:"usage",name:"hls-error-reload"})
t.play()}},l=function(){if(Date.now()-n<1e3*a.errorInterval){t.trigger({type:"usage",name:"vhs-error-reload-canceled"})
t.trigger({type:"usage",name:"hls-error-reload-canceled"})}else{if(a.getSource&&"function"==typeof a.getSource){n=Date.now()
return a.getSource.call(t,o)}Ru.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},u=function e(){t.off("loadedmetadata",s)
t.off("error",l)
t.off("dispose",e)}
t.on("error",l)
t.on("dispose",u)
t.reloadSourceOnError=function(i){u()
e(t,i)}}))(this,e)},Ih={PlaylistLoader:$u,Playlist:fc,utils:Ic,STANDARD_PLAYLIST_SELECTOR:Id,INITIAL_PLAYLIST_SELECTOR:function(){var e=this,t=this.playlists.master.playlists.filter(fc.isEnabled)
Cd(t,(function(e,t){return Ed(e,t)}))
return t.filter((function(t){return!!_d(e.playlists.master,t).video}))[0]||null},lastBandwidthSelector:Id,movingAverageBandwidthSelector:function(e){var t=-1
if(e<0||e>1)throw new Error("Moving average bandwidth decay must be between 0 and 1.")
return function(){var i=this.useDevicePixelRatio&&a.devicePixelRatio||1
t<0&&(t=this.systemBandwidth)
t=e*this.systemBandwidth+(1-e)*t
return wd(this.playlists.master,t,parseInt(kd(this.tech_.el(),"width"),10)*i,parseInt(kd(this.tech_.el(),"height"),10)*i,this.limitRenditionByPlayerDimensions)}},comparePlaylistBandwidth:Ed,comparePlaylistResolution:function(e,t){var i,n
e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(i=e.attributes.RESOLUTION.width)
i=i||a.Number.MAX_VALUE
t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(n=t.attributes.RESOLUTION.width)
return i===(n=n||a.Number.MAX_VALUE)&&e.attributes.BANDWIDTH&&t.attributes.BANDWIDTH?e.attributes.BANDWIDTH-t.attributes.BANDWIDTH:i-n},xhr:yc()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","BACK_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach((function(e){Object.defineProperty(Ih,e,{get:function(){Ru.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing")
return jc[e]},set:function(t){Ru.log.warn("using Vhs."+e+" is UNSAFE be sure you know what you are doing")
"number"!=typeof t||t<0?Ru.log.warn("value of Vhs."+e+" must be greater than or equal to 0"):jc[e]=t}})}))
var Ph=function(e,t){for(var i=t.media(),n=-1,r=0;r<e.length;r++)if(e[r].id===i.id){n=r
break}e.selectedIndex_=n
e.trigger({selectedIndex:n,type:"change"})}
Ih.canPlaySource=function(){return Ru.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")}
var Ah=function(e){var t=e.player,i=e.sourceKeySystems,n=e.media,r=e.audioMedia,a=e.mainPlaylists,s=(function(e,t,i){if(!e)return e
var n={video:t&&t.attributes&&t.attributes.CODECS,audio:i&&i.attributes&&i.attributes.CODECS}
!n.audio&&n.video&&n.video.split(",").length>1&&n.video.split(",").forEach((function(e){e=e.trim()
vr(e)?n.audio=e:yr(e)&&(n.video=e)}))
var r=n.video?'video/mp4;codecs="'+n.video+'"':null,a=n.audio?'audio/mp4;codecs="'+n.audio+'"':null,s={}
for(var o in e){s[o]={audioContentType:a,videoContentType:r}
t.contentProtection&&t.contentProtection[o]&&t.contentProtection[o].pssh&&(s[o].pssh=t.contentProtection[o].pssh)
"string"==typeof e[o]&&(s[o].url=e[o])}return Ru.mergeOptions(e,s)})(i,n,r)
if(s){t.currentSource().keySystems=s
if(!s||t.eme){if(11!==Ru.browser.IE_VERSION&&t.eme.initializeMediaKeys){((function(e,t){return e.reduce((function(e,i){if(!i.contentProtection)return e
var n=t.reduce((function(e,t){var n=i.contentProtection[t]
n&&n.pssh&&(e[t]={pssh:n.pssh})
return e}),{})
Object.keys(n).length&&e.push(n)
return e}),[])}))(r?a.concat([r]):a,Object.keys(i)).forEach((function(e){t.eme.initializeMediaKeys({keySystems:e})}))}}else Ru.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin")}},xh=function(){if(!a.localStorage)return null
var e=a.localStorage.getItem("videojs-vhs")
if(!e)return null
try{return JSON.parse(e)}catch(Kg){return null}}
Ih.supportsNativeHls=(function(){if(!R||!R.createElement)return!1
var e=R.createElement("video")
if(!Ru.getTech("Html5").isSupported())return!1
return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some((function(t){return/maybe|probably/i.test(e.canPlayType(t))}))})()
Ih.supportsNativeDash=!!(R&&R.createElement&&Ru.getTech("Html5").isSupported())&&/maybe|probably/i.test(R.createElement("video").canPlayType("application/dash+xml"))
Ih.supportsTypeNatively=function(e){return"hls"===e?Ih.supportsNativeHls:"dash"===e&&Ih.supportsNativeDash}
Ih.isSupported=function(){return Ru.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")}
var Oh=(function(e){U(t,e)
function t(t,i,n){var r
r=e.call(this,i,Ru.mergeOptions(n.hls,n.vhs))||this
n.hls&&Object.keys(n.hls).length&&Ru.log.warn("Using hls options is deprecated. Use vhs instead.")
if(i.options_&&i.options_.playerId){var a=Ru(i.options_.playerId)
a.hasOwnProperty("hls")||Object.defineProperty(a,"hls",{get:function(){Ru.log.warn("player.hls is deprecated. Use player.tech().vhs instead.")
i.trigger({type:"usage",name:"hls-player-access"})
return M(r)},configurable:!0})
a.hasOwnProperty("vhs")||Object.defineProperty(a,"vhs",{get:function(){Ru.log.warn("player.vhs is deprecated. Use player.tech().vhs instead.")
i.trigger({type:"usage",name:"vhs-player-access"})
return M(r)},configurable:!0})
a.hasOwnProperty("dash")||Object.defineProperty(a,"dash",{get:function(){Ru.log.warn("player.dash is deprecated. Use player.tech().vhs instead.")
return M(r)},configurable:!0})
r.player_=a}r.tech_=i
r.source_=t
r.stats={}
r.ignoreNextSeekingEvent_=!1
r.setOptions_()
if(r.options_.overrideNative&&i.overrideNativeAudioTracks&&i.overrideNativeVideoTracks){i.overrideNativeAudioTracks(!0)
i.overrideNativeVideoTracks(!0)}else if(r.options_.overrideNative&&(i.featuresNativeVideoTracks||i.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB")
r.on(R,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],(function(e){var t=R.fullscreenElement||R.webkitFullscreenElement||R.mozFullScreenElement||R.msFullscreenElement
t&&t.contains(r.tech_.el())&&r.masterPlaylistController_.smoothQualityChange_()}))
r.on(r.tech_,"seeking",(function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}))
r.on(r.tech_,"error",(function(){this.tech_.error()&&this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}))
r.on(r.tech_,"play",r.play)
return r}var i=t.prototype
i.setOptions_=function(){var e=this
this.options_.withCredentials=this.options_.withCredentials||!1
this.options_.handleManifestRedirects=!1!==this.options_.handleManifestRedirects
this.options_.limitRenditionByPlayerDimensions=!1!==this.options_.limitRenditionByPlayerDimensions
this.options_.useDevicePixelRatio=this.options_.useDevicePixelRatio||!1
this.options_.smoothQualityChange=this.options_.smoothQualityChange||!1
this.options_.useBandwidthFromLocalStorage=void 0!==this.source_.useBandwidthFromLocalStorage?this.source_.useBandwidthFromLocalStorage:this.options_.useBandwidthFromLocalStorage||!1
this.options_.customTagParsers=this.options_.customTagParsers||[]
this.options_.customTagMappers=this.options_.customTagMappers||[]
this.options_.cacheEncryptionKeys=this.options_.cacheEncryptionKeys||!1
this.options_.handlePartialData=this.options_.handlePartialData||!1
"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300)
if("number"!=typeof this.options_.bandwidth&&this.options_.useBandwidthFromLocalStorage){var t=xh()
if(t&&t.bandwidth){this.options_.bandwidth=t.bandwidth
this.tech_.trigger({type:"usage",name:"vhs-bandwidth-from-local-storage"})
this.tech_.trigger({type:"usage",name:"hls-bandwidth-from-local-storage"})}if(t&&t.throughput){this.options_.throughput=t.throughput
this.tech_.trigger({type:"usage",name:"vhs-throughput-from-local-storage"})
this.tech_.trigger({type:"usage",name:"hls-throughput-from-local-storage"})}}"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=jc.INITIAL_BANDWIDTH)
this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&this.options_.bandwidth===jc.INITIAL_BANDWIDTH;["withCredentials","useDevicePixelRatio","limitRenditionByPlayerDimensions","bandwidth","smoothQualityChange","customTagParsers","customTagMappers","handleManifestRedirects","cacheEncryptionKeys","handlePartialData","playlistSelector","initialPlaylistSelector","experimentalBufferBasedABR"].forEach((function(t){void 0!==e.source_[t]&&(e.options_[t]=e.source_[t])}))
this.limitRenditionByPlayerDimensions=this.options_.limitRenditionByPlayerDimensions
this.useDevicePixelRatio=this.options_.useDevicePixelRatio}
i.src=function(e,t){var i=this
if(e){this.setOptions_()
this.options_.src=0===(n=this.source_.src).toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,")?JSON.parse(n.substring(n.indexOf(",")+1)):n
var n
this.options_.tech=this.tech_
this.options_.externVhs=Ih
this.options_.sourceType=Ke(t)
this.options_.seekTo=function(e){i.tech_.setCurrentTime(e)}
this.masterPlaylistController_=new Th(this.options_)
this.playbackWatcher_=new Ch(Ru.mergeOptions(this.options_,{seekable:function(){return i.seekable()},media:function(){return i.masterPlaylistController_.media()},masterPlaylistController:this.masterPlaylistController_}))
this.masterPlaylistController_.on("error",(function(){var e=Ru.players[i.tech_.options_.playerId],t=i.masterPlaylistController_.error
"object"!=typeof t||t.code?"string"==typeof t&&(t={message:t,code:3}):t.code=3
e.error(t)}))
var r=this.options_.experimentalBufferBasedABR?Ih.movingAverageBandwidthSelector(.55):Ih.STANDARD_PLAYLIST_SELECTOR
this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):r.bind(this)
this.masterPlaylistController_.selectInitialPlaylist=Ih.INITIAL_PLAYLIST_SELECTOR.bind(this)
this.playlists=this.masterPlaylistController_.masterPlaylistLoader_
this.mediaSource=this.masterPlaylistController_.mediaSource
Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(e){this.masterPlaylistController_.selectPlaylist=e.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=e
this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=e
this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var e,t=1/(this.bandwidth||1)
e=this.throughput>0?1/this.throughput:0
return Math.floor(1/(t+e))},set:function(){Ru.log.error('The "systemBandwidth" property is read-only')}}})
this.options_.bandwidth&&(this.bandwidth=this.options_.bandwidth)
this.options_.throughput&&(this.throughput=this.options_.throughput)
Object.defineProperties(this.stats,{bandwidth:{get:function(){return i.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return i.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return i.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return i.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return i.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return i.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return i.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return i.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return ic(i.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return i.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return i.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return i.tech_.name_},enumerable:!0},duration:{get:function(){return i.tech_.duration()},enumerable:!0},master:{get:function(){return i.playlists.master},enumerable:!0},playerDimensions:{get:function(){return i.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return ic(i.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return i.tech_.getVideoPlaybackQuality()},enumerable:!0}})
this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_))
this.tech_.on("bandwidthupdate",(function(){i.options_.useBandwidthFromLocalStorage&&(function(e){if(!a.localStorage)return!1
var t=xh()
t=t?Ru.mergeOptions(t,e):e
try{a.localStorage.setItem("videojs-vhs",JSON.stringify(t))}catch(Kg){return!1}})({bandwidth:i.bandwidth,throughput:Math.round(i.throughput)})}))
this.masterPlaylistController_.on("selectedinitialmedia",(function(){t=(e=i).playlists,e.representations=function(){return t&&t.master&&t.master.playlists?t.master.playlists.filter((function(e){return!cc(e)})).map((function(t,i){return new Sh(e,t,t.id)})):[]}
var e,t}))
this.masterPlaylistController_.sourceUpdater_.on("ready",(function(){var e=i.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader
Ah({player:i.player_,sourceKeySystems:i.source_.keySystems,media:i.playlists.media(),audioMedia:e&&e.media(),mainPlaylists:i.playlists.master.playlists})}))
this.on(this.masterPlaylistController_,"progress",(function(){this.tech_.trigger("progress")}))
this.on(this.masterPlaylistController_,"firstplay",(function(){this.ignoreNextSeekingEvent_=!0}))
this.setupQualityLevels_()
if(this.tech_.el()){this.mediaSourceUrl_=a.URL.createObjectURL(this.masterPlaylistController_.mediaSource)
this.tech_.src(this.mediaSourceUrl_)}}}
i.setupQualityLevels_=function(){var e=this,t=Ru.players[this.tech_.options_.playerId]
if(t&&t.qualityLevels&&!this.qualityLevels_){this.qualityLevels_=t.qualityLevels()
this.masterPlaylistController_.on("selectedinitialmedia",(function(){((function(e,t){t.representations().forEach((function(t){e.addQualityLevel(t)}))
Ph(e,t.playlists)}))(e.qualityLevels_,e)}))
this.playlists.on("mediachange",(function(){Ph(e.qualityLevels_,e.playlists)}))}}
t.version=function(){return{"@videojs/http-streaming":"2.3.0","mux.js":"5.6.7","mpd-parser":"0.14.0","m3u8-parser":"4.5.0","aes-decrypter":"3.1.0"}}
i.version=function(){return this.constructor.version()}
i.canChangeType=function(){return th.canChangeType()}
i.play=function(){this.masterPlaylistController_.play()}
i.setCurrentTime=function(e){this.masterPlaylistController_.setCurrentTime(e)}
i.duration=function(){return this.masterPlaylistController_.duration()}
i.seekable=function(){return this.masterPlaylistController_.seekable()}
i.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose()
this.masterPlaylistController_&&this.masterPlaylistController_.dispose()
this.qualityLevels_&&this.qualityLevels_.dispose()
if(this.player_){delete this.player_.vhs
delete this.player_.dash
delete this.player_.hls}this.tech_&&this.tech_.vhs&&delete this.tech_.vhs
this.tech_&&delete this.tech_.hls
if(this.mediaSourceUrl_&&a.URL.revokeObjectURL){a.URL.revokeObjectURL(this.mediaSourceUrl_)
this.mediaSourceUrl_=null}e.prototype.dispose.call(this)}
i.convertToProgramTime=function(e,t){return Pc({playlist:this.masterPlaylistController_.media(),time:e,callback:t})}
i.seekToProgramTime=function(e,t,i,n){void 0===i&&(i=!0)
void 0===n&&(n=2)
return Ac({programTime:e,playlist:this.masterPlaylistController_.media(),retryCount:n,pauseAfterSeek:i,seekTo:this.options_.seekTo,tech:this.options_.tech,callback:t})}
return t})(Ru.getComponent("Component")),Lh={name:"videojs-http-streaming",VERSION:"2.3.0",canHandleSource:function(e,t){void 0===t&&(t={})
var i=Ru.mergeOptions(Ru.options,t)
return Lh.canPlayType(e.type,i)},handleSource:function(e,t,i){void 0===i&&(i={})
var n=Ru.mergeOptions(Ru.options,i)
t.vhs=new Oh(e,t,n)
Ru.hasOwnProperty("hls")||Object.defineProperty(t,"hls",{get:function(){Ru.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead.")
return t.vhs},configurable:!0})
t.vhs.xhr=yc()
t.vhs.src(e.src,e.type)
return t.vhs},canPlayType:function(e,t){void 0===t&&(t={})
var i=Ru.mergeOptions(Ru.options,t).vhs.overrideNative,n=void 0===i?!Ru.browser.IS_ANY_SAFARI:i,r=Ke(e)
return r&&(!Ih.supportsTypeNatively(r)||n)?"maybe":""}}
fr("avc1.4d400d,mp4a.40.2")&&Ru.getTech("Html5").registerSourceHandler(Lh,0)
Ru.VhsHandler=Oh
Object.defineProperty(Ru,"HlsHandler",{get:function(){Ru.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead.")
return Oh},configurable:!0})
Ru.VhsSourceHandler=Lh
Object.defineProperty(Ru,"HlsSourceHandler",{get:function(){Ru.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead.")
return Lh},configurable:!0})
Ru.Vhs=Ih
Object.defineProperty(Ru,"Hls",{get:function(){Ru.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead.")
return Ih},configurable:!0})
if(!Ru.use){Ru.registerComponent("Hls",Ih)
Ru.registerComponent("Vhs",Ih)}Ru.options.vhs=Ru.options.vhs||{}
Ru.options.hls=Ru.options.hls||{}
Ru.registerPlugin?Ru.registerPlugin("reloadSourceOnError",wh):Ru.plugin("reloadSourceOnError",wh)
function Dh(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}var Rh=function e(t){var i=this
if(Ru.browser.IS_IE8){i=$.createElement("custom")
for(var n in e.prototype)"constructor"!==n&&(i[n]=e.prototype[n])}i.id=t.id
i.label=i.id
i.width=t.width
i.height=t.height
i.bitrate=t.bandwidth
i.enabled_=t.enabled
Object.defineProperty(i,"enabled",{get:function(){return i.enabled_()},set:function(e){i.enabled_(e)}})
return i},Nh=(function(e){((function(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
e.__proto__=t}))(t,e)
function t(){var i,n=Dh(Dh(i=e.call(this)||this))
if(Ru.browser.IS_IE8){n=$.createElement("custom")
for(var r in t.prototype)"constructor"!==r&&(n[r]=t.prototype[r])}n.levels_=[]
n.selectedIndex_=-1
Object.defineProperty(n,"selectedIndex",{get:function(){return n.selectedIndex_}})
Object.defineProperty(n,"length",{get:function(){return n.levels_.length}})
return n||Dh(i)}var i=t.prototype
i.addQualityLevel=function(e){var t=this.getQualityLevelById(e.id)
if(t)return t
var i=this.levels_.length
t=new Rh(e)
""+i in this||Object.defineProperty(this,i,{get:function(){return this.levels_[i]}})
this.levels_.push(t)
this.trigger({qualityLevel:t,type:"addqualitylevel"})
return t}
i.removeQualityLevel=function(e){for(var t=null,i=0,n=this.length;i<n;i++)if(this[i]===e){t=this.levels_.splice(i,1)[0]
this.selectedIndex_===i?this.selectedIndex_=-1:this.selectedIndex_>i&&this.selectedIndex_--
break}t&&this.trigger({qualityLevel:e,type:"removequalitylevel"})
return t}
i.getQualityLevelById=function(e){for(var t=0,i=this.length;t<i;t++){var n=this[t]
if(n.id===e)return n}return null}
i.dispose=function(){this.selectedIndex_=-1
this.levels_.length=0}
return t})(Ru.EventTarget)
Nh.prototype.allowedEvents_={change:"change",addqualitylevel:"addqualitylevel",removequalitylevel:"removequalitylevel"}
for(var Mh in Nh.prototype.allowedEvents_)Nh.prototype["on"+Mh]=null
var Uh=Ru.registerPlugin||Ru.plugin,Bh=function(e){return (function(e,t){var i=e.qualityLevels,n=new Nh
e.on("dispose",(function t(){n.dispose()
e.qualityLevels=i
e.off("dispose",t)}))
e.qualityLevels=function(){return n}
e.qualityLevels.VERSION="2.0.9"
return n})(this,Ru.mergeOptions({},e))}
Uh("qualityLevels",Bh)
Bh.VERSION="2.0.9"
function jh(e){return(jh="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vh(e,t){for(var i=0;i<t.length;i++){var n=t[i]
n.enumerable=n.enumerable||!1
n.configurable=!0
"value"in n&&(n.writable=!0)
Object.defineProperty(e,n.key,n)}}function Hh(e,t,i){t&&Vh(e.prototype,t)
i&&Vh(e,i)
return e}function qh(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
t&&zh(e,t)}function Wh(e){return(Wh=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function zh(e,t){return(zh=Object.setPrototypeOf||function(e,t){e.__proto__=t
return e})(e,t)}function Gh(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function Kh(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?Gh(e):t}function Xh(e){var t=(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})))
return!0}catch(Kg){return!1}})()
return function(){var i,n=Wh(e)
if(t){var r=Wh(this).constructor
i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments)
return Kh(this,i)}}function Yh(e,t,i){return(Yh="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=(function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Wh(e)););return e})(e,t)
if(n){var r=Object.getOwnPropertyDescriptor(n,t)
return r.get?r.get.call(i):r.value}})(e,t,i||e)}function Qh(e,t){return (function(e){if(Array.isArray(e))return e})(e)||(function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var i=[],n=!0,r=!1,a=void 0
try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){i.push(s.value)
if(t&&i.length===t)break}}catch(l){r=!0
a=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i})(e,t)||Jh(e,t)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function $h(e){return (function(e){if(Array.isArray(e))return Zh(e)})(e)||(function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)})(e)||Jh(e)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function Jh(e,t){if(e){if("string"==typeof e)return Zh(e,t)
var i=Object.prototype.toString.call(e).slice(8,-1)
"Object"===i&&e.constructor&&(i=e.constructor.name)
return"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Zh(e,t):void 0}}function Zh(e,t){(null==t||t>e.length)&&(t=e.length)
for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i]
return n}var ep=Ru.getComponent("Component"),tp=Ru.dom,ip=(function(e){qh(i,ep)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.checked,s=void 0!==a&&a,o=r.readonly,l=void 0!==o&&o
Fh(this,i);(n=t.apply(this,arguments))._player=e
n._isReadonly=l
n._isReadonly||n.on(["tap","click"],n._onClick)
s&&n.check()
return n}Hh(i,[{key:"createEl",value:function(){var e=tp.createEl("div",{className:"vjs-toggle"})
this._artdecoToggle=tp.createEl("div",{className:"vjs-toggle-input artdeco-toggle artdeco-toggle--24dp artdeco-toggle--inverse"},{id:this.id()})
this._label=tp.createEl("label",{className:"vjs-toggle-label artdeco-toggle__label a11y-text"},{for:this.id()})
this._labelText=document.createTextNode("")
this._label.appendChild(this._labelText)
this._artdecoToggle.appendChild(this._label)
this._checkbox=tp.createEl("input",{className:"vjs-toggle-button artdeco-toggle__input"},{type:"checkbox",role:"switch"})
this._checkboxText=document.createTextNode("")
this._checkbox.appendChild(this._checkboxText)
this._artdecoToggle.appendChild(this._checkbox)
e.appendChild(this._artdecoToggle)
return e}},{key:"check",value:function(){this._artdecoToggle.setAttribute("data-artdeco-toggled",!0)
this._artdecoToggle.classList.add("artdeco-toggle--toggled")
this._labelText.nodeValue=this._player.localize("On")
this._isChecked=!0
this.trigger("check")}},{key:"uncheck",value:function(){this._artdecoToggle.removeAttribute("data-artdeco-toggled")
this._artdecoToggle.classList.remove("artdeco-toggle--toggled")
this._labelText.nodeValue=this._player.localize("Off")
this._isChecked=!1
this.trigger("uncheck")}},{key:"_onClick",value:function(){this._isChecked?this.uncheck():this.check()}}])
return i})()
Ru.registerComponent("Toggle",ip)
function np(e,t){if(!t)throw new Error("Assertion Failed: ".concat(e))}function rp(e,t){t||console.warn(e)}function ap(e){return(e instanceof window.HTMLAnchorElement||e instanceof window.HTMLAreaElement)&&e.hasAttribute("href")||(e instanceof window.HTMLInputElement||e instanceof window.HTMLSelectElement||e instanceof window.HTMLTextAreaElement||e instanceof window.HTMLButtonElement)&&!e.hasAttribute("disabled")||e instanceof window.HTMLIFrameElement||e instanceof window.HTMLObjectElement||e instanceof window.HTMLEmbedElement||e.hasAttribute("tabindex")&&-1!==e.getAttribute("tabindex")||e.hasAttribute("contenteditable")}var sp=Ru.getComponent("Player")
function op(e){var t=e.split(":")
return"vjs-".concat(t[0],"-").concat(t[1])}var lp=["auto","16:9","4:3","1:1"],up=(function(e){qh(n,sp)
var i=Xh(n)
function n(e,t){var r
Fh(this,n);(r=i.call(this,e,t))._focusableControls=r._getFocusableControls()
r._focusableControls.forEach((function(e){r.on(e,"keydown",r._handleKeydown)}))
return r}Hh(n,[{key:"_handleKeydown",value:function(e){!this.isFullscreen()||"Tab"!==e.key&&9!==e.keyCode||this._trapFullscreenTap(e)}},{key:"_trapFullscreenTap",value:function(e){if(t){var i,n=this._focusableControls.indexOf(e.target)
e.shiftKey?0===n&&(i=this._focusableControls.length-1):n===this._focusableControls.length-1&&(i=0)
if(void 0!==i){this._focusableControls[i].focus()
e.preventDefault()}}}},{key:"_getFocusableControls",value:function(){var e=this.controlBar.children(),t=[]
e.forEach((function(e){var i=e.el()
if(ap(i))t.push(i)
else if(i.children){var n=Array.from(i.children).find((function(e){return ap(e)}))
n&&t.push(n)}}))
return t}},{key:"aspectRatio",value:function(e){if(void 0===e)return this.aspectRatio_
np("media-player: Aspect ratio ".concat(e," is not supported"),lp.indexOf(e)>-1)
this.aspectRatio_&&"auto"!==this.aspectRatio_&&this.removeClass(op(this.aspectRatio_))
"auto"!==e&&this.addClass(op(e))
this.aspectRatio_=e
return e}},{key:"resetPlaybackRate_",value:function(){var e=this.playbackRate()
this.playbackRate(e)}},{key:"reset",value:function(){var e=this
this._isResetting=!0
var t=this.volume(),i=this.muted(),r=this.playbackRate()
this.one("playerreset",(function(){e.volume(t)
e.muted(i)
e.defaultPlaybackRate(r)
e._isResetting=!1}))
Yh(Wh(n.prototype),"reset",this).call(this)}},{key:"isResetting",value:function(){return this._isResetting||!1}}])
return n})()
Ru.registerComponent("Player",up)
var cp=Ru.getComponent("Component"),dp=Ru.dom,hp=(function(e){qh(i,cp)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments))._isShowing=!0
n.addClass("vjs-custom-captions-display")
n.hide()
n._hasPlayed=!1
n._showOnPlayed=!1
n.on(e,"playerreset",n._onPlayerReset)
n.on(e,"playing",n._onPlaying)
return n}Hh(i,[{key:"contentEl",value:function(){return this._cue}},{key:"hide",value:function(){if(this._isShowing){Yh(Wh(i.prototype),"hide",this).call(this)
this._showOnPlayed=!1
this._isShowing=!1
this.trigger("hide")}}},{key:"show",value:function(){this._hasPlayed?Yh(Wh(i.prototype),"show",this).call(this):this._showOnPlayed=!0
if(!this._isShowing){this._isShowing=!0
this.trigger("show")}}},{key:"createEl",value:function(){this._display=dp.createEl("div",void 0,{class:"vjs-custom-captions-display"})
this._cue=dp.createEl("div",void 0,{class:"vjs-custom-captions-cue",id:this.id()})
return dp.appendContent(this._display,this._cue)}},{key:"setText",value:function(e){dp.textContent(this.contentEl(),e)}},{key:"_onPlaying",value:function(){this._hasPlayed=!0
this._showOnPlayed&&this.show()}},{key:"_onPlayerReset",value:function(){var e=this._isShowing
this.hide()
this._hasPlayed=!1
this._showOnPlayed=e}}])
return i})()
Ru.registerComponent("CustomCaptionsDisplay",hp)
var pp=Ru.mergeOptions,fp=Ru.getComponent("Button"),mp="captions",gp={useCustomCaptions:!1,selected:!1},vp=(function(e){qh(i,fp)
var t=Xh(i)
function i(e,n){var r
Fh(this,i);(r=t.call(this,e,pp({},gp,n)))._player=e
r._isActive=!1
r.options_.useCustomCaptions||r.hide()
r.controlText("Show Captions")
r.addClass("vjs-captions-toggle")
if(r._player.usingPlugin("userPreferences")){r._userPrefs=r._player.userPreferences()
r._player.ready((function(){r._userPrefs.get(mp)&&r.activate()}))}if(r.options_.useCustomCaptions)r._player.ready((function(){var e=r._player.getChild("customCaptionsDisplay")
r.on(e,"show",r.activate)
r.on(e,"hide",r.deactivate)}))
else{var a=r._player.textTracks()
a&&r.on(a,"addtrack",r._handleAddTrack)}return r}Hh(i,[{key:"handleClick",value:function(){this._isActive?this.deactivate():this.activate()
this._userPrefs&&this._userPrefs.set(mp,this._isActive)}},{key:"activate",value:function(){if(!this._isActive){this.options_.useCustomCaptions?this._player.getChild("customCaptionsDisplay").show():this._textTrack&&(this._textTrack.mode="showing")
this.addClass("vjs-captions-active")
this.controlText("Hide Captions")
this._isActive=!0
this.trigger("activate")}}},{key:"deactivate",value:function(){if(this._isActive){this.options_.useCustomCaptions?this._player.getChild("customCaptionsDisplay").hide():this._textTrack&&(this._textTrack.mode="hidden")
this.removeClass("vjs-captions-active")
this.controlText("Show Captions")
this._isActive=!1
this.trigger("deactivate")}}},{key:"_handleAddTrack",value:function(e){if(e.track&&"captions"===e.track.kind){this._textTrack=e.track
this.show()
if("showing"===this._textTrack.mode&&!this._hasShownCaptions){this._hasShownCaptions=!0
this.activate()}this.trigger("addCaptionsTrack")}}}])
return i})()
Ru.registerComponent("CaptionsToggle",vp)
var yp=Ru.getComponent("TextTrackMenuItem"),_p=Ru.dom,bp=(function(e){qh(i,yp)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,[{key:"createEl",value:function(e,t,n){var r=Yh(Wh(i.prototype),"createEl",this).call(this,e,t,n)
if("subtitles"===this.options_.track.kind){this.options_.label="English (auto-generated)"
r.removeChild(r.querySelector(".vjs-menu-item-text"))
var a=_p.createEl("span",void 0,{class:"vjs-menu-item-text"})
_p.textContent(a,this.localize(this.options_.label))
r.appendChild(a)}return r}}])
return i})()
Ru.registerComponent("CaptionsMenuItem",bp)
var Tp=Ru.getComponent("TextTrackButton"),Sp=Ru.getComponent("OffTextTrackMenuItem"),kp=(function(e){qh(i,Tp)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Fh(this,i);(n=t.call(this,e,r))._player=e
n.controlText("Open Captions Menu")
n._isMenuOpen=!1
n.addClass("vjs-captions-menu-toggle")
var a=e.textTracks()
if(a){n.on(a,"addtrack",n._handleAddTrack)
n.on(a,"change",n._handleChangeTrack)}return n}Hh(i,[{key:"createItems",value:function(){var e=[];(e=Yh(Wh(i.prototype),"createItems",this).call(this,e,bp)).shift()
e.unshift(new Sp(this.player_,{kinds:this.kinds_,kind:this.kind_,label:"Off"}))
return e}},{key:"handleClick",value:function(e){Yh(Wh(i.prototype),"handleClick",this).call(this,e)
this._isMenuOpen=!this._isMenuOpen
this.controlText(this._isMenuOpen?"Close Captions Menu":"Open Captions Menu")}},{key:"_handleAddTrack",value:function(e){"showing"===e.track.mode&&this.addClass("vjs-captions-active")}},{key:"_handleChangeTrack",value:function(){this.items.some((function(e){return"showing"===e.track.mode}))?this.addClass("vjs-captions-active"):this.removeClass("vjs-captions-active")}}])
return i})()
kp.prototype.kinds_=["captions","subtitles"]
Ru.registerComponent("CaptionsMenuToggle",kp)
var Cp=Ru.getComponent("Button"),Ep=(function(e){qh(i,Cp)
var t=Xh(i)
function i(e,n){var r,a=n.disabled,s=void 0!==a&&a
Fh(this,i);(r=t.apply(this,arguments)).controlText("Previous")
r.addClass("vjs-previous-button")
s&&r.disable()
return r}Hh(i,[{key:"handleClick",value:function(){this.trigger("previous")}}])
return i})()
Ru.registerComponent("PreviousButton",Ep)
var wp=Ru.getComponent("Button"),Ip=(function(e){qh(i,wp)
var t=Xh(i)
function i(e,n){var r,a=n.disabled,s=void 0!==a&&a
Fh(this,i);(r=t.apply(this,arguments)).controlText("Next")
r.addClass("vjs-next-button")
s&&r.disable()
return r}Hh(i,[{key:"handleClick",value:function(){this.trigger("next")}}])
return i})()
Ru.registerComponent("NextButton",Ip)
var Pp=".vjs-play-control:not(.vjs-playing):not(.vjs-ended)",Ap=".vjs-play-control.vjs-playing:not(.vjs-ended)",xp=".vjs-play-control.vjs-ended",Op=".vjs-tech",Lp=".vjs-poster",Dp=".vjs-mute-control",Rp=".vjs-fullscreen-control",Np=".vjs-captions-toggle.vjs-captions-active",Mp=".vjs-captions-toggle:not(.vjs-captions-active)",Up=".vjs-progress-holder",Bp=".vjs-volume-control",jp=".vjs-back-to-start-button",Fp=".vjs-big-play-button",Vp={PLAY:"PLAY_CONTROL",PAUSE:"PAUSE_CONTROL",REPLAY:"REPLAY_CONTROL",MUTE:"MUTE_CONTROL",UNMUTE:"UNMUTE_CONTROL",POSTER:"POSTER_CONTROL",MEDIA:"MEDIA_CONTROL",FULLSCREEN:"FULLSCREEN_CONTROL",UNFULLSCREEN:"UNFULLSCREEN_CONTROL",CAPTIONS_ON:"CAPTIONS_ON_CONTROL",CAPTIONS_OFF:"CAPTIONS_OFF_CONTROL",PROGRESS_SCRUBBER:"PROGRESS_SCRUBBER_CONTROL",VOLUME_SLIDER:"VOLUME_SLIDER_CONTROL",BACK_TO_START:"BACK_TO_START_CONTROL",PLAY_OVERLAY:"PLAY_OVERLAY_CONTROL",SKIP_AHEAD:"SKIP_AHEAD_CONTROL",SKIP_BACK:"SKIP_BACK_CONTROL",THEATER_MODE:"THEATER_MODE_CONTROL"},Hp=Ru.getComponent("Button"),qp={DURATION:10},Wp=(function(e){qh(i,Hp)
var t=Xh(i)
function i(e,n){var r,a=n.duration,s=void 0===a?qp.DURATION:a
Fh(this,i);(r=t.apply(this,arguments))._player=e
r._duration=s
e.playerInteraction().registerControl(r.el(),Vp.SKIP_AHEAD)
r.controlText("Skip ahead")
r.addClass("vjs-skip-ahead-button")
return r}Hh(i,[{key:"handleClick",value:function(){var e=this._player.currentTime()+this._duration
e>this._player.duration()&&(e=this._player.duration())
this._player.currentTime(e)
this.trigger("skipAhead")}}])
return i})()
Ru.registerComponent("SkipAheadButton",Wp)
var zp=Ru.getComponent("Button"),Gp={DURATION:10},Kp=(function(e){qh(i,zp)
var t=Xh(i)
function i(e,n){var r,a=n.duration,s=void 0===a?Gp.DURATION:a
Fh(this,i);(r=t.apply(this,arguments))._player=e
r._duration=s
e.playerInteraction().registerControl(r.el(),Vp.SKIP_BACK)
r.controlText("Skip back")
r.addClass("vjs-skip-back-button")
return r}Hh(i,[{key:"handleClick",value:function(){var e=this._player.currentTime()-this._duration,t=e<0?0:e
this._player.currentTime(t)
this.trigger("skipBack")}}])
return i})()
Ru.registerComponent("SkipBackButton",Kp)
var Xp=Ru.getComponent("Button"),Yp=(function(e){qh(i,Xp)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments))._player=e
n.controlText("Back to start")
n.addClass("vjs-back-to-start-button")
return n}Hh(i,[{key:"handleClick",value:function(){this._player.currentTime(0)
this.trigger("backToStart")}}])
return i})()
Ru.registerComponent("BackToStartButton",Yp)
var Qp=Ru.getComponent("Button"),$p=(function(e){qh(i,Qp)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments))._player=e
n._player.playerInteraction().registerControl(n.el(),Vp.THEATER_MODE)
n.controlText("Theater mode")
n.addClass("vjs-theater-mode-button")
n.isTheaterModeEnabled=!1
return n}Hh(i,[{key:"handleClick",value:function(){this.isTheaterModeEnabled=!this.isTheaterModeEnabled
if(this.isTheaterModeEnabled){this.addClass("vjs-theater-mode-button--enabled")
this.controlText("Theater mode default view")
this.trigger("activate")}else{this.removeClass("vjs-theater-mode-button--enabled")
this.controlText("Theater mode")
this.trigger("deactivate")}}}])
return i})()
Ru.registerComponent("TheaterModeButton",$p)
var Jp=Ru.getComponent("PlaybackRateMenuButton"),Zp=Ru.getComponent("Menu"),ef=Ru.getComponent("PlaybackRateMenuItem"),tf=Ru.dom,nf=(function(e){qh(i,Jp)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,[{key:"createMenu",value:function(){var e=this,t=new Zp(this.player(),{menuButton:this}),i=this.playbackRates()
i&&i.forEach((function(i){var n=new ef(e.player(),{rate:"".concat(i,"x")}),r=tf.createEl("span",{className:"vjs-icon-placeholder"})
tf.prependTo(r,n.el())
n.addClass("vjs-menu-item-checkable")
t.addItem(n)}))
return t}},{key:"handleClick",value:function(){this.buttonPressed_?this.unpressButton():this.pressButton()}}])
return i})()
Ru.registerComponent("PlaybackRateMenuButton",nf)
var rf=Ru.getComponent("Component"),af=(function(e){qh(i,rf)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments)).addClass("vjs-poster-background")
n.setBackground()
n.on(e,"posterchange",n.setBackground)
return n}Hh(i,[{key:"setBackground",value:function(){var e=this.player_.poster()
this.el().style.backgroundImage=e?"url(".concat(e,")"):"none"}}])
return i})()
Ru.registerComponent("PosterBackground",af)
var sf=Ru.getComponent("Component"),of=Ru.dom,lf="LEFT",uf="RIGHT",cf={LEFT:"vjs-tooltip-left",RIGHT:"vjs-tooltip-right"},df=(function(e){qh(i,sf)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.control,s=r.text
Fh(this,i)
np("tooltip: must be pased a control",a);(n=t.apply(this,arguments)).player=e
n._control=a
n._titleText=n._control.el().getAttribute("title")
n.setText(s)
n.on(a,"mouseenter",n._onMouseenter)
n.on(a,"mouseleave",n._onMouseleave)
n.on(a,"dispose",(function(){return n.dispose()}))
return n}Hh(i,[{key:"createEl",value:function(){var e=cf[this.options_.side]||""
return Yh(Wh(i.prototype),"createEl",this).call(this,"div",{className:"vjs-tooltip ".concat(e)},{"aria-hidden":"true",role:"tooltip"})}},{key:"show",value:function(){if(!this._isShowing){this.addClass("vjs-tooltip-active")
this._control.el().removeAttribute("title")
this._isShowing=!0}}},{key:"hide",value:function(){if(this._isShowing){this.removeClass("vjs-tooltip-active")
this._control.el().setAttribute("title",this._titleText)
this._isShowing=!1}}},{key:"setText",value:function(e){var t=this.player.localize(e)
of.textContent(this.el(),t)}},{key:"_onMouseenter",value:function(){this.show()}},{key:"_onMouseleave",value:function(){this.hide()}}])
return i})()
df.prototype.options_={name:"ControlTooltip"}
Ru.registerComponent("ControlTooltip",df)
var hf=Ru.getComponent("FullscreenToggle"),pf=(function(e){qh(i,hf)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,[{key:"handleClick",value:function(){var e=this
Yh(Wh(i.prototype),"handleClick",this).apply(this,arguments)
this.player().one("fullscreenchange",(function(){e.el().focus()}))}}])
return i})()
Ru.registerComponent("FullscreenToggle",pf)
var ff=Ru.getComponent("Menu"),mf=Ru.dom,gf=(function(e){qh(i,ff)
var t=Xh(i)
function i(){var e
Fh(this,i);(e=t.apply(this,arguments)).on("focusout",e._onFocusout)
return e}Hh(i,[{key:"createEl",value:function(){var e=Yh(Wh(i.prototype),"createEl",this).apply(this,arguments)
mf.addClass(e,"vjs-settings-menu")
this._subMenus=mf.createEl("div",{className:"vjs-settings-menu-sub-menus"})
e.appendChild(this._subMenus)
return e}},{key:"addItem",value:function(e){var t=this
this.addChild(e)
var i=e.getMenu()
if(i){this._subMenus.appendChild(i.el())
this.on(e,"select",(function(){return t._onSelectSubMenu(e)}))
this.on(e,"deselect",(function(){return t._onDeselectSubMenu(e)}))}}},{key:"_onFocusout",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).relatedTarget
!this.menuButton_||this.el().contains(e)||this.menuButton_.el().contains(e)||this.menuButton_.unpressButton()}},{key:"_onSelectSubMenu",value:function(e){var t=e.getMenu()
if(t){t.focus()
this.addClass("vjs-settings-menu-sub-menu-active")}}},{key:"_onDeselectSubMenu",value:function(e){if(e.getMenu()){this.removeClass("vjs-settings-menu-sub-menu-active")
e.focus()}}}])
return i})()
Ru.registerComponent("SettingsMenu",gf)
var vf=Ru.getComponent("MenuItem"),yf=Ru.dom,_f=Ru.mergeOptions,bf={selectable:!0,valueText:void 0},Tf=(function(e){qh(i,vf)
var t=Xh(i)
function i(e,n){Fh(this,i)
return t.call(this,e,_f({},bf,n))}Hh(i,[{key:"createMenu",value:function(){}},{key:"getMenu",value:function(){return this._menu}},{key:"createEl",value:function(){var e=this,t=Yh(Wh(i.prototype),"createEl",this).apply(this,arguments),n=this.options_,r=n.valueText,a=n.icon
yf.addClass(t,"vjs-settings-menu-item")
this._menu=this.createMenu()
this._value=yf.createEl("div",{className:"vjs-settings-menu-item-value"})
r&&this.setValueText(r)
t.appendChild(this._value)
a&&yf.prependTo(yf.createEl("span",{className:"vjs-icon-placeholder"}),t)
if(this._menu){var s=new i(this.player(),{label:this.options_.label,icon:!0,selectable:!1})
s.addClass("vjs-settings-menu-item-header")
s.on(["tap","click"],(function(){e.selected(!1)}))
this._menu.addChild(s,{},0)
yf.addClass(t,"vjs-settings-menu-item-expandable")
t.appendChild(yf.createEl("span",{className:"vjs-icon-placeholder"}))
t.setAttribute("aria-haspopup","true")
t.setAttribute("aria-expanded","false")}return t}},{key:"setValueText",value:function(e){e&&yf.textContent(this._value,this.localize(e))}},{key:"selected",value:function(e){Yh(Wh(i.prototype),"selected",this).apply(this,arguments)
this.selectable&&(e?this._select():this._deselect())}},{key:"_select",value:function(){if(this._menu){this._menu.addClass("vjs-settings-menu-item-active")
this.el().setAttribute("aria-expanded","true")}this.trigger("select")}},{key:"_deselect",value:function(){if(this._menu){this._menu.removeClass("vjs-settings-menu-item-active")
this.el().setAttribute("aria-expanded","false")}this.trigger("deselect")}}])
return i})()
Ru.registerComponent("SettingsMenuItem",Tf)
function Sf(e){return!!e||!1===e||0===e}var kf=Ru.mergeOptions,Cf=Ru.getComponent("SettingsMenuItem"),Ef=Ru.getComponent("Toggle"),wf={multiselectable:!0,selected:!0},If=(function(e){qh(i,Cf)
var t=Xh(i)
function i(e,n){var r
Fh(this,i)
var a=(r=t.call(this,e,kf({},wf,n))).options_,s=a.userPrefsKey,o=a.enableUserPrefs,l=a.className
r.addClass("vjs-settings-toggle-menu-item")
l&&r.addClass(l)
if(o&&e.usingPlugin("userPreferences")){r._userPrefs=e.userPreferences()
r._userPrefsKey=s
e.ready((function(){var e=r._userPrefs.get(s)
Sf(e)&&r.selected(e)}))}return r}Hh(i,[{key:"createEl",value:function(){var e=Yh(Wh(i.prototype),"createEl",this).apply(this,arguments)
this._toggle=this._createToggle()
e.appendChild(this._toggle.el())
return e}},{key:"handleClick",value:function(){this.selected(!this.isSelected_)
this._userPrefs&&this._userPrefs.set(this._userPrefsKey,this.isSelected_)}},{key:"selected",value:function(e){if(Sf(e)&&e!==this._lastSelected){Yh(Wh(i.prototype),"selected",this).apply(this,arguments)
if(e){this.setValueText("On")
this._toggle.check()}else{this.setValueText("Off")
this._toggle.uncheck()}this._lastSelected=e}return this.isSelected_}},{key:"_createToggle",value:function(){var e=new Ef(this.player(),{readonly:!0})
e.el().setAttribute("aria-hidden","true")
return e}}])
return i})()
Ru.registerComponent("SettingsToggleMenuItem",If)
var Pf=Ru.getComponent("SettingsMenu"),Af=Ru.getComponent("MenuButton"),xf=(function(e){qh(i,Af)
var t=Xh(i)
function i(){var e
Fh(this,i);(e=t.apply(this,arguments)).addClass("vjs-settings-menu-button")
return e}Hh(i,[{key:"createMenu",value:function(){var e=new Pf(this.player(),{menuButton:this})
this.hideThreshold_=0
this.items||(this.items=this.createItems())
this.items.forEach((function(t){e.addItem(t)}))
return e}},{key:"createItems",value:function(){var e,t=this,i=this.options_&&this.options_.items||[]
if(Array.isArray(i)){e=i
i={}}else e=Object.keys(i)
return e.map((function(e){var n=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e.charAt(0).toUpperCase()+e.slice(1)})(e),r=Ru.getComponent(n)
np("settings-menu: Component ".concat(n," must exist"),r)
var a=new r(t.player(),i[e]||{})
a.addClass("vjs-settings-menu-button-item")
return a}))}}])
return i})()
xf.prototype.controlText_="Settings"
Ru.registerComponent("SettingsMenuButton",xf)
var Of=Ru.mergeOptions,Lf=Ru.getComponent("SettingsToggleMenuItem"),Df=(function(e){qh(i,Lf)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}return i})()
Df.prototype.options_=Of(Lf.prototype.options_,{label:"Autoplay",name:"AutoplaySetting",enableUserPrefs:!0,userPrefsKey:"autoplay",className:"vjs-autoplay-setting"})
Ru.registerComponent("AutoplaySetting",Df)
var Rf=Ru.mergeOptions,Nf=Ru.getComponent("SettingsToggleMenuItem"),Mf=(function(e){qh(i,Nf)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}return i})()
Mf.prototype.options_=Rf(Nf.prototype.options_,{label:"Auto-advance",name:"AutoAdvanceSetting",enableUserPrefs:!0,userPrefsKey:"auto-advance",className:"vjs-auto-advance-setting"})
Ru.registerComponent("AutoAdvanceSetting",Mf)
var Uf=Ru.mergeOptions,Bf=Ru.getComponent("SettingsMenu"),jf=Ru.getComponent("SettingsMenuItem"),Ff={multiselectable:!1,selected:!1},Vf="quality-adapt",Hf="quality-prog"
function qf(e){return"auto"===e?"Auto":"".concat(e,"p")}var Wf=(function(e){qh(i,jf)
var t=Xh(i)
function i(e,n){var r
Fh(this,i)
r=t.call(this,e,Uf({},Ff,n))
np("quality-setting: The qualityLevels plugin is required",e.hasPlugin("qualityLevels"))
r.addClass("vjs-quality-setting")
r._qualityLevels=e.qualityLevels()
r._items=[]
r._qualities=[]
r._selectedItem=null
if(e.usingPlugin("userPreferences")){r._userPrefs=e.userPreferences()
r._userPrefsKey=r.options_.userPrefsKey}r.on(r._qualityLevels,"addqualitylevel",r._onAddQualityLevel)
r.on(r._qualityLevels,"removequalitylevel",r._onRemoveQualityLevel)
r.on(r.player_,"sourceset",r._onSourceSet)
r.on(r.player_,"loadedmetadata",r._onLoadedMetadata)
r.on(r.player_,"playerreset",r._onPlayerReset)
return r}Hh(i,[{key:"createMenu",value:function(){var e=new Bf(this.player_)
e.addClass("vjs-quality-setting-sub-menu")
return e}},{key:"_onSourceSet",value:function(){this._isAdaptive()&&this._onAddQualityLevel({qualityLevel:{height:"auto"}})}},{key:"_onLoadedMetadata",value:function(){var e=this._userPrefs&&this._userPrefs.get(this._getUserPrefKey()),t=this._items[e]&&e
if(!t)if(this._isAdaptive())t="auto"
else{var i=this._qualityLevels,n=i[i.selectedIndex]
t=n&&n.height}var r=this._items[t]
r&&r.selected(!0)}},{key:"_onPlayerReset",value:function(){var e=this
this._qualities.forEach((function(t){e._removeQualityLevelMenuItem({height:t})}))
this._qualities=[]
this._selectedItem=null}},{key:"_onAddQualityLevel",value:function(e){var t=e.qualityLevel
this._qualities.push(t.height)
this._addQualityLevelMenuItem(t)}},{key:"_onRemoveQualityLevel",value:function(e){var t=e.qualityLevel
this._qualities.splice(this._qualities.indexOf(t.height),1)
this._removeQualityLevelMenuItem(t)}},{key:"_addQualityLevelMenuItem",value:function(e){var t=this,i=e.height,n=new jf(this.player_,{icon:!0,label:qf(i),selected:!1})
this.on(n,"select",(function(){t.trigger("change",e)
t._onSelectQuality(e)}))
n.addClass("vjs-quality-setting-level")
n.addClass("vjs-menu-item-checkable")
this._items[i]=n
this._menu.addItem(n)}},{key:"_removeQualityLevelMenuItem",value:function(e){var t=e.height,i=this._items[t]
this._menu.removeChild(i)
i.dispose()
delete this._items[t]}},{key:"_onSelectQuality",value:function(e){var t=e.height,i=this._qualityLevels,n=this._items[t]
if(this._selectedItem!==n){this._selectedItem&&this._selectedItem.selected(!1)
if(this._isAdaptive())for(var r=0;r<i.length;r++){var a=i[r]
a.enabled=a.height===t||"auto"===t}else{var s=this._qualities.indexOf(t)
i.selectedIndex_=s
i.trigger({type:"change",selectedIndex:s})}this.setValueText(qf(t))
this._selectedItem=n
this.selected(!1)
this._userPrefs&&this._userPrefs.set(this._getUserPrefKey(),t)}}},{key:"_isAdaptive",value:function(){return!!this.player_.tech({IWillNotUseThisInPlugins:!0}).vhs}},{key:"_getUserPrefKey",value:function(){var e=this._userPrefsKey
e||(e=this._isAdaptive()?Vf:Hf)
return e}}])
return i})()
Wf.prototype.options_=Uf(jf.prototype.options_,{label:"Quality",name:"QualitySetting"})
Ru.registerComponent("QualitySetting",Wf)
function zf(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
e&&"function"==typeof e[t]&&e[t].apply(e,$h(i))}var Gf="MediaInitializationStartEvent",Kf="MediaInitializationEndEvent",Xf="MediaBufferingStartEvent",Yf="MediaBufferingEndEvent",Qf="MediaPlaybackErrorV2Event",$f="MediaBitrateChangedEvent",Jf="MediaRenderedEvent",Zf="CAPTION",em="CUSTOM",tm="ABORTED",im="NETWORK",nm="DECODING",rm="SOURCE_FILE",am="ENCRYPTION",sm="INIT",om="SEEK",lm={EDGECAST:"ecst",AKAMAI:"akam"},um={STREAMING:"STREAMING",PROGRESSIVE:"PROGRESSIVE"},cm={HLS:"HLS"},dm={VIDEO:"VIDEO"},hm={HTML5:"HTML5"},pm={FREE:"FREE",PAID:"PAID",ENTERPRISE:"ENTERPRISE",GUEST:"GUEST"},fm=Object.keys(lm).map((function(e){return lm[e]})),mm=["ads","assessments","career_video","learning","linkedin","live_video","messaging","slideshare","stories","ugc.aws","ugc.inhouse","ugc"],gm=Object.assign||function(e,t){Object.keys(t).forEach((function(i){e[i]=t[i]}))
return e}
function vm(){return window.performance&&window.performance.timing&&"function"==typeof window.performance.now?Math.round(window.performance.now())+(window.performance.timing.navigationStart||1):(new Date).getTime()}var ym=(function(){function e(){Fh(this,e)
this._bufferingRanges={}
this.mediaHeader={}
this.mediaTrackingObject={objectUrn:""}}Hh(e,[{key:"_buildInitializationBeacon",value:function(e){var t={mobileHeader:null,mediaHeader:this.mediaHeader,mediaTrackingObject:this.mediaTrackingObject,initializationStartTime:this._initializationStartTs}
e||(t.duration=this._initializationEndTs-this._initializationStartTs)
return{eventName:e?Gf:Kf,eventBody:t}}},{key:"_buildBufferingEventBeacon",value:function(e,t){var i=this._bufferingRanges[e],n={mobileHeader:null,mediaHeader:this.mediaHeader,mediaTrackingObject:this.mediaTrackingObject,bufferingType:i.type,initializationStartTime:this._initializationStartTs,bufferingStartTime:i.start}
if(!t){n.duration=i.end-i.start
delete this._bufferingRanges[e]}return{eventName:t?Xf:Yf,eventBody:n}}},{key:"_buildMediaPlaybackErrorEventBeacon",value:function(e,t,i){var n={mobileHeader:null,mediaHeader:this.mediaHeader,mediaTrackingObject:this.mediaTrackingObject,errorType:e}
"string"==typeof t&&(n.errorMessage=t)
"string"==typeof i&&""!==i&&(n.url=i)
return{eventName:Qf,eventBody:n}}},{key:"_buildMediaBitrateChangedEventBeacon",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{eventName:$f,eventBody:gm({mobileHeader:null,mediaHeader:this.mediaHeader,mediaTrackingObject:this.mediaTrackingObject},e)}}},{key:"_buildMediaRenderedEvent",value:function(e){this._ensureInitCalled()
return{eventName:Jf,eventBody:{mobileHeader:null,mediaHeader:this.mediaHeader,mediaTrackingObject:this.mediaTrackingObject,perceivedTimeToFirstFrameDuration:e}}}},{key:"_ensureInitCalled",value:function(){if("number"!=typeof this._initializationStartTs)throw new Error("initializationStart not called")}},{key:"_throwErrorIfBufferingEventInvalid",value:function(e,t){this._ensureInitCalled()
if("number"!=typeof e)throw new TypeError("bufferingId not a number")
if(t){if("object"===jh(this._bufferingRanges[e]))throw new Error("duplicate bufferingId")}else if("object"!==jh(this._bufferingRanges[e])||void 0!==this._bufferingRanges[e].end)throw new Error("incorrect bufferingId or wrong buffering type")}},{key:"setTrackingId",value:function(e){this.mediaTrackingObject.trackingId=e}},{key:"setObjectUrn",value:function(e){this.mediaTrackingObject.objectUrn=e}},{key:"setMediaHeader",value:function(e){this.mediaHeader=e}},{key:"initializationStart",value:function(){this._initializationStartTs=vm()
return this._buildInitializationBeacon(!0)}},{key:"initializationEnd",value:function(){this._ensureInitCalled()
this._initializationEndTs=vm()
return this._buildInitializationBeacon(!1)}},{key:"mediaRenderStart",value:function(){this._renderStart=vm()}},{key:"mediaRenderEnd",value:function(){if(!this._renderStart)throw new Error("mediaRenderStart not called before mediaRenderEnd")
return this._buildMediaRenderedEvent(vm()-this._renderStart)}},{key:"bufferingStart",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type,i=void 0===t?null:t
this._throwErrorIfBufferingEventInvalid(e,!0)
this._bufferingRanges[e]={start:vm(),type:i}
return this._buildBufferingEventBeacon(e,!0)}},{key:"bufferingEnd",value:function(e){this._throwErrorIfBufferingEventInvalid(e,!1)
this._bufferingRanges[e].end=vm()
return this._buildBufferingEventBeacon(e,!1)}},{key:"mediaPlaybackError",value:function(e,t,i){var n=i
if("string"==typeof n&&""!==n){var r=n.match("^[^?]+")
n=Qh(r,1)[0]}return this._buildMediaPlaybackErrorEventBeacon(e,t,n)}},{key:"bitrateChangedEvent",value:function(e){return this._buildMediaBitrateChangedEventBeacon(e)}}])
return e})(),_m={"akamaihd.net":lm.AKAMAI,"files2.lynda.com":lm.AKAMAI,"files3.lynda.com":lm.EDGECAST,"s2.lynda.com":lm.EDGECAST}
function bm(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.cdnProvider,n=t.accountAccessType,r=t.mediaSource,a=t.contextTrackingId
i&&np("media-player: rum: cdnProvider must be a valid param",fm.includes(i))
n&&np("media-player: rum: accountAccessType must be a valid param",pm[n])
r&&rp("media-player: rum: mediaSource must be a valid param",mm.includes(r))
var s,o,l=!!e.tech({IWillNotUseThisInPlugins:!0}).vhs,u={deliveryMode:l?um.STREAMING:um.PROGRESSIVE,playerType:hm.HTML5,mediaType:dm.VIDEO,cdnProvider:i||(s=e.currentSource().src,o=Object.keys(_m).find((function(e){return s.includes(e)})),_m[o])}
n&&(u.accountAccessType=n)
r&&(u.mediaSource=r)
a&&(u.contextTrackingId=a)
l&&(u.streamProtocol=cm.HLS)
return u}var Tm={0:em,1:tm,2:im,3:nm,4:rm,5:am},Sm=Ru.getPlugin("plugin"),km=(function(e){qh(i,Sm)
var t=Xh(i)
function i(e,n){var r,a=n.mediaUrn,s=n.trackingId,o=n.mediaHeader,l=n.onTrack
Fh(this,i);(r=t.apply(this,arguments))._bufferId=0
r.setState({mediaUrn:a,trackingId:s,mediaHeader:o,onTrack:l})
r.on(e,"sourceset",r._onSourceset)
r.on(e,"loadstart",r._onLoadStart)
r.on(e,"loadedmetadata",r._onLoadedMetadata)
r.on(e,"loadeddata",r._onLoadedData)
r.on(e,"play",r._onPlay)
r.on(e,"playing",r._onPlaying)
r.on(e,"pause",r._onPause)
r.on(e,"waiting",r._onWaiting)
r.on(e,"error",r._onError)
r.on(e,"dispose",r._onDispose)
r.on(e,"playerreset",r._onPlayerReset)
r.on(e,"autoplay-failure",r._onAutoplayFailure)
var u=r.player.textTracks()
u&&r.on(u,"addtrack",r._onAddTrack)
e.ready((function(){r.player.usingPlugin("playlist")&&r.on(e.playlist(),"itemchange",(function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).plugins
np("rum must be updated on playlist item change",(void 0===t?{}:t).rum)}))}))
return r}Hh(i,[{key:"handleStateChanged",value:function(e){var t=e.changes
if(t.mediaUrn||t.trackingId){var i=this.state,n=i.trackingId,r=i.mediaUrn
np("rum: trackingId is required when updating medaUrn",n)
np("rum: mediaUrn is required when updating trackingId",r)
this.tracker=new ym
this.tracker.setObjectUrn(r)
this.tracker.setTrackingId(n)}}},{key:"_setInitializationStart",value:function(){if(!this._isInitializationStarted){this.tracker.setMediaHeader(bm(this.player,this.state.mediaHeader))
this._trigger(this.tracker.initializationStart())
this._isInitializationStarted=!0}}},{key:"_setInitializationEnd",value:function(){if(!this._isInitializationEnded){this._trigger(this.tracker.initializationEnd())
this._isInitializationEnded=!0}}},{key:"_setMediaRenderStart",value:function(){if(!this._isMediaRenderStarted){this.tracker.mediaRenderStart()
this._isMediaRenderStarted=!0}}},{key:"_setMediaRenderEnd",value:function(){if(!this._isMediaRenderEnded){this._trigger(this.tracker.mediaRenderEnd())
this._isMediaRenderEnded=!0}}},{key:"_setBufferingStart",value:function(){if(!this._isBuffering){this._isBuffering=!0
this._bufferId++
var e=null
this.player.seeking()?e=om:this._hasPlayed||(e=sm)
this._trigger(this.tracker.bufferingStart(this._bufferId,{type:e}))}}},{key:"_setBufferingEnd",value:function(){if(this._isBuffering){this._trigger(this.tracker.bufferingEnd(this._bufferId))
this._isBuffering=!1}}},{key:"_onSourceset",value:function(){this._reset()}},{key:"_onLoadStart",value:function(){"none"!==this.player.preload()&&this._setInitializationStart()}},{key:"_onLoadedMetadata",value:function(){this._metadataTrack=this.player.textTracks().tracks_.find((function(e){return"segment-metadata"===e.label}))
this._metadataTrack&&this.on(this._metadataTrack,"cuechange",this._onBitrateChange)}},{key:"_onLoadedData",value:function(){this._setInitializationStart()
this._setInitializationEnd()}},{key:"_onPlay",value:function(){this._setInitializationStart()
this._setMediaRenderStart()}},{key:"_onPause",value:function(){this._setBufferingEnd()}},{key:"_onAutoplayFailure",value:function(){this._setBufferingEnd()}},{key:"_onPlaying",value:function(){this._hasPlayed=!0
this._setBufferingEnd()
this._setMediaRenderEnd()}},{key:"_onWaiting",value:function(){this._setBufferingStart()}},{key:"_onBitrateChange",value:function(){var e=this._metadataTrack.activeCues[0],t=e&&e.value
if(t&&t.playlist!==this._lastCuePlaylist){var i=Math.floor(1e3*(t.end-t.start)),n=Qh(t.codecs?t.codecs.split(",").map((function(e){return e.trim()})):[],2),r=n[0],a=n[1]
this._trigger(this.tracker.bitrateChangedEvent({newBitrate:t.bandwidth,viewingDisplaySize:{width:this.player.currentWidth(),height:this.player.currentHeight()},encodedDisplaySize:t.resolution,audioCodec:a,videoCodec:r,newSegmentDuration:i,targetSegmentDuration:6e3,frameRate:60}))
this._lastCuePlaylist=t.playlist}}},{key:"_onError",value:function(){this._setBufferingEnd()
var e=this.player.error(),t=this.player.currentSrc(),i=this.tracker.mediaPlaybackError(Tm[e.code],e.message,t)
this._trigger(i)}},{key:"_onAddTrack",value:function(e){var t=e.track
t&&"captions"===t.kind&&this.one(t,"loadeddata",this._onCaptionsLoad)}},{key:"_onCaptionsLoad",value:function(){var e=this.player.log.history().find((function(e){var t=Qh(e,3)[2]
return t&&"ParsingError"===t.name}))
if(e){var t=[].find.call(this.player.textTracks(),(function(e){return"captions"===e.kind})),i=this.tracker.mediaPlaybackError(Zf,e[2].message,t.src)
this._trigger(i)}}},{key:"_onPlayerReset",value:function(){this._reset()}},{key:"_onDispose",value:function(){this._reset()}},{key:"_trigger",value:function(e){var t=e.eventBody,i=e.eventName
this.trigger(i,t)
this.trigger("track",{eventName:i,eventData:t})
zf(this.state,"onTrack",[i,t])}},{key:"_reset",value:function(){this._setBufferingEnd()
this._isInitializationStarted=!1
this._isInitializationEnded=!1
this._isBuffering=!1
this._isMediaRenderStarted=!1
this._isMediaRenderEnded=!1
this._hasPlayed=!1
if(this._metadataTrack){this.off(this._metadataTrack,"cuechange",this._onBitrateChange)
this._metadataTrack=null}}}])
return i})()
Ru.registerPlugin("rum",km)
function Cm(e,t,i){var n,r,a,s,o
null==t&&(t=100)
function l(){var u=Date.now()-s
if(u<t&&u>=0)n=setTimeout(l,t-u)
else{n=null
if(!i){o=e.apply(a,r)
a=r=null}}}var u=function(){a=this
r=arguments
s=Date.now()
var u=i&&!n
n||(n=setTimeout(l,t))
if(u){o=e.apply(a,r)
a=r=null}return o}
u.clear=function(){if(n){clearTimeout(n)
n=null}}
u.flush=function(){if(n){o=e.apply(a,r)
a=r=null
clearTimeout(n)
n=null}}
return u}Cm.debounce=Cm
var Em=Cm,wm="PlayerBeaconEvent",Im="PlayerPlayPauseEvent",Pm="PlayerSeekEvent",Am="PlayerVolumeChangedEvent",xm={AUTOPLAY_ON_LOAD:"AUTOPLAY_ON_LOAD",DISALLOW_BACKGROUND_PLAYBACK:"DISALLOW_BACKGROUND_PLAYBACK",ENTERED_VIEWPORT:"ENTERED_VIEWPORT",EXITED_VIEWPORT:"EXITED_VIEWPORT",USER_TRIGGERED:"USER_TRIGGERED",VIDEO_PRIORITY_CHANGED:"VIDEO_PRIORITY_CHANGED",VIDEO_AUTOLOOPED:"VIDEO_AUTOLOOPED"},Om="ON",Lm="OFF",Dm="NOT_MEASURED",Rm=Ru.getPlugin("plugin"),Nm=[0,3e3,7e3,2e4,3e4],Mm=300,Um=(function(e){qh(i,Rm)
var t=Xh(i)
function i(e,n){var r,a=n.mediaUrn,s=n.trackingId,o=n.mediaHeader,l=n.onTrack
Fh(this,i)
r=t.apply(this,arguments)
np("tracking: playerInteraction plugin is required",e.hasPlugin("playerInteraction"))
r._qualityLevels=e.qualityLevels()
r._isPlaying=!1
r._volume=r._getVolume()
r._fullscreenState=r._getFullScreenState()
r._isVisible=null
r._pauseReason=null
r._playReason=null
r.setState({mediaUrn:a,trackingId:s,mediaHeader:o,onTrack:l})
var u=r._onUnload.bind(Gh(r)),c=Em(r._onSeeked,Mm),d=Em(r._onVolumeChange,Mm)
r.on(e.playerInteraction(),"interact",r._onPlayerInteraction)
r.on(e,"fullscreenchange",r._onFullscreenChange)
r.on(e,"pause",r._onPause)
r.on(e,"play",r._onPlay)
r.on(e,"playing",r._onPlaying)
r.on(e,"timeupdate",r._onTimeupdate)
r.on(e,"ratechange",r._onRateChange)
r.on(e,"seeked",c)
r.on(e,"seeking",r._onSeeking)
r.on(e,"volumechange",d)
r.on(e,"waiting",r._onWaiting)
r.on(e,"sourceset",r._onSourceSet)
r.on(e,"playerreset",r._onPlayerReset)
var h="onpagehide"in window?"pagehide":"beforeunload"
window.addEventListener(h,u)
r.on("dispose",(function(){window.removeEventListener(h,u)
c.clear()
d.clear()}))
e.ready((function(){var t=e.playerVisibility()
t.ready((function(){r._isVisible=t.isVisible()
r.on(t,"visibilityChange",r._onVisibilityChange)}))
e.usingPlugin("playlist")&&r.on(e.playlist(),"itemchange",(function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).plugins
np("tracking must be updated on playlist item change",(void 0===t?{}:t).tracking)}))}))
return r}Hh(i,[{key:"getEventHash",value:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}},{key:"setPauseReason",value:function(e){np("tracking: A valid reason must be supplied to setPauseReason",xm[e])
this._pauseReason=e}},{key:"setPlayReason",value:function(e){np("tracking: A valid reason must be supplied to setPlayReason",xm[e])
this._playReason=e}},{key:"handleStateChanged",value:function(e){var t=e.changes
if(t.mediaUrn||t.trackingId){var i=this.state,n=i.mediaUrn,r=i.trackingId
np("tracking: trackingId is required when updating medaUrn",r)
np("tracking: mediaUrn is required when updating trackingId",n)
this.stopBeaconPolling()
this._mediaUrn=n
this._trackingId=r
this._mediaTrackingObject={objectUrn:n,trackingId:r}
this._userInteracted=!1
this._previousTimeElapsed=0
this._playbackRate=null}}},{key:"getPlayerState",value:function(){var e=this._qualityLevels[this._qualityLevels.selectedIndex],t=e?e.bitrate:this.player.currentSource().bitRate
this._playbackRate||(this._playbackRate=this.player.playbackRate())
return{bitrate:t||null,casting:Dm,ccVisible:Dm,downloaded:Dm,fullScreen:this._fullscreenState,isAudioOnly:!1,isPlaying:this._isPlaying,isVisible:this._isVisible,length:this._getDuration(),speed:this._playbackRate,timeElapsed:this.player.currentTime(),volume:this._volume}}},{key:"startBeaconPolling",value:function(){this._isPolling=!0
this._cancelBeaconInterval()
this._runBeaconInterval(Nm[0])}},{key:"restartBeaconPolling",value:function(){this._isPolling&&this.startBeaconPolling()}},{key:"stopBeaconPolling",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
if(this._isPolling){this._isPolling=!1
this._cancelBeaconInterval()
e&&this._fireBeaconEvent("STOP")
this._timeLastBeaconCalled=null}}},{key:"dispose",value:function(){this.stopBeaconPolling()
Yh(Wh(i.prototype),"dispose",this).call(this)}},{key:"_onPlayerReset",value:function(){this._playReason=null
this._pauseReason=null}},{key:"_onPlay",value:function(){this._isPlaying=!0
this._volume=this._getVolume()
this._trigger(Im,{mediaTrackingObject:this._mediaTrackingObject,mediaHeader:bm(this.player,this.state.mediaHeader),reason:this._playReason||xm.USER_TRIGGERED,state:this.getPlayerState()})
this._playReason=null}},{key:"_onPlaying",value:function(){this._isPlaying=!0
this.startBeaconPolling()}},{key:"_onPause",value:function(){this._isPlaying=!1
this._trigger(Im,{mediaTrackingObject:this._mediaTrackingObject,mediaHeader:bm(this.player,this.state.mediaHeader),reason:this._pauseReason||xm.USER_TRIGGERED,state:this.getPlayerState()})
this._pauseReason=null
this.stopBeaconPolling()}},{key:"_onWaiting",value:function(){this._isPlaying=!1
this.stopBeaconPolling()}},{key:"_onSourceSet",value:function(){this._isPlaying=!1
this.stopBeaconPolling()}},{key:"_onVolumeChange",value:function(){var e=this._volume
this.restartBeaconPolling()
this._volume=this._getVolume()
this._trigger(Am,{mediaTrackingObject:this._mediaTrackingObject,mediaHeader:bm(this.player,this.state.mediaHeader),state:this.getPlayerState(),previousVolume:e})}},{key:"_onFullscreenChange",value:function(){this.restartBeaconPolling()
this._fullscreenState=this._getFullScreenState()}},{key:"_onRateChange",value:function(){this.restartBeaconPolling()
this._playbackRate=this.player.playbackRate()}},{key:"_onSeeking",value:function(){this._isSeeking=!0}},{key:"_onTimeupdate",value:function(){this._isSeeking||this.player.seeking()||(this._previousTimeElapsed=this.player.currentTime())}},{key:"_onSeeked",value:function(){this._trigger(Pm,{mediaTrackingObject:this._mediaTrackingObject,mediaHeader:bm(this.player,this.state.mediaHeader),previousTimeElapsed:this._previousTimeElapsed,state:this.getPlayerState()})
this._isSeeking=!1}},{key:"_onPlayerInteraction",value:function(){this._userInteracted=!0}},{key:"_onUnload",value:function(){this.stopBeaconPolling()}},{key:"_onVisibilityChange",value:function(e,t){var i=t.isVisible
this.restartBeaconPolling()
this._isVisible=i}},{key:"_runBeaconInterval",value:function(e){var t=this,i=this.getPlayerState().timeElapsed
if(i===this._beaconTimeElapsed&&e>0)this.stopBeaconPolling(!1)
else{this._beaconTimeElapsed=i
var n=Nm[Nm.indexOf(e)+1]||Nm[Nm.length-1]
this._fireBeaconEvent(e)
this._beaconPoll=this.player.setTimeout((function(){return t._runBeaconInterval(n)}),n)}}},{key:"_cancelBeaconInterval",value:function(){if(this._beaconPoll){this.player.clearTimeout(this._beaconPoll)
this._beaconPoll=null}}},{key:"_fireBeaconEvent",value:function(){var e=vm(),t=e-(this._timeLastBeaconCalled||e)
this._timeLastBeaconCalled=e
this._trigger(wm,{mediaTrackingObject:this._mediaTrackingObject,mediaHeader:bm(this.player,this.state.mediaHeader),isAutoplaying:this._isAutoplaying(),timeSinceLastBeacon:t,state:this.getPlayerState()})}},{key:"_isAutoplaying",value:function(){return!this._userInteracted&&!!this.player.autoplay()}},{key:"_getFullScreenState",value:function(){return this.player.isFullscreen()?Om:Lm}},{key:"_getDuration",value:function(){var e=this.player.duration()
return e&&isFinite(e)?e:0}},{key:"_getVolume",value:function(){return this.player.muted()?0:Math.round(100*this.player.volume())}},{key:"_trigger",value:function(e,t){this.trigger(e,t)
this.trigger("track",{eventName:e,eventData:t})
zf(this.state,"onTrack",[e,t])}}])
return i})()
Ru.registerPlugin("tracking",Um)
var Bm=Ru.getPlugin("plugin"),jm=(function(e){qh(i,Bm)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.allowUnmutedBackgroundPlayback,s=void 0!==a&&a,o=r.visibilityChangeDelay,l=void 0===o?1e3:o
Fh(this,i)
n=t.apply(this,arguments)
np("playbackAudit: tracking plugin is required",e.hasPlugin("tracking"))
n._isVisible=null
n._checkVisibilityTimer=null
n._allowUnmutedBackgroundPlayback=s
n._visibilityChangeDelay=l
n.on(e,"timeupdate",n._onTimeupdate)
n.on(e,"pause",n._onPause)
n.on(e,"playerreset",n._onPlayerreset)
e.ready((function(){var t=e.playerVisibility()
t.ready((function(){n._isVisible=t.isVisible()
n.on(t,"visibilityChange",n._onVisibilityChange)}))}))
return n}Hh(i,[{key:"_isMuted",value:function(){return this.player.muted()||0===this.player.volume()}},{key:"_shouldPause",value:function(){return!this._isVisible&&!this.player.paused()&&!this.player.isFullscreen()&&(!this._allowUnmutedBackgroundPlayback||this._isMuted())}},{key:"_clearVisibilityTimer",value:function(){this.player.clearTimeout(this._checkVisibilityTimer)
this._checkVisibilityTimer=null}},{key:"_onVisibilityChange",value:function(e,t){var i=t.isVisible
this._isVisible=i
i&&this._clearVisibilityTimer()}},{key:"_onPlayerreset",value:function(){this._clearVisibilityTimer()}},{key:"_onPause",value:function(){this._clearVisibilityTimer()}},{key:"_onTimeupdate",value:function(){var e=this
!this._checkVisibilityTimer&&this._shouldPause()&&(this._checkVisibilityTimer=this.player.setTimeout((function(){if(e._shouldPause()){e.player.tracking().setPauseReason(xm.DISALLOW_BACKGROUND_PLAYBACK)
e.player.pause()}e._clearVisibilityTimer()}),this._visibilityChangeDelay))}}])
return i})()
Ru.registerPlugin("playbackAudit",jm)
var Fm=Ru.getPlugin("plugin"),Vm=(function(e){qh(i,Fm)
var t=Xh(i)
function i(e){var n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).onInteract
Fh(this,i);(n=t.apply(this,arguments))._registeredControls={}
n.setState({onInteract:r})
e.ready((function(){n._attachControlEventListeners()}))
return n}Hh(i,[{key:"registerControl",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
np("playerInteraction: A valid control el must be supplied to the `registerControl` method",e)
np("playerInteraction: A controlId must be supplied to the `registerControl` method",t)
this._registeredControls[t]||(this._registeredControls[t]=gm({el:e},i))}},{key:"unregisterControl",value:function(e){delete this._registeredControls[e]}},{key:"_attachControlEventListeners",value:function(){this.on(this.player,["click"],this._onInteraction)
var e=this.player.getDescendant("controlBar","volumePanel","volumeControl"),t=this.player.getDescendant("controlBar","progressControl","seekBar")
e&&this.on(e,["mouseup"],this._onInteraction)
t&&this.on(t,["click"],this._onInteraction)}},{key:"_onInteraction",value:function(e){var t=this._getControlId(e)
if(t){this.trigger("interact",{controlId:t})
zf(this.state,"onInteract",[t])}}},{key:"_getControlId",value:function(e){var t=this,i=e.target,n=e.currentTarget
return i.matches(Dp)?this.player.muted()?Vp.MUTE:Vp.UNMUTE:i.matches(Rp)?this.player.isFullscreen()?Vp.UNFULLSCREEN:Vp.FULLSCREEN:i.matches(Pp)?Vp.PLAY:i.matches(Ap)?Vp.PAUSE:i.matches(xp)?Vp.REPLAY:i.matches(Np)?Vp.CAPTIONS_ON:i.matches(Mp)?Vp.CAPTIONS_OFF:i.matches(Lp)?Vp.POSTER:i.matches(Op)?Vp.MEDIA:i.matches(jp)?Vp.BACK_TO_START:n.matches(Up)?Vp.PROGRESS_SCRUBBER:n.matches(Bp)?Vp.VOLUME_SLIDER:i.matches(Fp)?Vp.PLAY_OVERLAY:Object.keys(this._registeredControls).find((function(e){var n=t._registeredControls[e]
return i===n.el}))}}])
return i})()
Ru.registerPlugin("playerInteraction",Vm)
var Hm=Ru.getPlugin("plugin"),qm=(function(e){qh(i,Hm)
var t=Xh(i)
function i(e){var n
Fh(this,i)
n=t.apply(this,arguments)
e.addChild("PosterBackground",{},0)
return n}return i})()
Ru.registerPlugin("posterBackground",qm)
var Wm=Ru.getComponent("ModalDialog"),zm=Ru.mergeOptions,Gm=(function(e){qh(i,Wm)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.id,s=r.classNames
Fh(this,i);(n=t.apply(this,arguments))._player=e
n.addClass("vjs-screen")
a&&n.contentEl().setAttribute("id",a);(s||[]).forEach((function(e){n.setAttribute("class",e)}))
n.fill()
n.on("modalopen",n._onOpen)
n.on("modalclose",n._onClose)
return n}Hh(i,[{key:"_onOpen",value:function(){this._player.addClass("vjs-screen-active")
this.trigger("show")}},{key:"_onClose",value:function(){this._player.removeClass("vjs-screen-active")
this.trigger("hide")}}])
return i})()
Gm.prototype.options_=zm(Wm.prototype.options_,{uncloseable:!0,pauseOnOpen:!0,temporary:!1})
Ru.registerComponent("Screen",Gm)
var Km=Ru.getPlugin("plugin"),Xm=(function(e){qh(i,Km)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Fh(this,i);(n=t.apply(this,arguments))._player=e
n._options=r
n.screen=n._createScreen()
n.on(n._player,"play",n._onPlay)
n.on(n._player,"sourceset",n._onSourceset)
n.on("dispose",n._onDispose)
n._player.ready((function(){n.screen&&n.screen.open()}))
return n}Hh(i,[{key:"_createScreen",value:function(){var e=this,t=new Gm(this._player,this._options)
t.content()
t.addClass("vjs-start-screen")
t.on(["show","hide"],(function(t){e.trigger(t.type,{screen:e.screen})}))
this._player.addChild(t)
return t}},{key:"_onPlay",value:function(){this.screen.close()}},{key:"_onSourceset",value:function(){this.screen.open()}},{key:"_onDispose",value:function(){this._player.removeChild(this.screen)
this.screen=null}}])
return i})()
Ru.registerPlugin("startScreen",Xm)
var Ym=Ru.getPlugin("plugin"),Qm=(function(e){qh(i,Ym)
var t=Xh(i)
function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Fh(this,i);(n=t.apply(this,arguments))._player=e
n.screen=n._createScreen(r)
n.on(n._player,"ended",n._onEnded)
n.on(n._player,"play",n._onPlay)
n.on(n._player,"sourceset",n._onSourceset)
n.on(n._player,"playerreset",n._onPlayerreset)
n.on("dispose",n._onDispose)
n.enable()
return n}Hh(i,[{key:"enable",value:function(){this._isEnabled=!0
this._isEnded&&this.screen.open()}},{key:"disable",value:function(){this._isEnabled=!1
this._isEnded&&this.screen.close()}},{key:"enabled",value:function(){return this._isEnabled}},{key:"_createScreen",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.id,n=t.classNames,r=t.closeable,a=void 0===r||r,s=new Gm(this._player,{id:i,classNames:n,uncloseable:!a})
s.addClass("vjs-end-screen")
s.on(["show","hide"],(function(t){e.trigger(t.type,{screen:e.screen})}))
this._player.addChild(s)
return s}},{key:"_onEnded",value:function(){this._isEnded=!0
!this._player.loop()&&this.enabled()&&this.screen.open()}},{key:"_onPlay",value:function(){this._isEnded=!1
this.screen.close()}},{key:"_onSourceset",value:function(){this._isEnded=!1
this.screen.close()}},{key:"_onPlayerreset",value:function(){this._isEnded=!1
this.screen.close()}},{key:"_onDispose",value:function(){this._player.removeChild(this.screen)
this.screen=null}}])
return i})()
Ru.registerPlugin("endScreen",Qm)
var $m=Ru.getPlugin("plugin"),Jm=(function(e){qh(i,$m)
var t=Xh(i)
function i(e,n){var r
Fh(this,i);(r=t.apply(this,arguments))._player=e
r._options=n
r.screen=r._createScreen()
r._player.ready((function(){r._disableErrorDisplay()}))
r.on(r._player,"error",r._onError)
r.on(r._player,"play",r._onPlay)
r.on(r._player,"sourceset",r._onSourceset)
r.on(r._player,"playerreset",r._onPlayerreset)
r.on("dispose",r._onDispose)
return r}Hh(i,[{key:"_createScreen",value:function(){var e=this,t=new Gm(this._player,this._options)
t.addClass("vjs-error-screen")
t.on(["show","hide"],(function(t){e.trigger(t.type,{screen:e.screen,error:e._player.error()})}))
this._player.addChild(t)
return t}},{key:"_disableErrorDisplay",value:function(){var e=this._player.getChild("errorDisplay")
e&&e.dispose()}},{key:"_onError",value:function(){this.screen.open()}},{key:"_onPlay",value:function(){this.screen.close()}},{key:"_onSourceset",value:function(){this.screen.close()}},{key:"_onPlayerreset",value:function(){this.screen.close()}},{key:"_onDispose",value:function(){this._player.removeChild(this.screen)
this.screen=null}}])
return i})()
Ru.registerPlugin("errorScreen",Jm)
var Zm=Ru.getComponent("Component"),eg=Ru.getPlugin("plugin"),tg=(function(e){qh(i,eg)
var t=Xh(i)
function i(e,n){var r
Fh(this,i);(r=t.call(this,e,n))._player=e
return r}Hh(i,[{key:"createControl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new Zm(this._player)
e.id&&t.setAttribute("id",e.id)
e.className&&t.setAttribute("class",e.className)
t.addClass("vjs-control")
return this._player.getChild("controlBar").addChild(t,{},e.index)}}])
return i})()
Ru.registerPlugin("customControl",tg)
var ig="video_toolbar_mute_unmute",ng="video_toolbar_fullscreen_toggle",rg={PLAY_CONTROL:"video_toolbar_play",PAUSE_CONTROL:"video_toolbar_pause",REPLAY_CONTROL:"video_toolbar_replay",MUTE_CONTROL:ig,UNMUTE_CONTROL:ig,FULLSCREEN_CONTROL:ng,UNFULLSCREEN_CONTROL:ng,PROGRESS_SCRUBBER_CONTROL:"video_toolbar_scrubber",VOLUME_SLIDER_CONTROL:"video_toolbar_volume_slider",BACK_TO_START_CONTROL:"video_toolbar_back_to_start",THEATER_MODE_CONTROL:"video_toolbar_theater_mode",PLAY_OVERLAY_CONTROL:"video_thumbnail_play",POSTER_CONTROL:"video_thumbnail_play"},ag="SHORT_PRESS",sg="DRAG",og="SWIPE_RIGHT",lg="SWIPE_LEFT",ug=Ru.getPlugin("plugin"),cg=(function(e){qh(i,ug)
var t=Xh(i)
function i(e){var n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).onTrack
Fh(this,i);(n=t.apply(this,arguments)).setState({onTrack:r})
np("control-interaction: playerInteraction plugin is required",e.hasPlugin("playerInteraction"))
n.on(e.playerInteraction(),"interact",n._onPlayerInteraction)
n.on(e,"volumechange",n._onVolumechange)
return n}Hh(i,[{key:"_onPlayerInteraction",value:function(e,t){var i=t.controlId,n=rg[i]
rp("media-player: control-interaction: controlId ".concat(i," was registered with the playerInteraction plugin but no associated control name was found."),n)
if(n){var r,a={controlName:n}
i===Vp.VOLUME_SLIDER?r=this._previousVolume<this._currentVolume?og:lg:i===Vp.PROGRESS_SCRUBBER&&(r=sg)
r&&(a.eventInfo={interactionType:r})
this.fireControlInteractionEvent(a)}}},{key:"_onVolumechange",value:function(){var e=this.player.volume()
this._previousVolume=Number.isNaN(this._currentVolume)?e:this._currentVolume
this._currentVolume=e}},{key:"fireControlInteractionEvent",value:function(e){var t=e.controlName,i=e.eventInfo,n=(void 0===i?{}:i).interactionType||ag
np("controlInteraction: controlName must be a property on eventData",t)
this.trigger("track",e)
zf(this.state,"onTrack",[t,n])}}])
return i})()
Ru.registerPlugin("controlInteraction",cg)
var dg=Ru.getPlugin("plugin"),hg=Ru.mergeOptions,pg={namespace:void 0},fg="media-player-prefs",mg="rate",gg="volume",vg="muted",yg=(function(e){qh(i,dg)
var t=Xh(i)
function i(e,n){var r
Fh(this,i)
r=t.apply(this,arguments)
var a=hg(pg,n).namespace
r._key=a?"".concat(a,":").concat(fg):fg
r.one(r.player,"loadstart",r._onLoadStart)
r.player.ready((function(){r.on(r.player,"ratechange",r._onRatechange)
r.on(r.player,"volumechange",r._onVolumechange)}))
return r}Hh(i,[{key:"set",value:function(e,t){if(!this._cache||this._cache[e]!==t){var i=hg(this._cache,(function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i
return e})({},e,t))
try{this.localStorage.setItem(this._key,JSON.stringify(i))}catch(Kg){}this._cache=i}}},{key:"save",value:function(e){try{this.localStorage.setItem(this._key,JSON.stringify(e))}catch(Kg){}}},{key:"get",value:function(e){if(this._cache)return this._cache[e]
try{var t=this.localStorage.getItem(this._key)
this._cache=t?JSON.parse(t):{}}catch(Kg){this._cache={}}return this._cache[e]}},{key:"_onLoadStart",value:function(){this._setInitialRate()
this._setInitialVolume()}},{key:"_onRatechange",value:function(){if(!this.player.isResetting()){var e=this.player.playbackRate()
this.set(mg,e)
this.player.defaultPlaybackRate(e)}}},{key:"_onVolumechange",value:function(){if(!this.player.isResetting()){this.set(vg,this.player.muted())
this.set(gg,this.player.volume())}}},{key:"_setInitialVolume",value:function(){var e=this.get(gg),t=this.get(vg)
Sf(e)&&this.player.volume(e)
Sf(t)&&!Sf(this.player.options_.muted)&&this.player.muted(t)}},{key:"_setInitialRate",value:function(){var e=this.get(mg),t=this.player.getChild("controlBar").getChild("playbackRateMenuButton")
if(e&&t&&t.playbackRates().indexOf(e)>-1){this.player.defaultPlaybackRate(e)
this.player.playbackRate(e)}}}])
return i})()
if(t)try{yg.prototype.localStorage=window.localStorage}catch(Kg){}Ru.registerPlugin("userPreferences",yg)
var _g=(function(e){qh(i,df)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments)).on(e,"play",n._onPlay)
n.on(e,"pause",n._onPause)
n.on(e,"ended",n._onEnded)
return n}Hh(i,[{key:"_onPlay",value:function(){this.setText("Pause tooltip")}},{key:"_onPause",value:function(){this.setText("Play tooltip")}},{key:"_onEnded",value:function(){this.setText("Replay tooltip")}}],[{key:"getDefaultText",value:function(){return"Play tooltip"}}])
return i})()
Ru.registerComponent("PlayToggleTooltip",_g)
var bg=(function(e){qh(i,df)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments)).on(e,"fullscreenchange",n._onFullscreenchange)
return n}Hh(i,[{key:"_onFullscreenchange",value:function(){this.player.isFullscreen()?this.setText("Exit fullscreen tooltip"):this.setText("Fullscreen tooltip")}}],[{key:"getDefaultText",value:function(){return"Fullscreen tooltip"}}])
return i})()
Ru.registerComponent("FullscreenToggleTooltip",bg)
var Tg=(function(e){qh(i,df)
var t=Xh(i)
function i(e){var n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).control
Fh(this,i);(n=t.apply(this,arguments)).on(r,"activate",n._onActivate)
n.on(r,"deactivate",n._onDeactivate)
return n}Hh(i,[{key:"_onActivate",value:function(){this.setText("Hide captions tooltip")}},{key:"_onDeactivate",value:function(){this.setText("Show captions tooltip")}}],[{key:"getDefaultText",value:function(){return"Show captions tooltip"}}])
return i})()
Ru.registerComponent("CaptionsToggleTooltip",Tg)
var Sg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Captions Menu tooltip"}}])
return i})()
Ru.registerComponent("CaptionsMenuToggleTooltip",Sg)
var kg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Skip back tooltip"}}])
return i})()
Ru.registerComponent("SkipBackTooltip",kg)
var Cg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Skip ahead tooltip"}}])
return i})()
Ru.registerComponent("SkipAheadTooltip",Cg)
var Eg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Back to start tooltip"}}])
return i})()
Ru.registerComponent("BackToStartTooltip",Eg)
var wg=(function(e){qh(i,df)
var t=Xh(i)
function i(e){var n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).control
Fh(this,i);(n=t.apply(this,arguments)).on(r,"activate",n._onActivate)
n.on(r,"deactivate",n._onDeactivate)
return n}Hh(i,[{key:"_onActivate",value:function(){this.setText("Deactivate theater mode tooltip")}},{key:"_onDeactivate",value:function(){this.setText("Activate theater mode tooltip")}}],[{key:"getDefaultText",value:function(){return"Activate theater mode tooltip"}}])
return i})()
Ru.registerComponent("TheaterModeTooltip",wg)
var Ig=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Previous tooltip"}}])
return i})()
Ru.registerComponent("PreviousTooltip",Ig)
var Pg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Next tooltip"}}])
return i})()
Ru.registerComponent("NextTooltip",Pg)
var Ag=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Settings tooltip"}}])
return i})()
Ru.registerComponent("SettingsMenuTooltip",Ag)
var xg=(function(e){qh(i,df)
var t=Xh(i)
function i(){Fh(this,i)
return t.apply(this,arguments)}Hh(i,null,[{key:"getDefaultText",value:function(){return"Playback speed tooltip"}}])
return i})()
Ru.registerComponent("PlaybackRateMenuTooltip",xg)
var Og=Ru.getPlugin("plugin"),Lg=Ru.getComponent("ControlTooltip"),Dg={PlayToggle:_g,SkipBackButton:kg,SkipAheadButton:Cg,BackToStartButton:Eg,TheaterModeButton:wg,PreviousButton:Ig,NextButton:Pg,CaptionsToggle:Tg,CaptionsMenuToggle:Sg,FullscreenToggle:bg,"SettingsMenuButton.SettingsMenuButton":Ag,"PlaybackRateMenuButton.PlaybackRateMenuButton":xg},Rg=(function(e){qh(i,Og)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments))._player=e
e.ready((function(){n._controlBar=e.getChild("controlBar")
n._controls=n._controlBar.children()
n._middleIndex=n._getMiddleIndex()
Object.keys(Dg).forEach((function(e){var t=Dg[e]
np("tooltip: The tooltip class must provide a getDefaultText method","function"==typeof t.getDefaultText)
var i=n._controlBar.getDescendant(e.split("."))
if(i){var r=i,a=e.split(".")
a.length>1&&(r=n._controlBar.getChild(a[0]))
n.addTooltip(i,{side:n._getSide(r),TooltipClass:t})}}))
n._middleIndex=null}))
return n}Hh(i,[{key:"addTooltip",value:function(e,t){var i=t.side,n=t.TooltipClass,r=void 0===n?Lg:n,a=new r(this._player,{control:e,side:i,text:r.getDefaultText()})
e.addChild(a)}},{key:"_getSide",value:function(e){var t=this._middleIndex||this._getMiddleIndex()
if(t){return this._controls.indexOf(e)>t?uf:lf}return null}},{key:"_getMiddleIndex",value:function(){var e=this._controlBar.getChild("CustomControlSpacer"),t=e&&this._controls.indexOf(e)
return t>-1?t:null}}])
return i})()
Ru.registerPlugin("controlTooltips",Rg)
var Ng=Ru.getPlugin("plugin"),Mg=(function(e){qh(i,Ng)
var t=Xh(i)
function i(e){var n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).autoplay,a=void 0===r||r
Fh(this,i);(n=t.apply(this,arguments))._autoplay=a
e.ready((function(){var t=e.getDescendant("controlBar","nextButton"),i=e.getDescendant("controlBar","previousButton")
t&&n.on(t,"next",(function(){n.next({autoplay:a&&!e.paused()})}))
i&&n.on(i,"previous",(function(){n.previous({autoplay:a&&!e.paused()})}))
n.on(e,"ended",n._onEnded)}))
return n}Hh(i,[{key:"previous",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoplay
this.player.options({autoplay:!!e&&"play"})
this.trigger("previous")}},{key:"next",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoplay
this.player.options({autoplay:!!e&&"play"})
this.trigger("next")}},{key:"setCurrentItem",value:function(e){var t=this,i=e.source,n=e.autoplay,r=e.plugins,a=void 0===r?{}:r
np("playlist setCurrentItem(): source is required",i)
this.player.reset()
Sf(n)&&this.player.options({autoplay:n})
Object.keys(a).forEach((function(e){t.player[e]().setState(a[e])}))
this.player.src(i)
this.trigger("itemchange",e)}},{key:"_onEnded",value:function(){var e=this.player,t=e.getDescendant("controlBar","settingsMenuButton"),i=t&&t.menu.getChild("autoplaySetting"),n=!i||i.selected(),r=this._autoplay&&n&&!e.loop()
this.trigger("ended",{autoplay:r,next:this.next.bind(this)})}}])
return i})()
Ru.registerPlugin("playlist",Mg)
Ru.registerPlugin("disableContextMenu",(function(){this.on("contextmenu",(function(e){e.preventDefault()}))}))
var Ug=!1,Bg=!1,jg=!1
Ru.registerPlugin("highContrastMode",(function(){var e=this.el()
if(t&&!jg){var i=document.createElement("div")
i.style.width="1px"
i.style.height="1px"
i.style.backgroundImage="url(".concat("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",")")
i.style.backgroundColor="#000000"
e.appendChild(i)
var n=window.getComputedStyle(i)
Ug="none"===n.backgroundImage
Bg="rgb(255, 255, 255)"===n.backgroundColor
e.removeChild(i)}Ug&&this.addClass("vjs-high-contrast")
Bg&&this.addClass("vjs-black-on-white")
jg=!0}))
Ru.registerPlugin("throwErrors",(function(){var e=Ru.log.error
Ru.log.error=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n]
if(i[0]instanceof Error)throw i[0]
e.apply(e,i)}}))
Ru.registerPlugin("useMercado",(function(){this.addClass("media-player--use-mercado")}))
var Fg=Ru.getPlugin("plugin"),Vg=(function(e){qh(n,Fg)
var i=Xh(n)
function n(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.rootMargin,o=a.threshold,l=void 0===o?0:o
Fh(this,n)
r=i.apply(this,arguments)
if(!t)return Kh(r)
r._threshold=l
r._isInViewport=null
r._isDocumentVisible=!document.hidden
var u=r._onDocumentVisibilityChange.bind(Gh(r))
document.addEventListener("visibilitychange",u)
var c=new window.IntersectionObserver(r._onInViewportChange.bind(Gh(r)),{rootMargin:s,threshold:l})
c.observe(e.el())
r.on(e,"dispose",(function(){document.removeEventListener("visibilitychange",u)
c.disconnect()
c=void 0}))
return r}Hh(n,[{key:"ready",value:function(e){this._isReady?e():this.on("ready",e)}},{key:"isVisible",value:function(){np("player-visibility: isVisible should not be called before `ready`",this._isReady)
return this._isVisible}},{key:"isInViewport",value:function(){np("player-visibility: isInViewport should not be called before `ready`",this._isReady)
return this._isInViewport}},{key:"isDocumentVisible",value:function(){return this._isDocumentVisible}},{key:"_onInViewportChange",value:function(e){var t=this
e.forEach((function(e){var i=e.isIntersecting,n=e.intersectionRatio
t._isInViewport=i&&n>=t._threshold}))
this._setIsVisible()
if(this._isReady)this.trigger("inViewportChange",{isInViewport:this._isInViewport})
else{this._isReady=!0
this.trigger("ready")}}},{key:"_onDocumentVisibilityChange",value:function(){this._isDocumentVisible=!document.hidden
this._setIsVisible()
this.trigger("documentVisibilityChange",{isDocumentVisible:this._isDocumentVisible})}},{key:"_setIsVisible",value:function(){var e=this._isVisible
this._isVisible=this._isDocumentVisible&&this._isInViewport
this._isReady&&this._isVisible!==e&&this.trigger("visibilityChange",{isVisible:this._isVisible,isDocumentVisible:this._isDocumentVisible,isInViewport:this._isInViewport})}}])
return n})()
Ru.registerPlugin("playerVisibility",Vg)
var Hg=Ru.getPlugin("plugin"),qg=["ready","loadstart","loadeddata","loadedmetadata","canplay","autoplay-success","autoplay-failure"],Wg=(function(e){qh(i,Hg)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments)).Promise=e.options().Promise||window.Promise
n._setupEventPromises()
n.on(e,"playerreset",n._onReset)
return n}Hh(i,[{key:"waitForEvent",value:function(e){np("lifecycle: Must be a supported event",qg.includes(e))
return this._eventPromises[e]}},{key:"_setupEventPromises",value:function(){var e=this
this._eventPromises={}
qg.forEach((function(t){e._eventPromises[t]=new e.Promise(function(i){e.one(e.player,t,i)
e.one(e.player,"playerreset",(function(){e.off(e.player,t,i)}))})}))}},{key:"_onReset",value:function(){this._setupEventPromises()}}])
return i})()
Ru.registerPlugin("lifecycle",Wg)
var zg=Ru.getPlugin("plugin"),Gg=(function(e){qh(i,zg)
var t=Xh(i)
function i(e){var n
Fh(this,i);(n=t.apply(this,arguments))._poster=null
n.on(e,"play",n._onPlay)
n.on(e,"pause",n._onPause)
n.on(e,"playerreset",n._onReset)
n.on(e,"sourceset",n._onSourceSet)
n.one(e,"loadstart",(function(){n.on(e,"posterchange",n._onPosterChange)
n.on(e,"autoplay-failure",n._onAutoplayFailure)}))
return n}Hh(i,[{key:"_onPlay",value:function(){this.player.addClass("vjs-is-playing")}},{key:"_onPause",value:function(){this.player.removeClass("vjs-is-playing")}},{key:"_onSourceSet",value:function(){this.player.autoplay()||this.player.removeClass("vjs-is-playing")}},{key:"_onReset",value:function(){this._poster=null}},{key:"_onPosterChange",value:function(){var e=this.player.poster()
if(e&&this.player.autoplay()&&e!==this._poster){this._poster=e
this.player.poster("")}}},{key:"_onAutoplayFailure",value:function(){if(this._poster){this.player.poster(this._poster)
this._poster=null}}}])
return i})()
Ru.registerPlugin("smoothMediaChange",Gg)
e.createPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Ru(e,Ru.mergeOptions({customCaptionsDisplay:!1,children:{mediaLoader:{},posterImage:{},bigPlayButton:{},loadingSpinner:{},controlBar:{},errorDisplay:{},customCaptionsDisplay:{},textTrackDisplay:{},resizeManager:{},liveTracker:{}},controlBar:{skipBackButton:!1,skipAheadButton:!1,previousButton:!1,nextButton:!1,settingsMenuButton:!1,backToStartButton:!1,theaterModeButton:!1,fullscreenToggle:!1,captionsToggle:!1,captionsMenuToggle:!1,muteToggle:!1,children:{progressControl:{},playToggle:{},backToStartButton:{},skipBackButton:{},skipAheadButton:{},previousButton:{},nextButton:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},liveDisplay:{},customControlSpacer:{},playbackRateMenuButton:{},captionsToggle:{},captionsMenuToggle:{},settingsMenuButton:{},volumePanel:{inline:!1},muteToggle:{},theaterModeButton:{},fullscreenToggle:{}}},plugins:{disableContextMenu:!0,lifecycle:!0,qualityLevels:!0,highContrastMode:!0},controls:!0,fluid:!0,responsive:!0,aspectRatio:"auto",enableSourceset:!0,techOrder:["html5"],html5:{vhs:{withCredentials:!1},nativeTextTracks:!1}},t,{autoplay:!0===t.autoplay?"any":t.autoplay||!1}))}
e.videojs=Ru
Object.defineProperty(e,"__esModule",{value:!0})})

//# sourceMappingURL=media-player.amd.map
