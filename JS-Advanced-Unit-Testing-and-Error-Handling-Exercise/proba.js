function validate() {
    const form = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');
    const submitButton = document.getElementById('submit');
    const validMessage = document.getElementById('valid');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset styles for all fields
        resetStyles([username, email, password, confirmPassword, companyNumber]);

        let isValid = true;

        // Validate username
        if (!isValidUsername(username.value)) {
            isValid = false;
            applyInvalidStyle(username);
        }

        // Validate email
        if (!isValidEmail(email.value)) {
            isValid = false;
            applyInvalidStyle(email);
        }

        // Validate password and confirm password
        if (!isValidPassword(password.value)) {
            isValid = false;
            applyInvalidStyle(password);
        }
        if (!isValidPassword(confirmPassword.value) || confirmPassword.value !== password.value) {
            isValid = false;
            applyInvalidStyle(confirmPassword);
        }

        // Validate company info if applicable
        if (companyCheckbox.checked) {
            if (!isValidCompanyNumber(companyNumber.value)) {
                isValid = false;
                applyInvalidStyle(companyNumber);
            }
        }

        // Toggle visibility of valid message
        validMessage.style.display = isValid ? 'block' : 'none';
    });
}

// Helper function to reset styles for all fields
function resetStyles(elements) {
    elements.forEach(element => {
        element.style.borderColor = '';
    });
}

// Helper function to apply invalid style to an element
function applyInvalidStyle(element) {
    element.style.borderColor = 'red';
}

// Validation functions
function isValidUsername(username) {
    return /^[a-zA-Z0-9]{3,20}$/.test(username);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return /^\w{5,15}$/.test(password);
}

function isValidCompanyNumber(companyNumber) {
    return /^[0-9]{4}$/.test(companyNumber);
}

// Call the validate function on window load
window.onload = function() {
    validate();
};
-