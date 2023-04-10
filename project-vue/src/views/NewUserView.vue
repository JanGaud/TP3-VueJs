<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div v-show="message" class="alert alert-danger">{{ message }}</div>
          <h4 class="mb-3">Inscription</h4>
          <div class="form-group">
            <label for="email">Courriel</label>
            <input
              type="email"
              class="form-control mb-3"
              id="email"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label for="name">Nom</label>
            <input
              type="text"
              class="form-control mb-3"
              id="name"
              v-model="user.name"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control mb-3"
              id="password"
              v-model="user.password"
            />
          </div>
          <button
            class="w-100 btn btn-secondary btn-lg mt-3"
            type="submit"
          >
            Sauvegarder
          </button>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import UserDataService from '../services/UserDataService'

export default {
  data () {
    return {
      user: {
        email: '',
        name: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const response = await UserDataService.create(this.user)
        console.log(response.data)
        // Redirect to a success page or show a success message
      } catch (error) {
        console.log(error.response.data.message)
        this.message = error.response.data.message
      }
    }
  }
}
</script>
