import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Flickity from 'flickity-imagesloaded';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  images = ["assets/img/logos/itunes.png", "assets/img/logos/itunes.png", "assets/img/logos/itunes.png",];
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
    const cardsList = document.querySelectorAll('.cards');
    cardsList.forEach((cards) => {
      const flkty = new Flickity(cards, {
        // options
        freeScroll: true,
        imagesLoaded: true,
        contain: true,
        // // disable previous & nexts buttons and dots
        // prevNextButtons: false,
        // pageDots: false
      });
    });

    const brands = document.getElementById('brands');
    const flickity = new Flickity(brands, {
      // options
      // freeScroll: true,
      imagesLoaded: true,
      contain: true,
      // // disable previous & nexts buttons and dots
      prevNextButtons: false,
      // draggable: false,
      // wrapAround: true,
      autoPlay: 1500,
      pauseAutoPlayOnHover: false,
      pageDots: false
    });
  }

  toggleNavbar() {

  }

}
