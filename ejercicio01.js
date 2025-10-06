// Decaracion de variables
let altura, base, area, perimetro ;

// ingresar datos
altura = prompt("Ingresa la altura: ");
base = prompt("Ingresa la base: ");

// Transformar vartiables en tipo Float
altura = parseFloat(altura);
base = parseFloat(base);

// proceso 
area = altura * base;
perimetro = (altura * altura) + (base * base);

// imprimir 
alert("El area es: " + area);
alert("El perimetro es: " + perimetro)