<template>
    <div>
        <button @click="swapComponent('QrcodeUploadField')">QR Code</button>
        <button @click="swapComponent('BBQueryingButton')">Bulletin Board</button>
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
        BBQueryingButton
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