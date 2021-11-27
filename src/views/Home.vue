<template>
  <h3>Home</h3>
  <Trending />
  <Upcoming />
  <TopRated />
  <hr />
</template>

<script>
import Trending from "./home/Trending.vue";
import TopRated from "./home/TopRated.vue";
import Upcoming from "./home/Upcoming.vue";

export default {
  name: "Home",
  components: {
    Trending,
    TopRated,
    Upcoming,
  },
};
</script>

<style>
.section-headers {
  text-decoration: underline;
  margin: 5px 0;
}
</style>