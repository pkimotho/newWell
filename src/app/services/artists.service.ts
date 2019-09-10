import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(environment.base_url + '/artist/');
  }

  getSong(id) {
    return this.http.get(environment.base_url + '/songs/');
  }


  newArtist(artist) {
    return this.http.post(environment.base_url + '/artist/new', artist);
  }


  getArtistProfile(id):Observable<any> {
    return this.http.get(environment.base_url + 'artist/' + id);
  }

  updateProfile(artist): Observable<any> {

    return this.http.put(environment.base_url + 'artist/update', artist);

  }

  getSongs(): Observable<any>{
    return this.http.get(environment.base_url + '/songs');
  }

  getAlbums(): Observable<any>{
    return this.http.get(environment.base_url + '/albums');
  }

  getAlbum(id): Observable<any>{
    return this.http.get(environment.base_url + '/albums');
  }

  getSimpleAnalytics():Observable<any>{
    return this.http.get(environment.base_url + 'simpleanalytics');
  }


  getAllSongs() {
    return this.http.get(environment.base_url + 'song');
  }
  getArtistSongs(id) {
    return this.http.get(environment.base_url + 'song/artist/' + id);
  }

  createNewSong(){
    return this.http.post(environment.base_url, {})
  }


  updateProfilePic(image): Observable<any> {
    return this.http.put(environment.base_url + 'artist/uploadPic', image);
  }
}
