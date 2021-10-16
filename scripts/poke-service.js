export const PokeService = {
    get url(){
        return "https://dev.treinaweb.com.br/pokeapi/pokedex/1";
    },
    list: [],
    listAll(){
        if(this.list.length){
            return Promise.resolve(this.list);
        }else{
            return fetch(this.url)
                .then(response => response.json())
                .then(response => response.pokemon)
                .then(pkmList => {
                    return pkmList.map(pokemon => {
                        var number = this.getNumberFromURL(pokemon.resource_uri);
                        return Object.assign({}, pokemon, {number});
                    })
                    .filter(pokemon => pokemon.number < 1000)
                    .sort((a, b) => (a.number > b.number) ? 1 : -1)
                    .map(pokemon => {
                        var number = (`000${pokemon.number}`).slice(-3);
                        return Object.assign({}, pokemon, {number});
                    });
                })
                .then(list => {
                    this.list = list;
                    return this.list;
                })
        }
    },
    getNumberFromURL(url){
        return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    }
}