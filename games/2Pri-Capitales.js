const preguntasJSON = [
    { nombre: "Alemania 🇩🇪", respuesta: "Berlín" },
    { nombre: "Francia 🇫🇷", respuesta: "París" },
    { nombre: "Italia 🇮🇹", respuesta: "Roma" },
    { nombre: "España 🇪🇸", respuesta: "Madrid" },
    { nombre: "Polonia 🇵🇱", respuesta: "Varsovia" },
    { nombre: "Suecia 🇸🇪", respuesta: "Estocolmo" },
    { nombre: "Bélgica 🇧🇪", respuesta: "Bruselas" },
    { nombre: "Países Bajos 🇳🇱", respuesta: "Ámsterdam" },
    { nombre: "Austria 🇦🇹", respuesta: "Viena" },
    { nombre: "Dinamarca 🇩🇰", respuesta: "Copenhague" },
    { nombre: "Finlandia 🇫🇮", respuesta: "Helsinki" },
    { nombre: "Grecia 🇬🇷", respuesta: "Atenas" },
    { nombre: "Hungría 🇭🇺", respuesta: "Budapest" },
    { nombre: "República Checa 🇨🇿", respuesta: "Praga" },
    { nombre: "Portugal 🇵🇹", respuesta: "Lisboa" },
    { nombre: "Rumanía 🇷🇴", respuesta: "Bucarest" },
    { nombre: "Eslovenia 🇸🇮", respuesta: "Liubliana" },
    { nombre: "Eslovaquia 🇸🇰", respuesta: "Bratislava" },
    { nombre: "Croacia 🇭🇷", respuesta: "Zagreb" },
    { nombre: "Irlanda 🇮🇪", respuesta: "Dublín" },
    { nombre: "Estonia 🇪🇪", respuesta: "Tallin" },
    { nombre: "Letonia 🇱🇻", respuesta: "Riga" },
    { nombre: "Lituania 🇱🇹", respuesta: "Vilna" },
    { nombre: "Malta 🇲🇹", respuesta: "La Valeta" }
];
const tituloJuego = "Quiz de Capitales"; // Título del juego
const prefijoPregunta = "¿Cuál es la capital de "; // Prefijo de la pregunta
const sufijoPregunta = " ?"; // Sufijo de la pregunta
const curso = "2ºPrimaria";
const descripcion = "Preguntas sobre las capitales de Europa";
const tipoJuego = "preguntas"; // Puede ser "preguntas" o "tablaperiodica"  o "Formulacion"