import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthloginComponent } from './pages/login/authlogin/authlogin.component';
import { AuthregisterComponent } from './pages/login/authregister/authregister.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'search', loadChildren: () => import ('./pages/search/search.module').then(m => m.SearchModule)},
  {path: 'admin', loadChildren:()=> import('./pages/admin/admin.module').then(m=>m.AdminModule), canActivate:[AuthGuard]},
  {path: 'authlogin', component:AuthloginComponent},
  {path: 'authregister', component: AuthregisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
