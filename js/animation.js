let appearElement = document.querySelectorAll('.appear')
window.addEventListener('scroll', ()=>{
    appearElement.forEach((appear) =>{
       if ( appear.getBoundingClientRect().top < window.innerHeight - 150){
        appear.style.opacity = '1'
       }else{
        appear.removeAttribute('style')

       }
    })

})