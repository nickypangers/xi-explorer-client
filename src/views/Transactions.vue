<template>
  <div class="w-full">
    <p class="mb-2">Last 10 Blocks Transactions</p>
    <transaction-list-table :list="transactionList" />
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

    onMounted(() => {
      getLatestTransactions().then((data) => {
        transactionList.value = data.transactions;
      });
    });

    return {
      transactionList,
    };
  },
};
</script>
