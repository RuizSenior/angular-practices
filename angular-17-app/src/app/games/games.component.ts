import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1, name: 'juego 1'
    },
    {
      id: 2, name: 'juego2'
    },
    {
      id: 3, name: 'juego 3'
    },
    {
      id: 4, name: 'juego4'
    }
  ]
}
