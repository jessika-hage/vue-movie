import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@/index.css";
import router from "./router";
import './sass/variables.scss';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

