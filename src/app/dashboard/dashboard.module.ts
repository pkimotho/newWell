import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MatStepperModule } from '@angular/material/stepper';

// Material Module
import { CustomMaterialModule } from './../shared/material-module/material-module';


import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { SingleUploadComponent } from './music-upload/single-upload/single-upload.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { HomeComponent } from './home/home.component';
import { AlbumUploadComponent } from './music-upload/album-upload/album-upload.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
// import { UploadsService } from '../services/uploads.service';
import { EffectsModule } from '@ngrx/effects';

import { SongEffect } from './../effects/song.effects';

import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SalesComponent } from './sales/sales.component';

import { SongsDetailsComponent } from './songs-details/songs-details.component';


import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MymusicComponent } from './mymusic/mymusic.component';



@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    ChangePasswordComponent,
    ProfileComponent,
    SingleUploadComponent,
    AnalyticsComponent,
    SalesComponent,
    FileUploadComponent,
    WalletComponent,
    HomeComponent,
    AlbumsComponent,
    SongsComponent,
    AlbumDetailsComponent,
    SidemenuComponent,
    SongsDetailsComponent,
    AlbumUploadComponent,
    MymusicComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    EffectsModule.forFeature([SongEffect]),
    // UploadsService,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ChartsModule
  ],
  //   providers: [
  //     {
  //       provide: NG_VALUE_ACCESSOR,
  //       useExisting: FileUploadComponent,
  //       multi: true
  //     }
  // ]
})
export class DashboardModule { }
