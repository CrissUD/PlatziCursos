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
    default:
      return state;
  }
};

export default reducer;
