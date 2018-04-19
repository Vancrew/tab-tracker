<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout mt-2>
      <v-flex xs6>
        <tab :tab="song.tab" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :lyrics="song.lyrics" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongService.show(songId)).data

    if (this.isUserLoggedIn) {
      await SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
