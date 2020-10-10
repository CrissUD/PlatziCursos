export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  setHeader: 'SET_HEADER',
  setFooter: 'SET_FOOTER',
};

export const setFavorite = (payLoad) => ({
  type: actions.setFavorite,
  payLoad,
});

export const deleteFavorite = (payLoad) => ({
  type: actions.deleteFavorite,
  payLoad,
});

export const loginRequest = (payLoad) => ({
  type: actions.loginRequest,
  payLoad,
});

export const logoutRequest = (payLoad) => ({
  type: actions.logoutRequest,
  payLoad,
});

export const registerRequest = (payLoad) => ({
  type: actions.registerRequest,
  payLoad,
});

export const getVideoSource = (payLoad) => ({
  type: actions.getVideoSource,
  payLoad,
});

export const setHeader = (payLoad) => ({
  type: actions.setHeader,
  payLoad,
});

export const setFooter = (payLoad) => ({
  type: actions.setFooter,
  payLoad,
});
