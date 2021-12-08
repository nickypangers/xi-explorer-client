<template>
  <div class="w-full">
    <p class="mb-2">Last 10 Blocks</p>
    <block-list-table :list="blockList" />
  </div>
</template>
<script>
import BlockListTable from "@/components/BlockListTable.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Blocks",
  components: {
    BlockListTable,
  },
  setup() {
    const store = useStore();
    const blockList = computed(() => store.state.blockList);
    const options = [
      {
        title: "Block",
        key: "height",
      },
      {
        title: "Block",
        key: "height",
      },
      {
        title: "Block",
        key: "height",
      },
      {
        title: "Block",
        key: "height",
      },
    ];

    onMounted(() => {
      //   getLatestBlockList().then((data) => {
      //     blockList.value = data.blocks;
      //   });
    });

    return {
      blockList,
      options,
    };
  },
};
</script>
