// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARS_START = 'FETCH_CHARS_START';
export const FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS';
export const FETCH_CHARS_FAIL = 'FETCH_CHARS_FAIL';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetch_chars = () => dispatch => {
    dispatch({ type: FETCH_CHARS_START });

    axios
    .get('https://swapi.co/api/people/')
    .then(response => {console.log(response);
        dispatch({ type: FETCH_CHARS_SUCCESS, payload: response.data.results});}
    )
    .catch(err => {dispatch({ type: FETCH_CHARS_FAIL, payload: err});
});
}