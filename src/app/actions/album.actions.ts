import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Album } from '../shared/models/album';
import { Update } from '@ngrx/entity';





export enum AlbumActionsType {

  LOAD_ARTIST_ALBUMS = '[Album] LOAD Albums',
  LOAD_ARTIST_ALBUMS_SUCCESS = '[Album] Albums Success',
  LOAD_ARTIST_ALBUMS_FAIL = '[Album] Albums Fail',

  LOAD_ALBUM = '[Artist] LOAD Album',
  LOAD_ALBUM_SUCCESS = '[Artist] Album Success',
  LOAD_ALBUM_FAIL = '[Artist] Album Fail',

  LOAD_ALBUMS = '[Artist] LOAD Albums',
  LOAD_ALBUMS_SUCCESS = '[Artist] Albums Success',
  LOAD_ALBUMS_FAIL = '[Artist] Albums Fail',

  CREATE_ALBUM = '[Album] Create Album',
  CREATE_ALBUM_SUCCESS = '[Album] Create Album Success',
  CREATE_ALBUM_FAIL = '[Album] Create Album Fail',

  UPDATE_ALBUM = '[Album] Update Album',
  UPDATE_ALBUM_SUCCESS = '[Album] Update Album Success',
  UPDATE_ALBUM_FAIL = '[Album] Update Album Fail',

  DELETE_ALBUM = '[Album] DELETE Album',
  DELETE_ALBUM_SUCCESS = '[Album] DELETE Album Success',
  DELETE_ALBUM_FAIL = '[Album] DELETE Album Fail',


}



export class LoadAlbums implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUMS


}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUMS_SUCCESS

  constructor(public payload: Album[]){

  }
}


export class LoadAlbumsFail implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUMS_FAIL

  constructor(public payload: string){

  }
}


export class LoadAlbum implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUM


}

export class LoadAlbumSuccess implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUM_SUCCESS

  constructor(public payload: Album){

  }
}


export class LoadAlbumFail implements Action {
  readonly type = AlbumActionsType.LOAD_ALBUM_FAIL

  constructor(public payload: string){

  }
}



export class LoadArtistAlbums implements Action {
  readonly type = AlbumActionsType.LOAD_ARTIST_ALBUMS


}

export class LoadArtistAlbumsSuccess implements Action {
  readonly type = AlbumActionsType.LOAD_ARTIST_ALBUMS_SUCCESS

  constructor(public payload: Album[]){

  }
}


export class LoadArtistAlbumsFail implements Action {
  readonly type = AlbumActionsType.LOAD_ARTIST_ALBUMS_FAIL

  constructor(public payload: string){

  }
}


export class CreateAlbum implements Action {
  readonly type = AlbumActionsType.CREATE_ALBUM


}

export class CreateAlbumSuccess implements Action {
  readonly type = AlbumActionsType.CREATE_ALBUM_SUCCESS

  constructor(public payload: Album){

  }
}


export class CreateAlbumFail implements Action {
  readonly type = AlbumActionsType.CREATE_ALBUM_FAIL

  constructor(public payload: string){

  }
}



export class DeleteAlbum implements Action {
  readonly type = AlbumActionsType.DELETE_ALBUM
  constructor(public payload: string){

  }

}

export class DeleteAlbumSuccess implements Action {
  readonly type = AlbumActionsType.DELETE_ALBUM_SUCCESS
  constructor(public payload: string){

  }
}

export class DeleteAlbumFail implements Action {
  readonly type = AlbumActionsType.DELETE_ALBUM_FAIL
  constructor(public payload: string){

  }
}

export class UpdateAlbum implements Action {
  readonly type = AlbumActionsType.UPDATE_ALBUM
  constructor(public payload: string){

  }

}

export class UpdateAlbumSuccess implements Action {
  readonly type =AlbumActionsType.UPDATE_ALBUM_SUCCESS
  constructor(public payload: Update<Album>){

  }
}

export class UpdateAlbumFail implements Action {
  readonly type = AlbumActionsType.UPDATE_ALBUM_FAIL
  constructor(public payload: string){

  }
}





export type Actions =
 LoadAlbums | LoadAlbumsSuccess | LoadAlbumsFail |
 LoadAlbum | LoadAlbumSuccess | LoadAlbumFail |
 LoadArtistAlbums | LoadArtistAlbumsSuccess | LoadArtistAlbumsFail |
 CreateAlbum | CreateAlbumFail | CreateAlbumSuccess |
 UpdateAlbum | UpdateAlbumFail | UpdateAlbumSuccess |
 DeleteAlbum | DeleteAlbumFail | DeleteAlbumSuccess ;




