import { itemTypes } from '../types/collectionTypes';


export function itemReducer (state={}, action) {
    switch (action.type) {
      case itemTypes.GETONE_SUCCESS:
        return {
          item: action.item
        }
      case itemTypes.GETONE_FAILURE:
        return {};
      case itemTypes.CREATE_SUCCESS:
          return {
            items: action.items
          };
      case itemTypes.CREATE_FAILURE:
        return {};
      default:
        return state;
    }
  };
