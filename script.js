const obj=document.getElementById('showPassword');
obj.addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

const ele=document.getElementById('registrationForm');
ele.addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        alert("First Name should hold only  text.");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        alert("Last Name should hold only text.");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number should take exactly 10 digits.");
        return;
    }

    alert("Registration successful!");
});
