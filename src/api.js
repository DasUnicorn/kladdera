import { applyAuthTokenInterceptor } from 'axios-jwt';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'

// 1. Create an axios instance that you wish to apply the interceptor to
const axiosInstance = axios.create({ baseURL: BASE_URL })

// 2. Define token refresh function.
const requestRefresh = (refresh) => {
    // Notice that this is the global axios instance, not the axiosInstance!  <-- important
    return axios.post(`${BASE_URL}/auth/token/refresh/`, { refresh })
      .then(response => response.data.access_token)
};

// 3. Apply interceptor
applyAuthTokenInterceptor(axiosInstance, { requestRefresh });  // Notice that this uses the axiosInstance instance.  <-- important


// 5. Logging out
//const logout = () => clearAuthTokens()


export default axiosInstance;

