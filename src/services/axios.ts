import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_GRAPHQL,
    timeout: 1000,
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
