import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobile: string;
  isBtnEnabled: boolean;
  showOtpReader: boolean;
  btnName: string;
  isLoading: boolean;
  loadingMsg: string;
  isLoggedIn: boolean;
  otpChOne: string;
  otpChTwo: string;
  otpChThree: string;
  otpChFour:string;
  otpChFive:string;
  otpChSix: string;

  constructor() {
    this.mobile = '';
    this.isBtnEnabled = false;
    this.showOtpReader = false;
    this.btnName = 'Send OTP';
    this.isLoading = false;
    this.loadingMsg = '';
    this.isLoggedIn = false;
    this.otpChOne = '';
    this.otpChTwo = '';
    this.otpChThree = '';
    this.otpChFour = '';
    this.otpChFive = '';
    this.otpChSix = '';
  }

  validateMobile(mobile: string): void {
    if(mobile.length == 10) {
      this.isBtnEnabled = true;
      this.mobile = mobile;
    } else this.isBtnEnabled = false;
  }
  
  sendOtp(): void {
    console.log(this.mobile);
    console.log("Calling bff to send OTP...");
    // call bff to send an otp to given mobile
    this.loadingMsg = 'Sending OTP';
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if(!this.showOtpReader){
        this.showOtpReader = true;
        this.btnName = "Login";
      }
      alert('OTP has been sent!');
    }, 2000);
  }

  validateAndConcatOtpChars(): number {
    let otp: number;
    const otpChars = "".concat(this.otpChOne, this.otpChTwo, this.otpChThree, this.otpChFour, this.otpChFive, this.otpChSix);
    otp = parseInt(otpChars);
    return otp;
  }

  login(): void {
    const otp = this.validateAndConcatOtpChars();
    console.log(otp);
    console.log("Calling bff to validate OTP...")
    // call bff to validate otp
    this.loadingMsg = "Logging In";
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
      alert("Login success!");
      //resetting otpch values
      this.otpChOne = '';
      this.otpChTwo = '';
      this.otpChThree = '';
      this.otpChFour = '';
      this.otpChFive = '';
      this.otpChSix = '';
      alert('Navigate to protected dedicated page like home!')
    }, 2000);
  }

  submit(): void {
    this.btnName === "Login" ? this.login() : this.sendOtp();
  }

  skipLogin(): void {
    alert('Navigate to dedicated page like landing!');
  }

  goBack(): void {
    this.showOtpReader = false;
    this.btnName = "Send OTP";
  }
}
