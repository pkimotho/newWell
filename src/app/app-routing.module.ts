import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: './home/home.routing.module#HomeRoutingModule'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: './dashboard/dashboard.routing.module#DashboardRoutingModule',
    canActivate: [AuthGuard]
  },
  {
    path: '*',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
