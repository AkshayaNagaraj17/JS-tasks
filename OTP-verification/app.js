// Select all input elements
let inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
    input.addEventListener('keyup', () => {
        // Check if the current input is not the last one
        if (index < inputs.length - 1) {
            // Move focus to the next input
            inputs[index + 1].focus();
        }
    });
});
