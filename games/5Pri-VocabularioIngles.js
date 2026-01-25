const preguntasJSON = [
    // Verbos y Adjetivos
    { "nombre": "ordenada 🧹", "respuesta": "tidy" },
    { "nombre": "cuidar 👶", "respuesta": "look after" },
    { "nombre": "reparar 🔧", "respuesta": "repair" },
    { "nombre": "encontrarse 👋", "respuesta": "meet" },
    { "nombre": "conocer gente 👥", "respuesta": "meet" },
    { "nombre": "enviar 📧", "respuesta": "send" },
    { "nombre": "estar seguro ✅", "respuesta": "make sure" },
    { "nombre": "ir a buscar 🏃", "respuesta": "fetch" },
    { "nombre": "preparar 🍳", "respuesta": "prepare" },
    { "nombre": "esperar ⏳", "respuesta": "wait" },
    { "nombre": "tarde ⏰", "respuesta": "late" },
    { "nombre": "pronto ⏰", "respuesta": "early" },
    
    // Partes del día
    { "nombre": "por la mañana 🌅", "respuesta": "in the morning" },
    { "nombre": "por la tarde 🌤️", "respuesta": "in the afternoon" },
    { "nombre": "por la noche 🌙", "respuesta": "in the evening" },
    { "nombre": "por la noche 🌃", "respuesta": "at night" },
    { "nombre": "anochecer 🌆", "respuesta": "dusk" },
    { "nombre": "mediodía (12 en punto) ☀️", "respuesta": "noon" },
    { "nombre": "mediodía  aprox las 12☀️", "respuesta": "midday" },
    { "nombre": "medianoche 🌙", "respuesta": "midnight" },
    
    // Para decir la hora
    { "nombre": "en punto 🕐", "respuesta": "o'clock" },
    { "nombre": "y media 🕐", "respuesta": "half past" },
    { "nombre": "y cuarto 🕐", "respuesta": "quarter past" },
    { "nombre": "menos cuarto 🕐", "respuesta": "quarter to" },
    { "nombre": "y cinco, y diez, y veinte... 🕐", "respuesta": "past" },
    { "nombre": "menos cinco, menos diez... 🕐", "respuesta": "to" },
    { "nombre": "manecillas del reloj 🕐", "respuesta": "clock hands" },
    { "nombre": "decir la hora 🕐", "respuesta": "tell the time" },
    { "nombre": "¿Qué hora es? 🕐", "respuesta": "What time is it?" },
    { "nombre": "son las... 🕐", "respuesta": "It's..." },
    
    // Días y periodos de tiempo
    { "nombre": "ayer 📅", "respuesta": "yesterday" },
    { "nombre": "mañana 📅", "respuesta": "tomorrow" },
    { "nombre": "anteayer 📅", "respuesta": "the day before yesterday" },
    { "nombre": "pasado mañana 📅", "respuesta": "day after tomorrow" },
    
    // Otros sustantivos y adjetivos
    { "nombre": "carretera 🛣️", "respuesta": "road" },
    { "nombre": "camino 🛤️", "respuesta": "path" },
    { "nombre": "agujero 🕳️", "respuesta": "hole" },
    { "nombre": "neumático 🚗", "respuesta": "tyre" },
    { "nombre": "rueda 🚗", "respuesta": "wheel" },
    { "nombre": "reventar 💥", "respuesta": "burst" },
    { "nombre": "asombroso ✨", "respuesta": "amazing" },
    
    // Números del 1 al 10
    { "nombre": "uno 1️⃣", "respuesta": "one" },
    { "nombre": "dos 2️⃣", "respuesta": "two" },
    { "nombre": "tres 3️⃣", "respuesta": "three" },
    { "nombre": "cuatro 4️⃣", "respuesta": "four" },
    { "nombre": "cinco 5️⃣", "respuesta": "five" },
    { "nombre": "seis 6️⃣", "respuesta": "six" },
    { "nombre": "siete 7️⃣", "respuesta": "seven" },
    { "nombre": "ocho 8️⃣", "respuesta": "eight" },
    { "nombre": "nueve 9️⃣", "respuesta": "nine" },
    { "nombre": "diez 🔟", "respuesta": "ten" },

    // Fechas: 1 de enero, 2 de febrero, ..., 12 de diciembre
    { "nombre": "1 de enero 📅", "respuesta": "1st of January" },
    { "nombre": "2 de febrero 📅", "respuesta": "2nd of February" },
    { "nombre": "3 de marzo 📅", "respuesta": "3rd of March" },
    { "nombre": "4 de abril 📅", "respuesta": "4th of April" },
    { "nombre": "5 de mayo 📅", "respuesta": "5th of May" },
    { "nombre": "6 de junio 📅", "respuesta": "6th of June" },
    { "nombre": "7 de julio 📅", "respuesta": "7th of July" },
    { "nombre": "8 de agosto 📅", "respuesta": "8th of August" },
    { "nombre": "9 de septiembre 📅", "respuesta": "9th of September" },
    { "nombre": "10 de octubre 📅", "respuesta": "10th of October" },
    { "nombre": "11 de noviembre 📅", "respuesta": "11th of November" },
    { "nombre": "12 de diciembre 📅", "respuesta": "12th of December" },
    // Repaso rápido: años en inglés
    { "nombre": "año 📅", "respuesta": "year" },
    { "nombre": "1999 (año)", "respuesta": "nineteen ninety-nine" },
    { "nombre": "2000 (año)", "respuesta": "two thousand" },
    { "nombre": "2005 (año)", "respuesta": "two thousand and five" },
    { "nombre": "2010 (año)", "respuesta": "two thousand and ten" },
    { "nombre": "2024 (año)", "respuesta": "two thousand and twenty-four" },
    { "nombre": "en el año 2023", "respuesta": "in (the year) 2023" },
    { "nombre": "en 1990", "respuesta": "in 1990" },

    // Conjunciones, preposiciones y adverbios relacionados con el tiempo
    { "nombre": "mientras ⏳", "respuesta": "while" },
    { "nombre": "cuando ⏰", "respuesta": "when" },
    { "nombre": "desde 📅", "respuesta": "since" },
    { "nombre": "durante ⏱️", "respuesta": "for" }
];

const tituloJuego = "Quiz de Vocabulario Inglés 5º Primaria"; // Título del juego
const prefijoPregunta = "¿Cómo se dice "; // Prefijo de la pregunta 
const sufijoPregunta = " en inglés?"; // Sufijo de la pregunta
const curso = "5º Primaria";
const descripcion = "Preguntas de vocabulario de inglés - Unit 4: Time of our lives";
const tipoJuego = "preguntas";
