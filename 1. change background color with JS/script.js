// 1. Target and access DOM elements
let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['red', 'hsl(125, 28%, 50%)', 'blue', 'rgb(255, 123, 0)', '#b427ad'];

// 2. add Eventlistener to button element
button.addEventListener('click', () => {
    let colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
})
