function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Gael");
function elevarAlCuadrado(base) {
    return Math.pow(base, 2);
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(_a) {
    var x = _a.x, y = _a.y;
    console.log("La coordenada x es : " + x);
    console.log("La coordenada y es : " + y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
imprimirEtiqueta2(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = Math.pow(cuadrado.ancho, 2);
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir("soltero");
// imprimir("divorciado"); // Marca error
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
