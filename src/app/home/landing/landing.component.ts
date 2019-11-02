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
    console.log(this.artists);
  }

  toggleNavbar() { }

  getAllArtists() {
    fetch(environment.base_url + 'artist?status=verified')
      .then(res => res.json())
      .then(data => {
        let results: any = {};
        results = data;
        console.log(results);
        this.artists = results.results;
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
