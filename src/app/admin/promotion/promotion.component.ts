import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  idname: string;
  giam: string;
  sp: string;
  trangthai: string;
  startime: string;
  endtime: string;
  dieukien: string;

}
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
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
        idname: `Voucher tháng 6`,
        giam: `10%`,
        sp: `Xe honda`,
        trangthai: `12`,
        startime: `6/5/2023`,
        endtime: `6/6/2023`,
        dieukien: `Áp dụng cho xe 7 chỗ`

      }
    ];
    this.i++;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.idname !== id);
  }
  ngOnInit(): void {
    this.addRow();
  }

}
