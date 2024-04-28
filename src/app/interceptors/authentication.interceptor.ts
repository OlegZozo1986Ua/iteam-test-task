import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiUsersService } from '../services/apiUsers.service';
import { Observable } from 'rxjs';

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
