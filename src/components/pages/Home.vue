<template>
  <div>
    <!-- <div class="big-logo">
      <img class="big-logo-img" src="@/assets/vinyl-v1.jpg">
    </div> -->
    <slide></slide>

    <section class="hero is-link is-bold is-medium is-success">
      <div class="hero-body">
        <div class="container">
          <img src="@/assets/logo-new.png" width="312" height="250" style="margin-bottom:0.8em">
          <p class="is-size-1"></p>
          <h1 class="title" style="font-size:28px;line-height: 1.3;">
              โครงการ <b style="color:#f9ca24;">Metro Brain Based Start Up</b>
              เปิดโอกาสให้กับพนักงานทุกคนสามารถเข้ามาร่วมเป็นส่วนหนึ่งใน Metro Startup Family คุณพร้อมหรือยังที่จะเป็นหนึ่งในนั้น !!!
              ถึงเวลา...ปลุกไอเดียในตัวคุณ <br><br>
              “ ถ้าใครทำได้ คุณก็ทำได้ ” <br><br>
              เพียงแค่คุณมี Idea ที่ทำได้จริง
              <br> เราขอท้าคุณเพื่อเข้าชิง Start Up ทีมแรกของเมโทร <br> และพิชิตเงินรางวัลกว่า <b style="color:#f9ca24;">1,000,000 บาท</b>
              <sup style="color:#f9ca24;">*</sup>
              แล้วพบกัน <br><br>
              <span class="register-date"> วันที่ 11 ตุลาคม 2018 </span><br><br>
              <span style="color:#fff;font-size:36px;">แล้วไอเดียจะเปลี่ยนชีวิตคุณ !!!</span>
          </h1>
          <hr>
        </div>
      </div>
      <article v-for="(register, idx) in registers" :key="idx">
        <h1>{{ register.projectName }}</h1>
      </article>
    </section>

    <br><br>

    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-64.png" alt="" srcset=""></p>
          <p class="heading">facebook like</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><img src="https://cdn1.iconfinder.com/data/icons/business-487/48/20-64.png" alt="" srcset=""></p>
          <p class="heading">registered</p>
          <p class="title">123</p>
        </div>
      </div>
    </nav>

    <br>

    

    <br>
    <br>
    <br>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title"><font-awesome-icon :icon="['far', 'lightbulb']" size="lg"/> Think Out Of The Box</p>
            <br>
            <div class="content">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="subtitle">ออกจากกรอบเดิมๆ</p>
                    <p class="title">แล้วไอเดียจะ</p>
                    <p class="title">เปลี่ยนชีวิตคุณ</p>
                  </div>
                </div>
              </nav>
            </div>
            <br>
          </article>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" size="lg"/> Brain Based Benefit</p>
            <br>
            <div class="content">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                    <p class="subtitle">Think out of The box</p>
                    <p class="heading">เปิดโอกาสให้คุณได้คิดนอกกรอบ</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                    <p class="subtitle">Funding to 1 million baht</p>
                    <p class="heading">พิชิตเงินรางวัลมูลค่ารวมกว่า 1 ล้านบาท</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                    <p class="subtitle">Entrepreneur  Mentoring</p>
                    <p class="heading">โอกาสเพื่อพัฒนาและต่อยอด <br>Startup ของคุณ ให้แข็งแกร่งมากยิ่งขึ้น</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_carton_box-128.png" alt="" srcset="">
                    <p class="subtitle">MSC StartUp Family</p>
                    <p class="heading">ร่วมเป็นส่วนหนึ่งใน MSC StartUp <br>ที่เป็นมากกว่าครอบครัวและคำแนะนำต่างๆ<br>จากเหล่าผู้เชี่ยวชาญมากประสบการณ์</p>
                  </div>
                </div>
              </nav>
            </div>
            <br>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


import Slide from "@/components/Slide"

export default {
  name: 'HelloWorld',
  meta: { title: 'Metro Brain Based StartUp 2018' },
  components: {
    'slide': Slide
  },
  data() {
    return {
      msg: 'Metro Brain Based StartUp 2018',
      registers: []
    };
  },
  firestore() {
    return {
      //registers: db.collection('register')
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
