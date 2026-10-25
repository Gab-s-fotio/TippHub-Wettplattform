import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  close() {
    this.closeSidebar.emit();
  }

  logout() {
    this.router.navigate(['/login']);
    this.closeSidebar.emit();
  }
}
