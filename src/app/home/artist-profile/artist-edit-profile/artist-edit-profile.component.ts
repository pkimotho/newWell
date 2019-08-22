import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArtistProfileService } from './../../../services/artist-profile.service';

@Component({
  selector: 'app-artist-edit-profile',
  templateUrl: './artist-edit-profile.component.html',
  styleUrls: ['./artist-edit-profile.component.scss']
})
export class ArtistEditProfileComponent implements OnInit {

  constructor(private artistProfileService: ArtistProfileService, private route: ActivatedRoute) { }

  previewUrl = '../../assets/img/avatars/avatar.svg';
  accountType = 'Artist Account';

  userProfile = {
    bio: '',
    email: '',
    name: '',
    phoneNumber: '',
    profilePic: '',
    registrationDate: '',
    status: ''
  };

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.artistProfileService.getArtistProfile(id)
      .subscribe(profile => {
        this.userProfile.bio = profile['bio'];
        this.userProfile.email = profile['email'];
        this.userProfile.name = profile['name'];
        this.userProfile.phoneNumber = profile['phoneNumber'];
        // this.userProfile.profilePic = profile['profilePic'];
        this.userProfile.registrationDate = profile['registrationDate'];
        this.userProfile.status = profile['status'];
        this.previewUrl = profile['profilePic'];
      });
  }

}
