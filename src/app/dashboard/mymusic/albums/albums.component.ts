import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Store, select } from '@ngrx/store';


import * as songsReducer from '../../../reducers/song.reducer';
import * as songsactions from '../../../actions/song.actions';

import * as albumsReducer from '../../../reducers/album.reducer';
import * as albumsactions from '../../../actions/album.actions';

import * as artistsReducer from '../../../reducers/artist.reducer';
import * as artistsactions from '../../../actions/artist.actions';


import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ArtistSongsService } from '../../../services/artist-songs.service';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../app.state';

import { Album } from '../../../shared/models/album';
import { Song } from '../../../shared/models/song';
import { Platform } from '../../../shared/models/platforms';
import { Producer } from '../../../shared/models/producer';
import { Artist } from '../../../shared/models/artist';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  form: FormGroup;
  albums$: Observable<Album[]>;
  albumsloaderror$: Observable<string>;

  albums = [
    {
      id: 1, name: 'Beetles',
      numberOfSongs: 3,
      cover: '../../assets/img/banner.jpg',
      songs: [
        { id: 1, title: 'younder', duration: 3.09, status: 'verified' },
        { id: 2, title: 'Shaku shaku', duration: 4.09, status: 'pending' },
        { id: 3, title: 'wamlambez', duration: 4.50, status: 'rejected' },
      ]
    },
    {
      id: 2, name: 'Players',
      numberOfSongs: 5,
      cover: '../../assets/img/blur-close-up-concert-164879.jpg',
      songs: [
        { id: 1, title: 'xyz', duration: 3.00, status: 'verified' },
        { id: 2, title: 'Yankees', duration: 5.50, status: 'pending' },
        { id: 3, title: 'The Bent', duration: 4.50, status: 'rejected' },
        { id: 4, title: 'Yolo', duration: 4.70, status: 'verified' },
        { id: 5, title: 'Shaker', duration: 5.70, status: 'verified' },
      ]
    },
    {
      id: 3, name: 'Muzica',
      numberOfSongs: 0,
      cover: '../../assets/img/audience-band-blur-1587927(1).jpg',
      songs: []
    }
  ];
  selectedAlbum;


  constructor(
    private store: Store<fromRoot.AppState>,
    private formBuilder: FormBuilder,
    private router: Router, ) {
    this.createForm();


  }

  ngOnInit() {

    this.store.dispatch(new albumsactions.LoadArtistAlbums());

    this.albums$ = this.store.pipe(select(albumsReducer.getAlbums));
    this.albumsloaderror$ = this.store.pipe(select(albumsReducer.getError));
  }

  onSelectedAlbum(album) {
    this.selectedAlbum = album;
  }


  createForm() {
    // title: string;
    // genre: string;
    // albumArt: string;
    // artist: Artist;
    // link: string;
    // status: {
    //   type: string,
    //   default: 'unverified'
    // };
    this.form = this.formBuilder.group({

      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])],
      genre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],
      link: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],
      status: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],

      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])],



    });

  }



  validateTitle(controls) {


  }

  validateDescription(controls) {


  }

  validateGenre(controls) {

  }

  newAlbum() {
    var popup = document.getElementById('popup');
    popup.style.display = "flex";

  }

  SaveAlbum() {


    var popup = document.getElementById('popup');
    popup.style.display = "none";

  }

  Cancel() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";

  }



}

