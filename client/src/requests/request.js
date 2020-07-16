import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_APIURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers["Authorization"] = getToken();
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);



service.interceptors.response.use(
  response => {

    return response.data
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    console.log(error)
    return Promise.reject(error)
  }
)

export default service