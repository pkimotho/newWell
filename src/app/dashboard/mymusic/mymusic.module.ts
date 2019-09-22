import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

/* Material Module */
import { CustomMaterialModule } from '../../shared/material-module/material-module';

/* Local Imports */

import { VerifiedSinglesComponent } from './verified-singles/verified-singles.component';
import { SinglesComponent } from './singles/singles.component';
import { AlbumUploadComponent } from '../music-upload/album-upload/album-upload.component';
import { SingleUploadComponent } from '../music-upload/single-upload/single-upload.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SongsDetailsComponent } from './songs-details/songs-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: 'verified-singles', component: VerifiedSinglesComponent },
  { path: 'singles', component: SongsComponent },
  { path: 'singles/:songtitle', component: SongsDetailsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'albums/:albumtitle', component: AlbumDetailsComponent },
  { path: 'music-upload/album', component: AlbumUploadComponent },
  { path: 'music-upload/single', component: SingleUploadComponent }
];

@NgModule({
  declarations: [
    VerifiedSinglesComponent,
    SinglesComponent,
    SongsDetailsComponent,
    AlbumsComponent,
    SongsComponent,
    AlbumDetailsComponent,
    AlbumUploadComponent,
    SingleUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class MymusicModule { }
