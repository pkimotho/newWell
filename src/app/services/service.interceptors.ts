import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');


    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }


    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json'),  });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*')});
    return next.handle(request);
}


}
