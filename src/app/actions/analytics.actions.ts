// import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
// import { Artist } from '../shared/models/artist';
// import { Song } from '../shared/models/song';
// import { Album } from '../shared/models/album';
// import { Update } from '@ngrx/entity';





// export enum DashboardActionsType {
//   LOAD_ARTIST_ALBUMS = '[Artist] LOAD Artist',
//   LOAD_ARTIST_ALBUMS_SUCCESS = '[Artist] Artist Success',
//   LOAD_ARTIST_ALBUMS_FAIL = '[Artist] Artist Fail',


//   LOAD_ARTIST_SONGS = '[Song] LOAD Song',
//   LOAD_ARTIST_SONGS_SUCCESS = '[Song] Song Success',
//   LOAD_ARTIST_SONGS_FAIL = '[Song] Song Fail',



//   LOAD_ARTIST_PROFILE = '[Artist] LOAD Artist',
//   LOAD_ARTIST_PROFILE_SUCCESS = '[Artist] Artist Success',
//   LOAD_ARTIST_PROFILE_FAIL = '[Artist] Artist Fail',



//   LOAD_SIMPLE_ANALYTICS = '[SIMPLE ANALYTICS] LOAD SIMPLE ANALYTICS',
//   LOAD_SIMPLE_ANALYTICS_SUCCESS = '[SIMPLE ANALYTICS] SIMPLE ANALYTICS Success',
//   LOAD_SIMPLE_ANALYTICS_FAIL = '[SIMPLE ANALYTICS] SIMPLE ANALYTICS Fail',




// }



// export class LoadAlbums implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_ALBUMS


// }

// export class LoadAlbumsSuccess implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_ALBUMS_SUCCESS

//   constructor(public payload: Album[]){

//   }
// }


// export class LoadAlbumsFail implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_ALBUMS_FAIL

//   constructor(public payload: string){

//   }
// }

// export class LoadSongs implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_SONGS


// }

// export class LoadSongsSuccess implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_SONGS_SUCCESS

//   constructor(public payload: Song){

//   }
// }


// export class LoadSongsFail implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_SONGS_FAIL

//   constructor(public payload: string){

//   }
// }



// export class LoadSimpleAnalytics implements Action {
//   readonly type = DashboardActionsType.LOAD_SIMPLE_ANALYTICS
//   constructor(public payload: string){

//   }

// }

// export class LoadSimpleAnalyticsSuccess implements Action {
//   readonly type = DashboardActionsType.LOAD_SIMPLE_ANALYTICS_SUCCESS
//   constructor(public payload: string){

//   }
// }

// export class LoadSimpleAnalyticsFail implements Action {
//   readonly type = DashboardActionsType.LOAD_SIMPLE_ANALYTICS_FAIL
//   constructor(public payload: string){

//   }
// }

// export class LoadProfile implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_PROFILE
//   constructor(public payload: Artist){

//   }

// }

// export class LoadProfileSuccess implements Action {
//   readonly type =DashboardActionsType.LOAD_ARTIST_PROFILE_SUCCESS
//   constructor(public payload: Artist){

//   }
// }

// export class LoadProfileFail implements Action {
//   readonly type = DashboardActionsType.LOAD_ARTIST_PROFILE_FAIL
//   constructor(public payload: string){

//   }
// }





// export type Actions =
//  LoadAlbums | LoadAlbumsSuccess | LoadAlbumsFail |
//  LoadProfile | LoadProfileFail | LoadProfileSuccess |
//  LoadSongs | LoadSongsFail | LoadSongsSuccess |
//  LoadSimpleAnalytics | LoadSimpleAnalyticsFail | LoadSimpleAnalyticsSuccess ;




