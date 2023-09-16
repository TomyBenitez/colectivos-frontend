import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.scss']
})

export class AuthloginComponent {
  constructor(private _auth:AuthService, private _cookieService:CookieService){}
  response:any='';

  formData = {
    correo: '',
    password: ''
  };

  async submitForm() {
    if (this.formData){
      try {
        const userCredential = await this._auth.iniciarSesion(this.formData.correo, this.formData.password);
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        this._cookieService.set('xjs', idToken);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
