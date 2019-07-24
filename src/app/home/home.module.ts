import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlickityModule } from 'ngx-flickity';

import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from '../home/shared/footer/footer.component';
import { HeaderComponent } from '../home/shared/header/header.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { FanSignupComponent } from './fan-signup/fan-signup.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { PublishingComponent } from './publishing/publishing.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { ArtistsPageComponent } from './artists-page/artists-page.component';
import { ArtistSignupComponent } from './artist-signup/artist-signup.component';
import { ArtistCompleteProfileComponent } from '../home/artist-complete-profile/artist-complete-profile.component';
import { ComingsoonComponent } from '../home/comingsoon/comingsoon.component';


@NgModule({
  declarations: [
    LandingComponent,
    ArtistProfileComponent,
    LoginComponent,
    FanSignupComponent,
    PricingComponent,
    PublishingComponent,
    ArtistsPageComponent,
    ArtistSignupComponent,
    ArtistCompleteProfileComponent,
    ComingsoonComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    FlickityModule
  ]
})

export class HomeModule { }
