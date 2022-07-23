/*
---------------
Lista de funciones en los botones:

Volver --> operaciones()
Iniciar sesión --> login()
Consultar saldo --> consultarDisponible()
Ingresar monto --> ingresar()
Retirar monto --> retirar()
Salir --> salir()
Crea cuenta --> crearCuenta()
---------------
Lista de pantallas:

htmlInicio
htmlOperaciones
htmlRespuesta
---------------
*/

var cuentas = [
  { nombre: "Mali", saldo: 200, password: "123123" },
  { nombre: "Gera", saldo: 290, password: "123123" },
  { nombre: "Maui", saldo: 67, password: "123123" },
];
var indice = -1;

let storage;

//----------------------------------------------------------------------------------------
// Variables con las "pantallas" en HTML
// Ingresar/Crear cuenta
var htmlInicio =
'<div class="container-sm">'+
  '<button  class="btn btn-primary btn-sq-responsive h-100 w-100 " onclick="login()">Iniciar sesión</button> '+
  '<button type="button" class="btn btn-secondary btn-sq-responsive h-100 w-100 " onclick="crearCuenta()">Crear cuenta</button>'+
  '</div>';
// Consultar/Ingresar/Retirar/Salir
var htmlOperaciones =
  '<div class="container-sm">'+
  '<h4>Elija la operación a realizar:</h4>'+
  '<button class="btn btn-info btn-sq-responsive  onclick=" onclick="consultarDisponible()">Consulta Saldo</button> '+
  '<button class="btn btn-success btn-sq-responsive  onclick=" onclick="ingresar()">Ingresar monto</button>'+
  '<button class="btn btn-danger btn-sq-responsive onclick=" onclick="retirar()">Retirar monto </button>' +
  '<button class="btn btn-secondary btn-sq-responsive onclick=" onclick="salir()"> Salir </button>'+
  '</div>';
// Resultado / Volver
var htmlRespuesta =
  '<h5 id="texto"></h5>'+
  '<button class="btn btn-dark btn-sq-responsive" onclick="load()">Volver</button>';

//----------------------------------------------------------------------------------------


//Funciones

load();

function load() {
  let isLogin = localStorage.getItem("isLogin");
  if (isLogin == "true") {
    document.getElementById("cajero").innerHTML = htmlOperaciones;
  } else {
    document.getElementById("cajero").innerHTML = htmlInicio;
  }

  guardarArray();
}

function guardarArray() {
  if (localStorage.getItem("cuentas") === null) {
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
  }
  storage = JSON.parse(localStorage.getItem("cuentas"));
}

function login() {
  var nombreCuenta;
  for (var i = 0; i < storage.length; i++) {
    // Cuando el loop acaba de iniciar o reinicia, pedir el nombre de usuario
    if (i === 0) {
      nombreCuenta = prompt("Ingrese su nombre de usuario:");
    }
    //---------------------------------------------------------------
    if (nombreCuenta === null) {
      // Si el usuario da clic en cancelar, romper el loop
      break;
    } else if (nombreCuenta === storage[i].nombre) {
      // Si existe el usuario, guardar el indiceCuenta, verificar contraseña y romper el loop de fuera
      localStorage.setItem("nombre", storage[i].nombre);
      var indiceCuenta = i;
      // Verificar contraseña
      var pwCuenta;
      while (pwCuenta !== storage[indiceCuenta].password) {
        pwCuenta = prompt(
          'Accediendo a la cuenta de "' +
            localStorage.getItem("nombre") +
            '". Ingrese su contraseña:'
        );
        if (pwCuenta === null) {
          indiceCuenta === -1;
          break;
        } else if (pwCuenta === storage[indiceCuenta].password) {
          localStorage.setItem("contraseña", storage[indiceCuenta].password);
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("saldo", storage[indiceCuenta].saldo);
          load();
          // Sacar el valor de indice
          indice = indiceCuenta;
        } else {
          alert("La contraseña no es correcta. Intente nuevamente.");
        }
      }
      // END Verificar contraseña
      break;
    } else if (i === storage.length - 1) {
      // Al haber revisado todo el array y no encontrar el usuario, reiniciar el loop y mostrar mensaje
      // El loop reinicia con i=-1 porque al volver "arriba", se le suma 1, quedando en 0 de nuevo
      alert(
        "No se ha encontrado un usuario con este nombre. Intente nuevamente."
      );
      i = -1;
    }
  }
}

function crearCuenta() {
  let existe = true;
  while (existe !== false) {
    var ccNombre = prompt("Ingrese el nombre de usuario que desea utilizar:");
    if (ccNombre !== null) {
      // Verificar si existe la cuenta
      for (var i = 0; i < storage.length; i++) {
        if (ccNombre === storage[i].nombre) {
          existe = true;
          alert("Este nombre de usuario ya existe.");
          break;
        } else {
          existe = false;
        }
      }
      // Seguir solo si no existe
      if (existe === false) {
        var ccPassword = prompt("Ingrese una contraseña:");
        if (ccPassword !== null) {
          var ccSaldo = NaN;
          while (isNaN(ccSaldo) === true) {
            ccSaldo = prompt("Ingrese su saldo inicial:");
            if (ccSaldo !== null) {
              ccSaldo = Number(ccSaldo);
              if (isNaN(ccSaldo) === true) {
                alert("El valor ingresado no es numérico. Intente nuevamente.");
              } else if (ccSaldo === null) {
                break;
              } else if (ccSaldo < 10) {
                alert(
                  "El valor ingresado es menor que el monto mínimo. El monto mínimo que una cuenta debe tener en todo momento es de $10."
                );
                ccSaldo = NaN;
              } else if (ccSaldo > 990) {
                alert(
                  "El valor ingresado es mayor que el monto máximo. El monto máximo que una cuenta puede tener es de $990"
                );
                ccSaldo = NaN;
              } else {
                storage.push({
                  nombre: ccNombre,
                  saldo: ccSaldo,
                  password: ccPassword,
                });
                localStorage.setItem("cuentas", JSON.stringify(storage));
                alert(
                  'Se ha guardado tu cuenta. Tu usuario es "' +
                    ccNombre +
                    '". Tu contraseña es "' +
                    ccPassword +
                    '". Tu saldo inicial es de $' +
                    ccSaldo +
                    "."
                );
              }
            } else {
              break;
            }
          }
        }
      }
    } else {
      break;
    }
  }
}

function consultarDisponible() {
  var textToShow =
    "El saldo disponible es de " +
    "<b>" +
    localStorage.getItem("nombre") +
    "</b>" +
    " es de: <b>$" +
    localStorage.getItem("saldo") +
    "</b>";
  document.getElementById("cajero").innerHTML = htmlRespuesta;
  document.getElementById("texto").innerHTML = textToShow;
}

function ingresar() {
  var saldoActual = parseInt(localStorage.getItem("saldo"));
  while (saldoActual === parseInt(localStorage.getItem("saldo"))) {
    var strMonto = prompt("Monto a Depositar :");
    var monto = Number(strMonto);
    if (strMonto === null) {
      break;
    } else if (isNaN(monto) === true || monto <= 0) {
      alert("Por favor, ingrese un monto válido.");
    } else {
      var nuevoSaldo = monto + saldoActual;
      if (nuevoSaldo > 990) {
        alert(
          "Su saldo actual es de $" +
            saldoActual +
            ", al ingresar $" +
            monto +
            " se superaría el máximo de $990. La operación no es permitida."
        );
      } else {
        var textToShow =
          "El monto ingresado es de <b>$" +
          monto +
          "</b>. Su nuevo saldo es de <b>$" +
          nuevoSaldo +
          "</b>.";
        localStorage.setItem("saldo", nuevoSaldo);
        for (let i = 0; i < storage.length; i++) {
          if (localStorage.getItem("nombre") == storage[i].nombre) {
            storage[i].saldo = nuevoSaldo;
            localStorage.setItem("cuentas", JSON.stringify(storage));
          }
        }

        document.getElementById("cajero").innerHTML = htmlRespuesta;
        document.getElementById("texto").innerHTML = textToShow;
      }
    }
  }
}

function retirar() {
  var saldoActual = parseInt(localStorage.getItem("saldo"));
  while (saldoActual === parseInt(localStorage.getItem("saldo"))) {
    var strMonto = prompt("Monto a Retirar:");
    var monto = Number(strMonto);
    if (strMonto === null) {
      break;
    } else if (isNaN(monto) === true || monto <= 0) {
      alert("Por favor, ingrese un monto válido.");
    } else {
      var nuevoSaldo = saldoActual - monto;
      if (nuevoSaldo < 10) {
        alert(
          "Su saldo actual es de $" +
            saldoActual +
            ". Al retirar $" +
            monto +
            " la cuenta tendría menos de  $10. La operación no es permitida."
        );
      } else {
        var textToShow =
          "El monto ingresado es de <b>$" +
          monto +
          "</b>. Su nuevo saldo es de <b>$" +
          nuevoSaldo +
          "</b>.";
        localStorage.setItem("saldo", nuevoSaldo);
        for (let i = 0; i < storage.length; i++) {
          if (localStorage.getItem("nombre") == storage[i].nombre) {
            storage[i].saldo = nuevoSaldo;
            localStorage.setItem("cuentas", JSON.stringify(storage));
          }
        }
        document.getElementById("cajero").innerHTML = htmlRespuesta;
        document.getElementById("texto").innerHTML = textToShow;
      }
    }
  }
}

function salir() {
  indice = -1;
  document.getElementById("cajero").innerHTML = htmlInicio;
  localStorage.removeItem("isLogin");
  localStorage.removeItem("nombre");
  localStorage.removeItem("contraseña");
  localStorage.removeItem("saldo");
}
// END Funciones de los botones
/*
//-------------------------------------------
Nota: Explicacion de crearCuenta()
//-------------------------------------------
Al hacer click en el boton:
1. Prompt pide el nombre de usuario
    1.1 si es texto (=no se cancelo), pasar a 1.2
    1.2 - si ya existe, mostrar alerta y volver a 1
        - si no existe, seguir a 2
2. Prompt pide la contraseña
    - si es texto, pasar a 3
3. Prompt pide el saldo inicial
    - si es un numero, pasar a 4
    - si es NaN, volver a 3
4. Alerta muestra que la cuenta fue creada. Muestra el nombre, la password y el saldo. El nuevo objeto se almacena en el array
*/
