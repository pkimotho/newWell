import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UploadsService } from '../../services/uploads.service';

export function requiredFileType(type: string) {
  return function (control: FormControl) {
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

  selectedFile: File = null;
  uploadForm: FormGroup;
  uploading = true;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  songs = [
    "Without Me", "Talk", "Dancing With A Stranger", "Old Town Road"
  ]

  cover_image;
  cover_image_Data;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadsService,
    private http: HttpClient) {

    this.uploadForm = new FormGroup({

      title: new FormControl("", Validators.required),
      song_Profile: new FormControl("", [Validators.required, requiredFileType('png')]),
      description: new FormControl("", [Validators.required]),
      audio: new FormControl("", [Validators.required])


    });
  }

  ngOnInit() {

  }
  albumCategory() {
    this.category = 'album';
  }
  songCategory() {
    this.category = 'song';
  }

  onImageChange(event) {
    this.cover_image = event.target.files[0];

    const fileReader = new FileReader();



    fileReader.readAsDataURL(this.cover_image);

    fileReader.onload = () => {
      this.cover_image_Data = fileReader.result;
    };

  }



  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('avatar').setValue(file);
    }
  }

  uploadFile(file) {
    return this.uploadService.uploadaudio(file).subscribe(data => {

    }, err => {
      console.log(err);
    })
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }
  onUploadFile() {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
      console.log(event);
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('avatar').value);

    // this.uploadService.upload(formData, this.userId).subscribe(
    //   (res) => this.uploadResponse = res,
    //   (err) => this.error = err
    // );
  }

}
