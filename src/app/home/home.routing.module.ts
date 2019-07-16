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


import { AuthGuard } from '../services/guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'artist/:name',
    component: ArtistProfileComponent,
  },
  {
    path: 'artists',
    component: ArtistsPageComponent,
  },
  { path: 'artist-signup',
  component: ArtistSignupComponent
},

  { path: 'artist-complete-profile',
  component: ArtistCompleteProfileComponent,
  // canActivate: [AuthGuard,]
},


  { path: 'song',
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
    path: 'signup',
    component: FanSignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
