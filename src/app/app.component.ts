import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // 👈 use external HTML
  styleUrls: ['./app.component.css']    // 👈 you can add styles herent.html',
})
export class AppComponent {
  value = 'World';
}
