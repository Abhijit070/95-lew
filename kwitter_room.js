
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0N9F_XE37uJb5PRxgz-Bi-qwKVTqRZlU",
      authDomain: "letschatwebapp-3fc0d.firebaseapp.com",
      projectId: "letschatwebapp-3fc0d",
      storageBucket: "letschatwebapp-3fc0d.appspot.com",
      messagingSenderId: "825328705344",
      appId: "1:825328705344:web:289f3b47cc13bf7cfae4a5",
      measurementId: "G-1FY3SKC6S2"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    Username = localStorage.getItem("Username",Username);
document.getElementById("Username").innerHTML = "Welcome "+Username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names)
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
