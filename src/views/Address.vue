<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div>
      <p class="mb-2">Wallet Overview</p>
      <overview-tile title="Address" :content="route.params.address" />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import OverviewTile from "@/components/OverviewTile.vue";
export default {
  name: "Address",
  components: {
    OverviewTile,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
