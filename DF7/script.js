const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

function euCliquei () {
    const nome = prompt('Qual é o nome do aluno?');
    const primeiraNota = Number(prompt('Insira a nota da P1 do aluno: '));
    const segundaNota = Number(prompt('Insira a nota P2 do aluno: '))
    p1.innerHTML = `<p>Calculando a média final do/a <mark>${nome}</mark></p>`
    p2.innerHTML = `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark></p>`;
    p3.innerHTML = `<p>A média final será <mark>${(primeiraNota + segundaNota) / 2}</mark></p>`
}

console.log(p3);