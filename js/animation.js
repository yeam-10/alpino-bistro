let appearElement = document.querySelectorAll('.appear') // Se declara una variable de tipo let que selecciona la clase appear

window.addEventListener('scroll', ()=>{ // Agrega un evento 'scroll' a la ventana del navegador
    appearElement.forEach((appear) =>{  // Itera sobre cada elemento que tiene la clase 'appear
      
        if ( appear.getBoundingClientRect().top < window.innerHeight - 150){  // Condicion : Si la parte superior del elemento está dentro de la ventana del navegador (ajustada por 150 píxeles)
        appear.style.opacity = '1' // Se establece la opacidad del elemento a '1', haciéndolo visible
       }else{
        appear.removeAttribute('style')   // Si no, se remueve el estilo en línea (incluyendo la opacidad), posiblemente haciéndolo invisible

       }
    })

})