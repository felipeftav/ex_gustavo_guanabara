const resultado = document.querySelector('.pPrincipal');
const restanteResult = document.querySelector('.resultado');

function clicado () {
    const numero = Number(prompt('Escolha um numero natural: '))
    resultado.innerHTML = `<p>O número a ser analisado aqui será o <strong>${numero}</strong></p><hr>`;
    restanteResult.innerHTML += `<p>O seu valor absoluto é ${numero}</p>`;
    restanteResult.innerHTML += `<p>A sua parte inteira é ${Math.trunc(numero)}</p>`;
    restanteResult.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(numero)}</p>`;
    restanteResult.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(numero)}</p>`;
    restanteResult.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(numero)}</p>`;
    restanteResult.innerHTML += `<p>O valor de ${numero}<sup>2</sup> é ${Math.pow(numero, 2)}</p>`;
    restanteResult.innerHTML += `<p>O valor de ${numero}<sup>3</sup> é ${Math.pow(numero, 3)}</p>`;
}