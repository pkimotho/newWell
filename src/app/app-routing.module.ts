import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleUploadComponent } from './dashboard/music-upload/single-upload/single-upload.component';
import { AlbumUploadComponent } from './dashboard/music-upload/album-upload/album-upload.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { WalletComponent } from './dashboard/wallet/wallet.component';

import { AlbumsComponent } from './dashboard/albums/albums.component';
import { SongsComponent } from './dashboard/songs/songs.component';
import { SongsDetailsComponent } from './dashboard/songs-details/songs-details.component';
import { AlbumDetailsComponent } from './dashboard/album-details/album-details.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: './home/home.routing.module#HomeRoutingModule'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },

  {
    path: 'sales',
    component: SalesComponent,
  },

  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'songs/:songtitle',
    component: SongsDetailsComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'albums/:albumtitle',
    component: AlbumDetailsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
      {
        path: 'music-upload',
        component: SingleUploadComponent,
        children: [
          { path: 'single', component: SingleUploadComponent },
          { path: 'album', component: AlbumUploadComponent }
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
