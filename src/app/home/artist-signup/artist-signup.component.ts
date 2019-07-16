import { Component, OnInit } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { Artist } from '../../shared/models/artist';

import { AuthToken } from '../../services/core/token';
import { AuthResult } from 'src/app/services/core/auth.result';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from 'src/app/services/errors/http';

@Component({
  selector: 'app-artist-signup',
  templateUrl: './artist-signup.component.html',
  styleUrls: ['./artist-signup.component.scss']
})
export class ArtistSignupComponent implements OnInit {

  form;
  message;

  constructor(private formBuilder: FormBuilder, private router:Router,
    private authService: AuthorizationService) { }

  ngOnInit() {
    this.createForm();
  }
  // Function to create registration form;
  createForm() {
    this.form = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      name: ['', Validators.compose([
        Validators.required
      ])],
      phoneNumber: new FormControl('',{ validators: [Validators.required, Validators.pattern('^07[\\d]{8,8}$' ), ], updateOn: 'blur'}),
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],

      confirmpassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],

    }, this.pwdMatchValidator);

  }


  registerArtist() {
    const artist = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      phoneNumber: this.form.get('phoneNumber').value,
    };

    this.authService.registerArtist(artist).subscribe((data) => {
      const {email, password, phoneNumber} = artist;
      this.authService.loginArtist({email,password})
      .subscribe(
        result =>
        {
          console.log(result);
          localStorage.setItem('token', result['token']);
          this.router.navigate(['artist-complete-profile', 'email', email, 'phoneNumber', phoneNumber]);
        },
        (err) =>
        catchError(handleHttpError),
        );

    },
    (err) => catchError(handleHttpError));
  }


  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmedPassword').value
       ? null : {'mismatch': true};
 }

}
