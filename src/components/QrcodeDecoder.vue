<template>
    <label>
      <span>Get QR code</span>
      <qrcode-capture @decode="onDecode" style="display:none" />
    </label>
</template>

<script>
import { QrcodeCapture } from "vue-qrcode-reader";
import store from "../store/store";
import { async } from "q";

export default {
  name: "QrcodeDecoder",
  components: {
    QrcodeCapture
  },
  methods: {
    async onDecode(result) {
      this.result = result;
      console.log("[QR Code] New QR code decoded.");
      await store.dispatch("setQrCode", result);
      // console.log("[QR Code] QR code saved in a state.");
    }
  }
};
</script>

<style scoped >
label{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #f0f9eb;
  border: 1px solid #DCDFE6;
  border-color: #c2e7b0;
  color: #67C23A;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

}
label:hover{
    background:#67C23A;
    border-color:#67C23A;
    color:#FFF;
}
</style>