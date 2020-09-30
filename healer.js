class Monk extends Character {
  constructor(name = "Moana",  life_points = 8, attack_points = 2, mana_points = 200, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }

    heal = () => {
      this.mana_points -= 25;
      this.life_points += 8;
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "A" || this.mana_points < 25) {
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "B")  {
        this.heal();
      }
    }
}
