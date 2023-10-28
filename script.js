let canvas = document.querySelector('#canvas')
let div;
const btnColor = document.querySelector('#btn');
let sizeSelect;
btnColor.addEventListener('click', () => {
    sizeSelect = parseInt(prompt('Enter a number for the size of the canvas:'))
    for (let i = 1; i <= (sizeSelect * sizeSelect); i++) {
        div = document.createElement('div');
        div.classList.add('square');
        canvas.append(div);

    }
})



let color = document.querySelector('#color');
let colorSelected;
const colorSelect = () => {
    colorSelected = color.value;
    return colorSelected

}

console.log(canvas.childElementCount)

canvas.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = colorSelect();
})

let count = canvas.childElementCount
console.log(count)

