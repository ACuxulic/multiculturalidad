function cargarCulturaSociedad() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
    <section class="cultura-sociedad">
        <h1 class="titulo-principal">CULTURA Y SOCIEDAD</h1>

        <div class="descripcion">
            <p>
                La cultura y sociedad guatemalteca es una mezcla de tradiciones mayas, españolas y modernas. Las comunidades indígenas juegan un papel clave, conservando lenguas, vestimenta y costumbres ancestrales. La familia y la comunidad son fundamentales, y las festividades como la Semana Santa y las fiestas patronales reflejan la devoción religiosa y las tradiciones locales. La gastronomía, que incluye platos como el pepián y los tamales, fusiona ingredientes nativos con influencias extranjeras. Aunque existen desigualdades sociales, la identidad guatemalteca se caracteriza por la resistencia cultural y la conexión con sus raíces.
            </p>
            <video controls width="50%" src="video/CulySoc.mp4" class="video-principal"></video>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Gastronomía</h2>
                <p>
                    La cocina guatemalteca combina ingredientes autóctonos y españoles. Platillos típicos incluyen el pepián, el kak'ik, y los tamales, los cuales se preparan especialmente para celebraciones. La gastronomía no solo resalta los sabores, sino también la identidad cultural del país, especialmente en comunidades indígenas (<a href="https://www.visitguatemala.com" target="_blank">Gastronomía tradicional guatemalteca</a>, 2024). Las festividades guatemaltecas, como la Semana Santa y el Día de los Muertos, también son una mezcla de rituales indígenas y católicos, reflejando el sincretismo cultural (<a href="https://www.visitguatemala.com" target="_blank">Fiestas y tradiciones de Guatemala</a>, 2024).
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/gastro.png" alt="Gastronomía de Guatemala" class="imagen-apartado">
                <img src="images/gastro2.jpg" alt="Gastronomía="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Fiestas y Tradiciones</h2>
                <p>
                    Las fiestas y tradiciones guatemaltecas son una expresión vibrante de la identidad cultural del país, combinando rituales indígenas, celebraciones católicas y festividades patrias. Una de las más destacadas es la Semana Santa, especialmente en Antigua Guatemala, donde se realizan procesiones religiosas acompañadas de alfombras de aserrín y flores. Además, el Día de la Independencia, las fiestas patronales y otras celebraciones, como el Día de los Muertos y la Fiesta de la Virgen de la Asunción, reflejan el sincretismo cultural entre las creencias mayas y la influencia española. Estas festividades no solo son momentos de devoción, sino también de arte y comunidad (<a href="https://www.antiguaguatemala.com" target="_blank">Semana Santa en Guatemala</a>, 2024; <a href="https://www.visitguatemala.com" target="_blank">Fiestas y tradiciones de Guatemala</a>, 2024; <a href="https://www.guatemala.com" target="_blank">Gastronomía y Tradiciones de Guatemala</a>, 2024).
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/tra.png" alt="Fiestas y Tradiciones" class="imagen-apartado">
                <img src="images/tra2.jpg" alt="Fiesta" class="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Comunidades Indígenas</h2>
                <p>
                    Las comunidades indígenas de Guatemala, compuestas por 22 grupos mayas y otros pueblos garífunas y xincas, son fundamentales para la identidad cultural del país. Estos grupos, como los K'iche', Kaqchikel y Mam, entre otros, mantienen vivas sus lenguas y tradiciones a pesar de los desafíos históricos, como la colonización y la discriminación. La relación de estas comunidades con la tierra y la naturaleza es vital, especialmente a través de prácticas agrícolas sostenibles. Además, la cosmovisión maya, que conecta divinidad, naturaleza y tiempo, es esencial para sus festividades y rituales. A pesar de enfrentar problemas como la exclusión social y la pérdida de tierras, las comunidades indígenas continúan luchando por el reconocimiento de sus derechos y la preservación de su cultura (<a href="https://www.guatemala.com" target="_blank">Comunidad indígena en Guatemala</a>, 2024; <a href="https://www.unesco.org" target="_blank">Pueblos indígenas de Guatemala</a>, 2024; <a href="https://www.amnesty.org" target="_blank">La situación de los pueblos indígenas</a>, 2024).
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/indi.png" alt="Comunidades Indígenas" class="imagen-apartado">
                <img src="images/indi2.jpeg" alt="Indigena" class="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Contacto y Comunidad</h2>
                <p>
                    Las comunidades indígenas en Guatemala tienen una estructura social organizada en consejos comunitarios, en los que los líderes espirituales, como los ajq'ij, juegan un papel clave en la toma de decisiones y la preservación de las tradiciones. Estas comunidades mantienen una profunda conexión con la tierra y otros recursos naturales, que son vistos como sagrados. A pesar de los procesos de contacto y mestizaje cultural con otros grupos, como los mestizos y garífunas, las comunidades indígenas enfrentan discriminación y exclusión social, especialmente en áreas urbanas. La conexión con el mundo exterior ha sido facilitada por la migración y las redes sociales, permitiendo que los guatemaltecos mantengan su cultura y luchas por sus derechos. Sin embargo, persisten desafíos relacionados con la integración social y la preservación cultural, aunque hay un movimiento creciente hacia la valorización de las culturas indígenas y el reconocimiento plural en la política del país (<a href="https://www.opi.org.gt" target="_blank">Organización de Pueblos Indígenas de Guatemala</a>, 2024; <a href="https://www.cdhg.org" target="_blank">Comunidad y derechos en Guatemala</a>, 2024; <a href="https://www.ine.gob.gt" target="_blank">Diversidad Cultural y Social en Guatemala</a>, 2024).
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/contac.png" alt="Contacto y Comunidad" class="imagen-apartado">
                <img src="images/contac2.jpg" alt="Contacto" class="imagen-apartado">
            </div>
        </div>
    </section>
`;
}
