import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLocalidadesComponent } from './components/admin-localidades/admin-localidades.component';
import { AdminViajesComponent } from './components/admin-viajes/admin-viajes.component';
import { AdminPasajesComponent } from './components/admin-pasajes/admin-pasajes.component';
import { AdminEmpresasComponent } from './components/admin-empresas/admin-empresas.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLocalidadesComponent,
    AdminViajesComponent,
    AdminPasajesComponent,
    AdminEmpresasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
