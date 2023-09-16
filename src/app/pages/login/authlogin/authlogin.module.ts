import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthloginComponent } from './authlogin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthloginModule { }
