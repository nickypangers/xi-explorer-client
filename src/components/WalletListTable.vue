<template>
  <table class="table-fixed w-full bg-white rounded">
    <thead class="hidden md:table-header-group bg-gray-200">
      <tr>
        <th>Address</th>
        <th>Balance</th>
        <th>Percentage</th>
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
        <td title="Percentage:">{{ getPercentage(wallet.balance) }} XI</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { goToAddress } from "@/common/router";
export default {
  name: "WalletListTable",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const store = useStore();
    const circulatingSupply = computed(() => store.state.circulatingSupply);

    const getPercentage = (balance) => {
      const percentage = ((balance / circulatingSupply.value) * 100).toFixed(8);
      return `${percentage}%`;
    };

    return {
      getPercentage,
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
