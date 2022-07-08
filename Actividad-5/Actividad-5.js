//Ejercicio 1 Imprimir valores mayores a 3 
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 3) console.log(arreglo[i]);
}


//Ejercicio 2  Ejecutar el ciclo 5 veces agregando valores
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
var arregloDos = [];
var contador = 0;

while (contador < 5) {
  arregloDos[contador] = arreglo[contador];
  contador++;
}
console.log(arregloDos);



//Ejercicio 3 Interar el arreglo e imprimirlo ordenado
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
var arreglodos = [];
for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i]){
        console.log(arreglo[i]);
        
        arreglodos.push(arreglo[i])
    } 

}
console.log("El arreglo de forma ordenada seria: " + arreglodos.sort(function(a,b){return a-b}));
//iterado
for (var i = 0; i < arreglodos.length; i++) {
    if (arreglodos[i]){
        console.log(arreglodos[i]);
    } 

}