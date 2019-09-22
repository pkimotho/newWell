import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { UploadsService } from '../../../services/uploads.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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

  mainSongData;
  newSongId;

  distributionPlatforms = {
    platformsList: [
      { name: 'Spotify', link: 'spotifyLink', selected: true },
      { name: 'Deezer', link: 'deezerLink', selected: true }
    ]
  };

  mainInfoForm: FormGroup;
  uploadTrackForm: FormGroup;
  publishForm: FormGroup;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private uploadService: UploadsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadArtistId();
    this.createMainInfoForm();
    this.createUploadTrackForm();
    this.createPublishForm();
  }

  addOtherArtistsButtonClick(): void {
    (this.mainInfoForm.get('otherArtists') as FormArray).push(this.addOtherArtistsFormgroup());
  }
  createMainInfoForm() {
    this.mainInfoForm = new FormGroup({
      songTitle: new FormControl(null, Validators.required),
      artistName: new FormControl(null, Validators.required),
      hasSeveralArtists: new FormControl(false),
      otherArtists: this.fb.array([
        this.addOtherArtistsFormgroup()
      ]),
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
      phoneNumber: new FormControl(null, Validators.required),
      platforms: new FormArray([
        this.fb.group({
          name: 'Spotify',
          link: 'https://www.spotify.com'
        }),
        this.fb.group({
          name: 'Deezer',
          link: 'https://www.deezer.com'
        })
      ])
    });
  }

  buildDistributionPlatforms() {
    const platformsArray = this.distributionPlatforms.platformsList.map(platform => {
      return this.fb.control(platform.selected);
    });
    return this.fb.array(platformsArray);
  }
  onSubmitPublishForm() {
    const publisherInfo = {
      firstName: this.publishForm.controls['firstName'].value,
      lastName: this.publishForm.controls['lastName'].value,
      phoneNumber: this.publishForm.controls['phoneNumber'].value
    };
    console.log(this.publishForm);
  }

  addPlatformsGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl(null),
      link: new FormControl(null)
    });
  }

  addOtherArtistsFormgroup(): FormGroup {
    return this.fb.group({
      name: new FormControl(null),
      role: new FormControl(null)
    });
  }


  onSubmitMainInfoForm() {
    const mainInfoData = {
      title: this.mainInfoForm.controls['songTitle'].value,
      artistName: this.mainInfoForm.controls['artistName'].value,
      hasSeveralArtists: this.mainInfoForm.controls['hasSeveralArtists'].value,
      otherArtists: this.mainInfoForm.controls['otherArtists'].value,
      isPreviouslyReleased: this.mainInfoForm.controls['isPreviouslyReleased'].value,
      isOnrecordLabel: this.mainInfoForm.controls['isOnrecordLabel'].value
    };
    this.mainSongData = mainInfoData;
    this.uploadService.uploadSongData(mainInfoData).subscribe(data => {
      console.log(data);
      this.newSongId = data['_id'];
      console.log(this.newSongId);
    });
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
    const trackInfo = {
      genre: this.uploadTrackForm.controls['genre'].value,
      lyricsLanguage: this.uploadTrackForm.controls['lyricsLanguage'].value
    };

    const songForm = new FormData();
    const imageForm = new FormData();

    songForm.append('audioFile', this.selectedAudio);
    imageForm.append('albumArt', this.selectedImage);

    this.uploadService.uploadaudio(songForm, this.newSongId).subscribe(event => {
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
    this.uploadService.uploadAlbumArt(imageForm, this.newSongId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + (event.loaded / event.total * 100).toFixed(2) + '%');
        this.imageUploadProgress = 'Image Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%';
        this.imageUploadValue = Math.round(event.loaded / event.total * 100);
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
        this.imageSuccessMessage = event['success'];
      }
    });
  }


  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.artistId = _id;
  }

}

