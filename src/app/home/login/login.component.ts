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
      this.router.navigate(['/dashboard/']);
    }, err => {
      if (err['error']) {
        this.messageClass = 'alert alert-danger';
        this.message = err['error']['message'];
        console.log(err);
      }
    });
  }

  public gotoMessageSection() {
    this.messageSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


}
