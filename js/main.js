const boxes = document.querySelector('.boxes');
const magicBtn = document.querySelector('.button-box')

let boxSize = 125

if (window.innerWidth > 630) {
    boxSize = 125
} else if (window.innerWidth < 630) {
    boxSize = 70
}

function createBoxes() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * boxSize}px ${-i * boxSize}px`

            boxes.appendChild(box)
        }
    }
}

createBoxes()

magicBtn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})