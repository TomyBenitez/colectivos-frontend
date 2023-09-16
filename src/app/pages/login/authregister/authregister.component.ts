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
    console.log(this.formData)
  }
}
