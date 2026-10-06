const usuario = document.getElementById("usuario");
const tipoCliente = document.getElementById("tipoCliente");
const rol = document.getElementById("rol");
const idioma = document.getElementById("idioma");
const conexion = document.getElementById("conexion");
const idSesion = document.getElementById("idSesion");
const fecha = document.getElementById("fecha");

//Sacar usuario y rol de la url - ?usuario=Erika&rol=Cliente
const parametros = new URLSearchParams(window.location.search);

const usuarioURL = parametros.get("usuario") ?? "Invitado";
const rolURL = parametros.get("rol") ?? "Invitado";

usuario.textContent = "Usuario: " + usuarioURL;
rol.textContent = "Rol: " + rolURL;