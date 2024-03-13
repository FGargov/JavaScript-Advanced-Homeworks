function validate() {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', function () {
       const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

       if (emailRegex.test(this.value)) {
            this.classList.remove('error');

            this.style = '';
       } else {
           this.classList.add('error');
       }
    });
}