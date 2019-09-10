// import { Song } from '../shared/models/song';

// import * as Actions from '../actions/album.actions';

// import * as fromRoot from '../app.state';
// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';









// export interface BetslipState extends EntityState<Betslip>{

//   SelectedItemId: number | null;
//   loaded: false;
//   loading: false;
//   error: ""
// }

// export interface AppState extends fromRoot.AppState {
//   items: BetslipState;
// }

// export const itemAdapter: EntityAdapter<Betslip> = createEntityAdapter<Betslip>({
//   selectId:Betslip => Betslip.name
// })

// export const defaultItem: BetslipState = {
//   ids: [],
//   entities: {},
//   SelectedItemId:null,
//   loading:false,
//   loaded:false,
//   error:""
// }

// export const initialState = itemAdapter.getInitialState(defaultItem)









// export function betslipReducer(state = initialState, action: BetslipActions.Actions){
//   switch(action.type){
//     case BetslipActions.BetslipActionsType.LOAD_BETSLIPS:
//       console.log("Loading Betslips");
//       return {
//         ...state,
//         loading: true,
//       };
//     case BetslipActions.BetslipActionsType.LOAD_BETSLIPS_SUCCESS: {
//       console.log(action.payload);
//       console.log("betslips");
//       return itemAdapter.addAll(action.payload, {
//           ...state,
//           loading: false,
//           loaded: true,
//         })
//       }
//     case BetslipActions.BetslipActionsType.LOAD_BETSLIPS_FAIL: {
//         return {
//           ...state,
//           error: action.payload
//         }
//       }


//     case BetslipActions.BetslipActionsType.LOAD_BETSLIP:
//         return {
//           ...state,
//           loading: true,
//         };
//       case BetslipActions.BetslipActionsType.LOAD_BETSLIP_SUCCESS: {
//         return itemAdapter.addOne(action.payload, {
//             ...state,
//             SelectedItemId:action.payload.name,
//             loading: false,
//             loaded: true,
//         })
//         }
//       case BetslipActions.BetslipActionsType.LOAD_BETSLIP_FAIL: {
//           return {
//             ...state,
//             error: action.payload
//           }
//         }




//         case BetslipActions.BetslipActionsType.CREATE_BETSLIP_SUCCESS: {
//           return itemAdapter.addOne(action.payload, state)
//           }
//         case BetslipActions.BetslipActionsType.CREATE_BETSLIP_FAIL: {
//             return {
//               ...state,
//               error: action.payload
//             }
//           }




//           case BetslipActions.BetslipActionsType.UPDATE_BETSLIP_SUCCESS: {

//             return itemAdapter.updateOne(action.payload, state)
//             }
//           case BetslipActions.BetslipActionsType.UPDATE_BETSLIP_FAIL: {
//               return {
//                 ...state,
//                 error: action.payload
//               }
//             }






//             case BetslipActions.BetslipActionsType.DELETE_BETSLIP_SUCCESS: {
//               return itemAdapter.removeOne(action.payload, state)
//               }
//             case BetslipActions.BetslipActionsType.DELETE_BETSLIP_FAIL: {
//                 return {
//                   ...state,
//                  error: action.payload
//                 }
//               }


//     default:
//       return state;
//   }
// }

// const getBetslipsSet = createFeatureSelector<BetslipState>(
//   "betslips"
// )

// export const getBetslips = createSelector(
//   getBetslipsSet,
//   itemAdapter.getSelectors().selectAll
// )

// export const getFixture = createSelector(
//   getBetslipsSet,
//   itemAdapter.getSelectors().selectAll
// )

// export const getFixturesLoading = createSelector(
//   getBetslipsSet,
//   (state: BetslipState ) => state.loading
// )


// export const getFixturesLoaded = createSelector(
//   getBetslipsSet,
//   (state: BetslipState ) => state.loaded
// )

// export const getError = createSelector(
//   getBetslipsSet,
//   (state: BetslipState ) => state.error
// )


// export const getSelectedFixtureId = createSelector(
//   getBetslipsSet,
//   (state: BetslipState ) => state.SelectedItemId
// )

// export const getSelectedFixture = createSelector(
//   getBetslipsSet,
//   getSelectedFixtureId,
//   state => state.entities[state.SelectedItemId]

// )

