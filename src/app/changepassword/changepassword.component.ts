import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
  passwordVisible = false;
  password?: string;
  passwordVisible1 = false;
  password1?: string;
  passwordVisible2 = false;
  password2?: string;
}
