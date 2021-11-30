<template>
  <div
    class="movie"
    @click="
      this.$router.push({ name: 'MovieDetails', params: { id: movie.id } })
    "
  >
    <img
      :src="
        movie.backdrop_path
          ? 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path || movie.poster_path
          : 'https://fakeimg.pl/350x200/?text=' + movie.title || movie.name
      "
      alt=""
      class="poster-image"
    />
    <div class="extra-details">
      <p class="title">{{ movie.title || movie.name }}</p>
      <p class="release-date">
        Released:
        <strong>
          {{
            movie.first_air_date
              ? movie.first_air_date.split("-")[0]
              : movie.release_date
              ? movie.release_date.split("-")[0]
              : ""
          }}
        </strong>
      </p>
      <span class="rating"
        >Rating: <strong>{{ movie.vote_average.toFixed(1) }}/10</strong></span
      >
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
  width: 270px;
  border: 1px #888 solid;
  margin: 20px 10px;
}
.movie:hover {
  border: 2px firebrick solid;
  transform: scale(1.1);
  background: #070818;
  color: #b8b8b8;
}
@media screen and (max-width: 800px) {
  .movie {
    width: 350px;
  }
  .poster-image {
    width: 100% !important;
  }
}
.poster-image {
  width: 270px;
  height: 270px;
  display: block;
  object-fit: cover;
}
.extra-details {
  text-align: left;
  padding: 15px;
  white-space: normal;
}
.extra-details .title {
  font-weight: 600;
  margin: 12px 0;
}
.extra-details .release-date {
  margin: 5px 0;
  font-size: 14px;
}
.extra-details .rating {
  font-size: 14px;
}
</style>