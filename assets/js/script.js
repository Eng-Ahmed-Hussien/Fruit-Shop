const elemRemoveFunc=(e,t)=>e.classList.remove(t),elemAddFunc=(e,t)=>e.classList.add(t),_set=(e,t)=>localStorage.setItem(e,t),_get=e=>localStorage.getItem(e),elemToggleFunc=function(e){e.classList.toggle("active")},header=document.querySelector("[data-header]"),goTopBtn=document.querySelector("[data-go-top]"),navToggleBtn=document.querySelector("[data-nav-toggle-btn]"),navbar=document.querySelector("[data-navbar]"),themeToggleBtn=document.querySelector("[data-theme-btn]"),leftBtn=document.getElementById("left"),rightBtn=document.getElementById("right"),imgs=document.querySelectorAll("#imgs .img"),floatCards=document.querySelector(".float__cards"),floatSocial=document.querySelector(".float__social"),x=document.querySelectorAll(".navbar-link");var idx=0,interval=setInterval(run,2e3),decrementBtns=document.querySelectorAll(".card-content #decrementBtn"),incrementBtns=document.querySelectorAll(".card-content #incrementBtn");function run(){idx++,changeImage()}function changeImage(){idx>imgs.length-1?idx=0:idx<0?idx=imgs.length-1:setActiveImg(idx)}function resetInterval(){clearInterval(interval),interval=setInterval(run,2e3)}function setActiveImg(e){imgs.forEach((e=>e.classList.remove("active"))),imgs[e].classList.add("active")}"light_theme"===_get("theme")?(elemAddFunc(themeToggleBtn,"active"),elemRemoveFunc(document.body,"dark_theme"),elemAddFunc(document.body,"light_theme"),elemAddFunc(floatSocial,"active"),AOS.init()):(elemRemoveFunc(themeToggleBtn,"active"),elemRemoveFunc(document.body,"light_theme"),elemRemoveFunc(floatSocial,"active"),elemAddFunc(document.body,"dark_theme"),AOS.init()),AOS.init(),window.addEventListener("load",AOS.init),window.addEventListener("scroll",(function(){window.scrollY>=10?(header.classList.add("active"),goTopBtn.classList.add("active"),floatCards.classList.add("active"),AOS.init()):(header.classList.remove("active"),goTopBtn.classList.remove("active"),floatCards.classList.remove("active"),AOS.init())})),navToggleBtn.addEventListener("click",(function(){elemToggleFunc(navToggleBtn),elemToggleFunc(navbar),AOS.init()})),themeToggleBtn.addEventListener("click",(function(){elemToggleFunc(themeToggleBtn),themeToggleBtn.classList.contains("active")?(document.body.classList.remove("dark_theme"),document.body.classList.add("light_theme"),floatSocial.classList.add("active"),_set("theme","light_theme")):(document.body.classList.add("dark_theme"),document.body.classList.remove("light_theme"),floatSocial.classList.remove("active"),_set("theme","dark_theme")),AOS.init()})),incrementBtns.forEach((function(e){e.addEventListener("click",(function(){var e=this.previousElementSibling,t=parseInt(e.innerText)+1;e.innerText=t}))})),decrementBtns.forEach((function(e){e.addEventListener("click",(function(){var e=this.nextElementSibling,t=parseInt(e.innerText)-1;t=t<0?0:t,e.innerText=t}))})),rightBtn.addEventListener("click",(()=>{idx++,changeImage(),resetInterval(),setActiveImg(idx)})),leftBtn.addEventListener("click",(()=>{idx--,changeImage(),resetInterval(),setActiveImg(idx)})),x.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".navbar").classList.remove("active"),navToggleBtn.classList.remove("active"),AOS.init()}))}));
