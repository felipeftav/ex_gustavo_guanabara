function contagem () {
    let saida = document.querySelector('#saida');
    let num = Number(document.querySelector('#fnum').value);

    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let count = 0;
    while (count <= num) {
        saida.innerHTML += `${count} 👉`;
        count++;
    }
    saida.innerHTML += ` 🏁`;
}
