// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email.value || !email.checkValidity()) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (email.checkValidity() && password.value) {
        alert('Login successful!');
    }
});

// Registration Form Validation
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!name.value) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }

    if (!email.value || !email.checkValidity()) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (name.value && email.checkValidity() && password.value) {
        alert('Registration successful!');
    }
});

// Profile Form Interactivity (Password Visibility Toggle)
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Profile saved!');
});
