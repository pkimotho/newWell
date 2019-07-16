import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { UploadComponent } from './upload/upload.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WalletComponent } from './wallet/wallet.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { HomeComponent } from './home/home.component';
// import { UploadsService } from '../services/uploads.service';


@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    UploadComponent,
    AnalyticsComponent,
    FileUploadComponent,
    WalletComponent,
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // UploadsService,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
