import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../services/permission.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    public permissionService : PermissionService,
    public activatedRoute : ActivatedRoute,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.activatedRoute.snapshot.paramMap.get("id");
      if (next.data) {
        console.log("next.data :", next.data);
        if (this.permissionService.hasRole(next.data.role)) {
          return true;
        }
      }  
      return false;
  }

}