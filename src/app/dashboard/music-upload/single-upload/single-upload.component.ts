import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { UploadsService } from '../../../services/uploads.service';
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
  templateUrl: './single-upload.component.html',
  styleUrls: ['./single-upload.component.scss']
})
export class SingleUploadComponent implements OnInit {

  title = 'title';
  genre = 'genre';
  artistId;

  uploadPreviewUrl = '../../assets/img/avatars/Upload.svg';
  uploadAudioPreviewUrl = '../../assets/img/avatars/audio.svg';

  selectedImage: File = null;
  selectedAudio: File = null;

  imageFile = null;
  audioFile = null;

  imageSuccessMessage = null;
  audioSuccessMessage = null;

  imageUploadProgress;
  audioUploadProgress;
  audioUploadValue = 0;
  imageUploadValue;

  singleUploadForm: FormGroup;
  uploadTrackForm: FormGroup;
  publishForm: FormGroup;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private router: Router,
    private uploadService: UploadsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadArtistId();
    this.createSingleUploadForm();
    this.createUploadTrackForm();
    this.createPublishForm();
  }
  createSingleUploadForm() {
    this.singleUploadForm = new FormGroup({
      songTitle: new FormControl(null, Validators.required),
      artistName: new FormControl(null, Validators.required),
      hasSeveralArtists: new FormControl(false),
      otherArtists: new FormArray([]),
      isPreviouslyReleased: new FormControl(false),
      isOnrecordLabel: new FormControl(false)
    });
  }

  createUploadTrackForm() {
    this.uploadTrackForm = new FormGroup({
      genre: new FormControl(null, Validators.required),
      lyricsLanguage: new FormControl(null, Validators.required),
      uploadLyrics: new FormControl(null)
    });
  }
  createPublishForm() {
    this.publishForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required)
    });
  }
  onAddOtherArtist() {
    const control = new FormControl(null, Validators.required);
    // const otherArtistsGroup = new FormGroup({
    //   otherArtistName: new FormControl(null, Validators.required),
    //   role: new FormControl(null, Validators.required)
    // });
    (this.singleUploadForm.get('otherArtists') as FormArray).push(control);
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


  onUploadSongFile() {
    const songData = {
      title: this.singleUploadForm.controls['songTitle'].value,
      lyricsLanguage: this.uploadTrackForm.controls['lyricsLanguage'].value,
      genre: this.uploadTrackForm.controls['genre'].value
    };

    const songForm = new FormData();
    const imageForm = new FormData();

    songForm.append('audioFile', this.selectedAudio);
    imageForm.append('albumArt', this.selectedImage);

    this.uploadService.uploadSongData(songData).subscribe(data => {
      // console.log(data['title']);
      this.uploadService.uploadaudio(songForm, data['_id']).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + (event.loaded / event.total * 100) + '%');
          this.audioUploadProgress = 'Audio Upload Progress: ' + (event.loaded / event.total * 100).toFixed(2) + '%';
          this.audioUploadValue = Math.round(event.loaded / event.total * 100);
          if (this.audioUploadValue === 100) {
            console.log('done');
            // this.router.navigate(['/dashboard/']);
          }
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
          this.audioSuccessMessage = event['success'];
        }
      });
      this.uploadService.uploadAlbumArt(imageForm, data['_id']).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + (event.loaded / event.total * 100).toFixed(2) + '%');
          this.imageUploadProgress = 'Image Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%';
          this.imageUploadValue = Math.round(event.loaded / event.total * 100);
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
          this.imageSuccessMessage = event['success'];
        }
      });
    });
  }
  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.artistId = _id;
  }

}

