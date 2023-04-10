import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/product')
  }

  create (product) {
    return http.post('/product', product)
  }
}
export default new ProductDataService()
