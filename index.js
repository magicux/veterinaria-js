// index.js
const { registrar, leer } = require("./operaciones");

// Argumentos:
// node index.js registrar Benito "2 años" perro blanco vomitos
// node index.js leer
const [, , operacion, nombre, edad, tipo, color, enfermedad] = process.argv;

if (operacion === "registrar") {
  // Validación mínima para evitar registros incompletos
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log(
      'Faltan datos. Uso: node index.js registrar <nombre> "<edad>" <tipo> <color> <enfermedad>'
    );
  } else {
    registrar(nombre, edad, tipo, color, enfermedad);
  }
}

if (operacion === "leer") {
  leer();
}

if (operacion !== "registrar" && operacion !== "leer") {
  console.log('Operación no válida. Usa "registrar" o "leer".');
}
