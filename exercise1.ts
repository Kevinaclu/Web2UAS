const rectangulo = { altura: 10, anchura: 15 };
const area = rectangulo.altura * rectangulo.anchura;

function saludar(nombre: string) {
  return `Hola ${nombre}`;
}

console.log(saludar("Kevin"));

let esVerdadero = true;
console.log(esVerdadero);

let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

let marca: string = "toyota";
let modelo: string = "tacoma";

let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre},
Apellido: ${apellido}
`;

let listaDeNumeros: number[] = [1, 2, 3];
// let listaDeNumeros: Array<number> = [1, 2, 3];
// listaDeNumeros.push("a");

let futbolista: [string, number];
futbolista = ["Raul Jimenez", 28];
const [nombreFutbolista, edad] = futbolista;
console.log(`El nombre es ${nombreFutbolista}`);
console.log(`Su edad es ${edad}`);
