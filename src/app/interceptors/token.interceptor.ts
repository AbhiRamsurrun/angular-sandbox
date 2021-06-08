import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log("Token",this.storageService.get("token") );
    if (this.storageService.get("token")) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.storageService.get("token")}`
        }
      });
    }
    return next.handle(request);
  }
}
