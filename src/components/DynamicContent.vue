<template>
  <div>
    <ElButton type="primary" plain @click="swapComponent('QrcodeUploadField')">QR Code</ElButton>
    <ElButton type="primary" plain @click="swapComponent('BulletinBoardDashboard')">Bulletin Board</ElButton>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import QrcodeUploadField from "./QrcodeUploadField";
import BulletinBoardDashboard from "./BulletinBoardDashboard";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    QrcodeUploadField,
    BulletinBoardDashboard
  }
})
export default class DynamicContent extends Vue {
  currentComponent = "QrcodeUploadField";

  swapComponent(component) {
    this.currentComponent = component;
  }
}
</script>

<style scoped>
</style>