/*! For license information please see index.js.LICENSE.txt */
(function(){"use strict";var __webpack_modules__={"./src/sass/main.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://casaroyal/./src/sass/main.scss?")},"./src/js/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");\n\r\n\r\n//on scroll Animation\r\nwindow.addEventListener("scroll", reveal);\r\nfunction reveal() {\r\n  var reveals = document.querySelectorAll(".reveal");\r\n  for (var i = 0; i < reveals.length; i++) {\r\n    var windowheight = window.innerHeight;\r\n    var revealtop = reveals[i].getBoundingClientRect().top;\r\n    var revealpoint = 150;\r\n\r\n    if (revealtop < windowheight - revealpoint) {\r\n      reveals[i].classList.add("active");\r\n    } else {\r\n      reveals[i].classList.remove("active");\r\n    }\r\n  }\r\n}\r\n// Mobile Menu button\r\nconst hamBurger = document.querySelector(".menu-button");\r\nhamBurger.addEventListener("click", () => {\r\n  document.body.classList.toggle("stop-scrolling");\r\n  document.querySelector(".nav-items").classList.toggle("ham-items");\r\n  document.querySelector(".menu-button").classList.toggle("bar-one");\r\n  document.querySelector(".menu-button").classList.toggle("bar-two");\r\n  document.querySelector(".menu-button").classList.toggle("bar-three");\r\n});\r\n\r\n// Hero Form dropdown\r\nconst selected = document.querySelector(".selected");\r\nconst options = document.querySelector(".options");\r\nconst option = document.querySelectorAll(".option");\r\n\r\nselected.addEventListener("click", () => {\r\n  options.classList.toggle("active");\r\n});\r\n\r\noption.forEach((o) => {\r\n  o.addEventListener("click", () => {\r\n    selected.innerHTML = o.querySelector("label").innerHTML;\r\n    options.classList.remove("active");\r\n  });\r\n});\r\n\r\n//Featured property **ALL PROPPERTIES** button\r\nlet allPropertyBtn = document.querySelector(".futr-proprty");\r\nlet moreProperty = document.querySelector(".more-properties");\r\nallPropertyBtn.addEventListener("click", () => {\r\n  moreProperty.classList.toggle("more-properties");\r\n  if (allPropertyBtn.innerHTML === "All Properties") {\r\n    allPropertyBtn.innerHTML = "Show Less";\r\n  } else {\r\n    allPropertyBtn.innerHTML = "All Properties";\r\n  }\r\n});\r\n\r\n//Play video on click\r\nconst play = document.querySelector(".fa-circle-play");\r\nconst dealVideo = document.querySelector(".deal-video");\r\nconst autoPlay = document.getElementById("video");\r\nplay.addEventListener("click", () => {\r\n  document.body.classList.add("stop-scrolling");\r\n  dealVideo.classList.add("popup-video");\r\n  autoPlay.play();\r\n});\r\nconst closeVideo = document.querySelector(".close");\r\ncloseVideo.addEventListener("click", () => {\r\n  document.body.classList.remove("stop-scrolling");\r\n  dealVideo.classList.remove("popup-video");\r\n  autoPlay.pause();\r\n});\r\n\r\n//swiper slider\r\nvar swiper = new Swiper(".mySwiper", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 30,\r\n  freeMode: true,\r\n  pagination: {\r\n    el: ".swiper-pagination",\r\n    clickable: true,\r\n  },\r\n  breakpoints: {\r\n    760: {\r\n      slidesPerView: 3,\r\n    },\r\n  },\r\n});\r\n\r\n// images lazy loading\r\ndocument.addEventListener("DOMContentLoaded", function () {\r\n  const imageObserver = new IntersectionObserver((entries, imgObserver) => {\r\n    entries.forEach((entry) => {\r\n      if (entry.isIntersecting) {\r\n        const lazyImage = entry.target;\r\n        console.log("lazy loading ", lazyImage);\r\n        lazyImage.src = lazyImage.dataset.src;\r\n        lazyImage.classList.remove("lzy");\r\n        imgObserver.unobserve(lazyImage);\r\n      }\r\n    });\r\n  });\r\n  const arr = document.querySelectorAll(".lazy");\r\n  arr.forEach((v) => {\r\n    imageObserver.observe(v);\r\n  });\r\n});\r\n\r\n// const images = document.querySelectorAll(".img");\r\n// const imageOptions = {};\r\n// const observer = new IntersectionObserver((entries, observer) => {\r\n//   entries.forEach((entry) => {\r\n//     if (!entry.isIntersecting) return;\r\n\r\n//     const image = entry.target;\r\n//     const newURL = image.getAttribute(\'data-src\');\r\n//     image.src = newURL;\r\n//     observer.unobserve(image);\r\n//   });\r\n// }, imageOptions);\r\n\r\n// images.forEach((image) => {\r\n//   observer.observe(image);\r\n// });\r\n\r\n///reviews slider\r\nconst reviewSlider = document.getElementById("review-slider");\r\nconst review = reviewSlider.getElementsByClassName("review");\r\n\r\nwindow.next = () => {\r\n  reviewSlider.append(review[0]);\r\n};\r\nwindow.prev = () => {\r\n  reviewSlider.prepend(review[review.length - 1]);\r\n};\r\n\n\n//# sourceURL=webpack://casaroyal/./src/js/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/index.js")})();