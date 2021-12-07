<template>
  <nav-bar />
  <div class="container p-3 md:p-0">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import store from "./store";
export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    onMounted(() => {
      store.dispatch("updateChainInfo");
      setInterval(() => {
        store.dispatch("updateChainInfo");
      }, 1000 * 60);
    });
  },
};
</script>
