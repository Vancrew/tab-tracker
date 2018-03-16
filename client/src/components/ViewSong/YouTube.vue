<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width= "353"
      :player-height="215">
    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
