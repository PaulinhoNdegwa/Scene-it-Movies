<template>
  <div
    class="movie"
    @click="
      this.$router.push({ name: 'MovieDetails', params: { id: movie.id } })
    "
  >
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
      alt=""
      class="poster-image"
    />
    <div class="extra-details">
      <p class="title">{{ movie.title || movie.name }}</p>
      <p class="release-date">
        Released:
        {{
          movie.first_air_date
            ? movie.first_air_date.split("-")[0]
            : movie.release_date.split("-")[0]
        }}
      </p>
      <span class="rating">Rating: {{ movie.vote_average }}/10</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style>
.movie {
  width: 250px;
  border: 1px #888 solid;
  margin: 20px 10px;
}
.movie:hover {
  border: 2px #000 solid;
  width: 246px;
  transform: scale(1.1);
  background: rgb(165, 165, 165);
}
@media screen and (max-width: 800px) {
  .movie {
    width: 320px;
  }
  .movie:hover {
    border: 2px #058d3e solid;
    width: 316px;
  }
}
.poster-image {
  width: 100%;
  height: 160px;
}
.extra-details {
  text-align: left;
  padding: 15px;
}
.extra-details .title {
  font-weight: 600;
  margin: 5px 0;
}
.extra-details .release-date {
  margin: 5px 0;
  font-size: 15px;
}
.extra-details .rating {
  font-size: 14px;
}
</style>