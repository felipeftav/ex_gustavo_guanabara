const resultado = document.querySelector('.container');

function clicado () {
    let n = Number(prompt('Digite um número: '));
    let resto = n % 2;
    if (resto == 0) {
        resultado.innerHTML = `<p>O número ${n} que foi digitado é PAR!</p>`;
    } else {
        resultado.innerHTML = `<p>O número ${n} que foi digitado é IMPAR!</p>`;
    }
}
