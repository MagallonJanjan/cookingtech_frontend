import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as CryptoJS from 'crypto-js';
import { EncryptService } from '../services/encrypt.service';
import { CookieService } from  'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) {

  }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let cookie = window.localStorage.getItem('__cookingtech');
      if(!cookie) {
        this.router.navigate(['login']);
        return false;    
      }
      let UserData = this.dataEnc.decrypt(cookie);
      if(UserData.user.usertype != "admin") {
        this.router.navigate(["home"]);
        return false;
      }
      return true;
  }
}