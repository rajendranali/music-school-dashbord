import {
  ACTION_TYPE,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_SUCCESS,
} from "../ActionType/actionType";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
