class Game {
  constructor(turnLeft = 10, current_turn = 0, players = []) {
      this.turnLeft = turnLeft;
      this.current_turn = current_turn;
      this.players = players;
  }

  watchStats = () => {
    console.log("----------- statut des joueurs ----------------");
    player_fighter.showState();
    player_paladin.showState();
    player_monk.showState();
    player_berzerker.showState();
    player_assassin.showState();
    console.log("-----------------------------------------------");
  }

  skipTurn = () => {
    this.turnLeft -= 1;
    if (this.turnLeft == 0) {
      console.log("Le nombre de tour max est atteint. Les winners sont :");
      console.log(
        players.filter(player => player.status == "playing").map(player => {return player.name})
      );
    }
  }

  startTurn = () => {
    this.current_turn += 1;
    console.log(`
        --------------------
      ||On est au tour : ${this.current_turn}||
        --------------------
      `);
  }

  callPlayers = (a) => {
    if (players[a].status == "playing"){
      console.log(`C'est au tour de ${players[a].name} de jouer`);
    }
    return players[a];
  }

  startGame = () => {
    new Game;
  }

  is_ended = () => {
    if (players.filter(player => player.status == "playing").length == 1) {
      let winner_player = players.filter(player => player.status == "playing")[0];
      console.log(`
        --------------------------------------------
      ||  La partie est terminée. ${winner_player.name} a gagné ||
        --------------------------------------------
      `);
      winner_player.status = "winner" ;
      return true;
    }
  }

}
