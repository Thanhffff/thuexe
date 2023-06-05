import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {
  id: string;
  name: string;
  phone: string;
  gmail: string;
  action: string;
  loaitk:string;
  gplx:string;

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  isCollapsed = false;
  suffixIconButton: any;

  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/loginadmin']);
  }
  i = 0;

  listOfData: ItemData[] = [];



  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Nguyễn Văn ${this.i} `,
        phone: `079396689${this.i}`,
        gmail: `nguyenthanh147${this.i}@gmail.com`,
        action: `Đang hoạt động`,
        loaitk: `Admin`,
        gplx: `Bằng A${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
