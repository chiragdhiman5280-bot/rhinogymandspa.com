import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Firebase Config */
const firebaseConfig = {
  apiKey: "AIzaSyCBMnPTT-NJ2mzQWd1iM5b_kojtNlxkxhg",
  authDomain: "rhino-gym-admin.firebaseapp.com",
  projectId: "rhino-gym-admin",
  storageBucket: "rhino-gym-admin.firebasestorage.app",
  messagingSenderId: "837079269901",
  appId: "1:837079269901:web:416a56da4bdd02a5160b44",
  measurementId: "G-K54DXWWJLK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* Elements */
const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enter-btn");

/* Live Sync */
onSnapshot(doc(db,"site","main"), (snap)=>{

if(snap.exists()){

const data = snap.data();
if(document.getElementById("member-count")){
document.getElementById("member-count").innerText =
data.memberCount || "100+";
}

/* Loader */
if(document.getElementById("loader-title")){
document.getElementById("loader-title").innerText =
data.loaderTitle || "RHINO GYM & SPA";
}

if(document.getElementById("loader-text")){
document.getElementById("loader-text").innerText =
data.loaderText || "Strength • Recovery • Power";
}

if(enterBtn){
enterBtn.innerText =
data.loaderButton || "ENTER THE POWER";
}

/* Website */
if(document.getElementById("offer-text")){
document.getElementById("offer-text").innerText =
data.offer || "Join this month for free trial";
}

if(document.getElementById("price-text")){
document.getElementById("price-text").innerText =
data.price || "₹999 / Month";
}

}

});

/* Loader Button */
if(enterBtn){
enterBtn.addEventListener("click", function(){

loader.style.opacity = "0";

setTimeout(function(){
loader.style.display = "none";
},700);

});
}
/* PREMIUM MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click", function(){

navLinks.classList.toggle("active");

/* Change icon */
if(navLinks.classList.contains("active")){
menuToggle.innerHTML = "&times;";
}else{
menuToggle.innerHTML = "&#9776;";
}

});

/* Close menu when link clicked */
document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", function(){

navLinks.classList.remove("active");
menuToggle.innerHTML = "&#9776;";

});

});

}
/* PREMIUM SCROLL NAVBAR */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(navbar){

if(window.scrollY > 40){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

}

});
/* ELITE NAVBAR HIDE / SHOW */

let lastScroll = 0;

window.addEventListener("scroll", function(){

const currentScroll = window.pageYOffset;

if(!navbar) return;

if(currentScroll <= 0){
navbar.classList.remove("hide-nav");
return;
}

if(currentScroll > lastScroll && currentScroll > 120){
/* scrolling down */
navbar.classList.add("hide-nav");
}else{
/* scrolling up */
navbar.classList.remove("hide-nav");
}

lastScroll = currentScroll;

});
/* ELITE LOADER */

/* ELITE LOADER FINAL */

document.body.classList.add("loading");

window.addEventListener("load", function(){

const loader = document.getElementById("loader");

if(loader){

setTimeout(function(){

loader.classList.add("loader-hide");
document.body.classList.remove("loading");

},2200);

}

});
/* WHY RHINO PREMIUM REVEAL */

const whyItems = document.querySelectorAll(
".why-card, .why-stat, .why-cta"
);

const whyObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const el = entry.target;

setTimeout(function(){
el.classList.add("show-why");
}, el.dataset.delay || 0);

}

});

},{
threshold:0.15
});

whyItems.forEach((item,index)=>{

item.dataset.delay = index * 120;
whyObserver.observe(item);

});
/* FLOATING WHATSAPP SMART HIDE */

const waBtn = document.querySelector(".whatsapp-float");

let lastScrollPos = 0;

window.addEventListener("scroll", function(){

if(!waBtn) return;

const currentPos = window.pageYOffset;

if(currentPos > lastScrollPos && currentPos > 180){
waBtn.style.transform = "translateY(120px)";
}else{
waBtn.style.transform = "translateY(0)";
}

lastScrollPos = currentPos;

});
/* AUTO HIDE WHATSAPP TOOLTIP */

window.addEventListener("load", function(){

const tip = document.querySelector(".wa-tip");

if(tip){

setTimeout(function(){

tip.style.opacity = "0";
tip.style.transform = "translateY(8px)";

setTimeout(function(){
tip.style.display = "none";
},400);

},5000);

}

});/* HIDE BADGE AFTER CLICK */

const waLink = document.querySelector(".whatsapp-float");
const waBadge = document.querySelector(".wa-badge");

if(waLink && waBadge){

waLink.addEventListener("click", function(){

waBadge.style.transform = "scale(0)";
waBadge.style.opacity = "0";

setTimeout(function(){
waBadge.style.display = "none";
},300);

});

}
/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){

const el = entry.target;
const target = +el.getAttribute("data-target");

let count = 0;
const speed = target / 80;

function update(){

count += speed;

if(count < target){
el.innerText = Math.floor(count);
requestAnimationFrame(update);
}else{
el.innerText = target;
}

}

update();
counterObserver.unobserve(el);

}

});

},{
threshold:0.4
});

counters.forEach(counter=>{
counterObserver.observe(counter);
});