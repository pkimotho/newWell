import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { ArtistSongsService } from './../../services/artist-songs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songs;
  artistName;
  numbering;
  id;

  constructor(private http: HttpClient, private artistSongsService: ArtistSongsService) { }

  ngOnInit() {
    this.loadArtistId();
    this.getArtistSongs();
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
    });
  }
  getArtistSongs() {
    // this.artistSongsService.getArtistSongs(this.id).subscribe((songs) => {
    //   this.songs = songs;
    // });
    this.loadArtistId();
    this.http.get(environment.base_url + 'song/artist/' + this.id).subscribe((songs: any[]) => {
      this.songs = songs.reverse();
    });
  }

}
