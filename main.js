document.addEventListener("DOMContentLoaded", function () {
  const tablaPersonas = document.getElementById("tablaPersonas");
  const contadorPersonas = document.getElementById("contadorPersonas");
  const promedioEdad = document.getElementById("promedioEdad");

  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const edadInput = document.getElementById("edad");
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const agregarPersonaBtn = document.getElementById("agregarPersona");

  const personas = [];

  function calcularIMC(peso, altura) {
      const alturaEnMetros = altura / 100;
      return peso / (alturaEnMetros * alturaEnMetros);
  }

  function actualizarTabla() {
      tablaPersonas.innerHTML = "";
      let sumaEdades = 0;

      for (let i = 0; i < personas.length; i++) {
          const persona = personas[i];

          const fila = document.createElement("tr");
          const nombre = document.createElement("td");
          const apellido = document.createElement("td");
          const edad = document.createElement("td");
          const imc = document.createElement("td");

          nombre.textContent = persona.nombre;
          apellido.textContent = persona.apellido;
          edad.textContent = persona.edad;
          imc.textContent = persona.imc.toFixed(2);

          fila.appendChild(nombre);
          fila.appendChild(apellido);
          fila.appendChild(edad);
          fila.appendChild(imc);

          tablaPersonas.appendChild(fila);

          sumaEdades += persona.edad;
      }

      contadorPersonas.textContent = personas.length;
      promedioEdad.textContent = (personas.length > 0) ? (sumaEdades / personas.length).toFixed(2) : 0;
  }

  agregarPersonaBtn.addEventListener("click", function () {
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const edad = parseInt(edadInput.value);
      const peso = parseFloat(pesoInput.value);
      const altura = parseFloat(alturaInput.value);

      if (nombre && apellido && !isNaN(edad) && !isNaN(peso) && !isNaN(altura)) {
          const imc = calcularIMC(peso, altura);
          const nuevaPersona = {
              nombre,
              apellido,
              edad,
              imc,
          };

          personas.push(nuevaPersona);
          actualizarTabla();

          nombreInput.value = "";
          apellidoInput.value = "";
          edadInput.value = "";
          pesoInput.value = "";
          alturaInput.value = "";
      } else {
          alert("Por favor, complete todos los campos con valores válidos.");
      }
  });
});
