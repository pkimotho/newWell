import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('sideMenuAnime', [
      state('close', style({ width: '50px' })),
      state('open', style({ width: '260px' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  openCloseSidebar = 'close';

  constructor() { }

  ngOnInit() {
  }

}
