import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
setDoc,
collection,
getDocs,
deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

/* Save Offer */
window.saveOffer = async function(){

const offer = document.getElementById("offer").value;

await setDoc(doc(db,"site","main"),{
offer:offer
},{merge:true});

showMsg("Offer Updated");
}

/* Save Price */
window.savePrice = async function(){

const price = document.getElementById("price").value;

await setDoc(doc(db,"site","main"),{
price:price
},{merge:true});

showMsg("Price Updated");
}

/* Save Loader */
window.saveLoader = async function(){

const loaderTitle = document.getElementById("loaderTitle").value;
const loaderText = document.getElementById("loaderText").value;
const loaderButton = document.getElementById("loaderButton").value;

await setDoc(doc(db,"site","main"),{
loaderTitle,
loaderText,
loaderButton
},{merge:true});

showMsg("Loader Updated");
}

function showMsg(text){
document.getElementById("msg").innerText = text;
}

window.logout = function(){
window.location.href = "admin.html";
}
window.saveMembers = async function(){

const memberCount = document.getElementById("memberCount").value;

await setDoc(doc(db,"site","main"),{
memberCount: memberCount
},{merge:true});

showMsg("Member Count Updated");
}
/* Load Leads */

async function loadLeads(){}

const leadsBox = document.getElementById("leads-list");

if(!leadsBox) return;

const querySnapshot = await getDocs(collection(db,"leads"));

let html = "";

querySnapshot.forEach((leadDoc) => {

const data = leadDoc.data();

html += `
<div class="lead-card">

<h3>${data.name || "Customer"}</h3>

<p>📞 ${data.phone || "-"}</p>

<p>✉️ ${data.email || "-"}</p>

<p>🏋️ Plan: ${data.plan || "-"}</p>

<div class="lead-actions">

<a href="tel:${data.phone || ""}" class="action-btn">
Call
</a>

<a href="https://wa.me/91${data.phone || ""}" target="_blank" class="action-btn gold-btn">
WhatsApp
</a>
<button class="action-btn" onclick="deleteLead('${leadDoc.id}')">
Delete
</button>

</div>

</div>
`;});