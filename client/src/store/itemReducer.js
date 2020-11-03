import { itemTypes } from '../types/collectionTypes';


export function itemReducer (state = {}, action) {
    switch (action.type) {
      case itemTypes.GETONE_SUCCESS:
        return {
          ...state,
          item: action.item
        }
      case itemTypes.GETONE_FAILURE:
        return {};
      case itemTypes.GETALL_USER_SUCCESS:
        return {
          ...state,
          userItems: action.items
        };
      case itemTypes.GETALL_USER_FAILURE:
        return {};
      case itemTypes.GETALL_ITEMS_SUCCESS:
        return {
          ...state,
          allItems: action.items
        };
      case itemTypes.GETALL_ITEMS_FAILURE:
        return {};
      case itemTypes.CREATE_SUCCESS:
          return {
            ...state,
            items: action.items
          };
      case itemTypes.CREATE_FAILURE:
        return {};
      default:
        return state;
    }
  };
