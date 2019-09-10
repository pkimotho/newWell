import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {  ArtistsService } from '../services/artists.service';
import * as SongActions from '../actions/song.actions';

import { Artist } from '../shared/models/artist';
import { Album } from '../shared/models/album';
import { Song } from '../shared/models/song';



@Injectable()
export class SongEffect {
  id:any;

  constructor(private actions$: Actions, private QueryApi: ArtistsService) {}


  @Effect()
  loadsongs$: Observable<Action> = this.actions$.pipe(
    ofType<SongActions.LoadAllSongs>(SongActions.SongActionsType.LOAD_SONGS),
    mergeMap((Actions: SongActions.LoadAllSongs) => this.QueryApi.getSongs().pipe(
      // map((res => res.results)),
      map((songs: Song[]) =>

      new SongActions.LoadSongsSuccess(songs)
      ),
      catchError(err => of(new SongActions.LoadSongsFail(err)))
    ))
  );


  @Effect()
  loadartistsongs$: Observable<Action> = this.actions$.pipe(
    ofType<SongActions.LoadSongs>(SongActions.SongActionsType.LOAD_ARTIST_SONGS),
    mergeMap((Actions: SongActions.LoadSongs) => this.QueryApi.getSongs().pipe(
      // map((res => res.results)),
      map((songs: Song[]) =>

      new SongActions.LoadSongsSuccess(songs)
      ),
      catchError(err => of(new SongActions.LoadSongsFail(err)))
    ))
  );

  @Effect()
  loadsong$: Observable<Action> = this.actions$.pipe(
    ofType<SongActions.LoadSongs>(SongActions.SongActionsType.LOAD_SONG),
    mergeMap((Actions: SongActions.LoadSongs) => this.QueryApi.getSong(this.id).pipe(
      // map((res => res.results)),
      map((song: Song) =>

      new SongActions.LoadSongSuccess(song)
      ),
      catchError(err => of(new SongActions.LoadSongFail(err)))
    ))
  );


  @Effect()
  createsong$: Observable<Action> = this.actions$.pipe(
    ofType<SongActions.CreateSongSuccess>(SongActions.SongActionsType.CREATE_SONG_SUCCESS),
  );







}
