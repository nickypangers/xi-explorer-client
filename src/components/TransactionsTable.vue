<template>
  <div class="w-full">
    <table class="table-fixed w-full">
      <thead class="hidden md:table-header-group">
        <tr>
          <th class="rounded-tl">Tx Hash</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Memo</th>
          <th class="rounded-tr">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in list">
          <td title="Tx Hash:">
            <a
              class="link"
              @click="goToTransaction(transaction.block, transaction.hash)"
              >{{ transaction.hash }}</a
            >
          </td>
          <td title="Date:">
            {{ timestampToDate(transaction.timestamp) }}
          </td>
          <td title="From:">
            <a class="link" @click="goToAddress(transaction.from)">{{
              transaction.from
            }}</a>
          </td>
          <td title="To:">
            <a class="link" @click="goToAddress(transaction.to)">{{
              transaction.to
            }}</a>
          </td>
          <td title="Memo:">{{ transaction.memo }}</td>
          <td title="Amount:">{{ transaction.amount }} XI</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { timestampToDate } from "@/common/date";
import { goToAddress, goToTransaction } from "@/common/router";
import { onMounted } from "vue";
export default {
  name: "BlockTransactionsTable",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    onMounted(() => {});

    return {
      timestampToDate,
      goToAddress,
      goToTransaction,
    };
  },
};
</script>
<style scoped>
th {
  @apply text-left font-normal text-gray-600 bg-gray-100;
}

th,
td {
  @apply p-2 text-sm truncate overflow-ellipsis w-full;
}

td {
  @apply block md:table-cell text-gray-600;
}

td::before {
  content: attr(title);
  @apply block md:hidden mb-2 text-black;
}

tbody > tr {
  @apply bg-white border-t-2 border-secondary;
}
</style>
