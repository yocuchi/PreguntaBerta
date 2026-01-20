const elementosOriginal = [
    { "nombre": "Litio", "columna": "Alcalinos", "valencias": "+1", "signo": "Li" },
    { "nombre": "Sodio", "columna": "Alcalinos", "valencias": "+1", "signo": "Na" },
    { "nombre": "Potasio", "columna": "Alcalinos", "valencias": "+1", "signo": "K" },
    { "nombre": "Rubidio", "columna": "Alcalinos", "valencias": "+1", "signo": "Rb" },
    { "nombre": "Cesio", "columna": "Alcalinos", "valencias": "+1", "signo": "Cs" },
    { "nombre": "Francio", "columna": "Alcalinos", "valencias": "+1", "signo": "Fr" },
    { "nombre": "Berilio", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Be" },
    { "nombre": "Magnesio", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Mg" },
    { "nombre": "Calcio", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Ca" },
    { "nombre": "Estroncio", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Sr" },
    { "nombre": "Bario", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Ba" },
    { "nombre": "Radio", "columna": "Alcalinotérreos", "valencias": "+2", "signo": "Ra" },
    { "nombre": "Boro", "columna": "Boroideos", "valencias": "-3 +3", "signo": "B" },
    { "nombre": "Aluminio", "columna": "Boroideos", "valencias": "+3", "signo": "Al" },
    { "nombre": "Galio", "columna": "Boroideos", "valencias": "+3", "signo": "Ga" },
    { "nombre": "Indio", "columna": "Boroideos", "valencias": "+3", "signo": "In" },
    { "nombre": "Talio", "columna": "Boroideos", "valencias": "+1 +3", "signo": "Tl" },
    { "nombre": "Carbono", "columna": "Carbonoideos", "valencias": "+2 -4 +4", "signo": "C" },
    { "nombre": "Silicio", "columna": "Carbonoideos", "valencias": "-4 +4", "signo": "Si" },
    { "nombre": "Germanio", "columna": "Carbonoideos", "valencias": "+2 +4", "signo": "Ge" },
    { "nombre": "Estaño", "columna": "Carbonoideos", "valencias": "+2 +4", "signo": "Sn" },
    { "nombre": "Plomo", "columna": "Carbonoideos", "valencias": "+2 +4", "signo": "Pb" },
    { "nombre": "Nitrógeno", "columna": "Nitrogenoideos", "valencias": "-1 +1 -3 +3 -5 +5", "signo": "N" },
    { "nombre": "Fósforo", "columna": "Nitrogenoideos", "valencias": "-3 +3 +5", "signo": "P" },
    { "nombre": "Arsénico", "columna": "Nitrogenoideos", "valencias": "-3 +3 +5", "signo": "As" },
    { "nombre": "Antimonio", "columna": "Nitrogenoideos", "valencias": "-3 +3 +5", "signo": "Sb" },
    { "nombre": "Bismuto", "columna": "Nitrogenoideos", "valencias": "+3 +5", "signo": "Bi" },
    { "nombre": "Oxígeno", "columna": "Anfígenos", "valencias": "-2", "signo": "O" },
    { "nombre": "Azufre", "columna": "Anfígenos", "valencias": "-2 +2 +4 +6", "signo": "S" },
    { "nombre": "Selenio", "columna": "Anfígenos", "valencias": "-2 +2 +4 +6", "signo": "Se" },
    { "nombre": "Telurio", "columna": "Anfígenos", "valencias": "-2 +2 +4 +6", "signo": "Te" },
    { "nombre": "Polonio", "columna": "Anfígenos", "valencias": "-2 +2 +4 +6", "signo": "Po" },
    { "nombre": "Flúor", "columna": "Halógenos", "valencias": "-1", "signo": "F" },
    { "nombre": "Cloro", "columna": "Halógenos", "valencias": "-1 +1 +3 +5 +7", "signo": "Cl" },
    { "nombre": "Bromo", "columna": "Halógenos", "valencias": "-1 +1 +3 +5 +7", "signo": "Br" },
    { "nombre": "Yodo", "columna": "Halógenos", "valencias": "-1 +1 +3 +5 +7", "signo": "I" },
    { "nombre": "Astato", "columna": "Halógenos", "valencias": "-1 +1  +5", "signo": "At" },
    { "nombre": "Helio", "columna": "Gases Nobles", "valencias": "0", "signo": "He" },
    { "nombre": "Neón", "columna": "Gases Nobles", "valencias": "0", "signo": "Ne" },
    { "nombre": "Argón", "columna": "Gases Nobles", "valencias": "0", "signo": "Ar" },
    { "nombre": "Kriptón", "columna": "Gases Nobles", "valencias": "0", "signo": "Kr" },
    { "nombre": "Xenón", "columna": "Gases Nobles", "valencias": "0", "signo": "Xe" },
    { "nombre": "Radón", "columna": "Gases Nobles", "valencias": "0", "signo": "Rn" },
    { "nombre": "Hidrógeno", "columna": "Hidrógeno", "valencias": "-1 +1", "signo": "H" },
    { "nombre": "Cromo", "columna": "Metales de transición", "valencias": "+2 +3 +6", "signo": "Cr" },
    { "nombre": "Manganeso", "columna": "Metales de transición", "valencias": "+2 +3 +4 +6 +7", "signo": "Mn" },
    { "nombre": "Hierro", "columna": "Metales de transición", "valencias": "+2 +3", "signo": "Fe" },
    { "nombre": "Cobalto", "columna": "Metales de transición", "valencias": "+2 +3", "signo": "Co" },
    { "nombre": "Níquel", "columna": "Metales de transición", "valencias": "+2 +3", "signo": "Ni" },
    { "nombre": "Cobre", "columna": "Metales de transición", "valencias": "+1 +2", "signo": "Cu" },
    { "nombre": "Plata", "columna": "Metales de transición", "valencias": "+1", "signo": "Ag" },
    { "nombre": "Oro", "columna": "Metales de transición", "valencias": "+1 +3", "signo": "Au" },
    { "nombre": "Cinc", "columna": "Metales de transición", "valencias": "+2", "signo": "Zn" },
    { "nombre": "Cadmio", "columna": "Metales de transición", "valencias": "+2", "signo": "Cd" },
    { "nombre": "Mercurio", "columna": "Metales de transición", "valencias": "+1 +2", "signo": "Hg" },
    { "nombre": "Paladio", "columna": "Metales de transición", "valencias": "+2 +4", "signo": "Pd" },
    { "nombre": "Platino", "columna": "Metales de transición", "valencias": "+2 +4", "signo": "Pt" }
];

const preguntasJSON = elementosOriginal.map(el => ({
    nombre: el.nombre,
    columna: el.columna,
    valencias: el.valencias, // Se mantiene como string con signos
    simbolo: el.signo 
}));

const tituloJuego = "Quiz de la Tabla Periódica";
const prefijoPregunta = "¿Qué sabes sobre ";
const sufijoPregunta = " ?";
const curso = "2ºESO";
const descripcion = "Preguntas sobre la Tabla Periódica de los Elementos.";
const tipoJuego = "tablaPeriodica";

// Configuraciones específicas para el juego de la tabla periódica
const configuracionTablaPeriodica = {
    preguntarSimbolo: true,
    preguntarColumna: true,
    preguntarValencias: true,
    preguntarValenciasComoSimbolo: false, // Si true, se usarían valencias como "+1", "-2". Si false, "1", "2".
                                        // Esto requerirá lógica en Generico.html para ajustar las valencias de preguntasJSON si es false.
};

// Obtener todas las columnas únicas disponibles
const columnasDisponibles = [...new Set(preguntasJSON.map(elemento => elemento.columna))].sort();

// Obtener todas las valencias posibles (con signo) y ordenarlas numéricamente donde sea posible
const todasLasValenciasPosibles = [...new Set(
    preguntasJSON.flatMap(elem => 
        elem.valencias
            .split(' ')
            .map(v => v.trim()) // Eliminar espacios al inicio y final
            .filter(v => v.length > 0 && /^[+-]?\d+$/.test(v)) // Filtrar vacíos y validar formato (opcional + o -, seguido de dígitos)
    )
)]
.sort((a, b) => {
    const numA = parseInt(a.replace(/[+-]/g, ''));
    const numB = parseInt(b.replace(/[+-]/g, ''));
    if (!isNaN(numA) && !isNaN(numB)) {
        if (numA !== numB) return numA - numB;
        // Si los números son iguales, priorizar positivos o el que tenga signo
        if (a.includes('+') && !b.includes('+')) return -1;
        if (!a.includes('+') && b.includes('+')) return 1;
        if (a.includes('-') && !b.includes('-')) return 1; // Negativos después de positivos con mismo número
        if (!a.includes('-') && b.includes('-')) return -1;
        return a.localeCompare(b); // Fallback para 0, o si ambos tienen el mismo signo
    }
    return a.localeCompare(b); // Comparación de cadenas si no son números (ej. "0")
});

// Asegurarse de que `preguntasJSON` se exporta si esto se usa en un entorno de módulos (aunque Generico.html lo carga como script global)
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { preguntasJSON, tituloJuego, prefijoPregunta, sufijoPregunta, curso, descripcion, tipoJuego, configuracionTablaPeriodica, columnasDisponibles, todasLasValenciasPosibles };
// } 