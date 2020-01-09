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
import { Vue, Component } from "vue-property-decorator";
import { getterTypes } from "../store/types";
import { Getter } from "vuex-class";

@Component({
  components: {
    QrcodeDecoder
  }
})
export default class QrcodeUploadField extends Vue{
  @Getter(getterTypes.GET_QR_CODE) getQrCode;

  get qrCode() {
      let textToDisplay = this.getQrCode;
      if (textToDisplay === undefined || textToDisplay === "") {
        textToDisplay = "No QR Code yet!";
      }
      return textToDisplay;
    }
  //   async onDecode(result) {
  //     this.result = result;
  //     console.log("[QR Code] New QR code decoded.");
  //     await store.dispatch("setQrCode", result);
  //     console.log("[QR Code] QR code saved in a state.");
  //   }

};
</script>
