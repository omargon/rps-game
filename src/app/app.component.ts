import { Component } from '@angular/core';

enum GameTypes {
  OnePlayer = '1 Player',
  TwoPlayers = '2 Players',
}

enum GameStates {
  New = 'New',
  Started = 'Started',
  Player1Turn = 'Player 1 turn',
  Player2Turn = 'Player 2 turn',
  EndOfRound = 'End Of Round', 
}

enum PlayOptions {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

enum Players {
  PlayerOne = 'Player 1',
  PlayerTwo = 'Player 2',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  GameTypes = GameTypes;
  GameStates = GameStates;
  PlayOptions = PlayOptions;
  Players = Players;

  title = 'RPS Game';
  gameType = GameTypes.OnePlayer;
  gameState = GameStates.New;
  playerOneName = 'Player One';
  playerTwoName = 'Player Two';
  currentPlayer = Players.PlayerOne;
  hands = {
    playerOne: PlayOptions.Rock,
    playerTwo: PlayOptions.Rock,
  };

  selectGameType(gameTypeSelected: GameTypes) {
    this.gameType = gameTypeSelected;
    this.gameState = GameStates.Started;
  }

  play(){
    this.gameState = GameStates.Player1Turn;
  }

  submitPlayerHand(playOption: PlayOptions ) {
    if(this.gameState == GameStates.Player1Turn) {
      this.hands.playerOne = playOption;
      this.gameState = GameStates.Player2Turn;
      if (this.gameType == GameTypes.OnePlayer) {
        this.submitComputersHand();
      }
    } else {
      this.hands.playerTwo = playOption;
      this.gameState = GameStates.EndOfRound;
    }
  }

  submitComputersHand() {
    const computerChoices = Object.values(PlayOptions);
    const randomIndex = Math.floor(Math.random() * 3);
    this.submitPlayerHand(computerChoices[randomIndex]);
  }
}
