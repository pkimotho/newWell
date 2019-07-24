import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistSongsService {

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get(environment.base_url + 'song');
  }
  getArtistSongs(id) {
    return this.http.get(environment.base_url + 'song/artist/' + id);
  }

}
