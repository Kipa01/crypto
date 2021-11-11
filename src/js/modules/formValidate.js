// =========== Form ===========
const forms = document.querySelectorAll('.form')
const formsReqItems = [...document.querySelectorAll("._req")]

document.addEventListener('click', (e) => {
    const haveErr = formsReqItems.some(el => el.classList.contains('_error'))
    if (e.target.classList.contains('input') && e.target.classList.contains('_error')) {
        e.target.classList.remove('_error')
    }
    if (haveErr && !e.target.classList.contains('input') && e.target.type !== 'submit') {
        document.querySelectorAll('._error').forEach(elem => elem.classList.remove('_error'))
    }
})

if (forms) {
    forms.forEach((e) => {
        e.addEventListener("submit", formSend);

        function formSend(el) {
            el.preventDefault();

            // Проверка на правильность введенных данных
            let error = formValidate(e); // в этой переменной будем хранить кол-во ошибок(т.е. есть они или нет)
            if (error == 0) { // ошибок нет - делаем отправку формы
                e.classList.add("_sending"); // чтобы пользователь видел, что что-то происходит(отправка формы)
                e.reset(); // очищаем форму
                e.classList.remove("_sending");
            } else { // если есть, можно выевсти какое-нибудь сообщение/попап
            }
        };

        function formValidate(form) {
            let formError = 0;
            let formreq = form.querySelectorAll("._req");
            for (let index = 0; index < formreq.length; index++) { // идем по каждому элементу массива
                const input = formreq[index]; // каждый текущий элемент записываем в переменную input
                formRemoveError(input); // удаляем класс "_error" у текущего поля
                if (input.classList.contains("_email")) { // класс "_email" добавляем к полю, где email
                    if (!emailTest(input)) { // если поле емайла некорректное, то добавляем класс "_error"
                        formAddError(input);
                        formError++;
                    }
                } else {
                    if (input.value === "") {
                        formAddError(input); // если имя пустое, то добавляем класс "_error"
                        formError++;
                    }
                }
            }
            return formError;
        };

        function formAddError(input) {
            input.parentElement.classList.add("_error"); // добавляем класс "_error" родителю элемента
            input.classList.add("_error"); // добавляем класс "_error" самому элементу
        };

        function formRemoveError(input) {
            input.parentElement.classList.remove("_error"); // удаляем класс "_error" у родителя элемента
            input.classList.remove("_error");// удаляем класс "_error" у самого элемента
        };

        // Проверка email
        function emailTest(input) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(input.value);
        };
    })
}
// =========== /Form ===========