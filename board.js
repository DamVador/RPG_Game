
  function shuffle (array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

  players = [];
  let player_fighter = new Fighter;
  let player_paladin = new Paladin;
  let player_monk = new Monk;
  let player_berzerker = new Berzerker;
  let player_assassin = new Assassin;
  let player_wizard = new Wizard;
  let start = prompt("Bienvenue dans le Cheap World Of Warcraft ! ")
  let game = new Game;

  players.push(player_fighter, player_paladin, player_monk, player_berzerker, player_assassin, player_wizard);
  game.watchStats();

  // deroulement des tours
  while (game.turnLeft > 0) {

    game.startTurn();
    //appel aleatoire des joueurs
    players_number = shuffle([0,1,2,3,4,5]);
    a = players_number[0];
    b = players_number[1];
    c = players_number[2];
    d = players_number[3];
    e = players_number[4];
    f = players_number[5];
    console.log(a, b, c, d, e, f);

    if (game.callPlayers(a).status == "playing") {
      let victim = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim) {
          victim = player;
          return victim
        }
      });
      game.callPlayers(a).attack(victim);
      game.watchStats();
    }

    if (game.callPlayers(b).status == "playing") {
      let victim_2 = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim_2) {
          victim_2 = player;
          return victim_2
        }
      });
      game.callPlayers(b).attack(victim_2);
      game.watchStats();
    }

    if (game.callPlayers(c).status == "playing") {
      let victim_3 = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim_3) {
          victim_3 = player;
          return victim_3
        }
      });
      game.callPlayers(c).attack(victim_3);
      game.watchStats();
    }

    if (game.callPlayers(d).status == "playing") {
      let victim_4 = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim_4) {
          victim_4 = player;
          return victim_4
        }
      });
      game.callPlayers(d).attack(victim_4);
      game.watchStats();
    }

    if (game.callPlayers(e).status == "playing") {
      let victim_5 = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim_5) {
          victim_5 = player;
          return victim_5
        }
      });
      game.callPlayers(e).attack(victim_5);
      game.watchStats();
    }

    if (game.callPlayers(f).status == "playing") {
      let victim = prompt("Qui souhaitez vous attaquer ?")
      players.map(player => {
        if (player.name == victim) {
          victim = player;
          return victim
        }
      });
      game.callPlayers(f).attack(victim);
      game.watchStats();
    }

    if (game.is_ended()) {
      break;
    };
    game.skipTurn();
  }
