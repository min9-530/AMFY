import { createAction, createActions, handleActions } from "redux-actions";

const SET_DATA_REQUEST = "movies/SET_DATA_REQUEST";
const SET_DATA_SUCCESS = "movies/SET_DATA_SUCCESS";
const SET_DATA_FAILURE = "movies/SET_DATA_FAILURE";
const SET_DATA = "movies/SET_DATA";

export const setDataRequest = createAction(SET_DATA_SUCCESS);
export const setDataSuccess = createAction(SET_DATA_SUCCESS, (data) => data);
export const setDataFailure = createActions(SET_DATA_FAILURE, (e) => e);
export const setData = createAction(SET_DATA);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducers = handleActions(
  {
    [SET_DATA_REQUEST]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SET_DATA_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action,
    }),
    [SET_DATA_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      error: action,
    }),
    [SET_DATA]: (state) => ({
      ...state,
      data: newData,
    }),
  },
  initialState
);
