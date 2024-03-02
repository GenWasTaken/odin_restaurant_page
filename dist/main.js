(()=>{"use strict";var n={923:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),a=t.n(o),i=t(314),r=t.n(i)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),r.push([n.id,":root { \n    --wb-main-color: #809BBF;\n    --wb-darker-main-color: #5a7ead;\n    --wb-second-color: #F20544;\n    --wb-darker-second-color:rgb(107, 16, 40);\n    --wb-low-opacity-main-color:rgba(128, 155, 191, .3); \n    --wb-low-opacity-second-color: rgba(242, 5, 68, .2);\n    --wb-light-tone: #fcf5f1;\n    --wb-light-tone-lowered: #fdf2eb;\n    --wb-lighter-main-color: #61aecc;\n    --wb-lighter-second-color: #F22E76;\n    --span-font-color: rgba(0, 0, 0, 0.85);\n\n    --h3-font-size: calc(1.5vw + 2vh);\n    --span-font-size: calc(1.15vw + 1.25vh);\n    --input-font-size: calc(.75vw + .9vh);\n}\n\n.wb-contact {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(60%, 1fr));\n    gap: 20%;\n    width: 100%;\n    height: auto;\n    padding: 10px;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    border: 5px solid var(--wb-light-tone-lowered);\n    border-radius: 30px;\n    padding: 25px 15%;\n    justify-content: center;\n    align-items: center;\n    background: var(--wb-light-tone-lowered);\n    width: auto;\n}\n\n.contact-info h3 {\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-size: var(--h3-font-size);\n    align-self:flex-start;\n}\n\n.contact-data {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.credits-link {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    color: var(--span-font-color);\n    font-size: var(--span-font-size);\n    font-weight: 500;\n    cursor: pointer;\n}\n\n.credits-link:hover {\n    color: var(--wb-lighter-second-color);\n}\n\n.credits-link span:hover {\n    text-decoration: underline 2px var(--wb-lighter-second-color);\n}\n\n.service-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n}\n\n.service-container span {\n    font-family: 'Roboto', sans-serif;\n    color: var(--span-font-color);\n    font-size: var(--span-font-size);\n    font-weight: 500;\n}\n\n.service-container input {\n    padding: 10px;\n    border: none;\n    background: var(--wb-light-tone);\n    font-family: 'Roboto', sans-serif;\n    font-size: var(--input-font-size);\n    width: 100%;\n    margin-left: auto;\n\n}\n\n\n \n    \n    \n\n",""]);const s=r},688:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),a=t.n(o),i=t(314),r=t.n(i)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),r.push([n.id,":root { \n    --wb-main-color: #809BBF;\n    --wb-darker-main-color: #5a7ead;\n    --wb-second-color: #F20544;\n    --wb-darker-second-color:rgb(107, 16, 40);\n    --wb-low-opacity-main-color:rgba(128, 155, 191, .3); \n    --wb-low-opacity-second-color: rgba(242, 5, 68, .2);\n    --wb-light-tone: #fcf5f1;\n    --wb-lighter-main-color: #61aecc;\n    --wb-lighter-second-color: #F22E76;\n}\n\n.table-wrapper {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    gap: 15px;\n    border: 5px solid var(--wb-darker-second-color);\n    background: var(--wb-second-color);\n    border-radius: 30px;\n    padding: 25px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 15px;\n}\n\n.wb-location {\n    display: flex;\n    border: 5px solid var(--wb-darker-main-color);\n    background: var(--wb-main-color);\n    border-radius: 30px;\n    padding: 50px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 15px;\n    cursor: pointer;\n}\n\n.table-wrapper span {\n    color: var(--wb-light-tone);\n    text-shadow: 3px 3px var(--wb-lighter-second-color);\n}\n\n.wb-location span {\n    color: var(--wb-light-tone);\n    text-shadow: 3px 3px var(--wb-lighter-main-color);\n}\n\n.wb-location span:hover {\n    text-decoration: underline 3px var(--wb-light-tone);\n}\n\n@media screen and (min-width: 1436px) {\n    .home-content {\n        width: 95%;\n        height: auto;\n        padding: 10px;\n    }\n\n    .wb-introduction {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n        align-items: flex-start;\n        justify-content: end;\n    }\n\n    \n}\n\n@media screen and (max-width: 1435px) {\n    .home-content {\n        width: 95%;\n        height: auto;\n        padding: 10px;\n    }\n\n    .wb-introduction {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n        align-items: flex-start;\n        justify-content: end;\n    }\n\n   \n}\n\n@media screen and (min-width: 951px) {\n    .home-content h3 {\n        font-family: 'Roboto', sans-serif;\n        font-weight: bold;\n        font-size: 2vw;\n    }\n    \n    .wb-introduction span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 1.5vw;\n        font-weight: 500;\n    }\n\n    .table-wrapper span, .wb-location span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 1.6vw;\n        font-weight: 500;\n    }\n}\n\n@media screen and (max-width: 950px) {\n    .home-content h3 {\n        font-family: 'Roboto', sans-serif;\n        font-weight: bold;\n        font-size: 3vw;\n    }\n    \n    .wb-introduction span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 2.5vw;\n        font-weight: 500;\n    }\n\n    .table-wrapper span, .wb-location span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 2.8vw;\n        font-weight: 500;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .home-content h3 {\n        font-family: 'Roboto', sans-serif;\n        font-weight: bold;\n        font-size: 4vh;\n    }\n    \n    .wb-introduction span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 2vh;\n        font-weight: 500;\n    }\n\n    .table-wrapper span, .wb-location span {\n        font-family: 'Roboto', sans-serif;\n        font-size: 2.3vh;\n        font-weight: 500;\n    }\n}\n\n",""]);const s=r},528:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),a=t.n(o),i=t(314),r=t.n(i)()(a());r.push([n.id,"",""]);const s=r},713:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),a=t.n(o),i=t(314),r=t.n(i)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),r.push([n.id,':root { \n    --wb-main-color: #809BBF;\n    --wb-second-color: #F20544;\n    --wb-low-opacity-main-color:rgba(128, 155, 191, .3); \n    --wb-low-opacity-second-color: rgba(242, 5, 68, .2);\n    --wb-light-tone: #fcf5f1;\n    --wb-lighter-main-color: #78beda;\n    --wb-lighter-second-color: #F22E76;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background: var(--wb-light-tone);\n    z-index: 0;\n    overflow-y: scroll;\n    overflow-x: hidden; \n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header-wave {\n    margin-top: -.5px;\n    z-index: -10;\n    margin-bottom: -12%;\n}\n\nfooter {\n    margin-top: auto;\n    background: var(--wb-main-color);\n    display: grid;\n    grid-template-columns: repeat(2, 10%);\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    padding: 25px;\n}\n\n.credits {\n    display: flex;\n    gap: 5px;\n    font-size: 1.15vw;\n    transition: all .15s linear;\n    cursor: pointer;\n}\n\n.credits:hover {\n    color: var(--wb-lighter-second-color);\n    transition: all .15s linear;\n}\n\n/* DEFAULT SCREEN STYLE */\n@media screen and (min-width: 1436px) {\n    header {\n        width: 100%;\n        height: auto;\n        background: var(--wb-main-color);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 15px;\n    }\n\n    .mobile-header {\n        display: none;\n    }\n\n    .wb-title {\n        margin: 15px;\n        font-size: 2.7vw;\n        font-family: \'Noto Sans\', sans-serif;\n        font-weight: bold;\n        text-decoration: underline wavy;\n        overflow-x: visible;\n        color: white;\n        text-shadow: 3px 3px var(--wb-second-color);\n    }\n\n    #close-menu, .mobile-icon {\n        display: none;\n    }\n    \n    nav {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(6vw, 1fr));\n        gap: 35px;\n        width: 30%;\n        padding: 10px;\n    }\n    \n    nav .nav-button {\n        width: 6vw;\n        padding: 10px;\n        border-radius: 30px;\n        border: 3px solid var(--wb-second-color);\n        cursor: pointer;\n        font-family: "Noto Sans", sans-serif;\n        font-weight: bold;\n        background: var(--wb-light-tone);\n        color: var(--wb-second-color);\n        font-size: 1.2vw;\n        box-shadow: var(--wb-low-opacity-second-color) 0px 3px 5px;\n        transition: .15s linear;\n    }\n    \n    .nav-button:hover {\n        color: white;\n        background: var(--wb-second-color);\n        transition: .15s linear;\n    }\n\n    #content { \n        display: grid;\n        grid-template-rows: repeat(auto-fit, 1fr);\n        gap: 20%;\n        width: 80%;\n        margin-top: 5%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 25%;\n    }\n}\n/* MOBILE SCREEN STYLE */\n@media screen and (max-width: 1435px) {\n    header {\n        width: 100%;\n        height: auto;\n        background: var(--wb-main-color);\n        display: flex;\n        justify-content: center;\n    }\n\n    .header-wave {\n        margin-top: -.6px;\n    }\n\n    .wb-title {\n        display: none;\n    }\n\n    nav {\n        position: absolute;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, 120px);  \n        gap: 5%;   \n        width: 100%;\n        height: 0;\n        background: var(--wb-main-color);\n        transition: .25s linear;\n        overflow: hidden;\n        overflow-y: scroll;\n    }\n\n    nav .nav-button {\n        color: white;\n        width: auto;\n        height: 120px;\n        font-size: 1.8rem;\n        display: flex;\n        gap: 5px;\n        justify-content: center;\n        align-items: center;\n        background: var(--wb-second-color);\n        border: 5px solid var(--wb-light-tone);\n        border-radius: 50px;\n        cursor: pointer;\n    }\n\n    .mobile-header {\n        display: block;\n        width: 100%;\n        justify-self: start;\n        font-family: "Noto Sans", sans-serif;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        padding: 15px 5px;\n        color: white;\n    }\n\n    .mobile-header span {\n        font-size: 3vw;\n        overflow: visible;\n        font-weight: bold;\n        justify-self: start;\n        text-decoration: underline wavy;\n        text-shadow: 3px 3px var(--wb-second-color);\n    }\n\n    #menu-slide {\n        background: none;\n        border: none;\n        width: 50px;\n        font-size: 1.8rem;\n        font-weight: bold;\n        color: white;\n        justify-self: end;\n        cursor: pointer;\n    }\n\n    #close-menu {\n        color: white;\n        width: 50px;\n        height: 50px;\n        font-size: 1.8rem;\n        font-weight: bold;\n        justify-self: end;\n        margin-top: 10px;\n        margin-right: 10px;\n        background: none;\n        border: none;\n        cursor: pointer;\n    }\n\n    #content { \n        display: grid;\n        grid-template-rows: repeat(auto-fit, 1fr);\n        gap: 25px;\n        width: 95%;\n        margin-top: 5%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n@media screen and (max-width: 1000px) {\n    footer {\n        gap: 80px;\n    }\n    .credits {\n        font-size: 1.8vh;\n    }\n}\n@media screen and (max-width: 600px) {\n    .mobile-header span {\n        font-size: 3vh;\n        margin-bottom: -.5px;\n        overflow: visible;\n        font-weight: bold;\n        justify-self: start;\n        text-decoration: underline wavy;\n    }\n\n    footer {\n        display: none;\n    }\n}\n@media screen and (max-height: 450px) {\n    footer {\n        display: none;\n    }\n}\n',""]);const s=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var m=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var u=a(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var d=o(n,a),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),a=t.n(o),i=t(659),r=t.n(i),s=t(56),d=t.n(s),c=t(540),l=t.n(c),p=t(113),m=t.n(p),f=t(713),u={};u.styleTagTransform=m(),u.setAttributes=d(),u.insert=r().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=l(),e()(f.A,u),f.A&&f.A.locals&&f.A.locals;var h=t(688),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=r().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals;const w=function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("div");e.classList.add("wb-introduction"),n.appendChild(e);const t=document.createElement("h3");e.appendChild(t),t.innerText="Welcome to Oceanic!";const o=document.createElement("span");return e.appendChild(o),o.innerText="Welcome to Oceanic, where the ocean's bounty meets culinary excellence. Dive into a world of tantalizing flavors and fresh seafood delights. From succulent shrimp to savory crab legs, experience the taste of the sea like never before. Come join us and embark on a culinary journey that celebrates the ocean's finest offerings.",n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("h3");n.appendChild(e),e.innerText="Hours";const t=document.createElement("div");t.classList.add("table-wrapper"),n.appendChild(t);const o=document.createElement("span");o.innerText="Monday - Friday: 6am - 10pm",t.appendChild(o);const a=document.createElement("span");a.innerText="Saturday: 8am - 10pm",t.appendChild(a);const i=document.createElement("span");return i.innerText="Sunday: 8am - 8pm",t.appendChild(i),n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("h3");e.innerText="Location",n.appendChild(e);const t=document.createElement("div");t.classList.add("wb-location"),n.appendChild(t);const o=document.createElement("span");return t.appendChild(o),o.innerText="123 Ocean View Drive, Coral Bay, Seaside Haven, USA",n}())};var b=t(528),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=r().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(b.A,v),b.A&&b.A.locals&&b.A.locals;var x=t(923),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=r().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=l(),e()(x.A,y),x.A&&x.A.locals&&x.A.locals;const E=function(){const n=document.getElementById("menu"),e=document.getElementById("menu-slide"),t=document.getElementById("close-menu");function o(){n.style.height="100%",document.body.style.overflow="hidden"}function a(){n.style.height="0%",document.body.style.overflowY="scroll",document.body.style.overflowX="hidden"}return e.addEventListener("click",o),t.addEventListener("click",a),{openMenu:o,closeMenu:a}}();!function(){const n=document.getElementById("content"),e=document.getElementById("home_btn"),t=document.getElementById("menu_btn"),o=document.getElementById("contact_btn");let a=!1;function i(){n.innerHTML="",E.closeMenu()}e.addEventListener("click",(()=>{a&&(i(),w(),a=!0)})),t.addEventListener("click",(()=>{a&&(i(),document.getElementById("content").appendChild(function(){const n=document.createElement("div");return n.classList.add("wb-menu"),n}()),a=!0)})),o.addEventListener("click",(()=>{a&&(i(),document.getElementById("content").appendChild(function(){const n=document.createElement("div");n.classList.add("wb-contact");const e=document.createElement("div");e.classList.add("contact-info"),n.appendChild(e);const t=document.createElement("h3");t.innerText="Contact Us",e.appendChild(t);const o=document.createElement("div");o.classList.add("contact-data"),e.appendChild(o);const a=document.createElement("div"),i=document.createElement("i"),r=document.createElement("span");a.classList.add("credits-link"),i.classList.add("fa-solid","fa-envelope"),a.appendChild(i),r.innerText="oceanicfood@gmail.com",a.appendChild(r),o.appendChild(a);const s=document.createElement("div"),d=document.createElement("i"),c=document.createElement("span");s.classList.add("credits-link"),d.classList.add("fa-brands","fa-instagram"),s.appendChild(d),c.innerText="oceanic.food",s.appendChild(c),o.appendChild(s);const l=document.createElement("div"),p=document.createElement("i"),m=document.createElement("span");l.classList.add("credits-link"),p.classList.add("fa-brands","fa-twitter"),l.appendChild(p),m.innerText="OceanicOfficial",l.appendChild(m),o.appendChild(l);const f=document.createElement("div");f.classList.add("contact-info"),n.appendChild(f);const u=document.createElement("h3");u.innerText="Type Your Email",f.appendChild(u);const h=document.createElement("div");h.classList.add("service-container"),f.appendChild(h);const g=document.createElement("span");g.innerText="We're Ready To Help You",h.appendChild(g);const w=document.createElement("input");return w.type="email",w.placeholder="Your Email",h.appendChild(w),n}()),a=!0)})),a||(w(),a=!0)}()})()})();