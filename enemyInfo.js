var enemy = null;
var enemyLevel = null;
var enemyName = null;
var eAcc = 1;
let enemyIvs = [];

function getEnemy() {
    enemy = pokedex[Math.floor(Math.random() * pokedex.length)];
    enemyName = enemy.name;
    enemyLevel = 10; /* will be random later on */
    
    for (let i = 0; i < 6; i++) {
        enemyIvs.push(Math.floor(Math.random() * 31) + 1);
    }
    
    enemyStats();
    }
    
function enemyStats() {
    eHP = Math.floor(((((2*enemy.stats[0])+enemyIvs[0]/*+evs*/)*enemyLevel)/100)+enemyLevel+10);
    eHM = eHP;
    eAtk = Math.floor(((((2*enemy.stats[1])+enemyIvs[1])*enemyLevel)/100)+5); /*add nature*/
    eDef = Math.floor(((((2*enemy.stats[2])+enemyIvs[2])*enemyLevel)/100)+5);
    eSat = Math.floor(((((2*enemy.stats[3])+enemyIvs[3])*enemyLevel)/100)+5);
    eSde = Math.floor(((((2*enemy.stats[4])+enemyIvs[4])*enemyLevel)/100)+5);
    eSpe = Math.floor(((((2*enemy.stats[5])+enemyIvs[5])*enemyLevel)/100)+5);
}