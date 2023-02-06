import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
 
import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
 

const firebaseConfig = {
    apiKey: "AIzaSyDXrBmgXTnWo6lXGCt3hJK8iJGwEo8wPvM",
    authDomain: "orionis-sims.firebaseapp.com",
    projectId: "orionis-sims",
    storageBucket: "orionis-sims.appspot.com",
    messagingSenderId: "882323720140",
    appId: "1:882323720140:web:df65669d96cba22b04bf69",
    measurementId: "G-ML48HVF5XB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
var user;




const db = getFirestore();

const userEmail = document.getElementById("user_email");
const userPassword = document.getElementById("user_password");
const submit_button = document.getElementById("submit_button");

submit_button.onclick = async function() {
    
    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
.then((userCredential) => {
    // Signed in 
 user = userCredential.user;

 alert("Success: "+user.displayName);

})
.catch((error) => {
    const errorCode = error.code;
    alert("error");
    const errorMessage = error.message;
});
}
