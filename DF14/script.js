const resultado = document.querySelector('.container');


function clicado () {
    let date = new Date();
    resultado.innerHTML = `<p>O que eu recebi do sistema foi <mark>${date}</mark>.</p>`;
}