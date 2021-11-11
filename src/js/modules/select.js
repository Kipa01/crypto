let select = function () {
    let selectHeader = document.querySelectorAll('.select__header')
    if (selectHeader) {
        let selectItem = document.querySelectorAll('.select__item')
        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            const dataSelect = this.getAttribute('data-select')
            let text = this.innerHTML,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__header');
            currentText.innerHTML = `
                <span class="select__current">
                     ${text}
               </span>
               <div class="select__icon">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11 6L6.04425 1L1 6" stroke="inherit" stroke-width="1.25"/>
                  </svg>
               </div>
            `
            select.setAttribute('data-select', dataSelect)
            select.classList.remove('is-active');
        }
    }
};


select();