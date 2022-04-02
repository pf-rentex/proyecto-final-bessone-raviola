import axios from 'axios';
import { IRegisterFormData } from '../components/auth/SignupBox';
import { ILoginFormData } from '../components/auth/LoginBox';
import { IClaim } from '../reducers/claims';

// Replace base URL with server URL.
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');

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
export const getProperties = (query: string) => {
    return API.get(`/api/properties?${query}`);
};

export const checkContributor = (cuit: string) =>
    API.post('/api/afip/check_contributor', { cuit });

export const createRentalRequest = (formData: any) =>
    API.post('/api/rentalRequests', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

export const getClaims = () => {
    return API.get('/api/claims');
};
export const getClaim = (id: string) => {
    return API.get(`/api/claims/${id}`);
};
export const deleteClaim = (id: string) => {
    return API.delete(`/api/claims/${id}`);
};
export const createClaim = (formData: IClaim) => {
    return API.post(`/api/claims/`, formData);
};
