<template>
  <div id="nav">
    | <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Search' }">Search Movies</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
  </div>
  <router-view :key="$route.path" />
</template>

<style>
body {
  margin: 0;
  background: #252634;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin: 10px;
}
#app > h3 {
  text-decoration: underline;
  margin: 15px 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.error-message {
  color: crimson;
}
hr {
  width: 90%;
  margin: 0 auto;
}
</style>
