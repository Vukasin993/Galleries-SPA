import { HttpService } from './HttpService'

class AuthService extends HttpService {
    
    login(email, password) {
         return this.axios.post('http://localhost:8000/api/login', {email, password})
    }

    register(user) {
        return this.axios.post('http://localhost:8000/api/register', user)
    }

    loggedUser() {
        return this.axios.get('http://localhost:8000/api/user')
    }
}
export const authService = new AuthService()