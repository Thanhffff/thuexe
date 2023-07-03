import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {
  constructor(private router: Router) { }
  onBack(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/xecuatoi']);
  }
}
