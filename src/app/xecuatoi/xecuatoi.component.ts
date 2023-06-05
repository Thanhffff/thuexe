import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-xecuatoi',
  templateUrl: './xecuatoi.component.html',
  styleUrls: ['./xecuatoi.component.css']
})
export class XecuatoiComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
