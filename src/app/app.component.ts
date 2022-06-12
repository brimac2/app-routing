import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div class="app">
    <app-user-list></app-user-list>

  </div>`
})
export class AppComponent {
  title = 'angular-assingment';
}
