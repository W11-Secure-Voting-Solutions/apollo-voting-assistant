<template>
    <div>
        <b> {{ bulletinBoard }} </b>
    </div>
</template>

<script>
import store from "../store/store";

export default {
    name: "BulletinBoard",
    computed: {
        bulletinBoard() {
            let contentBB = this.$store.getters.bulletinBoardContent;
            if (contentBB === undefined || contentBB === "") {
                contentBB = "No Bulletin Board Yet!";
            }
            return contentBB;
        }
    }
    
}
</script>