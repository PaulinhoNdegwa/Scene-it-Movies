<template>
  <h3>Home</h3>
  <Trending />
  <Upcoming />
  <Popular />
  <hr />
</template>

<script>
import Trending from "./home/Trending.vue";
import Popular from "./home/Popular.vue";
import Upcoming from "./home/Upcoming.vue";

export default {
  name: "Home",
  components: {
    Trending,
    Popular,
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