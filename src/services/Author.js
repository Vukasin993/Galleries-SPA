import axios from 'axios';

class Authors {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.interceptors.request.use(function(config) {
            const token = localStorage.getItem('token');
            if(token) {
                config.headers.Authoratization = "Bearer " + token;
            }
            return config;
        });
    }
    async getAll() {
        const response = await axios.get('/authors');

        return response.data
    }


    getOne(id) {
        return axios.get(`/authors/${id}`);
    }

}

export const authors = new Authors();