import { applyMiddleware, Reducer, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";

import { ActionTypes, ApplicationState } from "./types";

const initialState: ApplicationState = {
  currentTime: null,
  dailyQuote: null,
  weather: null,
  error: null
};

const reducer: Reducer<ApplicationState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GetTime:
      return {
        ...state,
        currentTime: new Date(),
        error: null
      };
    case ActionTypes.GetQuote:
      const { message, author } = action.quote;
      return {
        ...state,
        dailyQuote: `${message} - ${author}`,
        error: null
      };
    case ActionTypes.GetWeather:
      return {
        ...state,
        weather: action.weather,
        error: null
      };
    case ActionTypes.Error:
      return {
        ...initialState,
        error: action.error
      };
    default:
      return state;
  }
};

export default (): Store<ApplicationState> =>
  createStore(reducer, applyMiddleware(thunkMiddleware));
