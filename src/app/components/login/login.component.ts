import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobile: string = '';

  sendOtp(): void {
    console.log(this.mobile);
    // validation required
    console.log("Calling bff to send OTP...");
    // call bff to send an otp to given mobile
  }
}
