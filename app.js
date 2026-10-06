const usuario = document.getElementById("usuario");
const tipoCliente = document.getElementById("tipoCliente");
const rol = document.getElementById("rol");
const idioma = document.getElementById("idioma");
const conexion = document.getElementById("conexion");
const idCliente = document.getElementById("idCliente");
const fecha = document.getElementById("fecha");
const prendasRegalo = document.getElementById("prendasRegalo");

//HEADER

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


//BODY

const btnOferta = document.getElementById("btnOferta");
const contadorOferta = document.getElementById("contadorOferta");
const pedido = document.getElementById("pedido");
const subTotal= document.getElementById("subtotal");
const descuentoTotal= document.getElementById("descuento");
const ivaTotal = document.getElementById("iva");
const Total = document.getElementById("total");

//OFERTA

btnOferta.addEventListener("click", function() {

    btnOferta.textContent = "¡OFERTA ACTIVADA!";
    btnOferta.disabled = true;//Activa la oferta y desactiva el botón para evitar varios contadores

    let segundos = 15;
    contadorOferta.textContent = "Tiempo restante: " + segundos + " segundos";

    //Actualiza el contador cada segundo
    const intervalo = setInterval(function() {
        segundos--;
        contadorOferta.textContent = "Tiempo restante: " + segundos + " segundos";

        //Cuando llega a 0, detiene el contador y finaliza la oferta
        if (segundos === 0) {
            clearInterval(intervalo);
            contadorOferta.textContent = "¡OFERTA EXPIRADA!";
            btnOferta.textContent = "¡ACTIVAR OFERTA!";
            btnOferta.disabled = false;
        }
    }, 1000);
});

//CARRITO

const precioChaqueta = "59.90€"; //texto
const precioCamiseta = "19.99€";
const cupon = "10";


const chaquetaNumero = parseFloat(precioChaqueta); //numero decimales
const camisetaNumero = parseFloat(precioCamiseta); 
const descuento = parseFloat(cupon);

const subtotal = chaquetaNumero + camisetaNumero;
const baseImponible = subtotal - descuento;
const iva = baseImponible * 0.21;
const total = baseImponible + iva;

let idPedido = 1000;
idPedido++;
pedido.textContent = "Nº de pedido: " + idPedido;

const formatoEuro = new Intl.NumberFormat("es-ES", { //Formatea los números al formato de moneda española (€)
    style: "currency",
    currency: "EUR"
});

if (Number.isFinite(subtotal)) {
    subTotal.textContent = "Subtotal: " + formatoEuro.format(subtotal);
    descuentoTotal.textContent = "Descuento: " + formatoEuro.format(descuento);
    ivaTotal.textContent = "IVA (21%): " + formatoEuro.format(iva);
    Total.textContent = "Total a pagar: " + formatoEuro.format(total);
} else {
    subTotal.textContent = "Error al calcular el subtotal";
}