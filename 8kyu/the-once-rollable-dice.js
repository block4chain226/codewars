//In my simple RPG, every character will be created with the object-constructor: Character.

function Character(name, opness) {
    this.name = name;
    this.opness = opness;
    this.attack = function(){
        const mod = ~~(Math.random()*20) + 1
        const newAttack = this.opness + mod
        return newAttack;
    }
}