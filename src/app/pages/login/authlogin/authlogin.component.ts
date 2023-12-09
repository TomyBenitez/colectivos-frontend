import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.scss']
})

export class AuthloginComponent {
  constructor(private _auth:AuthService, private _cookieService:CookieService, private router:Router){}
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
        let fecha = new Date();
        fecha.setHours(fecha.getHours() +1) 
        this._cookieService.set('xjs', idToken, fecha);
        this.router.navigateByUrl('/admin/localidades');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        Swal.fire('Inicio de Sesión Fallido', 'compruebe que los datos ingresados sean correctos', 'error');
      }
    }
  }
}
