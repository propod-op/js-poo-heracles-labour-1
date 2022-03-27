/* Fighter class definition */

class Fighter{
    constructor(name,force, dexterity,life=100){
        const MAX_LIFE = 100;
        this.name = name;
        this.force = force;
        this.dexterity = dexterity;
        this.damage = 0;
        this.life = MAX_LIFE;
    }

    showInfos(){
        console.log(`${this.name} à ${this.force} pts (force) / ${this.dexterity} (dexterite) /  ${this.life} (life).`)
    }

    fight(objEnemy){
        // calcule de l'esquive : true ou false (random)
        const isDodge= Math.random() >= 0.5;
        isDodge ? console.log('Coup esquivé...') : console.log('Coup donné !');
        
        //calcule du damage : nombre entre 1 et force de l'ennemy (random)
        this.damage = Math.floor(Math.random() * objEnemy.force);
        if(this.damage<=1){
            this.damage = 1;
        }

        //console.log(`Chiffre entre 1 et force enemy : ${this.damage }`);
        this.damage = this.damage - objEnemy.dexterity;

        if(this.damage<=1){
            this.damage = 1;
        }

        if(!isDodge){
            objEnemy.life -= this.damage;
        }
                
    }

}

module.exports = Fighter