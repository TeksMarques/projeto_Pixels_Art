const quadros = document.getElementById('pixel-board');
const paleta = document.querySelectorAll('.color')

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



function escolherPaleta() {
    for (let index = 0; index < paleta.length; index +=1) {
        paleta[index].addEventListener('click', escolherCor)
    }
}
function escolherCor() {
    for (let i = 0; i < paleta.length; i +=1){
        if (paleta[i] == this) {
            this.classList.add('selected');
            const cssObj = window.getComputedStyle(this, null);
            let bgColor = cssObj.getPropertyValue("background-color");
            window.corI = bgColor;
        } else {
            paleta[i].classList.remove('selected');
        }
        
    }
}


criandoQuadrados(5);
escolherPaleta();
