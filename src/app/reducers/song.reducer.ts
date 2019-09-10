import { Song } from '../shared/models/song';

import * as SongActions from '../actions/song.actions';

import * as fromRoot from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';






export interface SongState extends EntityState<Song>{

  SelectedItemId: number | null;
  loaded: false;
  loading: false;
  error: ""
}

export interface AppState extends fromRoot.AppState {
  items: SongState;
}

export const itemAdapter: EntityAdapter<Song> = createEntityAdapter<Song>({
  selectId:Song => Song.title
})

export const defaultItem: SongState = {
  ids: [],
  entities: {},
  SelectedItemId:null,
  loading:false,
  loaded:false,
  error:""
}

export const initialState = itemAdapter.getInitialState(defaultItem)



export function SongReducer(state = initialState, action: SongActions.Actions){
  switch(action.type){
    case SongActions.SongActionsType.LOAD_ARTIST_SONGS:

    console.log("Loading artist songs");
      return {
        ...state,
        loading: true,
      };
    case SongActions.SongActionsType.LOAD_ARTIST_SONGS_SUCCESS: {
      console.log(action.payload);
      return itemAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true,
        })
      }
    case SongActions.SongActionsType.LOAD_ARTIST_SONGS_FAIL: {
        return {
          ...state,
          error: action.payload
        }
      }


    case SongActions.SongActionsType.LOAD_SONG:
        return {
          ...state,
          loading: true,
        };
      case SongActions.SongActionsType.LOAD_SONG_SUCCESS: {
        return itemAdapter.addOne(action.payload, {
            ...state,
            SelectedItemId:action.payload._id,
            loading: false,
            loaded: true,
        })
        }
      case SongActions.SongActionsType.LOAD_SONG_FAIL: {
          return {
            ...state,
            error: action.payload
          }
        }




        case SongActions.SongActionsType.CREATE_SONG_SUCCESS: {
          return itemAdapter.addOne(action.payload, state)
          }
        case SongActions.SongActionsType.CREATE_SONG_FAIL: {
            return {
              ...state,
              error: action.payload
            }
          }




          case SongActions.SongActionsType.UPDATE_SONG_SUCCESS: {

            return itemAdapter.updateOne(action.payload, state)
            }
          case SongActions.SongActionsType.UPDATE_SONG_FAIL: {
              return {
                ...state,
                error: action.payload
              }
            }






            case SongActions.SongActionsType.DELETE_SONG_SUCCESS: {
              return itemAdapter.removeOne(action.payload, state)
              }
            case SongActions.SongActionsType.DELETE_SONG_FAIL: {
                return {
                  ...state,
                 error: action.payload
                }
              }


    default:
      return state;
  }
}

const getSongsSet = createFeatureSelector<SongState>(
  "songs"
)

export const getSongs = createSelector(
  getSongsSet,
  itemAdapter.getSelectors().selectAll
)

export const getSong = createSelector(
  getSongsSet,
  itemAdapter.getSelectors().selectAll
)

export const getSongssLoading = createSelector(
  getSongsSet,
  (state: SongState ) => state.loading
)


export const getSongsLoaded = createSelector(
  getSongsSet,
  (state: SongState ) => state.loaded
)

export const getError = createSelector(
  getSongsSet,
  (state: SongState ) => state.error
)


export const getSelectedSongId = createSelector(
  getSongsSet,
  (state: SongState ) => state.SelectedItemId
)

export const getSelectedFixture = createSelector(
  getSongsSet,
  getSelectedSongId,
  state => state.entities[state.SelectedItemId]

)

