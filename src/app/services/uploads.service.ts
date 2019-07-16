import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {
  upload_artist_profile_pic = 'api/artist/uploadPic';
  upload_song_album_art_picture = 'api/song/albumArt/:songId'
  upload_audio_file = 'api/song/audioFile/:songId'


  constructor(private http: HttpClient) {


  }


  uploadaudio(file): Observable<any>{
    return this.http.post(environment.base_url + 'upload/', {}, {});

  }
}
