<template>
  <div class="overview">
    <div>
      <p class="mb-2">Wallet Overview</p>
      <overview-tile title="Address" :content="address" />
      <overview-tile title="Balance" :content="`${balance} XI`" />
      <overview-tile title="Nonce" :content="`${nonce}`" />
    </div>
    <div></div>
    <div class="md:col-span-2">
      <transactions-table
        title="Last 10 Blocks Transactions"
        :list="transactionList"
      />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import OverviewTile from "@/components/OverviewTile.vue";
import { ref, onMounted, computed, watch } from "vue";
import { getAddressInfo } from "@/common/blockchain";
import TransactionsTable from "@/components/TransactionsTable.vue";
export default {
  name: "WalletOverview",
  components: {
    OverviewTile,
    TransactionsTable,
  },
  setup() {
    const route = useRoute();
    const addressInfo = ref({});

    const address = computed(() => route.params.address);
    const balance = computed(() => addressInfo.value.balance ?? 0);
    const transactionList = computed(
      () => addressInfo.value.transactionList ?? []
    );
    const nonce = computed(() => addressInfo.value.nonce ?? 0);

    const clearAddressData = () => {
      addressInfo.value = {};
    };

    watch(
      () => route.params,
      async (toParams, prevParams) => {
        if (toParams.address === null || toParams.address === undefined) {
          return;
        }

        if (toParams.address === prevParams.address) {
          return;
        }

        clearAddressData();

        addressInfo.value = await getAddressInfo(toParams.address);
      }
    );

    onMounted(() => {
      getAddressInfo(route.params.address).then(
        (data) => (addressInfo.value = data)
      );
    });

    return {
      route,
      address,
      addressInfo,
      balance,
      nonce,
      transactionList,
    };
  },
};
</script>
