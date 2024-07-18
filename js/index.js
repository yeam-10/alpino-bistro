document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'our__body' y los convierte en un array
    const sliders = [...document.querySelectorAll('.our__body')];
    // Selecciona el botón con el ID 'next'
    const buttonNext = document.querySelector('#next');
    // Selecciona el botón con el ID 'before'
    const buttonBefore = document.querySelector('#before');
    let value;  // Declara una variable para almacenar el índice actual del slider

    /**************************** Functions sliders ***************************************/
    // Función auto-ejecutable para encapsular la lógica del slider
    (() => {
        // Si el botón 'next' existe, agrega un evento de clic
        if (buttonNext) {
            buttonNext.addEventListener('click', () => {
                changePosition(1);  // Llama a la función 'changePosition' con un valor de 1 para avanzar al siguiente slider
            });
        }

        // Si el botón 'before' existe, agrega un evento de clic
        if (buttonBefore) {
            buttonBefore.addEventListener('click', () => {
                changePosition(-1);  // Llama a la función 'changePosition' con un valor de -1 para retroceder al slider anterior
            });
        }

        // Define la función 'changePosition' que cambia la posición del slider
        const changePosition = (add) => {
            // Selecciona el slider actual visible (con la clase 'our__body--show') y obtiene su 'data-id'
            const currentTestimony = document.querySelector('.our__body--show').dataset.id;
            value = Number(currentTestimony);  // Convierte el 'data-id' a un número y lo asigna a 'value'
            value += add;  // Suma el valor de 'add' a 'value'

            // Remueve la clase 'our__body--show' del slider actual
            sliders[Number(currentTestimony) - 1].classList.remove('our__body--show');

            // Verifica si el nuevo valor de 'value' está fuera del rango de los sliders
            if (value === sliders.length + 1 || value === 0) {
                value = value === 0 ? sliders.length : 1;  // Si 'value' es 0, lo establece al último slider; si es mayor que la cantidad de sliders, lo establece al primer slider
            }

            // Añade la clase 'our__body--show' al nuevo slider
            sliders[value - 1].classList.add('our__body--show');
        }
    })();
});









