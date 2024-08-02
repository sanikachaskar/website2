// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#B9FBC0', '#C6F6D5'];
    const currentColor = document.body.style.backgroundColor;
    let newColor;
    
    // Ensure the new color is different from the current one
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    document.body.style.backgroundColor = newColor;
}

// Function to toggle the visibility of text
function toggleText() {
    const textElement = document.getElementById('toggleText');
    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
    } else {
        textElement.style.display = 'none';
    }
}

// Event listeners for buttons
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
document.getElementById('toggleTextButton').addEventListener('click', toggleText);
