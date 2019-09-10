import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {  ArtistsService } from '../services/artists.service';
import * as ArtistActions from '../actions/artist.actions';


import { Artist } from '../shared/models/artist';
import { Album } from '../shared/models/album';
import { Song } from '../shared/models/song';



@Injectable()
export class ArtistEffect {

  constructor(private actions$: Actions, private QueryApi: ArtistsService) {}


  // @Effect()
  // loadartistsongs$: Observable<Action> = this.actions$.pipe(
  //   ofType<ArtistActions.LoadArtists>(ArtistActions.ArtistActionsType.LOAD_ARTIST_ALBUMS),
  //   mergeMap((Actions: ArtistActions.LoadArtists) => this.QueryApi.getSongs.pipe(
  //     // map((res => res.results)),
  //     map((artists: Artist[]) =>

  //     new ArtistActions.LoadArtistsSuccess(artists)
  //     ),
  //     catchError(err => of(new ArtistActions.LoadArtistsFail(err)))
  //   ))
  // );






}
