import { Router } from '@angular/router';
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
  form: FormGroup;
  artist;
  messageClass;
  message;


  constructor(
    private authService: AuthorizationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  // Function to create registration form;
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }





  onLoginSubmit() {
    const artist = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.authService.loginArtist(artist).subscribe(data => {
      console.log(data);
      this.messageClass = 'alert alert-success';
      this.message = 'Successfully logged in';
      this.authService.storeUserData(data['token'], data['user']);
      setTimeout(() => {
        this.router.navigate(['/dashboard/']);
      }, 2000);
    }, err => {
      if (err['error']) {
        this.messageClass = 'alert alert-danger';
        this.message = err['error']['message'];
        console.log(err);
      }
    });
  }


}
