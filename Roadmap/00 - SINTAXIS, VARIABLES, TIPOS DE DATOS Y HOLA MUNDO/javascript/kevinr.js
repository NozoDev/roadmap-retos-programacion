/*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

//Hola he elegido JavaScript, pero no tiene documentacion oficial la que mas se le acerca Es
// https://es.javascript.info/, https://developer.mozilla.org/es/docs/Web/JavaScript

/**Syntaxis de jasvascript varias lineas */

let name = "Kevin";
const apellido = "Rojas";
const lenguaje = "JavaScript";

//Tipos de datos primitivos

let str = "Cadena";
let numero = 1995;
const bigNumber = 1234567890123456789012345678901234567890n;
const isTrue = true;
const isFalse = false;

let x;
console.log(x); // Output: undefined

/**Symbol: Es un tipo de dato que se utiliza para crear identificadores únicos. */
const mySymbol = Symbol("description");
const obj = {
  [mySymbol]: "value",
};

console.log("Hola", lenguaje);
