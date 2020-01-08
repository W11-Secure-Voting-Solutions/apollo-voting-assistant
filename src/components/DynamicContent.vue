<template>
    <div>
        <el-button type="primary" plain @click="swapComponent('QrcodeUploadField')">QR Code</el-button>
        <el-button type="primary" plain @click="swapComponent('BBQueryingButton')">Bulletin Board</el-button>
        <component :is="currentComponent" />
    </div>
</template>

<script>
import QrcodeUploadField from "./QrcodeUploadField";
import BBQueryingButton from "./BBQueryingButton";
export default {
    name: "DynamicContent",
    data() {
        return {
            currentComponent: 'QrcodeUploadField'
        };
    },
    components: {
        QrcodeUploadField,
        BBQueryingButton,
    },
    methods: {
        swapComponent(component) {
            this.currentComponent = component;
        }
    }
}
</script>

<style scoped>

</style>