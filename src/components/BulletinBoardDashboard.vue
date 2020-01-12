<template>
  <div>
    <BulletinBoard />
  </div>
</template>

<script>
import { get } from "../services/httpService.js";
import store from "../store/store";
import BulletinBoard from "./BulletinBoard";

export default {
  components: {
    BulletinBoard
  }
};
</script>
