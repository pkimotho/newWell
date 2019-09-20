import { AlbumUploadComponent } from './music-upload/album-upload/album-upload.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SongsDetailsComponent } from './songs-details/songs-details.component';
import { ArtistProfileComponent } from './../home/artist-profile/artist-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SingleUploadComponent } from './music-upload/single-upload/single-upload.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumsComponent } from './albums/albums.component';
import { SalesComponent } from './sales/sales.component';

import { AuthGuard } from '../services/guards/auth.guard';
import { MymusicComponent } from './mymusic/mymusic.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'mymusic',
    component: MymusicComponent,
    children: [
      { path: 'songs', component: SongsComponent },
      { path: 'singles/:songtitle', component: SongsDetailsComponent },
      { path: 'albums', component: AlbumsComponent },
      {
        path: 'albums/:albumtitle',
        component: AlbumDetailsComponent
      }
    ]
  },
  { path: 'songs', component: SongsComponent },
  { path: 'songs/:songtitle', component: SongsDetailsComponent },
  { path: 'albums', component: AlbumsComponent },
  {
    path: 'albums/:albumtitle',
    component: AlbumDetailsComponent
  },
  {
    path: 'music-upload',
    component: SingleUploadComponent,
    children: [
      { path: 'single', component: SingleUploadComponent },
      { path: 'album', component: AlbumUploadComponent }
    ]
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
