document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (default behavior)
    
    // Get form values
    var name = document.getElementById("Name").value;
    var role = document.getElementById("role").value;
        
    // Display a success message
    alert("Volunteer information submitted successfully!\nName: " + name + "\nRole: " + role);

    // Clear the form fields
    document.getElementById("Name").value = "";
    document.getElementById("role").value = "";
});
