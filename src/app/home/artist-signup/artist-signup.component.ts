import { Component, OnInit } from "@angular/core";

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { Artist } from "../../shared/models/artist";

import { AuthToken } from "../../services/core/token";
import { AuthResult } from "src/app/services/core/auth.result";
import { catchError } from "rxjs/operators";
import { handleHttpError } from "src/app/services/errors/http";

@Component({
  selector: "app-artist-signup",
  templateUrl: "./artist-signup.component.html",
  styleUrls: ["./artist-signup.component.scss"]
})
export class ArtistSignupComponent implements OnInit {
  form: FormGroup;
  message;
  messageClass;
  token = "token";
  mismatch = "mismatch";
  id = "_id";
  submissionAttempted = false;

  content = {
    title: "",
    list: []
  };

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getContent();
  }
  // Function to create registration form;
  createForm() {
    this.form = this.formBuilder.group(
      {
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
            this.validateEmail
          ])
        ],
        name: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            // this.validateName
          ])
        ],
        // phoneNumber: new FormControl('', { validators: [Validators.required, Validators.pattern('^07[\\d]{8,8}$')], updateOn: 'blur' }),
        phoneNumber: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            this.validatePhoneNumber
          ])
        ],
        password: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(35)
          ])
        ],
        agreeTerms: [false, Validators.compose([Validators.required])],

        confirmpassword: ["", Validators.compose([Validators.required])]
      },
      { validator: this.matchingPasswords("password", "confirmpassword") }
    );
  }

  validateEmail(controls) {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validateEmail: true };
    }
  }

  validateName(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validateName: true };
    }
  }

  // validatePassword(controls) {
  //   const regExp = new RegExp(
  //     /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/
  //   );
  //   if (regExp.test(controls.value)) {
  //     return null;
  //   } else {
  //     return { validatePassword: true };
  //   }
  // }
  validatePhoneNumber(controls) {
    const regExp = new RegExp(
      /^(?:254|\+254|0)?(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/
    );
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validatePhoneNumber: true };
    }
  }

  matchingPasswords(password, confirmpassword) {
    return (group: FormGroup) => {
      if (
        group.controls[password].value === group.controls[confirmpassword].value
      ) {
        return null;
      } else {
        return { matchingPasswords: true };
      }
    };
  }
  onSubmissionAttempt() {
    this.submissionAttempted = true;
  }

  registerArtist() {
    const artist = {
      name: this.form.get("name").value,
      email: this.form.get("email").value,
      password: this.form.get("password").value,
      phoneNumber: this.form.get("phoneNumber").value
    };
    // this.onSubmissionAttempt();

    this.authService.registerArtist(artist).subscribe(
      data => {
        if (!data[this.id]) {
          this.messageClass = "alert alert-danger";
          this.message = "Not Registered";
        } else {
          this.messageClass = "alert alert-success";
          this.message =
            "Successfully registered. Please complete your profile";
        }
        const { email, password, phoneNumber } = artist;
        this.authService.loginArtist({ email, password }).subscribe(
          result => {
            console.log(result);
            this.authService.storeUserData(result["token"], result["user"]);
            setTimeout(() => {
              this.router.navigate(["artist-complete-profile"]);
            }, 2000);
          },
          err => catchError(handleHttpError)
        );
      },
      err => catchError(handleHttpError)
    );
  }

  getContent() {
    fetch('https://cms.newwellmusic.com/signups')
      .then(res => res.json())
      .then(data => {
        const [content] = data;
        this.content = content;
        // console.log(this.content);
      });
  }
}
