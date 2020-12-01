import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandaComponent } from './banda/banda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';
import {LoginComponent} from './login/login.component';
import{AuthorizatedGuard} from "./guards/auth-guard.service"
import {IntegranteComponent} from './integrante/integrante.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthorizatedGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'bandas', component: BandaComponent , canActivate:[AuthorizatedGuard] },
  { path: 'detailBanda/:Nombre', component: BandaDetailComponent, canActivate:[AuthorizatedGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'integrantes', component: IntegranteComponent , canActivate:[AuthorizatedGuard] },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
