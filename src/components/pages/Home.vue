<template>
  <div>
    <!-- <div class="big-logo">
      <img class="big-logo-img" src="@/assets/vinyl-v1.jpg">
    </div> -->
    <slide-section></slide-section>

    <section class="hero is-bold is-medium">
      <div class="hero-body" style="padding: 0rem 0rem;">
        <img src="@/assets/banner.jpg" width="100%">
      </div>
      <!-- <article v-for="(register, idx) in registerCollection" :key="idx">
        <h1>{{ register.projectName }}</h1>
      </article> -->
    </section>

    <br><hr><br>

    <!-- <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-64.png" alt="" srcset=""></p>
          <p class="heading">facebook like</p>
          <p class="title">273 <small>like</small></p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><img src="https://cdn1.iconfinder.com/data/icons/business-487/48/20-64.png" alt="" srcset=""></p>
          <p class="heading">registered</p>
          <p class="title">{{registerCollection.length}} <small>registered</small></p>
        </div>
      </div>
    </nav> -->

    <br><hr>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile is-parent">
          <article class="tile is-child">
            <!-- <p class="title"><font-awesome-icon :icon="['far', 'lightbulb']" size="lg"/> Think Out Of The Box</p> -->
            <img src="@/assets/title/think_out_box.png" alt="">
            <br><br>
            <div class="content">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/think_out_box/box1.png" width="128px" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/think_out_box/box2.png" width="128px" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/think_out_box/box3.png" width="128px" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/think_out_box/box4.png" width="128px" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <!-- <p class="subtitle">ออกจากกรอบเดิมๆ</p>
                    <p class="title">แล้วไอเดียจะ</p>
                    <p class="title">เปลี่ยนชีวิตคุณ</p> -->
                    <img src="@/assets/section/think_out_box/out.png" width="256px" alt="" srcset="">
                  </div>
                </div>
              </nav>
            </div>
            <br>
          </article>
        </div>
      </div>
    </div>

    <hr>

    <!-- <benefit-section></benefit-section> -->

  </div>
</template>

<script>


import Slide from "@/components/Slide"
import Benefit from "@/components/Benefit"
import { db } from "@/main";

export default {
  name: 'HelloWorld',
  meta: { title: 'Metro Brain Based StartUp 2018' },
  components: {
    'slide-section': Slide,
    'benefit-section': Benefit
  },
  data() {
    return {
      msg: 'Metro Brain Based StartUp 2018',
      registers: []
    };
  },
  firestore() {
    return {
      //registerCollection: db.collection('register')
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .register-date {
    color: #f9ca24;
    font-size: 36px;
    border: 2px solid #6ed373;
    padding: 0.7em;
    display: block;
    margin: 0.1em;
  }

</style>
