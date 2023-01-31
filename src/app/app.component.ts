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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  GameTypes = GameTypes;
  GameStates = GameStates;
  
  title = 'RPS Game';
  gameType = GameTypes.OnePlayer;
  gameState = GameStates.New;
  playerOneName = 'Player One';
  playerTwoName = 'Player Two'

  selectGameType(gameTypeSelected: GameTypes) {
    this.gameType = gameTypeSelected;
    this.gameState = GameStates.Started;
  }

  play(){
    this.gameState = GameStates.Player1Turn;
  }
}
