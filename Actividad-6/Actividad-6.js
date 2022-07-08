//Ejercicio 1 Metodos de arreglos
var animals = ["eagle", "parrot", "monkey", "boar", "lion"];
var comingSoonAnimals = ["panter", "dragon", "turtle"];
//concatenar los arreglos
var newAnimals = animals.concat(comingSoonAnimals);
console.log("se imprime el arreglo de animales concatenados");
console.log(newAnimals);

//acomodar de menor a mayor
var arr = [4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101];
arr.sort(function (a, b) {
  return a - b;
});
console.log("se imprime el arreglo ordenado");
console.log(arr);

//agregar nuevo animal cow
animals.push("cow");
console.log("se agrego cow");
console.log(animals);

//retirar el animal eagle
animals.shift("eagle");
console.log("se retira eagle");
console.log(animals);

//se imprime el index de parrot
console.log("se muestra el index del parrot");
console.log(animals.indexOf("parrot"));


