import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authregister',
  templateUrl: './authregister.component.html',
  styleUrls: ['./authregister.component.scss']
})
export class AuthregisterComponent{

  constructor(private _auth:AuthService, private router:Router){}

  formData = {
    nombre: '',
    apellido: '',
    correo:'',
    repetircorreo:'',
    contrasena:'',
    repetircontrasena:''
  };

  messageError:string='';
  showError:boolean=false;

  submitForm(){
    if(this.formData.correo !== this.formData.repetircorreo){
      this.messageError = 'Los correos no coinciden';
      this.showError = true;
      return;
    } //si los correos no coinciden retorna

    if(this.formData.contrasena !== this.formData.repetircontrasena){
      this.messageError = 'Las contraseñas no coinciden';
      this.showError = true;
      return;
    } //si las contraseñas no coinciden retorna
    
    this.showError = false;

    this._auth.createUser(this.formData).subscribe(res => {
      //exito
      Swal.fire('Usuario Creado Exitosamente', 'redirigiendo...', 'success');
      this.router.navigate(['/auth/login'])
    })

  }
}
