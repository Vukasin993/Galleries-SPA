import axios from 'axios';

class Galleries {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token')
            config.headers.Authorization = 'Bearer '+ token;
            return config;
        });
    }
    async getAll(payload) {
        const response = await axios.get('/galleries', {
            headers: {
                'pagination': payload.pagination,
                'searchText': payload.searchText
            }
        })
    
        return response.data
    }

    async myGalleries(payload) {
        const response = await axios.get('/my-galleries', {
            headers: {
                'pagination': payload.pagination,
                'searchText': payload.searchText
            }
        })
        
        return response.data
    }
    // async getAll(payload) {
    //     const response = await axios.get(('/galleries'), {
    //         headers: {
    //         'number': payload
    //     }
    // })
    //     return response.data
    // }

    add(data) {
        return axios.post('/galleries', data);
        
    }

    addComment(data, id) {
        return axios.post(`/galleries/${id}/comments`, data)
    }

    deleteComment(id) {
        return axios.delete(`/comments/${id}`)
    }

    deleteGallery(id) {
        return axios.delete(`/galleries/${id}`)
    }

    async getOne(id) {
        const { data } = await axios.get(`/galleries/${id}`);
        return data;
    }

}

export const galleries = new Galleries();