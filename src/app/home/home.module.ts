import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlickityModule } from 'ngx-flickity';

import { LandingComponent } from './landing/landing.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { FanSignupComponent } from './fan-signup/fan-signup.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { PublishingComponent } from './publishing/publishing.component';

import { ArtistsPageComponent } from './artists-page/artists-page.component';
import { ArtistSignupComponent } from './artist-signup/artist-signup.component';
import { MarketingComponent } from '../home/marketing/marketing.component';
import { ArtistCompleteProfileComponent } from '../home/artist-complete-profile/artist-complete-profile.component';
import { ComingsoonComponent } from '../home/comingsoon/comingsoon.component';
import { TermsComponent } from '../home/terms/terms.component';
import { FaqComponent } from '../home/faq/faq.component';
import { AboutComponent } from '../home/about/about.component';
import { WhatwedoComponent } from '../home/whatwedo/whatwedo.component';
import { PolicyComponent } from '../home/policy/policy.component';
import { ArtistEditProfileComponent } from './artist-profile/artist-edit-profile/artist-edit-profile.component';


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
    ComingsoonComponent,
    TermsComponent,
    FaqComponent,
    AboutComponent,
    WhatwedoComponent,
    MarketingComponent,
    PolicyComponent,
    ArtistEditProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlickityModule
  ]
})

export class HomeModule { }
