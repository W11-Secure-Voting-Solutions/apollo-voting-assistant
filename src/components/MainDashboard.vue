<template>
  <div>
    <h1>Voting Assistant</h1>
    <b-b-querying-button/>
    <QrcodeUploadField />
  </div>
</template>

<script>
import QrcodeUploadField from "./QrcodeUploadField.vue";
import BBQueryingButton from "./BBQueryingButton.vue";

export default {
  name: "MainDashboard",
  components: {
    QrcodeUploadField, 
    BBQueryingButton
  }
};
</script>

<style>
</style>
