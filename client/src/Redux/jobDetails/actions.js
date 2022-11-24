import axios from 'axios';
import {
  GET_COURSE_FAILURE,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQ,
} from './actionTypes';

export const getJobReq = () => {
  return {
    type: GET_COURSE_REQ,
  };
};

export const getJobSuccess = (payload) => {
  return {
    type: GET_COURSE_SUCCESS,
    payload,
  };
};

export const getJobFailure = () => {
  return {
    type: GET_COURSE_FAILURE,
  };
};

export const fetchCourse = (category, jobName) => (dispatch) => {
  dispatch(getJobReq());
  return axios
    .get(`https://smartifyroshanchinmay.herokuapp.com/course/${category}/${jobName}`)
    .then((res) => {
      dispatch(getJobSuccess(res.data.data[0]));
    })
    .catch((err) => {
      dispatch(getJobFailure(err));
      console.log(err);
    });
};
