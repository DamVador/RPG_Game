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


      if (attack_choice == "B" && this.mana_points >= 20)  {
        this.darkVision(victim);
      } else if (attack_choice == "B" && this.mana_points < 20) {
          console.log("Vous n'avez pas assez de mana, l'attaque classique est utilisée");
          victim.takeDamage(this.attack_points);
      } else if (attack_choice == "A" ) {
        victim.takeDamage(this.attack_points);
      }
      this.dealDamage(victim);
    }

}
