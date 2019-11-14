import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  landingPageContent = {
    title: '',
    description: '',
    ctaText: '',
    ctaLink: '',
    imageUrl: 'assets/images/placeholder.svg'
  };
  defaultTitle = 'MAKE MUSIC - GET PAID';
  defaultDescription = 'Independent artists put their music on the world leading streaming platforms with ease — because that\’s how it should be. We\'ll handle your distribution so you can flawlessly make even more nicer Tunes.';
  artists: any = [];
  topArtists = [];
  logos: any[] = [];
  logosOptions = {
    freeScroll: true,
    imagesLoaded: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 1200
    // selectedAttraction: 0.0001
    // friction: 0.15
  };

  options = {
    // options
    freeScroll: true,
    imagesLoaded: true,
    contain: true
    // // disable previous & nexts buttons and dots
    // prevNextButtons: false,
    // pageDots: false
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getLandingPageContent();
    // const flickity = new Flickity(brands, {
    //   // options
    //   // freeScroll: true,
    //   imagesLoaded: true,
    //   contain: true,
    //   // // disable previous & nexts buttons and dots
    //   prevNextButtons: false,
    //   // draggable: false,
    //   // wrapAround: true,
    //   autoPlay: 1500,
    //   pauseAutoPlayOnHover: false,
    //   pageDots: false
    // });
    this.getAllArtists();
  }

  toggleNavbar() { }

  getAllArtists() {
    fetch(environment.base_url + 'artist?status=verified')
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
        this.artists[4].link = 'https://link.newwell.app/gweterera';
        this.artists[5].link = 'https://link.newwell.app/sawabilawewe';
        this.artists[6].link = 'https://link.newwell.app/rohomutheru';
        this.artists[7].link = 'https://link.newwell.app/muthamaki';
        this.artists[8].link = 'https://link.newwell.app/ngahikandenda';
        this.artists[9].link = 'https://link.newwell.app/commando';
        this.topArtists.push(this.artists[2], this.artists[8]);
        console.log(this.topArtists);
        // this.artists[10].link = 'http://bit.ly/SehemuYangu';
        // this.artists[11].link = 'https://link.newwell.app/jinalayesutu';
        // this.artists[12].link = 'https://link.newwell.app/jinalayesutu';
        // this.artists[13].link = 'http://bit.ly/noweK2superson';
        // this.artists[14].link = 'http://bit.ly/tuliavivianallan';
        this.logos = [
          { src: '../../assets/img/carousel/amazon-icon.svg' },
          { src: '../../assets/img/carousel/apple-music.svg' },
          { src: '../../../assets/img/carousel/Deezer_logo.svg' },
          { src: '../../assets/img/carousel/google_play_music.svg' },
          { src: '../../assets/img/carousel/jambotunes.svg' },
          { src: '../../assets/img/carousel/pandora.svg' },
          { src: '../../assets/img/carousel/spotify.svg' },
          { src: '../../assets/img/carousel/tidal.svg' },
          { src: '../../assets/img/carousel/itunes.svg' }
        ];
      });
  }
  goToArtistProfile(id) {
    this.router.navigate(['/artist/' + id]);
  }
  getLandingPageContent() {
    fetch('https://cms.newwellmusic.com/pages')
      .then(res => res.json())
      .then(pages => {
        const { title, description, ctaText, ctaLink, image } = pages[0];
        this.landingPageContent = {
          title,
          description,
          ctaLink,
          ctaText,
          imageUrl: image.url
        };
      });
  }
}
