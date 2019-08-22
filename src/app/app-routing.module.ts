import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleUploadComponent } from './dashboard/music-upload/single-upload/single-upload.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { WalletComponent } from './dashboard/wallet/wallet.component';


import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: './home/home.routing.module#HomeRoutingModule'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'music-upload',
        component: SingleUploadComponent,
        children: [
          { path: 'single', component: SingleUploadComponent }
        ]
      }
      ,
      {
        path: 'analytics',
        component: AnalyticsComponent
      }
      ,
      {
        path: 'wallet',
        component: WalletComponent
      }
    ]
    // loadChildren:'./dashboard/dashboard.routing.module#DashboardRoutingModule'
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
