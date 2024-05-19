//operações--------------------------------------------------------------------------------

//operações--------------------------------------------------------------------------------

let expression = '';

const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === 'Erro') {
        expression = '';
    }
    expression += number;
    updateDisplay();
}

function appendDecimal() {
    if (display.value === 'Erro') {
        expression = '';
    }
    // Impede múltiplos pontos decimais no mesmo número
    const lastNumber = expression.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        expression += '.';
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (expression === '') return;
    if (isNaN(expression.slice(-1))) return; // Impede operadores consecutivos
    expression += op;
    updateDisplay();
}

function compute() {
    try {
        const result = eval(expression);
        expression = result.toString();
    } catch (error) {
        expression = 'Erro';
    }
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    if (expression !== '') {
        expression = expression.slice(0, -1);
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = expression;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '+') {
        chooseOperation('+');
    } else if (key === '-') {
        chooseOperation('-');
    } else if (key === '*') {
        chooseOperation('*');
    } else if (key === '/') {
        chooseOperation('/');
    } else if (key === 'Enter' || key === '=') {
        compute();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});


//tema-----------------------------------------------------------------------

function checkScreenSize() { // função para verificar o tamanho da tela
    const mediaQuery = window.matchMedia('(min-width: 769px)');
}


function theme() { //função para alterar o tema (cores)
    let img = document.querySelector('#theme');
    let body = document.body;
    let disp = document.querySelector('.display');
    let calc = document.querySelector('.calculator');
    let area_btn = document.querySelector('.buttons');
    let btn_light = document.getElementsByClassName('btn-light');
    let btn_dark = document.getElementsByClassName('btn-dark');
    let btn_darker = document.getElementsByClassName('btn-darker');
    let btn = document.getElementsByClassName('btn');
    let isit_body = body.classList.contains('dark-theme');

    if (isit_body) { //tema claro
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        disp.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--display');
        calc.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        area_btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-area');

        for (let i = 0 ; i < btn_light.length ; i++) {
            btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light');
            btn_light[i].addEventListener('mouseover', () => {
                btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light-hover');
            });
            btn_light[i].addEventListener('mouseout', () => {
                btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light');
            });
        }

        for (let i = 0 ; i < btn_dark.length ; i++) {
            btn_dark[i].style.backgroundColor =  getComputedStyle(document.documentElement).getPropertyValue('--btn-darker');
            btn_dark[i].addEventListener('mouseover', () => {
                btn_dark[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-darker-hover');
            });
            btn_dark[i].addEventListener('mouseout', () => {
                btn_dark[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-darker');
            });
        }

        for (let i = 0 ; i < btn_darker.length ; i++) {
        btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark');
        btn_darker[i].addEventListener('mouseover', () => {
            btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-hover');
        });
        btn_darker[i].addEventListener('mouseout', () => {
            btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark');
        });
        }

        for (let i = 0 ; i < btn.length ; i++) {
            btn[i].style.color = getComputedStyle(document.documentElement).getPropertyValue('--dark');
        }

        img.style.opacity = 0.8;
        
        setTimeout(function() {
            img.setAttribute('src', 'img/dark.png');
            img.style.opacity = 1;
        }, 200);

        var currentRotation = parseInt(img.getAttribute('data-rotation') || 0);
        currentRotation += -180;
        img.style.transform = 'rotate(' + currentRotation + 'deg)';
        img.setAttribute('data-rotation', currentRotation);

    } else { //tema escuro
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        disp.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--display-dark');
        calc.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-dark');
        area_btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-area-dark');

        for (let i = 0 ; i < btn_light.length ; i++) {
            btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light-dark');
            btn_light[i].addEventListener('mouseover', () => {
                btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light-hover-dark');
            });
            btn_light[i].addEventListener('mouseout', () => {
                btn_light[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-light-dark');
            });
        }

        for (let i = 0 ; i < btn_dark.length ; i++) {
            btn_dark[i].style.backgroundColor =  getComputedStyle(document.documentElement).getPropertyValue('--btn-darker-dark');
            btn_dark[i].addEventListener('mouseover', () => {
                btn_dark[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-darker-hover-dark');
            });
            btn_dark[i].addEventListener('mouseout', () => {
                btn_dark[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-darker-dark');
            });
        }

        for (let i = 0 ; i < btn_darker.length ; i++) {
            btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-dark');
            btn_darker[i].addEventListener('mouseover', () => {
                btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-hover-dark');
            });
            btn_darker[i].addEventListener('mouseout', () => {
                btn_darker[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-dark');
            });
        }

        for (let i = 0 ; i < btn.length ; i++) {
            btn[i].style.color = getComputedStyle(document.documentElement).getPropertyValue('--light');
        }

        img.style.opacity = 0.8;

        setTimeout(function() {
            img.setAttribute('src', 'img/light.png');
            img.style.opacity = 1;
        }, 200);

        var currentRotation = parseInt(img.getAttribute('data-rotation') || 0);
        currentRotation += 180;
        img.style.transform = 'rotate(' + currentRotation + 'deg)';
        img.setAttribute('data-rotation', currentRotation);
    }
}