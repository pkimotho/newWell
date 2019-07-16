import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn;

  constructor(private authService: AuthorizationService) {

    this.isLoggedIn = this.authService.loggedIn;
  }
  showNavbar = true;

  ngOnInit() {

  }


  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
