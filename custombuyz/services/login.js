import { apiServices, setUserToken } from './api';

const loginService = async (params) => {
    try {
        const response = await apiServices.post('/post', params);
        const { data } = response;
        setUserToken(data.access_token);
        return data;    
    } catch (error) {
        return error;
    }
    
}

export default loginService;