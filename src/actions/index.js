export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
};

export const setFavorite = (payLoad) => ({
  type: actions.setFavorite,
  payLoad,
});

export const deleteFavorite = (payLoad) => ({
  type: actions.deleteFavorite,
  payLoad,
});

