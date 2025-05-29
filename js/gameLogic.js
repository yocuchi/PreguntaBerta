
function seleccionarPalabra() {

    let totalPalabras = preguntasJSON.length;
    let probabilidades = preguntasJSON.map(palabra => {
        let porcentaje= resultados.find(resultado => resultado.palabra === palabra.nombre)?.porcentaje || 0; // Obtener aciertos desde resultados
        //let porcentaje = aciertos > 0 ? aciertos : 0; // Si hay aciertos, usar ese valor, de lo contrario 0
        console.log(palabra.nombre + " "+porcentaje);
        return { palabra, probabilidad: 1 / (porcentaje + 1) }; // Menos aciertos, más probabilidad
    });

    // Normalizar las probabilidades
    let sumaProbabilidades = probabilidades.reduce((acc, obj) => acc + obj.probabilidad, 0);
    let probabilidadesNormalizadas = probabilidades.map(obj => ({
        nombre: obj.palabra.nombre,
        probabilidad: obj.probabilidad / sumaProbabilidades
    }));
    console.table(probabilidadesNormalizadas); // Pinta las probabilidades normalizadas en modo tabla
    // Seleccionar una palabra basada en las probabilidades
    let random = Math.random();

    console.log(random); // Mostrar el valor de random en la consola
    let acumulado = 0;
    for (let i = 0; i < totalPalabras; i++) {
        acumulado += probabilidadesNormalizadas[i].probabilidad;
        if (random < acumulado) {
            palabraActual = probabilidades[i].palabra;
            break;
        }
    }
    if (!palabraActual) { // Si no se ha elegido ninguna palabra
        palabraActual = preguntasJSON[Math.floor(Math.random() * totalPalabras)]; // Elegir al azar entre todas
    }

    palabrasUsadas.push(palabraActual.nombre); // Agregar a las palabras usadas
    return palabraActual;
}


function verificarRespuesta(palabra, respuestaRespuesta) {
    let mensaje = `Resultados para "${palabra.nombre}": `;

    // Cargar el contador de preguntas y aciertos desde localStorage
    let resultadosGuardados = JSON.parse(localStorage.getItem(tituloJuego)) || [];
    let resultadoPalabra = resultadosGuardados.find(r => r.palabra === palabra.nombre);
    if (resultadoPalabra) {
        palabra.preguntas = resultadoPalabra.preguntas;
        palabra.aciertos = resultadoPalabra.aciertos;
        console.log(palabra.preguntas); // Mostrar resultados en consola
    } else {
        palabra.preguntas = 0;
        palabra.aciertos = 0;
        console.log(palabra.preguntas); // Mostrar resultados en consola
    }

    palabra.preguntas++; // Incrementar el número de preguntas

    if (respuestaRespuesta.toLowerCase() === palabra.respuesta.toLowerCase()) {
        mensaje += `<span style="color: green;">Correcto: ${palabra.respuesta}</span>. `;

        palabra.aciertos++; // Incrementar el número de aciertos
        totalAciertos++;
    } else {
        mensaje += `<span style="color: red;">Incorrecto: ${respuestaRespuesta}</span>. La traducción es <span style="color: orange;">${palabra.respuesta}</span>.`;
    }

    totalPreguntas++; // Incrementar el total de preguntas

    console.log(palabra); // Mostrar todo el objeto palabra en consola

    // Verificar si ya existe la clave palabra.nombre en resultados
    let resultadoExistente = resultados.find(r => r.palabra === palabra.nombre);
    if (resultadoExistente) {
        // Si existe, actualizar los valores
        resultadoExistente.respuesta = respuestaRespuesta;
        resultadoExistente.preguntas = palabra.preguntas;
        resultadoExistente.aciertos = palabra.aciertos;
        resultadoExistente.porcentaje = (palabra.aciertos / palabra.preguntas) * 100;
    } else {
        // Si no existe, hacer push
        resultados.push({ palabra: palabra.nombre, respuesta: respuestaRespuesta, preguntas: palabra.preguntas, aciertos: palabra.aciertos, porcentaje: (palabra.aciertos / palabra.preguntas) * 100 });
    }

    // Guardar resultados en localStorage al final
    localStorage.setItem(tituloJuego, JSON.stringify(resultados));

    console.table(JSON.parse(localStorage.getItem(tituloJuego))); // Imprimir la tabla de resultados en consola desde localStorage

    $('.card').remove();

    // Calcular y mostrar el porcentaje de aciertos
    let porcentajeAciertos = (palabra.aciertos / palabra.preguntas) * 100;
    mensaje += `<br/><span>Puntos: </span>${totalAciertos}`;

    $('#contenedor').append(`<div class="card" style="width: 75%; margin: auto;"><h4>${mensaje}</h4></div>`);

    if (totalPreguntas >= 10) {
        mostrarResultadosFinales();
    } else {
        actualizarTitulo();
        iniciarQuiz();
    }
}

function inicializarJuego() {
    if (resultados.length > 0) {
        // Si hay resultados guardados, se pueden cargar o mostrar de alguna manera
        console.log("Resultados cargados desde localStorage.");
    }
    preguntarNombre();
}

function preguntarNombre() {
    try {
        usuarioActual = sessionStorage.getItem('usuarioActual');
    } catch (error) {
        usuarioActual = null;
        console.log("Error al acceder a sessionStorage:", error);
    }

    if (!usuarioActual) {
        usuarioActual = prompt("Por favor, ingresa tu nombre:");
        try {
            sessionStorage.setItem('usuarioActual', usuarioActual); // Guardar el nombre en sesión
        } catch (error) {
            console.log("Error al guardar en sessionStorage:", error);
        }
    }
    mostrarConfiguracion();
}


function reiniciarJuego() {
    totalPreguntas = 0;
    totalAciertos = 0;
    palabrasUsadas = [];
    resultados = []; // Reiniciar la tabla de resultados
    localStorage.removeItem(tituloJuego); // Borrar el cache
    //sessionStorage.removeItem('usuarioActual'); // Borrar el nombre de usuario de sesión
    $('#contenedor').empty(); // Limpiar el contenedor
    preguntarNombre(); // Volver a preguntar el nombre
}

function iniciarQuiz() {
    palabraActual = seleccionarPalabra();
    if (palabraActual) {
        mostrarFormulario(palabraActual);
    }
}
// ... otras funciones de lógica del juego ... 