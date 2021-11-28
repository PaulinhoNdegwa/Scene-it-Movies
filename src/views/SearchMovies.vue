<template>
  <h3>Search Movie</h3>
  <form class="search-form">
    <label for="">Search Movie By Name:</label>
    <input @keydown="clearSearch" type="text" v-model="query_name" />
    <button @click="getMovies">Search</button>
  </form>
  <p>
    Search query: <strong>{{ query_name }}</strong>
  </p>
  <div class="error-message" v-if="fetched && !movies.length">
    No movies found. Try another query
  </div>
  <div v-if="fetched&& error">{{ error }}</div>
  <p v-if="available_movies">
    Showing {{ available_movies > 20 ? movies.length < available_movies ? page * 20 : available_movies : available_movies }} out of {{ available_movies }}
  </p>
  <MoviesContainer v-if="movies.length" :movies="movies" :horizontal="false" />
  <Loader v-if="loading" />
  <button v-if="movies.length && movies.length < available_movies" class="load-more" @click="loadMore">More</button>
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
      fetched: false,
      page: 1,
      total_pages: null,
      available_movies: null,
    };
  },
  methods: {
    getMovies(e) {
      e && e.preventDefault();
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582&language=en-US&query=${this.query_name}&page=${this.page}`;
      this.loading = true;
      this.fetched = false;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movies = [...this.movies, ...data.results];
          this.total_pages = data.total_pages;
          this.available_movies = data.total_results;
          this.loading = false;
          this.fetched = true;
        })
        .catch((err) => {
          this.error = err;
          this.loading = false;
        });
    },
    loadMore() {
      if (this.total_pages > this.page) {
        this.page++;
        this.getMovies();
      }
    },
    clearSearch() {
      if (this.fetched) {
        console.log("Here");
        this.movies = [];
        this.fetched = false
        this.page = 1,
        this.available_movies = null
      }
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
  color: #eee;
  margin: 5px 10px;
  font-size: 15px;
}
.search-form label {
  color: #eee;
  display: inline-block;
  margin: 10px;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.search-form button,
.load-more {
  background: #42b983;
  padding: 7px 15px;
  color: white;
  font-weight: 700;
  border-radius: 4px;
  margin: 5px auto;
  font-weight: 500;
  border: 0;
  cursor: pointer;
}
.load-more {
  background: slategrey;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 700;
}
.search-form button:hover, .load-more:hover {
  border: 1px #eee solid;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
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