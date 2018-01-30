!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),a=(s.n(n),s(2)),i=s(3);new a.a(document.querySelector(".gallery"),i.a)},function(e,t,s){"use strict";class n{constructor(e,t){this.data=t,this.cont=0,this.instance=e,this.elements={},this.elements.imgContainer=this.instance.querySelector(".gallery__image-container"),this.createImages(this.elements.imgContainer),this.elements.dots=this.instance.querySelector(".gallery__dots-list"),this.createDots(this.elements.dots),this.elements.arrows=this.instance.querySelectorAll(".gallery__arrows-container-element"),this.elements.navegators=this.instance.querySelectorAll("[data-use]"),this.controlArrows(this.elements.imgs,this.elements.arrows),this.setGalleryMovement(this.elements.navegators)}static get contentStructure(){return{dot:' <li class="gallery__dots"> <button data-use=\'navegation\' class="gallery__dots__button"></button> </li>',imgs:'<li class="gallery__image-container__item"><img class="gallery__image" alt="a image of nature" src="{src}"/></li>'}}static get elementState(){return{dotSelected:"gallery__dots--selected",imageEnable:"gallery__image--enable",arrowEnable:"gallery__arrows-container-element--enable"}}createImages(e){let t=this.data.map(e=>n.contentStructure.imgs.replace("{src}",e.url));e.innerHTML=t.join(""),this.elements.imgs=this.instance.querySelectorAll(".gallery__image"),this.elements.imgs[0].classList.add(n.elementState.imageEnable)}createDots(e){let t=this.data.map(e=>n.contentStructure.dot);e.innerHTML=t.join(""),this.elements.dotBtn=this.instance.querySelectorAll(".gallery__dots__button"),this.elements.dotBtn[0].classList.add(n.elementState.dotSelected)}controlArrows(e,t){this.cont>=0&&this.cont<e.length-1?t[1].classList.add(n.elementState.arrowEnable):t[1].classList.remove(n.elementState.arrowEnable),this.cont>0&&this.cont<=e.length-1?t[0].classList.add(n.elementState.arrowEnable):t[0].classList.remove(n.elementState.arrowEnable)}setGalleryMovement(e){this.instance.addEventListener("keydown",this.changeImages.bind(this));for(let t=0;t<e.length;t++)e[t].addEventListener("click",this.changeImages.bind(this))}changeImages(e){const t=this.cont<this.elements.imgs.length-1,s=this.cont>=0,n=e.currentTarget,a=e.key;if(console.log(a),n.focus(),n.classList.contains("gallery__arrows-container--left"))this.cont<=this.elements.imgs.length-1&&this.cont>0&&this.revealPreviousImage(this.cont);else if(n.classList.contains("gallery__arrows-container--right"))s&&t&&this.revealNextImage(this.cont);else if(n.classList.contains("gallery__dots__button")){const e=Array.from(this.elements.dotBtn).indexOf(n);this.revealSpecificImage(e)}else"ArrowLeft"===a?this.revealPreviousImage(this.cont):"ArrowRight"===a&&this.revealNextImage(this.cont)}revealPreviousImage(e){this.updateDotState("previous",e),this.elements.imgs[e].classList.remove(n.elementState.imageEnable),this.elements.imgs[--e].classList.add(n.elementState.imageEnable),this.cont--,this.controlArrows(this.elements.imgs,this.elements.arrows)}revealNextImage(e){this.updateDotState("next",e),this.elements.imgs[e].classList.remove(n.elementState.imageEnable),this.elements.imgs[++e].classList.add(n.elementState.imageEnable),this.cont++,this.controlArrows(this.elements.imgs,this.elements.arrows)}revealSpecificImage(e){this.updateDotState("specific",e),this.elements.imgs[this.cont].classList.remove(n.elementState.imageEnable),this.elements.imgs[e].classList.add(n.elementState.imageEnable),this.cont=e,this.controlArrows(this.elements.imgs,this.elements.arrows)}updateDotState(e,t){"next"===e?(this.elements.dotBtn[t].classList.remove(n.elementState.dotSelected),this.elements.dotBtn[++t].classList.add(n.elementState.dotSelected)):"previous"===e?(this.elements.dotBtn[t].classList.remove(n.elementState.dotSelected),this.elements.dotBtn[--t].classList.add(n.elementState.dotSelected)):"specific"===e&&(this.elements.dotBtn[this.cont].classList.remove(n.elementState.dotSelected),this.elements.dotBtn[t].classList.add(n.elementState.dotSelected))}}t.a=n},function(e,t,s){"use strict";t.a=[{url:"https://www.xerox.es/oficina/business-resources/1024x1024_wallpaper_nature5.jpg"},{url:"https://ilikethesepixels.com/wp-content/uploads/2015/10/Posledn-svtlo-1024x1024.jpg"},{url:"https://wallpaperscraft.com/image/switzerland_alps_mountains_night_beautiful_landscape_99817_1024x1024.jpg"}]}]);