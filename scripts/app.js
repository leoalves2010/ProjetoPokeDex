import {ListService} from './list-service';
import {PokeService} from './poke-service';

let listFilter   = '';
const pokeballBack = document.querySelector('#pokeballBack');
const pokeFilter   = document.querySelector('#pokeFilter');
const pokeList     = document.querySelector('#pokeList');

pokeFilter.addEventListener('keyup', (event) => {
    listFilter = event.target.value;
    setList();
})

function setList(){
    PokeService.listAll()
    .then(filterList)
    .then(ListService.createList)
    .then(template => pokeList.innerHTML = template);
}

function filterList(pkmList){
    return pkmList.filter(pokemon => pokemon.name.includes(listFilter.toLowerCase()));
}

window.addEventListener('scroll', () => {
    var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
    pokeballBack.style.transform = rotation;
});

setList();