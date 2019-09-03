import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-rest',
  templateUrl: './password-rest.component.html',
  styleUrls: ['./password-rest.component.scss']
})
export class PasswordRestComponent implements OnInit {
  id;
  token;
  isCorrectToken;
  isLoading;

  newPassword;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.token = params.token;
    });
    this.checkIfTokenIsCorrect();
  }

  async checkIfTokenIsCorrect() {
    this.isLoading = true;
    const res = await fetch(`https://newwellmusic.com/api/artist/${this.id}`);
    const { passwordToken } = await res.json();
    console.log(passwordToken);
    this.isCorrectToken = passwordToken === this.token;
    this.isLoading = false;
  }

  async resetPassword() {
    this.isLoading = true;
    const res = await fetch(`https://newwellmusic.com/api/artist/resetPassword`, {
      method: 'POST',
      body: JSON.stringify({
        _id: this.id,
        token: this.token,
        newPassword: this.newPassword
      })
      ,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }
    );
    const { message } = await res.json();
    if (message === 'updated successfully') {
      this.router.navigateByUrl('/login');
    }
    this.isLoading = false;
  }
}
