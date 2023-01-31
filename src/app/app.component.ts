import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'RPS Game';
  gameType = 0;
  gameTypes = ['1 Player', '2 Players'];

  selectGameType(gameTypeSelected: number) {
    this.gameType = gameTypeSelected;
  }
}
