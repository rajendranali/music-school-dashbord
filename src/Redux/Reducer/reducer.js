// reducer.js
import {
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_LATEST_ENROLLMENT_COLUMN_SUCCESS,
  FETCH_LATEST_ENROLLMENT_COLUMN_FAILURE,
  FETCH_LATEST_ENROLLMENT_DATA_SUCCESS,
  FETCH_LATEST_ENROLLMENT_DATA_FAILURE,
  FETCH_BEST_ENROLLMENT_COLUMN_SUCCESS,
  FETCH_BEST_ENROLLMENT_COLUMN_FAILURE,
  FETCH_BEST_ENROLLMENT_DATA_SUCCESS,
  FETCH_BEST_ENROLLMENT_DATA_FAILURE,
} from "../ActionType/actionType";

const initialState = {
  courses: [],
  latestEnrollmentColumn: [],
  latestEnrollmentData: [],
  bestEnrollmentColumn: [],
  bestEnrollmentData: [],
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
    case FETCH_LATEST_ENROLLMENT_COLUMN_SUCCESS:
      return {
        ...state,
        latestEnrollmentColumn: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_LATEST_ENROLLMENT_COLUMN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_LATEST_ENROLLMENT_DATA_SUCCESS:
      return {
        ...state,
        latestEnrollmentData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_LATEST_ENROLLMENT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_BEST_ENROLLMENT_COLUMN_SUCCESS:
      return {
        ...state,
        bestEnrollmentColumn: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_BEST_ENROLLMENT_COLUMN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_BEST_ENROLLMENT_DATA_SUCCESS:
      return {
        ...state,
        bestEnrollmentData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_BEST_ENROLLMENT_DATA_FAILURE:
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
