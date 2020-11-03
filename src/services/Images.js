import axios from 'axios';

class Images {
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
        const response = await axios.get('/images');

        return response.data
    }

    // add(data) {
    //     return axios.post('/galleries', data);
        
    // }

    // deleteGallerie(id) {
    //     return axios.delete(`/galleries/${id}`)
    // }

    // getOne(id) {
    //     return axios.get(`/galleries/${id}`);
    // }

}

export const images = new Images();