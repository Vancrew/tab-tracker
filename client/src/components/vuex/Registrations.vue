<template>
  <div id="registrarions">
    <div class="summary">
      <h3>Registrations</h3>
      <h5>Total: {{ total }}</h5>
    </div>
    <hr>
    <div class="row" v-for="registration in registrarions">
      <h4>{{ registration.name }}</h4>
      <span @click="unregister(registration)">(Unregister)</span>
      <div class="date">{{ registration.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    registrations () {
      return this.$store.state.registrations
    },
    total () {
      return this.$store.state.registrations.length;
    }
  },
  methods: {
    unregister(registration) {
    
    }
  }
}
</script>

<style>

</style>
