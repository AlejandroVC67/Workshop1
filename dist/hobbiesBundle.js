!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([function(e,t){},,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(0),s=(i.n(r),i(5)),n=i(6),a=i(7),o=i(8);const c=[];s.a.forEach(e=>{c.includes(e.category)||c.push(e.category)});o.a.get("https://api.myjson.com/bins/8g3o5",e=>{const t=new a.a(document.querySelector(".series"),e);new n.a(document.querySelector(".filter__list"),c,function(e){t.updateGrid(e)})})},function(e,t,i){"use strict";t.a=[{title:"Vikings",url:"http://www.entertainmentwallpaper.com/images/res1920x1200/movie/tv-vikings08.jpg",category:"History",year:"2013",description:"Vikins is inspired by the sagas of Viking Ragnar Lothbrok one of the best-known legendary norse heroes"},{title:"Punisher",url:"https://images3.alphacoders.com/865/thumb-1920-865776.jpg",category:"Action",year:"2017",description:"The serie revolves around Frank Castle who uses lethal methods to fight crime as the vigilante The Punisher"},{title:"Daredevil",url:"https://acollectivemind.files.wordpress.com/2015/04/20078539.jpg",category:"Action",year:"2013",description:"Charlie Corx stars as Matt Murdock/Daredevil, a blind lawyer by day who fights crime at night"},{title:"Sherlock",url:"http://schmoesknow.com/wp-content/uploads/2014/08/sher15.jpg",category:"Drama",year:"2010",description:"Sherlock is a crime drama television serie based on Sir Arthur Conan Doyle detective storie of Sherlock Holmes"},{title:"Community",url:"https://revista.tviso.com/wp-content/uploads/2015/05/community-saison-6.jpeg",category:"Comedy",year:"2009",description:"Program based on Dan Harmon own experiences attending a community college"},{title:"30 Rock",url:"https://images-na.ssl-images-amazon.com/images/I/81BPIaNV6UL._RI_.jpg",category:"Comedy",year:"2006",description:"Liz Lemos is head writter and showrunner of the NBC sketch comedy series TGS"},{title:"Black Mirror",url:"http://activacomunicacion.com.ar/wp-content/uploads/2017/11/bm.png",category:"Drama",year:"2011",description:"Black Mirror is British science fiction anthology television series created by Charlie Brooker, it examines modern society particularly with regard to the unanticiped consequences of new technologies"},{title:"Westworld",url:"https://hdwallsource.com/img/2016/1/westworld-logo-wallpaper-58704-60478-hd-wallpapers.jpg",category:"Drama",year:"2014",description:"Westworld is an American science fiction western thriller television series created by Jonathan Nolan and Lisa Joy for HBO"},{title:"The Addams Family",url:"https://s-i.huffpost.com/gen/1475552/images/o-ADDAMS-FAMILY-JOHN-ASTIN-facebook.jpg",category:"Comedy",year:"1964",description:"The addams family is an American television series based on the characters in Charles Addams New Yorker cartoons"}]},function(e,t,i){"use strict";class r{constructor(e,t,i){this.node=e,this.data=t,this.onChange=i,this.elements={},this.currentFilter="All",this.createCategories(this.node),this.elements.categories=this.node.querySelectorAll(".filter__list__element"),this.setCategoriesAction(this.elements.categories)}static get contentStructure(){return{dots:'<li class="dots"><button class="filter__list__element" data-category="{cat}">{cat}</button></li>'}}createCategories(e){const t=this.data.map(e=>r.contentStructure.dots.replace("{cat}",e).replace("{cat}",e));e.innerHTML+=t.join("")}setCategoriesAction(e){e.forEach(e=>{e.addEventListener("click",this.getClickedElement.bind(this))})}getClickedElement(e){e.currentTarget!==this.currentFilter&&(this.node.querySelector(".filter__list__element--selected").classList.remove("filter__list__element--selected"),e.currentTarget.classList.add("filter__list__element--selected"),this.currentFilter=e.currentTarget.dataset.category,this.onChange(this.currentFilter))}}t.a=r},function(e,t,i){"use strict";class r{constructor(e,t){this.node=e,this.data=t,this.elements={},this.elements.spot=this.node.querySelector(".grid"),this.createGridElement(this.elements.spot),this.elements.gridElements=this.node.querySelectorAll(".grid__element"),this.showAllCategories(this.elements.gridElements,"All"),this.elements.series=this.node.querySelectorAll(".serie"),this.elements.serieInformation=this.node.querySelectorAll(".serie__information-container"),this.elements.currentSerie=null,this.setGridAction()}static get contentStructure(){return{gridElement:'<div class="grid__element" data-category="{cat}">\n                          <div class="serie">\n                            <figure class="serie__front">\n                              <img class="serie__image" src="{src}" alt=""/>\n                              <div class="serie__information-container">\n                                <p class="serie__information">"{title}"</p>\n                              </div>\n                            </figure>\n                            <figure class="serie__back">\n                              <p class="serie__information">Description: {content}</p>\n                              <p class="serie__information">Year: {year}</p>                            \n                            </figure>\n                          </div>\n                        </div>'}}static get states(){return{serieFlipped:"serie--flipped",gridElementActive:"grid__element--active"}}createGridElement(e){const t=this.data.map(e=>r.contentStructure.gridElement.replace("{src}",e.url).replace("{title}",e.title).replace("{cat}",e.category).replace("{content}",e.description).replace("{year}",e.year));e.innerHTML=t.join("")}updateGrid(e){"All"===e?this.showAllCategories(this.elements.gridElements):this.showSpecificCategory(e,this.elements.gridElements)}showAllCategories(e){e.forEach(function(e){e.classList.add(r.states.gridElementActive)})}showSpecificCategory(e,t){t.forEach(t=>{t.dataset.category!==e?t.classList.remove(r.states.gridElementActive):t.classList.add(r.states.gridElementActive)})}setGridAction(){this.elements.gridElements.forEach(e=>{e.addEventListener("click",this.flipCard.bind(this))})}flipCard(e){const t=e.currentTarget;null===this.elements.currentSerie&&(this.elements.currentSerie=t),t===this.elements.currentSerie?this.elements.currentSerie.children[0].classList.toggle(r.states.serieFlipped):(this.elements.currentSerie.children[0].classList.remove(r.states.serieFlipped),this.elements.currentSerie=t,this.elements.currentSerie.children[0].classList.add(r.states.serieFlipped))}}t.a=r},function(e,t,i){"use strict";t.a=class{static get(e,t){fetch(e).then(e=>e.json()).then(t)}}}]);