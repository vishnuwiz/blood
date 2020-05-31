// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyC31QNHkvdWZM3zb8Dl8aF8EGLTw4fTjo8",
  authDomain: "jeevanam-e84ba.firebaseapp.com",
  databaseURL: "https://jeevanam-e84ba.firebaseio.com",
  projectId: "jeevanam-e84ba",
  storageBucket: "jeevanam-e84ba.appspot.com",
  messagingSenderId: "462727649567",
  appId: "1:462727649567:web:f906a72de6a95e6587b82a",
  measurementId: "G-VRK70M867Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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