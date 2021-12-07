<template>
  <nav-bar />
  <div class="container p-3 md:p-0">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
