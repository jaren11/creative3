<template>
<div>
<nav class="navbar navbar-expand navbar-light bg-light flex-column flex-md-row pipe-navbar justify-md-content-between">
  <router-link class="navbar-brand" :to="'Home'"><img src="../images/hand.png" width="30" height="30" class="d-inline-block align-top" /> Helping Hands </router-link>
  <div class="navbar-nav-scroll ml-md-auto">
    <ul class="navbar-nav pipe-navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="'About'">About Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="'History'">Our History</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="'Donate'">Donate Now!</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="'Charity'">Search a Charity</router-link>
      </li>
    </ul>
  </div>
</nav>

<router-view />

<nav class="navbar fixed-bottom navbar-light bg-light">
  <a href="https://github.com/jaren11/creative" target="_blank" rel="noopener">GitHub</a>
  <div class="btn-group dropup ml-auto">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">🌏En</button>
    <div class="dropdown-menu">
      <a class="dropdown-item active" href="#">English</a>
      <a class="dropdown-item" href="#">Spanish</a>
    </div>
  </div>
</nav>
</div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
