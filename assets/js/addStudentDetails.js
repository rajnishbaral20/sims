import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
 
import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
 import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js"

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

    


    console.log("I inside button");
    // uploadImage();

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

// async function uploadImage() {
//     const storage = getStorage();
    
//     const file = document.querySelector("#img").files[0];
//     const name = +new Date() + "-" + file.name;
//     const metadata = {
//        contentType: file.type
//     };
//     const storageRef = ref(storage, name);
//     put(storageRef, file, metadata).then((snapshot)=>{
//         console.log(snapshot.storageRef.getDownloadURL()+"");
//         console.log("Success")
//     })
    
//  }


