<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvaIvJXNMlemW14jtkNgdRwfYuVjOTLds",
    authDomain: "jeevanam-admin.firebaseapp.com",
    projectId: "jeevanam-admin",
    storageBucket: "jeevanam-admin.appspot.com",
    messagingSenderId: "893679429622",
    appId: "1:893679429622:web:7bffa553bcdf366c6049d7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

// Reference messages collection
var messagesRef = firebase.database().ref('Database');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var place = getInputVal('place');
  var age = getInputVal('age');
  var phone = getInputVal('phone');
  var group = getInputVal('group');

  // Save message
  saveMessage(name, place, age, phone, group);

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
function saveMessage(name, place, age, phone, group){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    place:place,
    age:age,
    phone:phone,
    group:group
  });
}
