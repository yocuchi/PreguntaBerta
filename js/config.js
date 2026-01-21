// Variables globales y configuración
let resultados = [];
let palabraActual;
let totalPreguntas = 0;
let usuarioActual;
let palabrasUsadas = [];
let totalAciertos = 0;

// Funciones para manejar cookies (si no están definidas en otro lugar)
if (typeof getCookie === 'undefined') {
    function getCookie(nombre) {
        let nombreCookie = `${nombre}=`;
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookiesArray = decodedCookie.split(';');
        for (let i = 0; i < cookiesArray.length; i++) {
            let cookie = cookiesArray[i].trim();
            if (cookie.indexOf(nombreCookie) === 0) {
                return cookie.substring(nombreCookie.length, cookie.length);
            }
        }
        return "";
    }

    function setCookie(nombre, valor, dias = 365) {
        // Cookie con fecha de expiración para persistencia
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        const expira = "expires=" + fecha.toUTCString();
        document.cookie = `${nombre}=${valor}; ${expira}; path=/; SameSite=Lax`;
    }
}

// Inicialización al cargar la página
$(document).ready(function() {
    resultados = JSON.parse(localStorage.getItem(tituloJuego)) || [];
    usuarioActual = getCookie('usuarioActual');
    $('#titulo').text(`Bienvenido ${usuarioActual} - Preguntas: 0/10`);
    
    // Event listeners
    $('#ver-estadisticas').on('click', mostrarEstadisticas);
    
    inicializarJuego();
}); 