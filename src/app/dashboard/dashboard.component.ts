import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthorizationService } from './../services/authorization.service';

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
    ]),
    trigger('toggleButtonAnime', [
      state('close', style({ marginLeft: '52px' })),
      state('open', style({ marginLeft: '262px' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  id;

  openCloseSidebar = 'close';

  constructor(
    private authService: AuthorizationService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadArtistId();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.flashMessagesService.show('You have logged out', {
      cssClass: 'alert-info'
    });
  }
  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.id = _id;
  }

}
