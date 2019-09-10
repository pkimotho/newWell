import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  form: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private router: Router,) {
      this.createForm();

    }

  ngOnInit() {
    console.log("Songs List");
  }

  createForm() {
    this.form = this.formBuilder.group({

      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])],
      genre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],

      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])],



    });

  }



  validateTitle(controls) {


  }

  validateDescription(controls) {


  }

  validateGenre(controls) {

  }

  newSong(){
    var  popup = document.getElementById('popup');
    popup.style.display = "flex";

  }

  SaveAlbum(){


    var  popup = document.getElementById('popup');
    popup.style.display = "none";

  }

  Cancel(){
    var  popup = document.getElementById('popup');
    popup.style.display = "none";

  }



}
