const tabsButtons = document.querySelectorAll('.statistic-nav__item')
const tabs = document.querySelectorAll('.statistic__tab')

if (tabsButtons) {
    tabsButtons.forEach((e) => {
        e.addEventListener('click', (el) => {
            tabsButtons.forEach((elem) => {
                elem.classList.remove('active')
            })
            el.target.classList.add('active')
            const tabId = el.target.getAttribute('data-tab-id')
            tabs.forEach((elem) => {
                elem.classList.remove('active')
            })
            document.querySelector(`[data-tab=${tabId}]`).classList.add('active')
        })
    })
}