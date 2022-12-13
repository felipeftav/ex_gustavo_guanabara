let section = document.querySelector(".section");

function clicou1() {
  section.innerHTML += `<p>Clicou no primeiro botão!</p>`;
}

function clicou2() {
  section.innerHTML += `<p>Clicou no segundo botão!</p>`;
}

function clicou3() {
  section.innerHTML += `<p>Clicou no terceiro botão!</p>`;
}

function clicou4() {
  section.innerHTML += `<p>Clicou no quarto botão!</p>`;
}

function resetar() {
  section.innerHTML = `<p></p>`;
}
