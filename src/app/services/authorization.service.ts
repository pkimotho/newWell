import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
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

  headers;
  token;
  user;
  authToken;
  request;

  constructor(private http: HttpClient) { }

  registerArtist(user): Observable<any> {
    console.log(user);
    return this.http.post(environment.base_url + 'artist/new', user);
    return this.token;
  }


  completeProfile(user): Observable<any> {

    return this.http.put(environment.base_url + 'artist/update', user);

  }

  updateProfilePic(user): Observable<any> {
    return this.http.put(environment.base_url + 'artist/uploadPic/', user);
  }



  public get loggedIn(): boolean {
    // console.log(localStorage.getItem('token'));
    return (localStorage.getItem('token') !== null);
  }

  updateArtistProfile(userinfo) {
    return this.http.put(environment.base_url + 'updateprofile/', userinfo);
  }

  // loginArtist(userinfo): Observable<any> {
  //   return this.http.post(environment.base_url + 'artist/login', userinfo);
  // }

  loginArtist(user) {
    return this.http.post(environment.base_url + 'artist/login', user);
  }

  createAuthenticationHeaders() {
    this.loadToken();
    this.headers = new HttpHeaders({
      Content_Type: 'application/json',
      authorization: this.authToken
    });
    // this.request = new HttpRequest({
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'authorization': this.authToken;
    //   })
    // })
  }
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  getProfile() {
    this.createAuthenticationHeaders();
    return this.http.get(environment.base_url + 'artist/profile', this.headers);
  }

  logout() {
    localStorage.clear();
    this.authToken = null;
    this.user = null;
    console.log(localStorage.getItem('user'));

  }


}

