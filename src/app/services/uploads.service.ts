import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {


  constructor(private http: HttpClient) {


  }
  uploadSongData(songData) {
    return this.http.post(environment.base_url + 'song/new', songData);
  }
  private getEventMessage(event: HttpEvent<any>, songData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
        return `File "${songData.get('song').name}" surprising upload event: ${event.type}.`;
    }
  }
  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }
  private apiResponse(event) {
    return event.body;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.log('An Error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body is: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later');
  }

  uploadaudio(file, id) {
    return this.http.put(`${environment.base_url}song/audioFile/${id}`, file, {
      reportProgress: true,
      observe: 'events'
    });
  }
  uploadAlbumArt(file, id) {
    return this.http.put(`${environment.base_url}song/albumArt/${id}`, file, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
