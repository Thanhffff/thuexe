import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-diachi',
  templateUrl: './diachi.component.html',
  styleUrls: ['./diachi.component.css']
})
export class DiachiComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  switchValue = false;
  options = ['Nhà riêng', 'Công ty', 'Khác'];

  handleIndexChange(e: number): void {
    console.log(e);
  }
}
