// You'll need to set up Jest or another testing framework for this part
test('Text changes on button click', () => {
    document.body.innerHTML = `
        <h1>Click the button to see some magic!</h1>
        <button id="myButton">Click Me</button>
        <p id="myText"></p>
    `;

    require('./script.js'); // Assuming your script is in the same directory

    const button = document.getElementById('myButton');
    const text = document.getElementById('myText');

    button.click();
    expect(text.textContent).toBe('Text changed!');
});