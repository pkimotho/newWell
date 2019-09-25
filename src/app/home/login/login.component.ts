import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArtistsService } from './../../services/artists.service';
import { AuthorizationService } from './../../services/authorization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('messageSection') messageSection: ElementRef;

  form: FormGroup;
  artist;
  messageClass;
  message;
  showForgot = false;
  forgotEmail;
  isLoading = false;
  isLogin = false;

  constructor(
    private authService: AuthorizationService,
    private formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }
  // Function to create registration form;
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      forgotEmail: ['', Validators.required]
    });
  }

  sendEmail() {
    const email: string = this.form.get('forgotEmail').value;
    console.log(
      JSON.stringify({
        email
      })
    );
    this.isLoading = true;
    fetch('https://newwellmusic.com/api/artist/forgotPassword', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.messageClass = 'success';
        this.message = 'Please Check Your Email';
        this.isLoading = false;
        this.gotoMessageSection();
      })
      .catch(err => console.log(err));
  }

  onLoginSubmit() {
    const artist = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.isLogin = true;

    this.authService.loginArtist(artist).subscribe(
      data => {
        this.messageClass = 'success';
        this.message = 'Successfully logged in';
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/dashboard/']);
      },
      err => {
        if (err['error']) {
          this.messageClass = 'danger';
          this.message = err['error']['message'];
          this.isLogin = false;
          console.log(err);
        }
      }
    );
  }

  public gotoMessageSection() {
    this.messageSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}
