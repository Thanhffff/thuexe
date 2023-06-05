import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ItemData {

  bookingdate: string;
  cardate: string;
  location: string;
  charge: string;
  insurance: string;
  pricedetails:string;

}
@Component({
  selector: 'app-historydatxe',
  templateUrl: './historydatxe.component.html',
  styleUrls: ['./historydatxe.component.css']
})
export class HistorydatxeComponent implements OnInit {
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
        bookingdate: `1${this.i}/${this.i}/2023 `,
        cardate: `1${this.i}/${this.i}/2023`,
        location: `HCM`,
        charge: `20.000`,
        insurance: `Bảo hiểm ABC`,
        pricedetails: `22200${this.i}`
      }
    ];
    this.i++;
  }
  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }

}

