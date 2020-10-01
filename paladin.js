class Paladin extends Character {
  constructor(name = "Ulder",  life_points = 16, attack_points = 3, mana_points = 160, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }

    healingLighting = (victim) => {
      this.mana_points -= 40;
      this.life_points += 5
      victim.life_points -= 4;
      this.dealDamage(victim);
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");


      if (attack_choice == "B" && this.mana_points >= 40)  {
          this.healingLighting(victim);
      } else if (attack_choice == "B" && this.mana_points < 40) {
        console.log("Vous n'avez pas assez de mana, l'attaque classique est utilisée.");
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "A") {
        victim.takeDamage(this.attack_points);
      }
      this.dealDamage(victim);
    }
}
