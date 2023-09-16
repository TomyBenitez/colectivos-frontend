import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  usuarioAutenticado:boolean=false;

  canActivate(): boolean {
    if(this.usuarioAutenticado){
      return true;
    }else{
      this.router.navigate(['/authlogin'])
      return false;
    }
  }
}

