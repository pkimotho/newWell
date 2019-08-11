import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './../../services/authorization.service';
import { ArtistProfileService } from './../../services/artist-profile.service';
import { ArtistSongsService } from './../../services/artist-songs.service';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {

  isComment = false;
  isComment1 = false;
  likes = 4500;
  user;
  id;
  profilePic;
  name;
  genre;
  songs = [];

  event = {
    title: 'Album Launch',
    location: 'Roasters Inn',
    date: '25th Nov, 2019'
  };

  constructor(
    private authService: AuthorizationService,
    private artistProfileService: ArtistProfileService,
    private artistSongsService: ArtistSongsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.authService.getProfile().subscribe(profile => {
    //   this.user = profile['user'];
    // });
    this.id = this.route.snapshot.params['id'];
    this.getArtistProfile();
    this.getArtistSongs();
  }
  toggleComment() {
    this.isComment = !this.isComment;
  }

  addLikes() {
    this.likes += 1;
  }

  getArtistProfile() {
    this.artistProfileService.getArtistProfile(this.id).subscribe((profile: any) => {
      const { name, profilePic, genre } = profile;
      this.name = name;
      this.profilePic = profilePic;
      this.genre = genre;
    }, (err) => console.log(err), () => console.log('completed'));
  }
  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.id = _id;
  }
  getArtistSongs() {
    this.artistSongsService.getArtistSongs(this.id).subscribe((songs: any) => {
      this.songs = songs;
    });
  }

}
