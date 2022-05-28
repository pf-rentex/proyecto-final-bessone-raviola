import axios from 'axios';
import { IRegisterFormData } from '../components/auth/SignupBox';
import { ILoginFormData } from '../components/auth/LoginBox';

// Replace base URL with server URL.
const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');

    if (profile) {
        req.headers.Authorization = JSON.parse(profile).token;
    }
    return req;
});

// Make all API requests here.
export const register = (formData: IRegisterFormData) => API.post(`/api/${formData.userType}s`, formData);

export const authenticate = (formData: ILoginFormData) => API.post('/api/auth', formData);

export const getUserData = () => API.get('/api/auth/user');

export const getProperties = (query: string) => {
    return API.get(`/api/properties?${query}`);
};

export const checkContributor = (cuit: string) => API.post('/api/afip/check_contributor', { cuit });

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
export const createClaim = (formData: any) => {
    return API.post('/api/claims', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};
export const updateClaim = (formData: any) => {
    return API.put('/api/claims', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

export const updateUserData = async (formData: any) => {
    const { data } = await getUserData();
    const userType = data.userType.toLowerCase();
    return API.put(`/api/${userType}s`, formData);
};
