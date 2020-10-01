class Berzerker extends Character {
  constructor(name = "Draven",  life_points = 8, attack_points = 4, mana_points = 0, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }

    rage = () => {
      this.life_points -= 1;
      this.attack_points +=1;
      this.dealDamage(this);
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "A") {
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "B")  {
        this.rage();
      }
      this.dealDamage(victim);
    }

}
