document.getElementById("calcular").addEventListener("click", function() {
  const inputValor = document.getElementById("numero").value;
  const divMensaje = document.getElementById("mensaje");
  const numeroParsed = Number(inputValor);

  divMensaje.classList.remove("error", "exito");

  if (inputValor.trim() === "" || isNaN(numeroParsed) || numeroParsed < 0 || !Number.isInteger(numeroParsed)) {
    divMensaje.textContent = "Ingresa un valor numerico.";
    divMensaje.classList.add("error");
    document.getElementById("numero").value = "";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= numeroParsed; i++) {
    factorial *= i;
  }

  divMensaje.innerHTML = "Entrada: " + numeroParsed + " <br> Salida: " + factorial;
  divMensaje.classList.add("exito");
});