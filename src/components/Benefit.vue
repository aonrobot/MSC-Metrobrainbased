<template>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile is-parent">
          <article class="tile is-child">
            <!-- <p class="title"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" size="lg"/> Brain Based Benefit</p> -->
            <img src="@/assets/title/benefit.png" alt="">
            <br><br>
            <div class="content">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/benefit/4.png" alt="" width="128px" class="section-logo">
                    <p class="subtitle benefit-subtitle">Think Out of The Box</p>
                    <p class="heading benefit-heading">เปิดโอกาสให้คุณได้คิดนอกกรอบ</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/benefit/2.png" alt="" width="128px" class="section-logo">
                    <p class="subtitle benefit-subtitle">Funding to 1 Million Baht</p>
                    <p class="heading benefit-heading">พิชิตเงินรางวัลมูลค่ารวมกว่า 1 ล้านบาท</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/benefit/13.png" alt="" width="128px" class="section-logo">
                    <p class="subtitle benefit-subtitle">Entrepreneur  Mentoring</p>
                    <p class="heading benefit-heading">โอกาสเพื่อพัฒนาและต่อยอด <br>Startup ของคุณ ให้แข็งแกร่งมากยิ่งขึ้น</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <img src="@/assets/section/benefit/12.png" alt="" width="128px" class="section-logo">
                    <p class="subtitle benefit-subtitle">MSC StartUp Family</p>
                    <p class="heading benefit-heading">ร่วมเป็นส่วนหนึ่งใน MSC StartUp <br>ที่เป็นมากกว่าครอบครัวและคำแนะนำต่างๆ<br>จากเหล่าผู้เชี่ยวชาญมากประสบการณ์</p>
                  </div>
                </div>
              </nav>
            </div>
            <br>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'benefit',
    data: function () {
        return {
            color: 'is-primary'
        }
    }
    
}
</script>

<style scoped>
    .benefit-subtitle {
        margin-bottom: 0em!important;
        padding-bottom: 0.5em;
    }
    .benefit-heading {
        font-size: 0.8em;
    }
    .section-logo {
        margin-bottom: 1.2em;
    }
</style>

