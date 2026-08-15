// MEMORIA: Variables y constantes.
let dinero;
const COLOR_MOCHILA = `black`;

// LISTAS
let colores = ["rojo", "verde", "azul"];

console.log(20);
console.log("rosa");
console.log(colores);
console.log(colores[2]);
// opt + shift + arrowDown

// OBJETOS.
let computadora = {
    tipo: "dispositivo",
    tamaño: "grande",
    resolucion: 4320,
    encender: function() {
        console.log("encendiendo computadora.");
        console.log("inicializando sistemas.");
        console.log("preparando imágenes.");
    },
    buscar: function() {
        console.log("buscando...");
    }
};

computadora.utilidad = "práctica";
computadora.resolucion = 1080;

computadora.encender();
console.log(computadora.encender);

// FUNCIONES.
function mezclar(ingrediente1, ingrediente2) {
    console.log(ingrediente1);
    console.log("mezclando ingredientes:" + ingrediente1 + " y " + ingrediente2);
};

mezclar("queso", "pan");
mezclar("lechuga", "tocino");

