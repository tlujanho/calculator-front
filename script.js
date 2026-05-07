const API_URL = "https://calc001-e7dndfc2hgc8bjeu.westus3-01.azurewebsites.net";

async function calcular(operacion) {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  const response = await fetch(`${API_URL}/${operacion}?a=${a}&b=${b}`);
  const data = await response.json();

  document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
}

async function calcularRaiz() {
  const a = document.getElementById("x").value;

  const response = await fetch(`${API_URL}/raiz?a=${a}`);
  const data = await response.json();

  document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
}

async function calcularFactorial() {
  const a = document.getElementById("y").value;

  const response = await fetch(`${API_URL}/factorial?n=${a}`);
  const data = await response.json();

  document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
}