import http from '../http-common'
class UserDataService {
  getAll () {
    return http.get('/user')
  }

  create (user) {
    return http.post('/user', user)
  }
}
export default new UserDataService()
