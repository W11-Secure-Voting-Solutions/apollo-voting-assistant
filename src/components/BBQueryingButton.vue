<template>
  <div>
    <el-button type="primary" plain="" @click="queryBulletinBoard">Query Bulletin Board</el-button>
    <BulletinBoard/>
  </div>
</template>

<script>
import { get } from "../services/httpService.js";
import store from "../store/store";
import BulletinBoard from "./BulletinBoard"
export default {
  components: {
    BulletinBoard
  },
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
