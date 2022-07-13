//Ejercicio 1 multiplicar 2 numeros
function multiply( num1, num2){
    function multiply2 (num2){
        return num1 * num2;
    }
    if(!num2){
        return multiply2
    }
    return num1 * num2
}

let numeros = multiply(2,5);
console.log(numeros)


//Ejercicio 2 funcion recursive fibonacci
function fibonacci (num) {
    if(num <= 1){
        return num
    }
    return fibonacci(num-1) + fibonacci(num-2)

}
for(i = 0; i<10;i++){
    console.log(fibonacci(i))
}