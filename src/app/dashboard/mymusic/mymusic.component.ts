import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.component.html',
  styleUrls: ['./mymusic.component.scss']
})
export class MymusicComponent implements OnInit {

  navLinks = [{ path: 'albums', label: 'Albums' }, { path: 'singles', label: 'Singles' }, { path: 'verified-singles', label: 'Verified Singles' }, { path: 'verified-singles', label: 'Published' }, { path: 'verified-singles', label: 'Processing' }, { path: 'verified-singles', label: 'Rejected' }];

  constructor() { }

  ngOnInit() {
  }



}
