<template>
  <div class="w-full">
    <p class="mb-2">Last 10 Blocks Transactions</p>
    <transaction-list-table :list="transactionList" v-if="hasData" />
    <div v-if="!hasData" class="h-96 w-full">
      <text-loading-pulse />
    </div>
  </div>
</template>
<script>
import TransactionListTable from "@/components/TransactionListTable.vue";
import { ref, onMounted } from "vue";
import { getLatestTransactions } from "@/common/api";
import TextLoadingPulse from "../components/TextLoadingPulse.vue";
export default {
  name: "Transactions",
  components: {
    TransactionListTable,
    TextLoadingPulse,
  },
  setup() {
    const transactionList = ref([]);
    const hasData = ref(false);

    const getLatestTransactionData = () => {
      hasData.value = false;
      getLatestTransactions().then((data) => {
        transactionList.value = data.transactions;
        hasData.value = true;
      });
    };

    onMounted(() => {
      getLatestTransactionData();
    });

    return {
      transactionList,
      hasData,
    };
  },
};
</script>
