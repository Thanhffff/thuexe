import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  tk: string;
  address: string;

}
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
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
        tk: `user1`,
        address: `743/14, TL10`

      }
    ];
    this.i++;
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.tk!== id);
  }
  ngOnInit(): void {
    this.addRow();
  }

}

