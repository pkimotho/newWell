import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './../../services/artists.service';
import { AuthorizationService } from './../../services/authorization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public onLoginForm: FormGroup;
  artist;
  constructor(private authService: AuthorizationService, private formBuilder: FormBuilder) { }





    ngOnInit() {
      this.createForm();
    }
    // Function to create registration form;
    createForm() {
      this.onLoginForm = this.formBuilder.group({

        email: ['', Validators.compose([
          Validators.required
        ])],
        password: ['', Validators.compose([
          Validators.required
        ])],

        confirmpassword: ['', Validators.compose([
          Validators.required
        ])],

      });
    }





  login() {
    const user = {'email':this.onLoginForm.controls['email'].value, 'password':this.onLoginForm.controls['password'].value}

    this.authService.loginArtist(user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    console.log(this.artist);
  }


}
