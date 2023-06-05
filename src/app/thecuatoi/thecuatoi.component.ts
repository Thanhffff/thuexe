import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thecuatoi',
  templateUrl: './thecuatoi.component.html',
  styleUrls: ['./thecuatoi.component.css']
})
export class ThecuatoiComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
