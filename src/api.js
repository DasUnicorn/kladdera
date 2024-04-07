import { applyAuthTokenInterceptor } from 'axios-jwt';
import axios from 'axios';

const BASE_URL = 'https://kladdera-9fa58a88bfbf.herokuapp.com/'

// 1. Create an axios instance that you wish to apply the interceptor to
const axiosInstance = axios.create({ baseURL: BASE_URL })

// 2. Define token refresh function.
const requestRefresh = (refresh) => {
    // Notice that this is the global axios instance, not the axiosInstance!  <-- important
    return axios.post(`${BASE_URL}/auth/token/refresh/`, { refresh })
      .then(response => response.data.access)
};

// 3. Apply interceptor
applyAuthTokenInterceptor(axiosInstance, { requestRefresh });  // Notice that this uses the axiosInstance instance.  <-- important


// 5. Logging out
//const logout = () => clearAuthTokens()


export default axiosInstance;

