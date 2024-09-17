"use strict";
// Ejercicio 2
console.log("Ejercicio 2: Corriendo desde Typescript");
// Ejercicio 3
let texto = "Hola, Typescript!";
let numero = 123;
let booleano = true;
let fecha = new Date(2024, 9, 8);
// Mostrar en HTML
document.getElementById('texto').innerText = `Texto: ${texto}`;
document.getElementById('numero').innerText = `Número: ${numero}`;
document.getElementById('booleano').innerText = `Booleano: ${booleano}`;
// Formatear la fecha en formato "dd/mm/yyyy"
let dia = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let fechaFormateada = `${dia}/${mes}/${año}`;
document.getElementById('fecha').innerText = `Fecha: ${fechaFormateada}`;
// Ejercicio 4
const convertirNumeroATexto = (num) => {
    return num.toString();
};
let numConvertido = convertirNumeroATexto(numero);
// Mostrar en HTML
document.getElementById("numAString").innerText = `Número convertido a cadena: ${numConvertido}`;
// Ejercicio 5
let arrayNumeros = [1, 2, 3, 4, 5];
const sumarElementosArray = (arreglo) => {
    let suma = 0;
    arreglo.forEach(elemento => {
        suma += elemento;
    });
    return suma;
};
// Mostrar en HTML
document.getElementById("sumaArray").innerText = `Suma del array: ${sumarElementosArray(arrayNumeros)}`;
// Ejercicio 6
let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemática"
};
// Mostrar en HTML
document.getElementById("objetoEstudiante").innerText = `Estudiante: ${estudiante.nombre} \nEdad: ${estudiante.edad} \nCurso: ${estudiante.curso}`;
let direccion = {
    calle: "San Martin",
    ciudad: "Mendoza",
    codigoPostal: 5500
};
// Mostrar en HTML
document.getElementById("miDireccion").innerText = `Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, Código Postal: ${direccion.codigoPostal}`;
const usuario = {
    nombre: "Juan Pérez",
    correo: "juan.perez@gmail.com",
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
// Mostrar en HTML
document.getElementById("usuarioInterfaz").innerText = usuario.saludar();
// Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentacion() {
        return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
const persona = new Persona("Carlos", 30);
// Mostrar en HTML
document.getElementById("clasePersona").innerText = persona.presentacion();
// Ejercicio 10
class Caja {
    constructor(valorGenerico) {
        this.valorGenerico = valorGenerico;
    }
    getValorGenerico() {
        return this.valorGenerico;
    }
    obtenerTipo() {
        return typeof this.valorGenerico;
    }
}
const cajaDeNumero = new Caja(42);
const cajaDeTexto = new Caja("Mensaje secreto");
console.log("Tipo number: " + cajaDeNumero.obtenerTipo());
console.log("Tipo string: " + cajaDeTexto.obtenerTipo());
// Mostrar en HTML
document.getElementById("cajaNumerica").innerText = `Contenido de cajaDeNumero: ${cajaDeNumero.getValorGenerico()}`;
document.getElementById("cajaTexto").innerText = `Contenido de cajaDeTexto: ${cajaDeTexto.getValorGenerico()}`;
// Ejercicio 11
function identidad(valor) {
    return valor;
}
let numeros = identidad(123);
let cadena = identidad("texto");
// Mostrar en HTML
document.getElementById("funcionNumerica").innerText = `Identidad del número: ${numeros}`;
document.getElementById("funcionTexto").innerText = `Identidad del texto: ${cadena}`;
// Ejercicio 12
var Color;
(function (Color) {
    Color["Rosado"] = "Rosado";
    Color["Azul"] = "Azul";
    Color["Amarillo"] = "Amarillo";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
// Mostrar en HTML
document.getElementById("colores").innerText = `Color favorito: ${colorFavorito}`;
