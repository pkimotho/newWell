import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment';
import { ArtistSongsService } from './../../services/artist-songs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songs;
  artistName;
  numbering;
  id;
  displayOtherInfo = false;

  items = [{ id: 1, name: 'Kim', displayInfo: false }, { id: 2, name: 'Pat', displayInfo: false }];

  constructor(private http: HttpClient, private artistSongsService: ArtistSongsService, private route: ActivatedRoute) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public barChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 69, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };
  public lineChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [65, 69, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public doughnutChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true
  };

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getArtistSongs();
  }

  loadArtistId() {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    this.id = _id;
    const { name } = JSON.parse(localStorage.getItem('user'));
    this.artistName = name;
  }

  getAllArtistsSongs() {
    this.artistSongsService.getAllSongs().subscribe((songs: any[]) => {
      this.songs = songs.reverse();
      this.songs.displayOtherInfo = this.displayOtherInfo;
    });
  }
  getArtistSongs() {
    // this.artistSongsService.getArtistSongs(this.id).subscribe((songs) => {
    //   this.songs = songs;
    // });
    this.loadArtistId();
    this.http.get(environment.base_url + 'song/artist/' + this.id).subscribe((songs: any[]) => {
      this.songs = songs.reverse();
      console.log(songs);
    });
  }
  // toggleOtherInfo() {
  //   this.displayOtherInfo = !this.displayOtherInfo;
  // }

}
