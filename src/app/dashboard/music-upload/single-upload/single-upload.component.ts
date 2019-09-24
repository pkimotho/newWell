import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

// ng2-upload imports
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

// Local imports
import { UploadsService } from '../../../services/uploads.service';
import { DistributionPlatforms } from './../upload-platforms/distribution-platforms';
import { environment } from './../../../../environments/environment';

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
  @ViewChild('imageField') imageFieldInput: ElementRef;
  @ViewChild('audioField') audioFieldInput: ElementRef;

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
  audioUploadValue;
  imageUploadValue;

  mainSongData;
  newSongId;

  platforms: Array<object> = DistributionPlatforms;
  selectedPlatforms = [];
  platformsCheckboxError = true;

  mainInfoForm: FormGroup;
  uploadTrackForm: FormGroup;
  publishForm: FormGroup;
  uploadResponse = { status: '', message: '', filePath: '' };

  // ng2-upload properties
  albumArtUri = `${environment.base_url}song/albumArt/`;
  audioUri = `${environment.base_url}song/audioFile/songId`;
  attachmentList: any = [];

  albumArtUploader: FileUploader;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private uploadService: UploadsService,
    private http: HttpClient) {
    this.uploadAlbumArt();
  }

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
      distributionPlatforms: this.addDistributionPlatformsControls()
    });
  }
  addDistributionPlatformsControls() {
    const arr = this.platforms.map(element => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }
  get platformsArray() {
    return this.publishForm.get('distributionPlatforms') as FormArray;
  }
  getSelectedPlatforms() {
    this.selectedPlatforms = [];
    this.platformsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedPlatforms.push(this.platforms[i]);
      }
    });
    this.platformsCheckboxError = this.selectedPlatforms.length > 0 ? false : true;
  }
  checkPlatformsControlsTouched() {
    let flag = false;
    this.platformsArray.controls.forEach(element => {
      if (element.touched) {
        flag = true;
      }
    });
    return flag;
  }
  onSubmitPublishForm() {
    const publisherInfo = {
      firstName: this.publishForm.controls['firstName'].value,
      lastName: this.publishForm.controls['lastName'].value,
      phoneNumber: this.publishForm.controls['phoneNumber'].value
    };
    const newItem = this.selectedPlatforms;
    if (this.publishForm.valid && !this.platformsCheckboxError) {
      // console.log(...this.publishForm.controls['distributionPlatforms'].value, newItem);
      console.log(this.selectedPlatforms);
    }
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
      artistNames: this.mainInfoForm.controls['otherArtists'].value,
      previouslyReleased: this.mainInfoForm.controls['isPreviouslyReleased'].value,
      onRecordLabel: this.mainInfoForm.controls['isOnrecordLabel'].value,
    };
    this.uploadService.uploadSongData(mainInfoData).subscribe(data => {
      console.log(data);
      this.newSongId = data['_id'];
      console.log(this.newSongId);
    });
  }

  uploadAlbumArt() {
    this.albumArtUploader = new FileUploader({ url: this.albumArtUri + '5d88bd88c6b7901b6c13982c' });
    this.albumArtUploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    };

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
  resetImageFieldInput() {
    this.imageFieldInput.nativeElement.value = '';
    this.imageFile = null;
  }
  resetAudioFieldInput(event) {
    this.audioFieldInput.nativeElement.value = '';
    this.audioFile = null;
    this.selectedAudio = event.target.files[0].remove();
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

