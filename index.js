/*! For license information please see index.js.LICENSE.txt */
(function(){"use strict";var __webpack_modules__={"./src/sass/main.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://casaroyal/./src/sass/main.scss?")},"./src/js/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");\n\r\n\r\n//on scroll Animation\r\nwindow.addEventListener("scroll", reveal);\r\nfunction reveal() {\r\n  var reveals = document.querySelectorAll(".reveal");\r\n  for (var i = 0; i < reveals.length; i++) {\r\n    var windowheight = window.innerHeight;\r\n    var revealtop = reveals[i].getBoundingClientRect().top;\r\n    var revealpoint = 50;\r\n\r\n    if (revealtop < windowheight - revealpoint) {\r\n      reveals[i].classList.add("active");\r\n    } else {\r\n      reveals[i].classList.remove("active");\r\n    }\r\n  }\r\n}\r\n\r\n// Mobile Menu button\r\nconst hamBurger = document.querySelector(".menu-button");\r\nhamBurger.addEventListener("click", () => {\r\n  document.body.classList.toggle("stop-scrolling");\r\n  document.querySelector(".nav-items").classList.toggle("ham-items");\r\n  document.querySelector(".menu-button").classList.toggle("bar-one");\r\n  document.querySelector(".menu-button").classList.toggle("bar-two");\r\n  document.querySelector(".menu-button").classList.toggle("bar-three");\r\n});\r\n// search on page\r\nlet sections = document.querySelectorAll(".box");\r\n\r\nconst liveSearch = () => {\r\n  let search_query = document.getElementById("searchbox").value;\r\n  console.log(search_query);\r\n\r\n  for (var i = 0; i < sections.length; i++) {\r\n    if (\r\n      sections[i].textContent.toLowerCase().includes(search_query.toLowerCase())\r\n    ) {\r\n      sections[i].classList.remove("is-hidden");\r\n    } else {\r\n      sections[i].classList.add("is-hidden");\r\n    }\r\n  }\r\n}\r\nlet searchInput = document.getElementById("searchbox");\r\nsearchInput.addEventListener("keyup", liveSearch);\r\n\r\n// Form dropdown\r\nconst selectedAll = document.querySelectorAll(".selected");\r\nselectedAll.forEach((selected) => {\r\n  const options = selected.nextElementSibling;\r\n  const option = options.querySelectorAll(".option");\r\n\r\n  selected.addEventListener("click", () => {\r\n    // options.classList.toggle("active");\r\n    if (options.classList.contains("active")) {\r\n      options.classList.remove("active");\r\n    } else {\r\n      let currentActive = document.querySelector(".options.active");\r\n      if (currentActive) {\r\n        currentActive.classList.remove("active");\r\n      }\r\n      options.classList.add("active");\r\n    }\r\n  });\r\n\r\n  option.forEach((o) => {\r\n    o.addEventListener("click", () => {\r\n      selected.innerHTML = o.querySelector("label").innerHTML;\r\n      options.classList.remove("active");\r\n    });\r\n  });\r\n});\r\n\r\n//Form loading\r\nvar button = document.querySelector(".blue-btn");\r\nbutton.addEventListener("click", () => {\r\n  button.classList.add("is-loading");\r\n  setTimeout(removeClass, 1000);\r\n});\r\nconst removeClass = () => {\r\n  button.classList.remove("is-loading");\r\n};\r\n\r\n\r\n//sending form data to json\r\nconst form = document.getElementById("form");\r\nform.addEventListener("submit", (event) => {\r\n  event.preventDefault();\r\n  const data = new FormData(form);\r\n  console.log([...data]);\r\n\r\n  fetch("https://reqres.in/api/users", {\r\n    method: "POST",\r\n    body: data,\r\n  });\r\n  form.reset();\r\n});\r\n\r\n//Featured property **ALL PROPPERTIES** button\r\nlet allPropertyBtn = document.querySelector(".futr-proprty");\r\nlet moreProperty = document.querySelector(".more-properties");\r\nallPropertyBtn.addEventListener("click", () => {\r\n  moreProperty.classList.toggle("more-properties");\r\n  if (allPropertyBtn.innerHTML === "All Properties") {\r\n    allPropertyBtn.innerHTML = "Show Less";\r\n  } else {\r\n    allPropertyBtn.innerHTML = "All Properties";\r\n  }\r\n});\r\n\r\n//Play video on click\r\nconst play = document.querySelector(".fa-circle-play");\r\nconst dealVideo = document.querySelector(".deal-video");\r\nconst autoPlay = document.getElementById("video");\r\nplay.addEventListener("click", () => {\r\n  document.body.classList.add("popup-open");\r\n  dealVideo.classList.add("popup-video");\r\n  autoPlay.play();\r\n});\r\nconst closeVideo = document.querySelector(".close");\r\ncloseVideo.addEventListener("click", () => {\r\n  document.body.classList.remove("popup-open");\r\n  dealVideo.classList.remove("popup-video");\r\n  autoPlay.pause();\r\n});\r\n\r\n//remind user to play video\r\n// const remind = document.querySelector(".remind-user");\r\n// setInterval(show, 2000);\r\n// function show() {\r\n//   remind.classList.toggle("remind");\r\n// }\r\n\r\n// images lazy loading\r\ndocument.addEventListener("DOMContentLoaded", function () {\r\n  const imageObserver = new IntersectionObserver((entries, imgObserver) => {\r\n    entries.forEach((entry) => {\r\n      if (entry.isIntersecting) {\r\n        const lazyImage = entry.target;\r\n        console.log("lazy loading ", lazyImage);\r\n        lazyImage.src = lazyImage.dataset.src;\r\n        lazyImage.classList.remove("lazy");\r\n        imgObserver.unobserve(lazyImage);\r\n      }\r\n    });\r\n  });\r\n  const arr = document.querySelectorAll(".lazy");\r\n  arr.forEach((v) => {\r\n    imageObserver.observe(v);\r\n  });\r\n});\r\n\r\n//hot-deals video intersection\r\nlet options = {\r\n  root: null,\r\n  rootMargin: "0px",\r\n  threshold: 1.0,\r\n};\r\nlet callback = (entries, observer) => {\r\n  entries.forEach((entry) => {\r\n    if (entry.target.id == "dealVideo") {\r\n      if (entry.isIntersecting) {\r\n        entry.target.play();\r\n      } else {\r\n        entry.target.pause();\r\n      }\r\n    }\r\n  });\r\n};\r\nlet observer = new IntersectionObserver(callback, options);\r\nobserver.observe(document.querySelector("#dealVideo"));\r\n\r\n///reviews slider\r\nconst reviewSlider = document.getElementById("review-slider");\r\nconst review = reviewSlider.getElementsByClassName("review");\r\n\r\nwindow.next = () => {\r\n  reviewSlider.append(review[0]);\r\n};\r\nwindow.prev = () => {\r\n  reviewSlider.prepend(review[review.length - 1]);\r\n};\r\n\r\n//swiper slider\r\nvar swiper = new Swiper(".mySwiper", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 30,\r\n  freeMode: true,\r\n  pagination: {\r\n    el: ".swiper-pagination",\r\n    clickable: true,\r\n  },\r\n  breakpoints: {\r\n    760: {\r\n      slidesPerView: 3,\r\n    },\r\n  },\r\n});\r\n\r\n// json fetch articles section\r\nfetch("db.json")\r\n  .then(function (response) {\r\n    return response.json();\r\n  })\r\n  .then(function (data) {\r\n    appendData(data);\r\n  })\r\n  .catch(function (err) {\r\n    console.log("error: " + err);\r\n  });\r\nfunction appendData(data) {\r\n  var category = document.querySelectorAll(".category");\r\n  var title = document.querySelectorAll(".card-title");\r\n  var date = document.querySelectorAll(".article__date");\r\n  var image = document.querySelectorAll(".test");\r\n\r\n  for (var i = 0; i < data.length; i++) {\r\n    image[i].innerHTML = data[i].image;\r\n\r\n    category[i].innerHTML = data[i].category;\r\n    console.log(data[i].category);\r\n\r\n    title[i].innerHTML = data[i].title;\r\n    console.log(data[i].title);\r\n\r\n    date[i].innerHTML = data[i].date;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://casaroyal/./src/js/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/index.js")})();