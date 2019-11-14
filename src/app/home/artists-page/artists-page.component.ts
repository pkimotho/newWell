import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.scss']
})
export class ArtistsPageComponent implements OnInit {
  artists: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllArtists();
  }
  getAllArtists() {
    fetch(environment.base_url + 'artist')
      .then(res => res.json())
      .then(data => {
        let results: any = {};
        results = data;
        console.log(results);
        this.artists = results.results;
      });
  }
  goToArtistProfile(id) {
    this.router.navigate(['/artist/' + id]);
  }
}
