import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../app/home/shared/header/header.component';
import { FooterComponent } from '../app/home/shared/footer/footer.component';


// third party modules import
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';


// local modules import
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TokenInterceptor } from './services/service.interceptors';
import { AuthGuard } from './services/guards/auth.guard';
import { UploadsService } from './services/uploads.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    AngularFontAwesomeModule,
    FlashMessagesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FlashMessagesService
  ],
  bootstrap: [AppComponent],


})
export class AppModule {

}
