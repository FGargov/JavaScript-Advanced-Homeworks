function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', function() {
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (emailPattern.test(emailInput.value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}

document.addEventListener('DOMContentLoaded', validate);
