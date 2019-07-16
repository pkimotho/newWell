import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { AuthToken } from '../services/core/token';

import { Artist } from '../shared/models/artist';
import { handleHttpError } from './errors/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  options;
  token;

  constructor(private http: HttpClient) { }



  registerArtist(user): Observable<any>{
    console.log(user);

    // return this.http.post(environment.base_url + 'artist/new', user);
    return this.token;

  }


  completeProfile(user): Observable<any>{

    return this.http.put(environment.base_url + 'artist/update', user);

  }

  updateProfilePic(user): Observable<any>{

    return this.http.put(environment.base_url + 'artist/uploadPic', user);

  }



  public get loggedIn():boolean {
    console.log(localStorage.getItem('token'));
    return (localStorage.getItem('token') !== null);
  }

  updateArtistProfile(userinfo){
    return this.http.put(environment.base_url + 'updateprofile/', userinfo);
  }

  loginArtist(userinfo):Observable<any>{
    return this.http.post(environment.base_url + 'artist/login', userinfo);
  }

  logout(){
    localStorage.removeItem('token');
  }


}
