function saludar3(nombre: string) {
  console.log(`Hola ${nombre}`);
}

saludar3("Gael");

function elevarAlCuadrado(base: number): number {
  return base ** 2;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
  console.log(s.toUpperCase());
});

nombres.forEach((s) => {
  console.log(s.toUpperCase());
});

type Punto = {
  x: number;
  y: number;
};

function imprimirCoordenada({ x, y }: Punto) {
  console.log(`La coordenada x es : ${x}`);
  console.log(`La coordenada y es : ${y}`);
}

imprimirCoordenada({ x: 10, y: 25 });

function imprimirEtiqueta(etiqueta: { label: string }) {
  console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);

interface Etiqueta {
  label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
  console.log(etiqueta.label);
}

imprimirEtiqueta2(miEtiqueta);

interface Cuadrado {
  color?: string;
  ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
  const area = cuadrado.ancho ** 2;
  return { area };
}

crearCuadrado({ ancho: 10 });

interface Punto2 {
  readonly x: number;
  readonly y: number;
}

let punto1: Punto2 = { x: 10, y: 20 };
// punto1.x = 20; // Marca error

interface Transporte {
  nombre: string;
}

type Figura = {
  nombre: string;
};

interface Auto extends Transporte {
  ruedas: number;
}

type Cuadrado2 = Figura & {
  lados: 4;
};

function imprimir(estadoCivil: "soltero" | "casado") {
  console.log(estadoCivil);
}

imprimir("soltero");
// imprimir("divorciado"); // Marca error

function saludar4(fn: (a: string) => void) {
  fn("Hola Mundo");
}

function imprimirEnConsola(s: string) {
  console.log(s);
}

saludar4(imprimirEnConsola);
