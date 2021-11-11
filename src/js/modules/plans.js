const plans = document.querySelectorAll('.plan')

if (plans) {
    plans.forEach((e) => {
        const planIcons = e.querySelectorAll('.plan__icon')
        const planTabs = e.querySelectorAll('.plan__tab')
        planIcons.forEach((el) => {
            el.addEventListener('click', () => {
                planIcons.forEach((elem) => {
                    elem.classList.remove('active')
                })
                el.classList.add('active')
            })
        })
    })
}