const saida = document.querySelector('.container');

function clicado () {
    saida.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`;
    
    let count = 10;
    saida.innerHTML += `<p>`;
    while (count >= 1) {
        saida.innerHTML += `${count} 👉`;
        count--;
    }
    saida.innerHTML += ` 🏁</p>`;
}
