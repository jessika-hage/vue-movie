<template>
  <v-app>
    <v-app-bar color='third' dense flat>
      <v-spacer></v-spacer>
      <v-btn v-on:click="setAiringToday" text> Airing today </v-btn>
      <v-btn v-on:click="setTopRated" text> Top Rated </v-btn>
      <v-btn v-on:click="setPopular" text> Most popular </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="3"
          sm="4"
          v-for="tvshow in tvshows"
          :key="tvshow.id"
        >
          <Card :movie="tvshow" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Card from '../components/Card.vue';
  export default {
    name: 'TVshows',
    props: ['movie', 'id'],
    components: {
      Card,
    },

    data: () => ({
      name: 'MovieTime',
      tvshows: [],
      type: 'popular',
      show: false,
    }),
    methods: {
      getShows() {
        fetch(
          `https://api.themoviedb.org/3/tv/${this.type}?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US&page=1`
        )
          .then((res) => res.json())
          .then((json) => {
            this.tvshows = json.results;
            console.log(json.results);
          });
      },
      setAiringToday() {
        this.type = 'airing_today';
        this.getShows();
      },
      setTopRated() {
        this.type = 'top_rated';
        this.getShows();
      },
      setPopular() {
        this.type = 'popular';
        this.getShows();
      },
    },
    created() {
      this.getShows();
    },
  };
</script>
