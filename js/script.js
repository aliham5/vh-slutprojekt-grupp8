import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, remove, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


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


// variabler
const msgTxt = document.getElementById('msgTxt');
let sender;
if (sessionStorage.getItem('sender')) {
   sender = sessionStorage.getItem('sender');
} else {
   sender = prompt('Please enter your name');
   sessionStorage.setItem('sender', sender);
}


// funktion ? eventlistener för att kunna skicka meddelanden
const sendMsg = function sendMsg() {
   var msg = msgTxt.value;
   var timestamp = new Date().getTime();
   set(ref(db, "messages/" + timestamp), {

      msg: msg,
      sender: sender
   });


   msgTxt.value = "";
}




document.getElementById("msgBtn").addEventListener("click", sendMsg);


// Funktion för att ta enot meddelanden
onChildAdded(ref(db, "messages"), (data) => {
   if (data.val().sender == sender) {

      messages.innerHTML += "<div style=justify-content:end class=outer id=" + data.key + "><div id=inner class=me>you : " + data.val().msg + "</div></div>";
 upstream/main
   } else {
       messages.innerHTML += "<div class=outer id=" + data.key + "><div id=inner class=notMe>" + data.val().sender + " : " + data.val().msg + "</div></div>";
   }








});

