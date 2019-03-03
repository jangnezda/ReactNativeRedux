import { ActionTypes, ThunkDispatch } from "./types";

export const getTime = {
  type: ActionTypes.GetTime
};

export const getQuote = (dispatch: ThunkDispatch) =>
  fetch("http://quotes.rest/qod")
    .then(request => request.json())
    .then(body => {
      const [quote] = body.contents.quotes;
      dispatch({
        type: ActionTypes.GetQuote,
        quote: { message: quote.quote, author: quote.author }
      });
    })
    .then(() => dispatch(getWeather))
    .catch(e => {
      dispatch({
        type: ActionTypes.Error,
        error: e.message
      });
    });

export const getWeather = (dispatch: ThunkDispatch) =>
  fetch("http://wttr.in/Copenhagen?format=3")
    .then(request => request.text())
    .then(body => {
      dispatch({
        type: ActionTypes.GetWeather,
        weather: body
      });
    })
    .catch(e => {
      dispatch({
        type: ActionTypes.Error,
        error: e.message
      });
    });
