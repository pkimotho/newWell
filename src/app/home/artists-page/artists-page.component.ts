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
    fetch(environment.base_url + 'artist?perPage=100&status=verified')
      .then(res => res.json())
      .then(data => {
        let results: any = {};
        results = data;
        // console.log(results);
        this.artists = results.results;
        this.artists[0].link = 'https://link.newwell.app/wekajuu';
        this.artists[1].link = 'https://link.newwell.app/testimony';
        this.artists[2].link = 'https://link.newwell.app/turabatarangai';
        this.artists[3].link = 'https://link.newwell.app/shahidi';
        this.artists[4].link = 'https://link.newwell.app/shahidi';
        this.artists[5].link = 'https://link.newwell.app/sawabilawewe';
        this.artists[6].link = 'https://link.newwell.app/rohomutheru';
        this.artists[7].link = 'https://link.newwell.app/muthamaki';
        this.artists[8].link = 'https://link.newwell.app/ngahikandenda';
        this.artists[9].link = 'https://link.newwell.app/commando';
        this.artists[10].link = 'http://bit.ly/SehemuYangu';
        this.artists[11].link = 'https://link.newwell.app/jinalayesutu';
        this.artists[12].link = 'https://link.newwell.app/jinalayesutu';
        this.artists[13].link = 'http://bit.ly/noweK2superson';
        this.artists[14].link = 'http://bit.ly/tuliavivianallan';
      });
  }
  goToArtistProfile(id) {
    this.router.navigate(['/artist/' + id]);
  }
}
