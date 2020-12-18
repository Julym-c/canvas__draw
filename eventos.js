document.addEventListener("keyup", dibujarTeclado);

var draw = document.getElementById("dibujar") ; // guardar el canvas
var papel = draw.getContext("2d"); // donde el canvas va a obtener el panel
var teclas = { // practica interna para escribir # o variables es escribirlas en mayusculas si no vana acmabiar su valor
    UP: 38, 
    DOWN: 40, 
    LEFT: 37, 
    RIGHT: 39
}; 

var estado;
var x = 150;
var y = 150; 

draw.addEventListener("mousedown", pressMouse); //cuando presionas click
draw.addEventListener("mousemove", drawMouse); //cuando mueves el mouse
draw.addEventListener("mouseup", releaseMouse); //cuando sueltas click

drawLine ("palevioletred", x-1, y-1, x+1, y+1, papel); // punto inicial
// marco de el canvas
drawLine("pink", 1, 1, 1, 299, papel);
drawLine("pink", 1, 299, 299, 299, papel);
drawLine("pink", 299, 1, 1, 1, papel);
drawLine("pink", 299, 299, 299, 1, papel);

function drawLine(color, xInicial, yInicial, xFinal, yFinal, panel) {
    panel.strokeStyle = color;
    panel.lineWidth = 2;
    panel.moveTo(xInicial, yInicial);
    panel.lineTo(xFinal, yFinal);
    panel.stroke();
    panel.closePath();
};

function dibujarTeclado(evento) {
    let colorLine = "palevioletred"; // color del trazo
    let move = 2;// moviento en el canvas
    switch (evento.keyCode){
        case teclas.UP:
            drawLine(colorLine, x, y, x, y - move, papel);
            y = y - 10;
        break;

        case teclas.DOWN:
            drawLine(colorLine, x, y, x, y + move, papel);
            y = y + 10;
        break;

        case teclas.LEFT:
            drawLine(colorLine, x, y, x - move, y, papel);
            x = x - 10;
        break;

        case teclas.RIGHT:
            drawLine(colorLine, x, y, x + move, y, papel);
            x = x+10;
        break;
    };
};

function pressMouse(evento) {
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
};

function drawMouse(evento) {
    let colorMouse = "palevioletred";
    if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    drawLine (colorMouse, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
};

function releaseMouse(evento) {
    estado = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
};