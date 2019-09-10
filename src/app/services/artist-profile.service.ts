import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Artist } from '../shared/models/artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistProfileService {

  constructor(private http: HttpClient) { }

  getArtistProfile(id):Observable<any> {
    return this.http.get(environment.base_url + 'artist/' + id);
  }

  updateProfile(artist): Observable<any> {

    return this.http.put(environment.base_url + 'artist/update', artist);

  }

  updateProfilePic(image): Observable<any> {
    return this.http.put(environment.base_url + 'artist/uploadPic', image);
  }

}
