// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health <= 0){
      return (`${this.name} has received ${damage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry() {
    return ("Odin Owns You All!");
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health <= 0){
      return (`A Saxon has received ${damage} points of damage`)
    } else {
      return (`A Saxon has died in combat`)
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  //encontrar um elemento de forma aleatória dentro de uma array
  vikingAttack(){
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
  }
  saxonAttack(){
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)
  }
}

let newWar = new War()
newWar.addViking(new Viking(50, 10, 'Ze'))