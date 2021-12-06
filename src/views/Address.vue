<template>
  <div>{{ route.params.address }}</div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "Address",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
