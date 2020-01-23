<template>
  <div>
    <ElButton type="success" @click="callInput()">Get QR Code</ElButton>
    <label ref="inputFile" style="display: none">
      <QrcodeCapture @decode="onDecode" />
    </label>
  </div>
</template>

<script>
import { QrcodeCapture } from "vue-qrcode-reader";
import { Vue, Component, Ref } from "vue-property-decorator";
import { Action } from "vuex-class";
import { actionTypes } from "../store/types";

@Component({
  components: {
    QrcodeCapture
  }
})
export default class QrcodeDecoder extends Vue {
  @Action(actionTypes.SET_QR_CODE) setQrCode;
  @Action(actionTypes.SET_SESSION_ID) setSessionId;
  @Action(actionTypes.SET_K_RAND) setKRand;
  @Ref("inputFile") inputFile;

  callInput() {
    this.inputFile.click();
  }

  async onDecode(result) {
    console.log("[QR Code] New QR code decoded.");
    result = JSON.parse(result);
    if (this.isQRCodeValid(result)) {
      const sessionId = result.sessionId;
      const kRand = result.kRand;
      this.setSessionId(sessionId);
      this.setKRand(kRand);
      result = `Session ID: ${sessionId}`
    } else {
      result = "QR Code is invalid";
    }
    this.setQrCode(result);
    console.log("[QR Code] QR code saved in a state.");
  }
  
  isQRCodeValid(qrCodeContent) {
    return qrCodeContent.sessionId && qrCodeContent.kRand;
  }
}
</script>
