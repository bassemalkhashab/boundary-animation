const welcome = document.querySelector('.welcome');

window.addEventListener('scroll', ()=>{
    let welocomePosition= welcome.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.25
    
    if (welocomePosition < screenPosition){
        welcome.classList.add('show-welcome');
    }
})