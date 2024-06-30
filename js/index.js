/**Se declaran variables para mostrar menu responsive */
const menu = document.querySelector('.nav__menu'); /**/
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');


/** Variables declaradas para slider */
let slider = document.querySelectorAll(".slider__content__img")
//console.log(slider) se imprime para saber valores de variables
let conteinerInn = document.querySelector(".slider__inner")
//console.log(conteinerInn)  se imprime para saber valores de variables
let i = 0

/**********Menu Responsive ****** */
menu.addEventListener('click', ()=>{

    menuList.classList.toggle('nav__list--show');

});

links.forEach(function(link){

    link.addEventListener('click', ()=>{

        menuList.classList.remove('nav__list--show');

    })

});

/*****************Slider**********************/

setInterval(() =>{
    
    if (i < slider.length - 1){
        i++
        let calcule = (i * (-100))
        conteinerInn.style.transform = (`translateX(${calcule}vw)`)
    }
    else if (i == slider - 1){
        i = 0
        let calcule = (i * (-100))
        conteinerInn.style.transform = (`translateX(${calcule}vw)`)  
     
    }

},5000)