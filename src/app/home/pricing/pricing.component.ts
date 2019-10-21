import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  videosrc = '../../../assets/video/DJ_Audio.mp4';
  logos: any[] = [
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
  constructor() { }

  ngOnInit() {

  }

}
