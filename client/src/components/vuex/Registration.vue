<template>
  <div id="registration">
    <h3>Register here</h3>
    <hr>
    <div class="row" v-for="user in users">
      <h4>{{ user.name }}</h4>
      <button @click="registerUser(user)">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users () {
      return this.$store.state.users;
    }
  },
  methods: {
    registerUser(user) {
      const date = new Date;
      user.registered = true;
      this.$store.state.registrations.push({ userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
    }
  }
}
</script>

<style scoped>
  #registration {
    box-shadow: 1px 1px 2px 1px #ccc;
  }
</style>
