// Get existing users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Form reference
let form = document.getElementById("form");

// Submit event
form.addEventListener("submit", function(e){

    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // User object
    let user = {
        name: name,
        email: email,
        password: password
    };

    // Add to array
    users.push(user);

    // Store in localStorage
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    // AJAX POST
    let xhr = new XMLHttpRequest();

    xhr.open(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        true
    );

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.send(JSON.stringify(user));

    alert("Registration Successful");

});