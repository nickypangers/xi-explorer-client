<template>
  <nav-bar />
  <div class="container p-3">
    <!-- Start Search Row -->
    <div class="pb-5">
      <search />
    </div>
    <!-- End Search Row -->
    <router-view :key="route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Search from "@/components/Search.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: {
    NavBar,
    Search,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const updateChainInfo = () => {
      store.dispatch("updateChainInfo");
      console.info("Updated chain info");
    };

    onMounted(() => {
      updateChainInfo();
      // Update chain info every 1 minute
      setInterval(() => {
        updateChainInfo();
      }, 1000 * 60);
    });

    return {
      route,
    };
  },
};
</script>
