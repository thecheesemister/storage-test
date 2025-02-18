function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Fetch the credentials from the passwords.json file
    fetch("passwords.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Look for a matching username and password pair
            const userFound = data.find(user => user.username === username && user.password === password);
            if (userFound) {
                // Redirect to the specified URL on successful login
                window.location.href = "https://thecheesemister.github.io/storage-test/storage";
            } else {
                alert("Invalid username or password.");
            }
        })
        .catch(error => {
            console.error("Error fetching credentials:", error);
            alert("There was an error verifying your credentials. Please try again later.");
        });
}
