import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
 
import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 

const firebaseConfig = {
   apiKey: "AIzaSyCFecsKbFrMTMCF6q0njqzFDyDUvMMi6Ck",
   authDomain: "orionis-student-portal.firebaseapp.com", 
   projectId: "orionis-student-portal",
   storageBucket: "orionis-student-portal.appspot.com",
   messagingSenderId: "863047271186",
   appId: "1:863047271186:web:4631bbbe7c031c494329cb",
   measurementId: "G-YK4895XK24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
var user;




const db = getFirestore(app);


const firstName = document.getElementById("user_firstname");
const middleName = document.getElementById("user_middlename");
const lastName = document.getElementById("user_lastname");
const dob = document.getElementById("user_dob");
const gender = document.getElementById("gender");
const rollNumber = document.getElementById("user_longrollnumber");
const faculty = document.getElementById("user_faculty");
const email = document.getElementById("user_Email");
const joinedYear = document.getElementById("user_joinedyear");
const studentPhoneNumber = document.getElementById("user_phonenumber");
const guardianPhoneNumber = document.getElementById("user_Guardiancenumber");  
const submit_button = document.getElementById("submit_details");



submit_button.onclick = async function() {
    await setDoc(doc(db, "students_101", email.value+''), {
        first_name: firstName.value+'',
        middle_name: middleName.value+'',
        last_name: lastName.value+'',
        dob: dob.value+'',
        roll_number: rollNumber.value+'',
        gender: gender.value+'',
        faculty: faculty.value+'',
        email: email.value+'',
        joined_year: joinedYear.value+'',
        student_phone_number: studentPhoneNumber.value+'',
        guardian_phone_number: guardianPhoneNumber.value+'',
    });




}

