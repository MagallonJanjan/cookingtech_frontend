import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncryptService } from '../services/encrypt.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IsMasterGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookies: CookieService,
    private dataEnc: EncryptService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let cookie = this.cookies.get('__cookingtech');
    if(!cookie) {
      this.router.navigate(['login']);
      return false;
    }

    let UserData = this.dataEnc.decrypt(cookie);

    if(UserData.user.usertype == "chef_apprentice") {
      this.router.navigate(['home']);
      return false;
    }
    
    return true;
  }
  
}
