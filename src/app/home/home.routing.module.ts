import { ArtistEditProfileComponent } from './artist-profile/artist-edit-profile/artist-edit-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ArtistsPageComponent } from './artists-page/artists-page.component';
import { FanSignupComponent } from './fan-signup/fan-signup.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { PublishingComponent } from './publishing/publishing.component';
import { ArtistSignupComponent } from './artist-signup/artist-signup.component';
import { ArtistCompleteProfileComponent } from './artist-complete-profile/artist-complete-profile.component';
import { TermsComponent } from '../home/terms/terms.component';
import { FaqComponent } from '../home/faq/faq.component';
import { PolicyComponent } from '../home/policy/policy.component';
import { WhatwedoComponent } from '../home/whatwedo/whatwedo.component';
import { AboutComponent } from '../home/about/about.component';
import { MarketingComponent } from '../home/marketing/marketing.component';
import { PasswordRestComponent } from './password-rest/password-rest.component';

import { AuthGuard } from '../services/guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';



const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'artist/:id',
    component: ArtistProfileComponent
  },
  { path: 'artist/:id/edit', component: ArtistEditProfileComponent },
  {
    path: 'artists',
    component: ArtistsPageComponent,
  },
  {
    path: 'artist-signup',
    component: ArtistSignupComponent
  },

  {
    path: 'artist-complete-profile',
    component: ArtistCompleteProfileComponent,
    // canActivate: [AuthGuard,]
  },


  {
    path: 'song',
    component: ComingsoonComponent,
    // canActivate: [AuthGuard,]
  },


  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'publishing',
    component: PublishingComponent,
  },
  {
    path: 'marketing',
    component: MarketingComponent,
  },
  {
    path: 'signup',
    component: FanSignupComponent,
  },

  {
    path: 'terms',
    component: TermsComponent,
  },


  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'whatwedo',
    component: WhatwedoComponent,
  },
  {
    path: 'password_reset',
    component: PasswordRestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
