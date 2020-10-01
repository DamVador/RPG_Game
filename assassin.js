class Assassin extends Character {
  constructor(name = "Carl",  life_points = 6, attack_points = 6, mana_points = 20, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }
    shadowHit = (victim) => {
      this.mana_points -= 20;
      victim.life_points -= 7;
      if(victim.life_points < 1){
        this.mana_points += 20;
      }
      // coder les consequences sur le prochain tour
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "A" || this.mana_points < 20) {
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "B")  {
        this.shadowHit(victim);
      }
      this.dealDamage(victim);
    }

}
