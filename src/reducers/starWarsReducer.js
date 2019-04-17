import { FETCH_CHARS_START, FETCH_CHARS_SUCCESS, FETCH_CHARS_FAIL} from "../actions";
const initialState = {
  characters: [],
  error: null,
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_START:
      return {
        ...state,
        fetching: true
      }

      case FETCH_CHARS_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          characters: action.payload
        }

        case FETCH_CHARS_FAIL:
          return {
            ...state,
            error: action.payload,
            fetching: false
          }
    default:
      return state;
  }
};
