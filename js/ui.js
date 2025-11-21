
function mostrarConfiguracion() {
    let card = $(`
        <div class="card" id="Configuracion" style="width: 75%; margin: auto;">
            <h3>Configuración de Partida</h3>
            <button id="iniciar-quiz" class="btn btn-primary mt-2">Iniciar Quiz</button>
        </div>
    `);
    $('#contenedor').append(card);

    $('#iniciar-quiz').on('click', function () {
        $('.card').remove(); // Eliminar la tarjeta de configuración
        mostrarBienvenida(usuarioActual);
    });
}


function mostrarFormulario(palabra) {
    let card = $(`
        <div class="card" id="Pregunta" style="width: 75%; margin: auto;">
            <h3>${prefijoPregunta} "${palabra.nombre}" ${sufijoPregunta}</h3>
            <label>Respuesta:</label>
            <input type="text" name="respuesta" class="form-control" placeholder="Pon tu respuesta" autofocus autocomplete="off">
            <button class="btn btn-primary mt-2" id="enviar-${palabra.nombre}" onclick="javascript: verificarRespuesta(palabraActual, $('input[name=\\\'respuesta\\\']').val().trim());">Enviar</button>
        </div>
    `);
    $('#contenedor').append(card);

    // Establecer el foco en el campo de texto
    $(`input[name='respuesta']`).focus();

    // Agregar evento para enviar al presionar Enter
    $(`input[name='respuesta']`).on('keypress', function (e) {
        if (e.which === 13) { // 13 es el código de la tecla Enter
            e.preventDefault(); // Prevenir el comportamiento por defecto
            $(`#enviar-${palabra.nombre}`).click(); // Simular clic en el botón
        }
    });
}



function mostrarEstadisticas() {
    let resultadosHTML = resultados.map(r => {
        let porcentaje = (r.aciertos / r.preguntas) * 100;
        let color;
        if (porcentaje < 50) {
            color = 'red';
        } else if (porcentaje >= 50 && porcentaje <= 90) {
            color = 'yellow';
        } else {
            color = 'green';
        }
        return `<tr style="color: ${color};"><td>${r.palabra}</td><td>${r.preguntas}</td><td>${r.aciertos}</td><td>${porcentaje.toFixed(2)}%</td></tr>`;
    }).join('');

    let modal = $(`
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="background-color: black; color: white;">
                    <div class="modal-header">
                        <h5 class="modal-title">Estadísticas</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h6>Resultados:</h6>
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr>
                                    <th>Palabra</th>
                                    <th>Preguntas</th>
                                    <th>Aciertos</th>
                                    <th>Porcentaje</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${resultadosHTML}
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button id="borrar-estadisticas" class="btn btn-danger">Borrar Estadísticas</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `);
    $('body').append(modal);
    modal.modal('show');

    $('#borrar-estadisticas').on('click', function () {
        reiniciarJuego();
        modal.modal('hide');
    });
}

function mostrarBienvenida(usuario) {
    actualizarTitulo();
    iniciarQuiz();
}

function actualizarTitulo() {
    document.title = `${tituloJuego} - ${usuarioActual} - Preguntas: ${totalPreguntas}/10`;
    $('h1').text(`Bienvenido ${usuarioActual} - Preguntas: ${totalPreguntas}/10`);
}
