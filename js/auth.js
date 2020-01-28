
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyAL3euaShvP0Y14f4HOZKCgBxW_aMwncUc",
    authDomain: "medicalassistant2-8767a.firebaseapp.com",
    databaseURL: "https://medicalassistant2-8767a.firebaseio.com",
    projectId: "medicalassistant2-8767a",
    storageBucket: "medicalassistant2-8767a.appspot.com",
    messagingSenderId: "1026560479044",
    appId: "1:1026560479044:web:3c7a29f0349feb0aa59111"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error)
    });
}
