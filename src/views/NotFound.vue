<template>
  <div class="not-found">
    <h3>Error 404:</h3>
    <h4>Sorry, Page not found</h4>
    <router-link :to="{ name: 'Home' }">Back Home</router-link>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.push({ name: "Home" });
  },
};
</script>
<style>
.not-found h3,
.not-found h4 {
  font-weight: 600;
}
.not-found a {
  text-decoration: none;
  background: rgb(33 150 243);
  padding: 4px 10px;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-weight: 600;
}
</style>