var pokenum = 0;

class Pokemon {
    constructor(name,species,id,level,exp, expNext,stats,ivs,evs){
        this.name = name;
        this.species = species;
        this.id = id;
        this.level = level;
        this.exp = exp; /* TO BE IMPLEMENTED */
        this.expNext = expNext;
        this.stats = stats;
        this.ivs = ivs;
        this.evs = evs; /* TO BE IMPLEMENTED */
    }
}

function pokeGet(p) {
    let n = pokedex[p];
    pokenum = pokenum + 1;
    
    let ivsArr = [];
    for (let i = 0; i < 6; i++) {
        ivsArr.push(Math.floor(Math.random() * 31) + 1);
    }
    
    let evsArr = [0,0,0,0,0,0];
    
    const poke = new Pokemon(n.name,n,pokenum,10,0,0,n.stats,ivsArr,evsArr);
    pokemon.push(poke);
    battle();
}

// POKEMON OBTAIN

    function bulbasaur() {
        pokeGet(0);
    }
    
    function charmander() {
        pokeGet(1);
    }
    
    function squirtle() {
        pokeGet(2);
    }
