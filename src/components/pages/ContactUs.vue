<template>

    <div>
      <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
              <div class="tile is-parent">
              <article class="tile is-child">
                  <!-- <p class="is-size-3">Contact Us</p> -->
                  <img src="@/assets/title/contactus.png" alt="" width="25%">
              </article>
              </div>
          </div>
      </div>
      <div class="tile is-ancestor">
            <div class="tile is-vertical is-12">
                <div class="tile is-parent">
                <article class="tile is-child notification">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/5.png" width="200px"/>
                              <p class="heading coach-heading">ฐิตาภา ผ่องสุขสกุล</p>
                              <p class="heading">Business Process &<br> Risk Management</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/6.png" width="200px"/>
                              <p class="heading coach-heading">อริศรา เขียวสอาด</p>
                              <p class="heading">Financial Planing &<br> Analysis</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/3.png" width="200px"/>
                              <p class="heading coach-heading">กมลวรรณ สารพานิช</p>
                              <p class="heading">Finance Management</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/8.png" width="200px"/>
                              <p class="heading coach-heading">ณัฐวัฒน์ ดีโท้น</p>
                              <p class="heading">Building Management</p>
                            </div>
                        </div>
                    </nav>
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/2.png" width="200px"/>
                              <p class="heading coach-heading">ปริญา สุขอุทัย</p>
                              <p class="heading">General Procurement</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/7.png" width="200px"/>
                              <p class="heading coach-heading">วรางคณา สดุดีประเสริฐสุด</p>
                              <p class="heading">Internal Audit</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/4.png" width="200px"/>
                              <p class="heading coach-heading">ธนิดา อาจสุรินทร์</p>
                              <p class="heading">Management <br>Information Systems</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                              <img class="is-rounded" src="@/assets/coach/member/1.png" width="200px"/>
                              <p class="heading coach-heading">ศศิธร เรืองศรี</p>
                              <p class="heading">Financial Planing &<br> Analysis</p>
                            </div>
                        </div>
                    </nav>
                </article>
                </div>
            </div>
        </div>    
    </div>

</template>

<script>

export default {
  name: 'ContactUs',
  data() {
    return {

    };
  }
};

</script>
<style scoped>
  .coach-heading {
      margin-top: 1em;
      font-size: 1em;
      font-weight: bold;
  }
  .is-rounded {
    border-radius: 50%;
  }
</style>
