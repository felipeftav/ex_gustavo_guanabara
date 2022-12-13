const resultado = document.querySelector('.resultado');

function botãoClicado () {
    let num1 = Number(prompt("Escolha o primeiro número: "));
    let num2 = Number(prompt("Escolha o segundo número: "));
    return resultado.innerHTML = `<p>A soma entre ${num1} e ${num2} é igual a <b>${num1 + num2}!</b></p>`
}
