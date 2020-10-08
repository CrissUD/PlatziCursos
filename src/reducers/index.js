import { actions } from '../actions/index';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (state.categories.myList.find((item) => item.id === action.payLoad.id)) {
        return { ...state };
      }
      return {
        ...state,
        categories: {
          ...state.categories,
          myList: [...state.categories.myList, action.payLoad],
        },
      };
    case actions.deleteFavorite:
      return {
        ...state,
        categories: {
          ...state.categories,
          myList: state.categories.myList.filter((item) => item.id !== action.payLoad),
        },
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payLoad,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payLoad,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payLoad,
      };
    default:
      return state;
  }
};

export default reducer;
