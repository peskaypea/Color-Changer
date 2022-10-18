const button = document.querySelector('button')
const color = document.querySelector('#color')
const h2 = document.querySelector('h2')
document.querySelector('container')
button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h2.innerText = `Background color is ${newColor}`;


})

function randomColor() {
    const one = Math.floor(Math.random() * 255) + 1
    const two = Math.floor(Math.random() * 255) + 1
    const three = Math.floor(Math.random() * 255) + 1
    return `rgb(${one},${two},${three})`;
}




