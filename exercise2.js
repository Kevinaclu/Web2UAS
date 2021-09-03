var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 100] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 102] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[100]);
var variablesSinTipo = "hola pedrito";
variablesSinTipo = 100;
var valorDesconocido = 4;
valorDesconocido = true;
function saludar2() {
    console.log("Hola Mundo... Cruel");
}
saludar2();
var variablesSinDefinir = undefined;
var variableNula = null;
// Esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
// Esta función no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
// Esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
