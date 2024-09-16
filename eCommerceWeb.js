let bar = document.querySelector('#bar')
let nav = document.querySelector('.navbar')
let close = document.querySelector(`.close`)

if (bar) {
    bar.addEventListener(`click`, () => {
        nav.classList.add(`active`)
    })
}

if (close) {
    close.addEventListener(`click`, () => {
        nav.classList.remove(`active`)
    })
}

let mainImg = document.querySelector(`#MainImg`)
let smallImg = document.querySelectorAll(`.small-image`)

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener(`click`, () => {
        console.log('clicked')
        mainImg.src = smallImg[i].src
    })
}

let cut = document.querySelectorAll(`.cart table tbody tr td i`)
let tr = document.querySelectorAll(`.cart table tbody tr`)

for (let i = 0; i < cut.length; i++) {
    cut[i].addEventListener(`click`, () => {
        tr[i].classList.add(`display-none`)
    })
}