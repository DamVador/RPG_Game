class Game {
  constructor(turnLeft = 10, current_turn = 0, players = []) {
      this.turnLeft = turnLeft;
      this.current_turn = current_turn;
      this.players = players;
  }

  watchStats = () => {
    player_fighter.showState();
    player_paladin.showState();
    player_monk.showState();
    player_berzerker.showState();
    player_assassin.showState();
  }

  skipTurn = () => {
    this.turnLeft -= 1;
    if (this.turnLeft == 0) {
      console.log("Le nombre de tour max est atteint");
    }
  }

  startTurn = () => {
    this.current_turn += 1;
    console.log(`On est au tour : ${this.current_turn}`);
  }

  callPlayers = (a) => {
    console.log(`C'est au tour de ${players[a].name} de jouer`);
    return players[a];
  }

  startGame = () => {
    Game.new();
  }

  is_ended = () => {
    if (players.filter(player => player.status == "playing").length == 1) {
      let winner_player = players.filter(player => player.status == "playing")[0];
      console.log(`La partie est terminée. ${winner_player} a gagné`);
      winner_player.status = "winner" ;
    }
  }

}


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

prompt("Bienvenue dans le Cheap World Of Warcraft");

players = [];
let player_fighter = new Fighter;
let player_paladin = new Paladin;
let player_monk = new Monk;
let player_berzerker = new Berzerker;
let player_assassin = new Assassin;
let game = new Game;
players.push(player_fighter);
players.push(player_paladin);
players.push(player_monk);
players.push(player_berzerker);
players.push(player_assassin);

game.watchStats();

// deroulement d'un tour

//appel aleatoire des joueurs
players_number = shuffle([0,1,2,3,4]);
a = players_number[0];
b = players_number[1];
c = players_number[2];
d = players_number[3];
e = players_number[4];
console.log(a, b, c, d, e);

while (game.turnLeft > 0) {

  game.startTurn();
  if (game.callPlayers(a).status == "playing") {
    game.callPlayers(a);
    let victim = prompt("Qui souhaitez vous attaquer ?")
    players.map(player => {
      if (player.name == victim) {
        victim = player;
        console.log(typeof victim);
        return victim
      }
    });
    game.callPlayers(a).attack(victim);
    game.watchStats();
  }

  if (game.callPlayers(b).status == "playing") {
    game.callPlayers(b);
    let victim_2 = prompt("Qui souhaitez vous attaquer ?")
    players.map(player => {
      if (player.name == victim_2) {
        victim_2 = player;
        console.log(typeof victim_2);
        return victim_2
      }
    });
    game.callPlayers(b).attack(victim_2);
    game.watchStats();
  }

  if (game.callPlayers(c).status == "playing") {
    game.callPlayers(c);
    let victim_3 = prompt("Qui souhaitez vous attaquer ?")
    players.map(player => {
      if (player.name == victim_3) {
        victim_3 = player;
        console.log(typeof victim_3);
        return victim_3
      }
    });
    game.callPlayers(c).attack(victim_3);
    game.watchStats();
  }

  if (game.callPlayers(d).status == "playing") {
    game.callPlayers(d);
    let victim_4 = prompt("Qui souhaitez vous attaquer ?")
    players.map(player => {
      if (player.name == victim_4) {
        victim_4 = player;
        console.log(typeof victim_4);
        return victim_4
      }
    });
    game.callPlayers(d).attack(victim_4);
    game.watchStats();
  }

  if (game.callPlayers(e).status == "playing") {
    game.callPlayers(e);
    let victim_5 = prompt("Qui souhaitez vous attaquer ?")
    players.map(player => {
      if (player.name == victim_5) {
        victim_5 = player;
        console.log(typeof victim_5);
        return victim_5
      }
    });
    game.callPlayers(e).attack(victim_5);
    game.watchStats();
  }

  game.is_ended();
  game.skipTurn();
}
