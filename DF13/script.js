const resultado = document.querySelector(".container");

function clicado() {
  let n1 = Number(prompt("Escolha um número: "));
  let n2 = Number(prompt("Escolha outro número: "));

  if (n1 == n2) {
    resultado.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, os valores são IGUAIS!</p>`;
  } else if (n1 > n2) {
    resultado.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é ${n1}</p>`;
  } else if (n1 < n2) {
    resultado.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é ${n2}</p>`;
  }
}
