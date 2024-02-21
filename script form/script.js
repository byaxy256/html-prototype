// script.js

// Add an event listener to the form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the input values
  const inputs = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    age: document.getElementById('age').value,
    color: document.getElementById('color').value
  };
  
  // Validate the form
  const isFormValid = Object.values(inputs).every(input => input !== '');
  // error message incase of submission without filling the feilds 
  if (!isFormValid) {
    document.getElementById('message').textContent = 'Please fill out all fields.';

    // Get the labels with the accessNumber attribute
    const labels = document.querySelectorAll('label[accessNumber]');

    // Loop through the labels and display the access number in the console
    labels.forEach(label => console.log(label.getAttribute('accessNumber')));
  }
});