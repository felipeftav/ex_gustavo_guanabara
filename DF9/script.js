let contagem = 0;
let resultado = document.querySelector('.resultado');


function contador() {
    /* contagem ++; */
    resultado.innerHTML = `<p>O resultado é ${contagem++}</p>`;
}

function resetar () {
    contagem = 0;
    resultado.innerHTML = `<p>O resultado irá aparecer aqui...</p>`;
}