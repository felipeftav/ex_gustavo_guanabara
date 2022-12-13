const resultado = document.querySelector('.container');
let n = Math.floor(Math.random() * 101);

function clicado () {
    let guess = Number(prompt('Qual é o seu palpite?'));

    if (guess < n) {
        resultado.innerHTML += `<p>Você falou ${guess}. Meu número é MAIOR!</p>`
    } else if (guess > n) {
        resultado.innerHTML += `<p>Você falou ${guess}. Meu número é MENOR!</p>`;
    } else {
        resultado.innerHTML += `<p>Você falou ${guess}. Você ACERTOU!</p>`;
    }
}