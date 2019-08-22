import { ArtistProfileComponent } from './../home/artist-profile/artist-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SingleUploadComponent } from './music-upload/single-upload/single-upload.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from '../services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
