class Character {
    constructor(name, life_points, attack_points, mana_points, status) {
        this.name = name;
        this.life_points = life_points;
        this.attack_points = attack_points;
        this.mana_points = mana_points;
        this.status = status;
    }

    takeDamage = (damages) => {
      this.life_points -= damages;
  }

    dealDamage = (victim) => {
      if(victim.life_points < 1){
        this.mana_points += 20;
        console.log(`
          -------------------
        || ${victim.name} est mort ||
          -------------------
          `);
        victim.status = "loser";
        victim.life_points = 0;
      }
    }

    showState = () => {
      console.log(`${this.name} à ${this.life_points} PV et à le status ${this.status}`);
    }
}
