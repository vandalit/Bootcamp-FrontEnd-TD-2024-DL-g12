let partidasRestantes = 0;
        let victoriasJugador = 0;
        let victoriasComputadora = 0;
        let empates = 0;

        function iniciarJuego() {
            partidasRestantes = parseInt(document.getElementById('numPartidas').value);
            if (partidasRestantes < 1) {
                alert("Por favor, ingresa un número válido de partidas.");
                return;
            }
            document.getElementById('inicioJuego').style.display = 'none';
            document.getElementById('opcionesJuego').style.display = 'block';
            document.getElementById('totalPartidas').textContent = partidasRestantes;
            actualizarPartidaActual();
        }

        function actualizarPartidaActual() {
            document.getElementById('partidaActual').textContent = document.getElementById('totalPartidas').textContent - partidasRestantes + 1;
        }

        function jugar(eleccionJugador) {
            const opciones = ['piedra', 'papel', 'tijeras'];
            const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
            
            let resultado;
            
            if (eleccionJugador === eleccionComputadora) {
                resultado = "Empate!";
                empates++;
            } else if (
                (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
                (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
                (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
            ) {
                resultado = "¡Felicidades! Has ganado esta partida.";
                victoriasJugador++;
            } else {
                resultado = "Has perdido contra la máquina en esta partida.";
                victoriasComputadora++;
            }
            
            document.getElementById('resultado').innerHTML = `
                Elegiste: ${eleccionJugador}<br>
                La computadora eligió: ${eleccionComputadora}<br>
                ${resultado}
            `;

            partidasRestantes--;
            if (partidasRestantes > 0) {
                actualizarPartidaActual();
            } else {
                finalizarJuego();
            }
        }

        function finalizarJuego() {
            document.getElementById('opcionesJuego').style.display = 'none';
            document.getElementById('resumenJuego').style.display = 'block';
            document.getElementById('resumenJuego').innerHTML = `
                <h2>Resumen del Juego</h2>
                <p>Victorias del jugador: ${victoriasJugador}</p>
                <p>Victorias de la computadora: ${victoriasComputadora}</p>
                <p>Empates: ${empates}</p>
                <button onclick="location.reload()">Jugar de nuevo</button>
            `;
        }