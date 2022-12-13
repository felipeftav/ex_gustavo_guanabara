function fatorial() {
  let entrada = Number(document.querySelector("#fnum").value);
  let saida = document.querySelector("#saida");

  saida.innerHTML = `<h2>Calculando a fatorial de ${entrada}!</h2>`;

  let cont = entrada; // 50
    let fat = 1;
    while (cont >= 2) {
      saida.innerHTML += `${cont} x `;
      fat *= cont; // Correspondente ao cálculo fat = fat * c
      cont--;
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString("pt-BR")}</strong>`;
}
