import{a as h}from"./chunk-GXMPMPRN.js";import"./chunk-WIQECBEN.js";h();var c={inline:["$","$"],display:["$$","$$"]};function x(a,t){t===void 0&&(t=c);for(var o=a.querySelectorAll(".katex-mathml + .katex-html"),n=0;n<o.length;n++){var r=o[n];r.remove?r.remove():r.parentNode&&r.parentNode.removeChild(r)}for(var d=a.querySelectorAll(".katex-mathml"),i=0;i<d.length;i++){var l=d[i],e=l.querySelector("annotation");e&&(l.replaceWith?l.replaceWith(e):l.parentNode&&l.parentNode.replaceChild(e,l),e.innerHTML=t.inline[0]+e.innerHTML+t.inline[1])}for(var f=a.querySelectorAll(".katex-display annotation"),v=0;v<f.length;v++){var s=f[v];s.innerHTML=t.display[0]+s.innerHTML.substr(t.inline[0].length,s.innerHTML.length-t.inline[0].length-t.inline[1].length)+t.display[1]}return a}function p(a){var t=a instanceof Element?a:a.parentElement;return t&&t.closest(".katex")}document.addEventListener("copy",function(a){var t=window.getSelection();if(!(t.isCollapsed||!a.clipboardData)){var o=a.clipboardData,n=t.getRangeAt(0),r=p(n.startContainer);r&&n.setStartBefore(r);var d=p(n.endContainer);d&&n.setEndAfter(d);var i=n.cloneContents();if(i.querySelector(".katex-mathml")){var l=Array.prototype.map.call(i.childNodes,e=>e instanceof Text?e.textContent:e.outerHTML).join("");o.setData("text/html",l),o.setData("text/plain",x(i).textContent),a.preventDefault()}}});
/*! For license information please see copy-tex-BHWNHNE6.js.LEGAL.txt */
