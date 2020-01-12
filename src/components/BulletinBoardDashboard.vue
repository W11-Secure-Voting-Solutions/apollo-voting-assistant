<template>
  <div>
    <BulletinBoard />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import BulletinBoard from "./BulletinBoard";

@Component({
  components: {
    BulletinBoard
  }
})
export default class BulletinBoardDashboard extends Vue {}
</script>
