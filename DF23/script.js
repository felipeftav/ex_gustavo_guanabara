const resultado = document.querySelector('.container');

function clicado () {
    resultado.innerHTML += `<h2>Números pares de 1 até 10</h2>`;
    
    let cont = 1;
    while (cont <= 10) {
        if (cont % 2 == 0) {
            resultado.innerHTML += `${cont} 👉`;
        } else {
            resultado.innerHTML += ``;
        }
        cont++
    }
    resultado.innerHTML += ` 🏁`;
}
