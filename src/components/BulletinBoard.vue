<template>
  <div>
    <b>{{ bulletinBoard }}</b>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { getterTypes, actionTypes } from "../store/types";
import { Action, Getter } from "vuex-class";

@Component({})
export default class BulletinBoard extends Vue {
  @Getter(getterTypes.GET_BULLETIN_BOARD) bulletinBoardContent;
  @Getter(getterTypes.GET_BULLETIN_BOARD_REFRESH_INTERVAL)
  bulletinBoardRefreshInterval;
  @Action(actionTypes.FETCH_BULLETIN_BOARD) fetchBulletinBoard;

  BBQueryingInterval = null;

  get bulletinBoard() {
    let contentBB = this.bulletinBoardContent;
    if (contentBB === undefined || contentBB === "") {
      contentBB = "No Bulletin Board Yet!";
    }
    return contentBB;
  }

  async createQueryingJob() {
    this.BBQueryingInterval = await setInterval(
      this.fetchBulletinBoard,
      this.bulletinBoardRefreshInterval
    );
  }

  beforeDestroy() {
    clearInterval(this.BBQueryingInterval);
  }

  async created() {
    await this.createQueryingJob();
  }
}
</script>