import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export interface ApplicationState {
  currentTime: Date | null;
  dailyQuote: string | null;
  weather: string | null;
  error: string | null;
}

export enum ActionTypes {
  GetTime = "GET_TIME",
  GetQuote = "GET_QUOTE",
  GetWeather = "GET_WEATHER",
  Error = "ERROR"
}

export type ThunkDispatch = ThunkDispatch<ApplicationState, null, AnyAction>;
