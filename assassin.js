class Assassin extends Character {
  constructor(name = "Carl",  life_points = 6, attack_points = 6, mana_points = 20, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }
    shadowHit = (victim) => {
      this.mana_points -= 20;
      victim.life_points -= 7;
      this.dealDamage(victim);
      // coder les consequences sur le prochain tour
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "B" && this.mana_points >= 20)  {
          this.shadowHit(victim);
      } else if (attack_choice == "B" && this.mana_points < 40) {
        console.log("Vous n'avez pas assez de mana, l'attaque classique est utilisée");
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "A" ) {
        victim.takeDamage(this.attack_points);
      }
      this.dealDamage(victim);
    }

}
