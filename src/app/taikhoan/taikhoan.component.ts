import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.css']
})
export class TaikhoanComponent {
  constructor(private router: Router) { }
  logout(): void {
    // Perform any necessary logout actions here
    // For example, clearing session data or token

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
  isVisiblemail = false;
  showModalmail(): void {
    this.isVisiblemail = true;
  }

  handleOkmail(): void {
    console.log('Button ok clicked!');
    this.isVisiblemail = false;
  }

  handleCancelmail(): void {
    console.log('Button cancel clicked!');
    this.isVisiblemail = false;
  }
  isVisiblegplx = false;
  showModalgplx(): void {
    this.isVisiblegplx = true;
  }

  handleOkgplx(): void {
    console.log('Button ok clicked!');
    this.isVisiblegplx = false;
  }

  handleCancelgplx(): void {
    console.log('Button cancel clicked!');
    this.isVisiblegplx = false;
  }
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  isVisiblebtn = false;
  showModalbtn(): void {
    this.isVisiblebtn = true;
  }

  handleOkbtn(): void {
    console.log('Button ok clicked!');
    this.isVisiblebtn = false;
  }

  handleCancelbtn(): void {
    console.log('Button cancel clicked!');
    this.isVisiblebtn = false;
  }
  transformFile = (file: NzUploadFile): Observable<Blob> =>
    new Observable((observer: Observer<Blob>) => {
      const reader = new FileReader();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reader.readAsDataURL(file as any);
      reader.onload = () => {
        const canvas = document.createElement('canvas');
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(blob => {
            observer.next(blob!);
            observer.complete();
          });
        };
      };
    });
}
