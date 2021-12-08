<template>
  <table class="table-fixed w-full bg-white rounded">
    <thead class="hidden md:table-header-group bg-gray-200">
      <tr>
        <th>Transaction Hash</th>
        <th>Block</th>
        <th>From</th>
        <th>To</th>
        <th>Amount XI</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in list" class="border-t-2 border-secondary">
        <td title="Transaction Hash:">
          <a
            class="link"
            @click="goToTransaction(transaction.block, transaction.hash)"
            >{{ transaction.hash }}</a
          >
        </td>
        <td title="Block:">
          <a class="link" @click="goToBlock(transaction.block)">{{
            transaction.block
          }}</a>
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
        <td title="Amount XI:">
          {{ transaction.amount }}
        </td>
        <td title="Age:">
          {{ displayBlockTimeSinceNowString(transaction.timestamp) }} ago
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { displayBlockTimeSinceNowString } from "@/common/date";
import { goToBlock, goToAddress, goToTransaction } from "@/common/router";
export default {
  name: "TransactionListTable",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
      displayBlockTimeSinceNowString,
      goToBlock,
      goToAddress,
      goToTransaction,
    };
  },
};
</script>
<style scoped>
th {
  @apply text-left font-normal;
}

th,
td {
  @apply p-2 text-sm truncate overflow-ellipsis w-full;
}

td {
  @apply block md:table-cell;
}

td::before {
  content: attr(title);
  @apply block md:hidden mb-2;
}
</style>
