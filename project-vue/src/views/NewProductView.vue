<template>
  <div class="product-add">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center"
        >
          <div class="col-sm-12">
            <h4 class="mb-3">Ajouter un produit</h4>
            <div class="needs-validation" novalidate>
              <div class="row g-2">
                <div v-if="!submitted">
                  <div class="col-12">
                    <label for="productName" class="form-label"
                      >Nom du produit</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      placeholder=""
                      v-model="product.name"
                      required
                    />
                    <div class="invalid-feedback">Un nom valide est recquis</div>
                  </div>
                  <div class="col-12">
                    <label for="productPhoto" class="form-label"
                      >Image du produit</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productPhoto"
                      placeholder=""
                      v-model="product.photo"
                      required
                    />
                    <div class="invalid-feedback">
                      Chemin de l'image valide est recquis
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productPrice" class="form-label">Prix</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">CAD</span>
                      <input
                        type="text"
                        class="form-control"
                        id="productPrice"
                        placeholder=""
                        v-model.number="product.price"
                        required
                      />
                      <div class="invalid-feedback">Un prix est recquis</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productDescription" class="form-label"
                      >description du produit</label
                    >
                    <textarea
                      class="form-control"
                      id="productDescription"
                      placeholder=""
                      v-model="product.description"
                    ></textarea>
                    <div class="invalid-feedback">Description valide</div>
                  </div>
                  <div class="col-12">
                    <label for="productType" class="form-label"
                      >Type de produit</label
                    >
                    <select
                      class="form-control"
                      id="productType"
                      placeholder=""
                      v-model="product.type"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Burguer">Burguer</option>
                      <option value="Italian">Italian</option>
                      <option value="Indian">Indian</option>
                      <option value="Thai">Thai</option>
                    </select>
                    <div class="invalid-feedback">
                      Chemin valide de l'image est recquis
                    </div>
                  </div>
                  <button
                    class="w-100 btn btn-secondary btn-lg mt-3"
                    type="button"
                    @click="saveProduct"
                  >
                    Save
                  </button>
                </div>
                <div v-else>
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong> Votre produit est bien ajouté</strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <button
                    class="w-100 btn btn-success btn-lg mt-3"
                    type="button"
                    @click="newProduct"
                  >
                    Nouveau produit
                  </button>
                </div>
                <hr class="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '../services/ProductDataService.js'
export default {
  props: ['addInv'],
  data () {
    return {
      submitted: false,
      product: {
        name: '',
        photo: '',
        price: '',
        description: '',
        type: ''
      }
    }
  },
  methods: {
    async saveProduct () {
      try {
        const response = await ProductDataService.create(this.product)
        this.addInv(response.data)
        this.submitted = true
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
      }
    },
    newProduct () {
      this.submitted = false
      this.product = {}
    }
  }
}
</script>
