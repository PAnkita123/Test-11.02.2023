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
      window.location.href = './login.html';
      alert('Registration Done.');
  }
}