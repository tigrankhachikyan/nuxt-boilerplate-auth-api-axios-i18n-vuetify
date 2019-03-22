<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm8
          md4
        >
          <v-card class="elevation-12">
            <v-toolbar
              dark
              color="primary"
            >
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  prepend-icon="person"
                  name="email"
                  label="Email"
                  type="text"
                />
                <v-text-field
                  id="password"
                  v-model="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="postLogin"
              >
                Login
              </v-btn>
            </v-card-actions>
            <div
              v-if="error"
              class="body-2"
              color="red"
            >
              {{ error }}
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'blank',
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async postLogin() {
      try {
        const authData = await this.$axios.$post('/login', {
          email: this.email,
          password: this.password
        })

        this.$store.commit('auth/setAuth', authData) // mutating to store for client rendering
        Cookie.set('auth', authData) // saving token in cookie for server rendering
        this.$router.push('/')
      } catch (e) {
        // this.$toast.error('Error: ' + e.message, { possition: 'top-center' }).goAway('1500')
        this.error = 'Error: ' + e.message
      }
    }
  }
}
</script>
