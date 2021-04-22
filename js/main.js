const boxes = document.querySelector('.boxes');
const magicBtn = document.querySelector('.button-box')

magicBtn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})