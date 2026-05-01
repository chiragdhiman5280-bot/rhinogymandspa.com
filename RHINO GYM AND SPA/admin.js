import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* Your Firebase Config */
const firebaseConfig = {
  apiKey: "AIzaSyCBMnPTT-NJ2mzQWd1iM5b_kojtNlxkxhg",
  authDomain: "rhino-gym-admin.firebaseapp.com",
  projectId: "rhino-gym-admin",
  storageBucket: "rhino-gym-admin.firebasestorage.app",
  messagingSenderId: "837079269901",
  appId: "1:837079269901:web:416a56da4bdd02a5160b44",
  measurementId: "G-K54DXWWJLK"
}

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Elements */
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

/* Login */
loginBtn.addEventListener("click", async function(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  msg.innerText = "Checking...";

  try{

    await signInWithEmailAndPassword(auth, email, password);

localStorage.setItem("adminLoggedIn","true");

msg.style.color = "lightgreen";
msg.innerText = "Login Successful";

setTimeout(function(){
  window.location.href = "dashboard.html";
},1000);

  }catch(error){

  msg.style.color = "red";
  msg.innerText = error.message;
  console.log(error);

}

});