import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salao-angular-app';
  isCollapsed = false; // Estado do sidebar

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed; // Alterna o estado do sidebar
  }
}
