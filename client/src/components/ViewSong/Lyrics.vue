<template>
  <panel title="Lyrics">
        <textarea
          readonly
          v-model="lyrics"
        ></textarea>
      </panel>
</template>

<script>

export default {
  props: [
    'lyrics'
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
