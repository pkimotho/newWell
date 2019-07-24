import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UploadsService } from '../../services/uploads.service';
import { Router } from '@angular/router';

export function requiredFileType(type: string) {
  return (control: FormControl) => {
    const file = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if (type.toLowerCase() !== extension.toLowerCase()) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  category = 'song';
  title = 'title';
  genre = 'genre';
  artistName;

  selectedImage: File = null;
  selectedAudio: File = null;

  imageFile = null;
  audioFile = null;

  imageSuccessMessage = null;
  audioSuccessMessage = null;

  uploadForm;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private router: Router, private uploadService: UploadsService, private http: HttpClient) {

    this.uploadForm = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.loadArtistName();
  }
  albumCategory() {
    this.category = 'album';
  }
  songCategory() {
    this.category = 'song';
  }

  onImageSelected(event) {
    this.selectedImage = event.target.files[0] as File;
    const filereader = new FileReader();
    filereader.readAsDataURL(this.selectedImage);
    filereader.onload = () => {
      this.imageFile = filereader.result;
    };
  }
  onAudioSelected(event) {
    this.selectedAudio = event.target.files[0] as File;
    const filereader = new FileReader();
    filereader.readAsDataURL(this.selectedAudio);
    filereader.onload = () => {
      this.audioFile = filereader.result;
      document.querySelector('audio').load();
    };

  }


  onUploadFile() {
    const songData = {
      title: this.uploadForm.controls[this.title].value,
      genre: this.uploadForm.controls[this.genre].value
    };

    const songForm = new FormData();
    const imageForm = new FormData();

    songForm.append('audioFile', this.selectedAudio);
    imageForm.append('albumArt', this.selectedImage);

    this.uploadService.uploadSongData(songData).subscribe(data => {
      console.log(data['title']);
      this.uploadService.uploadaudio(songForm, data['_id']).subscribe(res => {
        console.log(res);
        this.audioSuccessMessage = res['success'];
      });
      this.uploadService.uploadAlbumArt(imageForm, data['_id']).subscribe(res => {
        console.log(res);
        this.imageSuccessMessage = res['success'];
      });
    });
    setTimeout(() => {
      this.router.navigate(['/dashboard/' + this.artistName]);
    }, 2000);
  }
  loadArtistName() {
    const { name } = JSON.parse(localStorage.getItem('user'));
    this.artistName = name;
  }

}
