<template>
  <h3>Search Movie</h3>
  <form class="search-form">
    <label for="">Search Movie:</label>
    <input type="text" v-model="query_name" />
    <button @click="getMovies">Search</button>
  </form>
  <hr style="display: inline-block; width: 300px margin: 10px 0 10px 0" />
  <p>Search query: <strong>{{ query_name }}</strong></p>
  <div class="error-message" v-if="fetched && !movies.length">No movies found. Try another query</div>
  <Loader v-if="loading" />
  <div v-if="error">{{ error }}</div>
  <MoviesContainer :movies="movies" />
</template>

<script>
import MoviesContainer from "../components/MoviesContainer.vue";
import Loader from "../components/Loader.vue";
export default {
  name: "Search Movies",
  components: { MoviesContainer, Loader },
  data() {
    return {
      query_name: "",
      movies: [],
      search_movies_url: ``,
      loading: false,
      error: null,
      fetched: false
    };
  },
  methods: {
    getMovies(e) {
      e.preventDefault();
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582&language=en-US&query=${this.query_name}&page=1`;
      this.loading = true;
      this.fetched = false
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results;
          console.log(this.movies);
          this.loading = false;
          this.fetched = true
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
.search-form input {
  border: none;
  border-bottom: 1px #888 solid;
  outline: none;
  padding: 4px 8px;
  background: inherit;
  box-sizing: border-box;
  color: #000;
  margin: 5px 10px;
  font-size: 15px;
}
.search-form label {
  color: #555;
  display: inline-block;
  margin: 15px 0 10px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.search-form button {
  background: #42b983;
  padding: 7px 15px;
  color: white;
  font-weight: 700;
  border-radius: 4px;
  margin: 5px auto;
  font-weight: 500;
  border: 0;
}
.search-form button:hover {
  border: 1px #000 solid;
  background: #2f9b6a;
  cursor: pointer;
}
@media screen and (max-width: 400px) {
  .search-form {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .search-form input,
  .search-form button {
    width: 80%;
    margin: 10px auto;
  }
}
</style>