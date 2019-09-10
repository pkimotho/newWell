import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthorizationService } from './../services/authorization.service';
import { ArtistProfileService } from './../services/artist-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('sideMenuAnime', [
      state('close', style({ width: '0px' })),
      state('open', style({ width: '260px' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ]),
    trigger('toggleButtonAnime', [
      state('close', style({ marginLeft: '2px' })),
      state('open', style({ marginLeft: '262px' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @Input() profilePicture: string;

  isLoggedIn;
  id;
  profilePic;
  artistName;
  showNavbar = true;
  openCloseSidebar = 'close';

  constructor(
    private artistProfileService: ArtistProfileService,
    private router: Router,
    public authService: AuthorizationService,
    private flashMessagesService: FlashMessagesService,
    private route: ActivatedRoute) {
      this.isLoggedIn = this.authService.loggedIn;

     }

  ngOnInit() {
    this.loadArtistId();
    this.loadArtistId();
    this.getProfilePic();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.flashMessagesService.show('You have logged out', {
      cssClass: 'alert-info'
    });
  }

  loadArtistId() {
    if (localStorage.getItem('user')) {
      const { _id } = JSON.parse(localStorage.getItem('user'));
      this.id = _id;
    } else {
      this.id = null;
    }
  }

  getProfilePic() {
    if (this.id) {
      this.artistProfileService.getArtistProfile(this.id).subscribe((profile: any) => {
        const { profilePic } = profile;
        console.log("profile", this.profilePic);
        this.profilePic = profilePic;
      });
    } else {
      this.profilePic = null;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.flashMessagesService.show('You have logged out', {
      cssClass: 'alert-info'
    });
  }

}
