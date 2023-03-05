// Function that is called when the form is submitted
function register(event) {
    // Prevent the default form submission behavior
  event.preventDefault();
  // Get the values of the input fields
  var userName = document.getElementById("userName").value;
  var userNumber = document.getElementById("userNumber").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
    // Create an object with the user data
  var userData = { name: userName, number: userNumber, email: userEmail, password: userPassword }
   // Retrieve the existing user data from local storage or create an empty array
  dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(dataFromLS, "dataFromLS")

  // Loop through the existing user data to check if the email is already present
  var flag = false;
  for (i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === userEmail) {
          flag = true;
      }
  // If the email is already present, show an alert message and don't save the user data    
  } if (flag === true) {
      alert("email already present, please use another email!");
  } // If the password is less than 6 characters, show an alert message and don't save the user data
  else if (userPassword.length < 6) {
      alert("Password must be 6 characters!");
  }// If any field is empty, show an alert message and don't save the user data
   else if (!userName || !userNumber || !userEmail || !userPassword) {
      alert("Please fill in all fields!");
  } // Otherwise, save the user data to local storage and redirect to the login page
  else {
      dataFromLS.push(userData);
      localStorage.setItem('userData', JSON.stringify(dataFromLS));
      document.getElementById("userName").value = '';
      document.getElementById("userNumber").value = '';
      document.getElementById("userEmail").value = '';
      document.getElementById("userPassword").value = '';
      window.location.href = './signin.html';
      alert('Registration Done.');
  }
}

function login(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLS = JSON.parse(localStorage.getItem('userData'));

    var flag = false;

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword)
            flag = true;

    }
    if (flag === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        alert("You are logged in successfully!");
        window.location.href = "./index.html";
        
    } 
    else {
        alert("Wrong credentials entered!Please use correct email and password!");
    }

}

var gettingEmail;
function forgetPassword(){
    // alert("worked!")
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));
    var userEmail=document.getElementById("email").value;
    gettingEmail=userEmail;

    var flag=false;
    for(var i=0; i<dataFromLS.length; i++){
        if (dataFromLS[i].email===userEmail){
            flag=true;
        }

    }
    if(flag===true){
        var newCode=`<div id=set-pass><small>Set a New Password!</small><br/><input type="password" id="password"/><br/><br/><button onclick="newPassword()">set new password</button></div>`
        var divFromHtml= document.getElementById("change")
        divFromHtml.innerHTML=newCode;
        // window.location.href="./new-pass.html";
        alert("Now set new password")
    }else{
        alert("please check your email, its not in our database!")
    }
}


function newPassword(){
    // alert("worked!")
    var userPassword=document.getElementById("password").value;
    var dataFromLS=JSON.parse(localStorage.getItem("userData"));

    for(var i=0; i<dataFromLS.length;i++){
        if(dataFromLS[i].email===gettingEmail){
            dataFromLS[i].password=userPassword
        }
    }
    localStorage.setItem('userData', JSON.stringify(dataFromLS));
    gettingEmail="";
    window.location.href='./login.html';
    alert("password changed, now login.")

}