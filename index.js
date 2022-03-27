// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const fg = require('./src/Fighter');

let heracles = new fg('🐬 Heracles',20,17,100);
let biloute = new fg('🐂 Biloute',20,16,100);
let lion = new fg('🦔 Lion de némée',20,15,100);

const tableauDeJoueurs= [heracles,biloute,lion];
//const fighters=[heracles,biloute];


//----------------------- COMBAT ------------------------------------
console.log('--------------------------------------------');
console.log('----------- FIGHT STARTS !!! ---------------');
console.log('--------------------------------------------');
while(tableauDeJoueurs[0].life > 0 && tableauDeJoueurs[1].life > 0 ){
    //let heracles = new fg('🐬 Heracles',20,15,100);
    //heracles.fight(lion); //player1 -> donne un kick
    let fi=[];
    while(fi.length === 0){
        fi = setFighters();
        console.log(fi);
    }
    const numb1=fi[0];
    const numb2=fi[1];
    tableauDeJoueurs[numb1].fight(tableauDeJoueurs[numb2]);
    tableauDeJoueurs[numb2].fight(tableauDeJoueurs[numb1]);
}
//----------------------- COMBAT ------------------------------------

//----------------------- SCORE FINAL ------------------------------------
console.log('--------------------------------------------');
for(let i=0;i<tableauDeJoueurs.length;i++){
    tableauDeJoueurs[i].life;
    console.log(`🏆 Vie de ${tableauDeJoueurs[i].name} reste : ${tableauDeJoueurs[i].life} de vie.🏆`);
}

if(tableauDeJoueurs[0].life > tableauDeJoueurs[1].life){
    console.log("🏆 🐬 Heracles à gagné !🐬 🏆");
}else{
    console.log("🏆 🦔 Lion de Némée à gagné !🦔 🏆");
}

lion.showInfos();
heracles.showInfos();
console.log('--------------------------------------------');
//----------------------- SCORE FINAL ------------------------------------


//--------------- ORCHESTRATION DE COMBATANTS ----------------------------
// Amelioration en cours : multiple joueurs.
function chooseAttaquant(){
    const attaquant = getRandomNumberBetween(0,tableauDeJoueurs.length-1);
    return attaquant;//integer
}

function chooseDefender(){
    const defender = getRandomNumberBetween(0,tableauDeJoueurs.length-1);
    return defender;//integer
}

function setFighters(){
    const attacker = chooseAttaquant();
    const defender = chooseDefender();
    if(attacker!=defender){
        console.log(`Choix de l'attaquant : ${attacker}`);
        console.log(`Choix de l'attaquant : ${defender}`);
        return [attacker,defender];
    }else{
        console.log('Choix des Fighters identique');
        return [];
    }

}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
//--------------- ORCHESTRATION DE COMBATANTS ----------------------------