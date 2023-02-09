import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL = 'https://backend-production-761e.up.railway.app/api'

  headers = new HttpHeaders()

  constructor(
    private http: HttpClient
  ) { 
    //this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    //this.headers.append('Access-Control-Allow-Origin', '*');
    //this.headers.append('content-type','application/json')

    }

  getUser() {
    return this.http.get<any>(this.URL + '/user', { headers: this.headers });
  }

  updateUser(user: any) {
    return this.http.post<any>(this.URL + '/user', user, { headers: this.headers })
  }


}
