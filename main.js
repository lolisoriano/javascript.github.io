//LISTA DE TURNOS DEL SERVICIO DE ENDOCRINOLOGIA DEL CENTRO MÉDICO DEL MAR.

let nombreApellido = "";
let edad = "";
let obraSocial = "";
let tiempoEstimado = " 30' ";
const totalPacientes = " 6 ";

const boton = document.getElementById("boton");

/*boton.addEventListener("click", () => {
    Swal.fire("Bienvenidos al sistema de turnos de Centro Médico del Mar.");
})*/


const nombreAutorizado = "paolaArgento";
const passwordAutorizado = "0190";

/*for (i = 0; i < 3; i ++) {
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


//alert("Su nombre ingresado es Paola");

let apellidoIngresado = prompt("Ingresar su apellido");
//alert("El apellido ingresado es Argento");

let edadIngresado = prompt("Ingresar edad");
//alert("La edad ingresada es 36 años");

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

alert(" Muchas gracias por elegirnos.\n\n CENTRO MÉDICO DEL MAR. ") */

/* Segunda pre-entrega del proyecto */

//Saludo de bienvenida:

Swal.fire("Bienvenidos al sistema de asociados del centro de salud del Mar, a continuación podrá elegir la opción de lo que desea realizar."
)


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


Swal.fire({
    title: 'Seleccione la opción deseada',
    input: '\n1-Inscripción asociados.\n2-Baja asociados.\n3-Modificar asociados.\n4-Solicitud de recetas.\n5-Salir',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
            }
            return response.json()
        })
        .catch(error => {
            Swal.showValidationMessage(
            `Request failed: ${error}`
            )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
        })
    }
})


//Función para inscribir a un asociado:

function altaAsociado() {
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

Swal.fire('Gracias por utilizar el servicio de Asociados del Centro Médico del Mar')

/*3ra pre-entrega*/

const btn = document.getElementsByClassName("btn")

//btn.addEventListener("click", ()=> {
    //console.log("Hola! Bienvenido a nuestra atención online.");


const caja = document.getElementsByClassName("caja")
caja.onmouseover = () => {
    console.log("Ingresó a la imagen!")
}

caja.onmouseout = () => {
    console.log("Salió de la imagen!")
}

//ingreseTexto.onkeydown = () => {
    //console.log("Apretaste una telca")


const texto = document.getElementById("texto");

//texto.addEventListener("change", () => {
    //console.log("Ingresaste tu nombre de usuario!")


//texto.addEventListener("input", () => {
    //console.log(texto.value);


class Paciente {
    constructor(nombre, apellido, obraSocial, domicilio, numeroDeCelular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.obraSocial = obraSocial;
        this.domicilio = domicilio;
        this.numeroDeCelular = numeroDeCelular;
    }
}

const arrayPacientes = [];

const formulario = document.getElementById("formulario");

//formulario.addEventListener("submit", (e) => {
    //e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const prepaga = document.getElementById("prepaga");
    const domicilio = document.getElementById("domicilio")
    const numeroDeCelular = document.getElementById("numeroDeCelular");

    //creo un afiliado nuevo
    //const afiliado = new Afiliado(nombre.value, apellido.value, prepaga.value, domicilio.value, numeroDeCelular.value);
    //arrayAfiliados.push(afiliado);

//reseteo el formulario.
//formulario.reset


localStorage.setItem("saludo", "bienvenidos al centro médico del mar.");

//let saludo = localstorage.getItem("saludo");
//console.log(saludo);

const ezequiel = {
    nombre: "Ezequiel",
    apellido: "de la Serna",
    edad: "36 años",
    obraSocial: "osde",
};
const ezequielJSON = JSON.stringify(ezequiel);

//localStorage.setItem("ezequiel, ezequielJSON");

/*const pacienteJSON = localStorage.getItem("ezequiel");
const paciente = JSON.parse(pacienteJSON);

const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
});

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
        document.body.classList.remove("dark")*/



class producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
    }
}




const barbijo = new producto(1, "Barbijo", 40, "img/barbijo.jpg");
const alcoholEnGel = new producto(2, "Alcohol En Gel", 250, "img/alcohol en gel.jpg");
const guantes = new producto(3, "Guantes", 50, "img/gantes de uso medico.jpg");
const gorroDescartable = new producto(4, "Gorro Descartable", 10, "img/gorro descartable.jpg");
const termometro = new producto(5, "Termometro", 840, "img/termometro.jpg");
const curitas = new producto(6, "Curitas", 335, "img/curitas.jpg");
const ibuprofeno600 = new producto(7, "Ibuprofeno 600",  922, "img/ibuprofeno600.jpg");
const paracetamol1g = new producto(8, "Paracetamol 1G", 360,  "img/paracetamol1g.jpg");
const diclofenac75 = new producto(9, "diclofenac", 560, "img/diclofenac75.jpg");
const buscapina = new producto(10, "Buscapina", 1236, "img/buscapina.jpg");
const migral500 = new producto(11, "Migral", 1340, "img/migral500.jpg");
const amoxicilina500gr = new producto(12, "Amoxicilina500gr", 500, "img/amoxicilina500mg.jpg");
const loratadina = new producto(13, "Loratadina", 620, "img/loratadina.jpg");
const omeprazol = new producto(14, "Omeprazol", 717, "img/omeprazol.jpg");
const ranitidina = new producto(15, "Ranitidina", 608, "img/ranitidina.jpg");
const enalapril = new producto(16, "Enalapril", 2304, "img/enalapril.jpg");
const clonazepam = new producto(17, "Clonazepam", 1869, "img/clonazepam.jpg");



const productos = [barbijo, alcoholEnGel, guantes, gorroDescartable, termometro, curitas, ibuprofeno600, paracetamol1g, diclofenac75, buscapina, migral500, amoxicilina500gr, loratadina, omeprazol, ranitidina, enalapril, clonazepam];

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class= "card-body">
                    <h5>${producto.nombre}</h5>
                    <p> ${producto.precio} </p>
                    <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
                `
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () =>{
        agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

const agregarAlCarrito = (id) => {
    const productoEnElCarrito = carrito.find(producto => producto.id === id);
    if(productoEnElCarrito){
        productoEnElCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal()
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class= "card-body">
                    <h5>${producto.nombre}</h5>
                    <p> ${producto.precio} </p>
                    <p> ${producto.cantidad} </p>
                    <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar El Producto </button>
                </div>
            </div>
                `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
        })
        calcularTotal();
    }

    const eliminarDelCarrito = (id) => {
        const producto = carrito.find(producto => producto.id === id);
        const indice = carrito.indexOf(producto);
        carrito.splice(indice, 1);
        mostrarCarrito();

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }  

    const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})


const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        })
    total.innerHTML = `Total: $${totalCompra}`;
}

////////////////////////////////////////////////


const Boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    Swal.fire("Bienvenidos al Centro Médico del Mar")
})

setTimeout( () => {
    document.body.style.backgroundColor = "background-color: aquaMarine";
}, 1000)





Toastify({
    text: "Los pacientes que se atienden con Ioma abonan un bono de $1300. Los pacientes que se atienden con Osde no abonan bono",
    
    duration: 3000
    
    }).showToast();
    


class asociado {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

const pepeArgento = new Asociado("pepeArgento", 896687); 
const thiagoSoriano = new Asociado("thiagoSoriano", 552812);
const admin = new Asociado("admin", 015410);

const asociados = [pepeArgento, thiagoSoriano, admin];

const solicitarAsociados = (estado) => {
    return new Promise( (resulto, rechazado) => {
        if(estado == true){
            resulto(asociados);
        } else {
            resulto("Bienvenidos al sistema de asociados del Centro Médico del Mar."); 
        }
    })
}

console.log(solicitarAsociados(true));

solicitarAsociados(true)
    .then( (asociados) => {
        console.table(asociados);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
        console.log("Su consulta a finalizado.");
    })


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'covid-19-world-vaccination-data.p.rapidapi.com'
        }
    };
    
    fetch('https://covid-19-world-vaccination-data.p.rapidapi.com/?iso=USA', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));