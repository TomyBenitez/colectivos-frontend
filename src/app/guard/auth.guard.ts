import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _cookie:CookieService) {}
  
  usuarioAutenticado:boolean=this._cookie.check('xjs');

  canActivate(): boolean {
    if(this.usuarioAutenticado){
      return true;
    }else{
      this.router.navigate(['/auth/login'])
      return false;
    }
  }
}

