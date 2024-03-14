var eHP = 1;
var eHM = 0;
var eAtk = 0;
var eDef = 0;
var eSat = 0;
var eSde = 0;
var eSpe = 0;

var enemyName = "";

var pCritical = false;
var eCritical = false;

var movePower = 0;

var movesLast = false;
var enemyMove = false;
var playerMove = false;

let eMove = null;

// MOVES

    function speedCheck() {
        if (moveName == undefined)
        {
            
        }
        
        else {
            if (pSpe > eSpe) {
                movesLast = false;
                playerTurn();
            }
            else if (eSpe > pSpe) {
                movesLast = true;
                enemyTurn();
            }
            else if (eSpe == pSpe) {
                var chance = Math.floor(Math.random() * 2);
                if (chance >= 2) {
                    movesLast = false;
                    playerTurn();
                }
                else {
                    movesLast = true;
                    enemyTurn();
                }
            }
        }
    }

    function moveOne() {
        move = move1;
        movePower = move1.power;
        moveName = name1;
        
        speedCheck();
    }
    
    function moveTwo() {
        move = move2;
        movePower = move2.power;
        moveName = name2;
        
        speedCheck();
    }
    
    function moveThree() {
        move = move3;
        movePower = move3.power;
        moveName = name3;
        
        speedCheck();
    }
    
    function moveFour() {
        move = move4;
        movePower = move4.power;
        moveName = name4;
        
        speedCheck();
    }

// PLAYER + ENEMY TURNS

    function playerTurn() {
        playerMove = true;
        
        accuracy = move.accuracy * pAcc
        accCheck = Math.round(Math.random() * accuracy);
        
        if (accCheck > accuracy) {
            document.getElementById("eventTxt").innerHTML = playerName + " used " + moveName + ", but missed!";
        }
        
        else {
            if (move.mType == "Physical") {
                physicalAttackP();
            }
            else if (move.mType == "Special") {
                specialAttackP();
            }
        
            moveUpdate();
            attackText();
        }
    }
    
    function findMoveE(moves) {
        return moves.name = enemy.moves[em];
    }
    
    function enemyTurn() {
        enemyMove = true;
        
        em = Math.floor(Math.random() * 4);
        eMove = moveset.find(findMoveE);
        
        if (eMove == undefined) {
            do {
                em = Math.floor(Math.random() * 4);
                eMove = moveset.find(findMoveE);
            }
            
            while(eMove == undefined);
        }
        
        accuracy = eMove.accuracy * eAcc
        accCheck = Math.round(Math.random() * accuracy);
        
        if (accCheck > accuracy) {
            document.getElementById("eventTxt").innerHTML = enemyName + " used " + eMove.name + ", but missed!";
        }
        
        else {
            if (eMove.mType == "Physical") {
                physicalAttackE();
            }
            else if (eMove.mType == "Special") {
                specialAttackE();
            }
            
            moveUpdate();
            enemyAttackText();
        }
    }
    
// PLAYER ATTACKS

    function physicalAttackP() {
        /* add accuracy check when you put moves together */
        var pDamage = Math.floor(((((2/*level*//5)+2)*movePower*(pAtk/eDef))/50)+2)
        var crit = Math.random() * 24;
        /* later account for type effectiveness too - make separate function and perhaps another script to handle types? */
        
        if (crit <= 1) {
            pCritical = true;
            pDamage = Math.floor(pDamage * 1.5);
        }
        
        eHP = eHP - pDamage;
    }
    
    function specialAttackP() {
        var pDamage = Math.floor(((((2/*level*//5)+2)*movePower*(pSat/eSde))/50)+2)
        var crit = Math.floor(Math.random() * 24);
        
        if (crit <= 1) {
            pCritical = true;
            pDamage = Math.floor(pDamage * 1.5);
        }
        
        eHP = eHP - pDamage;
    }

// ENEMY ATTACKS

    function physicalAttackE() {
        var eDamage = Math.floor(((((2/*level*//5)+2)*eMove.power*(eAtk/pDef))/50)+2)
        var crit = Math.random() * 24;
        
        if (crit <= 1) {
            eCritical = true;
            eDamage = Math.floor(eDamage * 1.5);
        }
        
        pHP = pHP - eDamage;
    }
    
    function specialAttackE() {
        var eDamage = Math.floor(((((2/*level*//5)+2)*eMove.power*(eSat/pSde))/50)+2)
        var crit = Math.random() * 24;
        
        if (crit <= 1) {
            eCritical = true;
            eDamage = Math.floor(eDamage * 1.5);
        }
        
        pHP = pHP - eDamage;
    }