/* function tabuada () {
    let entrada = Number(document.querySelector("#fnum").value);
    let saida = document.querySelector("#saida");

    saida.innerHTML += `<h2>Tabuada de ${entrada}</h2>`;
    saida.innerHTML += `${entrada} x 1 = <b>${entrada * 1}<br>`;
    saida.innerHTML += `${entrada} x 2 = <b>${entrada * 2}<br>`;
    saida.innerHTML += `${entrada} x 3 = <b>${entrada * 3}<br>`;
    saida.innerHTML += `${entrada} x 4 = <b>${entrada * 4}<br>`;
    saida.innerHTML += `${entrada} x 5 = <b>${entrada * 5}<br>`;
    saida.innerHTML += `${entrada} x 6 = <b>${entrada * 6}<br>`;
    saida.innerHTML += `${entrada} x 7 = <b>${entrada * 7}<br>`;
    saida.innerHTML += `${entrada} x 8 = <b>${entrada * 8}<br>`;
    saida.innerHTML += `${entrada} x 9 = <b>${entrada * 9}<br>`;
    saida.innerHTML += `${entrada} x 10 = <b>${entrada * 10}<br>`;
    
} */

function tabuada () {
    let entrada = Number(document.querySelector('#fnum').value);
    let saida = document.querySelector('#saida');

    saida.innerHTML = `<h2>Tabuada de ${entrada}</h2>`;
    
    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += `${entrada} x ${cont} = <b>${entrada * cont}</b><br>`;
        cont++;
    }
}
