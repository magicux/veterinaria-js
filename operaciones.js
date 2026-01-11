// operaciones.js
const fs = require("fs");
const path = require("path");

// Ruta absoluta al archivo citas.json (evita problemas al ejecutar desde distintos directorios)
const RUTA_CITAS = path.join(__dirname, "citas.json");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  // 1) Leer el archivo citas.json
  const data = fs.readFileSync(RUTA_CITAS, "utf8");
  const citas = JSON.parse(data);

  // 2) Construir la nueva cita con los campos exigidos
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  // 3) Agregar la nueva cita al arreglo
  citas.push(nuevaCita);

  // 4) Persistir el arreglo actualizado en citas.json
  fs.writeFileSync(RUTA_CITAS, JSON.stringify(citas, null, 2), "utf8");

  console.log("Cita registrada:", nuevaCita);
};

const leer = () => {
  // 1) Leer el archivo citas.json
  const data = fs.readFileSync(RUTA_CITAS, "utf8");
  const citas = JSON.parse(data);

  // 2) Mostrar por consola todas las citas registradas
  console.log("Citas registradas:");
  console.log(citas);
};

module.exports = { registrar, leer };
