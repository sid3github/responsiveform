var config = {
    apiKey: "AIzaSyBzcYUHV1o1Eo9EMIqdPleW-IYGi2cQnCU",
    authDomain: "contactform-f99cc.firebaseapp.com",
    databaseURL: "https://contactform-f99cc.firebaseio.com",
    projectId: "contactform-f99cc",
    storageBucket: "contactform-f99cc.appspot.com",
    messagingSenderId: "710627465455"
  };
  firebase.initializeApp(config);

  //reference messages collection.
   var messagesRef = firebase.database().ref('messages');

// listen for form submit.

document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form.
function submitForm(e){
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //Save message.
    saveMessage(name,company,email,phone,message);

    // show alert
    document.querySelector('.alert').style.display = 'block';   

    //hide alert after 3 sec.
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    console.log(saveMessage);
}

// Function to get form values.

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase.
function saveMessage(name,company,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
