import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthloginComponent } from './authlogin/authlogin.component';
import { AuthregisterComponent } from './authregister/authregister.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthloginComponent,
    AuthregisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
	  FormsModule
  ]
})
export class LoginModule { }