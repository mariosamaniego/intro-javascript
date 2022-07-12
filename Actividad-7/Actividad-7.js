//Ejercicio 1 Buscar una palabra en oracion
let buscaPalabra = (oracion, palabra) => {
    return oracion.includes(palabra);
  };
buscaPalabra("un perro en la calle", "perro")

  
//Ejercicio 2 suma de elementos de un arreglo
var numbers = [1, 2, 3, 4, 10, 11];

let sumaArreglo = (array) => {
  let resultado = 0;
  
  for (let i = 0; i < array.length; i++) {
    resultado += array[i];
  }
  return resultado;
};
sumaArreglo(numbers)


//Ejercicio 3  Palindromo 
let Palindromo = (palabra) => {
    if (palabra === palabra.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  };
console.log(Palindromo("madam"));
console.log(Palindromo("computadora"));


//Ejercicio 4 Contar letras en una cadena
function cuentaletras(cadena,letra){
    
    let contador=[]
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index].toLowerCase() === letra) contador.push(cadena[index].toLowerCase());
    }
    return contador.length
}

cuentaletras("desembebecerse el rey", "e")



//Ejercicio 5 imprimir el numero mayor del arreglo
let arr = [45,56,32,98,1000,5,23];
let numeroMayor = funNumeroMayor(arr);
console.log(numeroMayor)

function funNumeroMayor(arreglo){
    arreglo.sort(function(a,b){return a-b});
    return arreglo[arreglo.length-1];
}



//Ejercicio 6 convertidor de grados a celcius o farenheit 
let convertirTemperatura = (temperatura, grados) => {
    let resultado;
    switch (grados) {
        case "F":
        resultado = (temperatura - 32) / 1.8;
        console.log(temperatura + " grados F  = " +resultado +" grados C"
        );
        break;
      case "C":
        resultado = temperatura * 1.8 + 32;
        console.log(
          temperatura + " grados C  = " + resultado + " grados F"
        );
        break;
      default:
        console.log("No es temperatura valida");
        break;
    }
  };
  
  convertirTemperatura(100, "F");
  convertirTemperatura(33, "C");
  convertirTemperatura(3, 4);