<template>
  <div id="app">
    <nav-bar />
    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Metro Brain Based StartUp</strong> by <a href="https://www.metrosystems.co.th">Metrosystems.</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar"

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
}

</script>

<style>

  h1,
  h2 {
      font-weight: normal;
  }
  a {
      color: #42b983;
  }

  @import url('https://fonts.googleapis.com/css?family=K2D|Krub');
  
  #app {
    font-family: 'K2D', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 81.55px;
    /* margin-bottom: 60px; */
  }
  svg{
    margin-right: 0.43em;
  }

  .modal-content {
    width: 1060px!important;
  }

  @media screen and (min-width: 769px), print{
    .modal-content{
        width: 1060px!important;
    }
  }

  .notification {
    background-color: white;
  }

  .subtitle {
    padding-bottom:1em;
  }
</style>
