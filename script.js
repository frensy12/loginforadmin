function authenticate() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Replace 'adminpassword' with your actual password or implement dynamic authentication logic
    if (password === 'Svampebob1') {
        // Redirect or perform actions here
        window.location.href = 'https://allintrendy.wixsite.com/forum-for-admins';
    } else {
        errorMessage.textContent = 'Incorrect password';
    }
}
