document.addEventListener('DOMContentLoaded', function() {
    // Login Form Validation
    if (document.getElementById('loginForm')) {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let valid = true;

            const email = document.getElementById('email');
            const password = document.getElementById('password');

            // Email Validation
            if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
                valid = false;
                document.getElementById('emailError').textContent = 'Please enter a valid email.';
            } else {
                document.getElementById('emailError').textContent = '';
            }

            // Password Validation
            if (password.value.length < 6) {
                valid = false;
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
            } else {
                document.getElementById('passwordError').textContent = '';
            }

            if (valid) {
                // Submit the form
                alert('Login Successful');
                loginForm.submit();
            }
        });
    }

    // Registration Form Validation
    if (document.getElementById('registerForm')) {
        const registerForm = document.getElementById('registerForm');
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let valid = true;

            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');

            // Username Validation
            if (username.value.trim() === '') {
                valid = false;
                document.getElementById('usernameError').textContent = 'Username is required.';
            } else {
                document.getElementById('usernameError').textContent = '';
            }

            // Email Validation
            if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
                valid = false;
                document.getElementById('emailError').textContent = 'Please enter a valid email.';
            } else {
                document.getElementById('emailError').textContent = '';
            }

            // Password Validation
            if (password.value.length < 6) {
                valid = false;
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
            } else {
                document.getElementById('passwordError').textContent = '';
            }

            // Confirm Password Validation
            if (password.value !== confirmPassword.value) {
                valid = false;
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            } else {
                document.getElementById('confirmPasswordError').textContent = '';
            }

            if (valid) {
                // Submit the form
                alert('Registration Successful');
                registerForm.submit();
            }
        });
    }

    // Workout Form Validation
    if (document.getElementById('workoutForm')) {
        const workoutForm = document.getElementById('workoutForm');
        workoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let valid = true;

            const exercise = document.getElementById('exercise');
            const duration = document.getElementById('duration');
            const intensity = document.getElementById('intensity');

            // Exercise Validation
            if (exercise.value.trim() === '') {
                valid = false;
                alert('Exercise is required');
            }

            // Duration Validation
            if (duration.value <= 0) {
                valid = false;
                alert('Duration must be greater than 0 minutes');
            }

            // Intensity Validation
            if (intensity.value < 1 || intensity.value > 10) {
                valid = false;
                alert('Intensity must be between 1 and 10');
            }

            if (valid) {
                // Log Workout
                alert('Workout Logged Successfully');
                workoutForm.reset();
            }
        });
    }
});
