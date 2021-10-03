<template>
  <v-app>
    <v-app-bar color="third" dense flat>
      <v-spacer></v-spacer>
      <v-btn v-on:click="setUpcoming" text> Upcoming </v-btn>
      <v-btn v-on:click="setTopRated" text> Top Rated </v-btn>
      <v-btn v-on:click="setPopular" text> Most popular </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="3"
          sm="4"
          v-for="(movie, index) in movies"
          :key="index"
        >
          <Card :movie="movie" to="`/movie/${movie.id}`" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Card from '../components/Card.vue';
  export default {
    name: 'MovieList',
    components: {
      Card,
    },

    data: () => ({
      name: 'MovieTime',
      movies: [],
      type: 'popular',
      show: false,
    }),
    methods: {
      getMovies() {
        fetch(
          `https://api.themoviedb.org/3/movie/${this.type}?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US&page=1`
        )
          .then((res) => res.json())
          .then((json) => {
            this.movies = json.results;
          });
      },
      setUpcoming() {
        this.type = 'upcoming';
        this.getMovies();
      },
      setTopRated() {
        this.type = 'top_rated';
        this.getMovies();
      },
      setPopular() {
        this.type = 'popular';
        this.getMovies();
      },
    },
    created() {
      this.getMovies();
    },
  };
</script>
