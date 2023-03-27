const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener("click", () => {
    currentValue -= 1;
    currentValue.textContent = currentValue;
});

incrementButton.addEventListener("click", () => {
    currentValue += 1;
    currentValue.textContent = currentValue;
});