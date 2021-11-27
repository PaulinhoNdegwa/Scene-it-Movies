<template>
  <div class="movie-details-container">
    <div class="movie-details-poster">
      <img
        :src="
          'https://image.tmdb.org/t/p/w500/' + movie.poster_path ||
          movie.backdrop_path ||
          'https://fakeimg.pl/350x200/?text=Movie Poster'
        "
        alt=""
      />
    </div>
    <div class="movie-details-content">
      <a class="title" :href="movie.homepage" target="_blank">
        <p>{{ movie.title || movie.name }}</p>
      </a>
      <p v-if="movie.tagline" class="tagline">{{ movie.tagline }}</p>
      <span class="genre" v-for="genre in movie.genres" :key="genre.id">
        {{ genre.name }}
      </span>

      <p v-if="movie.runtime" class="runtime">
        <strong
          >{{ Math.floor(movie.runtime / 60) }} hrs
          {{ movie.runtime % 60 }}mins</strong
        >
      </p>
      <p>{{ movie.overview }}</p>
      <p class="released">
        Released:
        <strong>
          {{
            movie.first_air_date
              ? movie.first_air_date.split("-")[0]
              : movie.release_date.split("-")[0]
          }}
        </strong>
      </p>
      <span v-if="movie.vote_average" class="rating">
        Rated: <strong>{{ movie.vote_average }}/10</strong>
      </span>
      <p style="margin: 10px 0 0 5px"><strong>Produced by:</strong></p>
      <div v-if="movie.production_companies" class="production-companies">
        <div
          v-for="company in movie.production_companies"
          :key="company.id"
          class="company"
        >
          <img
            :src="
              company.logo_path
                ? 'https://image.tmdb.org/t/p/w500/' + company.logo_path
                : 'https://fakeimg.pl/350x200/?text=Company'
            "
            :alt="company.name"
          />
          <p>{{ company.name }}</p>
        </div>
      </div>
      <div class="watch">
        <a
          v-if="movie.homepage"
          class="watch-now"
          :href="movie.homepage"
          target="_blank"
          >Watch now</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  mounted() {
    console.log(this.movie);
  },
};
</script>

<style>
.movie-details-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  border: 1px #888 solid;
  border-radius: 5px;
  width: 950px;
  margin: 0 auto;
}
@media screen and (max-width: 800px) {
    .movie-details-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .movie-details-content {
        width: 100% !important;
    }
    .movie-details-poster img {
        width: auto;
        max-height: 400px !important;
    }
}
.movie-details-poster {
  display: inline-block;
}
.movie-details-poster img {
  height: auto;
  width: 300px;
}
.movie-details-content {
  display: inline-block;
  width: 600px;
  padding: 10px;
  padding-top: 30px;
  text-align: left;
  padding: 15px;
  position: relative;
}
.movie-details-content .title {
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  color: #000;
}
.movie-details-content .tagline {
  font-size: 15px;
  font-style: italic;
  color: darkcyan;
}
.movie-details-content span,
p {
  display: block;
  margin: 15px 5px;
}
.movie-details-content .runtime {
  font-style: italic;
}
.movie-details-content .released,
.movie-details-content .rating {
  font-size: 14px;
}
.movie-details-content .genre {
  display: inline-block !important;
  margin: 0 5px;
  background: rgb(167, 166, 166);
  color: rgb(59, 59, 59);
  border-radius: 2.5px;
  padding: 2px 6px;
  font-size: 12px;
}
.movie-details-content .watch {
    text-align: right;
}
.production-companies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.company {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.company p {
  font-size: 11px;
  font-weight: 600;
}
.company img {
  height: 40px;
  max-width: 70px;
  border-radius: 5%;
  margin: 10px 5px;
}
.watch-now {
  margin: 10px 10px 0 5px;
  display: inline-block;
  background: darkolivegreen;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: white;
}
</style>