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

function pokeAdd() {
    pokeNum = pokeNum + 1;
    
    let ivsArr = [];
    for (let i = 0; i < 6; i++) {
        ivsArr.push(Math.floor(Math.random() * 31) + 1);
    }
    
    let evsArr = [0,0,0,0,0,0];
    
    const poke = new Pokemon(p.name,p,pokeNum,10,0,0,p.stats,ivsArr,evsArr);
    pokemon.push(poke);
}

// POKEMON OBTAIN

    function bulb() {
        p = pokedex[0];
        pokeAdd();
        battle();
    }
    
    function char() {
        p = pokedex[1];
        pokeAdd();
        battle();
    }
    
    function squir() {
        p = pokedex[2];
        pokeAdd();
        battle();
    }