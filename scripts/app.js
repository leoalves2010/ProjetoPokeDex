let listFilter = '';
let pokeballBack = document.querySelector('#pokeballBack');

window.addEventListener('scroll', () =>{
    var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
    pokeballBack.style.transform = rotation;
})