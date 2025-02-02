// Simulated user database with photos
const users = [
    { username: 'user1', password: 'pass1', name: 'John Doe', photo: '/placeholder.svg?height=100&width=100' },
    { username: 'user2', password: 'pass2', name: 'Jane Smith', photo: '/placeholder.svg?height=100&width=100' },
    { username: 'admin', password: 'adminpass', name: 'Admin User', photo: '/placeholder.svg?height=100&width=100' }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const contentSection = document.getElementById('content');
    const logoutBtn = document.getElementById('logout-btn');
    const userPhoto = document.getElementById('user-photo');
    const userName = document.getElementById('user-name');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            loginSection.style.display = 'none';
            contentSection.style.display = 'block';
            userPhoto.src = user.photo;
            userName.textContent = user.name;
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    logoutBtn.addEventListener('click', () => {
        loginSection.style.display = 'block';
        contentSection.style.display = 'none';
        loginForm.reset();
        userPhoto.src = '';
        userName.textContent = '';
    });
});
