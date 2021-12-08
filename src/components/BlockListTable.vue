<template>
  <table class="table-fixed w-full bg-white rounded">
    <thead class="hidden md:table-header-group">
      <tr>
        <th>Height</th>
        <th>Block Hash</th>
        <th>Miner</th>
        <th>Transactions</th>
        <th>Total XI</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="block in list" class="border-t-2 border-secondary">
        <td title="Height:">
          <a class="link" @click="goToBlock(block.height)">{{
            block.height
          }}</a>
        </td>
        <td title="Block Hash:">
          <a class="link" @click="goToBlock(block.height)">{{ block.hash }}</a>
        </td>
        <td title="Miner:">
          <a class="link" @click="goToAddress(block.miner)">{{
            block.miner
          }}</a>
        </td>
        <td title="Txns:">{{ block.transactions.length }}</td>
        <td title="Total XI:">{{ totalBlockValue(block).toFixed(5) }}</td>
        <td title="Age:">
          {{ displayBlockTimeSinceNowString(block.timestamp) }} ago
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { displayBlockTimeSinceNowString } from "@/common/date";
import { totalBlockValue } from "@/common/blockchain";
import { goToBlock, goToAddress } from "@/common/router";
export default {
  name: "BlockListTable",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
      displayBlockTimeSinceNowString,
      totalBlockValue,
      goToBlock,
      goToAddress,
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
