// Saves variables for easier use
const inputs = document.querySelectorAll(".color-input"); // Selects all input fields and saves them in a array

// Saves the buttons in variables
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");
const copy = document.getElementById("copy");

// Function to change the background color with the value of the input fields
function colorPicker() {
    const red = inputs[0].value; // Saves the value of the first input field in a variable (array)
    const green = inputs[1].value;
    const blue = inputs[2].value;

    const color = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = color;
    console.log(color);
}

// function off the clear button
clear.addEventListener("click", function() { 
    inputs.forEach(input => { // for each input field he inserts an empty string
        input.value = "";
    });
    document.body.style.backgroundColor = "white"; // changes the background color to white (default)
});

generate.addEventListener("click", colorPicker); // When the generate button is clicked, the colorPicker function is called

inputs.forEach(input => {
    input.addEventListener("input", colorPicker); // When the input field is changed, the colorPicker function is called
});

// Function to copy the color to the clipboard
copy.addEventListener("click", function() {
    const color = document.body.style.backgroundColor; //checks the background color of the body
    navigator.clipboard.writeText(color); //copies the color to the clipboard
    alert("Color copied to clipboard"); //alert that the color was copied
});