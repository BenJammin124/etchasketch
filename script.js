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

let getRandomNum = () => {
    return Math.floor(Math.random() * 255) + 1;
}

let getRandomColor = () => {
    let randy = getRandomNum();
    let randy2 = getRandomNum();
    let randy3 = getRandomNum();
    return `rgb(${randy}, ${randy2}, ${randy3})`
}

let reset = document.querySelector('#reset')
reset.addEventListener('click', e => {
    canvas.innerHTML = '';
    if (typeof sizeSelect === 'undefined') {
        canvas.style.gridTemplateColumns = `repeat(2, 1fr)`
        canvas.style.gridTemplateRows = `repeat(2, 1fr)`
        for (let i = 1; i <= 4; i++) {
            div = document.createElement('div');
            div.classList.add('square');
            canvas.append(div);
        }
    } else if (!isNaN(sizeSelect)) {
        canvas.style.gridTemplateColumns = `repeat(${sizeSelect}, 1fr)`
        canvas.style.gridTemplateRows = `repeat(${sizeSelect}, 1fr)`
    }

    // canvas.style.gridTemplateColumns = `repeat(${sizeSelect}, 1fr)`
    // canvas.style.gridTemplateRows = `repeat(${sizeSelect}, 1fr)`
    for (let i = 1; i <= (sizeSelect * sizeSelect); i++) {
        div = document.createElement('div');
        div.classList.add('square');
        canvas.append(div);

    }
})


// let opac = 0;
// let darker = (sq) => {
//     opac += .25;
//     sq.style.backgroundColor = `rgba(0, 0, 0, ${opac})`
// }


console.log(canvas.childElementCount)

canvas.addEventListener('mouseover', e => {
    let rand = colorSelect();
    if (rand == 'red' || rand == 'blue' || rand == 'pink') {
        e.target.style.backgroundColor = rand;
    } else if (rand == 'randy') {
        e.target.style.backgroundColor = getRandomColor();
    }

})

let count = canvas.childElementCount
console.log(count)

