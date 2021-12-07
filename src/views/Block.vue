<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <!-- Start Block Overview -->
    <div>
      <p class="mb-2">Block Overview</p>
      <overview-tile title="Block Height" :content="route.params.height" />
      <overview-tile
        title="Timestamp"
        :content="`${timestampToDate(block.timestamp)}`"
      />
      <overview-tile title="Block Hash" :content="block.hash" />
      <overview-tile
        title="Parent Hash"
        :content="block.parentHash"
        :is-link="true"
        @link-click="goToBlock(route.params.height - 1)"
      />
      <overview-tile title="Transactions" :content="`${transactionCount}`" />
      <overview-tile
        title="Mined by"
        :content="block.miner"
        :is-link="true"
        @link-click="goToAddress(block.miner)"
      />
      <overview-tile
        title="Total XI"
        :content="`${totalBlockValue(block)} XI`"
      />
      <div></div>
    </div>
    <!-- End Block Overview -->
    <div></div>
    <div class="md:col-span-2">
      <block-transactions-table :list="block.transactions" />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch } from "vue";
import { getBlock } from "@/common/blockchain";
import { useStore } from "vuex";
import { totalBlockValue } from "@/common/blockchain";
import { goToBlock, goToAddress } from "@/common/router";
import OverviewTile from "@/components/OverviewTile.vue";
import BlockTransactionsTable from "@/components/BlockTransactionsTable.vue";
import { timestampToDate } from "@/common/date";
export default {
  name: "Block",
  components: {
    OverviewTile,
    BlockTransactionsTable,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const block = ref({});
    const latestBlockHeight = computed(() => {
      return store.getters.latestBlockHeight;
    });
    const transactionCount = computed(() => {
      if (
        block.value.transactions === null ||
        block.value.transactions === undefined
      ) {
        return 0;
      }
      return block.value.transactions.length;
    });

    const clearBlockData = () => {
      block.value = {};
    };

    watch(
      () => route.params,
      async (toParams, prevParams) => {
        if (toParams.height === prevParams.height) {
          return;
        }

        clearBlockData();

        block.value = await getBlock(toParams.height);
      }
    );

    onMounted(async () => {
      block.value = await getBlock(route.params.height);
    });

    return {
      route,
      block,
      latestBlockHeight,
      transactionCount,
      totalBlockValue,
      goToBlock,
      goToAddress,
      timestampToDate,
    };
  },
};
</script>
