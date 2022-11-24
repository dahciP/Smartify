import axios from 'axios';

export const getJobs = (category) => {
  return axios
    .get(`https://smartifyroshanchinmay.herokuapp.com/job/browse/${category}`)
    .then((res) => {
      // console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
