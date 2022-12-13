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

/* Segunda pre-entrega del proyecto */

//Saludo de bienvenida:

function inicio () {
    let asociados = prompt("Hola! ingrese su número de asociado por favor:");
    //En el caso de que el asociado no ingrese su número, volver a pedirselo.
    if (asociados === "") {
        inicio();
        }  else {
        let saludar = alert("Bienvenidos al sistema de asociados del centro de salud del Mar, a continuación podrá elegir la opción de lo que desea realizar.");
        }
    }


//Clase Asociados del Centro de Salud:

class Asociado {
    constructor(nombre, apellido, dni, obraSocial, numeroAsociado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.obraSocial = obraSocial;
        this.numeroAsociado = numeroAsociado;
    }
}

//listado de asociados del centro de salud.


const  asociadoThiago = new Asociado("Thiago", "Mendoza", 11515541, "Osde", 0216);
const  asociadoMariaElena = new Asociado("Maria Elena", "fusenneco", 24822862, "Ioma", 4294);
const  asociadoMariela = new Asociado("Mariela", "Pedersen", 28555504, "Ioma", 0953);
const  asociadoBautista = new Asociado("Bautista", "Muñoz", 33585299, "Osde", 5485);
const  asociadoMaite = new Asociado("Maite", "Charras", 28589524, "Osde", 0557);
const  asociadoMonica = new Asociado("Monica", "Argento", 28696574, "Pami", 0263);
const  asociadoFabiana = new Asociado("Fabiana", "Carlino", 24654321, "Ioma", 0213);
const  asociadoGabriel = new Asociado("Gabriel", "Soriano", 31345978, "Osde", 0841);
const  asociadoDardo = new Asociado("Dardo", "Fusenecco", 22345678, "Pami", 0576);
const  asociadoPaola = new Asociado("Paola", "Argento", 28562524, "Osde", 0677);

const arrayAsociados = [];

arrayAsociados.push(asociadoThiago);
arrayAsociados.push(asociadoMariaElena);
arrayAsociados.push(asociadoMariela);
arrayAsociados.push(asociadoBautista);
arrayAsociados.push(asociadoMaite);
arrayAsociados.push(asociadoPaola);
arrayAsociados.push(asociadoMonica);
arrayAsociados.push(asociadoFabiana);
arrayAsociados.push(asociadoGabriel);
arrayAsociados.push(asociadoDardo);

console.log(arrayAsociados);

//Menú de opciones:

function menu() {
    alert("Bienvenidos al sistema de asociados del centro de salud del Mar, a continuación podrá elegir la opción de lo que desea realizar.");
    let opcion = parseInt(prompt("Ingrese una opción:\n1-Inscripción asociados.\n2-Baja asociados.\n3-Modificar asociados.\n4-Solicitud de recetas.\n5-Salir"));
    return opcion
}

//Función para inscribir a un asociado:

function altaAsociado() {
    let nombre = prompt("Ingresse el nombre del asociado: ")
    let apellido = prompt("Ingrese el apellido del asociado: ")
    let dni = parseInt(prompt("Ingrese el DNI del asociado: "));
    let obraSocial = parseInt(prompt("Ingrese la obra social de asociado: "));
    let numeroAsociado = parseInt(prompt("Ingrese el numero del asociado: "));
    let asociado = new Asociado(nombre, apellido, dni, obraSocial, numeroAsociado);
    arrayAsociados.push(asociado);
    console.log(arrayAsociados);
}

//Función para dar de baja un asociado:

function bajaAsociado() {
    let dni = parseInt(prompt("Ingrese el DNI del asociado: "));
    let asociado = arrayAsociados.find(asociado => asociado.dni === dni);
    let indice = arrayAsociado.indexOf(asociado);
    arrayAsociados.splice(indice, 1);
    console.log(arrayAsociados);
}

//Función para modificar un asociado:

function modificacionAsociado() {
    let obraSocial = parseInt(prompt("Ingrese la obra social del Asociado: "));
    let asociado = arrayAsociados.find(asociado => asociado.obraSocial === obraSocial);
    let indice = arrayAsociados.indexOf(asociado);
    let nombre = prompt("Ingrese el nombre del asociado: ");
    let apellido = prompt("Ingrese el apellido del asociado: ");
    let dni = prompt("Ingrese el DNI del asociado: ");
    let asociadoModificado = new Asociado(nombre, apellido, dni, obraSocial, numeroAsociado);
    arrayAsociados.splice(indice, 1, asociadoModificado);
    console.log(arrayAsociados);
}

//Función para consultar un Asociado:

function consultaAsociado() {
    let dni = parseInt(prompt("Ingrese el DNI del asociado: "));
    let asociado = arrayAsociados.find(asociado => asociado.dni === dni);
    console.log(asociado);
}
alert("Gracias por utilizar el servicio de Asociados del Centro Médico del Mar.");




