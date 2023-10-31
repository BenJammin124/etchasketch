let canvas = document.querySelector('#canvas')
let div;
const btnColor = document.querySelector('#btn');
let sizeSelect;

let createCanvas = () => {
    // sizeSelect = parseInt(prompt('Enter a number between 1 and 64 to set the size of the canvas:'))
    // while (sizeSelect !== null && (sizeSelect < 1 || sizeSelect >= 64 || !Number.isInteger(sizeSelect))) {
    //     sizeSelect = parseInt(prompt('Enter a number between 1 and 64 to set the size of the canvas:'))


    do {
        sizeSelect = prompt('Enter a number between 1 and 64 to set the size of the canvas:');
        if (sizeSelect === null) {
            return;
        }
        sizeSelect = parseInt(sizeSelect);
    } while (!Number.isInteger(sizeSelect) || sizeSelect < 1 || sizeSelect > 64);



    canvas.innerHTML = ''
    canvas.style.gridTemplateColumns = `repeat(${sizeSelect}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${sizeSelect}, 1fr)`;
    for (let i = 1; i <= (sizeSelect * sizeSelect); i++) {
        div = document.createElement('div');
        div.classList.add('square');
        canvas.append(div);
    }

    return sizeSelect
}

btnColor.addEventListener('click', createCanvas)

let color = document.querySelector('#color');
let colorSelected;
const colorSelect = () => {
    colorSelected = color.value;
    return colorSelected

}



let reset = document.querySelector('#reset')
reset.addEventListener('click', e => {
    canvas.innerHTML = '';
    canvas.style.gridTemplateColumns = `repeat(${sizeSelect}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${sizeSelect}, 1fr)`
    for (let i = 1; i <= (sizeSelect * sizeSelect); i++) {
        div = document.createElement('div');
        div.classList.add('square');
        canvas.append(div);

    }
})




console.log(canvas.childElementCount)

canvas.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = colorSelect();
})

let count = canvas.childElementCount
console.log(count)

