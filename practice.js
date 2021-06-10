
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCI8lv0IAFwJaRu-qKKc9jN7r12FdDdykk",
    authDomain: "puffin-rock.firebaseapp.com",
    databaseURL: "https://puffin-rock-default-rtdb.firebaseio.com",
    projectId: "puffin-rock",
    storageBucket: "puffin-rock.appspot.com",
    messagingSenderId: "880297288465",
    appId: "1:880297288465:web:56ac3ff67929dce96aa2b0",
    measurementId: "G-VBB0S33P5Y"
  };
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}