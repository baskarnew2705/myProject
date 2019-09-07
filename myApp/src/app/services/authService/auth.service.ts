import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public loggedIn: boolean;

  constructor() { }

  isAuthenticated() {
    // const promise = new Promise(
    //   (resolve) => {
    //     setTimeout(() => {
    //       resolve(this.loggedIn);
    //     }, 800);
    //   }
    // );
    return this.loggedIn;
  }
}
