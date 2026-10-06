const usuario = document.getElementById("usuario");
const tipoCliente = document.getElementById("tipoCliente");
const rol = document.getElementById("rol");
const idioma = document.getElementById("idioma");
const conexion = document.getElementById("conexion");
const idCliente = document.getElementById("idCliente");
const fecha = document.getElementById("fecha");
const prendasRegalo = document.getElementById("prendasRegalo");

//Sacar usuario y rol de la url - ?usuario=Erika&rol=Cliente
const parametros = new URLSearchParams(window.location.search);

const usuarioURL = parametros.get("usuario") ?? "Invitado";
const rolURL = parametros.get("rol") ?? "Invitado";

usuario.textContent = usuarioURL;
rol.textContent = "Rol: " + rolURL;

//Obtener idioma del navergador, estado de conexión, id sesion, id cliente y fecha actual
const idiomaNav = navigator.language;
idioma.textContent = "Idioma: " + idiomaNav;

const estadoConexion = navigator.onLine;

if(estadoConexion) {
    conexion.textContent = "Conexión: Activo/a";
} else {
    conexion.textContent = "Conexión: Sin conexión";
}

const idsesion = crypto.randomUUID();
console.log("ID de sesión: ", idsesion);

const idcliente = Math.floor(Math.random() * 99) + 1; //floor redondea hacia abajo el número aleatorio
const numeroFormateado = String(idcliente).padStart(6,"0");
idCliente.textContent = " ID: " + numeroFormateado;

const fechaActual = new Date().toLocaleDateString("es-ES", {
    weekday: "long", 
    year: "numeric", 
    month: "long",   
    day: "numeric"   
});
fecha.textContent = "Fecha: " + fechaActual;

//Cliente VIP, membresía, prendas regalo y correo
let cantidadRegalos;//Prueba: si no hay valor asigna 2, pero si es 0 lo respeta
const regalo = cantidadRegalos ?? 2;
console.log("Prendas regalo:", regalo);

//?usuario=Erika&rol=cliente&apodo=Eri
const apodoURL = parametros.get("apodo");
const apodo = apodoURL || "Cliente VIP";
tipoCliente.textContent = "Apodo: " + apodo;

let correo = "  ErikaStancicu@GMAIL.COM.   ";
const correoLimpio = correo.trim().toLowerCase(); 
//.trim() elimina espacios del principio y del final
//.toLowerCase() convierte todo a minúsculas
const correoFinal = correoLimpio.split("@");
console.log("Usuario correo: ", correoFinal[0]);
console.log("Dominio correo: ", correoFinal[1]);

let membresia;
const membresiaFinal = membresia ?? "Básica";
console.log("Membresía: ", membresiaFinal);