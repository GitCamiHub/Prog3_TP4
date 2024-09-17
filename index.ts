
// Ejercicio 2
console.log("Ejercicio 2: Corriendo desde Typescript")

// Ejercicio 3
let texto: string = "Hola, Typescript!"
let numero: number = 123
let booleano: boolean = true
let fecha: Date = new Date(2024, 9, 8)

// Mostrar en HTML
document.getElementById('texto')!.innerText = `Texto: ${texto}`;
document.getElementById('numero')!.innerText = `Número: ${numero}`;
document.getElementById('booleano')!.innerText = `Booleano: ${booleano}`;

// Formatear la fecha en formato "dd/mm/yyyy"
let dia: number = fecha.getDate();
let mes: number = fecha.getMonth();
let año: number = fecha.getFullYear();
let fechaFormateada: string = `${dia}/${mes}/${año}`;

document.getElementById('fecha')!.innerText = `Fecha: ${fechaFormateada}`;

// Ejercicio 4
const convertirNumeroATexto = (num: number) => {
    return num.toString()
}

let numConvertido: string = convertirNumeroATexto(numero)

// Mostrar en HTML
document.getElementById("numAString")!.innerText = `Número convertido a cadena: ${numConvertido}`

// Ejercicio 5
let arrayNumeros: number[] = [1, 2, 3, 4, 5]

const sumarElementosArray = (arreglo: number[]) => {
    let suma: number = 0
    arreglo.forEach(elemento => {
        suma += elemento
    });
    return suma
}

// Mostrar en HTML
document.getElementById("sumaArray")!.innerText = `Suma del array: ${sumarElementosArray(arrayNumeros)}`

// Ejercicio 6
let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemática"
}

// Mostrar en HTML
document.getElementById("objetoEstudiante")!.innerText = `Estudiante: ${estudiante.nombre} \nEdad: ${estudiante.edad} \nCurso: ${estudiante.curso}`

// Ejercicio 7
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}

let direccion: Direccion = {
    calle: "San Martin",
    ciudad: "Mendoza",
    codigoPostal: 5500
}

// Mostrar en HTML
document.getElementById("miDireccion")!.innerText = `Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, Código Postal: ${direccion.codigoPostal}`

// Ejercicio 8
interface Usuario {
    nombre: string,
    correo: string,
    saludar(): string
}

const usuario: Usuario = {
    nombre: "Juan Pérez",
    correo: "juan.perez@gmail.com",
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}

// Mostrar en HTML
document.getElementById("usuarioInterfaz")!.innerText = usuario.saludar()

// Ejercicio 9
class Persona {
    nombre?: string;
    edad?: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;

    }

    presentacion() {
        return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

}

const persona = new Persona("Carlos", 30);

// Mostrar en HTML
document.getElementById("clasePersona")!.innerText = persona.presentacion();

// Ejercicio 10
class Caja<T> {
    private valorGenerico?: T;

    constructor(valorGenerico: T) {
        this.valorGenerico = valorGenerico;
    }

    getValorGenerico() {
        return this.valorGenerico;
    }

    obtenerTipo(): string {
        return typeof this.valorGenerico;
    }
}

const cajaDeNumero = new Caja<number>(42);
const cajaDeTexto = new Caja<string>("Mensaje secreto");

console.log("Tipo number: " + cajaDeNumero.obtenerTipo())
console.log("Tipo string: " + cajaDeTexto.obtenerTipo())

// Mostrar en HTML
document.getElementById("cajaNumerica")!.innerText = `Contenido de cajaDeNumero: ${cajaDeNumero.getValorGenerico()}`;
document.getElementById("cajaTexto")!.innerText = `Contenido de cajaDeTexto: ${cajaDeTexto.getValorGenerico()}`;

// Ejercicio 11
function identidad<T>(valor: T): T {
    return valor;
}

let numeros = identidad(123);
let cadena = identidad("texto");

// Mostrar en HTML
document.getElementById("funcionNumerica")!.innerText = `Identidad del número: ${numeros}`;
document.getElementById("funcionTexto")!.innerText = `Identidad del texto: ${cadena}`;

// Ejercicio 12
enum Color {
    Rosado = "Rosado",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

const colorFavorito: Color = Color.Azul;

// Mostrar en HTML
document.getElementById("colores")!.innerText = `Color favorito: ${colorFavorito}`;



