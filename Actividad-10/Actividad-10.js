//Problema 1 familiar mas joven, y mas viejo y que diferencia de edad tienen
const Family = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jeniffer",
      age: 65,
    },
  ];

Family.sort(function (a, b) {
    return a.age - b.age;
  });
  
  console.log("El familiar mas joven es " + Family[0].name +",tiene " + Family[0].age + " años");
  console.log("El familiar mas grande es " +Family[Family.length - 1].name + ", tiene " +  Family[Family.length - 1].age +" years old.");
  console.log("La diferencia de edad es de  " +(Number(Family[Family.length - 1].age) - Number(Family[0].age)));



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Problema 2 la suma de todos los positivos
const numbers = [ 1, -4, 12, 0, -3, 29, -150];

let suma = 0;
numbers.forEach((x) => {
  if (x > 0) {
    suma += x;
  }
});

console.log(suma);



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//problema 3 las ocurrencias de cada elemento
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

  function crearObjeto(arr){
    let objeto = {};
    arr.forEach(element => {
        element.forEach(x => {
            if(objeto.hasOwnProperty(x)){
                objeto[x]++;
            }else{
                objeto[x] = 1;
            }
        });
    });

    return objeto;
}

console.log(crearObjeto(input));






/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Problema 4 numero bajo y alto 
const arr = [3,4,6,1,5,2,9,10,23,12];

const arr2 = arr.sort((a,b) => a-b);
console.log(arr2);
console.log(`Segundo numero mas bajo ${arr2[1]} , segundo numero mayor: ${arr2[arr2.length-2]}`);



/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Problema 5 calificaciones de estudiantes
let info = [
  {
      nombre: "Diego",
      materias: [
          {
              nombreMateria: "español",
              calificacion: 100
          },
          {
              nombreMateria: "matemáticas",
              calificacion: 70
          },
          {
              nombreMateria: "ciencias",
              calificacion: 55
          }
      ]
  },
  {
      nombre: "Jorge",
      materias: [
          {
              nombreMateria: "español",
              calificacion: 60
          },
          {
              nombreMateria: "matemáticas",
              calificacion: 65
          },
          {
              nombreMateria: "ciencias",
              calificacion: 80
          }
      ]
  }
]
// 1.Retorna en un array las calificaciones de todos los estudiantes.
function RetornaCalificaciones(arr){
  let calificaciones = [];
  arr.forEach(element => {
      element.materias.forEach(x => {
          calificaciones.push(x.calificacion)
      });
  });

  return calificaciones;
}

console.log(RetornaCalificaciones(info));

// 2 Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos

function calcularPromedio(arr){
  let promedios = [];
  let suma = 0;
  let contador = 0;
  let promedio = 0;

  arr.forEach(element => {
      element.materias.forEach(x => {
         suma += x.calificacion
         contador++;
      });
      promedio = suma / contador;

      promedios.push({[element.nombre] : {"promedio" : promedio}});
      
      contador = 0;
      suma = 0;
  });

  return promedios;
}

console.log(calcularPromedio(info));


// 1. Retorna la calificación mas baja

function minCalif(arr){
  let calificaciones = [];
  arr.forEach(element => {
      element.materias.forEach(x => {
          calificaciones.push(x.calificacion)
      });
  });

  return Math.min.apply(null, calificaciones)
}

console.log("La calificacion mas baja fue: "+ minCalif(info));


// 2. Retorna la calificación mas alta
function maxCalif(arr){
  let calificaciones = [];
  arr.forEach(element => {
      element.materias.forEach(x => {
          calificaciones.push(x.calificacion)
      });
  });

  return Math.max.apply(null, calificaciones)
}

console.log("La calificacion mas alta fue: "+ maxCalif(info));





/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//problema 6 elementos que faltan de la segunda en la primera matriz

let matriz = [7,2,5,3,5,3];

let br = [7,2,5,4,6,3,5,3];

var NumerosDif = br.filter(x => matriz.indexOf(x) == -1);
console.log(NumerosDif)


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//problema 7 sumar cuantos Id hay
const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};

function sumaId(arr) {
  let prop = Object.getOwnPropertyNames(arr);
  prop.forEach(nombre => nombre == 'id' ? contador++ : sumaId(arr[`${nombre}`]))

  return contador;
}

var contador = 0;
sumaId(root2);
console.log(contador);