# Desafío Veterinaria – Node.js

## Descripción

Este proyecto corresponde al **Desafío Veterinaria** y tiene como objetivo aplicar los conceptos básicos de **Node.js**, específicamente:

* Uso de **Node desde la terminal**
* Manejo del **File System (fs)**
* Uso de **módulos (require / module.exports)**
* Lectura de **argumentos por línea de comando**
* Persistencia de datos en un archivo JSON

La aplicación permite **registrar citas veterinarias** y **leer todas las citas registradas**.

---

## Estructura del proyecto

```
veterinaria-js/
├─ index.js
├─ operaciones.js
└─ citas.json
```

---

## Descripción de archivos

### `citas.json`

Archivo que almacena las citas veterinarias.

* Debe iniciar como un arreglo vacío:

```json
[]
```

---

### `operaciones.js`

Contiene la lógica del negocio.

Funciones implementadas:

* **registrar(nombre, edad, tipo, color, enfermedad)**

  * Lee el archivo `citas.json`
  * Agrega una nueva cita con los datos recibidos
  * Guarda nuevamente el archivo actualizado

* **leer()**

  * Lee el archivo `citas.json`
  * Muestra todas las citas por consola

Este archivo exporta ambas funciones para ser utilizadas en `index.js`.

---

### `index.js`

Archivo principal del programa.

Responsabilidades:

* Capturar argumentos usando `process.argv`
* Determinar la operación a ejecutar (`registrar` o `leer`)
* Llamar a las funciones correspondientes desde `operaciones.js`

---

## Uso de la aplicación

### 1. Registrar una cita

Desde la terminal, en la carpeta del proyecto:

```bash
node index.js registrar Benito "2 años" perro blanco vomitos
```

**Orden de los argumentos:**

1. Operación: `registrar`
2. Nombre del animal
3. Edad
4. Tipo de animal
5. Color
6. Enfermedad

Ejemplo de salida:

```text
Cita registrada: {
  nombre: 'Benito',
  edad: '2 años',
  tipo: 'perro',
  color: 'blanco',
  enfermedad: 'vomitos'
}
```

---

### 2. Leer citas registradas

```bash
node index.js leer
```

Ejemplo de salida:

```text
Citas registradas:
[
  {
    nombre: 'Benito',
    edad: '2 años',
    tipo: 'perro',
    color: 'blanco',
    enfermedad: 'vomitos'
  }
]
```

---

## Validaciones implementadas

* No permite registrar una cita si faltan datos
* Muestra mensaje de error si la operación no es válida

---

## Checklist de cumplimiento del desafío

* [x] Uso de Node.js desde la terminal
* [x] Uso de `process.argv`
* [x] Lectura de archivos con `fs.readFileSync`
* [x] Escritura de archivos con `fs.writeFileSync`
* [x] Uso de módulos (`require` / `module.exports`)
* [x] Persistencia de datos en archivo JSON
* [x] Estructura solicitada por el enunciado

---

## Autor

**Daniel Aros Úbeda**

Desafío desarrollado como parte del aprendizaje de JavaScript y Node.js.
