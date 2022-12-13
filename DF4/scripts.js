function clicado(){
    const nome = prompt('Qual é o seu nome');
    return document.body.innerHTML += `<p>Olá, ${nome}! É um grande prazer te conhecer! 🖖</p>`;
}