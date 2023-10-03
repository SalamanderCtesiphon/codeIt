//get user input from the text input
let input = document.querySelector('#size');
let button = document.querySelector('#submit');
const warning = document.querySelector('.warning');

button.addEventListener('click', () => {
    let size = input.value;
    if (size > 1 && size <= 100) {
        populateBoard(size);
        warning.textContent = '';
    } else {
        warning.textContent = 'Please enter a number between 1 and 100';
    }
});

// a method to populate the container
function populateBoard (size) {
    let canvas = document.querySelector('.canvas');
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'whitesmoke';
        canvas.insertAdjacentElement('beforeend', square);
    }

}

// add event listeners to the squares
/* let canvas = document.querySelector('.canvas');
canvas.addEventListener('mouseover', colorSquare); */

//add an event listener to toggle the colorSquare function on and off with a mouse click
let canvas = document.querySelector('.canvas');
let toggle = false;
canvas.addEventListener('mousedown', () => {
    toggle = !toggle;
    if (toggle) {
        canvas.addEventListener('mouseover', colorSquare);
    } else {
        canvas.removeEventListener('mouseover', colorSquare);
    }
});




// a function to color the squares with input from the radio buttons

function colorSquare (e) {
    let color = document.querySelector('input[name="color"]:checked').value;
    if (color === 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (color === 'shade') {
        e.target.style.backgroundColor = shader();
    } else if (color === 'random') {
        e.target.style.backgroundColor = randomColor();
    } else if (color === 'erase') {
        e.target.style.backgroundColor = 'whitesmoke';
    }
}

// a function to shade the squares stopping at black

function shader () {
    let color = window.getComputedStyle(event.target).backgroundColor;
    let rgb = color.match(/\d+/g);
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    if (r > 0 && g > 0 && b > 0) {
        r -= 25;
        g -= 25;
        b -= 25;
    }
    return `rgb(${r}, ${g}, ${b})`;
}

// function to clear the board
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.canvas div');
    squares.forEach((div) => div.style.backgroundColor = 'whitesmoke');
});

    





//create a function that colors the square with a random color using an event listener

function randomColor () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


// a function to toggle the color option on and off with a mouse click

const colorOptions = document.querySelector('.color-options');
const colorBtn = document.querySelector('.color-btn');
colorBtn.addEventListener('click', () => {
    colorOptions.classList.toggle('hidden');
}
)
