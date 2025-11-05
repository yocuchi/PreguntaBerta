const verbosJSON = {
  "verbs": [
    { "infinitive": "choose", "past": "chose", "spanish": "elegir" },
    { "infinitive": "do", "past": "did", "spanish": "hacer" },
    { "infinitive": "draw", "past": "drew", "spanish": "dibujar" },
    { "infinitive": "drink", "past": "drank", "spanish": "beber" },
    { "infinitive": "find", "past": "found", "spanish": "encontrar" },
    { "infinitive": "fly", "past": "flew", "spanish": "volar" },
    { "infinitive": "go", "past": "went", "spanish": "ir" },
    { "infinitive": "hit", "past": "hit", "spanish": "golpear" },
    { "infinitive": "hold", "past": "held", "spanish": "sujetar / sostener" },
    { "infinitive": "know", "past": "knew", "spanish": "saber / conocer" },
    { "infinitive": "learn", "past": "learnt", "spanish": "aprender" },
    { "infinitive": "let", "past": "let", "spanish": "dejar / permitir" },
    { "infinitive": "make", "past": "made", "spanish": "hacer / fabricar" },
    { "infinitive": "put", "past": "put", "spanish": "poner" },
    { "infinitive": "ride", "past": "rode", "spanish": "montar / conducir" },
    { "infinitive": "run", "past": "ran", "spanish": "correr" },
    { "infinitive": "say", "past": "said", "spanish": "decir" },
    { "infinitive": "sing", "past": "sang", "spanish": "cantar" },
    { "infinitive": "sit", "past": "sat", "spanish": "sentarse" },
    { "infinitive": "sleep", "past": "slept", "spanish": "dormir" },
    { "infinitive": "stand", "past": "stood", "spanish": "estar de pie" },
    { "infinitive": "throw", "past": "threw", "spanish": "lanzar / tirar" },
    { "infinitive": "understand", "past": "understood", "spanish": "entender / comprender" },
    { "infinitive": "wear", "past": "wore", "spanish": "llevar puesto / vestir" },
    { "infinitive": "bring", "past": "brought", "spanish": "traer" },
    { "infinitive": "buy", "past": "bought", "spanish": "comprar" },
    { "infinitive": "feed", "past": "fed", "spanish": "alimentar / dar de comer" },
    { "infinitive": "hide", "past": "hid", "spanish": "esconder" },
    { "infinitive": "hurt", "past": "hurt", "spanish": "herir / doler" },
    { "infinitive": "lose", "past": "lost", "spanish": "perder" },
    { "infinitive": "mean", "past": "meant", "spanish": "significar / querer decir" },
    { "infinitive": "send", "past": "sent", "spanish": "enviar" },
    { "infinitive": "there is/are", "past": "there was/were", "spanish": "haber" },
    { "infinitive": "think", "past": "thought", "spanish": "pensar" },
    { "infinitive": "wake", "past": "woke", "spanish": "despertar" }
  ]
};

// Convertir los verbos en preguntas: una para infinitivo y otra para pasado
const preguntasJSON = [];
verbosJSON.verbs.forEach(verbo => {
    // Pregunta por el infinitivo
    preguntasJSON.push({
        nombre: `¿Cuál es el infinitivo de "${verbo.spanish}"?`,
        respuesta: verbo.infinitive
    });
    // Pregunta por el pasado
    preguntasJSON.push({
        nombre: `¿Cuál es el pasado de "${verbo.spanish}"?`,
        respuesta: verbo.past
    });
});

const tituloJuego = "Quiz de Verbos en Inglés"; // Título del juego
const prefijoPregunta = ""; // Prefijo de la pregunta (ya está incluido en el nombre)
const sufijoPregunta = ""; // Sufijo de la pregunta (ya está incluido en el nombre)
const curso = "4ºPrimaria";
const descripcion = "Aprende y practica los verbos irregulares en inglés: infinitivo y pasado simple";
const tipoJuego = "preguntas"; // Puede ser "preguntas" o "tablaperiodica"
