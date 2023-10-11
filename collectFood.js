document.addEventListener("DOMContentLoaded", function () {
 // Function to handle the form submission
 document.getElementById('pickup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the entered pickup location
    let pickupLocation = document.getElementById('pickup-location').value;

    // You can perform actions with the pickupLocation value here
    console.log('Pickup Location:', pickupLocation);

    //display an alert with the pickup location
    alert('Pickup Location: ' + pickupLocation);
});
});