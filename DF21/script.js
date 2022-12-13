const resultado = document.querySelector('.container');

function clicado () {
    resultado.innerHTML += `<h2>Contando de 1 até 10</h2>`;

    let cont = 1;
    while (cont <= 10) {
        resultado.innerHTML += ` ${cont} &#x1F449;`
        cont++ // Corresponde a cont = cont + 1
    }
    resultado.innerHTML += ` &#x1F3C1;`
}
