<template>
  <div>
    <h3>Your QR Code</h3>
    <p class="decode-result">
      <b>"{{ qrCode }}"</b>
    </p>
    <QrcodeDecoder/>
  </div>
</template>

<script>
import QrcodeDecoder from "./QrcodeDecoder";
import store from "../store/store";

export default {
  name: "QrcodeUploadField",
  components: { QrcodeDecoder },
  computed: {
    qrCode: function() {
      let textToDisplay = this.$store.getters.qrCode;
      if (textToDisplay === undefined || textToDisplay === "") {
        textToDisplay = "No QR Code yet!";
      }
      return textToDisplay;
    }
  },
  // methods: {
  //   async onDecode(result) {
  //     this.result = result;
  //     console.log("[QR Code] New QR code decoded.");
  //     await store.dispatch("setQrCode", result);
  //     console.log("[QR Code] QR code saved in a state.");
  //   }
  // }
};
</script>
