<template>
    <div class="product-add">
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="
                        row
                        gx-4 gx-lg-5
                        row-cols-2 row-cols-md-3 row-cols-xl-2
                        justify-content-center
                        ">
                    <div class="col-sm-12">
                        <h4 class="mb-3">Modifier le produit</h4>
                        <div class="needs-validation" novalidate>
                            <div class="row g-2">
                                <div>
                                    <div class="col-12">
                                        <label for="productName" class="form-label">Product Name</label>
                                        <input type="text" class="form-control" id="productName" placeholder=""
                                            v-model="product.name" required />
                                        <div class="invalid-feedback">Valid name is required.</div>
                                    </div>
                                    <div class="col-12">
                                        <label for="productPhoto" class="form-label">Photo du produit</label>
                                        <input type="text" class="form-control" id="productPhoto" placeholder=""
                                            v-model='product.photo' required />
                                        <div class="invalid-feedback">
                                            Valid photo path is required.
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="productPrice" class="form-label">Prix</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">CAD</span>
                                            <input type="text" class="form-control" id="productPrice" placeholder=""
                                                v-model.number='product.price' required />
                                            <div class="invalid-feedback">Price is required.</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="productDescription" class="form-label">Description du
                                            produit</label>
                                        <textarea class="form-control" id="productDescription"
                                            v-model="product.description" placeholder=""></textarea>
                                        <div class="invalid-feedback">Valid description</div>
                                    </div>
                                    <div class="col-12">
                                        <label for="productType" class="form-label">Type de produit</label>
                                        <select class="form-control" id="productType" placeholder=""
                                            v-model="product.type" required>
                                            <option value="">Select</option>
                                            <option value="DJ">DJ</option>
                                            <option value="Producteur">Producteur</option>
                                            <option value="Systeme de son">Systeme de son</option>
                                            <option value="Écouteur">Écouteur</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Valid photo path is required.
                                        </div>
                                    </div>
                                    <button class="w-100 btn btn-success btn-lg mt-3" type="button"
                                        @click="updateProduct">Modifier
                                    </button>
                                </div>
                                <div v-if="submitted">
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong> You submitted successfully!</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close"></button>
                                    </div>
                                </div>
                                <hr class="my-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ProductDataService from '../services/ProductDataService'
export default {
  props: ['removeInv', 'inventory', 'remove', 'updateInvProp'],
  data () {
    return {
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.updateInvProp(this.productIndex, this.product)
          this.submitted = true
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }

}
</script>
