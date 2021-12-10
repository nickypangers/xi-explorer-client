<template>
  <div class="w-full">
    <p class="mb-2">Last 10 Blocks Transactions</p>
    <transaction-list-table :list="transactionList" v-if="hasData" />
    <div v-if="!hasData">
      <p class="text-center">Loading Data</p>
    </div>
  </div>
</template>
<script>
import TransactionListTable from "@/components/TransactionListTable.vue";
import { ref, onMounted } from "vue";
import { getLatestTransactions } from "@/common/api";
export default {
  name: "Transactions",
  components: {
    TransactionListTable,
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
    }

    onMounted(() => {
      getLatestTransactionData();
    });

    return {
      transactionList,
      hasData
    };
  },
};
</script>
