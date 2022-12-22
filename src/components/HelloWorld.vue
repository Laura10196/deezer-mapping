<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/deezer.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="font-weight-bold mb-1">Mapping Tutorial</h1>
      </v-col>
    </v-row>
    <v-row class="text-center d-flex justify-center">
      <v-col cols="6" class="mb-4 d-flex flex-column justify-center">
        <v-text-field
          v-model="search"
          label="Search Music Artist"
        ></v-text-field>
        <v-btn color="primary" @click="findArtist()">Search</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="albums.length > 0" class="d-flex justify-center">
      <v-col v-for="album in albums" :key="album.id" cols="12" class="mb-4">
        <v-card>
          <v-card-title>
            {{ album.title }}
            <v-spacer></v-spacer>
            <v-chip v-if="album.explicit" label small dark color="error"
              >Explicit</v-chip
            >
            <v-chip class="ml-2" label small dark color="green">
              {{ album.duration }} hrs
            </v-chip>
          </v-card-title>
          <v-card-subtitle class="text-left">{{
            album.artist
          }}</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="2">
                <img :src="album.cover" alt="" />
              </v-col>
              <v-col cols="12" md="10">
                <div>Preview</div>
                <div class="mb-4 mt-2">
                  <audio controls>
                    <source :src="album.preview" />
                  </audio>
                </div>

                <v-btn
                  @click="openLink(album.link)"
                  :color="getColor()"
                  rounded
                  dark
                  >Listen on Deezer</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import services from '@/api/services'
export default {
  name: 'HelloWorld',

  data: () => ({
    search: '',
    albums: [],
    colors: ['red', 'green', 'blue', 'purple', 'indigo', 'teal', 'deep-orange'],
  }),
  methods: {
    openLink(link) {
      window.open(link, '_blank')
    },
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },
    findArtist() {
      services
        .findArtist(this.search)
        .then((res) => {
          this.albums = res.albums ? res.albums : null
        })
        .catch((err) => {
          console.log(err)
          alert(err)
        })
    },
  },
}
</script>

<style>
audio {
  width: 100%;
  border-left: 1px solid;
}
audio::-webkit-media-controls-panel {
  background: white;
}
audio::-webkit-media-controls-mute-button {
  color: white !important;
}
audio::-webkit-media-controls-play-button {
  color: white !important;
}
audio::-webkit-media-controls-timeline-container {
  color: white !important;
}
audio::-webkit-media-controls-current-time-display {
  color: white !important;
}
audio::-webkit-media-controls-time-remaining-display {
  color: white !important;
}
audio::-webkit-media-controls-timeline {
  color: white !important;
}
audio::-webkit-media-controls-volume-slider-container {
  color: white !important;
}
audio::-webkit-media-controls-volume-slider {
  color: white !important;
}
audio::-webkit-media-controls-seek-back-button {
  color: white !important;
}
audio::-webkit-media-controls-seek-forward-button {
  color: white !important;
}
audio::-webkit-media-controls-fullscreen-button {
  color: white !important;
}
audio::-webkit-media-controls-rewind-button {
  color: white !important;
}
audio::-webkit-media-controls-return-to-realtime-button {
  color: white !important;
}
audio::-webkit-media-controls-toggle-closed-captions-button {
  color: white !important;
}
</style>
