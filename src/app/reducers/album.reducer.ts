import { Album } from '../shared/models/album';

import * as AlbumActions from '../actions/album.actions';

import * as fromRoot from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';



export interface AlbumState extends EntityState<Album>{

  SelectedItemId: string | null;
  loaded: false;
  loading: false;
  error: ""
}

export interface AppState extends fromRoot.AppState {
  items: AlbumState;
}

export const itemAdapter: EntityAdapter<Album> = createEntityAdapter<Album>({
  selectId:Album => Album._id
})

export const defaultItem: AlbumState = {
  ids: [],
  entities: {},
  SelectedItemId:null,
  loading:false,
  loaded:false,
  error:""
}

export const initialState = itemAdapter.getInitialState(defaultItem)



export function AlbumReducer(state = initialState, action: AlbumActions.Actions){
  switch(action.type){

    case AlbumActions.AlbumActionsType.LOAD_ARTIST_ALBUMS:
        console.log("Getting Albums");

      return {
        ...state,
        loading: true,
      };
    case AlbumActions.AlbumActionsType.LOAD_ARTIST_ALBUMS_SUCCESS: {
      console.log(action.payload);
      return itemAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true,
        })
      }
    case AlbumActions.AlbumActionsType.LOAD_ARTIST_ALBUMS_FAIL: {
        return {
          ...state,
          error: action.payload
        }
      }





    case AlbumActions.AlbumActionsType.LOAD_ALBUM:
        return {
          ...state,
          loading: true,
        };
      case AlbumActions.AlbumActionsType.LOAD_ALBUM_SUCCESS: {
        return itemAdapter.addOne(action.payload, {
            ...state,
            SelectedItemId:action.payload._id,
            loading: false,
            loaded: true,
        })
        }
      case AlbumActions.AlbumActionsType.LOAD_ALBUM_FAIL: {
          return {
            ...state,
            error: action.payload
          }
        }




        case AlbumActions.AlbumActionsType.LOAD_ALBUMS:
          return {
            ...state,
            loading: true,
          };
        case AlbumActions.AlbumActionsType.LOAD_ALBUMS_SUCCESS: {
          return itemAdapter.addAll(action.payload, {
              ...state,
              loading: false,
              loaded: true,
          })
          }
        case AlbumActions.AlbumActionsType.LOAD_ALBUMS_FAIL: {
            return {
              ...state,
              error: action.payload
            }
          }



        case AlbumActions.AlbumActionsType.CREATE_ALBUM_SUCCESS: {
          return itemAdapter.addOne(action.payload, state)
          }
        case AlbumActions.AlbumActionsType.CREATE_ALBUM_FAIL: {
            return {
              ...state,
              error: action.payload
            }
          }




          case AlbumActions.AlbumActionsType.UPDATE_ALBUM_SUCCESS: {
            return itemAdapter.updateOne(action.payload, state)
            }
          case AlbumActions.AlbumActionsType.UPDATE_ALBUM_FAIL: {
              return {
                ...state,
                error: action.payload
              }
            }



            case AlbumActions.AlbumActionsType.DELETE_ALBUM_SUCCESS: {
              return itemAdapter.removeOne(action.payload, state)
              }
            case AlbumActions.AlbumActionsType.DELETE_ALBUM_FAIL: {
                return {
                  ...state,
                 error: action.payload
                }
              }


    default:
      return state;
  }
}

const getAlbumsSet = createFeatureSelector<AlbumState>(
  "album"
)

export const getAlbums = createSelector(
  getAlbumsSet,
  itemAdapter.getSelectors().selectAll
)

export const getAlbum = createSelector(
  getAlbumsSet,
  itemAdapter.getSelectors().selectAll
)

export const getAlbumsLoading = createSelector(
  getAlbumsSet,
  (state: AlbumState ) => state.loading
)


export const getAlbumsLoaded = createSelector(
  getAlbumsSet,
  (state: AlbumState ) => state.loaded
)

export const getError = createSelector(
  getAlbumsSet,
  (state: AlbumState ) => state.error
)


export const getSelectedAlbumId = createSelector(
  getAlbumsSet,
  (state: AlbumState ) => state.SelectedItemId
)

export const getSelectedFixture = createSelector(
  getAlbumsSet,
  getSelectedAlbumId,
  state => state.entities[state.SelectedItemId]
)

