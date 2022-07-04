
let quadros = document.getElementById('pixel-board')

function criandoQuadrados(n) {
    for (let index =0; index < n; index +=1){
        let conjunto = document.createElement('div')
        conjunto.className = 'linha';
        for(let i =1; i <= n; i +=1){
            let quadrado = document.createElement('div')
            quadrado.className = 'pixel';
            conjunto.appendChild(quadrado)
        }
        quadros.appendChild(conjunto)
    }
}

criandoQuadrados(5)