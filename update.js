var critical = false;

var mName;
var mType;
var moveType;
var mPower;
var mAccuracy;

var movesLast = false;
var enemyMove = false;
var playerMove;

var n;

// MOVES

    function speedCheck() {
        if (mName == undefined)
        {
            alert("move undefined");
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
    
    function moveFind(x) {
            let i = 0;
            console.log(n);
            
            do {
                if (x.number == moves[n].number) {
                    console.log(moves[n]);
                    console.log(x);
                    console.log("movefind");
                    mName = x.name;
                    mType = x.type;
                    moveType = x.mType;
                    mPower = x.power;
                    mAccuracy = x.accuracy;
                    break;
                }
                else {
                    
                }
                
                i++;
            }
            
            while (i < 2);
        }

    function moveOne() {
        n = 0;
        console.log("MOVE1");
        moveset.forEach(moveFind);
        console.log(mName + mType + moveType + mPower + mAccuracy);
        speedCheck();
    }
    
    function moveTwo() {
        n = 1;
        console.log("MOVE2");
        moveset.forEach(moveFind);
        console.log(mName + mType + moveType + mPower + mAccuracy);
        speedCheck();
    }
    
    function moveThree() {
        moveset.forEach(function moveFind(x) {
            for (let n = 0; n < 1; n++) {
                if (moves[2].name == undefined) {
                    break;
                }
                
                else {
                    if (x.number == moves[2].number) {
                        mName = x.name;
                        mType = x.type;
                        moveType = x.mType;
                        mPower = x.power;
                        mAccuracy = x.accuracy;
                        break;
                    }
                    else {
                        
                    }
                }
            }
        });
        console.log(mName + mType + moveType + mPower + mAccuracy);
        speedCheck();
    }
    
    function moveFour() {
        moveset.forEach(function moveFind(x) {
            for (let n = 0; n < 1; n++) {
                if (moves[3].name == undefined) {
                    break;
                }
                
                else {
                    if (x.number == moves[3].number) {
                        mName = x.name;
                        mType = x.type;
                        moveType = x.mType;
                        mPower = x.power;
                        mAccuracy = x.accuracy;
                        break;
                    }
                    else {
                        
                    }
                }
            }
        });
        console.log(mName + mType + moveType + mPower + mAccuracy);
        speedCheck();
    }

// PLAYER + ENEMY TURNS

    function playerTurn() {
        playerMove = true;
        
        accuracy = mAccuracy * pAcc
        accCheck = Math.round(Math.random() * accuracy);
        
        if (accCheck > accuracy) {
            document.getElementById("eventTxt").innerHTML = playerName + " used " + mName + ", but missed!";
        }
        
        else {
            if (moveType == "Physical") {
                physicalAttackP();
            }
            else if (moveType == "Special") {
                specialAttackP();
            }
        
            moveUpdate();
            attackText();
        }
    }
    
    function findMoveE(mv) {
        // BROKEN, CHANGE TO PLAYER MOVE CALCULATIONS
        return mv.name = enemy.moves[em];
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
        var damage = Math.floor(((((2/*level*//5)+2)*mPower*(pAtk/eDef))/50)+2)
        
        calculateBonus(damage);
        eHP = eHP - damage;
    }
    
    function specialAttackP() {
        var damage = Math.floor(((((2/*level*//5)+2)*mPower*(pSat/eSde))/50)+2)
        
        calculateBonus(damage);
        eHP = eHP - damage;
    }

// ENEMY ATTACKS

    function physicalAttackE() {
        var damage = Math.floor(((((2/*level*//5)+2)*eMove.power*(eAtk/pDef))/50)+2)
        
        calculateBonus(damage);
        pHP = pHP - damage;
    }
    
    function specialAttackE() {
        var damage = Math.floor(((((2/*level*//5)+2)*eMove.power*(eSat/pSde))/50)+2)
        
        calculateBonus(damage);
        pHP = pHP - damage;
    }
    
    function calculateBonus(damage) {
        if (playerMove == true) {
            var crit = Math.random() * 24;
            
            if (crit <= 1) {
                pCritical = true;
                damage = Math.floor(damage * 1.5);
            }
        }
        else if (enemyMove == true) {
            var crit = Math.random() * 24;
            
            if (crit <= 1) {
                eCritical = true;
                damage = Math.floor(damage * 1.5);
            }
        }
    }
    
    /*function findType(type) {
        return type.name = moveType;
    }
    
    function typeBonus() {
        movetype = types.find(findType);
    }*/
