
function generarCarta() {
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let palos = ["♥", "♠", "♦", "♣"];
  
  let valor = valores[Math.floor(Math.random() * valores.length)];
  let palo = palos[Math.floor(Math.random() * palos.length)];

  const arriba = document.getElementById("palo-arriba");
  const abajo = document.getElementById("palo-abajo");
  const numero = document.getElementById("numero-carta");

  arriba.innerHTML = palo;
  numero.innerHTML = valor;
  abajo.innerHTML = palo;

  const esRojo = palo === "♥" || palo === "♦";
  const color = esRojo ? "red" : "black";

  arriba.style.color = color;
  abajo.style.color = color;
  numero.style.color = color;
}

window.onload = generarCarta;
