const resultado = document.querySelector('.container');

function pegarInput() {
    let nome = prompt('Nome do aluno: ');
    let primeiraNota = Number(prompt('Primeira nota do aluno: '));
    let segundaNota = Number(prompt('Segunda nota do aluno: '));
    let mediaResultado = (primeiraNota + segundaNota) / 2;
    
    resultado.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será <mark>${mediaResultado}</mark>.</p>`
    
    if (mediaResultado <= 5) {
        resultado.innerHTML += `<p>A mensagem que temos é: <b><font color="red">Estude um pouco mais!</font></b></p>`;
    } else if (mediaResultado >= 6) {
        resultado.innerHTML += `<p>A mensagem que temos é: <b><font color="green">Meus parabens!</font></b></p>`;
    }
}

// <font color="green">verde</font>.