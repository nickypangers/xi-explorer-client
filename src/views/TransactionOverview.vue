<template>
  <div class="overview">
    <div>
      <p class="mb-2">Transaction Overview</p>
      <overview-tile title="Transaction Hash" :content="transactionHash" />
      <overview-tile
        title="Timestamp"
        :content="timestamp"
        :has-data="hasData"
      />
      <overview-tile
        title="Block"
        :content="blockHeight"
        :is-link="true"
        :has-data="hasData"
        @link-click="goToBlock(blockHeight)"
      />
      <overview-tile
        title="From"
        :content="from"
        :is-link="true"
        :has-data="hasData"
        @link-click="goToAddress(from)"
      />
      <overview-tile
        title="To"
        :content="to"
        :is-link="true"
        :has-data="hasData"
        @link-click="goToAddress(to)"
      />
      <overview-tile title="Memo" :content="memo" :has-data="hasData" />
      <overview-tile
        title="Amount"
        :content="`${amount} XI`"
        :has-data="hasData"
      />
    </div>
    <div>
      <p class="mb-2">Raw Data</p>
      <div class="w-full rounded bg-white text-sm p-3 break-words">
        <pre class="whitespace-pre-wrap" v-if="hasData">{{ transaction }}</pre>
        <text-loading-pulse v-if="!hasData" />
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import OverviewTile from "@/components/OverviewTile.vue";
import { ref, computed, onMounted } from "vue";
import { getTransactionInfo } from "@/common/api";
import { timestampToDate } from "@/common/date";
import { goToBlock, goToAddress } from "@/common/router";
import TextLoadingPulse from "../components/TextLoadingPulse.vue";
export default {
  name: "TransactionOverview",
  components: {
    OverviewTile,
    TextLoadingPulse,
  },
  setup() {
    const route = useRoute();
    const transactionHash = computed(() => route.params.hash);
    const blockHeight = computed(() => route.params.height);
    const transaction = ref({});
    const hasData = ref(false);
    const from = computed(() => transaction.value.from ?? "");
    const to = computed(() => transaction.value.to ?? "");
    const amount = computed(() => transaction.value.amount ?? 0);
    const memo = computed(() => transaction.value.memo ?? "");
    const timestamp = computed(() =>
      transaction.value.timestamp
        ? timestampToDate(transaction.value.timestamp)
        : ""
    );

    onMounted(async () => {
      transaction.value = await getTransactionInfo(
        blockHeight.value,
        transactionHash.value
      );

      hasData.value = true;
    });

    return {
      route,
      transactionHash,
      blockHeight,
      transaction,
      from,
      to,
      memo,
      amount,
      timestamp,
      goToBlock,
      goToAddress,
      hasData,
    };
  },
};
</script>
