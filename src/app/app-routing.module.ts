import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './dashboard/upload/upload.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { WalletComponent } from './dashboard/wallet/wallet.component';


import { AuthGuard } from './services/guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [

  {
    path: '',
    loadChildren: './home/home.routing.module#HomeRoutingModule'
  },
  {
    path: 'dashboard/:artistName',
    component: DashboardComponent,
    // canActivate: [ AuthGuard , ],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'uploads',
        component: UploadComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
