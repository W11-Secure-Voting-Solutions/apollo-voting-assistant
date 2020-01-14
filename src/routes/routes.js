import App from "../App.vue";
import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      meta: {
        title: "Voting Assistant"
      }
    }
 ],
 mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;