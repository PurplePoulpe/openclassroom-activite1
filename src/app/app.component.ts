import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Date();

  posts = [
    {
      title: 'Premier post',
      content: 'Contenu du premier post',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Deuxième post',
      content: 'Contenu du deuxième post',
      loveIts: 1,
      created_at: this.lastUpdate
    },
    {
      title: 'Dernier post',
      content: 'Contenu du dernier post',
      loveIts: -1,
      created_at: this.lastUpdate
    }
  ];
}
