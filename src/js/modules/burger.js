const burger = document.querySelector('.dashboard__burger')
const aside = document.querySelector('aside')
const asideOverlay = document.querySelector('.aside__overlay')

if (burger) {
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active')
            aside.classList.remove('active')
            asideOverlay.classList.remove('active')
        } else {
            burger.classList.add('active')
            aside.classList.add('active')
            asideOverlay.classList.add('active')
        }
    })
    asideOverlay.addEventListener('click', () => {
        burger.classList.remove('active')
        aside.classList.remove('active')
        asideOverlay.classList.remove('active')
    })
}