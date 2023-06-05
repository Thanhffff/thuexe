import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isCollapsed = false;
  suffixIconButton: any;
  formatOne = (percent: number): string => `${percent}Days`;
  formatTwo = (percent1: number): string => `${percent1}%`;
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 30;
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/loginadmin']);
  }
}
