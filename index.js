!function(){"use strict";window.addEventListener("scroll",(function(){for(var e=document.querySelectorAll(".reveal"),t=0;t<e.length;t++){var o=window.innerHeight,n=e[t].getBoundingClientRect().top;n<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}));document.querySelector(".menu-button").addEventListener("click",(()=>{document.body.classList.toggle("stop-scrolling"),document.querySelector(".nav-items").classList.toggle("ham-items"),document.querySelector(".menu-button").classList.toggle("bar-one"),document.querySelector(".menu-button").classList.toggle("bar-two"),document.querySelector(".menu-button").classList.toggle("bar-three")}));const e=document.querySelector(".selected"),t=document.querySelector(".options"),o=document.querySelectorAll(".option");e.addEventListener("click",(()=>{t.classList.toggle("active")})),o.forEach((o=>{o.addEventListener("click",(()=>{e.innerHTML=o.querySelector("label").innerHTML,t.classList.remove("active")}))}));let n=document.querySelector(".futr-proprty"),r=document.querySelector(".more-properties");n.addEventListener("click",(()=>{r.classList.toggle("more-properties"),"All Properties"===n.innerHTML?n.innerHTML="Show Less":n.innerHTML="All Properties"}));const s=document.querySelector(".fa-circle-play"),c=document.querySelector(".deal-video"),l=document.getElementById("video");s.addEventListener("click",(()=>{document.body.classList.add("stop-scrolling"),c.classList.add("popup-video"),l.play()}));document.querySelector(".close").addEventListener("click",(()=>{document.body.classList.remove("stop-scrolling"),c.classList.remove("popup-video"),l.pause()}));new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{760:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",(function(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const o=e.target;console.log("lazy loading ",o),o.src=o.dataset.src,o.classList.remove("lzy"),t.unobserve(o)}}))}));document.querySelectorAll(".lazy").forEach((t=>{e.observe(t)}))}));const i=document.getElementById("review-slider"),d=i.getElementsByClassName("review");window.next=()=>{i.append(d[0])},window.prev=()=>{i.prepend(d[d.length-1])}}();