import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment';
import { ArtistSongsService } from './../../services/artist-songs.service';
import { Observable } from 'rxjs';

import * as fromRoot from '../../app.state';

import { Album } from '../../shared/models/album';
import { Song } from '../../shared/models/song';
import { Platform } from '../../shared/models/platforms';
import { Producer } from '../../shared/models/producer';
import { Artist } from '../../shared/models/artist';

import { Store, select } from '@ngrx/store';


import * as songsReducer from '../../reducers/song.reducer';
import * as songsactions from '../../actions/song.actions';

import * as albumsReducer from '../../reducers/album.reducer';
import * as albumsactions from '../../actions/album.actions';

import * as artistsReducer from '../../reducers/artist.reducer';
import * as artistsactions from '../../actions/artist.actions';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums$: Observable<Album[]>;
  albumsloaderror$: Observable<string>;

  songs$: Observable<Song[]>;
  songsloaderror$: Observable<string>;

  platforms$: Observable<Platform[]>;
  platformloaderror$: Observable<string>;

  producer$: Observable<Producer[]>;
  producerloaderror$: Observable<string>;

  songs;
  artistName;
  numbering;
  id;
  displayOtherInfo = false;
  options = {
    // options
    freeScroll: true,
    imagesLoaded: true,
    contain: true,
    // disable previous & nexts buttons and dots
    // prevNextButtons: false,
    // pageDots: false
  };
  albums = [
    { id: 1, title: 'Album 1 title', imageUrl: '../../../assets/images/artists/artist4.jpg', numberOfSongs: 5 },
    { id: 2, title: 'Album 2 title', imageUrl: '../../../assets/images/artists/artist4.jpg', numberOfSongs: 0 },
  ];
  singles = [
    { id: 1, title: 'Single 1 title', imageUrl: '../../../assets/images/artists/artist.jpg' },
    { id: 2, title: 'Single 2 title', imageUrl: '../../../assets/images/artists/artist.jpg' },
    { id: 3, title: 'Single 2 title', imageUrl: '../../../assets/images/artists/artist.jpg' },
    { id: 4, title: 'Single 2 title', imageUrl: '../../../assets/images/artists/artist.jpg' },
    { id: 5, title: 'Single 2 title', imageUrl: '../../../assets/images/artists/artist.jpg' },
  ];

  children = [
    { title: 'Child 1' },
    { title: 'Child 2' },
    { title: 'Child 3' },
    { title: 'Child 4' },
    { title: 'Child 5' },
    { title: 'Child 6' }
  ]

  items = [{ id: 1, name: 'Kim', displayInfo: false }, { id: 2, name: 'Pat', displayInfo: false }];

  constructor(private store: Store<fromRoot.AppState>, private http: HttpClient, private artistSongsService: ArtistSongsService, private route: ActivatedRoute) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public barChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 69, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public lineChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [65, 69, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public doughnutChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getArtistSongs();
    console.log("Home Init");
    this.store.dispatch(new songsactions.LoadSongs());
    this.store.dispatch(new albumsactions.LoadAlbums());

    this.albums$ = this.store.pipe(select(albumsReducer.getAlbums));
    this.songs$ = this.store.pipe(select(songsReducer.getSongs));
    this.songsloaderror$ = this.store.pipe(select(songsReducer.getError));
    this.albumsloaderror$ = this.store.pipe(select(albumsReducer.getError));

  }

  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.id = _id;
    const { name } = JSON.parse(localStorage.getItem('user'));
    this.artistName = name;
  }

  getAllArtistsSongs() {
    this.artistSongsService.getAllSongs().subscribe((songs: any[]) => {
      this.songs = songs.reverse();
      this.songs.displayOtherInfo = this.displayOtherInfo;
    });
  }
  getArtistSongs() {
    this.artistSongsService.getArtistSongs(this.id).subscribe((songs) => {
      this.songs = songs;
    });
    this.loadArtistId();
    this.http.get(environment.base_url + 'song/artist/' + this.id).subscribe((songs: any[]) => {
      this.songs = songs.reverse();
      console.log(songs);
    });
  }
  toggleOtherInfo() {
    this.displayOtherInfo = !this.displayOtherInfo;
  }

}
