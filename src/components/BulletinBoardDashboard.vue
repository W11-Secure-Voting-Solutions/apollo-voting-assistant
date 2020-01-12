<template>
  <div>
    <BulletinBoard />
  </div>
</template>

<script>
import { get } from "../services/httpService.js";
import store from "../store/store";
import { Vue, Component } from "vue-property-decorator";
import BulletinBoard from "./BulletinBoard";

@Component({
  components: {
    BulletinBoard
  }
})
export default class BulletinBoardDashboard extends Vue {}
</script>
