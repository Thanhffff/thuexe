import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.css']
})
export class TaikhoanComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
