import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public LoggedIn = new Subject<boolean>()
  
  constructor(
    private http:HttpClient
  ){
    this.LoggedIn.next(false);
  }

      public isLoggedIn(): boolean {
        const token = localStorage.getItem('currentUserKey');
        token ? this.LoggedIn.next(true) : this.LoggedIn.next(false) 
        return !!token; // Return true if the token exists, otherwise false
      }

      getToken(): string | null {
        return localStorage.getItem('currentUserKey');
      }

      login(payload:any){
        return this.http.post(`https://dummyjson.com/auth/login`,payload)
      }
}