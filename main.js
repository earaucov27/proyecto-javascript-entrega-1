// Declaración de variables y objetos
const personas = [];
let contadorPersonas = 0;
let sumaEdades = 0;

// Función para calcular el IMC
function calcularIMC(peso, altura) {
  const alturaEnMetros = altura / 100;
  return peso / (alturaEnMetros * alturaEnMetros);
}

// Captura de datos y cálculo del IMC
while (true) {
  const nombre = prompt("Ingrese el nombre (o escriba 'fin' para salir):");
  if (nombre.toLowerCase() === "fin") {
    break; // Salir del bucle si se ingresa "fin"
  }

  const apellido = prompt("Ingrese el apellido:");
  const edad = parseInt(prompt("Ingrese la edad:"));
  const peso = parseFloat(prompt("Ingrese el peso en kilogramos:"));
  const altura = parseFloat(prompt("Ingrese la altura en centímetros:"));

  const imc = calcularIMC(peso, altura);

  personas.push({
    nombre,
    apellido,
    edad,
    imc,
  });

  contadorPersonas++;
  sumaEdades += edad;
}

// Calcular el promedio de edad
const promedioEdad = sumaEdades / contadorPersonas;

// Mostrar los resultados
console.log("Personas ingresadas:", contadorPersonas);
console.log("Promedio de edad:", promedioEdad);

// Mostrar información de cada persona
personas.forEach((persona, index) => {
  console.log(`Persona ${index + 1}:`);
  console.log(`Nombre: ${persona.nombre} ${persona.apellido}`);
  console.log(`Edad: ${persona.edad} años`);
  console.log(`IMC: ${persona.imc.toFixed(2)}`); // Mostrar el IMC con dos decimales
  console.log("-----------------------");
});