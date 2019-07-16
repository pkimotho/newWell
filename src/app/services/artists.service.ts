import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(environment.base_url + '/artist/');
  }


  newArtist(artist) {
    return this.http.post(environment.base_url + '/artist/new', artist);
  }
}
