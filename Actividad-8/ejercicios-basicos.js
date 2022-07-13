// Ejercicios de Objetos y sus métodos básicos:

 // Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 /* 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
console.log(student.name);
console.log(student["age"]);
student.name = "Steve Jobs";
console.log(student.name);

/*----------------------------------------------------------------------------------------------------------------*/ 

//Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    //Objeto de muestra:
 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
let studentKeys = Object.keys(student)
console.log(studentKeys);

for (property in student) {
    console.log(`${property}: ${student[property]}`);
}



/*----------------------------------------------------------------------------------------------------------------*/ 
 //Verifica si la propiedad name se encuentra dentro del siguiente objeto:
var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
console.log(student.hasOwnProperty("name"));


/*----------------------------------------------------------------------------------------------------------------*/ 
    /** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);

/*----------------------------------------------------------------------------------------------------------------*/ 
/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.
student.age = 35;
console.log(student);
 
/*----------------------------------------------------------------------------------------------------------------*/ 
/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 */ 
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
 //La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
student.pet = "cat";
console.log(student);


/*----------------------------------------------------------------------------------------------------------------*/ 
/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const objeto = {};
Object.defineProperties(objeto, {
    color: {
      enumerable: true,
      writable: true,
    },
    tamaño: {
      enumerable: true,
      writable: true,
    },
    peso: {
      enumerable: true,
      writable: true,
    },
    cantidad: {
      enumerable: true,
      writable: true,
    },
  });

/*----------------------------------------------------------------------------------------------------------------*/ 
/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
let hasProperty = (obj, prop) => {
    return obj.hasOwnProperty(prop);
  };

hasProperty(student,'name');

/*----------------------------------------------------------------------------------------------------------------*/ 
/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/

let myObject = {
  myFunction: function () {
    this.name = "mario";
    this.age = 26;
    this.hobbies = ["Running", "videogames", "TKO"];
  },
};
console.log(myObject.myFunction);

/*----------------------------------------------------------------------------------------------------------------*/ 

var simpleExercise = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"}, 
    {a: 32, b:75, name: "T57 Heavy"}
];
/*Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/

function sumProperties  (array){
    for (let index = 0; index < array.length; index++) {
        let suma = array[index].a + array[index].b;
        console.log(suma + " " + array[index].name);
    }
};
  
sumProperties(simpleExercise);


