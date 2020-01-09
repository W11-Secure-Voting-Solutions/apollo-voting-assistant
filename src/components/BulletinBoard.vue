<template>
    <div>
        <b> {{ bulletinBoard }} </b>
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { getterTypes } from "../store/types";
import { Getter } from "vuex-class";

@Component({})
export default class BulletinBoard extends Vue {
    @Getter(getterTypes.GET_BULLETIN_BOARD) bulletinBoardContent;

    get bulletinBoard() {
        let contentBB = this.bulletinBoardContent;
        if (contentBB === undefined || contentBB === "") {
            contentBB = "No Bulletin Board Yet!";
        }
        return contentBB;
    }
}
</script>