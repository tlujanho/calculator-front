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

async function enviarChat() {
  const mensaje = document.getElementById("mensajeChat").value;
  const respuestaChat = document.getElementById("respuestaChat");

  if (!mensaje.trim()) {
    respuestaChat.textContent = "Escribe un mensaje.";
    return;
  }

  respuestaChat.textContent = "Procesando...";

  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mensaje })
  });

  const data = await response.json();

  console.log("Respuesta del backend:", data);

  if (data.url_descarga) {
    respuestaChat.innerHTML = `
      <p>${data.respuesta}</p>
      <p><strong>Tema:</strong> ${data.tema || ""}</p>
      <p><strong>Documento sugerido:</strong> ${data.documento_sugerido}</p>
      <a href="${data.url_descarga}" target="_blank" download="${data.documento_sugerido}">
        Descargar ${data.documento_sugerido}
      </a>
    `;
  } else {
    respuestaChat.textContent = data.respuesta;
  }
}
