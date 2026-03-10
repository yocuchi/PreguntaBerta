const preguntasJSON = [
    // Columna izquierda
    { "nombre": "sastre/a ✂️", "respuesta": "tailor" },
    { "nombre": "policía 👮", "respuesta": "police officer" },
    { "nombre": "empresario / empresaria 💼", "respuesta": "businessman / businesswoman" },
    { "nombre": "bombero/a 🚒", "respuesta": "firefighter" },
    { "nombre": "uniforme 👔", "respuesta": "uniform" },
    { "nombre": "ingeniero/a ⚙️", "respuesta": "engineer" },
    { "nombre": "director/a 📋", "respuesta": "manager" },
    { "nombre": "mecánico/a 🔧", "respuesta": "mechanic" },
    { "nombre": "piloto ✈️", "respuesta": "pilot" },
    { "nombre": "azafato / azafata ✈️", "respuesta": "flight attendant" },
    { "nombre": "ama de casa 🏠", "respuesta": "housewife" },
    { "nombre": "futbolista ⚽", "respuesta": "footballer / football player" },
    { "nombre": "doctor/a 🩺", "respuesta": "doctor" },
    { "nombre": "diseñador/a 🎨", "respuesta": "designer" },
    { "nombre": "enfermero/a 💉", "respuesta": "nurse" },
    { "nombre": "periodista 📰", "respuesta": "journalist" },
    { "nombre": "cuidador/a de niños 👶", "respuesta": "babysitter" },
    { "nombre": "músico/a 🎵", "respuesta": "musician" },
    { "nombre": "dentista 🦷", "respuesta": "dentist" },
    { "nombre": "actor / actriz 🎭", "respuesta": "actor / actress" },
    { "nombre": "peluquero/a ✂️", "respuesta": "hairdresser" },
    { "nombre": "camarero/a 🍽️", "respuesta": "waiter / waitress" },
    { "nombre": "escritor/a ✍️", "respuesta": "writer" },
    { "nombre": "veterinario/a 🐾", "respuesta": "vet" },
    { "nombre": "panadero/a 🍞", "respuesta": "baker" },

    // Columna derecha
    { "nombre": "científico/a 🔬", "respuesta": "scientist" },
    { "nombre": "artista 🖼️", "respuesta": "artist" },
    { "nombre": "geólogo/a 🪨", "respuesta": "geologist" },
    { "nombre": "físico/a ⚛️", "respuesta": "physicist" },
    { "nombre": "carnicero/a 🥩", "respuesta": "butcher" },
    { "nombre": "pescadero/a 🐟", "respuesta": "fishmonger" },
    { "nombre": "payaso/a 🤡", "respuesta": "clown" },
    { "nombre": "obrero/a de fábrica 🏭", "respuesta": "factory worker" },
    { "nombre": "albañil 🧱", "respuesta": "bricklayer" },
    { "nombre": "cocinero/a 👨‍🍳", "respuesta": "cook" },
    { "nombre": "constructor/a 🏗️", "respuesta": "builder" },
    { "nombre": "entrenador/a 🏅", "respuesta": "coach" },
    { "nombre": "árbitro/a 🟨", "respuesta": "referee" },
    { "nombre": "granjero/a 🌾", "respuesta": "farmer" },
    { "nombre": "arquitecto/a 🏛️", "respuesta": "architect" },
    { "nombre": "cajero/a de supermercado 🛒", "respuesta": "supermarket cashier" },
    { "nombre": "profesor/a 📚", "respuesta": "teacher" },
    { "nombre": "conductor/a 🚗", "respuesta": "driver" },
    { "nombre": "director/a de orquesta 🎼", "respuesta": "orchestra director" },
    { "nombre": "fotógrafo/a 📸", "respuesta": "photographer" },
    { "nombre": "electricista ⚡", "respuesta": "electrician" },
    { "nombre": "fontanero/a 🪠", "respuesta": "plumber" },
    { "nombre": "cartero/a 📬", "respuesta": "postman" },
    { "nombre": "carpintero/a 🪚", "respuesta": "carpenter" },
    { "nombre": "jardinero/a 🌱", "respuesta": "gardener" }
];

const tituloJuego = "Inglés - Oficios 5º Primaria";
const prefijoPregunta = "¿Cómo se dice ";
const sufijoPregunta = " en inglés?";
const curso = "5º Primaria";
const descripcion = "Vocabulario de profesiones y oficios en inglés";
const tipoJuego = "preguntas";
const caseSensitive = false;
