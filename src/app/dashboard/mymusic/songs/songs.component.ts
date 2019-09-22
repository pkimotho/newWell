import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ArtistSongsService } from '../../../services/artist-songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  id;
  artistName;
  songs;

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private artistSongsService: ArtistSongsService) {
    this.createForm();

  }

  ngOnInit() {
    this.getArtistSongs();
  }

  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.id = _id;
    const { name } = JSON.parse(localStorage.getItem('user'));
    this.artistName = name;
  }

  getArtistSongs() {
    this.artistSongsService.getArtistSongs(this.id).subscribe((songs) => {
      this.songs = songs;
    });
    this.loadArtistId();
    this.http.get(environment.base_url + 'song/artist/' + this.id).subscribe((songs: any[]) => {
      this.songs = songs.reverse();
    });
  }
  goToSelectedSong(songName) {
    this.router.navigate(['/songs/' + songName]);
    console.log('clicked');
  }

  createForm() {
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

  newSong() {
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
