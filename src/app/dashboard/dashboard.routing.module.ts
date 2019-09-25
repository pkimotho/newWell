import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';

import { AuthGuard } from '../services/guards/auth.guard';
import { MymusicComponent } from './mymusic/mymusic.component';
import { SingleUploadComponent } from './music-upload/single-upload/single-upload.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'mymusic',
    component: MymusicComponent,
    loadChildren: './mymusic/mymusic.module#MymusicModule'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
