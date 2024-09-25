const button = document.getElementById('myButton');
const text = document.getElementById('myText');

button.addEventListener('click', () => {
    text.textContent = 'Text changed!';
});