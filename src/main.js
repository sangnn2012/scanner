import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/tailwind.css";
// import './styles.scss'

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
