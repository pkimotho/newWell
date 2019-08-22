import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-publishing',
  templateUrl: './publishing.component.html',
  styleUrls: ['./publishing.component.scss']
})
export class PublishingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
