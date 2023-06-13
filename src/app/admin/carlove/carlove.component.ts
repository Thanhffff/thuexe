import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  nameid: string;
  name: string;
  loaitk: string;
  danhmuc: string;
  img: string;
}
@Component({
  selector: 'app-carlove',
  templateUrl: './carlove.component.html',
  styleUrls: ['./carlove.component.css']
})
export class CarloveComponent implements OnInit {
  isCollapsed = false;
  suffixIconButton: any;
  imageUrl: string = 'https://hondagiaiphong.net/images/2022/Honda_Civic/HONDA-CIVIC-2022.jpg';
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
        nameid: `Honda`,
        name: `Honda civic`,
        loaitk: `User`,
        danhmuc:`Honda r1,Lambo`,
        img: `imageUrl`
      }
    ];
    this.i++;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.nameid !== id);
  }
  ngOnInit(): void {
    this.addRow();
  }

}
