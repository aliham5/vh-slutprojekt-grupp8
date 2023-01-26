import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onChildAdded, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const firebaseConfig = {
   apiKey: "AIzaSyAfrDdHGJHPYrtdujZxwCi68eaAeRDajxI",
   authDomain: "chat-d56a3.firebaseapp.com",
   projectId: "chat-d56a3",
   storageBucket: "chat-d56a3.appspot.com",
   messagingSenderId: "253984871721",
   appId: "1:253984871721:web:4560475db8498f9e7bd338",
   measurementId: "G-8WTXPLYEGV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// variables
var msgTxt = document.getElementById('msgTxt');
var sender;
if (sessionStorage.getItem('sender')) {
   sender = sessionStorage.getItem('sender');
} else {
   sender = prompt('PLEASE ENTER YOUR NAME');
   sessionStorage.setItem('sender', sender);
};



















