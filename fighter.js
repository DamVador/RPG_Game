class Fighter extends Character {
  constructor(name = "Grace",  life_points = 12, attack_points = 4, mana_points = 40, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }

    darkVision = (victim) => {
      this.mana_points -= 20;
      victim.life_points -= 5;
      this.dealDamage(victim);
      // coder les consequences sur le prochain tour
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "A" || this.mana_points < 20) {
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "B")  {
        this.darkVision(victim);
      }
      this.dealDamage(victim);
    }

}
