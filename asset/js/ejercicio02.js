// Decaracion de variables
let nota1, nota2, nota3, promedio;

// ingresar datos
nota1 = prompt("Ingresa la nota 1: ");
nota2 = prompt("Ingresa la nota 2:  ");
nota3 = prompt("Ingresa la nota 3: ");

// Transformar vartiables en tipo int
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
// proceso 
promedio =  nota1 + nota2 + nota3 / 3;

// imprimir 
alert("El promedio es: " + promedio);
