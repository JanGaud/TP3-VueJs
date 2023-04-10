import http from '../http-common'

class ProductDataService {
  getAll () {
    return http.get('/product')
  }

  create (product) {
    return http.post('/product', product)
  }

  get (id) {
    return http.get(`/product/${id}`)
  }

  delete (id) {
    return http.delete(`/product/${id}`)
  }

  update (id, data) {
    return http.put(`/product/${id}`, data)
  }
}

export default new ProductDataService()
