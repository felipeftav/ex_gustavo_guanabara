const resultado = document.querySelector('.container');

function clicado () {
    let numeroSorteado = Math.floor(Math.random() * 101);
    resultado.innerHTML += `<p>Acabei de pensar no número <mark>${numeroSorteado}</mark>!</p>`;
}

function resetar () {
    resultado.innerHTML = ``;
}
