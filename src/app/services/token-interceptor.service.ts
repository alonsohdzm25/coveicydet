import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: any, next: any){
    const tokenizeReq = req.clone({
      setHeaders: {
        'Authorization': "Bearer " + this.authService.getToken(),
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin':'*'
      }
    })

    return next.handle(tokenizeReq);
    
  }

  
}
