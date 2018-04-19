<template>
  <div id="app">
    <app-registration></app-registration>
    <app-registrations @userUnregistered="userUnregistered"
      :registrations="registrations"></app-registrations>
  </div>
</template>

<script>
import Registration from './components/vuex/Registration.vue';
import Registrations from './components/vuex/REgistrations.vue';

export default {
  data () {
    return {
      
    }
  },
  computed: {
    unregisteredUsers () {
      return this.users.filter((user) => {
        return !user.registered;
      });
    }
  },
  methods: {
    userUnregistered(registration) {
      const user = this.users.find( user => {
        return user.id == registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    }
  },
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations
  }

}
</script>

<style>

</style>
