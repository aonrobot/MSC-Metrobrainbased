<template>
    <button class="button is-warning is-focused" @click="registerModal()">
        <font-awesome-icon icon="drafting-compass" /> Register Now
    </button>
</template>

<script>

import { db } from "@/main";

const ModalForm = {
  props: [
    'teamName',
    'email',
    'phone',
    'projectName',
    'description',
    'registerType',
    'prefix1',
    'name1',
    'depart1',
    'prefix2',
    'name2',
    'depart2',
    'prefix3',
    'name3',
    'depart3',
    'prefix4',
    'name4',
    'depart4',
    'prefix5',
    'name5',
    'depart5'
  ],
  template: `
    <div class="modal-content">
        <header class="modal-card-head">
            <p class="modal-card-title">Register</p>
        </header>
        <section class="modal-card-body">

            <div class="columns">
                <!-- Left side -->
                <div class="column">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">เงื่อนไขในการสมัคร</p>
                            <p class="subtitle">Register Conditional</p>
                            <div class="content">
                                <ol>
                                    <li>
                                        ระหว่างการพิจารณาผลงาน ผู้ที่ส่งโครงการเข้าประกวดยินดีที่จะให้ข้อมูลรายละเอียดเพิ่มเติมเกี่ยวข้องกับผลงาน โดยทางทีมงาน Metro Brain-Based Challenge สามารถติดต่อไป ตามข้อมูลตามที่ผู้เข้าร่วมโครงการได้แจ้งไว้ในใบสมัคร
                                    </li>
                                    <li>
                                        ผลงานที่เข้าประกวดนำเสนอ จะต้องเป็นผลงานที่เกิดจากความคิด ตลอดจนพัฒนาและสร้างสรรค์ขึ้นโดยผู้ส่งผลงานเข้าประกวดเอง และมิได้นำผลงานของผู้อื่นส่งเข้าประกวดโดยมิได้รับอนุญาตหรือมิได้รับมอบอำนาจจากเจ้าของผลงานอย่างเป็นลายลักษณ์อีกษร รวมถึงต้องไม่กระทำการใดเพื่อให้ได้มาซึ่งผลงานโดยมิชอบด้วยกฎหมาย
                                    </li>
                                    <li>
                                        ขอสงวนสิทธิ์ในการไม่อนุญาตให้ผลงานเข้าประกวด ในกรณีที่มีความเห็นว่าผลงานที่ส่งเข้าประกวดไม่เหมาะสมกับวัตถุประสงค์หรือ เจตนารมณ์ของการประกวดในครั้งนี้
                                    </li>
                                    <li>
                                        ผู้เข้าประกวดต้องไม่เผยแพร่ผลงานและรายละเอียดด้านเทคนิคสู่สาธารณชน แต่จะเปิดเผยเฉพาะกับทีมงานที่มีส่วนเกี่ยวข้องกับการประกวด และคณะกรรมการซึ่งได้ลงนามหนังสือปกปิดความลับเท่านั้น
                                    </li>
                                    <li>
                                        ผู้เข้าประกวดต้องให้สิทธิ์ในการเผยแพร่ผลงานต่อสาธารณชน และสิทธิ์การเป็นเจ้าของลิขสิทธิ์ผลงานแก่บริษัท เมโทรซิสเต็มส์คอร์ปอเรชั่น จำกัด (มหาชน) เท่านั้น
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- Right side -->
                <!-- <div class="column">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">ขั้นตอนการสมัคร</p>
                            <p class="subtitle">Register Step</p>
                            <div class="content">
                            
                            </div>
                        </article>
                    </div>
                </div> -->
            </div>

            <b-field label="ชื่อทีม">
                <b-input
                    type="text"
                    ref="teamName"
                    :value="teamName"
                    v-model="teamNameM"                    
                    placeholder="​Team Name"
                    required>
                </b-input>
            </b-field>

            <label class="label">ประเภทการสมัคร</label>
            <b-field ref="registerType">
              <b-tooltip
                  label="
                    การพัฒนาวิธีการทำงานใหม่ เพื่อให้เกิดประสิทธิผลสูงสุด
                  "
                  position="is-right"
                  multilined>
                  <b-radio-button v-model="registerTypeM"
                      native-value="Process Innovation"
                      type="is-info">
                      <span>Process Innovation</span>
                  </b-radio-button>
              </b-tooltip>
              <b-tooltip
                  label="
                    การพัฒนาผลิตภัณฑ์ใหม่ การให้บริการหรือองค์ประกอบของผลิตภัณฑ์ที่ ตรงตามความต้องการของลูกค้า
                  "
                  position="is-right"
                  multilined>
                  <b-radio-button v-model="registerTypeM"
                      native-value="Bussiness Solution"
                      type="is-info">
                      <span>Bussiness Solution</span>
                  </b-radio-button>
              </b-tooltip>
              <b-tooltip
                  label="
                    การพัฒนารูปแบบธุรกิจใหม่ที่สร้างความสามารถในการแข้งขันขององค์กร
                  "
                  position="is-right"
                  multilined>
                  <b-radio-button v-model="registerTypeM"
                      native-value="Bussiness Model Innovation"
                      type="is-info">
                      <span>Bussiness Model Innovation</span>
                  </b-radio-button>
              </b-tooltip>
            </b-field>

            <b-field label="ชื่อ Project">
                <b-input
                    type="text"
                    :value="projectName"
                    ref="projectName"
                    v-model="projectNameM"                    
                    placeholder="Project Name"
                    required>
                </b-input>
            </b-field>
            
            <b-field label="รายละเอียดโครงการ">
                <b-input 
                    maxlength="200" 
                    type="textarea"
                    :value="description"
                    ref="description"
                    v-model="descriptionM"
                    placeholder="Description"
                    required>
                </b-input>
            </b-field>

            <label class="label">รายละเอียดของสมาชิกในทีม</label>
            <hr>
            <b-field grouped>
                <b-field label="คำนำหน้า">
                    <b-select v-model="prefix1M">
                        <option value="mr" selected="selected">นาย</option>
                        <option value="miss">นาง</option>
                        <option value="mrs">นางสาว</option>
                    </b-select>
                </b-field>
                <b-field label="ชื่อสมาชิกคนที่ 1" expanded>
                    <b-input :value="name1" v-model="name1M" ref="name1"></b-input>
                </b-field>
                <b-field label="แผนก/ฝ่าย/BU" expanded>
                    <b-input :value="depart1" v-model="depart1M"></b-input>
                </b-field>
            </b-field>

            <b-field grouped>
                <b-field label="คำนำหน้า">
                    <b-select v-model="prefix2M">
                        <option value="mr" selected="selected">นาย</option>
                        <option value="miss">นาง</option>
                        <option value="mrs">นางสาว</option>
                    </b-select>
                </b-field>
                <b-field label="ชื่อสมาชิกคนที่ 2" expanded>
                    <b-input :value="name2" v-model="name2M"></b-input>
                </b-field>
                <b-field label="แผนก/ฝ่าย/BU" expanded>
                    <b-input :value="depart2" v-model="depart2M"></b-input>
                </b-field>
            </b-field>

            <b-field grouped>
                <b-field label="คำนำหน้า">
                    <b-select v-model="prefix3M">
                        <option value="mr" selected="selected">นาย</option>
                        <option value="miss">นาง</option>
                        <option value="mrs">นางสาว</option>
                    </b-select>
                </b-field>
                <b-field label="ชื่อสมาชิกคนที่ 3" expanded>
                    <b-input :value="name3" v-model="name3M"></b-input>
                </b-field>
                <b-field label="แผนก/ฝ่าย/BU" expanded>
                    <b-input :value="depart3" v-model="depart3M"></b-input>
                </b-field>
            </b-field>

            <b-field grouped>
                <b-field label="คำนำหน้า">
                    <b-select v-model="prefix4M">
                        <option value="mr" selected="selected">นาย</option>
                        <option value="miss">นาง</option>
                        <option value="mrs">นางสาว</option>
                    </b-select>
                </b-field>
                <b-field label="ชื่อสมาชิกคนที่ 4" expanded>
                    <b-input :value="name4" v-model="name4M"></b-input>
                </b-field>
                <b-field label="แผนก/ฝ่าย/BU" expanded>
                    <b-input :value="depart4" v-model="depart4M"></b-input>
                </b-field>
            </b-field>

            <b-field grouped>
                <b-field label="คำนำหน้า">
                    <b-select v-model="prefix5M">
                        <option value="mr" selected="selected">นาย</option>
                        <option value="miss">นาง</option>
                        <option value="mrs">นางสาว</option>
                    </b-select>
                </b-field>
                <b-field label="ชื่อสมาชิกคนที่ 5" expanded>
                    <b-input :value="name5" v-model="name5M"></b-input>
                </b-field>
                <b-field label="แผนก/ฝ่าย/BU" expanded>
                    <b-input :value="depart5" v-model="depart5M"></b-input>
                </b-field>
            </b-field>
            <hr>

            <b-field label="อีเมล์ของหัวหน้าทีม">
                <b-input
                    type="email"
                    :value="email"
                    ref="email"
                    v-model="emailM"
                    placeholder="Your Email"
                    required>
                </b-input>
            </b-field>

            <b-field label="เบอร์ติดต่อของหัวหน้าทีม">
                <b-input
                    type="tel"
                    :value="phone"
                    ref="phone"
                    v-model="phoneM"
                    placeholder="Your Phone Number"
                    required>
                </b-input>
            </b-field>

            <b-field label="ยอมรับเงื่อนไข">
                <div class="block" ref="conditionAnswer">
                    <b-radio v-model="conditionRadio"
                        size="is-medium"
                        type="is-success"
                        native-value="agree">
                        Agree
                    </b-radio>
                    <b-radio v-model="conditionRadio" 
                        size="is-medium"
                        type="is-danger"
                        native-value="disagree">
                        Disagree
                    </b-radio>
                </div>
            </b-field>

        </section>
        <footer class="modal-card-foot">
            <button class="button" ref="closeBtn" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" type="submit" @click="addRegister()">Register</button>
        </footer>
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
  `,
  data: function() {
    return {
      teamNameM: this.teamName,
      projectNameM: this.projectName,
      descriptionM: this.description,
      registerTypeM: this.registerType,
      conditionRadio: this.conditionAnswer,

      prefix1M: this.prefix1,
      name1M: this.name1,
      depart1M: this.depart1,

      prefix2M: this.prefix2,
      name2M: this.name2,
      depart2M: this.depart2,

      prefix3M: this.prefix3,
      name3M: this.name3,
      depart3M: this.depart3,

      prefix4M: this.prefix4,
      name4M: this.name4,
      depart4M: this.depart4,

      prefix5M: this.prefix5,
      name5M: this.name5,
      depart5M: this.depart5,

      emailM: this.email,
      phoneM: this.phone,

      isLoading: false,
      isFullPage: true
    };
  },
  methods: {
    addRegister() {
      let data = {
        teamName: this.teamNameM,
        registerType: this.registerTypeM,
        conditionAnswer: this.conditionRadio,
        projectName: this.projectNameM,
        description: this.descriptionM,
        teams: {
          0: {
            prefix: this.prefix1M || '',
            fullName: this.name1M || '',
            department: this.depart1M || ''
          },
          1: {
            prefix: this.prefix2M || '',
            fullName: this.name2M || '',
            department: this.depart2M || ''
          },
          2: {
            prefix: this.prefix3M || '',
            fullName: this.name3M || '',
            department: this.depart3M || ''
          },
          3: {
            prefix: this.prefix4M || '',
            fullName: this.name4M || '',
            department: this.depart4M || ''
          },
          4: {
            prefix: this.prefix5M || '',
            fullName: this.name5M || '',
            department: this.depart5M || ''
          }
        },
        email: this.emailM,
        phone: this.phoneM
      };

      for (let d in data) {
        if(d == 'conditionAnswer') continue;
        if (data[d] == undefined) {
          this.alertError('Please fill out all field.');
          console.log(d);
          this.$nextTick(() => this.$refs[d].focus());
          this.isLoading = false;
          return 0;
        }
      }

      for (let d in data.teams) {
        if (!data.teams[d].fullName && !data.teams[d].department) {
          this.alertError("Please add mininum 1 person in team");
          this.$nextTick(() => this.$refs.name1.focus());
          this.isLoading = false;
          return 0;
        } else {
          break;
        }
      }

      if (data.conditionAnswer !== "agree")
      {
        this.alertError('Please Accept Condition');
        return 0;
      }
    
      console.log("send data", data);
      this.isLoading = true;
      
      // this.isLoading = true
      db.collection("register").add(data);

      setTimeout(() => {
        this.isLoading = false;
        this.success();
        this.$nextTick(() => this.$refs.closeBtn.click());
      }, 1 * 1000);

      console.log("data", data);
    },
    success() {
      this.$toast.open({
        message: "Register Success ขอบคุณครับ :)",
        type: "is-success"
      });
    },
    alertError(message) {
      this.$dialog.alert({
        title: "Error",
        message: message,
        type: "is-danger",
        hasIcon: true,
        icon: "exclamation-triangle",
        iconPack: "fas"
      });
    }
  }
};

export default {
    
  name: "RegisterModal",
  props: ['teamName', 'email', 'phone', 'projectName', 'description'],
  data() {
    return {
      //msg: "Metro Brain Base Challenge 2018"
    };
  },
  methods: {
    registerModal() {
      this.$modal.open({
        parent: this,
        component: ModalForm,
        width: 1060,
        hasModalCard: true
      });
    }
  }
};
</script>

<style scoped>

</style>
