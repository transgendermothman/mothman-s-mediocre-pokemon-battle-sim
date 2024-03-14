let n = null;

var player = null;
var playerName = null;
    
var pHP = null;
var pHM = null;
var pAtk = null;
var pDef = null;
var pSat = null;
var pSde = null;
var pSpe = null;
var pAcc = 1;

// GETTING POKEMON INFO - quick note to self: maybe use variable in place of "0" for when you need to switch pokemon???

function findPokemon() {
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

var moveNum = 0;
// "why the hell did you do moves like this" i'm sure there's a better way. i don't care

function findMove(moves) {
    return moves.name = player.moves[moveNum];
}

function moveCheck() {
    moveNum = 0;
    move1 = moveset.find(findMove);
        if (move1 == undefined) {
            name1 = "N/A";
        }
        else {
            name1 = move1.name;
        }
    
    moveNum = 1;    
    move2 = moveset.find(findMove);
        if (move2 == undefined) {
            name2 = "N/A";
        }
        else {
            name2 = move2.name;
        }
    
    moveNum = 2;
    move3 = moveset.find(findMove);
        if (move3 == undefined) {
            name3 = "N/A";
        }
        else {
            name3 = move3.name;
        }

    moveNum = 3;
    move4 = moveset.find(findMove);
        if (move4 == undefined) {
            name4 = "N/A";
        }
        else {
            name4 = move4.name;
        }
        
    document.getElementById("moveOne").innerHTML = name1;
    document.getElementById("moveTwo").innerHTML = name2;
    document.getElementById("moveThree").innerHTML = name3;
    document.getElementById("moveFour").innerHTML = name4;
    
    // it wouldn't let me access the move names for reasons beyond my understanding so i had to do this
}