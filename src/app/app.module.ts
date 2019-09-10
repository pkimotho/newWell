import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

// material module
import { CustomMaterialModule } from './shared/material-module/material-module';


import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlbumReducer } from './reducers/album.reducer';
import { SongReducer } from './reducers/song.reducer';
import { ArtistReducer } from './reducers/artist.reducer';


import { AlbumEffect } from './effects/album.effects';
import { ArtistEffect } from './effects/artist.effects';
import { SongEffect } from './effects/song.effects';


// local modules import
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TokenInterceptor } from './services/service.interceptors';
import { AuthGuard } from './services/guards/auth.guard';


import { CustomSerializer } from './utils/utils';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AlbumEffect, ArtistEffect, SongEffect]),
    StoreModule.forRoot({
      router:routerReducer,
      "songs": SongReducer,
      "artists": ArtistReducer,
      "albums": AlbumReducer,
    }),
    StoreRouterConnectingModule.forRoot({stateKey: "router"}),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    // CustomMaterialModule,
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
export class AppModule { }
