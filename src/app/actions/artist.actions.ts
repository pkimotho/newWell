import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Artist } from '../shared/models/artist';
import { Update } from '@ngrx/entity';



export enum ArtistActionsType {

  LOAD_ARTISTS = '[Artist] LOAD Artists',
  LOAD_ARTISTS_SUCCESS = '[Artist] Artists Success',
  LOAD_ARTISTS_FAIL = '[Artist] Artists Fail',

  LOAD_ARTIST = '[Artist] LOAD Artist',
  LOAD_ARTIST_SUCCESS = '[Artist] Artist Success',
  LOAD_ARTIST_FAIL = '[Artist] Artist Fail',

  CREATE_ARTIST = '[Artist] Create Artist',
  CREATE_ARTIST_SUCCESS = '[Artist] Create Artist Success',
  CREATE_ARTIST_FAIL = '[Artist] Create Artist Fail',


  UPDATE_ARTIST = '[Artist] Update Artist',
  UPDATE_ARTIST_SUCCESS = '[Artist] Update Artist Success',
  UPDATE_ARTIST_FAIL = '[Artist] Update Artist Fail',


  DELETE_ARTIST = '[Artist] DELETE Artist',
  DELETE_ARTIST_SUCCESS = '[Artist] DELETE Artist Success',
  DELETE_ARTIST_FAIL = '[Artist] DELETE Artist Fail',

}



export class LoadArtists implements Action {
  readonly type = ArtistActionsType.LOAD_ARTISTS

}

export class LoadArtistsSuccess implements Action {
  readonly type = ArtistActionsType.LOAD_ARTISTS_SUCCESS

  constructor(public payload: Artist[]){

  }
}


export class LoadArtistsFail implements Action {
  readonly type = ArtistActionsType.LOAD_ARTISTS_FAIL

  constructor(public payload: string){

  }
}



export class LoadArtist implements Action {
  readonly type = ArtistActionsType.LOAD_ARTIST

}

export class LoadArtistSuccess implements Action {
  readonly type = ArtistActionsType.LOAD_ARTIST_SUCCESS

  constructor(public payload: Artist){

  }
}


export class LoadArtistFail implements Action {
  readonly type = ArtistActionsType.LOAD_ARTIST_FAIL

  constructor(public payload: string){

  }
}

export class CreateArtist implements Action {
  readonly type = ArtistActionsType.CREATE_ARTIST

  constructor(public payload: Artist){

  }
}

export class CreateArtistSuccess implements Action {
  readonly type = ArtistActionsType.CREATE_ARTIST_SUCCESS

  constructor(public payload: Artist){

  }
}


export class CreateArtistFail implements Action {
  readonly type = ArtistActionsType.CREATE_ARTIST_FAIL

  constructor(public payload: string){

  }
}



export class DeleteArtist implements Action {
  readonly type = ArtistActionsType.DELETE_ARTIST
  constructor(public payload: string){

  }

}

export class DeleteArtistSuccess implements Action {
  readonly type = ArtistActionsType.DELETE_ARTIST_SUCCESS
  constructor(public payload: string){

  }
}

export class DeleteArtistFail implements Action {
  readonly type = ArtistActionsType.CREATE_ARTIST_FAIL
  constructor(public payload: string){

  }
}

export class UpdateArtist implements Action {
  readonly type = ArtistActionsType.UPDATE_ARTIST
  constructor(public payload: string){

  }

}

export class UpdateArtistSuccess implements Action {
  readonly type =ArtistActionsType.UPDATE_ARTIST_SUCCESS
  constructor(public payload: Update<Artist>){

  }
}

export class UpdateArtistFail implements Action {
  readonly type = ArtistActionsType.UPDATE_ARTIST_FAIL
  constructor(public payload: string){

  }
}





export type Actions =
LoadArtist | LoadArtistSuccess | LoadArtistFail |
 LoadArtists | LoadArtistsSuccess | LoadArtistsFail |
 CreateArtist | CreateArtistFail | CreateArtistSuccess |
 UpdateArtist | UpdateArtistFail | UpdateArtistSuccess |
 DeleteArtist | DeleteArtistFail | DeleteArtistSuccess ;




