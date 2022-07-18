const select = document.querySelector('#language');
const title = document.querySelector('.form-block__title');
const textName = document.querySelector('#textName');
const textPhone = document.querySelector('#textPhone');
const nameInput = document.querySelector('#inputName');
const button = document.querySelector('.form-block__btn');

select.addEventListener('change', function (e) {
    console.log("Changed to: " + e.target.value)
    if (e.target.value === 'en') {
        this.className = '';
        select.classList.add('en');
        select.classList.add('form-block__select');
        title.innerHTML = 'Take a step <br class="br"> towards recovery';
        textName.innerHTML = 'Your <span>name</span>';
        textPhone.innerHTML = 'Your <span>telephone number</span>';
        nameInput.placeholder = 'Alex';
        button.innerHTML = 'Order';
    } else if (e.target.value === 'ru') {
        this.className = '';
        select.classList.add('ru');
        select.classList.add('form-block__select');
        title.innerHTML = 'Сделай шаг <br class="br"> к выздоровлению';
        textName.innerHTML = 'Ваше <span>имя</span>';
        textPhone.innerHTML = 'Ваш <span>телефон';
        nameInput.placeholder = 'Алексей';
        button.innerHTML = 'Заказать';
    }
})