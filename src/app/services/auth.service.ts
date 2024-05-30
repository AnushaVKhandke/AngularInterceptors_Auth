import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(email,password){
     const data={email:email,password:password,returnSecureToken:true}
     this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjg_4tfqyc5bGmGXRpsqHf5dn1m60AVCQ',data)
  }
}
