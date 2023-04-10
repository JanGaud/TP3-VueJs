<template>
  <div class="food">
    <section class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6 show-thumbnail">
            <img
              class="card-img-top mb-5 mb-md-0"
              :src="require(`@/assets/img/450/${product.photo}`)"
              :alt="product.name"
            />
          </div>
          <div class="col-md-6">
            <div class="small mb-1">Code: {{ product.id }}</div>
            <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through"></span>
              <span>$ {{ product.price.toFixed(2) }}</span>
            </div>
            <p class="lead">{{ product.description }}</p>
            <div class="d-flex">
              <input
                class="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                style="max-width: 3rem"
                v-model.number="product.quantity"
              />
              <button
                class="btn btn-outline-light flex-shrink-0"
                type="button"
                @click="addTo(product.name, productIndex)"
              >
                <i class="bi-cart-fill me-1"></i>
                Add to cart
              </button>
              <router-link
                class="btn btn-outline-primary"
                :to="'/update-product/' + product.id"
                >Modifier</router-link
              >
              <button
                class="btn btn-outline-danger"
                type="button"
                @click="deleteProduct"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['inventory', 'addTo'],
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.product.id)
        .then(() => {
          this.$emit('remove', this.productIndex)
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.error(error)
        })
    },
    beforeRouteLeave (to, from, next) {
      // Force a refresh of the page when the user navigates away from the current route
      if (to.name !== from.name) {
        next(() => {
          window.location.reload()
        })
      } else {
        next()
      }
    }
  },
  computed: {
    product () {
      const product = this.inventory.find((p) => {
        return p.name === this.$route.params.id
      })
      return product
    },
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.$route.params.id
      })
      return index
    }
  }
}
</script>
