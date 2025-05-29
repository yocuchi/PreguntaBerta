// Variables globales y configuración
let resultados = [];
let palabraActual;
let totalPreguntas = 0;
let usuarioActual;
let palabrasUsadas = [];
let totalAciertos = 0;

// Inicialización al cargar la página
$(document).ready(function() {
    resultados = JSON.parse(localStorage.getItem(tituloJuego)) || [];
    usuarioActual = sessionStorage.getItem('usuarioActual');
    $('#titulo').text(`Bienvenido ${usuarioActual} - Preguntas: 0/10`);
    
    // Event listeners
    $('#ver-estadisticas').on('click', mostrarEstadisticas);
    
    inicializarJuego();
}); 