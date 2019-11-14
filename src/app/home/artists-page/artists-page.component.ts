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
        console.log(results);
        this.artists = results.results;
        this.artists[0].link = 'https://link.newwell.app/nigukwagira';
        this.artists[1].link = 'https://link.newwell.app/kwiyumia';
        this.artists[2].link = 'https://link.newwell.app/ulanguthaitha';
        this.artists[3].link = 'https://link.newwell.app/tiganananii';
        this.artists[4].link = 'https://link.newwell.app/ndiarimwega';
        this.artists[5].link = 'https://link.newwell.app/nikumbushe';
        this.artists[6].link = 'https://link.newwell.app/njakiranyumba';
        this.artists[7].link = 'https://link.newwell.app/Tukutendeleza';
        this.artists[8].link = 'https://link.newwell.app/chamgei';
        this.artists[9].link = 'https://link.newwell.app/ndikuriraringi';
        this.artists[10].link = 'https://link.newwell.app/Munene';
        this.artists[11].link = 'https://link.newwell.app/wekajuu';
        this.artists[12].link = 'https://link.newwell.app/testimony';
        this.artists[13].link = 'https://link.newwell.app/turabatarangai';
        this.artists[14].link = 'https://link.newwell.app/shahidi';
        this.artists[15].link = 'https://link.newwell.app/gweterera';
        this.artists[16].link = 'https://link.newwell.app/sawabilawewe';
        this.artists[17].link = 'https://link.newwell.app/rohomutheru';
        this.artists[18].link = 'https://link.newwell.app/muthamaki';
        this.artists[19].link = 'https://link.newwell.app/ngahikandenda';
        this.artists[20].link = 'https://link.newwell.app/commando';
        this.artists[21].link = 'https://link.newwell.app/sehemuyangu';
        this.artists[22].link = 'https://link.newwell.app/jinalayesutu';
        this.artists[23].link = 'https://link.newwell.app/kennyphilos19';
        this.artists[24].link = 'https://link.newwell.app/nowe';
        this.artists[25].link = 'https://link.newwell.app/tulia';
      });
  }
  goToArtistProfile(id) {
    this.router.navigate(['/artist/' + id]);
  }
}
