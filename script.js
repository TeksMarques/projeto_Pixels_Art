const quadros = document.getElementById('pixel-board');
const paleta = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');
const inputN = document.getElementById('board-size');
const btnVqv = document.getElementById('generate-board');

function criandoQuadrados(n) {
  if (window.size < 5) {
    n = 5;
    alert('Board inválido!')
  } else if (window.size > 50) {
    n = 50;
    alert('Board inválido!')
  }
  for (let index = 0; index < n; index += 1) {
    const conjunto = document.createElement('div');
    conjunto.className = 'linha';
    for (let i = 1; i <= n; i += 1) {
      const quadrado = document.createElement('div');
      quadrado.className = 'pixel';
      conjunto.appendChild(quadrado);
    }
    quadros.appendChild(conjunto);
  }
}
function escolherCor() {
  for (let i = 0; i < paleta.length; i += 1) {
    if (paleta[i] === this) {
      this.classList.add('selected');
      const cssObj = window.getComputedStyle(this, null);
      const bgColor = cssObj.getPropertyValue('background-color');
      window.corI = bgColor;
    } else {
      paleta[i].classList.remove('selected');
    }
  }
}
function escolherPaleta() {
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', escolherCor);
  }
}

function adicionaCor() {
  this.style.backgroundColor = window.corI;
}

function escolhePixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', adicionaCor);
  }
}

function limparPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
limpar.addEventListener('click', limparPixel);

function valorInput() {
  const valor = document.getElementById('board-size').value;
  window.size = valor
}
function novoQuadrado() {
  const quadroInicial = document.querySelectorAll('.linha');
  for (let index = 0; index < quadroInicial.length; index += 1) {
    quadros.removeChild(quadroInicial[index]);
  }
}
function gerarNovo() {
  valorInput();
  novoQuadrado();
  criandoQuadrados(window.size)
  escolhePixel()
}

btnVqv.addEventListener('click', gerarNovo);




criandoQuadrados(5);
escolherPaleta();
escolhePixel();
window.corI = 'black';
