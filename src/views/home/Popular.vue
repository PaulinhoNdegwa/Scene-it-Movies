<template>
  <div class="home">
    <h3 class="section-headers">Popular Movies</h3>
    <MoviesContainer v-if="movies.length > 0" :movies="movies" />
    <div v-else class="loading">Loading movies...</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesContainer from "../../components/MoviesContainer.vue";
export default {
  name: "Home",
  components: {
    MoviesContainer,
  },
  data() {
    return {
      popular_url:
        "https://api.themoviedb.org/3/tv/popular?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582&language=en-US&page=1",
      loading: false,
      movies: [],
      error: null,
    };
  },
  // components: {},
  created() {
    this.getMovies(this.popular_url);
  },
  methods: {
    getMovies(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results.slice(0,10);
          console.log(this.movies)
          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          this.loading = false;
        });
    },
  },
};
</script>

<style>
.loading {
    width: 400px;
    background: rgb(192, 192, 192);
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    border-radius: 3px;
    padding: 7px;
}
</style>