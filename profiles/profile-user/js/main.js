/*Interruptores */
document.addEventListener('DOMContentLoaded', function() {
    const notificacionesGeneralesSwitch = document.getElementById('notificaciones-generales');
    const subNotificacionesSwitches = document.querySelectorAll('.sub-notificacion');
    const notificacionItems = document.querySelectorAll('.notificacion-item');

    notificacionesGeneralesSwitch.addEventListener('change', function() {
        const generalActivado = this.checked;

        subNotificacionesSwitches.forEach((subSwitch, index) => {
            subSwitch.disabled = !generalActivado;
            const notificacionItem = notificacionItems[index + 1]; // +1 porque el primero es el general
            if (!generalActivado) {
                notificacionItem.classList.add('desactivado');
                subSwitch.checked = false; // Desmarca los interruptores secundarios
            } else {
                notificacionItem.classList.remove('desactivado');
            }
        });

        console.log(`Notificaciones generales ${generalActivado ? 'activadas' : 'desactivadas'}.`);
    });

    subNotificacionesSwitches.forEach(switchElement => {
        switchElement.addEventListener('change', function() {
            const tipo = this.dataset.tipo;
            const estado = this.checked ? 'activadas' : 'desactivadas';
            console.log(`Notificaciones para ${tipo} ${estado}.`);
            // Aquí puedes agregar la lógica específica para cada tipo de notificación
        });
    });
});

//slider

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-miniaturas-container');

    sliders.forEach(sliderContainer => {
        const slider = sliderContainer.querySelector('.slider-miniaturas');
        let scrollAmount = 0;
        const scrollStep = 100; // Cantidad de píxeles a desplazar por clic

        sliderContainer.addEventListener('wheel', (event) => {
            event.preventDefault();
            sliderContainer.scrollLeft += event.deltaY;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const favoritosSecciones = document.querySelectorAll('.favoritos-seccion');

    favoritosSecciones.forEach(seccion => {
        const sliderContainer = seccion.querySelector('.slider-miniaturas-container');
        const slider = sliderContainer.querySelector('.slider-miniaturas');
        const prevButton = seccion.querySelector('.prev');
        const nextButton = seccion.querySelector('.next');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                sliderContainer.scrollLeft -= 150; // Ancho de la miniatura + espacio
            });

            nextButton.addEventListener('click', () => {
                sliderContainer.scrollLeft += 150; // Ancho de la miniatura + espacio
            });
        }

        sliderContainer.addEventListener('wheel', (event) => {
            event.preventDefault();
            sliderContainer.scrollLeft += event.deltaY;
        });
    });
});
