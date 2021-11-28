<template>
  <div class="movies" :class="{ horizontal: horizontal }">
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
  .horizontal::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(82, 82, 82, 0.3);
  }
  .horizontal::-webkit-scrollbar {
    width: 1em;
  }
  .horizontal::-webkit-scrollbar-thumb {
    background-color: #20202b;
    outline: 1px solid rgb(54, 54, 54);
    border-radius: 2px;
    margin: 10px 0;
  }
}
</style>