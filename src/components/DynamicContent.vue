<template>
    <div>
        <ElButton type="primary" plain @click="swapComponent('QrcodeUploadField')">QR Code</ElButton>
        <ElButton type="primary" plain @click="swapComponent('BBQueryingButton')">Bulletin Board</ElButton>
        <component :is="currentComponent" />
    </div>
</template>

<script>
import QrcodeUploadField from "./QrcodeUploadField";
import BBQueryingButton from "./BBQueryingButton";
import { Vue, Component } from "vue-property-decorator";

@Component({
    components: {
        QrcodeUploadField,
        BBQueryingButton
    }
})
export default class DynamicContent extends Vue{
    currentComponent = 'QrcodeUploadField';

    swapComponent(component) {
        this.currentComponent = component;
    }
}
</script>

<style scoped>

</style>