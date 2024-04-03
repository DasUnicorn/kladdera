import axios from 'axios';
import { useMemo, useContext } from 'react';
import { CurrentUserContext, SetCurrentUserContext } from '../App'; // Adjust the import path as necessary

// Function to refresh the token
const refreshToken = async (refreshToken) => {
 try {
    const response = await axios.post('/dj-rest-auth/token/refresh/', {
      refresh: refreshToken,
    });
    return response.data.access;
 } catch (error) {
    console.error('Failed to refresh token', error);
    throw error;
 }
};

// Custom Axios instance with interceptor
const useAxiosWithRefreshToken = () => {
 const currentUser = useContext(CurrentUserContext);
 const setCurrentUser = useContext(SetCurrentUserContext);

 return useMemo(() => {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/',
      withCredentials: true,
    });

    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newAccessToken = await refreshToken(currentUser.refresh);
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          setCurrentUser((prevUser) => ({ ...prevUser, token: newAccessToken }));
          return instance(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return instance;
 }, [currentUser, setCurrentUser]);
};

export default useAxiosWithRefreshToken;
