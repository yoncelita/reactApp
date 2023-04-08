import * as request from './requester';

const baseUrl = `http://localhost:3030/users`;

export const login = (data) => request.post(`${baseUrl}/login`, data);

export const register = (registerData) => request.post(`${baseUrl}/register`, registerData);

export const logout = (accessToken) => request.get(`${baseUrl}/logout`, null, accessToken);