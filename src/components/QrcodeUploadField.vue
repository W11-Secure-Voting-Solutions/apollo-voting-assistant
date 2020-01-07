<template>
  <div>
    <h1>Test</h1>
    <p class="decode-result">
      Last result:
      <b>{{ result }}</b>
    </p>
    <qrcode-capture @decode="onDecode" />
  </div>
</template>

<script>
import { QrcodeCapture } from "vue-qrcode-reader";

export default {
  name: "QrcodeUploadField",
  components: { QrcodeCapture },

  data() {
    return {
      result: ""
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
    }
  }
};
</script>
