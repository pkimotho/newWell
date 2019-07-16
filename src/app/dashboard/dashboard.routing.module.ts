import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from '../services/guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [ AuthGuard, ]
  },

  {
    path: 'dashboard/uploads',
    component: UploadComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'dashboard/analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuard]

  }
  ,
  {
    path: 'dashboard/wallet',
    component: WalletComponent,
    canActivate: [AuthGuard]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
