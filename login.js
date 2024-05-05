document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('usernameInput').value;
        localStorage.setItem('username', username);
        window.location.href = 'select_languages.html';
    });
});
