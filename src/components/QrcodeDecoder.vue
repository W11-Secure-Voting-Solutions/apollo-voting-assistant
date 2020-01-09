<template>
    <div>
        <ElButton type="success" @click="callInput()">Get QR Code</ElButton>
        <label ref="inputFile" style="display: none">
            <QrcodeCapture ref="baba" @decode="onDecode"/>
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
export default class QrcodeDecoder extends Vue{
    @Action(actionTypes.QR_CODE) setQrCode;
    @Ref('inputFile') inputFile;

    callInput() {
        this.inputFile.click();
    }

    async onDecode(result) {
      console.log("[QR Code] New QR code decoded.");
      this.setQrCode(result);
        // console.log("[QR Code] QR code saved in a state.");
    }
};
</script>
