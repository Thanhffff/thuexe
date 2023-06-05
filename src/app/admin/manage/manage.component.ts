import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  manhinh: string;
  user: string;
  taixe: string;
  admin: string;
}
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent  implements OnInit {
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
        manhinh: `trang chu`,
        user: `${this.i}`,
        taixe: `${this.i}`,
        admin: `${this.i}`
      }
    ];
    this.i++;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.manhinh !== id);
  }
  ngOnInit(): void {
    this.addRow();
  }

}

