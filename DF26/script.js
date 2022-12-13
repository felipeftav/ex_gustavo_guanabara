function contagem() {
  let saida = document.querySelector("#saida");
  let num1 = Number(document.querySelector("#fnum1").value);
  let num2 = Number(document.querySelector("#fnum2").value);

  saida.innerHTML += `<h2>Contando de ${num1} até ${num2}</h2>`;

  if (num1 > num2) {
    let cont = num1;
    while (cont >= num2) {
      saida.innerHTML += ` ${cont} 👉`;
      cont--;
    }
  } else if (num1 < num2) {
    let cont = num1;
    while (cont <= num2) {
      saida.innerHTML += ` ${cont} 👉`;
      cont++;
    }
  }
  saida.innerHTML += ` 🏁`;
}
