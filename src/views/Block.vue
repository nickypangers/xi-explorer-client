<template>
  <div>
    <p>Block Height: {{ route.params }}</p>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "Block",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
