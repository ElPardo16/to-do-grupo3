
//Ejercicio # 1 Variables---------------

//1.Has hecho una compra y sabes el precio del producto ysu ivaHaz un script que te calcule el precio total que vas apagar por tu compra.Te recuerdoque para calcular el total debes sumar al precio el resultadode multiplicasr precio por el iva y dividir por 100

/*let precio = 3000;
let iva = 19;
let resultado = (precio * iva)/100;
alert(precio + resultado);*/






//Ejercicio # 2------------------------
/*Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario. Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"*/

/*let nombre = prompt('Ingresa tu Nombre por favor');
let saludo = 'Hola ¿Como Estas?';
alert(saludo + nombre);*/






//Ejercicio # 3----------------------

/*En este ejercicio vas a pedir al usuario que teclee tres
números enteros
y el script mostrará como resultado el valor medio de
los tres.
Recuerda que la media de tres números se calcula
sumando los tres y dividiendo entre 3.*/

/*let num1 = parseInt(prompt('Para sacar la media de 3 numeros enteros, por favor ingrese el primer número'));

let num2 = parseInt(prompt('Ingrese el segundo número'));
let num3 = parseInt(prompt('Ingrese el tercer número'));

alert((num1 + num2 + num3) / 3);*/






//Ejercicio # 4-----------------------


/*Una tortilla de patatas lleva 200 gramos de patatas por
persona. Por cada kilo de patatas se necesitan 5
huevos y 300 gramos de cebolla.
Escribe un script que dado el número de comensales
calcule las cantidades de ingredientes necesaria*/

/*let personas = parseInt(prompt('Ingrese el número de comensales'));
let kilo = (200 * personas) + ' gr de papa, ';
let huevos = (personas * 1) + ' huevos y ';
let cebolla = (60 * personas) + ' gr de cebolla';

alert('Para '+ personas + ' Comensales se necesitan ' + kilo + huevos + cebolla);*/







//Ejercicio # 5---COONDICIONALES-------------
/*1.Se trata de escribir un script que diga si un número es par o es impar. Recordemos que un número es par si al dividirlo por 2
da como resto 0.*/

/*let num = parseInt(prompt('Para saber si tu número es par o impar ingresa el que desees consultar'));

if (num % 2 === 0){
    alert('Tu número consultado es par');
} else{
    alert('Tu número consultado es impar');
};*/





//Ejercicio # 6--------------------

/*2. Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda*/

/*let pedido = prompt('Bienvenido,  Le puedo ofrecer vino, cerveza, refresco, agua, etc ¿Qué desea pedir?');

if (pedido === 'vino' || pedido === 'cerveza'){
    alert('Por favor dirijase a la barra de bebidas');
}
else if (pedido === 'agua' || pedido === 'refresco'){
    alert('Por favor dirijase a la barra de comidas');

}
else{
    alert('Introduzca una opción válida');
};*/




//Ejercicio # 7--------------------

/*Vamos a convertir notas en niveles usando un if anidados. Notas menor de 5 suspenso, 5-6 aprobados, 7-8 notables, 9-10 sobresalientes*/

/*let nota = parseInt(prompt('¡Bienvenido estudiante! Por favor ingrese sus calificacion para consultar su nivel académico' ));


    if (nota < 5){
            alert('Tu nivel académico está en SUSPENSO, ¡Recomendación! te pongas al día con tus actividades y subas tus notas')
    }
    else if(nota === 5 || nota === 6 ){
            alert('Tu nivel académico es APROBADO, ¡Recomendación! Puedes seguir mejorando')
    }
    else if(nota === 7 || nota === 8 ){
            alert('Tu nivel académico es NOTABLE, ¡Recomendación! Puedes seguir mejorando')
    }
    else if(nota === 9 || nota === 10 ){
            alert('Tu nivel académico es SOBRESALIENTE, ¡Felicitaciones! Continúa así ')
    }
    else{
            alert('Ingresa una opción válida')
    }*/


//Ejercicio # 8 --------------CICLO FOR------------------

/*Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.*/

/*let letra = prompt('¡Bienvenido! ingrese una letra cualquiera por favor.')
let num = parseInt(prompt('Ahora puedes ingresar un número'))


for ( i = 0; i < num ; i++ ) {
    document.write (letra + "<br>" + "<br>");
}*/






//Ejercicio # 9--------------------
/*2.Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4*/

/*let num2 = 0;
let num1 = 0;

for ( num2 = 0; num2 < 5  ; num2++ ) {
  console.log(num1 + ':'+ num2);
    for ( num1 = 0;  num2 === 4 ; num1++ ) {
      if (num1 === 1){
        for ( num2 = 0; num2 < 5 ; num2++ ) {
          console.log(num1 + ':'+ num2);
    }
    }}
     
      }*/







//Ejercicio # 10---------------------

 //Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log//


/*var valorIngresado = parseInt(prompt('Ingresa por favor un número'));
var asteriscos = '';
var anchoAsteriscos ='';
var fila = '';

for (asteriscos = 0; asteriscos < valorIngresado; asteriscos++){ fila = '';
    for(anchoAsteriscos = 0; anchoAsteriscos <= asteriscos; anchoAsteriscos++){ 
        fila += '*';
    }
    console.log(fila + '\n');
}*/








//-------------ME pareció interesante como hacer una tabla de multiplicar
/*let base, contador, prefijjo, producto, msg='';
base = parseInt(prompt("Tabla del..."));
var prefijo = base + " X ";
for (contador = 1; contador <= 10; contador++)
{
producto = base*contador;
msg +=  prefijo + contador + " = " + producto + "\n";
}
console.log("Tabla del "+base +"\n"+msg)*/


//Ejercicio # 11------------------WHILE--------

/*1. Por ejemplo en este bucle vamos a generar una lista
con los 20 primeros números pares*/

/*let contador = 0;
while (contador < 20){
    console.log(contador +=2);
    
}*/


/* Un ejemplo típico de bucle es averiguar si un
número es primo, es decir, si solo es divisible po 1 y
por si mismo.*/


      
/*let num, divisor = 2, primo = " Si";
num = parseInt(prompt("Introduzca un número entero"));
while (divisor < num ){
    if( num % divisor == 0){
      primo = " No"
       break;
    }
   divisor++;
}
alert("El numero "+ num + primo + " es primo");*/

/*let letra ='';
do {
    letra= prompt('Teclea la letra A en mayuscula por favor')
} while (letra != 'A');
    alert('Excelente Gracias');*/

  /*  Crea una función que tenga dos argumentos: num1,num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos.*/
    

  /* let num1 = parseInt(prompt('Ingresa el primer número'));
   let num2 = parseInt(prompt('Ingresa el segundo número'));

  function suma(num1,num2){
    return (num1 + num2)
  }
  alert(suma(num1,num2));*/

 /* function total(precio, impto){
    var neto;
    if (precio > 100){
  	  	 	precio = precio - 10*precio/100;
    }
    neto = precio + precio*impto/100;
    return neto;
}
var gasto, imp;
gasto = parseInt(prompt('Precio total'));
imp = parseInt(prompt('Impuesto %'));
alert("El total  pagar es "+total(gasto, imp));*/

/*function siglo(año){
    var siglo = parseInt((año - 1)/100) + 1;
    return siglo;
 }
 var añoActual;
 añoActual = parseInt(prompt("Entrar año completo"));
 alert("Pertenece al siglo " + siglo(añoActual));*/


/*let dia= prompt('Para saber el día de la semana ingresa un número del 0 al 6');

let semana= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

alert('Elejiste el día ' + semana[dia]);*/

/*let letra = prompt('Ingrese una letra que quiera consultar en el arreglo')

let letrasArray = ['m','a','r','d','e','l','y','s'];


function buscar(letra){
    if (letrasArray.includes(letra)){
        alert('La letra ingresada '+letra+' sí esta en la lista')
    }else{
        alert('La letra ingresada '+letra+' no esta en la lista')
    }
}
buscar(letra);*/



var nombre = prompt('Bienvenido, ingresa tu nombre por favor');
var inglesprom = parseInt(prompt('Ingresa tu calificación en inglés'));
var programProm = parseInt(prompt('Ingresa tu calificación en programación'));
var htmlProm = parseInt(prompt('Ingresa tu calificación en programación'));

var calification = {
    nombre: nombre,
    ingles: inglesprom,
    programacion: programProm,
    html: htmlProm,
}

alert('Promedio de materias es ' + calification.nombre + 'es de ' + (calification.ingles + calification.programacion + calification.html)/3);



