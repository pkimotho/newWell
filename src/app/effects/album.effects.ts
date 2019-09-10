import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {  ArtistsService } from '../services/artists.service';
import * as AlbumActions from '../actions/album.actions';

import { Artist } from '../shared/models/artist';
import { Album } from '../shared/models/album';
import { Song } from '../shared/models/song';



@Injectable()
export class AlbumEffect {
  id: any;

  constructor(private actions$: Actions, private artistApi: ArtistsService) {}


  @Effect()
  loadalbums$: Observable<Action> = this.actions$.pipe(
    ofType<AlbumActions.LoadAlbums>(AlbumActions.AlbumActionsType.LOAD_ARTIST_ALBUMS),
    mergeMap((Actions: AlbumActions.LoadAlbums) => this.artistApi.getAlbums().pipe(
      // map((res => res.results)),
      map((albums: Album[]) =>

      new AlbumActions.LoadAlbumsSuccess(albums)
      ),
      catchError(err => of(new AlbumActions.LoadAlbumsFail(err)))
    ))
  );


  @Effect()
  loadalbum$: Observable<Action> = this.actions$.pipe(
    ofType<AlbumActions.LoadAlbum>(AlbumActions.AlbumActionsType.LOAD_ALBUM_SUCCESS),
    mergeMap((Actions: AlbumActions.LoadAlbum) => this.artistApi.getAlbum(this.id).pipe(
      // map((res => res.results)),
      map((albums: Album[]) =>

      new AlbumActions.LoadAlbumsSuccess(albums)
      ),
      catchError(err => of(new AlbumActions.LoadAlbumsFail(err)))
    ))
  );
}
