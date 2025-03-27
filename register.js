document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Create user object
        let user = { name, email, password };

        // Get existing users from Local Storage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user
        users.push(user);

        // Save updated users back to Local Storage
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");

        // Redirect to user list page
        window.location.href = "users.html";
    });
});