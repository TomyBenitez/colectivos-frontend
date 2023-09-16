import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthregisterComponent } from './authregister.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthregisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthregisterModule { }
