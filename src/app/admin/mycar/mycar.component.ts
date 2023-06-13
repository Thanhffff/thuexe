import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  action: string;
  name: string;
  loaitk: string;
  listxe: string;
  gps: string;
  thongtin: string;
  img: string;

}
@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.component.html',
  styleUrls: ['./mycar.component.css']
})
export class MycarComponent implements OnInit {
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
  const newRow = {
    action: 'Đang hoạt động',
    name: 'Honda',
    loaitk: 'Tài xế',
    img: this.imageUrl,
    listxe: 'Honda vicic',
    gps: 'HCM',
    thongtin: 'Nguyễn Văn A'
  };

  this.listOfData.push(newRow);
  this.i++;
}

deleteRow(name: string): void {
  this.listOfData = this.listOfData.filter((d: any) => d.name !== name);
}

ngOnInit(): void {
  this.addRow();
}

}
