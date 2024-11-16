function cargarcienciassociales() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
        <section class="ciencias-sociales">
            <h1 class="titulo-principal">CIENCIAS SOCIALES Y SUS RAMAS</h1>

            <div class="descripcion">
                <p>
                    La diversidad cultural y social de Guatemala es un reflejo de su rica historia y tradiciones. Este país centroamericano, con su herencia maya profundamente arraigada, presenta una amalgama de costumbres, lenguas y prácticas que se entrelazan en la vida diaria de sus habitantes. Desde las vibrantes festividades y la exquisita gastronomía hasta la música y el arte que cuentan las historias de su gente, Guatemala ofrece un mosaico cultural que es tanto diverso como unificado. Sin embargo, a pesar de su riqueza cultural, el país también enfrenta desafíos significativos en áreas como la desigualdad social, el acceso a la educación y la integración de sus comunidades indígenas. Este sitio web pretende ser una ventana abierta a las diversas facetas de la cultura y sociedad guatemalteca, explorando sus aspectos más coloridos y celebratorios, así como los retos y movimientos que buscan construir un futuro más equitativo para todos sus ciudadanos. En el siguiente video se describirá la mayoría de ellos.
                </p>
                <video controls width="50%" src="video/ciencias.mp4" class="video-principal"></video>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Antropología</h2>
                    <p>
                        La antropología en Guatemala se centra en el estudio de las culturas indígenas, como las mayas, que siguen siendo una parte integral y viva de la sociedad guatemalteca. Investigaciones antropológicas se enfocan en las prácticas tradicionales, creencias y estructuras sociales de estas comunidades. Además, se estudian los procesos de mestizaje y la resistencia cultural frente a la globalización y la modernidad. Los antropólogos también examinan las relaciones interétnicas y la influencia de políticas gubernamentales en la preservación de la cultura indígena (<a href="https://www.iah.gob.gt" target="_blank">Instituto de Antropología e Historia de Guatemala, 2023</a>; <a href="https://www.usac.edu.gt" target="_blank">Universidad de San Carlos de Guatemala, 2023</a>; <a href="https://www.centroestudiosmayas.org.gt" target="_blank">Centro de Estudios Mayas, 2023</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/antro2.jpg" alt="Antropologia" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Economía</h2>
                    <p>
                        La economía de Guatemala está marcada por una considerable desigualdad social y económica, con gran parte de la población rural viviendo en condiciones de pobreza. Los estudios económicos se enfocan en el impacto de las remesas, la agricultura de subsistencia y el comercio justo en el desarrollo rural. Además, la economía informal juega un papel importante en la vida cotidiana de los guatemaltecos, mientras que el turismo representa una fuente crucial de ingresos, especialmente en regiones como el Lago Atitlán y Antigua Guatemala (<a href="https://www.banguat.gob.gt" target="_blank">Banco de Guatemala, 2023</a>; <a href="https://www.ine.gob.gt" target="_blank">Instituto Nacional de Estadística, 2023</a>; <a href="https://www.segeplan.gob.gt" target="_blank">Secretaría de Planificación y Programación de la Presidencia, 2023</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/eco2.jpg" alt="Economia" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Psicología</h2>
                    <p>
                        En Guatemala, la psicología aborda temas como los efectos del conflicto armado en la salud mental, el trauma transgeneracional y la resiliencia comunitaria. Los psicólogos estudian la prevalencia de trastornos mentales en contextos de pobreza y violencia, y desarrollan intervenciones para mejorar el bienestar psicológico. También se examina el impacto de la migración en la salud mental de las familias y se promueven programas de apoyo psicológico en comunidades vulnerables (<a href="https://www.agp.org.gt" target="_blank">Asociación Guatemalteca de Psicología, 2023</a>; <a href="https://www.uvg.edu.gt" target="_blank">Universidad del Valle de Guatemala, 2023</a>; <a href="https://www.saludmentalguatemala.org.gt" target="_blank">Fundación para la Salud Mental de Guatemala, 2023</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/psi2.jpg" alt="Gastronomía de Guatemala" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Sociología</h2>
                    <p>
                        La sociología en Guatemala estudia las dinámicas sociales y las desigualdades estructurales que afectan a la población. Los sociólogos investigan temas como la migración interna y externa, la urbanización, la violencia de género y la criminalidad. Además, se analizan las prácticas comunitarias y la organización social en las áreas rurales e indígenas. El impacto de las políticas públicas en la cohesión social y el desarrollo comunitario es otro foco importante de estudio (<a href="https://www.flacso.edu.gt" target="_blank">Facultad Latinoamericana de Ciencias Sociales, 2023</a>; <a href="https://www.icesd.org.gt" target="_blank">Instituto Centroamericano de Estudios Sociales y Desarrollo, 2023</a>; <a href="https://www.url.edu.gt" target="_blank">Universidad Rafael Landívar, 2023</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/soci.jpg" alt="Gastronomía de Guatemala" class="imagen-apartado">
                </div>
            </div>
        </section>
    `;
}
