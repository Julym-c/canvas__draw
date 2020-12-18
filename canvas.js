var texto = document.getElementById("texto__lineas"); // añadir un elemento del html
var boton = document.getElementById("boton__click");
boton.addEventListener("click", dibujoClick); // añadir un evento al boton

var canvas = document.getElementById("dibujo") ; // guardar el canvas
var lienzo = canvas.getContext("2d"); // donde el canvas va a obtener el lienzo
var ancho = canvas.width;

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
};

function dibujoClick() {
    let lineas = parseInt(texto.value);// esta es para delimitar el ciclo
    let inicial = 0;
    let yi, xf, yf, xi;
    let colorLinea = "pink";
    let espacio = ancho / lineas;

    for (inicial = 0; inicial < lineas; inicial++) {
        puntoA = 0;
        puntoB = 300;
        yi = espacio * inicial;
        xf = espacio * (inicial + 1);
        yf = 300 - yi;
        xi = 300 - xf ;
        dibujarLinea(colorLinea, puntoA, yi, xf, puntoB);
        dibujarLinea("orange", yi, puntoB, puntoB, xi);
        dibujarLinea(colorLinea, puntoB, yf, xi, puntoA);
        dibujarLinea("orange", yf, puntoA, puntoA, xf);
    };

    dibujarLinea(colorLinea, 1, 1, 1, 299);
    dibujarLinea(colorLinea, 1, 299, 299, 299);
    dibujarLinea(colorLinea, 299, 1, 1, 1);
    dibujarLinea(colorLinea, 299, 299, 299, 1);
};

/*
while (inicial < lineas) { // así se empieza un ciclo, mientras algo sea verdad ocurre un ciclo
    yi = 10 * inicial;
    xf = 10 * (inicial + 1);
    dibujarLinea(colorLinea, 0, yi, xf, 300);

};
*/







