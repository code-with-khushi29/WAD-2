document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");

    if (users.length === 0) {
        userList.innerHTML = "<p>No registered users found.</p>";
    } else {
        users.forEach(user => {
            let li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
});