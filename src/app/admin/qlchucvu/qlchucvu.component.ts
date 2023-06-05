import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

 id: string;
  chucvu: string;

}
@Component({
  selector: 'app-qlchucvu',
  templateUrl: './qlchucvu.component.html',
  styleUrls: ['./qlchucvu.component.css']
})
export class QlchucvuComponent implements OnInit {
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
        chucvu: `User`,
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

