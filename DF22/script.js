const resultado = document.querySelector('.container');

function clicado () {
    resultado.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`;

    let cont = 1;
    while (cont <= 10) {
        if (cont % 2 == 0) {
            resultado.innerHTML += `<mark>${cont}</mark> 👉`;
        } else {
            resultado.innerHTML += `${cont} 👉`;
        }
        cont++;
    }
    resultado.innerHTML += ` &#x1F3C1;`;
}