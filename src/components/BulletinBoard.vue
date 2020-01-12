<template>
  <div>
    <b>{{ bulletinBoard }}</b>
  </div>
</template>

<script>
import store from "../store/store";
import { queryBulletinBoard } from "../services/bulletinBoardService.js";

export default {
  name: "BulletinBoard",
  computed: {
    bulletinBoard() {
      let contentBB = this.$store.getters.bulletinBoardContent;
      if (contentBB === undefined || contentBB === "") {
        contentBB = "No Bulletin Board Yet!";
      }
      return contentBB;
    }
  },
  data() {
    return {
      BBQueryingInterval: null,
      intervalTime: 5000
    };
  },
  methods: {
    async pollData() {
      this.BBQueryingInterval = await setInterval(
        queryBulletinBoard,
        this.intervalTime
      );
    }
  },
  beforeDestroy() {
    clearInterval(this.BBQueryingInterval);
  },
  async created() {
    await this.pollData();
  }
};
</script>