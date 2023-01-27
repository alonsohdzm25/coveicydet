import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL = 'https://backend-production-761e.up.railway.app/api'

  constructor(
    private http: HttpClient,
  ) { 
    }

  getUser() {
    return this.http.get<any>(this.URL + '/user');
  }

  updateUser(user: any) {
    return this.http.post<any>(this.URL + '/user', user)
  }


}
