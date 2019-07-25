import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Flickity from 'flickity-imagesloaded';
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
    imageUrl: ''
  };
  artists: any = [];
  options = {
    // options
    freeScroll: true,
    imagesLoaded: true,
    contain: true,
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

  toggleNavbar() {

  }

  getAllArtists() {
    this.http.get(environment.base_url + 'artist')
      .subscribe(artist => {
        this.artists = artist;
      });
  }
  goToArtistProfile(id) {
    this.router.navigate(['/artist/' + id]);
  }
  getLandingPageContent() {
    fetch('https://cms.newwellmusic.com/pages/1')
      .then(res => res.json())
      .then(({ title, description, ctaText, ctaLink, image }) => {
        this.landingPageContent = {
          title, description, ctaLink, ctaText, imageUrl: `https://cms.newwellmusic.com${image.url}`
        };
      });
  }


}
