import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  usuarioAutenticado:boolean=true;

  canActivate(): boolean {
    if(this.usuarioAutenticado){
      return true;
    }else{
      this.router.navigate(['/auth/login'])
      return false;
    }
  }
}

