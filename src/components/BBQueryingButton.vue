<template>
  <div>
    <ElButton type="primary" @click="queryBulletinBoard">Query Bulletin Board</ElButton>
    <BulletinBoard />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { get } from "../services/httpService.js";
import BulletinBoard from "./BulletinBoard";
import { Action } from "vuex-class";
import { actionTypes } from "../store/types";

@Component({
  components: { BulletinBoard }
})
export default class BBQueryingButton extends Vue {
  @Action(actionTypes.FETCH_BULLETIN_BOARD) fetchBulletinBoard;

  async queryBulletinBoard() {
    console.log(`[Query Bulletin Board] Bulletin Board has been called!`);
    // TODO: Decide if we 
    // const response = await this.fetchBulletinBoard();
    // console.log(
    //   `[Query Bulletin Board] Response: ${JSON.stringify(response)}.`
    // );

    console.log(
      `[Query Bulletin Board] Bulletin Board Content saved to the state.`
    );
  }
}
</script>
