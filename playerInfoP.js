var player;
var playerName;
    
var pHP;
var pHM;
var pAtk;
var pDef;
var pSat;
var pSde;
var pSe;
var pAcc = 1;

var move1;
var move2;
var move3;
var move4;

const moves = [];

// GETTING POKEMON INFO

function findPokemon(n) {
    player = pokemon[n].species;
    playerName = pokemon[n].name;
    
    pHP = Math.floor(((((2*player.stats[0])+pokemon[n].ivs[0]/*+evs*/)*pokemon[n].level)/100)+pokemon[n].level+10);
    pHM = pHP;
    pAtk = Math.floor(((((2*player.stats[1])+pokemon[n].ivs[1])*pokemon[n].level)/100)+5); /*add nature*/
    pDef = Math.floor(((((2*player.stats[2])+pokemon[n].ivs[2])*pokemon[n].level)/100)+5);
    pSat = Math.floor(((((2*player.stats[3])+pokemon[n].ivs[3])*pokemon[n].level)/100)+5);
    pSde = Math.floor(((((2*player.stats[4])+pokemon[n].ivs[4])*pokemon[n].level)/100)+5);
    pSpe = Math.floor(((((2*player.stats[5])+pokemon[n].ivs[5])*pokemon[n].level)/100)+5);
}

function generateMoves() {
    moveset.forEach(function moveFind(m) {
        for (let n = 0; n < 4; n++) {
            if (player.moves[n] == undefined) {
                break;
            }
            
            else {
                if (m.name == player.moves[n]) {
                    const x = Object.assign(m);
                    moves.push(x);
                    n++
                }
                else {
                    
                }
            }
        }
    });
}

function moveCheck() {
    if (moves[0].name == undefined) {
        name1 = "N/A";
    }
    
    else {
        name1 = moves[0].name;
    }
    
    if (moves[1] == undefined) {
        name2 = "N/A";
    }
    
    else {
        name2 = moves[1].name;
    }
    
    if (moves[2] == undefined) {
        name3 = "N/A";
    }
    
    else {
        name3 = moves[2].name;
    }
    
    if (moves[3] == undefined) {
        name4 = "N/A";
    }
    
    else {
        name4 = moves[3].name;
    }
}
