import axios from 'axios';

// Get token from local storage
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
      headers: {
        authorization: token
      },
      baseURL: "https://ptpt-use-my-tech-4.herokuapp.com/api/users"
    });
}