import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUsersService } from '../services/apiUsers.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api = inject(ApiUsersService);
    const userToken = api.apiResponse?.token;

    if (!userToken) return next.handle(req);

    const modifiedReq = req.clone({
      headers: req.headers.set('X-Token', userToken),
    });

    return next.handle(modifiedReq);
  }
}
