import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  validateForm!: FormGroup;
  passwordVisible = false;
  apiData: any ={};
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  isVisible = false;
  isOkLoading = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    },1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const loginPayload = {
        username: this.validateForm.value.userName,
        password: this.validateForm.value.password
      };
      // Make the API call with the loginPayload
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload)
      })
        .then(res => res.json())
        .then(response => {
           console.log(response.username, response.password);
           console.log('Inside if statement');
          if (response !== null && response.hasOwnProperty('username') && response.username !== '') {
            alert("Success");
            this.router.navigate(['/home']);
          }else
          {
            alert("Error");
          }
        });
      // Handle form validation errors
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  // submitForm(): void {
  //   if (this.validateForm.valid) {
  //     const loginPayload = {
  //       username: this.validateForm.value.userName,
  //       password: this.validateForm.value.password
  //     };
  //     // Make the API call with the loginPayload
  //     fetch('https://dummyjson.com/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(loginPayload)
  //     })
  //     .then(res => res.json())
  //     .then(response => {
  //       // Handle the API response
  //       console.log('API response:', response);
  //       // Check if the response contains 'success' field and it is true
  //       if (response.hasOwnProperty('success') && response.success === true) {
  //         // Redirect to the home page if login is successful
  //         this.router.navigate(['/home']);
  //       } else {
  //         // Handle the case when login is not successful
  //         // ...
  //       }
  //     });
  //   } else {
  //     Object.values(this.validateForm.controls).forEach(control => {
  //       if (control.invalid) {
  //         control.markAsDirty();
  //         control.updateValueAndValidity({ onlySelf: true });
  //       }
  //     });
  //   }
  // }
  constructor(private fb: FormBuilder,private router: Router) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['kminchelle', [Validators.required]],
      password: ['0lelplR', [Validators.required]],
      remember: [true]
    });
  }
  // ngOnInit(): void {
  //   this.fetchData().then(data => {
  //     this.apiData = data;
  //   });
  //   this.validateForm = this.fb.group({
  //     userName: [this.apiData.username, [Validators.required]],
  //     password: [this.apiData.password, [Validators.required]],
  //     remember: [true]
  //   });
  // }
  // fetchData(): Promise<any> {
  //   const url = 'https://dummyjson.com/auth/login';
  //   const payload = {
  //     username: 'kminchelle',
  //     password: '0lelplR'
  //   };

  //   return fetch(url, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload)
  //   })
  //   .then(res => res.json());
  // }
  register(): void{
    this.router.navigate(['/register']);
  }
}
