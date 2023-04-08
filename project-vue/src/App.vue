<template>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#"><i class="fa-sharp fa-solid fa-headphones" style="color: #ffffff;"></i> MusicTech</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item">
                          <router-link class="nav-link" aria-current="page" to="/">Acceuil</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/new-product">Vendre</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/new-user">Inscription</router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-light" type="button" @click="toggleSideBar">
                            <i class="bi-cart-fill me-1"></i>
                            Panier
                            <span class="badge bg-dark text-white ms-1 rounded-pill"> {{ totalQuantity }}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <!-- Header-->
<header>

  <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>

  <!-- The HTML5 video element that will create the background video on the header -->
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="../public/video/header.mp4" type="video/mp4">
  </video>

  <!-- The header content -->
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">MusicTech</h1>
        <p class="lead mb-0">La musique est notre langage universel</p>
      </div>
    </div>
  </div>
</header>
        <Router-view
        :inventory = "inventory"
        :addTo = "addToCart"
        :addInv = "addInventory"
        />
        <Sidebar
        v-if="showSideBar"
        :toggle = "toggleSideBar"
        :cart = "cart"
        :inventory = "inventory"
        :remove = "removeItem"
        />
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
// import inventory from '@/product.json'
import ProductDataService from '@/services/ProductDataService'

export default {
  components: {
    Sidebar
  },
  data: () => {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (product, index) {
      if (!this.cart[product]) this.cart[product] = 0
      this.cart[product] += this.inventory[index].quantity
      this.inventory[index].quantity = 0
    },
    removeItem (name) {
      delete this.cart[name]
    },
    addInventory (product) {
      this.inventory.push(product)
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}
</script>
