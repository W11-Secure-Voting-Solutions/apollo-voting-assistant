<template>
  <div>
    <h1>Voting Assistant</h1>
    <DynamicContent />
  </div>
</template>

<script>
import DynamicContent from "./DynamicContent.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    DynamicContent
  }
})
export default class MainDashboard extends Vue {}
</script>
