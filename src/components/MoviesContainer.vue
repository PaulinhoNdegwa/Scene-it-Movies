<template>
  <div class="movies" :class="{'horizontal': horizontal}">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  props: ["movies", "horizontal"],
  components: {
    MovieCard,
  },
};
</script>

<style>
.movies {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
@media screen and (min-width: 1000px) {
  .horizontal {
    flex-wrap: nowrap;
    justify-content: left;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>