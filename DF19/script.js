const resultado = document.querySelector('.container');

function clicado () {
    let firstNumber = Number(prompt('Primeiro valor:'));
    let secondNumber = Number(prompt('Segundo valor:'));
    let thirdChoice = Number(prompt(`Valores informados: ${firstNumber} e ${secondNumber}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`));

    if (thirdChoice == 1) {
        resultado.innerHTML = `<h2>Calculando...</h2><p>${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}</p>`;
    } else if (thirdChoice == 2) {
        resultado.innerHTML = `<h2>Calculando...</h2><p>${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}</p>`;
    } else if (thirdChoice == 3) {
        resultado.innerHTML = `<h2>Calculando...</h2><p>${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}</p>`;
    } else if (thirdChoice == 4) {
        resultado.innerHTML = `<h2>Calculando...</h2><p>${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}</p>`;
    } else if (thirdChoice == NaN || undefined || String) {
        resultado.innerHTML = `<h2>Calculando...</h2><p>Erro!! Escolha um número entre 1 e 4.</p>`;
    }
}
