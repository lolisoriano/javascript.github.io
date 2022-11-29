//LISTA DE TURNOS DEL SERVICIO DE ENDOCRINOLOGIA DEL CENTRO MÉDICO DEL MAR.

let nombreApellido = "";
let edad = "";
let obraSocial = "";
let tiempoEstimado = " 30' ";
const totalPacientes = " 6 ";

alert("Bienvenidos al sistema de turnos de Centro Médico del Mar.");

alert("Los pacientes que se atienden con Ioma abonan un bono de $1300. Los pacientes que se atienden con Osde no abonan bono.");

let nombreUsuario = prompt("Ingresar su nombre de usuario");
let passwordUsuario = parseInt(prompt("Ingrese su contraseña.  Tiene 3 intentos, en tal caso su usuario será bloqueado."));

const nombreAutorizado = "paolaArgento";
const passwordAutorizado = "0190";

for (i = 0; i < 3; i ++) {
    if(passwordUsuario === passwordAutorizado && nombreUsuario === nombreAutorizado) {
        alert("Contraseña correcta, puede ingresar al sistema de turnos de Endocrinologia");
        usuario();
        break;
    }else if (i < 2) {
        alert("Usuario o contraseña incorrecto, vuelva a intentarlo")
        nombreUsuario = prompt(" Ingrese su nombre de usuario")
        passwordUsuario = parseInt(prompt("Ingrese su contraseña")); 
        if (passwordUsuario === passwordAutorizado && nombreUsuario === nombreAutorizado) {
            alert("Contraseña correcta, puede ingresar al sistema de turnos de Endocrinologia")
            usuario()
            break;
        }
    } else if(i === 3) {
        alert("Usuario bloqueado, dentro de los proximos 30' podrá volver a intentarlo.")
    }
}


alert("Su nombre ingresado es Paola");

let apellidoIngresado = prompt("Ingresar su apellido");
alert("El apellido ingresado es Argento");

let edadIngresado = prompt("Ingresar edad");
alert("La edad ingresada es 36 años");

let obraSocialIngresado = prompt("Ingrese su obra social");
let obrasSociales = prompt("Su obra social es Ioma, debe abonar $1300.\n\nSi abona con efectivo se le descuenta el 10% de la consulta.\n\nSi paga con debito el monto es el indicado anteriormente.\n\nSi abona con tarjeta de credito se le cobra un iva del 12%.\n\n¿Como desea abonar?")

function calcularDescuento(numero,numero,porcentaje) {
    return (1300 * 195 / 100)
    }
console.log(calcularDescuento(1300,10,"*"))
alert("El descuento en efectivo es de $195, usted debe abonar $1105")


function elegirServicio () {}
    let servicioElegido = prompt(`Seleccionar el servicio en el que desea el turno.\n\n1) Ginecologia\n2) Obstetricia\n3) Endocrinologia\n4) Nutrición`);
if (servicioElegido === "3");
alert("La opción deseada es Endocrinologia.");


function fechasDisponibles () {}
    let fechaDeTurno = prompt(`Seleccionar la fecha que desea el turno.\n\n1) 02 de diciembre - 15hs\n2) 02 de diciembre - 17hs\n3) 05 de diciembre - 11hs\n4) 07 de diciembre 18hs.`);
alert("La opción deseada es el dia 07 de diciembre a las 18hs");

alert(" Muchas gracias por elegirnos.\n\n CENTRO MÉDICO DEL MAR. ")

