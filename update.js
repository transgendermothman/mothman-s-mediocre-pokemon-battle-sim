function load() {
    // no use yet but might have one in the future ^^_^^
    document.body.style.display = "inline";
}

// BATTLE STARTER

    function battle() {
        n = 0;
        
        findPokemon();
        getEnemy();
        updateHealth();
        document.getElementById("eventTxt").innerHTML = "A wild " + enemyName + " appeared!";
        document.getElementById("starter").style.display = "none";
        document.getElementById("battleDiv").style.display = "inline";
    }
    
// HEALTH UPDATE + WIN/LOSS - should probably program a draw

    function updateHealth() {
        if (pHP > 0 && eHP > 0) {
            document.getElementById("playerhealth").innerHTML = "Your " + playerName + ": " + pHP + "/" + pHM;
            document.getElementById("enemyhealth").innerHTML = "Enemy " + enemyName + ": " + eHP + "/" + eHM;
            
            pCritical = false;
            eCritical = false;
        }
        else {
            endTurn();
        }
    }
    
    function win() {
        document.getElementById("battle").style.display = "none";
        document.getElementById("buttonMenu").style.display = "none";
        document.getElementById("enemyEventTxt").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("eventTxt").innerHTML = enemyName + " fainted! You won the battle!";
    }
    
    function loss() {
        document.getElementById("battle").style.display = "none";
        document.getElementById("buttonMenu").style.display = "none";
        document.getElementById("enemyEventTxt").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("eventTxt").innerHTML = playerName + " fainted! ... You blacked out!";
    }

// MOVES, ENDTURN, NEXT

    function moveUpdate() {
        document.getElementById("next").style.display = "inline";
        document.getElementById("buttonMenu").style.display = "none";
        document.getElementById("moves").style.display = "none";
    }
    
    function next() {
        updateHealth();
        
        if (playerMove == true) {
            if (movesLast == true) {
                endTurn();
                
                movesLast = false;
            }
            else {
                enemyTurn();
            }
            
            playerMove = false;
        }
        else if (enemyMove == true) {
            if (movesLast == false) {
                endTurn();
            }
            else {
                playerTurn();
            }
            
            enemyMove = false;
        }
        else {
            alert("TEST");
        }
    }
    
    function endTurn() {
        document.getElementById("next").style.display = "none";
        
        if (pHP <= 0) {
            loss();
        }
        else if (eHP <= 0) {
            win();
        }
        else {
            document.getElementById("buttonMenu").style.display = "inline";
            document.getElementById("moves").style.display = "none";
            document.getElementById("eventTxt").innerHTML = "What will you do?";
        }
    }

// ATTACK TEXT

    function attackText() {
        if (pCritical == true) {
            document.getElementById("eventTxt").innerHTML = playerName + " used " + moveName + "! Critical hit!";
        }
        else {
            document.getElementById("eventTxt").innerHTML = playerName + " used " + moveName + "!";
        }
    }
    
    function enemyAttackText() {
        if (eCritical == true)
        {
            document.getElementById("eventTxt").innerHTML = enemyName + " used " + eMove.name + "! Critical hit!";
        }
        else {
            document.getElementById("eventTxt").innerHTML = enemyName + " used " + eMove.name + "!";
        }
    }

// MOVE MENU

    function moveMenu() {
        document.getElementById("buttonMenu").style.display = "none";
        document.getElementById("moves").style.display = "inline";
        moveCheck();
    }
    
// PARTY
    
    function party() {
        document.getElementById("buttonMenu").style.display = "none";
        document.getElementById("pokemonInfo").style.display = "inline";
    }
    
    function partyBack() {
        document.getElementById("buttonMenu").style.display = "inline";
        document.getElementById("pokemonInfo").style.display = "none";
    }
    
// POKEMON INFO - MOVE TO ANOTHER SCRIPT?

    let pkmn = null;
    let pkmnName = null;
    
    let pkHP = null;
    let pkHM = null;
    let pkAtk = null;
    let pkDef = null;
    let pkSat = null;
    let pkSde = null;
    let pkSpe = null;

    function findParty() {
        // NOTE: ADD MOVE CHECK OR MODIFY... FIX UP LATER
        
        pkmn = pokemon[x].species;
        pkmnName = pokemon[x].name;
        
        pkHP = Math.round(((((2*pkmn.stats[0])+pokemon[x].ivs[0]/*+evs*/)*pokemon[x].level)/100)+pokemon[x].level+10);
        pkHM = pkHP;
        pkAtk = Math.floor(((((2*pkmn.stats[1])+pokemon[x].ivs[1])*pokemon[x].level)/100)+5); /*add nature*/
        pkDef = Math.floor(((((2*pkmn.stats[2])+pokemon[x].ivs[2])*pokemon[x].level)/100)+5);
        pkSat = Math.floor(((((2*pkmn.stats[3])+pokemon[x].ivs[3])*pokemon[x].level)/100)+5);
        pkSde = Math.floor(((((2*pkmn.stats[4])+pokemon[x].ivs[4])*pokemon[x].level)/100)+5);
        pkSpe = Math.floor(((((2*pkmn.stats[5])+pokemon[x].ivs[5])*pokemon[x].level)/100)+5);
    }

    function party1() {
        document.getElementById("party").style.display = "none";
        x = 0;
        findParty();
        
        document.getElementById("pokeName").innerHTML = pkmnName;
        document.getElementById("pokeSpecies").innerHTML = pkmn.name;
        document.getElementById("pokeID").innerHTML = "ID: " + pokemon[n].id;
        document.getElementById("pokeLevel").innerHTML = "Level: " + pokemon[n].level;
        document.getElementById("pokeType").innerHTML = pkmn.type[0] + "/" + pkmn.type[1]/*broken for monotype pokemon, fix later*/;
        
        document.getElementById("pokeHP").innerHTML = "HP: " + pkHP + "/" + pkHM;
        document.getElementById("pokeATK").innerHTML = "ATK: " + pkAtk;
        document.getElementById("pokeDEF").innerHTML = "DEF: " + pkDef;
        document.getElementById("pokeSPATK").innerHTML = "SPATK: " + pkSat;
        document.getElementById("pokeSPDEF").innerHTML = "SPDEF: " + pkSde;
        document.getElementById("pokeSPE").innerHTML = "SPEED: " + pkSpe;
        
        document.getElementById("pokemon").style.display = "block";
    }