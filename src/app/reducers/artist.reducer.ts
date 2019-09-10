import { Artist } from '../shared/models/artist';

import * as ArtistActions from '../actions/artist.actions';

import * as fromRoot from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';






export interface ArtistState extends EntityState<Artist>{

  SelectedItemId: string | null;
  loaded: false;
  loading: false;
  error: ""
}

export interface AppState extends fromRoot.AppState {
  items: ArtistState;
}

export const itemAdapter: EntityAdapter<Artist> = createEntityAdapter<Artist>({
  selectId:Artist => Artist._id
})

export const defaultItem: ArtistState = {
  ids: [],
  entities: {},
  SelectedItemId:null,
  loading:false,
  loaded:false,
  error:""
}

export const initialState = itemAdapter.getInitialState(defaultItem)



export function ArtistReducer(state = initialState, action: ArtistActions.Actions){
  switch(action.type){
    case ArtistActions.ArtistActionsType.LOAD_ARTISTS:
      return {
        ...state,
        loading: true,
      };
    case ArtistActions.ArtistActionsType.LOAD_ARTISTS_SUCCESS: {
      console.log(action.payload);
      return itemAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true,
        })
      }
    case ArtistActions.ArtistActionsType.LOAD_ARTISTS_FAIL: {
        return {
          ...state,
          error: action.payload
        }
      }


    case ArtistActions.ArtistActionsType.LOAD_ARTIST:
        return {
          ...state,
          loading: true,
        };
      case ArtistActions.ArtistActionsType.LOAD_ARTIST_SUCCESS: {
        return itemAdapter.addOne(action.payload, {
            ...state,
            SelectedItemId:action.payload._id,
            loading: false,
            loaded: true,
        })
        }
      case ArtistActions.ArtistActionsType.LOAD_ARTIST_FAIL: {
          return {
            ...state,
            error: action.payload
          }
        }




        case ArtistActions.ArtistActionsType.CREATE_ARTIST_SUCCESS: {
          return itemAdapter.addOne(action.payload, state)
          }
        case ArtistActions.ArtistActionsType.CREATE_ARTIST_FAIL: {
            return {
              ...state,
              error: action.payload
            }
          }




          case ArtistActions.ArtistActionsType.UPDATE_ARTIST_SUCCESS: {
            return itemAdapter.updateOne(action.payload, state)
            }
          case ArtistActions.ArtistActionsType.UPDATE_ARTIST_FAIL: {
              return {
                ...state,
                error: action.payload
              }
            }






            case ArtistActions.ArtistActionsType.DELETE_ARTIST: {
              return itemAdapter.removeOne(action.payload, state)
              }
            case ArtistActions.ArtistActionsType.DELETE_ARTIST_SUCCESS: {
                return {
                  ...state,
                 error: action.payload
                }
              }


    default:
      return state;
  }
}

const getArtistsSet = createFeatureSelector<ArtistState>(
  "artist"
)

export const getSongs = createSelector(
  getArtistsSet,
  itemAdapter.getSelectors().selectAll
)

export const getSong = createSelector(
  getArtistsSet,
  itemAdapter.getSelectors().selectAll
)

export const getSongssLoading = createSelector(
  getArtistsSet,
  (state: ArtistState ) => state.loading
)


export const getSongsLoaded = createSelector(
  getArtistsSet,
  (state: ArtistState ) => state.loaded
)

export const getError = createSelector(
  getArtistsSet,
  (state: ArtistState ) => state.error
)


export const getSelectedSongId = createSelector(
  getArtistsSet,
  (state: ArtistState ) => state.SelectedItemId
)

export const getSelectedFixture = createSelector(
  getArtistsSet,
  getSelectedSongId,
  state => state.entities[state.SelectedItemId]

)

