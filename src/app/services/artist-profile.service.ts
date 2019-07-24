import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistProfileService {

  constructor(private http: HttpClient) { }

  getArtistProfile(id) {
    return this.http.get(environment.base_url + 'artist/' + id);
  }

}
