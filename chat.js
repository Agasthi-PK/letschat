// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDmtpuq8BJJwpJLcMngOg1nO_8YnUHcVoE",
    authDomain: "letschat-47020.firebaseapp.com",
    databaseURL: "https://letschat-47020-default-rtdb.firebaseio.com",
    projectId: "letschat-47020",
    storageBucket: "letschat-47020.appspot.com",
    messagingSenderId: "223967923685",
    appId: "1:223967923685:web:ddcbe4dfa927a1f784f30c"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



