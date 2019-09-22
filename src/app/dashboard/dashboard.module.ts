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
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';

import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

// import { UploadsService } from '../services/uploads.service';
import { EffectsModule } from '@ngrx/effects';

import { SongEffect } from './../effects/song.effects';

import { SalesComponent } from './sales/sales.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MymusicComponent } from './mymusic/mymusic.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ChangePasswordComponent,
    ProfileComponent,
    AnalyticsComponent,
    SalesComponent,
    WalletComponent,
    HomeComponent,
    SidemenuComponent,
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
