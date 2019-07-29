import { HttpClient, HttpEventType } from '@angular/common/http';
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
  artistId;

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

  uploadForm;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private router: Router,
    private uploadService: UploadsService,
    private http: HttpClient) {

    this.uploadForm = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.loadArtistId();
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


  onUploadSongFile() {
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
      this.uploadService.uploadaudio(songForm, data['_id']).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
          this.audioUploadProgress = 'Audio Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%';
          this.audioUploadValue = Math.round(event.loaded / event.total * 100);
          if (this.audioUploadValue === 100) {
            this.router.navigate(['/dashboard/']);
          }
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
          this.audioSuccessMessage = event['success'];
        }
      });
      this.uploadService.uploadAlbumArt(imageForm, data['_id']).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
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
