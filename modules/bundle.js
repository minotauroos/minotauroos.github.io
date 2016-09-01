/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
/*
 * jquery.finger
 * https://github.com/ngryman/jquery.finger
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
/*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
(function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[];d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,h===0?l=0:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(d!=="transparent"&&(a.type(d)!=="string"||(e=n(d)))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(j){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);


(function($, ua) {

	var isChrome = /chrome/i.exec(ua),
		isAndroid = /android/i.exec(ua),
		hasTouch = 'ontouchstart' in window && !(isChrome && !isAndroid),
		startEvent = hasTouch ? 'touchstart' : 'mousedown',
		stopEvent = hasTouch ? 'touchend touchcancel' : 'mouseup mouseleave',
		moveEvent = hasTouch ? 'touchmove' : 'mousemove',

		namespace = 'finger',
		rootEl = $('html')[0],

		start = {},
		move = {},
		motion,
		cancel,
		safeguard,
		timeout,
		prevEl,
		prevTime,

		Finger = $.Finger = {
			pressDuration: 300,
			doubleTapInterval: 300,
			flickDuration: 150,
			motionThreshold: 5
		};

	function preventDefault(event) {
		event.preventDefault();
		$.event.remove(rootEl, 'click', preventDefault);
	}

	function page(coord, event) {
		return (hasTouch ? event.originalEvent.touches[0] : event)['page' + coord.toUpperCase()];
	}

	function trigger(event, evtName, remove) {
		var fingerEvent = $.Event(evtName, move);
		$.event.trigger(fingerEvent, { originalEvent: event }, event.target);

		if (fingerEvent.isDefaultPrevented()) {
			if (~evtName.indexOf('tap') && !hasTouch)
				$.event.add(rootEl, 'click', preventDefault);
			else
				event.preventDefault();
		}

		if (remove) {
			$.event.remove(rootEl, moveEvent + '.' + namespace, moveHandler);
			$.event.remove(rootEl, stopEvent + '.' + namespace, stopHandler);
		}
	}

	function startHandler(event) {
		var timeStamp = event.timeStamp || +new Date();

		if (safeguard == timeStamp) return;
		safeguard = timeStamp;

		// initializes data
		start.x = move.x = page('x', event);
		start.y = move.y = page('y', event);
		start.time = timeStamp;
		start.target = event.target;
		move.orientation = null;
		move.end = false;
		motion = false;
		cancel = false;
		timeout = setTimeout(function() {
			cancel = true;
			trigger(event, 'press');
		}, $.Finger.pressDuration);

		$.event.add(rootEl, moveEvent + '.' + namespace, moveHandler);
		$.event.add(rootEl, stopEvent + '.' + namespace, stopHandler);

		// global prevent default
		if (Finger.preventDefault) {
			event.preventDefault();
			$.event.add(rootEl, 'click', preventDefault);
		}
	}

	function moveHandler(event) {
		// motion data
		move.x = page('x', event);
		move.y = page('y', event);
		move.dx = move.x - start.x;
		move.dy = move.y - start.y;
		move.adx = Math.abs(move.dx);
		move.ady = Math.abs(move.dy);

		// security
		motion = move.adx > Finger.motionThreshold || move.ady > Finger.motionThreshold;
		if (!motion) return;

		// moves cancel press events
		clearTimeout(timeout);

		// orientation
		if (!move.orientation) {
			if (move.adx > move.ady) {
				move.orientation = 'horizontal';
				move.direction = move.dx > 0 ? +1 : -1;
			}
			else {
				move.orientation = 'vertical';
				move.direction = move.dy > 0 ? +1 : -1;
			}
		}

		// for delegated events, the target may change over time
		// this ensures we notify the right target and simulates the mouseleave behavior
		while (event.target && event.target !== start.target)
			event.target = event.target.parentNode;
		if (event.target !== start.target) {
			event.target = start.target;
			stopHandler.call(this, $.Event(stopEvent + '.' + namespace, event));
			return;
		}

		// fire drag event
		trigger(event, 'drag');
	}

	function stopHandler(event) {
		var timeStamp = event.timeStamp || +new Date(),
			dt = timeStamp - start.time,
			evtName;

		// always clears press timeout
		clearTimeout(timeout);

		// tap-like events
		// triggered only if targets match
		if (!motion && !cancel && event.target === start.target) {
			var doubleTap = prevEl === event.target && timeStamp - prevTime < Finger.doubleTapInterval;
			evtName = doubleTap ? 'doubletap' : 'tap';
			prevEl = doubleTap ? null : start.target;
			prevTime = timeStamp;
		}
		// motion events
		else {
			// ensure last target is set the initial one
			event.target = start.target;
			if (dt < Finger.flickDuration) trigger(event, 'flick');
			move.end = true;
			evtName = 'drag';
		}

		trigger(event, evtName, true);
	}

	// initial binding
	$.event.add(rootEl, startEvent + '.' + namespace, startHandler);

})(jQuery, navigator.userAgent);
(function(){function e(e){if(this._element=e,e.className!=this._classCache){if(this._classCache=e.className,!this._classCache)return;var t,n=this._classCache.replace(/^\s+|\s+$/g,"").split(/\s+/);for(t=0;n.length>t;t++)a.call(this,n[t])}}function t(e,t){e.className=t.join(" ")}function n(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}if(!(window.Element===void 0||"classList"in document.documentElement)){var r=Array.prototype,o=r.indexOf,i=r.slice,a=r.push,s=r.splice,c=r.join;e.prototype={add:function(e){this.contains(e)||(a.call(this,e),t(this._element,i.call(this,0)))},contains:function(e){return-1!==o.call(this,e)},item:function(e){return this[e]||null},remove:function(e){var n=o.call(this,e);-1!==n&&(s.call(this,n,1),t(this._element,i.call(this,0)))},toString:function(){return c.call(this," ")},toggle:function(e){-1===o.call(this,e)?this.add(e):this.remove(e)}},window.DOMTokenList=e,n(Element.prototype,"classList",function(){return new e(this)})}})(),function(){window.WebComponents=window.WebComponents||{flags:{}};var e="webcomponents-lite.js",t=document.querySelector('script[src*="'+e+'"]'),n={};if(!n.noOpts){if(location.search.slice(1).split("&").forEach(function(e){var t,r=e.split("=");r[0]&&(t=r[0].match(/wc-(.+)/))&&(n[t[1]]=r[1]||!0)}),t)for(var r,o=0;r=t.attributes[o];o++)"src"!==r.name&&(n[r.name]=r.value||!0);if(n.log&&n.log.split){var i=n.log.split(",");n.log={},i.forEach(function(e){n.log[e]=!0})}else n.log={}}n.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=n.register),WebComponents.flags=n}(),function(e){"use strict";function t(e){return void 0!==h[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){y.push(e)}var u=a||"scheme start",l=0,d="",b=!1,g=!1,y=[];e:for(;(e[l-1]!=f||0==l)&&!this._isInvalid;){var w=e[l];switch(u){case"scheme start":if(!w||!m.test(w)){if(a){c("Invalid scheme.");break e}d="",u="no scheme";continue}d+=w.toLowerCase(),u="scheme";break;case"scheme":if(w&&v.test(w))d+=w.toLowerCase();else{if(":"!=w){if(a){if(f==w)break e;c("Code point not allowed in scheme: "+w);break e}d="",l=0,u="no scheme";continue}if(this._scheme=d,d="",a)break e;t(this._scheme)&&(this._isRelative=!0),u="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==w?(this._query="?",u="query"):"#"==w?(this._fragment="#",u="fragment"):f!=w&&"	"!=w&&"\n"!=w&&"\r"!=w&&(this._schemeData+=o(w));break;case"no scheme":if(s&&t(s._scheme)){u="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=w||"/"!=e[l+1]){c("Expected /, got: "+w),u="relative";continue}u="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),f==w){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password;break e}if("/"==w||"\\"==w)"\\"==w&&c("\\ is an invalid code point."),u="relative slash";else if("?"==w)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,u="query";else{if("#"!=w){var _=e[l+1],E=e[l+2];("file"!=this._scheme||!m.test(w)||":"!=_&&"|"!=_||f!=E&&"/"!=E&&"\\"!=E&&"?"!=E&&"#"!=E)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),u="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,u="fragment"}break;case"relative slash":if("/"!=w&&"\\"!=w){"file"!=this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),u="relative path";continue}"\\"==w&&c("\\ is an invalid code point."),u="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=w){c("Expected '/', got: "+w),u="authority ignore slashes";continue}u="authority second slash";break;case"authority second slash":if(u="authority ignore slashes","/"!=w){c("Expected '/', got: "+w);continue}break;case"authority ignore slashes":if("/"!=w&&"\\"!=w){u="authority";continue}c("Expected authority, got: "+w);break;case"authority":if("@"==w){b&&(c("@ already seen."),d+="%40"),b=!0;for(var T=0;d.length>T;T++){var C=d[T];if("	"!=C&&"\n"!=C&&"\r"!=C)if(":"!=C||null!==this._password){var M=o(C);null!==this._password?this._password+=M:this._username+=M}else this._password="";else c("Invalid whitespace in authority.")}d=""}else{if(f==w||"/"==w||"\\"==w||"?"==w||"#"==w){l-=d.length,d="",u="host";continue}d+=w}break;case"file host":if(f==w||"/"==w||"\\"==w||"?"==w||"#"==w){2!=d.length||!m.test(d[0])||":"!=d[1]&&"|"!=d[1]?0==d.length?u="relative path start":(this._host=r.call(this,d),d="",u="relative path start"):u="relative path";continue}"	"==w||"\n"==w||"\r"==w?c("Invalid whitespace in file host."):d+=w;break;case"host":case"hostname":if(":"!=w||g){if(f==w||"/"==w||"\\"==w||"?"==w||"#"==w){if(this._host=r.call(this,d),d="",u="relative path start",a)break e;continue}"	"!=w&&"\n"!=w&&"\r"!=w?("["==w?g=!0:"]"==w&&(g=!1),d+=w):c("Invalid code point in host/hostname: "+w)}else if(this._host=r.call(this,d),d="",u="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(w))d+=w;else{if(f==w||"/"==w||"\\"==w||"?"==w||"#"==w||a){if(""!=d){var L=parseInt(d,10);L!=h[this._scheme]&&(this._port=L+""),d=""}if(a)break e;u="relative path start";continue}"	"==w||"\n"==w||"\r"==w?c("Invalid code point in port: "+w):n.call(this)}break;case"relative path start":if("\\"==w&&c("'\\' not allowed in path."),u="relative path","/"!=w&&"\\"!=w)continue;break;case"relative path":if(f!=w&&"/"!=w&&"\\"!=w&&(a||"?"!=w&&"#"!=w))"	"!=w&&"\n"!=w&&"\r"!=w&&(d+=o(w));else{"\\"==w&&c("\\ not allowed in relative path.");var O;(O=p[d.toLowerCase()])&&(d=O),".."==d?(this._path.pop(),"/"!=w&&"\\"!=w&&this._path.push("")):"."==d&&"/"!=w&&"\\"!=w?this._path.push(""):"."!=d&&("file"==this._scheme&&0==this._path.length&&2==d.length&&m.test(d[0])&&"|"==d[1]&&(d=d[0]+":"),this._path.push(d)),d="","?"==w?(this._query="?",u="query"):"#"==w&&(this._fragment="#",u="fragment")}break;case"query":a||"#"!=w?f!=w&&"	"!=w&&"\n"!=w&&"\r"!=w&&(this._query+=i(w)):(this._fragment="#",u="fragment");break;case"fragment":f!=w&&"	"!=w&&"\n"!=w&&"\r"!=w&&(this._fragment+=w)}l++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(t+"")),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var u=!1;if(!e.forceJURL)try{var l=new URL("b","http://a");l.pathname="c%20d",u="http://a/c%20d"===l.href}catch(d){}if(!u){var h=Object.create(null);h.ftp=21,h.file=0,h.gopher=70,h.http=80,h.https=443,h.ws=80,h.wss=443;var p=Object.create(null);p["%2e"]=".",p[".%2e"]="..",p["%2e."]="..",p["%2e%2e"]="..";var f=void 0,m=/[a-zA-Z]/,v=/[a-zA-Z0-9\+\-\.]/;c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return(""!=this._username||null!=this._password)&&(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var b=e.URL;b&&(c.createObjectURL=function(){return b.createObjectURL.apply(b,arguments)},c.revokeObjectURL=function(e){b.revokeObjectURL(e)}),e.URL=c}}(self),"undefined"==typeof WeakMap&&function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),function(e){function t(e){w.push(e),y||(y=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){y=!1;var e=w;w=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=v.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=v.get(n);if(r)for(var o=0;r.length>o;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++_}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function u(e,t){return E=new s(e,t)}function l(e){return T?T:(T=c(E),T.oldValue=e,T)}function d(){E=T=void 0}function h(e){return e===T||e===E}function p(e,t){return e===t?e:T&&h(e)?T:null}function f(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}if(!e.JsMutationObserver){var m,v=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var b=[],g=Math.random()+"";window.addEventListener("message",function(e){if(e.data===g){var t=b;b=[],t.forEach(function(e){e()})}}),m=function(e){b.push(e),window.postMessage(g,"*")}}var y=!1,w=[],_=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=v.get(e);r||v.set(e,r=[]);for(var o,i=0;r.length>i;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new f(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=v.get(e),n=0;t.length>n;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var E,T;f.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=p(o,e);if(i)return n[r-1]=i,void 0}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=v.get(e);t||v.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=v.get(e),n=0;t.length>n;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new u("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?l(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=u("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?l(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,h=e.target;"DOMNodeInserted"===e.type?(s=[h],c=[]):(s=[],c=[h]);var p=h.previousSibling,f=h.nextSibling,o=u("childList",e.target.parentNode);o.addedNodes=s,o.removedNodes=c,o.previousSibling=p,o.nextSibling=f,i(e.relatedNode,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a,a._isPolyfilled=!0)}}(self),"undefined"==typeof HTMLTemplateElement&&function(){function e(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case" ":return"&nbsp;"}}function t(t){return t.replace(a,e)}var n="template",r=document.implementation.createHTMLDocument("template"),o=!0;HTMLTemplateElement=function(){},HTMLTemplateElement.prototype=Object.create(HTMLElement.prototype),HTMLTemplateElement.decorate=function(e){if(!e.content){e.content=r.createDocumentFragment();for(var n;n=e.firstChild;)e.content.appendChild(n);if(o)try{Object.defineProperty(e,"innerHTML",{get:function(){for(var e="",n=this.content.firstChild;n;n=n.nextSibling)e+=n.outerHTML||t(n.data);return e},set:function(e){for(r.body.innerHTML=e,HTMLTemplateElement.bootstrap(r);this.content.firstChild;)this.content.removeChild(this.content.firstChild);for(;r.body.firstChild;)this.content.appendChild(r.body.firstChild)},configurable:!0})}catch(i){o=!1}HTMLTemplateElement.bootstrap(e.content)}},HTMLTemplateElement.bootstrap=function(e){for(var t,r=e.querySelectorAll(n),o=0,i=r.length;i>o&&(t=r[o]);o++)HTMLTemplateElement.decorate(t)},document.addEventListener("DOMContentLoaded",function(){HTMLTemplateElement.bootstrap(document)});var i=document.createElement;document.createElement=function(){"use strict";var e=i.apply(document,arguments);return"template"==e.localName&&HTMLTemplateElement.decorate(e),e};var a=/[&\u00A0<>]/g}(),function(){"use strict";if(!window.performance){var e=Date.now();window.performance={now:function(){return Date.now()-e}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}());var t=function(){var e=document.createEvent("Event");return e.initEvent("foo",!0,!0),e.preventDefault(),e.defaultPrevented}();if(!t){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var r=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||r&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||r&&"function"!=typeof window.Event){var o=window.Event;window.Event=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n},window.Event.prototype=o.prototype}}(window.WebComponents),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||f,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===b}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===b)&&(t.removeEventListener(g,o),r(e,t))};t.addEventListener(g,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){c==u&&e&&e({allImports:s,loadedImports:l,errorImports:d})}function r(e){o(e),l.push(this),c++,n()}function i(){d.push(this),c++,n()}var s=t.querySelectorAll("link[rel=import]"),c=0,u=s.length,l=[],d=[];if(u)for(var h,p=0;u>p&&(h=s[p]);p++)a(h)?(l.push(this),c++,n()):(h.addEventListener("load",r),h.addEventListener("error",i));else n()}function a(e){return d?e.__loaded||e.import&&"loading"!==e.import.readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&u(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function u(e){var t=e.import;t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var l="import",d=Boolean(l in document.createElement("link")),h=Boolean(window.ShadowDOMPolyfill),p=function(e){return h?window.ShadowDOMPolyfill.wrapIfNeeded(e):e},f=p(document),m={get:function(){var e=window.HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return p(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(f,"_currentScript",m);var v=/Trident/.test(navigator.userAgent),b=v?"complete":"interactive",g="readystatechange";d&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)u(e)}()),t(function(e){window.HTMLImports.ready=!0,window.HTMLImports.readyTime=(new Date).getTime();var t=f.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded",!0,!0,e),f.dispatchEvent(t)}),e.IMPORT_LINK_TYPE=l,e.useNative=d,e.rootDocument=f,e.whenReady=t,e.isIE=v}(window.HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(window.HTMLImports),window.HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e,t){var n=e.ownerDocument,r=n.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,t,r),e},resolveUrlsInCssText:function(e,r,o){var i=this.replaceUrls(e,o,r,t);return i=this.replaceUrls(i,o,r,n)},replaceUrls:function(e,t,n,r){return e.replace(r,function(e,r,o,i){var a=o.replace(/["']/g,"");return n&&(a=new URL(a,n).href),t.href=a,a=t.href,r+"'"+a+"'"+i})}};e.path=r}),window.HTMLImports.addModule(function(e){var t={async:!0,ok:function(e){return e.status>=200&&300>e.status||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(e){if(4===i.readyState){var n=null;try{var a=i.getResponseHeader("Location");a&&(n="/"===a.substr(0,1)?location.origin+a:a)}catch(e){console.error(e.message)}r.call(o,!t.ok(i)&&i,i.response||i.responseText,n)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}};e.xhr=t}),window.HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){return this.pending[e]?(this.pending[e].push(t),!0):this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e)if(e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}else setTimeout(function(){this.receive(e,r,{error:"href must be specified"},null)}.bind(this),0)},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),window.HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),window.HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===l}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,u=e.isIE,l=e.IMPORT_LINK_TYPE,d="link[rel="+l+"]",h={documentSelectors:d,importsSelectors:[d,"link[rel=stylesheet]:not([type])","style:not([type])","script:not([type])",'script[type="application/javascript"]','script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return c.parse&&console.log("[%s] is already parsed",e.localName),void 0;var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(e.import=e.__doc,window.HTMLImports.__importsParsingHook&&window.HTMLImports.__importsParsingHook(e),e.import&&(e.import.__importParsed=!0),this.markParsingComplete(e),e.__resource&&!e.__error?e.dispatchEvent(new CustomEvent("load",{bubbles:!1})):e.dispatchEvent(new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),t.__appliedElement=e,e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){var t=this.rootImportForElement(e.__importElement||e);t.parentNode.insertBefore(e,t)},trackElement:function(e,t){var n=this,r=function(o){e.removeEventListener("load",r),e.removeEventListener("error",r),t&&t(o),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),u&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&setTimeout(function(){e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))})}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(){r.parentNode&&r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&0>this._mayParse.indexOf(e)){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.__doc,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.__doc?!1:!0}};e.parser=h,e.IMPORT_SELECTOR=d}),window.HTMLImports.addModule(function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e){return!!Object.getOwnPropertyDescriptor(e,"baseURI")}function o(e,t){var n=document.implementation.createHTMLDocument(a);n._URL=t;var o=n.createElement("base");o.setAttribute("href",t),n.baseURI||r(n)||Object.defineProperty(n,"baseURI",{value:t});var i=n.createElement("meta");return i.setAttribute("charset","utf-8"),n.head.appendChild(i),n.head.appendChild(o),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var i=e.flags,a=e.IMPORT_LINK_TYPE,s=e.IMPORT_SELECTOR,c=e.rootDocument,u=e.Loader,l=e.Observer,d=e.parser,h={documents:{},documentPreloadSelectors:s,importsPreloadSelectors:[s].join(","),loadNode:function(e){p.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);p.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,r,a,s){if(i.load&&console.log("loaded",e,n),n.__resource=r,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:o(r,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.__doc=c}d.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),d.parseNext()},loadedAll:function(){d.parseNext()}},p=new u(h.loaded.bind(h),h.loadedAll.bind(h));if(h.observer=new l,!document.baseURI){var f={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",f),Object.defineProperty(c,"baseURI",f)}e.importer=h,e.importLoader=p}),window.HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a,s=0,c=e.length;c>s&&(a=e[s]);s++)r||(r=a.ownerDocument,o=t.isParsed(r)),i=this.shouldLoadNode(a),i&&n.loadNode(a),this.shouldParseNode(a)&&o&&t.parseDynamic(a,i)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){window.HTMLImports.importer.bootDocument(r)}var n=e.initializeModules;if(e.isIE,!e.useNative){n();var r=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(window.HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.isIE=/Trident/.test(navigator.userAgent),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:(r(e,t),void 0)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){i(e,t,[])}function i(e,t,n){if(e=window.wrap(e),!(n.indexOf(e)>=0)){n.push(e);for(var r,o=e.querySelectorAll("link[rel="+a+"]"),s=0,c=o.length;c>s&&(r=o[s]);s++)r.import&&i(r.import,t,n);t(e)}}var a=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),window.CustomElements.addModule(function(e){function t(e,t){return n(e,t)||r(e,t)}function n(t,n){return e.upgrade(t,n)?!0:(n&&a(t),void 0)}function r(e,t){y(e,function(e){return n(e,t)?!0:void 0})}function o(e){T.push(e),E||(E=!0,setTimeout(i))}function i(){E=!1;for(var e,t=T,n=0,r=t.length;r>n&&(e=t[n]);n++)e();T=[]}function a(e){_?o(function(){s(e)}):s(e)}function s(e){e.__upgraded__&&!e.__attached&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){u(e),y(e,function(e){u(e)})}function u(e){_?o(function(){l(e)}):l(e)}function l(e){e.__upgraded__&&e.__attached&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function d(e){for(var t=e,n=window.wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host}}function h(e){if(e.shadowRoot&&!e.shadowRoot.__watched){g.dom&&console.log("watching shadow-root for: ",e.localName);
for(var t=e.shadowRoot;t;)m(t),t=t.olderShadowRoot}}function p(e,n){if(g.dom){var r=n[0];if(r&&"childList"===r.type&&r.addedNodes&&r.addedNodes){for(var o=r.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var i=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";i=i.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,i||"")}var a=d(e);n.forEach(function(e){"childList"===e.type&&(C(e.addedNodes,function(e){e.localName&&t(e,a)}),C(e.removedNodes,function(e){e.localName&&c(e)}))}),g.dom&&console.groupEnd()}function f(e){for(e=window.wrap(e),e||(e=window.wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(p(e,t.takeRecords()),i())}function m(e){if(!e.__observer){var t=new MutationObserver(p.bind(this,e));t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function v(e){e=window.wrap(e),g.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop());var n=e===window.wrap(document);t(e,n),m(e),g.dom&&console.groupEnd()}function b(e){w(e,v)}var g=e.flags,y=e.forSubtree,w=e.forDocumentTree,_=window.MutationObserver._isPolyfilled&&g["throttle-attached"];e.hasPolyfillMutations=_,e.hasThrottledAttached=_;var E=!1,T=[],C=Array.prototype.forEach.call.bind(Array.prototype.forEach),M=Element.prototype.createShadowRoot;M&&(Element.prototype.createShadowRoot=function(){var e=M.call(this);return window.CustomElements.watchShadow(this),e}),e.watchShadow=h,e.upgradeDocumentTree=b,e.upgradeDocument=v,e.upgradeSubtree=r,e.upgradeAll=t,e.attached=a,e.takeRecords=f}),window.CustomElements.addModule(function(e){function t(t,r){if("template"===t.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t),!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var o=t.getAttribute("is"),i=e.getRegisteredDefinition(t.localName)||e.getRegisteredDefinition(o);if(i&&(o&&i.tag==t.localName||!o&&!i.extends))return n(t,i,r)}}function n(t,n,o){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),o&&e.attached(t),e.upgradeSubtree(t,o),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t.native),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),window.CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw Error("document.registerElement: first argument `name` must not be empty");if(0>t.indexOf("-"))throw Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+(t+"")+"'.");if(o(t))throw Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+(t+"")+"'. The type name is invalid.");if(u(t))throw Error("DuplicateDefinitionError: a type with name '"+(t+"")+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c.lifecycle=c.lifecycle||{},c.ancestry=i(c.extends),a(c),s(c),n(c.prototype),l(c.__name,c),c.ctor=d(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&b(document),c.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;E.length>t;t++)if(e===E[t])return!0}function i(e){var t=u(e);return t?i(t.extends).concat([t]):[]}function a(e){for(var t,n=e.extends,r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype,i=!1;o;)o==t&&(i=!0),r=Object.getPrototypeOf(o),r&&(o.__proto__=r),o=r;i||console.warn(e.tag+" prototype not found in prototype chain for "+e.is),e.native=t}}function c(e){return y(M(e.tag),e)}function u(e){return e?T[e.toLowerCase()]:void 0}function l(e,t){T[e]=t}function d(e){return function(){return c(e)}}function h(e,t,n){return e===C?p(t,n):L(e,t)}function p(e,t){e&&(e=e.toLowerCase()),t&&(t=t.toLowerCase());var n=u(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=p(e),r.setAttribute("is",t),r):(r=M(e),e.indexOf("-")>=0&&w(r,HTMLElement),r)}function f(e,t){var n=e[t];e[t]=function(){var e=n.apply(this,arguments);return g(e),e}}var m,v=e.isIE,b=e.upgradeDocumentTree,g=e.upgradeAll,y=e.upgradeWithDefinition,w=e.implementPrototype,_=e.useNative,E=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],T={},C="http://www.w3.org/1999/xhtml",M=document.createElement.bind(document),L=document.createElementNS.bind(document);m=Object.__proto__||_?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),v&&function(){var e=document.importNode;document.importNode=function(){var t=e.apply(document,arguments);if(t.nodeType==t.DOCUMENT_FRAGMENT_NODE){var n=document.createDocumentFragment();return n.appendChild(t),n}return t}}(),document.registerElement=t,document.createElement=p,document.createElementNS=h,e.registry=T,e.instanceof=m,e.reservedTagList=E,e.getRegisteredDefinition=u,document.register=document.registerElement}),function(e){function t(){i(window.wrap(document)),window.CustomElements.ready=!0;var e=window.requestAnimationFrame||function(e){setTimeout(e,16)};e(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}var n=e.useNative,r=e.initializeModules;if(e.isIE,n){var o=function(){};e.watchShadow=o,e.upgrade=o,e.upgradeAll=o,e.upgradeDocumentTree=o,e.upgradeSubtree=o,e.takeRecords=o,e.instanceof=function(e,t){return e instanceof t}}else r();var i=e.upgradeDocumentTree,a=e.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(e){e.import&&a(wrap(e.import))}),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var s=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(s,t)}else t()}(window.CustomElements),function(){var e=document.createElement("style");e.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var t=document.querySelector("head");t.insertBefore(e,t.firstChild)}(window.WebComponents),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.PointerEventsPolyfill=t()}(this,function(){"use strict";function e(e,t){t=t||Object.create(null);var n=document.createEvent("Event");n.initEvent(e,t.bubbles||!1,t.cancelable||!1);for(var r,o=2;l.length>o;o++)r=l[o],n[r]=t[r]||d[o];n.buttons=t.buttons||0;var i=0;return i=t.pressure?t.pressure:n.buttons?.5:0,n.x=n.clientX,n.y=n.clientY,n.pointerId=t.pointerId||0,n.width=t.width||0,n.height=t.height||0,n.pressure=i,n.tiltX=t.tiltX||0,n.tiltY=t.tiltY||0,n.pointerType=t.pointerType||"",n.hwTimestamp=t.hwTimestamp||0,n.isPrimary=t.isPrimary||!1,n}function t(){this.array=[],this.size=0}function n(e,t,n,r){this.addCallback=e.bind(r),this.removeCallback=t.bind(r),this.changedCallback=n.bind(r),O&&(this.observer=new O(this.mutationWatcher.bind(this)))}function r(e){return"body /shadow-deep/ "+o(e)}function o(e){return'[touch-action="'+e+'"]'}function i(e){return"{ -ms-touch-action: "+e+"; touch-action: "+e+"; touch-action-delay: none; }"}function a(){if(A){I.forEach(function(e){e+""===e?(k+=o(e)+i(e)+"\n",x&&(k+=r(e)+i(e)+"\n")):(k+=e.selectors.map(o)+i(e.rule)+"\n",x&&(k+=e.selectors.map(r)+i(e.rule)+"\n"))});var e=document.createElement("style");e.textContent=k,document.head.appendChild(e)}}function s(){if(!window.PointerEvent){if(window.PointerEvent=h,window.navigator.msPointerEnabled){var e=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:e,enumerable:!0}),_.registerSource("ms",ot)}else _.registerSource("mouse",U),void 0!==window.ontouchstart&&_.registerSource("touch",et);_.register(document)}}function c(e){if(!_.pointermap.has(e))throw Error("InvalidPointerId")}function u(){window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:J},releasePointerCapture:{value:Q}})}var l=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],d=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],h=e,p=window.Map&&window.Map.prototype.forEach,f=p?Map:t;t.prototype={set:function(e,t){return void 0===t?this.delete(e):(this.has(e)||this.size++,this.array[e]=t,void 0)},has:function(e){return void 0!==this.array[e]},"delete":function(e){this.has(e)&&(delete this.array[e],this.size--)},get:function(e){return this.array[e]},clear:function(){this.array.length=0,this.size=0},forEach:function(e,t){return this.array.forEach(function(n,r){e.call(t,n,r,this)},this)}};var m=f,v=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],b=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],g={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},y="undefined"!=typeof SVGElementInstance,w={pointermap:new m,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(e,t){var n=t,r=n.events;r&&(r.forEach(function(e){n[e]&&(this.eventMap[e]=n[e].bind(n))},this),this.eventSources[e]=n,this.eventSourceList.push(n))},register:function(e){for(var t,n=this.eventSourceList.length,r=0;n>r&&(t=this.eventSourceList[r]);r++)t.register.call(t,e)},unregister:function(e){for(var t,n=this.eventSourceList.length,r=0;n>r&&(t=this.eventSourceList[r]);r++)t.unregister.call(t,e)},contains:function(e,t){try{return e.contains(t)}catch(n){return!1}},down:function(e){e.bubbles=!0,this.fireEvent("pointerdown",e)},move:function(e){e.bubbles=!0,this.fireEvent("pointermove",e)},up:function(e){e.bubbles=!0,this.fireEvent("pointerup",e)},enter:function(e){e.bubbles=!1,this.fireEvent("pointerenter",e)},leave:function(e){e.bubbles=!1,this.fireEvent("pointerleave",e)},over:function(e){e.bubbles=!0,this.fireEvent("pointerover",e)},out:function(e){e.bubbles=!0,this.fireEvent("pointerout",e)},cancel:function(e){e.bubbles=!0,this.fireEvent("pointercancel",e)},leaveOut:function(e){this.out(e),this.contains(e.target,e.relatedTarget)||this.leave(e)},enterOver:function(e){this.over(e),this.contains(e.target,e.relatedTarget)||this.enter(e)},eventHandler:function(e){if(!e._handledByPE){var t=e.type,n=this.eventMap&&this.eventMap[t];n&&n(e),e._handledByPE=!0}},listen:function(e,t){t.forEach(function(t){this.addEvent(e,t)},this)},unlisten:function(e,t){t.forEach(function(t){this.removeEvent(e,t)},this)},addEvent:function(e,t){e.addEventListener(t,this.boundHandler)},removeEvent:function(e,t){e.removeEventListener(t,this.boundHandler)},makeEvent:function(e,t){this.captureInfo[t.pointerId]&&(t.relatedTarget=null);var n=new h(e,t);return t.preventDefault&&(n.preventDefault=t.preventDefault),n._target=n._target||t.target,n},fireEvent:function(e,t){var n=this.makeEvent(e,t);return this.dispatchEvent(n)},cloneEvent:function(e){for(var t,n=Object.create(null),r=0;v.length>r;r++)t=v[r],n[t]=e[t]||b[r],!y||"target"!==t&&"relatedTarget"!==t||n[t]instanceof SVGElementInstance&&(n[t]=n[t].correspondingUseElement);return e.preventDefault&&(n.preventDefault=function(){e.preventDefault()}),n},getTarget:function(e){var t=this.captureInfo[e.pointerId];return t?e._target!==t&&e.type in g?void 0:t:e._target},setCapture:function(e,t){this.captureInfo[e]&&this.releaseCapture(e),this.captureInfo[e]=t;var n=document.createEvent("Event");n.initEvent("gotpointercapture",!0,!1),n.pointerId=e,this.implicitRelease=this.releaseCapture.bind(this,e),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease),n._target=t,this.asyncDispatchEvent(n)},releaseCapture:function(e){var t=this.captureInfo[e];if(t){var n=document.createEvent("Event");n.initEvent("lostpointercapture",!0,!1),n.pointerId=e,this.captureInfo[e]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease),n._target=t,this.asyncDispatchEvent(n)}},dispatchEvent:function(e){var t=this.getTarget(e);return t?t.dispatchEvent(e):void 0},asyncDispatchEvent:function(e){requestAnimationFrame(this.dispatchEvent.bind(this,e))}};w.boundHandler=w.eventHandler.bind(w);var _=w,E={shadow:function(e){return e?e.shadowRoot||e.webkitShadowRoot:void 0},canTarget:function(e){return e&&Boolean(e.elementFromPoint)},targetingShadow:function(e){var t=this.shadow(e);return this.canTarget(t)?t:void 0},olderShadow:function(e){var t=e.olderShadowRoot;if(!t){var n=e.querySelector("shadow");n&&(t=n.olderShadowRoot)}return t},allShadows:function(e){for(var t=[],n=this.shadow(e);n;)t.push(n),n=this.olderShadow(n);return t},searchRoot:function(e,t,n){if(e){var r,o,i=e.elementFromPoint(t,n);for(o=this.targetingShadow(i);o;){if(r=o.elementFromPoint(t,n)){var a=this.targetingShadow(r);return this.searchRoot(a,t,n)||r}o=this.olderShadow(o)}return i}},owner:function(e){for(var t=e;t.parentNode;)t=t.parentNode;return t.nodeType!==Node.DOCUMENT_NODE&&t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(t=document),t},findTarget:function(e){var t=e.clientX,n=e.clientY,r=this.owner(e.target);return r.elementFromPoint(t,n)||(r=document),this.searchRoot(r,t,n)}},T=Array.prototype.forEach.call.bind(Array.prototype.forEach),C=Array.prototype.map.call.bind(Array.prototype.map),M=Array.prototype.slice.call.bind(Array.prototype.slice),L=Array.prototype.filter.call.bind(Array.prototype.filter),O=window.MutationObserver||window.WebKitMutationObserver,S="[touch-action]",N={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};n.prototype={watchSubtree:function(e){this.observer&&E.canTarget(e)&&this.observer.observe(e,N)},enableOnSubtree:function(e){this.watchSubtree(e),e===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(e)},installNewSubtree:function(e){T(this.findElements(e),this.addElement,this)},findElements:function(e){return e.querySelectorAll?e.querySelectorAll(S):[]},removeElement:function(e){this.removeCallback(e)},addElement:function(e){this.addCallback(e)},elementChanged:function(e,t){this.changedCallback(e,t)},concatLists:function(e,t){return e.concat(M(t))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(e){return e.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(e){var t=C(e,this.findElements,this);return t.push(L(e,this.isElement)),t.reduce(this.concatLists,[])},mutationWatcher:function(e){e.forEach(this.mutationHandler,this)},mutationHandler:function(e){if("childList"===e.type){var t=this.flattenMutationTree(e.addedNodes);t.forEach(this.addElement,this);var n=this.flattenMutationTree(e.removedNodes);n.forEach(this.removeElement,this)}else"attributes"===e.type&&this.elementChanged(e.target,e.oldValue)}};var P=n,I=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],k="",A=window.PointerEvent||window.MSPointerEvent,x=!window.ShadowDOMPolyfill&&document.head.createShadowRoot,D=_.pointermap,R=25,H=[1,4,2,8,16],j=!1;try{j=1===new MouseEvent("test",{buttons:1}).buttons}catch(F){}var q,Y={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(e){_.listen(e,this.events)},unregister:function(e){_.unlisten(e,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(e){for(var t,n=this.lastTouches,r=e.clientX,o=e.clientY,i=0,a=n.length;a>i&&(t=n[i]);i++){var s=Math.abs(r-t.x),c=Math.abs(o-t.y);if(R>=s&&R>=c)return!0}},prepareEvent:function(e){var t=_.cloneEvent(e),n=t.preventDefault;return t.preventDefault=function(){e.preventDefault(),n()},t.pointerId=this.POINTER_ID,t.isPrimary=!0,t.pointerType=this.POINTER_TYPE,t},prepareButtonsForMove:function(e,t){var n=D.get(this.POINTER_ID);e.buttons=n?n.buttons:0,t.buttons=e.buttons},mousedown:function(e){if(!this.isEventSimulatedFromTouch(e)){var t=D.get(this.POINTER_ID),n=this.prepareEvent(e);j||(n.buttons=H[n.button],t&&(n.buttons|=t.buttons),e.buttons=n.buttons),D.set(this.POINTER_ID,e),t?_.move(n):_.down(n)}},mousemove:function(e){if(!this.isEventSimulatedFromTouch(e)){var t=this.prepareEvent(e);j||this.prepareButtonsForMove(t,e),_.move(t)}},mouseup:function(e){if(!this.isEventSimulatedFromTouch(e)){var t=D.get(this.POINTER_ID),n=this.prepareEvent(e);if(!j){var r=H[n.button];n.buttons=t?t.buttons&~r:0,e.buttons=n.buttons}D.set(this.POINTER_ID,e),0===n.buttons||n.buttons===H[n.button]?(this.cleanupMouse(),_.up(n)):_.move(n)}},mouseover:function(e){if(!this.isEventSimulatedFromTouch(e)){var t=this.prepareEvent(e);j||this.prepareButtonsForMove(t,e),_.enterOver(t)}},mouseout:function(e){if(!this.isEventSimulatedFromTouch(e)){var t=this.prepareEvent(e);j||this.prepareButtonsForMove(t,e),_.leaveOut(t)}},cancel:function(e){var t=this.prepareEvent(e);_.cancel(t),this.cleanupMouse()},cleanupMouse:function(){D.delete(this.POINTER_ID)}},U=Y,X=_.captureInfo,B=E.findTarget.bind(E),z=E.allShadows.bind(E),W=_.pointermap,V=2500,K=200,G="touch-action",$=!1,Z={events:["touchstart","touchmove","touchend","touchcancel"],register:function(e){$?_.listen(e,this.events):q.enableOnSubtree(e)},unregister:function(e){$&&_.unlisten(e,this.events)},elementAdded:function(e){var t=e.getAttribute(G),n=this.touchActionToScrollType(t);n&&(e._scrollType=n,_.listen(e,this.events),z(e).forEach(function(e){e._scrollType=n,_.listen(e,this.events)},this))},elementRemoved:function(e){e._scrollType=void 0,_.unlisten(e,this.events),z(e).forEach(function(e){e._scrollType=void 0,_.unlisten(e,this.events)},this)},elementChanged:function(e,t){var n=e.getAttribute(G),r=this.touchActionToScrollType(n),o=this.touchActionToScrollType(t);r&&o?(e._scrollType=r,z(e).forEach(function(e){e._scrollType=r},this)):o?this.elementRemoved(e):r&&this.elementAdded(e)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(e){var t=e,n=this.scrollTypes;return"none"===t?"none":t===n.XSCROLLER?"X":t===n.YSCROLLER?"Y":n.SCROLLER.exec(t)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(e){return this.firstTouch===e.identifier},setPrimaryTouch:function(e){(0===W.size||1===W.size&&W.has(1))&&(this.firstTouch=e.identifier,this.firstXY={X:e.clientX,Y:e.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(e){e.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var e=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(e,K)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(e){var t=0;return("touchstart"===e||"touchmove"===e)&&(t=1),t},touchToPointer:function(e){var t=this.currentTouchEvent,n=_.cloneEvent(e),r=n.pointerId=e.identifier+2;n.target=X[r]||B(n),n.bubbles=!0,n.cancelable=!0,n.detail=this.clickCount,n.button=0,n.buttons=this.typeToButtons(t.type),n.width=e.radiusX||e.webkitRadiusX||0,n.height=e.radiusY||e.webkitRadiusY||0,n.pressure=e.force||e.webkitForce||.5,n.isPrimary=this.isPrimaryTouch(e),n.pointerType=this.POINTER_TYPE;var o=this;return n.preventDefault=function(){o.scrolling=!1,o.firstXY=null,t.preventDefault()},n},processTouches:function(e,t){var n=e.changedTouches;this.currentTouchEvent=e;for(var r,o=0;n.length>o;o++)r=n[o],t.call(this,this.touchToPointer(r))},shouldScroll:function(e){if(this.firstXY){var t,n=e.currentTarget._scrollType;if("none"===n)t=!1;else if("XY"===n)t=!0;else{var r=e.changedTouches[0],o=n,i="Y"===n?"X":"Y",a=Math.abs(r["client"+o]-this.firstXY[o]),s=Math.abs(r["client"+i]-this.firstXY[i]);t=a>=s}return this.firstXY=null,t}},findTouch:function(e,t){for(var n,r=0,o=e.length;o>r&&(n=e[r]);r++)if(n.identifier===t)return!0},vacuumTouches:function(e){var t=e.touches;if(W.size>=t.length){var n=[];W.forEach(function(e,r){if(1!==r&&!this.findTouch(t,r-2)){var o=e.out;n.push(o)}},this),n.forEach(this.cancelOut,this)}},touchstart:function(e){this.vacuumTouches(e),this.setPrimaryTouch(e.changedTouches[0]),this.dedupSynthMouse(e),this.scrolling||(this.clickCount++,this.processTouches(e,this.overDown))},overDown:function(e){W.set(e.pointerId,{target:e.target,out:e,outTarget:e.target}),_.over(e),_.enter(e),_.down(e)},touchmove:function(e){this.scrolling||(this.shouldScroll(e)?(this.scrolling=!0,this.touchcancel(e)):(e.preventDefault(),this.processTouches(e,this.moveOverOut)))},moveOverOut:function(e){var t=e,n=W.get(t.pointerId);if(n){var r=n.out,o=n.outTarget;_.move(t),r&&o!==t.target&&(r.relatedTarget=t.target,t.relatedTarget=o,r.target=o,t.target?(_.leaveOut(r),_.enterOver(t)):(t.target=o,t.relatedTarget=null,this.cancelOut(t))),n.out=t,n.outTarget=t.target}},touchend:function(e){this.dedupSynthMouse(e),this.processTouches(e,this.upOut)},upOut:function(e){this.scrolling||(_.up(e),_.out(e),_.leave(e)),this.cleanUpPointer(e)},touchcancel:function(e){this.processTouches(e,this.cancelOut)},cancelOut:function(e){_.cancel(e),_.out(e),_.leave(e),this.cleanUpPointer(e)},cleanUpPointer:function(e){W.delete(e.pointerId),this.removePrimaryPointer(e)},dedupSynthMouse:function(e){var t=U.lastTouches,n=e.changedTouches[0];if(this.isPrimaryTouch(n)){var r={x:n.clientX,y:n.clientY};t.push(r);var o=function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}.bind(null,t,r);setTimeout(o,V)}}};$||(q=new P(Z.elementAdded,Z.elementRemoved,Z.elementChanged,Z));var J,Q,et=Z,tt=_.pointermap,nt=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,rt={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(e){_.listen(e,this.events)},unregister:function(e){_.unlisten(e,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(e){var t=e;return nt&&(t=_.cloneEvent(e),t.pointerType=this.POINTER_TYPES[e.pointerType]),t},cleanup:function(e){tt.delete(e)},MSPointerDown:function(e){tt.set(e.pointerId,e);var t=this.prepareEvent(e);_.down(t)},MSPointerMove:function(e){var t=this.prepareEvent(e);_.move(t)},MSPointerUp:function(e){var t=this.prepareEvent(e);_.up(t),this.cleanup(e.pointerId)},MSPointerOut:function(e){var t=this.prepareEvent(e);_.leaveOut(t)},MSPointerOver:function(e){var t=this.prepareEvent(e);_.enterOver(t)},MSPointerCancel:function(e){var t=this.prepareEvent(e);_.cancel(t),this.cleanup(e.pointerId)},MSLostPointerCapture:function(e){var t=_.makeEvent("lostpointercapture",e);_.dispatchEvent(t)},MSGotPointerCapture:function(e){var t=_.makeEvent("gotpointercapture",e);_.dispatchEvent(t)}},ot=rt,it=window.navigator;it.msPointerEnabled?(J=function(e){c(e),this.msSetPointerCapture(e)},Q=function(e){c(e),this.msReleasePointerCapture(e)}):(J=function(e){c(e),_.setCapture(e,this)},Q=function(e){c(e),_.releaseCapture(e,this)}),a(),s(),u();var at={dispatcher:_,Installer:P,PointerEvent:h,PointerMap:m,targetFinding:E};return at}),function(){function e(e){var t=D.call(e);return x[t]||(x[t]=t.match(R)[1].toLowerCase())}function t(n,r){var o=t[r||e(n)];return o?o(n):n}function n(t){return H[e(t)]?[t]:Array.prototype.slice.call(t,0)}function r(e,t){return(t||j).length?n(e.querySelectorAll(t)):[]}function o(e){e()}function i(n,r,o){var i=e(o);return"object"==i&&"object"==e(n[r])?X.merge(n[r],o):n[r]=t(o,i),n}function a(e,t,n){var r,o={};for(var i in t)o[i.split(":")[0]]=i;for(i in n)r=o[i.split(":")[0]],"function"==typeof t[r]?(r.match(":mixins")||(t[r+":mixins"]=t[r],delete t[r],r+=":mixins"),t[r].__mixin__=X.applyPseudos(i+(i.match(":mixins")?"":":mixins"),n[i],e.pseudos,t[r].__mixin__)):(t[i]=n[i],delete t[r])}function s(e,t,n){for(var r in n)t[r+":__mixin__("+F++ +")"]=X.applyPseudos(r,n[r],e.pseudos)}function c(e,t){for(var n=e.length;n--;)t.unshift(e[n]),X.mixins[e[n]].mixins&&c(X.mixins[e[n]].mixins,t);return t}function u(e){return c(e.mixins,[]).forEach(function(t){var n=X.mixins[t];for(var r in n){var o=n[r],i=e[r];if(i)switch(r){case"mixins":break;case"events":s(e,i,o);break;case"accessors":case"prototype":for(var c in o)i[c]?a(e,i[c],o[c],t):i[c]=o[c];break;default:a(e,i,o,t)}else e[r]=o}}),e}function l(e,t){for(var n,r=t.target,o=t.currentTarget;!n&&r&&r!=o;)r.tagName&&A.call(r,e.value)&&(n=r),r=r.parentNode;return!n&&o.tagName&&A.call(o,e.value)&&(n=o),n?e.listener=e.listener.bind(n):null}function d(e){return 0===e.button}function h(e,t,n,r){r?t[e]=n[e]:Object.defineProperty(t,e,{writable:!0,enumerable:!0,value:n[e]})}function p(e,t){var n=Object.getOwnPropertyDescriptor(e,"target");for(var r in t)q[r]||h(r,e,t,n);e.baseEvent=t}function f(e,t,n,r,o){_[o].call(e,n,t&&t.boolean?"":r)}function m(e,t,n,r,o){if(t&&(t.property||t.selector))for(var i=t.property?[e.xtag[t.property]]:t.selector?X.query(e,t.selector):[],a=i.length;a--;)i[a][o](n,r)}function v(e,t,n,r,o,i){var a=n.split(":"),s=a[0];"get"==s?(a[0]=t,e.prototype[t].get=X.applyPseudos(a.join(":"),r[n],e.pseudos,r[n])):"set"==s?(a[0]=t,e.prototype[t].set=X.applyPseudos(a.join(":"),o?function(e){var t,a="setAttribute";o.boolean?(e=!!e,t=this.hasAttribute(i),e||(a="removeAttribute")):(e=o.validate?o.validate.call(this,e):e,t=this.getAttribute(i)),f(this,o,i,e,a),r[n].call(this,e,t),m(this,o,i,e,a)}:r[n]?function(e){r[n].call(this,e)}:null,e.pseudos,r[n]),o&&(o.setter=r[n])):e.prototype[t][n]=r[n]}function b(e,t){e.prototype[t]={};var n,r=e.accessors[t],o=r.attribute;o&&(n=o.name=(o?o.name||t.replace(O,"$1-$2"):t).toLowerCase(),o.key=t,e.attributes[n]=o);for(var i in r)v(e,t,i,r,o,n);if(o){if(!e.prototype[t].get){var a=(o.boolean?"has":"get")+"Attribute";e.prototype[t].get=function(){return this[a](n)}}e.prototype[t].set||(e.prototype[t].set=function(e){e=o.boolean?!!e:o.validate?o.validate.call(this,e):e;var t=o.boolean?e?"setAttribute":"removeAttribute":"setAttribute";f(this,o,n,e,t),m(this,o,n,e,t)})}}function g(e){return"function"==typeof e?U.exec(""+e)[1]:e}var y=window,w=document,_={setAttribute:Element.prototype.setAttribute,removeAttribute:Element.prototype.removeAttribute},E=Element.prototype.createShadowRoot,T=w.createElement("div"),C=function(){},M=function(){return!0},L=/,/g,O=/([a-z])([A-Z])/g,S=/\(|\)/g,N=/:(\w+)\u276A(.+?(?=\u276B))|:(\w+)/g,P=/(\d+)/g,I={action:function(e,t){return e.value.match(P).indexOf(t.keyCode+"")>-1==("keypass"==e.name)||null}},k=function(){var e=Object.keys(window).join(),t=(e.match(/,(ms)/)||e.match(/,(moz)/)||e.match(/,(O)/)||[null,"webkit"])[1].toLowerCase();return{dom:"ms"==t?"MS":t,lowercase:t,css:"-"+t+"-",js:"ms"==t?t:t.charAt(0).toUpperCase()+t.substring(1)}}(),A=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype[k.lowercase+"MatchesSelector"],x={},D=x.toString,R=/\s([a-zA-Z]+)/;t.object=function(e){var n={};for(var r in e)n[r]=t(e[r]);return n},t.array=function(e){for(var n=e.length,r=Array(n);n--;)r[n]=t(e[n]);return r};var H={undefined:1,"null":1,number:1,"boolean":1,string:1,"function":1},j="",F=0,q={};for(var Y in w.createEvent("CustomEvent"))q[Y]=1;var U=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//,X={tags:{},defaultOptions:{pseudos:[],mixins:[],events:{},methods:{},accessors:{},lifecycle:{},attributes:{},prototype:{xtag:{get:function(){return this.__xtag__?this.__xtag__:this.__xtag__={data:{}}}}}},register:function(e,t){var r;if("string"!=typeof e)throw"First argument must be a Custom Element string name";r=e.toLowerCase(),X.tags[r]=t||{};var o=t.prototype;delete t.prototype;var i=X.tags[r].compiled=u(X.merge({},X.defaultOptions,t)),a=i.prototype,s=i.lifecycle;for(var c in i.events)i.events[c]=X.parseEvent(c,i.events[c]);for(c in s)s[c.split(":")[0]]=X.applyPseudos(c,s[c],i.pseudos,s[c]);for(c in i.methods)a[c.split(":")[0]]={value:X.applyPseudos(c,i.methods[c],i.pseudos,i.methods[c]),enumerable:!0};for(c in i.accessors)b(i,c);i.shadow&&(i.shadow=i.shadow.nodeName?i.shadow:X.createFragment(i.shadow)),i.content&&(i.content=i.content.nodeName?i.content.innerHTML:g(i.content));var l=s.created,d=s.finalized;a.createdCallback={enumerable:!0,value:function(){var e=this;i.shadow&&E&&this.createShadowRoot().appendChild(i.shadow.cloneNode(!0)),i.content&&(this.appendChild(document.createElement("div")).outerHTML=i.content);var t=l?l.apply(this,arguments):null;X.addEvents(this,i.events);for(var n in i.attributes){var r=i.attributes[n],o=this.hasAttribute(n),a=void 0!==r.def;(o||r.boolean||a)&&(this[r.key]=r.boolean?o:!o&&a?r.def:this.getAttribute(n))}return i.pseudos.forEach(function(t){t.onAdd.call(e,t)}),this.xtagComponentReady=!0,d&&d.apply(this,arguments),t}};var h=s.inserted,p=s.removed;(h||p)&&(a.attachedCallback={value:function(){return p&&(this.xtag.__parentNode__=this.parentNode),h?h.apply(this,arguments):void 0},enumerable:!0}),p&&(a.detachedCallback={value:function(){var e=n(arguments);e.unshift(this.xtag.__parentNode__);var t=p.apply(this,e);return delete this.xtag.__parentNode__,t},enumerable:!0}),s.attributeChanged&&(a.attributeChangedCallback={value:s.attributeChanged,enumerable:!0}),a.setAttribute={writable:!0,enumerable:!0,value:function(e,t){var n,r=e.toLowerCase(),o=i.attributes[r];o&&(n=this.getAttribute(r),t=o.boolean?"":o.validate?o.validate.call(this,t):t),f(this,o,r,t,"setAttribute"),o&&(o.setter&&o.setter.call(this,o.boolean?!0:t,n),m(this,o,r,t,"setAttribute"))}},a.removeAttribute={writable:!0,enumerable:!0,value:function(e){var t=e.toLowerCase(),n=i.attributes[t],r=this.hasAttribute(t);f(this,n,t,"","removeAttribute"),n&&(n.setter&&n.setter.call(this,n.boolean?!1:void 0,r),m(this,n,t,"","removeAttribute"))}};var v={},_=o instanceof y.HTMLElement,T=i["extends"]&&(v["extends"]=i["extends"]);return o&&Object.getOwnPropertyNames(o).forEach(function(e){var t=a[e],n=_?Object.getOwnPropertyDescriptor(o,e):o[e];if(t)for(var r in n)t[r]="function"==typeof n[r]&&t[r]?X.wrap(n[r],t[r]):n[r];a[e]=t||n}),v.prototype=Object.create(T?Object.create(w.createElement(T).constructor).prototype:y.HTMLElement.prototype,a),w.registerElement(r,v)},mixins:{},prefix:k,captureEvents:{focus:1,blur:1,scroll:1,DOMMouseScroll:1},customEvents:{animationstart:{attach:[k.dom+"AnimationStart"]},animationend:{attach:[k.dom+"AnimationEnd"]},transitionend:{attach:[k.dom+"TransitionEnd"]},move:{attach:["pointermove"]},enter:{attach:["pointerenter"]},leave:{attach:["pointerleave"]},scrollwheel:{attach:["DOMMouseScroll","mousewheel"],condition:function(e){return e.delta=e.wheelDelta?e.wheelDelta/40:Math.round(-1*(e.detail/3.5)),!0
}},tap:{attach:["pointerdown","pointerup"],condition:function(e,t){if("pointerdown"==e.type)t.startX=e.clientX,t.startY=e.clientY;else if(0===e.button&&10>Math.abs(t.startX-e.clientX)&&10>Math.abs(t.startY-e.clientY))return!0}},tapstart:{attach:["pointerdown"],condition:d},tapend:{attach:["pointerup"],condition:d},tapmove:{attach:["pointerdown"],condition:function(e,t){if("pointerdown"==e.type){var n=t.listener.bind(this);t.tapmoveListeners||(t.tapmoveListeners=X.addEvents(document,{pointermove:n,pointerup:n,pointercancel:n}))}else("pointerup"==e.type||"pointercancel"==e.type)&&(X.removeEvents(document,t.tapmoveListeners),t.tapmoveListeners=null);return!0}},taphold:{attach:["pointerdown","pointerup"],condition:function(e,t){if("pointerdown"==e.type)(t.pointers=t.pointers||{})[e.pointerId]=setTimeout(X.fireEvent.bind(null,this,"taphold"),t.duration||1e3);else{if("pointerup"!=e.type)return!0;t.pointers&&(clearTimeout(t.pointers[e.pointerId]),delete t.pointers[e.pointerId])}}}},pseudos:{__mixin__:{},mixins:{onCompiled:function(e,t){var n=t.source&&t.source.__mixin__||t.source;if(!n)return e;switch(t.value){case null:case"":case"before":return function(){return n.apply(this,arguments),e.apply(this,arguments)};case"after":return function(){var t=e.apply(this,arguments);return n.apply(this,arguments),t};case"none":return e}}},keypass:I,keyfail:I,delegate:{action:l},preventable:{action:function(e,t){return!t.defaultPrevented}},duration:{onAdd:function(e){e.source.duration=Number(e.value)}},capture:{onCompiled:function(e,t){t.source&&(t.source.capture=!0)}}},clone:t,typeOf:e,toArray:n,wrap:function(e,t){return function(){var n=e.apply(this,arguments);return t.apply(this,arguments),n}},merge:function(t,n,r){if("string"==e(n))return i(t,n,r);for(var o=1,a=arguments.length;a>o;o++){var s=arguments[o];for(var c in s)i(t,c,s[c])}return t},uid:function(){return Math.random().toString(36).substr(2,10)},query:r,skipTransition:function(e,t,n){var r=k.js+"TransitionProperty";e.style[r]=e.style.transitionProperty="none";var o=t?t.call(n||e):null;return X.skipFrame(function(){e.style[r]=e.style.transitionProperty="",o&&o.call(n||e)})},requestFrame:function(){var e=y.requestAnimationFrame||y[k.lowercase+"RequestAnimationFrame"]||function(e){return y.setTimeout(e,20)};return function(t){return e(t)}}(),cancelFrame:function(){var e=y.cancelAnimationFrame||y[k.lowercase+"CancelAnimationFrame"]||y.clearTimeout;return function(t){return e(t)}}(),skipFrame:function(e){var t=X.requestFrame(function(){t=X.requestFrame(e)});return t},matchSelector:function(e,t){return A.call(e,t)},set:function(e,t,n){e[t]=n,window.CustomElements&&CustomElements.upgradeAll(e)},innerHTML:function(e,t){X.set(e,"innerHTML",t)},hasClass:function(e,t){return e.className.split(" ").indexOf(t.trim())>-1},addClass:function(e,t){var n=e.className.trim().split(" ");return t.trim().split(" ").forEach(function(e){~n.indexOf(e)||n.push(e)}),e.className=n.join(" ").trim(),e},removeClass:function(e,t){var n=t.trim().split(" ");return e.className=e.className.trim().split(" ").filter(function(e){return e&&!~n.indexOf(e)}).join(" "),e},toggleClass:function(e,t){return X[X.hasClass(e,t)?"removeClass":"addClass"].call(null,e,t)},queryChildren:function(e,t){var r=e.id,o="#"+(e.id=r||"x_"+X.uid())+" > ",i=e.parentNode||!T.appendChild(e);t=o+(t+"").replace(L,","+o);var a=e.parentNode.querySelectorAll(t);return r||e.removeAttribute("id"),i||T.removeChild(e),n(a)},createFragment:function(e){var t=document.createElement("template");return e&&(e.nodeName?n(arguments).forEach(function(e){t.content.appendChild(e)}):t.innerHTML=g(e)),document.importNode(t.content,!0)},manipulate:function(e,t){var n=e.nextSibling,r=e.parentNode,o=t.call(e)||e;n?r.insertBefore(o,n):r.appendChild(o)},applyPseudos:function(e,t,r,i){var a=t,s={};if(e.match(":")){var c=[],u=0;e.replace(S,function(e){return"("==e?1==++u?"❪":"(":--u?")":"❫"}).replace(N,function(e,t,n,r){c.push([t||r,n])});for(var l=c.length;l--;)o(function(){var o=c[l][0],u=c[l][1];if(!X.pseudos[o])throw"pseudo not found: "+o+" "+u;u=""===u||u===void 0?null:u;var d=s[l]=Object.create(X.pseudos[o]);d.key=e,d.name=o,d.value=u,d.arguments=(u||"").split(","),d.action=d.action||M,d.source=i,d.onAdd=d.onAdd||C,d.onRemove=d.onRemove||C;var h=d.listener=a;a=function(){var e=d.action.apply(this,[d].concat(n(arguments)));return null===e||e===!1?e:(e=d.listener.apply(this,arguments),d.listener=h,e)},r?r.push(d):d.onAdd.call(t,d)})}for(var d in s)s[d].onCompiled&&(a=s[d].onCompiled(a,s[d])||a);return a},removePseudos:function(e,t){t.forEach(function(t){t.onRemove.call(e,t)})},parseEvent:function(e,t){var r=e.split(":"),o=r.shift(),i=X.customEvents[o],a=X.merge({type:o,stack:C,condition:M,capture:X.captureEvents[o],attach:[],_attach:[],pseudos:"",_pseudos:[],onAdd:C,onRemove:C},i||{});a.attach=n(a.base||a.attach),a.chain=o+(a.pseudos.length?":"+a.pseudos:"")+(r.length?":"+r.join(":"):"");var s=X.applyPseudos(a.chain,t,a._pseudos,a);return a.stack=function(e){e.currentTarget=e.currentTarget||this;var t=e.detail||{};return t.__stack__?t.__stack__==s?(e.stopPropagation(),e.cancelBubble=!0,s.apply(this,arguments)):void 0:s.apply(this,arguments)},a.listener=function(e){var t=n(arguments),r=a.condition.apply(this,t.concat([a]));return r?e.type!=o&&e.baseEvent&&e.type!=e.baseEvent.type?(X.fireEvent(e.target,o,{baseEvent:e,detail:r!==!0&&(r.__stack__=s)?r:{__stack__:s}}),void 0):a.stack.apply(this,t):r},a.attach.forEach(function(e){a._attach.push(X.parseEvent(e,a.listener))}),a},addEvent:function(e,t,n,r){var o="function"==typeof n?X.parseEvent(t,n):n;return o._pseudos.forEach(function(t){t.onAdd.call(e,t)}),o._attach.forEach(function(t){X.addEvent(e,t.type,t)}),o.onAdd.call(e,o,o.listener),e.addEventListener(o.type,o.stack,r||o.capture),o},addEvents:function(e,t){var n={};for(var r in t)n[r]=X.addEvent(e,r,t[r]);return n},removeEvent:function(e,t,n){n=n||t,n.onRemove.call(e,n,n.listener),X.removePseudos(e,n._pseudos),n._attach.forEach(function(t){X.removeEvent(e,t)}),e.removeEventListener(n.type,n.stack)},removeEvents:function(e,t){for(var n in t)X.removeEvent(e,t[n])},fireEvent:function(e,t,n){var r=w.createEvent("CustomEvent");n=n||{},r.initCustomEvent(t,n.bubbles!==!1,n.cancelable!==!1,n.detail),n.baseEvent&&p(r,n.baseEvent),e.dispatchEvent(r)}};"function"==typeof define&&define.amd?define(X):"undefined"!=typeof module&&module.exports?module.exports=X:y.xtag=X,w.addEventListener("WebComponentsReady",function(){X.fireEvent(w.body,"DOMComponentsLoaded")})}();/*
    -1.0.0 : 
        REMODEL
    -1.2.0 : 
        Amazing improvements
    -1.3.0 : 
        WebComps again :P
*/

String.prototype.contains = function (it) {
    return this.indexOf(it) != -1;
};
String.prototype.startsWith = function (a) {
    return 0 == this.indexOf(a)
};
String.prototype.replaceAll = function (f, r) {
    return this.split(f).join(r);
};
String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}
_ = {
    xload: function (opt) {
        if (opt == undefined) {
            opt = {};
        }
    },
    get: function (opt) {
        if (opt == undefined) {
            opt = {};
        }
        if (opt.sync == undefined)
            opt.sync = true;
        if (opt.url == undefined) {
            return "No url specified";
        }
        if (!opt.url.startsWith("http")) {
            opt.url = "http://" + opt.url;
        }
        if (opt.callback == undefined)
            opt.callback = function (data) { console.log(data); }

        if (!opt.sync) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", opt.url, false); // false for synchronous request
            xmlHttp.send(null);
            return xmlHttp.responseText;
        } else {
            var rnd = ("___metacallbacktmp" + _.number.randomUnique()).toString();
            _[rnd] = function (data) {
                opt.callback(data);
            }
            $.getScript(opt.url + "&" + "callback=_." + rnd).fail(function (err) { opt.callback("error"); });
        }
    },
    server: {
        listen: function (opt, callbackFN) {
            if (opt == undefined)
                opt = {}
            if (opt.host == undefined)
                opt.host = "192.168.0.159";
            if (opt.receiver == undefined)
                opt.receiver = "1";
            if (opt.speed == undefined)
                opt.speed = 5000;
            var rndReceiverNumb = _.number.randomUnique();
            $.getScript("http://" + opt.host + "/&reset=" + opt.receiver); //reinciar
            var caller = window["__metaCallback" + rndReceiverNumb] = function (received) {
                if (window["__metaCallback" + rndReceiverNumb].last == undefined)
                    window["__metaCallback" + rndReceiverNumb].last = "0";
                if (window["__metaCallback" + rndReceiverNumb].last != received.split(":/separator/:id")[1]) {
                    callbackFN(decodeURIComponent(received.split(":/separator/:id")[0]));
                    window["__metaCallback" + rndReceiverNumb].last = received.split(":/separator/:id")[1];
                }
            }
            var intervaller = setInterval(function () {
                try {
                    $.getScript("http://" + opt.host + "/&receive=" + opt.receiver + "&callback=" + "__metaCallback" + rndReceiverNumb).fail(function (jqxhr, settings, exception) {
                        clearInterval(intervaller);
                        console.log("err");
                    });
                } catch (ex) { console.log(ex.message); clearInterval(intervaller); }
            }, opt.speed);
        },
        send: function (opt) {
            if (opt == undefined)
                opt = {}
            if (opt.host == undefined)
                opt.host = "192.168.0.159";
            if (opt.receiver == undefined)
                opt.receiver = "1";
            if (opt.message == undefined)
                opt.message = "nomessage";
            $.getScript("http://" + opt.host + "/&send=" + opt.receiver + "=" + opt.message);
        }
    },
    log: function (argument, type) {
        if (_.tmp_hiddenlog == undefined) {
            _.tmp_hiddenlog = [];
            _.tmp_hiddenlog_count = 0;
            _.log.get = function (argument) {
                if (argument == undefined)
                    return _.tmp_hiddenlog;
                var toReturn = [];
                _.each(_.log.get(), function (log) {
                    if (argument == log.type)
                        toReturn.push(log)
                });
                return toReturn;
            }
        }
        if (argument == undefined)
            return "no args"
        if (type == undefined)
            type = "default"
        _.tmp_hiddenlog.push({
            id: _.tmp_hiddenlog_count,
            date: new Date(),
            data: argument,
            type: type
        });
        _.tmp_hiddenlog_count++;
    },
    scrap: {
        exists: function (selector) {
            return !!document.querySelectorAll(selector);
        },
        remove: function (selector) {
            _.each(document.querySelectorAll(selector), function (element) {
                element.parentNode.removeChild(element);
            });
        }
    },
    comp: {
        has: function (parent, childSelector) {
            if ($(parent).has(childSelector).length) {
                return true;
            } else {
                return false;
            }
        }
    },
    array: { //ARRAY
        contains: function (arr, val) {
            var tr = false;
            _.each(arr, function (vals) {
                if (vals == val)
                    tr = true;
            });
            return tr;
        }
    },
    int: { //INT
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    },
    number: {
        randomUnique: function () {
            return parseInt(new Date().getTime() + Math.random()).toString().replace(".", "");
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    },
    string: { //STRING
        capFirst: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
    event: { //EVENT
        keyboardChanged: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    fnCalled(_.inner.is_keyboard);
                }, false);
            }
        },
        keyboardShown: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    if (_.inner.is_keyboard) {
                        fnCalled();
                    }
                }, false);
            }
        },
        keyboardHidden: function (fnCalled) {
            if (_.device.isTouch()) {
                _.inner.is_keyboard = false;
                _.inner.is_landscape = false;
                _.inner.initial_screen_size = window.innerHeight;
                window.addEventListener("resize", function () {
                    _.inner.is_keyboard = (window.innerHeight < _.inner.initial_screen_size);
                    _.inner.is_landscape = (screen.height < screen.width);
                    if (!_.inner.is_keyboard) {
                        fnCalled();
                    }
                }, false);
            }
        }
    },
    performance: { //PERFORMANCE
        runTime: function (fn) {
            var start = performance.now();
            fn();
            return performance.now() - start;
        }
    },
    device: {
        type: function () {
            if ($(window).height() <= "840") {
                return "small";
            }
            if ($(window).height() <= "1000") {
                return "medium";
            }
            return "large";
        },
        isTouch: function (argument) {
            return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        }
    },
    version: "1.3.1",
    require: function (library, cb) {
        if (cb == undefined)
            cb = function (argument) { }
        switch (library) {
            case "theme":
                try {
                    return _.ui_builder.theme;
                } catch (ex) { }

                break;
            case "yahoo-weather":
                try {
                    return _.yahoo_weather_api;
                } catch (ex) { }
                break;
            case "python":
                try {
                    if (_.skulp.run) {
                        cb();
                        return _.skulp;
                    }
                } catch (ex) { }
                $.getScript("http://www.skulpt.org/static/skulpt.min.js").done(function (argument) {
                    $.getScript("http://www.skulpt.org/static/skulpt-stdlib.js").done(function (argument) {
                        var tried_times = 0;
                        var sheddy = setInterval(function (argument) {
                            tried_times++;
                            if (tried_times > 10) {
                                clearInterval(sheddy);
                            }
                            try {
                                if (Sk != undefined) {
                                    clearInterval(sheddy);
                                    _.skulp.run = function (argument) {
                                        var prog = argument;
                                        Sk.configure({
                                            output: function (argument) {
                                                console.log(argument);
                                            },
                                            read: function (x) {
                                                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                                                    throw "File not found: '" + x + "'";
                                                return Sk.builtinFiles["files"][x];
                                            }
                                        });
                                        var myPromise = Sk.misceval.asyncToPromise(function () {
                                            return Sk.importMainWithBody("<stdin>", false, prog, true);
                                        });
                                        myPromise.then(function (mod) {
                                            //console.log('success');
                                        },
                                            function (err) {
                                                //console.log(err.toString());
                                            });
                                    }
                                    cb();
                                }
                            } catch (ex) { }
                        }, 200);
                    });
                });
                _.skulp = {};
                return _.skulp;
                break;
            case "speak":
                try {
                    return _.speak_api;
                } catch (ex) { }

                break;
            case "ui-builder":
                try {
                    return _.ui_builder;
                } catch (ex) { }

                break;
            case "wikipedia":
                try {
                    return _.wikipedia_api;
                } catch (ex) { }

                break;
            case "anim":
                try {
                    return _.library_animVersion2;
                } catch (ex) { }

                break;
            case "continuum":
                try {
                    return _.continuum_api;
                } catch (ex) { }

                break;
            case "anim2":
                try {
                    return _.library_animVersion2;
                } catch (ex) { }

                break;
            default:
                try {
                    if (cb == undefined)
                        cb = function () { }
                    $.getScript(library, function (data, textStatus, jqxhr) {
                        cb();
                    });
                } catch (ex) { }
                break;

        }
    },
    write: function (argument) {
        $("body").append(argument);
        if (_.writeToConsoleToo)
            console.log(argument);
    },
    safe: function (fn, defTime) {
        if (defTime == undefined) {
            defTime = 100;
        }
        setTimeout(fn, defTime);
    },
    reload: function (eraseAll) {
        if (eraseAll == undefined)
            eraseAll = false;

        if (eraseAll) {
            localStorage.clear();
        }
        window.location.reload();
    },
    cc: function (v, f) {
        if (f == undefined) {
            return {
                w: parseInt($(window).width() / 100 * (v)),
                h: parseInt($(window).height() / 100 * (v))
            }
        } else {
            return {
                w: parseInt(f.w / 100 * (v)),
                h: parseInt(f.h / 100 * (v))
            }
        }

    },
    call: function (functionName, context /*, args */) {
        var args = [].slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    },
    importLib: function (argument) {
        $.each(Object.keys(_), function (index, object) {
            console.log(object.toString());
            window[object.toString()] = _[object.toString()];
        });
        return "Success";
    },
    import: function (elque) {
        _._importing_something = true;
        _._importing_current++;
        $.getScript(elque)
            .done(function (script, textStatus) {
                _._importing_current--;
                if (!_.main_already_called && _._importing_current == 0) {
                    main();
                }
            })
            .fail(function (jqxhr, settings, exception) {
                _._importing_current--;
            });
    },
    each: function (contenedor, funcAllamar) {
        for (var i = 0; i < contenedor.length; i++) {
            funcAllamar(contenedor[i], i);
        }
        return contenedor;
    },
    clear: function (argument) {
        _.ui.clear();
    },
    createJSONFile: function (url) {
        return "nativeDownloader_download(" + JSON.stringify(url) + ")";
    },
    http: {
        ajax: function (url, succ, err) {
            $.ajax({
                url: url,
                cache: false,
                success: succ,
                timeout: 3000,
                error: err
            });
        },
        get: function (url, sync, fn) {
            try {
                if (sync == undefined)
                    sync = true;
                if (fn == undefined)
                    fn = function (argument) {
                        console.log(argument);
                    }
                var response = $.ajax({
                    url: url,
                    cache: false,
                    async: !sync,
                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                    },
                    success: function (html) {
                        if (!sync)
                            fn(html);
                    },
                    timeout: 3000
                });
                if (response.statusText == "OK") {
                    return response.responseText;
                } else {
                    return false;
                }
            } catch (ex) {
                console.log(ex.message);
                return false;
            }

        },
        getScript: function (url) {
            $.getScript(url);
            return "Success"
        }
    },
    module: {
        list: [],
        add: function (name) {
            _.module.list.push(name);
        }
    }
};
_.main_already_called = false;
_._importing_current = 0;



function l(s, t) {
    if (!t) {
        try {
            output.prepend(s + "<br>");
            console.log(s);
        } catch (ex) { console.log(ex.message) + " at l" }
    } else {
        try {
            output.prepend(s.replaceAll("[ok]", "[<span style='color:lime;'> ok </span>]").replaceAll("[fail]", "[<span style='color:#ff1e1e;'> fail </span>]").replaceAll("[att]", "[<span style='color:#FFEB3B;'> att </span>]") + "<br>");
            console.log(s);
        } catch (ex) { console.log(ex.message) }
    }


}

_.initializeSystem = function (callMain) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">');
    $('head').append('<meta name="apple-mobile-web-app-capable" content="yes">');
    $('head').append('<meta name="mobile-web-app-capable" content="yes">');
    $('head').append('<meta name="theme-color" content="black">');
    $('head').append('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
    $("html body").css({
        "width": "100%",
        "height": "100%",
        "margin": "0",
        "padding": "0",
        "overflow": "hidden"
    });
    if (callMain) {
        try {
            if (_._importing_something) { } else { main(); }
        } catch (ex) { console.log(ex); }
    }
}

_.set = {
    parametters: function (pars) {
        _.each(pars.split(" "), function (val) {
            switch (val) {
                case "writeToConsole":
                    _.writeToConsoleToo = true;
                    break;
                case "blackTheme":
                    $("body").css({
                        "background": "black",
                        "color": "lime"
                    });
                    console.log("par");
                    break;
            }
        });
    }
}

//SHORTING
_.req = _.require;
_.int.rnd = _.int.random;
_.inner = {}; //some tmp props go here

//DEBUG PARAMETTERS SETTING
_.writeToConsoleToo = false;
_.module.add("native");
$(function () {
    _.initializeSystem(true);
});
$(function (argument) {
    function registerElements(argument) {
        registerQuickElement("ui-view", {
            "width": "100%",
            "height": "100%",
            "position": "relative",
            "z-index": "1",
            "overflow": "auto"
        }, { canStatic: false });
        registerQuickElement("ui-header", {
            "width": "100vw",
            "height": "9vh",
            "max-height": "60px",
            "position": "relative",
            "z-index": "10"
        });
        registerQuickElement("ui-card", {
            "width": "94vw",
            "position": "relative",
            "box-shadow": "rgba(0, 0, 0, 0.14902) 0px 0px 4px 2px",
            "background": "rgb(255, 255, 255)",
            "float": "left",
            "margin-left": "2vw",
            "margin-top": "20px",
            "padding": "3%",
            "color": "black"
        }, { canStatic: false });
        registerQuickElement("ui-title", {
            "width": "auto",
            "padding-left": "2%",
            "padding-right": "2%",
            "height": "100%",
            "position": "relative",
            "float": "left",
            "font-size": "20px",
            "display": "flex",
            "justify-content": "center",
            "align-content": "center",
            "flex-direction": "column",
            "text-align": "center"
        });
        registerQuickElement("ui-split", {
            "width": "100%",
            "height": "1px",
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block"
        });
        registerQuickElement("ui-button", {
            "position": "relative",
            "color": "rgb(255, 255, 255)",
            "text-shadow": "0 1px 0 rgba(255,255,255, 0.8)",
            "text-decoration": "none",
            "text-align": "center",
            "cursor": "pointer",
            "font-size": "14x",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "float": "left",
            "font-family": "helvetica, arial, sans-serif",
            "width": "auto",
            "height": "8vh",
            "background": "blue",
            "padding-left": "5.4vw",
            "padding-right": "5.4vw",
            "padding-top": "4%",
            "padding-bottom": "4%",
            "margin-left": "1.5vw",
            "margin-top": "1.5vh",
            "margin-bottom": "1.5vh"

        });
        registerQuickElement("ui-input", {
            "position": "relative",
            "float": "left",
            "background": "white",
            "display": "block",
            "width": "calc(100% - 10px)",
            "height": "7vh",
            "padding": "2px",
            "margin-left": "5px"
        }, {
                post: function (elem) {
                    $(elem).html("");
                    var inputado = $('<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></input>');
                    inputado.on("focus", function (ev) {
                        marginado.css("width", "100%");
                    }).on("blur", function (ev) {
                        marginado.css("width", "0%");
                    });
                    $(elem).append(inputado);
                    $(xtag.queryChildren(elem, 'input')[0]).css({
                        "background": "inherit",
                        "color": "inherit",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box",
                        "-webkit-transform": "translate3d(0, 0, 0)",
                        "outline": "none",
                        "border": "0",
                        "width": "100%",
                        "height": "calc(100% - 0.13em)",
                        "font-size": "18px",
                        "resize": "none",
                        "font-family": "inherit"
                    });
                    var marginado = $("<div style='position:absolute;bottom:0;left:0;width:0%;height:0.13em;transition:all 0.2s;background-color:blue;opacity:0.4;'></div>");
                    $(elem).append(marginado);
                    if (elem.hasAttribute("submit")) {
                        $(xtag.queryChildren(elem, 'input')[0]).on("keyup", function (e) {
                            if (e.which == 13) {
                                _.call($(elem).attr("submit"), window, $(this).val(), this);
                            }
                        });
                    }
                }
            }
        );
        registerQuickElement("menu-icon", {
            "position": "relative",
            "float": "left",
            "display": "",
            "height": "100%",
            "width": "15%",
            "font-size": "2.6em",
            "color": "white",
            "background": "",
            "font-weight": "bold",
            "cursor": "pointer",
            "outline": "none",
            "text-align": "center"
        }, {
                post: function (elem) {
                    $(elem).html("&#x2261;");
                    setStyle("center-content", elem);
                    if (document.documentElement.clientHeight < 580) {
                        $(elem).css("font-size", "2.1em");
                    }
                },
                canStatic: false
            });
        registerQuickElement("black-code", {
            "position": "absolute",
            "display": "none",
            "background": "",
        }, {

                post: function (elem) {
                    eval($(elem).html());
                    $(elem).remove();
                },
                canStatic: false
            });


        registerQuickElement("ui-item", {
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block",
            "width": "100%",
            "height": "auto",
            "color": "rgb(134, 134, 134)",
            "font-size": "1.2em",
            "padding-left": "4%",
            "padding-right": "4%",
            "padding-bottom": "3vh",
            "padding-top": "3vh",
            "transform": "translateZ(0)"
        }, {
                post: function (elem) {
                    if ($(elem).parent().attr("add-margin")) {
                        if (!(elem.hasAttribute("no-margin"))) {
                            $(elem).attr("add-margin", "");
                        }
                    }
                }
            });
        registerQuickElement("ui-div", {
            "position": "relative",
            "float": "left",
            "background": "",
            "display": "block"
        });

    }

    function registerQuickElement(name, style, opt) {
        xtag.register(name, {
            lifecycle: {
                created: function () {
                    $(this).css(defaultStyling);
                    $(this).css(style); //predefined
                    if (opt == undefined)
                        opt = {}
                    if (opt.canStatic == undefined)
                        opt.canStatic = true;
                    if (opt.post)
                        opt.post(this);
                    var that = this;
                    //Check if element has themes attribute
                    if (this.hasAttribute("theme")) {
                        //Set it after default element style but not before attr tags style
                        setAttr(that, "theme", $(that).attr("theme"));
                    } else {
                        //Check if has no-theme, to set it as ui-view theme if it is defined
                        if (!this.hasAttribute("no-theme")) {
                            setAttr(that, "theme", $(that).closest("ui-view").attr("theme"));
                        }
                    }
                    //set all attr first execpt theme and static
                    _.each(this.attributes, function (attr) {
                        //theme attr must be proccessed first
                        if (attr.name != "theme" && attr.name != "static")
                            setAttr(that, attr.name, attr.value);

                    });
                    //static must be set after all before
                    if (this.hasAttribute("static")) {
                        //some elems can't be static
                        if (opt.canStatic) {
                            $(this).css("height", $(this).css("height"));
                        }
                    } else {
                        //same set as parent
                        if (!this.hasAttribute("no-static") && opt.canStatic) { //no static
                            $(this).css("height", $(this).css("height"));
                        }
                    }

                },
                attributeChanged: function (attrName, oldValue, newValue) {
                    setAttr(this, attrName, newValue);
                }
            },
            events: {
                tap: function () {
                    try {
                        eval($(this).attr("ontap"));
                    } catch (ex) {
                        console.log(ex.message);
                    }
                }
            }
        });
    } //END REGISTERELEMENT

    function setAttr(obj, attName, value) {
        obj = $(obj);
        switch (attName) {
            case "slide-anim":
                if (value == "") {
                    if (_.device.isTouch()) {
                        obj.on("touchstart", function (argument) {
                            ultaCoolEffect(obj);
                        });
                    } else {
                        obj.on("mousedown", function (argument) {
                            ultaCoolEffect(obj);
                        });
                    }
                } else {
                    if (_.device.isTouch()) {
                        obj.on("touchstart", function (argument) {
                            ultaCoolEffect(obj, function () { eval(value); });
                        });
                    } else {
                        obj.on("mousedown", function (argument) {
                            ultaCoolEffect(obj, function () { eval(value); });
                        });
                    }
                }

                break;
            case "bg":
            case "background":
                obj.css({
                    "background": value
                });
                obj.data("default-backcolor", value)
                break;
            case "width":
                obj.css({
                    "width": value
                });
                break;
            case "theme":
                setTheme(obj, value);
                break;
            case "shadow":
                switch (value) {
                    case undefined:
                    case "":
                    case "true":
                    case "yes":
                    case "1":
                        obj.css({
                            "box-shadow": "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
                        });
                        break;
                    case "2":
                        obj.css({
                            "box-shadow": "rgba(0, 0, 0, 0.247059) 0px 0px 8px 4px"
                        });
                        break;
                    case "3":
                        obj.css({
                            "box-shadow": "rgba(0, 0, 0, 0.447059) 0px 0px 20px 3px"
                        });
                        break;
                }
                break;
            case "center-content":
                obj.css({
                    "display": "flex",
                    "justify-content": "center",
                    "align-content": "center",
                    "flex-direction": "column",
                    "text-align": "center"
                });
                break;
            case "add-margin":
                if ($(obj).attr("add-margin") == "" || $(obj).attr("add-margin") == "yes") {
                    $(obj).attr("add-margin", "already_added");
                    $(obj).append("<div class='_xcomp_predefined_class_margin' style='position:absolute;bottom:0;left:0;width:100%;height:0.06em;background-color:black;opacity:0.2;'></div>");
                }
                if ($(obj).attr("add-margin") == "no") {
                    $(obj).find("._xcomp_predefined_class_margin").remove();
                }
                break;
            case "no-margin":
                if ($(obj).attr("no-margin") == "" || $(obj).attr("no-margin") == "yes") {
                    $(obj).attr("no-margin", "already_removed");
                    $(obj).append("<div class='_xcomp_predefined_class_margin' style='position:absolute;bottom:0;left:0;width:100%;height:0.06em;background-color:black;opacity:0.2;'></div>");
                }
                $(obj).find("._xcomp_predefined_class_margin").remove();
                break;
            case "no-center-content":
                obj.css({
                    "display": "block",
                    "justify-content": "",
                    "align-content": "",
                    "flex-direction": "",
                    "text-align": ""
                });
                break;
            case "no-shadow":
                switch (value) {
                    case undefined:
                    case "":
                        obj.css({
                            "box-shadow": ""
                        });
                        break;
                }
                break;
            default:
                obj.css(attName, value);
                break;
        }
    } //END SETATTR

    function setTheme(obj, theme) {
        obj = $(obj);
        switch (obj.prop("tagName")) {
            case "UI-BUTTON":
                switch (theme) {
                    case "ios":
                        obj.css({
                            "border-radius": "4px",
                            "border": "1px solid rgba(0,0,0,0.1)",
                            "background": "-webkit-linear-gradient(top, #89A0BE 0%,#5877A2 50%,#486A9A 51%,#4A6C9B 100%)",
                            "width": "auto",
                            "padding-left": "3vh",
                            "padding-right": "3vh",
                            "padding-top": "3vh",
                            "padding-bottom": "3vh",
                            "margin-left": "1.5vw",
                            "margin-top": "1vh",
                        });
                        break;
                    case "flat":
                        obj.css({
                            "background": "#730e0e",
                            "width": "auto",
                            "padding-left": "3vh",
                            "padding-right": "3vh",
                            "padding-top": "3vh",
                            "padding-bottom": "3vh"
                        });
                        break;
                    case "material":
                        obj.css({
                            "background": "#26a69a",
                            "color": "#fff",
                            //"width": "auto",
                            //"padding-left": "6vh",
                            //"padding-right": "6vh",
                            //"padding-top": "3vh",
                            //"padding-bottom": "3vh",
                            //"margin-left": "1.5vw",
                            //"margin-top": "1vh",
                            "box-shadow": "rgba(0, 0, 0, 0.57) 0px 2px 5px 0px",
                            "transition": "background 0.6s ease-out"
                        });
                        if (obj[0].hasAttribute("no-anim")) { } else {
                            if (_.device.isTouch()) {
                                obj.on("touchstart", function (argument) {
                                    if (obj.data("default-backcolor") == undefined)
                                        obj.data("default-backcolor", $(obj).css("background"));
                                    $(obj).css({
                                        "background": "rgb(170, 203, 200)"
                                    });
                                    setTimeout(function (argument) {
                                        $(obj).css({
                                            "background": obj.data("default-backcolor")
                                        });
                                    }, 600);
                                });
                            } else {
                                obj.on("mousedown", function (argument) {

                                    if (obj.data("default-backcolor") == undefined)
                                        obj.data("default-backcolor", $(obj).css("background"));
                                    $(obj).css({
                                        "background": "rgb(170, 203, 200)"
                                    });
                                    setTimeout(function (argument) {
                                        $(obj).css({
                                            "background": obj.data("default-backcolor")
                                        });
                                    }, 600);
                                });
                            }
                        }
                        break;
                }
                break;

            case "UI-HEADER":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "rgb(43, 117, 237)",
                            "box-shadow": "rgba(0, 0, 0, 0.50) 0px 2px 5px 0px",
                            "color": "#fff"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "linear-gradient(to bottom, rgba(162,181,202,1) 0%,rgba(54,92,149,1) 100%)",
                            "box-shadow": "rgba(0, 0, 0, 0.84) 0px 0px 5px 1px",
                            "color": "#fff"
                        });
                        break;
                }
                break;
            case "UI-VIEW":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "#fafafa"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "repeating-linear-gradient(   to right,   #b2c1d9,   #b2c1d9 5px,   #bcc8db 5px,   #bcc8db 10px )"
                        });
                        break;
                }
                break;
            case "UI-INPUT":
                switch (theme) {
                    case "flat":
                        obj.css({
                            "background": "rgb(45, 81, 11)"
                        });
                    case "material":
                        obj.css({
                            "background": "white",
                            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 2px 5px 0px",
                            "color": "black"
                        });
                        break;
                    case "ios":
                        obj.css({
                            "background": "linear-gradient(to bottom, rgba(162,181,202,1) 0%,rgba(54,92,149,1) 100%)",
                            "box-shadow": "rgba(0, 0, 0, 0.84) 0px 0px 5px 1px",
                            "color": "#fff"
                        });
                        break;
                }
                break;
        }

    }
    var defaultStyling = {
        "-webkit-touch-callout": "none",
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "box-sizing": "border-box",
        "display": "block"
    }

    registerElements();

    function setStyle(styleName, elem) {
        switch (styleName) {
            case "center-content":
                $(elem).css({
                    "display": "flex",
                    "justify-content": "center",
                    "align-content": "center",
                    "flex-direction": "column",
                    "text-align": "center"
                });
                break;
        }
    }

});

function ultaCoolEffect(target, callback) {
    var on = $(target).attr("slide-anim-callback");
    var speed = 400;
    var effobj = $("<div style='position:absolute;top:0;left:0%;width:0%;height:100%;transition:all " + speed + "ms;;opacity:0.2;z-index:10;background:black;'></div>")
    $(target).append(effobj);
    setTimeout(function () {
        effobj.css({
            "width": "100%"
        });
        if (on == "first" || on == "1") {
            setTimeout(function () {
                if (callback)
                    callback();
            }, 100);
        }
        setTimeout(function () {
            effobj.css({
                "width": "0%",
                "left": "100%"
            });
            if (on == "second" || on == "2") {
                if (callback)
                    callback();
            }
            setTimeout(function () {
                effobj.remove();
                if (on == "" || on == undefined || on == "last" || on == "3") {
                    if (callback)
                        callback();
                }

            }, speed + 1);
        }, speed + 1);
    }, 15);


}
function ultaCoolEffectSave(target, callback, sp) {
    var speed = 400;
    if (sp)
        speed = sp;

    var effobj = $("<div style='position:absolute;top:0;left:0;width:0%;height:100%;transition:all " + speed + "ms;;opacity:0.2;z-index:10;background:black;'></div>")
    $(target).append(effobj);
    setTimeout(function () {
        effobj.css({
            "width": "100%"
        });
        setTimeout(function () {
            effobj.css({
                "width": "0%",
                "left": "100%"
            });
            setTimeout(function () {
                effobj.remove();
                if (callback)
                    callback();
            }, speed + 1);
        }, speed + 1);
    }, 15);


};_.youtube = {
    api_added: false,
    load: function(opt) {
        //$("#hidden_datab_yt_id_native").remove();
        if (!$("#hidden_datab_yt_id_native").length) {
            $("body").append('<div style="position:absolute;top:0;left:0;visibility:hidden;" id="hidden_datab_yt_id_native"></div>');
        }
        if (!_.youtube.api_added) {
            if (opt == undefined)
                opt = {}
            if (opt.id == undefined)
                opt.id = "";
            if (opt.list == undefined)
                opt.list = []
            if (opt.shuffle == undefined)
                opt.shuffle = false
            var tag = document.createElement('script');
            tag.src = window.location.protocol + "//www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            _.youtube.api_added = true;
            window.onYouTubeIframeAPIReady = function() {
                _.youtube.player = new YT.Player('hidden_datab_yt_id_native', {
                    height: '390',
                    width: '640',
                    videoId: opt.id,
                    "suggestedQuality": "hd720",
                    playerVars: {
                        'autoplay': 1,
                        listType: 'playlist',
                        list: opt.list
                    },
                    events: {
                        'onReady': function(event) {
                            _.youtube.player.setShuffle(opt.shuffle);
                            if (opt.autoplay)
                                event.target.playVideo();
                            if (opt.callback) {
                                opt.callback();
                            }
                            if (opt.container) {
                                console.log("ready")
                                _.youtube.fullscreen(opt.container);
                                opt.container = "";
                            }
                        },
                        'onStateChange': function(argument) {
                            // body...
                        }
                    }
                });
            }
        } else {
            
        }
        return _.youtube;
    },
    play: function() {
        _.youtube.player.playVideo();
    },
    stop: function() {
        _.youtube.player.stopVideo();
    },
    pause: function() {
        _.youtube.player.pauseVideo();
    },
    volume: function(de) {
        _.youtube.player.setVolume(de);
    },
    advance: function(amount) {
        _.youtube.player.seekTo(_.youtube.player.getCurrentTime() + amount);
    },
    fullscreen: function(to) {
        var tmp = _.youtube.player.getCurrentTime()
        if (to == undefined) {
            to = $("body");
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "absolute",
                "z-index": "100",
                "overflow": "hidden"
            }).appendTo(to);
        } else {
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "",
                "overflow": "hidden"
            }).appendTo(to);
            to.css({
                "overflow": "hidden"
            });
        }

        setTimeout(function(argument) {
            console.log(tmp);
            _.youtube.player.seekTo(tmp);
        }, 2000);

    },
    to: function(to) {
        var tmp = _.youtube.player.getCurrentTime()
        if (to == undefined) {
            to = $("body");
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "absolute",
                "z-index": "100",
                "overflow": "hidden"
            }).appendTo(to);
        } else {
            $("#hidden_datab_yt_id_native").css({
                "visibility": "visible",
                "width": "100%",
                "height": "100%",
                "position": "",
                "overflow": "hidden"
            }).appendTo(to);
            to.css({
                "overflow": "hidden"
            });
        }

        setTimeout(function(argument) {
            console.log(tmp);
            _.youtube.player.seekTo(tmp);
        }, 2000);

    },
    invisible: function(amount) {
        $("#hidden_datab_yt_id_native").css({
            "visibility": "hidden"
        }).appendTo($("body"));
    },
    remove: function(argument) {
        $("#hidden_datab_yt_id_native").remove();
    },
    next: function(argument) {
        _.youtube.player.nextVideo();
    }
};



_.module.add("youtube");
