import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers:  { 'Content-Type': 'application/json' }
});

export const apiServices = {
    get: async(path, id = null) => {
        const auxPath = id ? `${path}/${id}` : path;
        return await instance.get(auxPath);
    },

    post: (path, params) => {
        return instance.post(path, params);
    },

    put: async (path, id, json) => {
        return await  instance.put(`${path}/${id}`, json);
    },

    delete: async (path, id) => {
        return await  instance.delete(`${path}/${id}`);
    },
};

export const setUserToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const destroyUserSesion = () => {
    instance.defaults.headers.common['Authorization'] = '';
};