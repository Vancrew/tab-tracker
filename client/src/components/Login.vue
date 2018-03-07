<template>
  <v-layout column>
    <br>
    <v-flex xs6 offset-xs3>
      <panel title="LOGIN">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <div class="danger-alert" v-html="error" />
        <v-btn
          class="cyan"
          dark
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: 'qwerty@gmail.com',
      password: '12345678',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        this.error = null
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
  // watch: {
  //   email (value) {
  //     console.log('email has changed',value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello word'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
