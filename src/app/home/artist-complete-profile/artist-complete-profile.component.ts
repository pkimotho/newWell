import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthorizationService } from '../../services/authorization.service';
import { Artist } from '../../shared/models/artist';
import { ArtistProfileService } from './../../services/artist-profile.service';

import { handleHttpError } from '../../services/errors/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-artist-complete-profile',
  templateUrl: './artist-complete-profile.component.html',
  styleUrls: ['./artist-complete-profile.component.scss']
})
export class ArtistCompleteProfileComponent implements OnInit {

  artistProfile: FormGroup;
  name;
  phoneNumber;
  bio;
  genre;
  email = 'email';
  artistName;
  id;

  @Input() userdata;
  state$: Observable<any>;

  selectedImage = null;
  imageData: any = 'https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-upload-512.png';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthorizationService,
    private artistProfileService: ArtistProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    console.log(this.state$);

    this.createForm();
    this.loadArtistName();
    this.getArtistProfile();
  }

  createForm() {
    this.artistProfile = this.formBuilder.group({
      name: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
      phoneNumber: new FormControl('', { validators: [Validators.required, Validators.pattern('^07[\\d]{8,8}$')], updateOn: 'blur' }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
      bio: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
      genre: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
      profilePic: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
    });
  }


  onImageChange(event) {
    this.selectedImage = event.target.files[0];

    const fileReader = new FileReader();



    fileReader.readAsDataURL(this.selectedImage);

    fileReader.onload = () => {
      this.imageData = fileReader.result;
    };

  }

  onSubmit() {
    // const profile = this.artistProfile;
    // profile.value.profilePic = this.selectedImage;
    // profile.controls.profilePic = this.selectedImage;

    // console.log(profile.controls);
    const formData = new FormData();
    formData.append('profilePic', this.selectedImage);

    // for (let property in profile) {
    //   if (property !== 'profilePic') {
    //     formData.append(property, profile[property]);
    //   }
    // }
    const profile = {
      name: this.artistProfile.controls['name'].value,
      phoneNumber: this.artistProfile.controls['phoneNumber'].value,
      bio: this.artistProfile.controls['bio'].value,
      genre: this.artistProfile.controls['genre'].value,
      email: this.artistProfile.controls['email'].value
    };

    console.log(profile);

    return this.authService.completeProfile(profile).subscribe(data => {
      console.log(data);
      this.authService.updateProfilePic(formData).subscribe(res => {
        console.log('Hurray!');
        this.router.navigate(['/dashboard/']);
      });


    }, err => {
      console.log(err);
      catchError(handleHttpError);
    });
  }

  loadArtistName() {
    const { name, _id } = JSON.parse(localStorage.getItem('user'));
    this.artistName = name;
    this.id = _id;
  }
  getArtistProfile() {
    this.artistProfileService.getArtistProfile(this.id).subscribe((profile: any) => {
      const { name, email, phoneNumber } = profile;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.email = email;
    });
  }

}
