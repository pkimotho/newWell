import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Flickity from 'flickity-imagesloaded';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publishing',
  templateUrl: './publishing.component.html',
  styleUrls: ['./publishing.component.scss']
})
export class PublishingComponent implements OnInit {



  landingPageContent = {
    title: '',
    description: '',
    ctaText: '',
    ctaLink: '',
    imageUrl: 'assets/images/placeholder.svg'
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getAllArtists() {
    this.http.get(environment.base_url + 'artist')
      .subscribe(artist => {
        this.artists = artist;
      });
  }

}
