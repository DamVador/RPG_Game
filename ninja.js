class Ninja extends Character {
  constructor(name = "Donatello",  life_points = 8, attack_points = 3, mana_points = 90, status = "playing") {
        super(name, life_points, attack_points, mana_points, status);
    }

    rainOfShuriken = (victim) => {
      this.mana_points -= 30;
      victim.life_points -= Math.floor((Math.random() * 10) + 1);;
      this.dealDamage(victim);
    }

    attack = (victim) => {
      let attack_choice = prompt("Que souhaitez vous faire ? (attaque basique : A, attaque speciale : B)", "A");
      if (attack_choice == "B" && this.mana_points >= 30)  {
        this.rainOfShuriken(victim);
      } else if (attack_choice == "B" && this.mana_points < 30) {
        console.log("Vous n'avez pas assez de mana, l'attaque classique est utilisée");
        victim.takeDamage(this.attack_points);
      } else if (attack_choice == "A" ) {
        victim.takeDamage(this.attack_points);
      }
      this.dealDamage(victim);
    }

}
