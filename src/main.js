import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
