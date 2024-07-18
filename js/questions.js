/********************Questions services************************* */
(function(){
    // Selecciona todos los elementos con la clase 'questions__title' y los convierte en un array
    const titleQuestions = [...document.querySelectorAll('.questions__title')]; 
    console.log(titleQuestions) // Muestra los elementos seleccionados en la consola

    titleQuestions.forEach(question =>{ 
        question.addEventListener('click', ()=>{ // Agrega un evento 'click' a cada 'question'
            let height = 0; // Inicializa la variable 'height' a 0
            let answer = question.nextElementSibling; // Selecciona el siguiente elemento hermano (la respuesta a la pregunta)
            let addPadding = question.parentElement.parentElement; // Selecciona el elemento padre del padre de 'question'

            addPadding.classList.toggle('questions__padding--add');      // Alterna la clase 'questions__padding--add' en 'addPadding'
            question.children[0].classList.toggle('questions__arrow--rotate'); // Alterna la clase 'questions__arrow--rotate' en el primer hijo de 'question'

            if(answer.clientHeight === 0){ // Si la altura actual del elemento 'answer' es 0 (es decir, está colapsado)
            
                height = answer.scrollHeight; // Establece 'height' a la altura total del contenido de 'answer' (incluyendo contenido no visible)
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;  // Establece la altura del estilo en línea de 'a
        });
    });
})();