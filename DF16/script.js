const resultado = document.querySelector(".container");

function clicado() {
  let yearOfBirth = Number(prompt("Qual o ano do seu nascimento?"));
  const date = new Date();
  let yearAtual = date.getFullYear();
  let idade = yearAtual - yearOfBirth;

  resultado.innerHTML = `<p>Quem nasceu em ${yearOfBirth} vai completar <b>${idade}</b> anos em ${yearAtual}.</p>`;
}
