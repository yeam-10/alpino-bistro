const menu = document.querySelector('.nav__menu');  // se declaran las variables de tipo const
const menuList = document.querySelector('.nav__list'); // Selecciona el elemento con la clase 'nav__list'
const links = document.querySelectorAll('.nav__link'); // Selecciona todos los elementos con la clase 'nav__link'

/******************* Menu Responsive ********************************** */

menu.addEventListener('click', ()=>{   //Se agrega un evento al hacer click

    menuList.classList.toggle('nav__list--show'); //Al hacer clic, se alterna la clase 'nav__list--show' en el elemento 'menuList'
                                                   // Esto usa para mostrar u ocultar el menú responsive

});

links.forEach(function(link){ // Itera sobre cada elemento con la clase 'nav__link'

    link.addEventListener('click', function(){
         // Al hacer clic en cualquier enlace, se remueve la clase 'nav__list--show' del 'menuList'
        // Esto se hace [ara asegurarse de que el menú se oculte después de seleccionar una opción

        menuList.classList.remove('nav__list--show');

    })

});
