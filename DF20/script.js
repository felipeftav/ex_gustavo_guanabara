const resultado = document.querySelector('.container');

function clicado () {
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let estação;

    switch (mês.toUpperCase()) {
        case 'MARÇO': case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'PRIMAVERA'
            break
        case 'JANEIRO': case 'FEVEREIRO':
            estação = 'VERÃO'
            break       
    }
    
    resultado.innerHTML = `<p>No mês de ${mês}, estamos na estação ${estação}.</p>`;
    console.log(estação);

}