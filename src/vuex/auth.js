import axios from 'axios'
import {authService} from '../services/AuthService'



export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
        errors: null,
        user: localStorage.getItem('user'),
        loggedUser: {},
    },

    getters: {
        isUserAuthenticated(state) {
            return !!state.token
        },

        loggedUser: ({loggedUser}) => loggedUser,
        

        errors(state) {
            return state.errors
        },
        user(state) {
            return JSON.parse(state.user)
        }
    },

    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setLoggedUser(state, payload) {
            state.loggedUser = payload,
            console.log('mutacija', state.loggedUser)
        },
        setErrors(state, errors) {
            state.errors = errors
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        async login( context, credentials) {
            try {
            const response = await axios.post('http://localhost:8000/api/login', credentials)
                context.commit('setToken', response.data.token)
                localStorage.setItem('token', response.data.token)
                context.commit('setUser', JSON.stringify(response.data.user))
                localStorage.setItem('user', JSON.stringify(response.data.user))
                context.commit('setErrors',null) 
                return response
            } catch(exception) {
                context.commit('setErrors',exception)
            }
        },

        async getLoggedUser(state) {
            const response = await axios.get('http://localhost:8000/api/user')
                state.commit('setLoggedUser', response.data);

        },

        async register(context, user) {
            try { 
                 const response = await  axios.post('http://localhost:8000/api/register', user)
                 return response
            } catch(exception) {
                context.commit('setErrors', exception)
            }
        },
        fetchUser(context, id) {
            return authService.get(id)
                .then(
                    response => { context.commit('setUser', response.data) }
                )
        },

        logout(context) {
            context.commit('setToken', null)
            localStorage.clear();
        },
    }
}