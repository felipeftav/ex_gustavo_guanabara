function contagem () {
    let saida = document.querySelector('#saida');
    let num = Number(document.querySelector('#fnum').value);

    saida.innerHTML += `<h2>Contando de 0 atΓ© ${num}</h2>`
    let count = 0;
    while (count <= num) {
        saida.innerHTML += `${count} π`;
        count++;
    }
    saida.innerHTML += ` π`;
}
