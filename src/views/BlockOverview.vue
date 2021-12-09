<template>
  <div class="overview">
    <!-- Start Block Overview -->
    <div>
      <p class="mb-2">Block Overview</p>
      <overview-tile title="Block" :content="blockHeight" />
      <overview-tile
        title="Timestamp"
        :content="`${timestampToDate(block.timestamp)}`"
      />
      <overview-tile title="Block Hash" :content="block.hash" />
      <overview-tile
        title="Parent Hash"
        :content="block.parentHash"
        :is-link="true"
        @link-click="goToBlock(blockHeight - 1)"
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
      <transactions-table
        title="Block Transactions"
        :list="block.transactions"
      />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch } from "vue";
import { getBlockInfo } from "@/common/api";
import { useStore } from "vuex";
import { totalBlockValue } from "@/common/blockchain";
import { goToBlock, goToAddress, goToTransaction } from "@/common/router";
import OverviewTile from "@/components/OverviewTile.vue";
import TransactionsTable from "@/components/TransactionsTable.vue";
import { timestampToDate } from "@/common/date";
export default {
  name: "BlockOverview",
  components: {
    OverviewTile,
    TransactionsTable,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const block = ref({});
    const blockHeight = computed(() => route.params.height);
    const latestBlockHeight = computed(() => {
      return store.getters.latestBlockHeight;
    });
    const transactionCount = computed(() =>
      block.value.transactions ? block.value.transactions.length : 0
    );

    const clearBlockData = () => {
      block.value = null;
    };

    watch(
      () => route.params,
      async (toParams, prevParams) => {
        if (toParams.hash != null) {
          return goToTransaction(toParams.height, toParams.hash);
        }

        if (toParams.height === null || toParams.height === undefined) {
          return;
        }
        if (toParams.height === prevParams.height) {
          return;
        }

        clearBlockData();

        block.value = await getBlockInfo(toParams.height);
      }
    );

    onMounted(async () => {
      block.value = await getBlockInfo(route.params.height);
    });

    return {
      route,
      blockHeight,
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
