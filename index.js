// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const fg = require('./src/Fighter');

let heracles = new fg('🐬 Heracles',20,15,100);
let biloute = new fg('🐂 Biloute',20,16,100);
let lion = new fg('🦔 Lion de némée',20,15,100);

console.log('--------------------------------------------');
console.log('----------- FIGHT STARTS !!! ---------------');
console.log('--------------------------------------------');

while(heracles.life > 0 && lion.life > 0 ){
    heracles.fight(lion); //player1 -> donne un kick
    lion.fight(heracles); //player2 -> donne un kick
}

console.log('--------------------------------------------');
if(heracles.life > lion.life){
    console.log("🏆 🐬 Heracles à gagné !🐬 🏆");
}else{
    console.log("🏆 🦔 Lion de Némée à gagné !🦔 🏆");
}

lion.showInfos();
heracles.showInfos();
console.log('--------------------------------------------');
