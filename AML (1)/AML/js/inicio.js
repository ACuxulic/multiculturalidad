function inicio() {
    // HTML de la sección de "Inicio"
    const inicioContent = `
        <section class="section">
            <div class="mission-text">
             <h2>Misión</h2>
                Facilitar el acceso a información sobre eventos culturales en Guatemala, ofreciendo una experiencia de navegación intuitiva y recursos interactivos que permitan a los usuarios conocer, compartir y participar activamente en el patrimonio cultural guatemalteco.
            </div>
            
            <div class="mission-text">
            <h2>Visión</h2>
                Convertirse en la plataforma de referencia en línea para la promoción y difusión de encuentros culturales de Guatemala, conectando a comunidades, artistas y público en general para fortalecer la apreciación de la diversidad cultural del país.
            </div>
            
            <div class="mission-text">
            <h2>Valores</h2>
                <ul>
                    <li><strong>Diversidad:</strong> Celebramos y promovemos la variedad cultural de Guatemala, destacando el valor de cada tradición y manifestación artística.</li>
                    <li><strong>Accesibilidad:</strong> Nos comprometemos a hacer que la información cultural sea accesible y comprensible para todos los públicos.</li>
                    <li><strong>Innovación:</strong> Fomentamos la creatividad en la presentación y promoción de contenidos culturales.</li>
                    <li><strong>Compromiso Comunitario:</strong> Trabajamos en colaboración con comunidades y organizaciones para fortalecer la identidad cultural del país.</li>
                    <li><strong>Transparencia:</strong> Ofrecemos información clara y verificada para garantizar una experiencia confiable a los usuarios.</li>
                </ul>
            </div>
            
            <div class="mission-text">
            <h2>Objetivos</h2>
                Ofrecer un espacio digital interactivo que permita a los usuarios conocer, explorar y participar en los diferentes eventos culturales que se llevan a cabo en Guatemala, promoviendo la participación activa y el intercambio cultural entre regiones y comunidades.
            </div>
            
            <div class="mission-text">
            <h2>¿Qué es multiculturalidad?</h2>
                La multiculturalidad se refiere a la convivencia de diversas culturas en un mismo lugar. Es el reconocimiento y el respeto hacia las costumbres, creencias y tradiciones de diferentes grupos, permitiendo que todos puedan expresarse y vivir según sus propias identidades.
            </div>
            
            <div class="mission-text">
            <h2>Género</h2>
                El género es la manera en que cada sociedad entiende y asigna roles, comportamientos y características a las personas, según se identifiquen como hombre, mujer u otras identidades. Nos ayuda a comprender cómo se espera que actuemos y nos comuniquemos, promoviendo el respeto y la igualdad entre todos.
            </div>
            
            <div class="mission-text">
            <h2>Equidad</h2>
                La equidad implica tratar a las personas de forma justa, reconociendo sus necesidades y brindándoles las oportunidades que necesitan para desarrollarse. Busca asegurar que todas las personas tengan acceso a los mismos derechos y recursos, sin importar su origen, género o situación social.
            </div>
        </section>
    `;

    // Insertar el contenido en el contenedor de contenido
    document.getElementById('content-container').innerHTML = inicioContent;
    
}
