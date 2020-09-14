import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private myInjector: Injector) { }

  intercept(req, next) {
    let userservice = this.myInjector.get(UsersService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
