<template>
  <v-card class="cards">
    <v-img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`">
    </v-img>
    <v-card-title class="text-sm-left">
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle class="text-sm-left">
      Released {{ movie.release_date }}
    </v-card-subtitle>
    <v-card-text>
      <v-row class="d-flex align-center mb-0 ms-0 pb-0">
        <v-rating
          :value="movie.vote_average / 2"
          color="red lighten-3"
          background-color="grey lighten-2"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <span class="grey--text ms-4">
          {{ movie.vote_average / 2 }} ({{ movie.vote_count }})
        </span>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ movie.overview }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: ['movie'],
    data: () => ({
      show: false,
    }),
  };
</script>
