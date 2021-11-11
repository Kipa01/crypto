const scrollLinks = document.querySelectorAll('.header__link')
const sections = document.querySelectorAll('.section')
if (scrollLinks) {
    if (scrollLinks) {
        scrollLinks.forEach(e => {
            e.addEventListener("click", function (el) {
                el.preventDefault()
                scrollLinks.forEach((elem) => {
                    elem.classList.remove('active')
                })
                e.classList.add('active')
                const href = this.getAttribute('href').substring(1)
                const scrollTarget = document.getElementById(href)
                const topOffset = document.querySelector('.header').offsetHeight
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            });
        });

        window.addEventListener('scroll', () => {
            let scrollDistance = window.scrollY;

            if (window.innerWidth > 768) {
                sections.forEach((el, i) => {
                    const topOffset = document.querySelector('.header').offsetHeight
                    if (el.offsetTop - topOffset <= scrollDistance) {
                        scrollLinks.forEach((elem) => {
                            if (elem.classList.contains('active')) {
                                elem.classList.remove('active');
                            }
                        });

                        scrollLinks[i].classList.add('active');
                    }
                });
            }
        });
    }
}