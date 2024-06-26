import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false; // Estado do sidebar

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed; // Alterna o estado do sidebar
  }
}
