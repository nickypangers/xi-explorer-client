import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

library.add(faSearch);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
