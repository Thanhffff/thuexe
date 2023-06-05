import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  id: string;
  manhinh: string;

}
@Component({
  selector: 'app-qlmanhinh',
  templateUrl: './qlmanhinh.component.html',
  styleUrls: ['./qlmanhinh.component.css']
})
export class QlmanhinhComponent implements OnInit {
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
        manhinh: `Đăng nhập`,

      }
    ];
    this.i++;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  ngOnInit(): void {
    this.addRow();
  }

}
