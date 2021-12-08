<template>
  <div class="overview">
    <div>
      <p class="mb-2">Transaction Overview</p>
      <overview-tile title="Transaction Hash" :content="transactionHash" />
      <overview-tile title="Timestamp" :content="timestamp" />
      <overview-tile
        title="Block"
        :content="blockHeight"
        @link-click="goToBlock(blockHeight)"
        :is-link="true"
      />
      <overview-tile
        title="From"
        :content="from"
        @link-click="goToAddress(from)"
        :is-link="true"
      />
      <overview-tile
        title="To"
        :content="to"
        @link-click="goToAddress(to)"
        :is-link="true"
      />
      <overview-tile title="Memo" :content="memo" />
      <overview-tile title="Amount" :content="`${amount} XI`" />
    </div>
    <div>
      <p class="mb-2">Raw Data</p>
      <div class="w-full rounded bg-white text-sm p-3 break-words">
        <pre class="whitespace-pre-wrap">{{ transaction }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import OverviewTile from "@/components/OverviewTile.vue";
import { ref, computed, onMounted } from "vue";
import { getTransactionInfo } from "@/common/blockchain";
import { timestampToDate } from "@/common/date";
import { goToBlock, goToAddress } from "@/common/router";
export default {
  name: "Transaction",
  components: {
    OverviewTile,
  },
  setup() {
    const route = useRoute();
    const transactionHash = computed(() => route.params.hash);
    const blockHeight = computed(() => route.params.height);
    const transaction = ref({});
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
    };
  },
};
</script>
