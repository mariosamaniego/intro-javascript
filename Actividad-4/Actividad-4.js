//Ejercicio 2 Numeros de 5 en 5  While
var x = Number(prompt("Dame un numero"));
var y = 1;
while (y <= x) {
  if (y % 5 === 0) console.log(y);
  y++;
}


//Ejercicio 3 numeros 5 en 5 DoWhile
var x = Number(prompt("Dame un numero"));
var y = 1;
do {
  if (y % 5 === 0) console.log(y);
  y++;
} while (y <= x);


//Ejercicio 4 Numeros impares del 1 al 50
for (let index = 1; index <= 50; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
}



//Ejercicio 4 numeros del 1 al 100 exluyendo 10 numeros
var rangoMin = Number(prompt("Se excluiran 10 numeros a partir del numero que indique (1 -100)"));
var rangoMax= rangoMin + 10;

for (let index = 1; index <= 100; index++) {
    if (index > rangoMax  || index < rangoMin) {
      console.log(index);
    }
}