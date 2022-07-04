const quadros = document.getElementById('pixel-board');
const paleta = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');

function criandoQuadrados(n) {
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

criandoQuadrados(5);
escolherPaleta();
escolhePixel();
window.corI = 'black';
