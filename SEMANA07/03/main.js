
const inputDisplay = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const buttonSelected = event.target;
        const buttonText = buttonSelected.textContent;
        
        console.log(buttonText);
    });
});
