import axios from 'axios';
import {ILoginFormData} from '../screens/auth/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IRegisterFormData} from '../screens/auth/Register/RegisterStepTwo';

// Replace base URL with server URL.
const API = axios.create({baseURL: 'http://10.0.2.2:5000'});

API.interceptors.request.use(async req => {
  const profile = await AsyncStorage.getItem('profile');

  if (profile) {
    req.headers.Authorization = JSON.parse(profile).token;
  }
  return req;
});

// Make all API requests here.
export const register = (formData: IRegisterFormData) =>
  API.post('/api/users', formData);
export const authenticate = (formData: ILoginFormData) =>
  API.post('/api/auth', formData);
export const getUserData = () => API.get('/api/auth/user');
export const getProperties = (query: String) => {
  return API.get(`/api/properties${query}`);
};

export const checkContributor = (cuit: string) =>
  API.post('/api/afip/check_contributor', {cuit});
