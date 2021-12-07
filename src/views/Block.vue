<template>
  <div>
    <div class="w-full bg-white rounded p-4">
      <div>Height: {{ route.params.height }}</div>
      <div>Timestamp: {{ blockDate }}</div>
    </div>
    <pre>{{ block }}</pre>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { getBlock } from "@/common/blockchain";
import { useStore } from "vuex";
export default {
  name: "Block",
  setup() {
    const route = useRoute();
    const store = useStore();
    const block = ref({});
    const latestBlockHeight = computed(() => {
      return store.getters.latestBlockHeight;
    });
    const blockDate = computed(() => Date(block.value.timestamp).toISOString());

    onMounted(async () => {
      block.value = await getBlock(route.params.height);
    });

    return {
      route,
      block,
      latestBlockHeight,
      blockDate,
    };
  },
};
</script>
