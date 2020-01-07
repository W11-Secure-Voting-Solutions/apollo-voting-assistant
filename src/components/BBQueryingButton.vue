<template>
  <button @click="queryBulletinBoard">Query Bulletin Board</button>
</template>

<script>
import { get } from "../services/httpService.js";
import store  from "../store/store";

export default {
  data() {
    return {
      bulletinBoardURL: "https://reqres.in/api/users/2"//this.$store.getters.qrCode
    }
  },
  methods: {
    async queryBulletinBoard() {
      const response = await get(this.bulletinBoardURL);
      console.log(`Response ${JSON.stringify(response)}`)
      store.dispatch("setBulletinBoardContent", [response]);
      console.log(this.$store.getters.bulletinBoardContent);
      // TODO: add to the state and display it
    }
  }
};
</script>
