import Swiper, {Pagination} from 'swiper'

Swiper.use([Pagination])
if (window.screen.availWidth <= 1140) {
    setTimeout(() => {
        if (document.querySelector('.stats__container')) {
            const swiper = new Swiper('.stats__container', {
                slidesPerView: "auto",
                spaceBetween: 10,
            })
        }
        if (document.querySelector('.about__slider')) {
            const swiper2 = new Swiper('.about__slider', {
                slidesPerView: "auto",
                spaceBetween: 10,
            })
        }
        if (document.querySelector('.plans-swiper-container')) {
            const swiper3 = new Swiper('.plans-swiper-container', {
                slidesPerView: "auto",
                spaceBetween: 10,
            })
        }
    }, 0)
}

if (window.screen.availWidth <= 960) {
    setTimeout(() => {
        if (document.querySelector('.dashboard__stats')) {
            const swiper = new Swiper('.dashboard__stats', {
                slidesPerView: "auto",
                spaceBetween: 10,
            })
        }
    }, 0)
}