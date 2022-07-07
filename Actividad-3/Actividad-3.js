//Ejercicio 1 
var edad= Number(prompt("Ingresa la Edad"));
let nombre;

if (edad >= 18 )
{   
    console.log("Puede ingresar al la discoteca")
    nombre = prompt("Ingresa  en un nombre");
    switch (nombre) {
        case 'mario':
        case 'carlos':
            console.log("Puede ingresar al area VIP")
          break;
        default:
            console.log("Pero No esta autorizado para entrar al area VIP")
          break;
    }
}
else
{
    console.log("No puede ingresar a la discoteca")
}

//Ejercicio 2
alert("Elige, piedra, papel o tijera");
var Jugador1= prompt("jugador 1 Ingresa su opcion: ");
var Jugador2= prompt("jugador 2 Ingresa su opcion: ");

console.log("jugador 1 eligio : " + Jugador1)
console.log("jugador 2 eligio : " + Jugador2)
if(Jugador1 != Jugador2)
{   
    if(Jugador1 == 'piedra')
    {
        Jugador2 == 'papel'  ? (console.log("jugador 2 gana (papel envuelve a piedra)")):(console.log("jugador 1 gana (piedra rompe tijeras)"))
    }
    else if(Jugador1 == 'papel')
    {
        Jugador2 == 'piedra'  ? (console.log("jugador 1 gana (papel envuelve a piedra)")):(console.log("jugador 2 gana (tijera corta papel)"))
    }
    else
    {
        Jugador2 == 'piedra'  ? (console.log("jugador 2 gana (piedra rompe a tijeras)")):(console.log("jugador 1 gana (tijera corta papel )"))
    }

}
else
{
    console.log("Empate")
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 3 - numero divisible entre 2
var x = Number(prompt("Introduce un numero"));

if (x % 2 == 0) {
  console.log("El número " + x + " es divisible entre 2");
} else {
  console.log("El número " + x + " NO es divisible entre 2");
}

//Ejercicio 4  - Numero Par
var x = Number(prompt("Introduce un numero"));

if (x % 2 == 0) {
  alert("El número " + x + " es par");
} else {
  alert("El número " + x + " NO es par");
}

//Ejercicio 5 - premio 1000
var numero = Number(prompt("Elige un numero"));

if (numero === 1000) {
  console.log("Ganaste un premio");
} else {
  console.log(numero + ". Lo sentimos, sigue participando");
}


//Ejercicio 6 - Comparar numero menos a otro
var x = Number(prompt("Introduce un numero"));
var y = Number(prompt("Introduce otro numero"));

if (x < y) {
  console.log(x + " es menor que " + y);
} else if (y < x) {
  console.log(y + " es menor que " + x);
}
else
{
    console.log("Son iguales");
}


//Ejercicio 7 - Comparar mayor de tres numeros
var x = Number(prompt("Introduce un numero"));
var y = Number(prompt("Introduce otro numero"));
var z = Number(prompt("Introduce otro numero mas"));

var mayor = Math.max(x, y, z);
console.log("El numero mayor es  " + mayor);

if(mayor == x && mayor == y && mayor == z)
{
    console.log("Los tres numeros son iguales");
}
else{

    if(x == y )
    {
        console.log(x +" es el primer numero  y es igual al segundo  "+ y)
    }
    else if(x == z)
    {
        console.log(x +" es el primer numero  y es igual al tercero  "+ z)
    }
    else if (y == z)
    {
        console.log(y +" es el segundo numero  y es igual al tercero  "+ z)
    }
 
}




