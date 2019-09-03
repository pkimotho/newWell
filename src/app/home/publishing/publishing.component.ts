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

  showartsit(){
    var modal = document.getElementById("artist");
    modal.style.display = "flex";
    var modal = document.getElementById("join");
    modal.style.display = "none";
    var modal = document.getElementById("works");
    modal.style.display = "none";
    console.log("Clicked artsit");
    var modal = document.getElementById("tab-join");
    modal.style.background = "none";
    var modal = document.getElementById("tab-works");
    modal.style.background = "none";
    var modal = document.getElementById("tab-artist");
    modal.style.background = "#02576c";
  }

  showjoin(){
    var modal = document.getElementById("join");
    modal.style.display = "flex";
    var modal = document.getElementById("artist");
    modal.style.display = "none";
    var modal = document.getElementById("works");
    modal.style.display = "none";
    console.log("Clicked");
    var modal = document.getElementById("tab-artist");
    modal.style.background = "none";
    var modal = document.getElementById("tab-works");
    modal.style.background = "none";
    var modal = document.getElementById("tab-join");
    modal.style.background = "#02576c";
  }


  showworks(){
    var modal = document.getElementById("works");
    modal.style.display = "flex";
    var modal = document.getElementById("join");
    modal.style.display = "none";
    var modal = document.getElementById("artist");
    modal.style.display = "none";
    console.log("Clicked worrjks");
    var modal = document.getElementById("tab-join");
    modal.style.background = "none";
    var modal = document.getElementById("tab-artist");
    modal.style.background = "none";
    var modal = document.getElementById("tab-works");
    modal.style.background = "#02576c";
  }



}
