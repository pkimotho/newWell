import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ArtistProfileService } from './../../../services/artist-profile.service';
import { Countries } from './../../../shared/countries';
import { handleHttpError } from 'src/app/services/errors/http';

@Component({
  selector: 'app-artist-edit-profile',
  templateUrl: './artist-edit-profile.component.html',
  styleUrls: ['./artist-edit-profile.component.scss']
})
export class ArtistEditProfileComponent implements OnInit {

  constructor(private artistProfileService: ArtistProfileService, private route: ActivatedRoute) { }

  countries = Countries;

  previewUrl = '../../assets/img/avatars/avatar.svg';
  accountType = 'Artist Account';

  mainInfoForm: FormGroup;
  selectedImage: File = null;
  imageFile = null;

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
        console.log(profile);
      });
    this.mainInfoForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      country: new FormControl(null),
      phoneNumber: new FormControl(null),
      emailAddress: new FormControl(null),
      kinInfoData: new FormGroup({
        kinFirstName: new FormControl(null),
        kinSurname: new FormControl(null),
        kinRelationship: new FormControl(null),
        kinPhoneNumber: new FormControl(null)
      })
    });
  }

  onImageSelected(event) {
    this.selectedImage = event.target.files[0] as File;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImage);
    fileReader.onload = () => {
      this.imageFile = fileReader['result'];
    };
  }

  onMainInfoSubmit() {
    const imageFileData = new FormData();
    imageFileData.append('profilePic', this.selectedImage);
    const artistProfile = {
      name: this.mainInfoForm.get('firstName').value,
      email: this.mainInfoForm.get('emailAddress').value,
      phoneNumber: this.mainInfoForm.get('phoneNumber').value,
    };
    this.artistProfileService.updateProfile(artistProfile).subscribe(data => {
      this.artistProfileService.updateProfilePic(imageFileData).subscribe(res => {
        console.log('Updated');
      }, err => catchError(handleHttpError));
    }, err => catchError(handleHttpError));
  }

}
