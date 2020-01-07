<template>
  <div>
    <button @click="queryBulletinBoard">Query Bulletin Board</button>
  </div>
</template>

<script>
import { get } from "../services/httpService.js";
import store from "../store/store";

export default {
  methods: {
    async queryBulletinBoard() {
      console.log(`[Query Bulletin Board] Bulletin Board has been called!`);
      const bulletinBoardURL = this.$store.getters.bulletinBoardURL;
      let response = {
        "SID": "123456789",
        "title": "myTitle",
        "ballot": {
          "a": "1",
          "b": 2 
        },
        "r": "47012740928012",
      }
      // let response = await get(bulletinBoardURL);
      // response = response.data.data;
      console.log(
        `[Query Bulletin Board] Response: ${JSON.stringify(response)}.`
      );
      await store.dispatch("setBulletinBoardContent", response);

      console.log(
        `[Query Bulletin Board] Bulletin Board Content saved to the state.`
      );
    }
  }
};
</script>
