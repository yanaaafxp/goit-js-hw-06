const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
    const inputLength = event.target.value.length;
    const requiredLength = event.target.dataset.length;

    if (inputLength === Number(requiredLength)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});