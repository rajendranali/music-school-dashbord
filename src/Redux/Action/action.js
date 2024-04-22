// actions.js
import axios from 'axios';
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
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../ActionType/actionType";

export const fetchCourses = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/courses');
    dispatch({ type: FETCH_COURSES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    dispatch({ type: FETCH_COURSES_FAILURE, payload: error });
  }
};

export const fetchLatestEnrollmentColumn = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/latestenrollmentcolumn');
    dispatch({ type: FETCH_LATEST_ENROLLMENT_COLUMN_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching latest enrollment column data:', error);
    dispatch({ type: FETCH_LATEST_ENROLLMENT_COLUMN_FAILURE, payload: error });
  }
};

export const fetchLatestEnrollmentData = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/latestenrollmemtdata');
    dispatch({ type: FETCH_LATEST_ENROLLMENT_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching latest enrollment data:', error);
    dispatch({ type: FETCH_LATEST_ENROLLMENT_DATA_FAILURE, payload: error });
  }
};

export const fetchBestEnrollmentColumn = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/bestenrollmentcolumn');
    dispatch({ type: FETCH_BEST_ENROLLMENT_COLUMN_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching best enrollment column data:', error);
    dispatch({ type: FETCH_BEST_ENROLLMENT_COLUMN_FAILURE, payload: error });
  }
};

export const fetchBestEnrollmentData = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/bestenrollmemtdata');
    dispatch({ type: FETCH_BEST_ENROLLMENT_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching best enrollment data:', error);
    dispatch({ type: FETCH_BEST_ENROLLMENT_DATA_FAILURE, payload: error });
  }
};


//// login action 
export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  
  try {
    const response = await axios.get('http://localhost:3001/login');
    const { data } = response;

    if (data && data.username === username && data.password === password) {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
    } else {
      // If username or password doesn't match, dispatch failure action
      dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }}

export const logout = () => async dispatch => {
  try {
    // Assuming you have a logout endpoint like '/logout'
    ;
    dispatch({ type: LOGIN_SUCCESS, payload: null });
  } catch (error) {
    console.error('Error logging out:', error);
  }
};