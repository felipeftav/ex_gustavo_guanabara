let resultado = document.querySelector(".container");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dayOfTheWeek = date.toLocaleDateString("pt-BR", { weekday: "short" });
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function clicado() {
  resultado.innerHTML = `<p>Dia: <mark>${day}</mark></p>`;
  resultado.innerHTML += `<p>Mês: <mark>${month}</mark></p>`;
  resultado.innerHTML += `<p>Ano: <mark>${year}</mark></p>`;
  resultado.innerHTML += `<p>Dia da semana: <mark>${dayOfTheWeek}</mark></p>`;
  resultado.innerHTML += `<p>Hora: <mark>${hour}</mark></p>`;
  resultado.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`;
  resultado.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`;
}
