import { HttpService } from './HttpService'

class ManagersService extends HttpService {

    getAll(term = '') {
        return this.axios.get('/managers', { params: { term } })
    }
    get(id) {
        return this.axios.get(`managers/${id}`)
    }

}

export const managersService = new ManagersService()