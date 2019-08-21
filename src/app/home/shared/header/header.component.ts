import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.service';
import { ArtistProfileService } from './../../../services/artist-profile.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() profilePicture: string;

  isLoggedIn;
  id;
  profilePic;

  constructor(
    public authService: AuthorizationService,
    private artistProfileService: ArtistProfileService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {

    this.isLoggedIn = this.authService.loggedIn;
  }
  showNavbar = true;

  ngOnInit() {
    this.loadArtistId();
    this.getProfilePic();
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

  // toggleNavbar() {
  //   this.showNavbar = !this.showNavbar;
  // }
}
