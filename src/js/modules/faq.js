const faqIndex = document.querySelectorAll('.faq__index')

if (faqIndex) {
    faqIndex.forEach((e) => {
        e.addEventListener('click', (elem) => {
            const faqItem = elem.target.closest('.faq__item')

            if (faqItem.classList.contains('changed')) {
                faqItem.classList.remove('changed')
            } else {
                faqIndex.forEach((el) => {
                    const faqItem = el.closest('.faq__item')
                    if (faqItem.classList.contains('changed')) {
                        faqItem.classList.remove('changed')
                    }
                })
                faqItem.classList.add('changed')
            }
        })
    })
}

// ДЛЯ ФУТЕРА

const footerItems = document.querySelectorAll('.footer__index')

if (footerItems) {
    footerItems.forEach((e) => {
        e.addEventListener('click', (elem) => {
            const fotIco = elem.target.closest('.footer__item')

            if (fotIco.classList.contains('changed')) {
                fotIco.classList.remove('changed')
            } else {
                footerItems.forEach((el) => {
                    const fotIco = el.closest('.footer__item')
                    if (fotIco.classList.contains('changed')) {
                        fotIco.classList.remove('changed')
                    }
                })
                fotIco.classList.add('changed')
            }
        })
    })
}

