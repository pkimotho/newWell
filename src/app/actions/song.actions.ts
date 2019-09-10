import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Song } from '../shared/models/song';
import { Update } from '@ngrx/entity';



export enum SongActionsType {

  LOAD_ARTIST_SONGS = '[Song] LOAD Songs',
  LOAD_ARTIST_SONGS_SUCCESS = '[Song] Songs Success',
  LOAD_ARTIST_SONGS_FAIL = '[Song] Songs Fail',

  LOAD_SONGS = '[Song] LOAD Songs',
  LOAD_SONGS_SUCCESS = '[Song] Songs Success',
  LOAD_SONGS_FAIL = '[Song] Songs Fail',

  LOAD_SONG = '[Song] LOAD Song',
  LOAD_SONG_SUCCESS = '[Song] Song Success',
  LOAD_SONG_FAIL = '[Song] Song Fail',

  CREATE_SONG = '[Song] Create Song',
  CREATE_SONG_SUCCESS = '[Song] Create Song Success',
  CREATE_SONG_FAIL = '[Song] Create Song Fail',


  UPDATE_SONG = '[Song] Update Song',
  UPDATE_SONG_SUCCESS = '[Song] Update Song Success',
  UPDATE_SONG_FAIL = '[Song] Update Song Fail',


  DELETE_SONG = '[Song] DELETE Song',
  DELETE_SONG_SUCCESS = '[Song] DELETE Song Success',
  DELETE_SONG_FAIL = '[Song] DELETE Song Fail',

}



export class LoadSongs implements Action {
  readonly type = SongActionsType.LOAD_ARTIST_SONGS
  constructor(){
    console.log("Loading Songs");

  }

}

export class LoadSongsSuccess implements Action {
  readonly type = SongActionsType.LOAD_ARTIST_SONGS_SUCCESS

  constructor(public payload: Song[]){

  }
}


export class LoadSongsFail implements Action {
  readonly type = SongActionsType.LOAD_ARTIST_SONGS_FAIL

  constructor(public payload: string){

  }
}

export class LoadAllSongs implements Action {
  readonly type = SongActionsType.LOAD_SONGS


}

export class LoadAllSongsSuccess implements Action {
  readonly type = SongActionsType.LOAD_SONGS_SUCCESS

  constructor(public payload: Song[]){

  }
}


export class LoadAllSongsFail implements Action {
  readonly type = SongActionsType.LOAD_SONGS_FAIL

  constructor(public payload: string){

  }
}


export class LoadSong implements Action {
  readonly type = SongActionsType.LOAD_SONG


}

export class LoadSongSuccess implements Action {
  readonly type = SongActionsType.LOAD_SONG_SUCCESS

  constructor(public payload: Song){

  }
}


export class LoadSongFail implements Action {
  readonly type = SongActionsType.LOAD_SONG_FAIL

  constructor(public payload: string){

  }
}

export class CreateSong implements Action {
  readonly type = SongActionsType.CREATE_SONG


}

export class CreateSongSuccess implements Action {
  readonly type = SongActionsType.CREATE_SONG_SUCCESS

  constructor(public payload: Song){

  }
}


export class CreateSongFail implements Action {
  readonly type = SongActionsType.CREATE_SONG_FAIL

  constructor(public payload: string){

  }
}



export class DeleteSong implements Action {
  readonly type = SongActionsType.DELETE_SONG
  constructor(public payload: string){

  }

}

export class DeleteSongSuccess implements Action {
  readonly type = SongActionsType.DELETE_SONG_SUCCESS
  constructor(public payload: string){

  }
}

export class DeleteSongFail implements Action {
  readonly type = SongActionsType.DELETE_SONG_FAIL
  constructor(public payload: string){

  }
}

export class UpdateSong implements Action {
  readonly type = SongActionsType.UPDATE_SONG
  constructor(public payload: string){

  }

}

export class UpdateSongSuccess implements Action {
  readonly type =SongActionsType.UPDATE_SONG_SUCCESS
  constructor(public payload: Update<Song>){

  }
}

export class UpdateSongFail implements Action {
  readonly type = SongActionsType.UPDATE_SONG_FAIL
  constructor(public payload: string){

  }
}





export type Actions =
LoadSong | LoadSongFail | LoadSongSuccess |
 LoadSongs | LoadSongsSuccess | LoadSongsFail |
 CreateSong | CreateSongFail | CreateSongSuccess |
 UpdateSong | UpdateSongFail | UpdateSongSuccess |
 DeleteSong | DeleteSongFail | DeleteSongSuccess ;




