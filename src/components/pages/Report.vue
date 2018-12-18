<template>

  <div>
    <!-- <article v-for="(register, idx) in registerData" :key="idx">
      <h1>{{ register.projectName }}</h1>
    </article> -->
    <b-table :data="registerData" :columns="columns"></b-table>
  </div>

</template>

<script>

import { db } from "@/main";

export default {
  name: 'Report',
  meta: { title: 'Report' },
  data() {
    return {
      msg: 'Metro Brain Based Challenge 2018',
      registerData: [],
      columns: [
        {
            field: 'projectName',
            label: 'Project Name',
        },
        {
            field: 'registerType',
            label: 'Project Type',
        },
        {
            field: 'description',
            label: 'Description',
        },
        {
            field: 'teamName',
            label: 'Team Name',
        },
        {
            field: 'phone',
            label: 'Phone',
        },
        {
            field: 'email',
            label: 'Email',
        },
        {
            field: 'teams',
            label: 'Team',
        },
      ]
    };
  },
  firestore() {
    db.collection("register").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            this.registerData.push(doc.data())
        });
    });

    // return {
    //   registerCollection: db.collection("register").get()
    // };

  }
};

</script>
<style scoped>
</style>
