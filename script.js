function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessages = document.getElementById('errorMessages');
    var successMessage =document.getElementById('successMessage');
    errorMessages.innerHTML = '';
  
    if (fullName.length < 5) {
      errorMessages.innerHTML += 'Name must be at least 5 characters long.<br>';
    }
  
    if (!email.includes('@')) {
      errorMessages.innerHTML += 'Please enter a valid email address.<br>';
    }
  
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
      errorMessages.innerHTML += 'Please enter a valid 10-digit phone number.<br>';
    }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      errorMessages.innerHTML += 'Password must be at least 8 characters long and should not be "password" or your name.<br>';
    }
  
    if (password !== confirmPassword) {
      errorMessages.innerHTML += 'Passwords do not match.<br>';
    }
  
    if (errorMessages.innerHTML !== '') {
        successMessage.style.display='none';
      return false; // Prevent form submission if there are errors
    }
    
    successMessage.style.display='block';
    setTimeout(function(){successMessage.style.display='none';},3000);
  
    return true;
  }