function crear(o) { }
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
// false es un boolean, un tipo primitivo, por lo cual se genera un error
// crear(false);
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId("abc");
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else if (typeof id === "number") {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId2("super_id_largo");
imprimirId2(100.232323232323234);
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
