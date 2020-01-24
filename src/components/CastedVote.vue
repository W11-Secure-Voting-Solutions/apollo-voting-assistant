<template>
  <div class="casted-vote">
    <p>{{signature}}</p>
    <textarea :value="signature" readonly/>
    <textarea :value="encryptedVote" readonly/>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class BulletinBoard extends Vue {
    @Prop(String) signature;
    @Prop(String) castCode;
    @Prop(String) encryptedVote;
}
</script>
