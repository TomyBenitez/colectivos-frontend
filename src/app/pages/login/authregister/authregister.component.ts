import { Component } from '@angular/core';

@Component({
  selector: 'app-authregister',
  templateUrl: './authregister.component.html',
  styleUrls: ['./authregister.component.scss']
})
export class AuthregisterComponent {

  formData = {
    nombre: '',
    apellido: '',
    correo:'',
    repetircorreo:'',
    contrasena:'',
    repetircontrasena:''
  };



  submitForm(){
    if(this.formData.correo !== this.formData.repetircorreo) return; //si los correos no coinciden retorna
    if(this.formData.contrasena !== this.formData.repetircontrasena) return; //si las contraseñas no coinciden retorna
    
    console.log(this.formData)
  }
}
