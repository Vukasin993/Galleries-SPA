import axios from 'axios';

class Galleries {
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
        const response = await axios.get('/galleries');

        return response.data
    }

    add(data) {
        return axios.post('/galleries', data);
        
    }

    addComment(data, id) {
        return axios.post(`/galleries/${id}/comments`, data)
    }

    deleteGallery(id) {
        return axios.delete(`/galleries/${id}`)
    }

    getOne(id) {
        return axios.get(`/galleries/${id}`);
    }

}

export const galleries = new Galleries();