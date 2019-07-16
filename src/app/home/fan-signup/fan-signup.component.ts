import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-fan-signup',
  templateUrl: './fan-signup.component.html',
  styleUrls: ['./fan-signup.component.scss']
})
export class FanSignupComponent implements OnInit {

  form;
  message;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthorizationService) { }

  ngOnInit() {
    this.createForm();
  }
  // Function to create registration form;
  createForm() {
    this.form = this.formBuilder.group({
      // name field;
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  registerArtist() {
    const artist = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.authService.registerArtist(artist).subscribe((data) => {
      console.log(data.json());
    }, (err) => {
      if (err.status === 400) {
        return console.log(err.json().details);
      }
      const error = err.json();
      // if (error === 'Email is already used') {
      //   this.message = error;
      //   return this.message;
      // }
    });
  }

}
