<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" width="112" height="50">
      </router-link>
      <a role="button" class="navbar-burger" data-target="navbarBrainBase" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBrainBase" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          <span class="navbar-text">Home</span>
        </router-link>

        <router-link class="navbar-item" to="/about">
          <span class="navbar-text">Project Detail</span>
        </router-link>

        <router-link class="navbar-item" to="/coach">
          <span class="navbar-text">Coach & Committee</span>
        </router-link>

        <router-link class="navbar-item" to="/contactus">
          <span class="navbar-text">Contact Us</span>
        </router-link>

        <!-- <router-link class="navbar-item" to="/news">
          <span class="navbar-text">Register</span>
        </router-link> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://www.facebook.com/Metro-Brain-Based-Challenge-1820693137966284/" target="_blank" href="https://www.facebook.com/Metro-Brain-Based-Challenge-1820693137966284/">
                <span class="icon is-small has-text-info">
                  <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg"/>
                </span>
                <span>Facebook</span>
              </a>
            </p>
            <p class="control">
              <register-modal></register-modal>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import RegisterModal from "@/components/modal/RegisterModal"

export default {
  name: "NavBar",
  components: {
    'register-modal': RegisterModal
  },
  data() {
    return {
      //msg: "Metro Brain Base Challenge 2018"
    };
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style scoped>

nav{
  background-color: rgba(255, 255, 255, 0.97);
}
.navbar-brand > .navbar-item{
  background-color: rgba(255, 255, 255, 0.97);;
  margin-right: 30px;
}
.navbar-brand:hover{
  /* background-color: #FFF; */
}
.navbar-text {
  /* color: white; */
}
.navbar-link::after{
  /* border-color: #FFF; */
}
a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active{
  color: #f0a741;
}

.navbar-burger{
  height: 5.15rem;
  width: 4.25rem;
}

.router-link-exact-active{
  color: #f0a741;
}

#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}

.navbar-item img {
    max-height: 100% !important;
}

</style>
