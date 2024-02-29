function theme() {
    let img = document.querySelector('img#theme');
    let body = document.body;
    let disp = document.querySelector('div#display');
    let calc = document.querySelector('div#calculadora');
    let area_btn = document.querySelector('div#botoens');
    let btn_light = document.getElementsByClassName('btn-light');
    let btn_dark = document.getElementsByClassName('btn-dark');
    let btn_igual = document.querySelector('input#igual');
    let btn = document.getElementsByClassName('btn');
    let isit_body = body.classList.contains('dark-theme');

    if (isit_body) {
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
        btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark');
        btn_igual.addEventListener('mouseover', () => {
            btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-hover');
        });
        btn_igual.addEventListener('mouseout', () => {
            btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark');
        });
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

    } else {
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
        btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-dark');
        btn_igual.addEventListener('mouseover', () => {
            btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-hover-dark');
        });
        btn_igual.addEventListener('mouseout', () => {
            btn_igual.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-dark-dark');
        });
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

//---------------------------------------------------------------------------------------------------

var disp = document.getElementById('p-disp');


// Função para atualizar o display com o valor passado
function updateDisplay(value) {
    disp.textContent += value;
}

// Função para limpar o display
function clearDisplay() {
    disp.textContent = '';
}

// Função para calcular o resultado da expressão no display
function calculateResult() {
    let expression = disp.textContent;

    // Tenta calcular o resultado da expressão
    try {
        let result = eval(expression);
        disp.textContent = result;
    } catch (error) {
        // Se ocorrer um erro na avaliação da expressão, exibe "Erro"
        disp.textContent = 'Erro';
    }
}

// Funções para adicionar os números ao display
function sete() {
    updateDisplay('7');
}

function oito() {
    updateDisplay('8');
}

function nove() {
    updateDisplay('9');
}

function quatro() {
    updateDisplay('4');
}

function cinco() {
    updateDisplay('5');
}

function seis() {
    updateDisplay('6');
}

function um() {
    updateDisplay('1');
}

function dois() {
    updateDisplay('2');
}

function tres() {
    updateDisplay('3');
}

function zero() {
    updateDisplay('0');
}

// Função para adicionar o ponto decimal
function dec() {
    let lastChar = disp.textContent.slice(-1);
    // Verifica se o último caractere no display já é um ponto decimal ou se já existe um ponto decimal na expressão
    if (lastChar !== '.' && !disp.textContent.includes('.')) {
        updateDisplay('.');
    }
}

// Função para realizar a adição
function add() {
    updateDisplay('+');
}

// Função para realizar a subtração
function subtract() {
    updateDisplay('-');
}

// Função para realizar a multiplicação
function multiply() {
    updateDisplay('*');
}

// Função para realizar a divisão
function divide() {
    updateDisplay('/');
}

// Função para limpar o display quando o botão 'C' é pressionado
document.querySelector('input[value="C"]').addEventListener('click', clearDisplay);

// Evento de clique para o botão de igual
document.querySelector('input#igual').addEventListener('click', calculateResult);