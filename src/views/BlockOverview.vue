<template>
  <div class="overview">
    <!-- Start Block Overview -->
    <div>
      <p class="mb-2">Block Overview</p>
      <overview-tile title="Block" :content="blockHeight" />
      <overview-tile
        title="Timestamp"
        :content="`${timestampToDate(timestamp)}`"
        :has-data="hasData"
      />
      <overview-tile
        title="Block Hash"
        :content="block.hash"
        :has-data="hasData"
      />
      <overview-tile
        title="Parent Hash"
        :content="block.parentHash"
        :is-link="true"
        :has-data="hasData"
        @link-click="goToBlock(blockHeight - 1)"
      />
      <overview-tile
        title="Transactions"
        :content="`${transactionCount}`"
        :has-data="hasData"
      />
      <overview-tile
        title="Mined by"
        :content="block.miner"
        :is-link="true"
        :has-data="hasData"
        @link-click="goToAddress(block.miner)"
      />
      <overview-tile
        title="Total XI"
        :content="`${totalBlockValue(block)} XI`"
        :has-data="hasData"
      />
      <div></div>
    </div>
    <!-- End Block Overview -->
    <div></div>
    <!-- Start Transaction Table -->
    <div class="md:col-span-2">
      <p class="mb-2">Block Transactions</p>

      <transactions-table :list="block.transactions" v-if="hasData" />
      <div v-if="!hasData" class="h-96 w-full">
        <text-loading-pulse />
      </div>
    </div>
    <!-- End Transaction Table -->
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
import TextLoadingPulse from "../components/TextLoadingPulse.vue";
export default {
  name: "BlockOverview",
  components: {
    OverviewTile,
    TransactionsTable,
    TextLoadingPulse,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const block = ref({});
    const hasData = ref(false);
    const timestamp = computed(() => block.timestamp ?? 0);
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
    const getBlockInfoData = (height) => {
      hasData.value = false;
      getBlockInfo(height).then((data) => {
        console.log(data);
        block.value = data;
        hasData.value = true;
      });
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
        console.log(toParams);

        hasData.value = false;
        clearBlockData();

        getBlockInfoData(toParams.height);
      }
    );

    onMounted(async () => {
      getBlockInfoData(route.params.height);
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
      hasData,
      timestamp,
      hasData,
    };
  },
};
</script>
