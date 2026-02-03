// Datos base: mismo contenido que 2ESO-Formulacion (nombre completo y fórmula)
const datosBase2ESO = [
    { nombre: "Prefijo multiplicador: óxido de litio", respuesta: "Li2O" },
    { nombre: "Número de oxidación: oxido de Litio (I)", respuesta: "Li2O" },
    { nombre: "Cargas iónicas: oxido de litio (+1)", respuesta: "Li2O" },
    { nombre: "Prefijo multiplicador: óxido de berilio", respuesta: "BeO" },
    { nombre: "Número de oxidación: oxido de Berilio (II)", respuesta: "BeO" },
    { nombre: "Cargas iónicas: oxido de berilio (+2)", respuesta: "BeO" },
    { nombre: "Prefijo multiplicador: trióxido de diboro", respuesta: "B2O3" },
    { nombre: "Número de oxidación: oxido de Boro (III)", respuesta: "B2O3" },
    { nombre: "Cargas iónicas: oxido de boro (+3)", respuesta: "B2O3" },
    { nombre: "Prefijo multiplicador: dióxido de carbono", respuesta: "CO2" },
    { nombre: "Número de oxidación: oxido de Carbono (IV)", respuesta: "CO2" },
    { nombre: "Tradicional: anhídrido carbónico", respuesta: "CO2" },
    { nombre: "Prefijo multiplicador: trióxido de diníquel", respuesta: "Ni2O3" },
    { nombre: "Número de oxidación: oxido de Níquel (III)", respuesta: "Ni2O3" },
    { nombre: "Cargas iónicas: oxido de níquel (+3)", respuesta: "Ni2O3" },
    { nombre: "Prefijo multiplicador: dióxido de azufre", respuesta: "SO2" },
    { nombre: "Número de oxidación: oxido de Azufre (IV)", respuesta: "SO2" },
    { nombre: "Tradicional: anhídrido sulfuroso", respuesta: "SO2" },
    { nombre: "Prefijo multiplicador: óxido de bario", respuesta: "BaO" },
    { nombre: "Número de oxidación: oxido de Bario (II)", respuesta: "BaO" },
    { nombre: "Cargas iónicas: oxido de bario (+2)", respuesta: "BaO" },
    { nombre: "Prefijo multiplicador: óxido de plata", respuesta: "Ag2O" },
    { nombre: "Número de oxidación: oxido de Plata (I)", respuesta: "Ag2O" },
    { nombre: "Cargas iónicas: oxido de plata (+1)", respuesta: "Ag2O" },
    { nombre: "Prefijo multiplicador: difluoruro de oxígeno", respuesta: "OF2" },
    { nombre: "Prefijo multiplicador: dicloruro de pentaoxígeno", respuesta: "O5Cl2" },
    { nombre: "Prefijo multiplicador: óxido de rubidio", respuesta: "Rb2O" },
    { nombre: "Número de oxidación: oxido de Rubidio (I)", respuesta: "Rb2O" },
    { nombre: "Cargas iónicas: oxido de rubidio (+1)", respuesta: "Rb2O" },
    { nombre: "Prefijo multiplicador: óxido de estroncio", respuesta: "SrO" },
    { nombre: "Número de oxidación: oxido de Estroncio (II)", respuesta: "SrO" },
    { nombre: "Cargas iónicas: oxido de estroncio (+2)", respuesta: "SrO" },
    { nombre: "Prefijo multiplicador: óxido de dicarbono", respuesta: "C2O" },
    { nombre: "Número de oxidación: oxido de Carbono (I)", respuesta: "C2O" },
    { nombre: "Prefijo multiplicador: trióxido de dialuminio", respuesta: "Al2O3" },
    { nombre: "Número de oxidación: oxido de Aluminio (III)", respuesta: "Al2O3" },
    { nombre: "Cargas iónicas: oxido de aluminio (+3)", respuesta: "Al2O3" },
    { nombre: "Prefijo multiplicador: óxido de mercurio", respuesta: "Hg2O" },
    { nombre: "Número de oxidación: oxido de Mercurio (I)", respuesta: "Hg2O" },
    { nombre: "Cargas iónicas: oxido de mercurio (+1)", respuesta: "Hg2O" },
    { nombre: "Prefijo multiplicador: trióxido de digalio", respuesta: "Ga2O3" },
    { nombre: "Número de oxidación: oxido de Galio (III)", respuesta: "Ga2O3" },
    { nombre: "Cargas iónicas: oxido de galio (+3)", respuesta: "Ga2O3" },
    { nombre: "Prefijo multiplicador: dióxido de plomo", respuesta: "PbO2" },
    { nombre: "Número de oxidación: oxido de Plomo (IV)", respuesta: "PbO2" },
    { nombre: "Cargas iónicas: oxido de plomo (+4)", respuesta: "PbO2" },
    { nombre: "Prefijo multiplicador: óxido de potasio", respuesta: "K2O" },
    { nombre: "Número de oxidación: oxido de Potasio (I)", respuesta: "K2O" },
    { nombre: "Cargas iónicas: oxido de potasio (+1)", respuesta: "K2O" },
    { nombre: "Prefijo multiplicador: óxido de calcio", respuesta: "CaO" },
    { nombre: "Número de oxidación: oxido de Calcio (II)", respuesta: "CaO" },
    { nombre: "Cargas iónicas: oxido de calcio (+2)", respuesta: "CaO" },
    { nombre: "Prefijo multiplicador: trióxido de dihierro", respuesta: "Fe2O3" },
    { nombre: "Número de oxidación: oxido de Hierro (III)", respuesta: "Fe2O3" },
    { nombre: "Cargas iónicas: oxido de hierro (+3)", respuesta: "Fe2O3" },
    { nombre: "Prefijo multiplicador: trióxido de dicobalto", respuesta: "Co2O3" },
    { nombre: "Número de oxidación: oxido de Cobalto (III)", respuesta: "Co2O3" },
    { nombre: "Cargas iónicas: oxido de cobalto (+3)", respuesta: "Co2O3" },
    { nombre: "Prefijo multiplicador: óxido de zinc", respuesta: "ZnO" },
    { nombre: "Número de oxidación: oxido de Zinc (II)", respuesta: "ZnO" },
    { nombre: "Cargas iónicas: oxido de zinc (+2)", respuesta: "ZnO" },
    { nombre: "Prefijo multiplicador: dióxido de germanio", respuesta: "GeO2" },
    { nombre: "Número de oxidación: oxido de Germanio (IV)", respuesta: "GeO2" },
    { nombre: "Cargas iónicas: oxido de germanio (+4)", respuesta: "GeO2" },
    { nombre: "Prefijo multiplicador: trióxido de diarsénico", respuesta: "As2O3" },
    { nombre: "Número de oxidación: oxido de Arsénico (III)", respuesta: "As2O3" },
    { nombre: "Cargas iónicas: oxido de arsénico (+3)", respuesta: "As2O3" },
    { nombre: "Prefijo multiplicador: hidruro de rubidio", respuesta: "RbH" },
    { nombre: "Número de oxidación: hidruro de Rubidio (I)", respuesta: "RbH" },
    { nombre: "Cargas iónicas: hidruro de rubidio (+1)", respuesta: "RbH" },
    { nombre: "Prefijo multiplicador: trihidruro de indio", respuesta: "InH3" },
    { nombre: "Número de oxidación: hidruro de Indio (III)", respuesta: "InH3" },
    { nombre: "Cargas iónicas: hidruro de indio (+3)", respuesta: "InH3" },
    { nombre: "Prefijo multiplicador: dihidruro de estroncio", respuesta: "SrH2" },
    { nombre: "Número de oxidación: hidruro de Estroncio (II)", respuesta: "SrH2" },
    { nombre: "Cargas iónicas: hidruro de estroncio (+2)", respuesta: "SrH2" },
    { nombre: "Prefijo multiplicador: cloruro de hidrógeno", respuesta: "HCl" },
    { nombre: "Tradicional: ácido clorhídrico", respuesta: "HCl" },
    { nombre: "Prefijo multiplicador: sulfuro de hidrógeno", respuesta: "H2S" },
    { nombre: "Tradicional: ácido sulfhídrico", respuesta: "H2S" },
    { nombre: "Prefijo multiplicador: hidruro de plata", respuesta: "AgH" },
    { nombre: "Número de oxidación: hidruro de Plata (I)", respuesta: "AgH" },
    { nombre: "Cargas iónicas: hidruro de plata (+1)", respuesta: "AgH" },
    { nombre: "Prefijo multiplicador: trihidruro de níquel", respuesta: "NiH3" },
    { nombre: "Número de oxidación: hidruro de Níquel (III)", respuesta: "NiH3" },
    { nombre: "Cargas iónicas: hidruro de níquel (+3)", respuesta: "NiH3" },
    { nombre: "Prefijo multiplicador: dihidruro de mercurio", respuesta: "HgH2" },
    { nombre: "Número de oxidación: hidruro de Mercurio (II)", respuesta: "HgH2" },
    { nombre: "Cargas iónicas: hidruro de mercurio (+2)", respuesta: "HgH2" },
    { nombre: "Prefijo multiplicador: tetrahidruro de carbono", respuesta: "CH4" },
    { nombre: "Número de oxidación: hidruro de Carbono (IV)", respuesta: "CH4" },
    { nombre: "Tradicional: metano", respuesta: "CH4" },
    { nombre: "Prefijo multiplicador: óxido de dihidrógeno", respuesta: "H2O" },
    { nombre: "Tradicional: agua", respuesta: "H2O" },
    { nombre: "Prefijo multiplicador: telururo de hidrógeno", respuesta: "H2Te" },
    { nombre: "Tradicional: ácido telurídrico", respuesta: "H2Te" },
    { nombre: "Prefijo multiplicador: trihidruro de boro", respuesta: "BH3" },
    { nombre: "Número de oxidación: hidruro de Boro (III)", respuesta: "BH3" },
    { nombre: "Cargas iónicas: hidruro de boro (+3)", respuesta: "BH3" },
    { nombre: "Tradicional: borano", respuesta: "BH3" },
    { nombre: "Prefijo multiplicador: hidruro de carbono", respuesta: "CH" },
    { nombre: "Número de oxidación: hidruro de Carbono (I)", respuesta: "CH" },
    { nombre: "Prefijo multiplicador: tetrahidruro de germanio", respuesta: "GeH4" },
    { nombre: "Número de oxidación: hidruro de Germanio (IV)", respuesta: "GeH4" },
    { nombre: "Cargas iónicas: hidruro de germanio (+4)", respuesta: "GeH4" },
    { nombre: "Sustitución: germanio", respuesta: "GeH4" },
    { nombre: "Tradicional: germanano", respuesta: "GeH4" },
    { nombre: "Prefijo multiplicador: seleniuro de hidrógeno", respuesta: "H2Se" },
    { nombre: "Sustitución: selano", respuesta: "H2Se" },
    { nombre: "Tradicional: ácido selenhídrico", respuesta: "H2Se" }
];

// Extraer tipo de nomenclatura y nombre corto (sin el prefijo "Tipo: ")
function parsearNombreCompleto(nombreCompleto) {
    const idx = nombreCompleto.indexOf(": ");
    if (idx === -1) return { tipo: "", nombreCorto: nombreCompleto };
    return {
        tipo: nombreCompleto.substring(0, idx).trim(),
        nombreCorto: nombreCompleto.substring(idx + 2).trim()
    };
}

// Generar todas las preguntas: fórmula, nombre en nomenclatura X, y tipo de nomenclatura
const preguntasJSON = [];

datosBase2ESO.forEach(function (entrada) {
    const formula = entrada.respuesta;
    const nombreCompleto = entrada.nombre;
    const { tipo, nombreCorto } = parsearNombreCompleto(nombreCompleto);

    // 1) Pregunta: "Pon la fórmula de: [nombre completo]"
    preguntasJSON.push({
        nombre: "Pon la fórmula de: " + nombreCompleto,
        respuesta: formula
    });

    // 2) Pregunta: "Pon el nombre en nomenclatura [tipo] para la fórmula [fórmula]"
    preguntasJSON.push({
        nombre: "Pon el nombre en nomenclatura " + tipo + " para la fórmula " + formula,
        respuesta: nombreCorto
    });

    // 3) Pregunta: "formula en [nomenclatura]: [fórmula]" → nombre en esa nomenclatura
    preguntasJSON.push({
        nombre: "formula en " + tipo + ": " + formula,
        respuesta: nombreCorto
    });

    // 4) Pregunta: "¿En qué nomenclatura está '[nombre completo]'?"
    preguntasJSON.push({
        nombre: "¿En qué nomenclatura está \"" + nombreCompleto + "\"? (Tradicional / Prefijo multiplicador / Cargas iónicas / Número de oxidación / Sustitución)",
        respuesta: tipo
    });
});

const tituloJuego = "Formulación 3º ESO: Fórmulas, Nombres y Nomenclaturas";
const prefijoPregunta = ""; // La pregunta completa va en nombre
const sufijoPregunta = "";
const curso = "3ºESO";
const descripcion = "Formulación: fórmulas, nombres en todas las nomenclaturas (tradicional, prefijo multiplicador, cargas iónicas, número de oxidación, sustitución)";
const tipoJuego = "preguntas";
const caseSensitive = false;
