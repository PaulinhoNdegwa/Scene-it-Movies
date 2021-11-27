<template>
    <div class="movies">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
    props: ['movies'],
    components: {
        MovieCard
    },
    mounted(){console.log(this.movies)}
}
</script>

<style>
.movies {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}
</style>