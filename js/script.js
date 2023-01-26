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


// TO SEND MESSAGES
const sendMsg = function sendMsg() {
   var msg = msgTxt.value;
   var timestamp = new Date().getTime();
   set(ref(db, "messages/" + timestamp), {
      msg: msg,
      sender: sender
   });

   msgTxt.value = "";
};

document.getElementById("msgBtn").addEventListener("click", sendMsg);

// TO RECEIVE MSG
onChildAdded(ref(db, "messages"), (data) => {
   if (data.val().sender == sender) {
      messages.innerHTML += "<div style=justify-content:end class=outer id=" + data.key + "><div id=inner class=me>you : " + data.val().msg + "<button id=dltMsg onclick=module.dltMsg(" + data.key + ")>DELETE</button></div></div>";
   } else {
      messages.innerHTML += "<div class=outer id=" + data.key + "><div id=inner class=notMe>" + data.val().sender + " : " + data.val().msg + "</div></div>";
   }
});


















