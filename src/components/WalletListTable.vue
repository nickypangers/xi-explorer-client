<template>
  <table class="table-fixed w-full bg-white rounded">
    <thead class="hidden md:table-header-group bg-gray-200">
      <tr>
        <th>Address</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="wallet in list" class="border-t-2 border-secondary">
        <td title="Address:">
          <a class="link" @click="goToAddress(wallet.address)">{{
            wallet.address
          }}</a>
        </td>
        <td title="Balance:">{{ wallet.balance }} XI</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "WalletListTable",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {},
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
