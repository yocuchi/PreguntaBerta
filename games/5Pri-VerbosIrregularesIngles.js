const verbosIrregulares = [
    { spanish: "ser / estar", base: "be", pastSimple: "was/were", pastParticiple: "been" },
    { spanish: "comenzar", base: "begin", pastSimple: "began", pastParticiple: "begun" },
    { spanish: "romper", base: "break", pastSimple: "broke", pastParticiple: "broken" },
    { spanish: "construir", base: "build", pastSimple: "built", pastParticiple: "built" },
    { spanish: "comprar", base: "buy", pastSimple: "bought", pastParticiple: "bought" },
    { spanish: "atrapar / coger", base: "catch", pastSimple: "caught", pastParticiple: "caught" },
    { spanish: "elegir", base: "choose", pastSimple: "chose", pastParticiple: "chosen" },
    { spanish: "venir", base: "come", pastSimple: "came", pastParticiple: "come" },
    { spanish: "cortar", base: "cut", pastSimple: "cut", pastParticiple: "cut" },
    { spanish: "hacer", base: "do", pastSimple: "did", pastParticiple: "done" },
    { spanish: "dibujar", base: "draw", pastSimple: "drew", pastParticiple: "drawn" },
    { spanish: "conducir", base: "drive", pastSimple: "drove", pastParticiple: "driven" },
    { spanish: "caer", base: "fall", pastSimple: "fell", pastParticiple: "fallen" },
    { spanish: "alimentar", base: "feed", pastSimple: "fed", pastParticiple: "fed" },
    { spanish: "sentir", base: "feel", pastSimple: "felt", pastParticiple: "felt" },
    { spanish: "encontrar", base: "find", pastSimple: "found", pastParticiple: "found" },
    { spanish: "volar", base: "fly", pastSimple: "flew", pastParticiple: "flown" },
    { spanish: "olvidar", base: "forget", pastSimple: "forgot", pastParticiple: "forgotten" },
    { spanish: "conseguir", base: "get", pastSimple: "got", pastParticiple: "got" },
    { spanish: "ir", base: "go", pastSimple: "went", pastParticiple: "gone" },
    { spanish: "tener", base: "have", pastSimple: "had", pastParticiple: "had" },
    { spanish: "golpear", base: "hit", pastSimple: "hit", pastParticiple: "hit" },
    { spanish: "saber / conocer", base: "know", pastSimple: "knew", pastParticiple: "known" },
    { spanish: "dejar / irse", base: "leave", pastSimple: "left", pastParticiple: "left" },
    { spanish: "dejar / permitir", base: "let", pastSimple: "let", pastParticiple: "let" },
    { spanish: "mentir / tumbarse", base: "lie", pastSimple: "lay", pastParticiple: "lain" },
    { spanish: "perder", base: "lose", pastSimple: "lost", pastParticiple: "lost" },
    { spanish: "hacer / fabricar", base: "make", pastSimple: "made", pastParticiple: "made" },
    { spanish: "conocer / encontrarse", base: "meet", pastSimple: "met", pastParticiple: "met" },
    { spanish: "poner / colocar", base: "put", pastSimple: "put", pastParticiple: "put" },
    { spanish: "leer", base: "read", pastSimple: "read", pastParticiple: "read" },
    { spanish: "montar / ir en", base: "ride", pastSimple: "rode", pastParticiple: "ridden" },
    { spanish: "correr", base: "run", pastSimple: "ran", pastParticiple: "run" },
    { spanish: "decir", base: "say", pastSimple: "said", pastParticiple: "said" },
    { spanish: "ver", base: "see", pastSimple: "saw", pastParticiple: "seen" },
    { spanish: "vender", base: "sell", pastSimple: "sold", pastParticiple: "sold" },
    { spanish: "dormir", base: "sleep", pastSimple: "slept", pastParticiple: "slept" },
    { spanish: "coger / tomar", base: "take", pastSimple: "took", pastParticiple: "taken" },
    { spanish: "enseñar", base: "teach", pastSimple: "taught", pastParticiple: "taught" },
    { spanish: "pensar", base: "think", pastSimple: "thought", pastParticiple: "thought" },
    { spanish: "llevar puesto", base: "wear", pastSimple: "wore", pastParticiple: "worn" },
    { spanish: "ganar", base: "win", pastSimple: "won", pastParticiple: "won" },
    { spanish: "escribir", base: "write", pastSimple: "wrote", pastParticiple: "written" },
];

const preguntasJSON = verbosIrregulares.map(verbo => ({
    nombre: verbo.spanish,
    respuesta: `${verbo.base} ${verbo.pastSimple} ${verbo.pastParticiple}`
}));

const tituloJuego = "Verbos Irregulares - 5º Primaria";
const prefijoPregunta = "Escribe las 3 formas (base, past simple, past participle) del verbo «";
const sufijoPregunta = "» separadas por espacios:";
const curso = "5ºPrimaria";
const descripcion = "Practica los verbos irregulares en inglés: escribe base form, past simple y past participle separados por espacios.";
const tipoJuego = "preguntas";
const caseSensitive = false;
