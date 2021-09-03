enum MarcasDeAutos {
  // Toyota, Empezará en 0
  Toyota = 100,
  Chevrolet,
  Ford,
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;

console.log(tacoma);
console.log(MarcasDeAutos[100]);
// console.log(MarcasDeAutos[0]);

let variablesSinTipo: any = "hola pedrito";
variablesSinTipo = 100;

let valorDesconocido: unknown = 4;
valorDesconocido = true;

function saludar2(): void {
  console.log("Hola Mundo... Cruel");
}

saludar2();

let variablesSinDefinir: undefined = undefined;
let variableNula: null = null;

// Esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
  throw new Error(mensaje);
}

// Esta función no tiene un punto final ya que dispara un error
function fallo(): never {
  return error("Reportar fallo");
}

// Esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
  while (true) {}
}
