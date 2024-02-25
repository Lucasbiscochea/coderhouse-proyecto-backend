# Servicio Técnico de PC 💻🔧

¡Bienvenido al proyecto de Servicio Técnico de PC! 🛠️🎉

Este README servirá como un registro de mi progreso a lo largo del curso de backend de Coderhouse y del desarrollo de este proyecto. Mi objetivo principal es aplicar los conocimientos adquiridos en el curso para desarrollar una página web funcional que ofrezca servicios de asistencia técnica para computadoras. 🚀

A lo largo de este proyecto, exploraré diversas tecnologías y metodologías para crear una plataforma que no solo sea útil para los usuarios que buscan soluciones técnicas para sus computadoras, sino también como una oportunidad para poner en práctica mis habilidades de desarrollo de software. 💡

Utilizaré este README para documentar cada paso y desafío que aborde en el curso de Coderhouse, así como para compartir mis experiencias, los desafíos que enfrento y las soluciones que encuentro. Espero que este proyecto sea un viaje emocionante hacia el aprendizaje y la creación. 🌟

¡Gracias por acompañarme en esta aventura! 🙌🎈


## Desafío 1: Clases ECMAScript y ECMAScript Avanzado

### Objetivos

- Comprender el concepto de clases en ECMAScript y su sintaxis.
- Explorar las características avanzadas de ECMAScript, como métodos estáticos, getters y setters.
- Aplicar el uso de clases en la estructura y organización de nuestro proyecto de Servicio Técnico de PC.
### Consigna

✅ **Crear una clase `ProductManager` que gestione un conjunto de productos:**

- Debe inicializarse sin argumentos y tener un array interno `products` que empiece vacío.
- Cada producto debe tener las siguientes propiedades:
  - 🏷️ `title` (nombre del producto)
  - 📝 `description` (descripción del producto)
  - 💰 `price` (precio)
  - 🖼️ `thumbnail` (ruta de imagen - URL)
  - 🔢 `code` (código identificador, letras y números)
  - ⚖️ `stock` (número de productos disponibles)

✅ **Método `addProduct`:**

- Agrega un producto al array de productos.
- Valida que no se repita el campo `code` y que todos los campos sean obligatorios.
- Muestra un error por consola si las validaciones fallan.
- Genera un ID autoincrementable para cada producto.

✅ **Método `getProducts`:**

- Devuelve el array con todos los productos creados hasta el momento.

✅ **Método `getProductById`:**

- Busca en el arreglo el producto que coincida con el ID indicado como parámetro.
- Muestra un error "Not found" en consola si ningún ID coincide.

### Formato del entregable

✅ Archivo de JavaScript listo para ejecutarse desde Node.js.
