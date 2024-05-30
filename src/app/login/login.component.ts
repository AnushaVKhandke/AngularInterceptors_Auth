import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 isLoggedIn=true;

 onSwitch(){
  this.isLoggedIn=!this.isLoggedIn
 }

 onSubmitted(form:NgForm){
   console.log(form.value);
   form.reset();
 }
}
