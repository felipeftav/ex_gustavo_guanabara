alert("Seja bem vindo ao meu site / desafio realizado!");

const resultado = document.querySelector(".resultado");

function clicado() {
  let num = Number(prompt("Insira um número: "));
  return (resultado.innerHTML = `<p>O dobro de ${num} é ${num * 2} e a
  metade é ${num / 2}!</p>`);
}
