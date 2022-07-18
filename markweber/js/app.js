const complexBlock = document.querySelector('.complex-description-block');
const body = document.querySelector('body');

function changeItem() {
    complexBlock.classList.add('appear-complex');
    complexBlock.classList.remove('hide-complex');
    body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url(../src/background.jpg)';
}

function rechangeItem() {
    complexBlock.classList.remove('appear-complex');
    complexBlock.classList.add('hide-complex');
    body.style.background = '#585148 url(../src/background.jpg) no-repeat';
}