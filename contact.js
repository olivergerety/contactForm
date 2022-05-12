// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAmdJQyr13uomAQfctZktffp5y8nqSM9-Q",
    authDomain: "contactform-99b83.firebaseapp.com",
    databaseURL: "https://contactform-99b83-default-rtdb.firebaseio.com",
    projectId: "contactform-99b83",
    storageBucket: "contactform-99b83.appspot.com",
    messagingSenderId: "323809909365",
    appId: "1:323809909365:web:54e9acf4cc590356f5763c",
    measurementId: "G-4F2NPM6XT4"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(firstName, lastName, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstName, lastName, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstName: firstName,
      lastName:lastName,
      email:email,
      phone:phone,
      message:message
    });
  }
