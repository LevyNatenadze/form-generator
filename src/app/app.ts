import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App {
  protected title = 'form-generator';
}
