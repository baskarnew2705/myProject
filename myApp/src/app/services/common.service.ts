import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData, UserDataResponse } from '../models/getuser-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public loggedIn: boolean;

  constructor(private http: HttpClient) { }

  public checkLoginStatus(myRequest: Array<UserData>): Observable<UserDataResponse> {
    console.log(myRequest);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<UserDataResponse>(
      'http://localhost/angularProject/myApp/services/login.php',
      myRequest,
      httpOptions
    );
  }


}
