<template>
  <panel title="Tab">
        <textarea
          readonly
          v-model="tab"
        ></textarea>
      </panel>
</template>

<script>

export default {
  props: [
    'tab'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  font-size: 12px;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 10px;
}
</style>
