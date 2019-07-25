import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getLandingPageContent() {
    fetch('http://192.168.0.102:1337/landingpages/1')
      .then(res => res.json()
        .then(data => {
          return data;
        }));
  }

}
