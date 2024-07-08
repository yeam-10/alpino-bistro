/**Se declaran variables para mostrar menu responsive */
const menu = document.querySelector('.nav__menu'); /**/
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');


/*************************Our team slider*******************************/

const sliders = [...document.querySelectorAll('.our__body')];
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value; 





/****************************Fuctions sliders***************************************/
(()=>{
 
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.our__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('our__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('our__body--show');

    }

})();
/******************* Menu Responsive ********************************** */
menu.addEventListener('click', ()=>{

    menuList.classList.toggle('nav__list--show');

});

links.forEach(function(link){

    link.addEventListener('click', ()=>{

        menuList.classList.remove('nav__list--show');

    })

});








